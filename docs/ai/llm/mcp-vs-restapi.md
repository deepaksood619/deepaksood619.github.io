# MCP vs REST API

| Aspect              | Traditional APIs (REST/GraphQL)                                                    | Model Context Protocol (MCP)                          |
| ------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **What it is**      | Interface styles (REST, GraphQL) with optional spec formats (OpenAPI, GraphQL SDL) | Standardized protocol with enforced message structure |
| **Designed for**    | Human developers writing code                                                      | AI agents making decisions                            |
| **Data location**   | REST: Path, headers, query params, body (multiple formats)                         | Single JSON input/output per tool                     |
| **Discovery**       | Static docs, regenerate SDKs for changes                                           | Runtime introspection (`tools/list`)                  |
| **Execution**       | LLM generates HTTP requests (error-prone)                                          | LLM picks tool, deterministic code runs               |
| **Direction**       | Typically client-initiated; server-push exists but not standardized                | Bidirectional as first-class feature                  |
| **Local access**    | Requires port, auth, CORS setup                                                    | Native stdio support for desktop tools                |
| **Training target** | Impractical at scale due to heterogeneity                                          | Single protocol enables model fine-tuning             |

## The HTTP API Problem

HTTP APIs suffer from combinatorial chaos. To send data to an endpoint, you might encode it in:

- URL path (`/users/123`)
- Request headers (`X-User-Id: 123`)
- Query parameters (`?userId=123`)
- Request body (JSON, XML, form-encoded, CSV)

OpenAPI/Swagger documents these variations, but as a specification format, it describes existing patterns rather than enforcing consistency. Building automated tools to reliably use arbitrary APIs remains hard because HTTP wasn't designed for this—it was the only cross-platform, firewall-friendly transport universally available from browsers.

## MCP: A Wire Protocol, Not Documentation

Model Context Protocol (MCP) isn't another API standard—it's a wire protocol that enforces consistency. While OpenAPI documents existing interfaces with their variations, MCP mandates specific patterns: JSON-RPC 2.0 transport, single input schema per tool, deterministic execution.

Key architecture:

- **Transport**: stdio (local) or [streamable HTTP](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http)
- **Discovery**: `tools/list`, `resources/list` expose capabilities at runtime
- **Primitives**: Tools (actions), Resources (read-only data), Prompts (templates)

## Why Not Just Use OpenAPI?

The most common question: "Why not extend OpenAPI with AI-specific features?"

Three reasons:

1. **OpenAPI describes; MCP prescribes**. You can't fix inconsistency by documenting it better—you need enforcement at the protocol level.
2. **Retrofitting fails at scale**. OpenAPI would need to standardize transport, mandate single-location inputs, require specific schemas, add bidirectional primitives—essentially becoming a different protocol.
3. **The ecosystem problem**. Even if OpenAPI added these features tomorrow, millions of existing APIs wouldn't adopt them. MCP starts fresh with AI-first principles.

## Five Fundamental Differences

### 1. Runtime Discovery vs Static Specs

**API**: Ship new client code when endpoints change
**MCP**: Agents query capabilities dynamically and adapt automatically

```python
// MCP discovery - works with any server
client.request('tools/list')
// Returns all available tools with schemas
```

### 2. Deterministic Execution vs LLM-Generated Calls

**API**: LLM writes the HTTP request → hallucinated paths, wrong parameters
**MCP**: LLM picks which tool → wrapped code executes deterministically

This distinction is critical for production safety. With MCP, you can test, sanitize inputs, and handle errors in actual code, not hope the LLM formats requests correctly.

### 3. Bidirectional Communication

**API**: Server-push exists (WebSockets, SSE, GraphQL subscriptions) but lacks standardization
**MCP**: Bidirectional communication as first-class feature:

- Request LLM completions from server
- Ask users for input ([elicitation](https://modelcontextprotocol.io/specification/draft/client/elicitation))
- Push progress notifications

### 4. Single-Request Human Tasks

REST APIs fragment human tasks across endpoints. Creating a calendar event might require:

1. `POST /events` (create)
2. `GET /conflicts` (check)
3. `POST /invitations` (notify)

MCP tools map to complete workflows. One tool, one human task.

### 5. Local-First by Design

**API**: Requires HTTP server (port binding, CORS, auth headers)
**MCP**: Can run as local process via stdio—no network layer needed

Why this matters: When MCP servers run locally via stdio, they inherit the host process's permissions.

This enables:

- Direct filesystem access (read/write files)
- Terminal command execution
- System-level operations

**NOTE -** A local HTTP server could provide the same capabilities. However, I think the fact that MCP led with`stdio` transport planted the idea that MCP servers are meant to be as local services, which is not how we typically think of APIs.

## The Training Advantage

MCP's standardization creates a future opportunity: models could be trained on a single, consistent protocol rather than thousands of API variations. While models today use MCP through existing function-calling capabilities, the protocol's uniformity offers immediate practical benefits:

**Consistent patterns across all servers:**

- Discovery: `tools/list`, `resources/list`, `prompts/list`
- Execution: `tools/call` with single JSON argument object
- Errors: Standard JSON-RPC format with numeric codes

**Reduced cognitive load for models:**

```json
// Every MCP tool follows the same pattern:
{
  "method": "tools/call",
  "params": {
    "name": "github.search_prs",
    "arguments": {"query": "security", "state": "open"}
  }
}

// Versus REST APIs with endless variations:
// GET /api/v2/search?q=security&type=pr
// POST /graphql {"query": "{ search(query: \"security\") { ... } }"}
// GET /repos/owner/repo/pulls?state=open&search=security
```

This standardization means models need to learn one calling convention instead of inferring patterns from documentation. As MCP adoption grows, future models could be specifically optimized for the protocol, similar to how models today are trained on function-calling formats.

## They're Layers, Not Competitors

Most MCP servers wrap existing APIs:

```bash
[AI Agent] ⟷ MCP Client ⟷ MCP Server ⟷ REST API ⟷ Service
```

The `mcp-github` server translates `repository/list` into GitHub REST calls. You keep battle-tested infrastructure while adding AI-friendly ergonomics.

## Real-World Example

Consider a task: "Find all pull requests mentioning security issues and create a summary report."

**With OpenAPI/REST**:

1. LLM reads API docs, generates: `GET /repos/{owner}/{repo}/pulls?state=all`
2. Hopes it formatted the request correctly
3. Parses response, generates: `GET /repos/{owner}/{repo}/pulls/{number}`
4. Repeats for each PR (rate limiting issues)
5. Generates search queries for comments
6. Assembles report

**With MCP**

1. LLM calls: `github.search_issues_and_prs({query: "security", type: "pr"})`
2. Deterministic code handles pagination, rate limits, error retry
3. Returns structured data
4. LLM focuses on analysis, not API mechanics

## The Bottom Line

HTTP APIs evolved to serve human developers and browser-based applications, not AI agents. MCP addresses AI-specific requirements from the ground up: runtime discovery, deterministic execution, and bidirectional communication.

For AI-first applications, MCP provides structural advantages—local execution, server-initiated flows, and guaranteed tool reliability—that would require significant workarounds in traditional API architectures. The practical path forward involves using both: maintaining APIs for human developers while adding MCP for AI agent integration.

[Why AI Agents Need a New Protocol \| Glama](https://glama.ai/blog/2025-06-06-mcp-vs-api)

## Question Prompt

**How is mcp different from rest api, even rest api can be called via llm and endpoints discovered using /doc /redoc, etc**

You’re right that an LLM can technically call a REST API if you provide it with documentation (like OpenAPI/Swagger). However, the difference between a REST API and the **Model Context Protocol (MCP)** is similar to the difference between a **website** (made for humans to browse) and a **USB port** (made for hardware to plug-and-play).

While REST is a general-purpose communication pattern, MCP is an **AI-orchestration protocol**. Here is how they differ in practice:

## 1. Discovery vs. Documentation

- **REST API:** Discovery is **manual**. Even with `/docs`, a human developer usually has to read the Swagger UI, understand the auth headers, and then write "glue code" or a specific prompt to tell the LLM how to use it.
- **MCP:** Discovery is **native and automatic**. When an MCP client connects to a server, the server immediately sends a structured list of every tool, resource, and prompt template it has. The LLM doesn't just "see" an endpoint; it receives a strictly typed schema that it is pre-trained to understand as a function call.

## 2. The "M × N" Problem

This is the strongest argument for MCP.

- **REST:** If you have **5 LLMs** and **10 internal tools**, you might have to write and maintain **50 different integrations** (because each LLM provider handles "tool use" slightly differently in their SDKs).
- **MCP:** You build **one MCP Server** for your tool. Any MCP-compatible LLM (Claude, IDEs like Cursor/Windsurf, or custom agents) can plug into it instantly. It standardizes the "handshake" between the model and the data.

## 3. Beyond "Request-Response" (State & Context)

REST is stateless by design. MCP introduces concepts specifically for the "brain" of the AI:

- **Resources:** Unlike a REST endpoint that just returns data, an MCP Resource is a standardized way to "attach" a file, a database row, or a log stream directly into the LLM's context window.
- **Prompts:** MCP servers can serve **Prompt Templates**. A server doesn't just give the LLM data; it can give the LLM "instructions" on how to think about that data (e.g., a "Security Review" prompt template stored on the server).
- **Sampling:** MCP allows for "Sampling," where the **Server** can actually ask the **LLM** to perform a task. In REST, the server is passive; in MCP, it's a bidirectional conversation.

## 4. Architectural Layering

It’s helpful to view them as layers rather than competitors:

- **REST/gRPC/SQL:** The **Infrastructure Layer** (where the data actually lives).
- **MCP:** The **Translation Layer** (the "Smart Wrapper").
- **LLM:** The **Cognitive Layer** (the user interface).

| **Feature**          | **REST API**                     | **MCP**                      |
| -------------------- | -------------------------------- | ---------------------------- |
| **Primary Audience** | Human Developers                 | AI Models/Agents             |
| **Interface**        | URL Endpoints (GET/POST)         | Tools, Resources, & Prompts  |
| **Contract**         | OpenAPI / Swagger (optional)     | JSON-RPC 2.0 (mandatory)     |
| **State**            | Stateless                        | Stateful (Context-aware)     |
| **Integration**      | Custom "glue code" for every app | Plug-and-play via MCP Client |

## Links

- [Why AI Agents Need a New Protocol \| Glama](https://glama.ai/blog/2025-06-06-mcp-vs-api)
- [Could you explain how MCPs are different (and better?) than using APIs for external services in a way that makes sense?](https://www.reddit.com/r/mcp/comments/1kkyajj/could_you_explain_how_mcps_are_different_and/)
- [What's the difference of using an API vs an MCP?](https://www.reddit.com/r/mcp/comments/1iztbrc/whats_the_difefrence_of_using_an_api_vs_an_mcp/)
- [A Deep Dive Into MCP and the Future of AI Tooling \| Andreessen Horowitz](https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/)
- [Still Confused About How MCP Works? Here's the Explanation That Finally Made it Click For Me](https://www.reddit.com/r/ClaudeAI/comments/1ioxu5r/still_confused_about_how_mcp_works_heres_the/)
