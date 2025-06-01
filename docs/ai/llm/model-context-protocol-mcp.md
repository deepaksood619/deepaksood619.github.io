# Model Context Protocol (MCP)

A protocol for seamless integration between LLM applications and external data sources.

The Model Context Protocol (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to connect LLMs with the context they need.

MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

## Why MCP?

MCP helps you build agents and complex workflows on top of LLMs. LLMs frequently need to integrate with data and tools, and MCP provides:

- A growing list of pre-built integrations that your LLM can directly plug into
- The flexibility to switch between LLM providers and vendors
- Best practices for securing your data within your infrastructure

## General Architecture

At its core, MCP follows a client-server architecture where a host application can connect to multiple servers:

![MCP Architecture](../../media/Screenshot%202025-05-30%20at%2011.53.06%20PM.jpg)

- **MCP Hosts**: Programs like Claude Desktop, IDEs, or AI tools that want to access data through MCP
- **MCP Clients**: Protocol clients that maintain 1:1 connections with servers
- **MCP Servers**: Lightweight programs that each expose specific capabilities through the standardized Model Context Protocol
- **Local Data Sources**: Your computer’s files, databases, and services that MCP servers can securely access
- **Remote Services**: External systems available over the internet (e.g., through APIs) that MCP servers can connect to

## How MCP Works

![how-mcp-works](../../media/Screenshot%202025-06-01%20at%201.07.13%20PM.jpg)

[How Model Context Protocol (MCP) Works](https://blog.bassemdy.com/2025/04/12/mcp/model-context-protocol/programming/llm/ai/how-model-context-protocol-mcp-works.html)

## Getting Started

[For Claude Desktop Users - Model Context Protocol](https://modelcontextprotocol.io/quickstart/user)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/deepaksood/Desktop",
        "/Users/deepaksood/Downloads"
      ]
    },
    "memory": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-memory"
        ]
      }
    }
  }
}
```

## Servers

### Memory

Knowledge Graph Memory Server - [servers/src/memory at main · modelcontextprotocol/servers · GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)

- A basic implementation of persistent memory using a local knowledge graph. This lets Claude remember information about the user across chats.
- [Collaborate with Claude on Projects \\ Anthropic](https://www.anthropic.com/news/projects)

[GitHub - qdrant/mcp-server-qdrant: An official Qdrant Model Context Protocol (MCP) server implementation](https://github.com/QDrant/mcp-server-qdrant)

- [mcp-server-qdrant \| Glama](https://glama.ai/mcp/servers/@qdrant/mcp-server-qdrant)

[GitHub - doobidoo/mcp-memory-service: MCP server providing semantic memory and persistent storage capabilities for Claude using ChromaDB and sentence transformers.](https://github.com/doobidoo/mcp-memory-service)

[Introducing OpenMemory MCP](https://mem0.ai/openmemory-mcp)

[Unlock Claude's Memory: Knowledge Graph MCP Server Tutorial - YouTube](https://www.youtube.com/watch?v=qeru0ZdudD4)

### Obsidian

- [Obsidian MCP server + VScode Agent + Claude - YouTube](https://www.youtube.com/watch?v=BPGsl62rV-c)
- [Let Claude Automate Your Obsidian Notes: Second Brain AI Agent (MCP) - YouTube](https://www.youtube.com/watch?v=VeTnndXyJQI)
- [GitHub - MarkusPfundstein/mcp-obsidian: MCP server that interacts with Obsidian via the Obsidian rest API community plugin](https://github.com/MarkusPfundstein/mcp-obsidian)
- [Obsidian MCP servers: experiences and recommendations? - Help - Obsidian Forum](https://forum.obsidian.md/t/obsidian-mcp-servers-experiences-and-recommendations/99936/6)
- [Automate Note Generation in Obsidian with Claude Desktop and MCP Servers - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/automate-note-generation-in-obsidian-with-claude-desktop-and-mcp-servers/99542)
- [GitHub - StevenStavrakis/obsidian-mcp: A simple MCP server for Obsidian](https://github.com/StevenStavrakis/obsidian-mcp)
- [Mind blown: MCP + Obsidian : r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1hdl0cl/mind_blown_mcp_obsidian/)
- [Writing 2,000 words in 90 minutes with Obsidian + MCP + Claude.](https://www.haihai.ai/obsidian-mcp/)
- [AI in Obsidian: Local LLM Setup Guide in CoPilot - YouTube](https://www.youtube.com/watch?v=hOaSO_e7MYs)

### Others

- [servers/src/sequentialthinking at main · modelcontextprotocol/servers · GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)
	- tell me in 1 sentence about me, that I don't know myself. think deeply before giving answer
- [servers/src/everything at main · modelcontextprotocol/servers · GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/everything)

## Resources

- [Model Context Protocol · GitHub](https://github.com/modelcontextprotocol)
- [GitHub - punkpeye/awesome-mcp-servers: A collection of MCP servers.](https://github.com/punkpeye/awesome-mcp-servers)
- [Awesome MCP Servers](https://mcpservers.org/)
	- [MCP servers \| Glama](https://glama.ai/mcp/servers)
- [Top 5 MCP Servers to Automate Daily Tasks and Workflows with Prompts \| by Pedro Aquino \| Medium](https://medium.com/@pedro.aquino.se/top-5-mcp-servers-to-automate-daily-tasks-and-workflows-with-prompts-039fe50570fd)
- [GitHub - wong2/awesome-mcp-servers: A curated list of Model Context Protocol (MCP) servers](https://github.com/wong2/awesome-mcp-servers)

## Links

- [The Model Context Protocol (MCP) Explained (and one cool code example.) - YouTube](https://www.youtube.com/watch?v=5ZWeCKY5WZE&ab_channel=Underfitted)
- [Is MCP Becoming The Next BIG Thing in AI - YouTube](https://www.youtube.com/watch?v=japoGcdbZGw&ab_channel=RobShocks)
- [What is MCP & why it's a big (huge) deal: Detailed explanation for both… \| John Rush \| 10 comments](https://www.linkedin.com/posts/johnrushx_what-is-mcp-why-its-a-big-huge-deal-activity-7303421262440112129-iJWV)
- [Building Agents with Model Context Protocol - Full Workshop with Mahesh Murag of Anthropic - YouTube](https://www.youtube.com/watch?v=kQmXtrmQ5Zg&ab_channel=AIEngineer)
- [What is Model Context Protocol (MCP)? How it simplifies AI integrations compared to APIs \| AI Agents That Work](https://norahsakal.com/blog/mcp-vs-api-model-context-protocol-explained/)
- [🦸🏻#14: What Is MCP, and Why Is Everyone – Suddenly!– Talking About It?](https://huggingface.co/blog/Kseniase/mcp)
- [What is MCP? No, Really! - YouTube](https://www.youtube.com/watch?v=5zL__Rmk4fs)
- [Get Started With The Model Context Protocol // 2-Minute Tutorial - YouTube](https://www.youtube.com/watch?v=MC2BwMGFRx4)
- [ChatGPT Supports MCP Server Finally! - YouTube](https://www.youtube.com/watch?v=-P1qZo0plEg)
