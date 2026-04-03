# Frontend / UI - Frameworks / Libraries

- [GitHub - CopilotKit/CopilotKit: The Frontend Stack for Agents & Generative UI. React + Angular. Makers of the AG-UI Protocol · GitHub](https://github.com/copilotkit/copilotkit)
- [GitHub - assistant-ui/assistant-ui: Typescript/React Library for AI Chat💬🚀 · GitHub](https://github.com/assistant-ui/assistant-ui)
	- [Chain of Thought \| assistant-ui](https://www.assistant-ui.com/docs/guides/chain-of-thought)
- [GitHub - ibelick/prompt-kit: Core building blocks for AI apps. High-quality, accessible, and customizable components for AI interfaces. · GitHub](https://github.com/ibelick/prompt-kit)
	- [prompt-kit](https://www.prompt-kit.com/)
	- [Chat UI components for React AI apps - prompt-kit](https://www.prompt-kit.com/chat-ui)
- [GitHub - langchain-ai/agent-chat-ui: 🦜💬 Web app for interacting with any LangGraph agent (PY & TS) via a chat interface. · GitHub](https://github.com/langchain-ai/agent-chat-ui)
	- [Introducing Agent Chat UI - YouTube](https://www.youtube.com/watch?v=lInrwVnZ83o)
	- [Chat LangChain](https://chat.langchain.com/)
- [Recommendations for Open Source AI Chat UI?](https://www.reddit.com/r/react/comments/1q6745g/recommendations_for_open_source_ai_chat_ui/)
	- BotUI – lightweight, vanilla JS, easy to embed, good for simple sites
	- Chat UI Kit (React) – polished, customizable, built for AI chat, works with LLM backends
	- React Chat UI/Stream Chat UI – advanced React components, multi-conversation support. 
	- Tails UI (Tailwind) – highly customizable for designers, needs manual setup. 
	- Chatwoot/CometChat UI Kits – good for multi-user or support chat setups
	- **Choose based on your stack:** BotUI for plain JS, Chat UI Kit or React Chat UI for React, Tails UI for Tailwind-heavy custom design, and Stream/Chatwootmulti-user apps.
- [GitHub - ag-ui-protocol/ag-ui: AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications. · GitHub](https://github.com/ag-ui-protocol/ag-ui)
	- AG-UI is an open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications. Built for simplicity and flexibility, it enables seamless integration between AI agents, real time user context, and user interfaces.
	- [Demo Viewer by CopilotKit](https://dojo.ag-ui.com/)
	- [Haiku Generator](https://agui-demo.vercel.app/)

## open-webui / openwebui / open webui (103K stars)

Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline. It supports various LLM runners like Ollama and OpenAI-compatible APIs, with built-in inference engine for RAG, making it a powerful AI deployment solution.

[GitHub - open-webui/open-webui: User-friendly AI Interface (Supports Ollama, OpenAI API, ...)](https://github.com/open-webui/open-webui) ⭐ 129k

OpenWebUI, it provides a universal chat like interface for using any models via Ollama. We can add prompt templates and use the chat for our purpose. It is a solution for using LLMs but not allowing the parent companies to collect the data. It is based on Open-AI's api so integrating other models would be a challenge.

- [Open WebUI](https://docs.openwebui.com/openapi-servers/mcp/)
- [GitHub - open-webui/mcpo: A simple, secure MCP-to-OpenAPI proxy server](https://github.com/open-webui/mcpo) ⭐ 4.1k

### Alternative

- [librechat.ai](https://www.librechat.ai/)
	- [GitHub - danny-avila/LibreChat: Enhanced ChatGPT Clone: Features Agents, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-4o, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active project.](https://github.com/danny-avila/LibreChat) ⭐ 35k
- [GitHub - mckaywrigley/chatbot-ui: AI chat for any model. · GitHub](https://github.com/mckaywrigley/chatbot-ui)
- [GitHub - bdeekshith066/Chatbot\_Hub: A collection of 10+ chatbot types, from keyword-based and rule-based to AI-powered models. Explore various implementations for building intelligent chat interfaces and virtual assistants. · GitHub](https://github.com/bdeekshith066/Chatbot_Hub)
- [llm-examples.streamlit.app/Chat\_with\_user\_feedback](https://llm-examples.streamlit.app/Chat_with_user_feedback)
- [GitHub - CopilotKit/CopilotKit: The Frontend Stack for Agents & Generative UI. React + Angular. Makers of the AG-UI Protocol · GitHub](https://github.com/copilotkit/copilotkit)
	- [How to add a frontend UI to your LangGraph agent with CopilotKit - YouTube](https://www.youtube.com/watch?v=oROihYsbXos)
	- [CopilotKit \| The Agentic Framework for In-App AI Copilots](https://www.copilotkit.ai/)

### oobabooga

A Gradio web UI for Large Language Models. Supports transformers, GPTQ, AWQ, EXL2, llama.cpp (GGUF), Llama models.

- [GitHub - oobabooga/text-generation-webui: A Gradio web UI for Large Language Models. Supports transformers, GPTQ, AWQ, EXL2, llama.cpp (GGUF), Llama models.](https://github.com/oobabooga/text-generation-webui) ⭐ 46k
- [GitHub - oobabooga/text-generation-webui-extensions](https://github.com/oobabooga/text-generation-webui-extensions) ⭐ 676

## Comprehensive Analysis of Open-Source Frontend Architectures for LangGraph AI Chat Applications

The transition from rapid-prototyping environments, such as Streamlit, to production-grade artificial intelligence (AI) user interfaces represents a critical architectural inflection point in the lifecycle of an application. Modern AI systems, particularly those powered by sophisticated orchestration backends like LangChain and LangGraph, require frontend architectures capable of handling highly asynchronous events, real-time token streaming, state synchronization, and dynamic user interface (UI) generation. The current landscape has evolved significantly beyond monolithic, text-based chat windows into the era of "Generative UI" and "Agentic Copilots," where the interface adapts fluidly to the context of the agent's operations and cognitive reasoning processes.

The explicit requirement for an embeddable, widget-based architecture that circumvents vendor lock-in immediately disqualifies proprietary, closed-source Software-as-a-Service (SaaS) platforms. Furthermore, the necessity to interact directly with a custom Python-based LangGraph Application Programming Interface (API) mandates a frontend that provides flexible transport layers—such as Server-Sent Events (SSE) or WebSockets—rather than demanding a tight coupling to a highly opinionated Backend-as-a-Service. The system must natively parse and render token-by-token streams without introducing UI thread blocking or rendering latency, ideally supporting standardized schemas.

This exhaustive research analysis evaluates the open-source frontend ecosystem in 2026, isolating the most robust frameworks capable of fulfilling advanced architectural demands. The evaluation filters out low-code workflow builders (such as Flowise or Langflow) which, while possessing embeddable widgets, are primarily visual orchestration tools that abstract away the underlying Python LangGraph code. Instead, the analysis focuses on pure UI libraries and frontend SDKs designed to bridge the gap between a bespoke Python backend and a highly polished, embeddable React or web component frontend.

## The Architectural Imperative for LangGraph Frontends

Before evaluating individual frameworks, it is essential to establish the architectural complexities involved in connecting a LangGraph backend to a client-facing interface. LangGraph is a framework for creating stateful, multi-actor applications with Large Language Models (LLMs), functioning fundamentally as a directed acyclic graph (DAG) or cyclic state machine. As the graph executes, it does not simply emit a continuous stream of text; rather, it transitions through discrete nodes, updates an internal state object, executes external tools, and emits highly structured event payloads.

### The Transport Layer Bottleneck

The primary bottleneck in this architecture is the "Transport Layer." A standard chat interface expects an OpenAI-compatible stream of tokens. However, a LangGraph backend emits a complex sequence of events: `node_start`, `tool_execution_start`, `tool_log_update`, `node_end`, and finally, the actual token stream generated by the LLM. If the frontend is oblivious to these state transitions, it cannot accurately render intermediate steps, loading states, or Generative UI components.

Historically, developers using frameworks like the Vercel AI SDK with a Python backend had to construct brittle, custom middleware in FastAPI to translate LangGraph's structured events into a generic data stream. The frameworks evaluated in this report have been selected based on their ability to solve this transport layer challenge, either through dedicated translation adapters, unified protocols, or native Python integration.

### The Shift to Generative UI and Standardized Protocols

The industry has recognized that "Chat UI" is rapidly becoming "Agent UI." An agentic experience requires the interface to transcend text, utilizing Generative UI to map LLM tool calls directly to interactive React components. To facilitate this without rigid coupling, several protocols have emerged:

1. **AG-UI (Agent-User Interaction Protocol):** An open-source, lightweight, event-based protocol standardizing real-time communication between AI agents and frontends over WebSockets or SSE. It defines 17 core event types (e.g., `TEXT_MESSAGE_CONTENT`, `TOOL_CALL_START`, `STATE_DELTA`), allowing the UI to stay in perfect sync with the agent's internal state.
2. **A2UI (Agent to UI):** A declarative specification developed to allow agents to describe the UI they require (cards, lists, forms) as structured JSONL, balancing flexibility with cross-platform rendering.
3. **MCP (Model Context Protocol):** A protocol enabling agents to return arbitrary HTML/JavaScript UI components or securely interact with external data sources.

The most competitive frontend libraries in 2026 natively support these protocols or provide the composable primitives required to implement them seamlessly.

## Evaluation Criteria and Methodology

The selection of the top contenders is strictly governed by the constraints of the migration objective:

- **Embeddability:** The solution must function as a modular side panel or floating widget, not just a standalone full-page application.
- **Context Injection:** The frontend must possess APIs to securely pass dynamic host-site context (current URL, user session data, DOM text) into the AI's reasoning context.
- **Message Branching:** The UI must manage complex conversation trees, allowing users to regenerate responses or edit past messages without corrupting the chat history.
- **Tool Calling UI:** The system must visualize intermediate reasoning steps and tool executions via loading states, accordions, or custom Generative UI.
- **Rich Inputs:** The framework must support dynamic forms, file uploads, and multimodal inputs.
- **Community Health:** The repository must be open-source (MIT/Apache 2.0), exhibit high popularity (2,000+ GitHub stars), and demonstrate active maintenance.

Based on these rigorous filters, four frameworks emerged as the premier solutions for LangGraph developers: **assistant-ui**, **CopilotKit**, **Vercel AI SDK**, and **Chainlit**.

## Top Contender 1: assistant-ui

The **assistant-ui** library has established itself as the de facto standard for developers seeking absolute control over their React-based AI chat interfaces. With backing from Y Combinator and adoption by major AI infrastructure providers, it offers a highly mature, composable approach to agent interfaces.

**Tech Stack:** React, TypeScript, Tailwind CSS, shadcn/ui

### Architectural Philosophy and Composable Primitives

Unlike traditional frameworks that provide a monolithic `<ChatWidget />` component with limited configuration props, assistant-ui is architected around composable primitives inspired by `shadcn/ui` and `Radix`. The library provides fundamental building blocks—such as `<ThreadList>`, `<MessagePrimitive>`, and `<Composer>`—which developers copy directly into their codebase. This design philosophy entirely eliminates vendor lock-in at the UI layer. Developers possess the ultimate freedom to modify every pixel, animation, and interaction paradigm.

The state management is handled by a robust Context API (`<AssistantRuntimeProvider>`) that separates the visual presentation from the underlying data fetching and state synchronization logic.

### LangGraph Backend Integration

Assistant-ui provides native compatibility with LangGraph through dedicated hooks, specifically `useLangGraphRuntime`. When bridging a custom Python FastAPI backend to an assistant-ui frontend, the engineering team must implement a streaming endpoint that translates LangGraph's event emissions into the format expected by the frontend. While this requires more initial configuration than tightly coupled systems, community-developed packages like `assistant-stream` (available for both Python and JS) significantly reduce the friction of building this transport layer. The library natively handles Server-Sent Events (SSE) and gracefully manages the complexities of asynchronous token accumulation and auto-scrolling.

### Embeddability and Context Injection

Assistant-ui is inherently modular. For integration into an existing React or Next.js application, developers simply utilize the `<AssistantSidebar>` component to inject a responsive side panel. For environments utilizing vanilla HTML, legacy Content Management Systems (CMS) like WordPress, or environments where React cannot be bundled into the main application logic, the library supports standard `<script>` tag injection. A script tag calling `assistant-ui.js` can mount the sophisticated React tree to a designated `div` (e.g., `<div id="assistant-root"></div>`), making it universally embeddable.

Context injection is managed elegantly via the `Context API` and the `useAssistantContext` hook. This API allows the host website to define a reactive callback that evaluates the current page state. For example, if the user highlights text on the host site or navigates to a new URL, the callback dynamically updates the context object. Because `useAssistantContext` evaluates freshly each time the model context is read, it allows for the continuous injection of frequently-changing application state without triggering costly re-registrations or re-renders of the chat component itself.

### Feature Analysis: Requirements vs. Capabilities

- **Tool/Function Calling UI (Generative UI):** Assistant-ui features exceptional Generative UI capabilities. Through the `makeAssistantToolUI` API, developers can bind specific Zod schemas to React components. When the LangGraph backend emits a tool call, assistant-ui intercepts the payload, validates it, and dynamically replaces the raw JSON output with an interactive widget. For intermediate reasoning steps, the library provides a `<ChainOfThought>` primitive, which renders as a collapsible accordion, allowing users to inspect the agent's logic without cluttering the primary conversation flow. Furthermore, the `tool-ui` ecosystem provides a gallery of pre-built, copy-paste components for common tool outputs, such as interactive maps, data tables, and weather widgets.
- **Message Branching:** The framework is unique in its first-class support for message branching. True conversational interfaces require non-linear navigation. Assistant-ui implements this via the `BranchPickerPrimitive`. When a user edits a previous message or requests a regeneration, the library preserves the original conversation tree. The UI automatically renders navigation controls (e.g., `< 2 / 3 >`), allowing users to toggle seamlessly between alternate conversation paths.
- **Rich Inputs/Forms:** A comprehensive `AttachmentAdapter` interface governs file uploads. It supports complex behaviors such as presigned URL generation for large files, drag-and-drop mechanics, image previews, and granular progress indicators (`status: { type: "running", progress: 0 }`).
- **Modern Chat Features:** Markdown rendering, code highlighting, and keyboard accessibility (WCAG compliant) are fully integrated by default, making the out-of-the-box experience highly polished.

### Trade-offs

The primary drawback of assistant-ui is its heavy reliance on the React ecosystem. Engineering teams utilizing Vue, Svelte, or Angular will find direct integration challenging, forcing them to rely on iframe embeds or complex Web Component wrappers. Additionally, while the `useLangGraphRuntime` eases the burden, establishing the initial FastAPI-to-React SSE bridge requires a deeper understanding of streaming protocols compared to fully integrated agent platforms.

## Top Contender 2: CopilotKit

**CopilotKit** represents a paradigm shift from building "Chat UIs" to constructing "Agentic Copilots." It provides an end-to-end infrastructure designed specifically to weave AI agents deeply into the fabric of an application, allowing the AI to act alongside the user, manipulate application state, and request human intervention.

**Tech Stack:** React, TypeScript, AG-UI Protocol, Python SDK

### Architectural Philosophy and the AG-UI Protocol

CopilotKit's architecture is defined by the introduction of the Agent-User Interaction (AG-UI) protocol. In a traditional setup, routing LangGraph events to a frontend requires custom middleware. AG-UI standardizes this communication by defining 17 core event types (e.g., `AGENT_HANDOFF`, `STATE_DELTA`, `TOOL_CALL_START`) that stream over Server-Sent Events or WebSockets. This protocol ensures that any AG-UI compatible agent can plug into any AG-UI aware frontend without rewriting the integration layer.

### LangGraph Backend Integration

CopilotKit offers arguably the most seamless integration with a Python LangGraph backend among all React-based frameworks. This is achieved via the `copilotkit` Python SDK. Developers simply import `copilotkit_customize_config` and apply it to the LangGraph `RunnableConfig` within their agent nodes. The SDK automatically intercepts the internal state transitions, tool executions, and checkpoint updates of the LangGraph state machine, formatting them into AG-UI events and streaming them to the frontend. This native bridge entirely eliminates the need for manual event translation.

### Embeddability and Context Injection

CopilotKit provides highly polished, pre-built components such as `<CopilotSidebar />` and `<CopilotPopup />`, which are specifically engineered to function as floating widgets within existing applications.

Context injection is the cornerstone of CopilotKit's value proposition, utilizing a "Shared State" architecture. Through the `useAgentContext` or `useCopilotReadable` hooks, the frontend application continuously registers data—such as the current user's profile, the contents of a selected table, or the current URL routing parameters. This context is automatically forwarded to the AG-UI server and injected into the agent's conversation loop. This mechanism allows the LangGraph agent to operate with complete awareness of the user's environment, fundamentally distinguishing a "copilot" from a generic chatbot.

### Feature Analysis: Requirements vs. Capabilities

- **Tool/Function Calling UI (Generative UI):** CopilotKit supports an incredibly sophisticated, three-tiered approach to Generative UI.
    1. _Static Generative UI:_ The agent triggers pre-built React components via `useCoAgentStateRender`, mapping specific tool calls to highly polished, branded UI elements.
    2. _Declarative Generative UI:_ Utilizing Google's A2UI JSONL specification, the agent can dynamically return a structured description of a UI (e.g., specific form fields, sliders, or lists), which the frontend interprets and renders on the fly, offering immense flexibility without requiring developers to pre-build every possible component.
    3. _Open-ended MCP Apps:_ Leveraging the Model Context Protocol (MCP), agents can return arbitrary, sandboxed HTML/JavaScript interfaces for highly specialized workflows. This tiered architecture ensures that intermediate steps and tool outputs are visualized cleanly and interactively.
- **Message Branching:** While CopilotKit robustly handles message history and state synchronization, true non-linear message branching (like the visual tree navigation in ChatGPT) requires more manual configuration compared to assistant-ui. The LangGraph backend must be configured with a checkpointer (e.g., PostgreSQL or Redis), and branching logic must be handled via graph interrupts or explicit state rewinds, which can be complex to trace.
- **Rich Inputs/Forms:** The declarative Generative UI natively handles the rendering of dynamic forms requested by the agent. Furthermore, CopilotKit strongly supports human-in-the-loop workflows. An agent can pause execution, present a form or an approval dialog to the user via the chat widget, and resume execution only after the user submits the required input or authorization.
- **Modern Chat Features:** Standard chat features, including Markdown and code highlighting, are fully supported and out-of-the-box ready.

### Trade-offs

CopilotKit's primary trade-off is its architectural weight. It enforces specific protocols (AG-UI) and requires the deployment of an AG-UI proxy server or the use of Copilot Cloud to manage the event streaming. For highly customized, lightweight deployments, this may introduce unnecessary complexity. Additionally, some community feedback has highlighted occasional instability and API churn during major version upgrades (e.g., the transition to v2).

## Top Contender 3: Vercel AI SDK

The **Vercel AI SDK** represents the enterprise standard for building AI-powered applications within the JavaScript/TypeScript ecosystem. While primarily known as a backend abstraction layer, its UI package provides incredibly powerful hooks for rapid frontend development.

**Tech Stack:** TypeScript, React, Next.js, Svelte, Vue

### Architectural Philosophy and Universal Hooks

The Vercel AI SDK abstracts the complexities of state management and provider integration through a unified API. The `useChat` hook is the bedrock of the UI layer, managing the real-time accumulation of streamed tokens, chat history state, and request dispatching with minimal boilerplate. While it heavily favors the Next.js App Router and React Server Components (RSC), it uniquely supports broader framework ecosystems, including Vue and Svelte, making it highly versatile for teams not exclusively committed to React.

### LangGraph Backend Integration

Integrating the Vercel AI SDK's frontend hooks with a Python LangGraph backend is achievable but requires the implementation of the Data Stream Protocol. The AI SDK expects a specific streaming format (e.g., text payloads prefixed with `"0:"` for text chunks). Developers must build a FastAPI endpoint that consumes the LangGraph event stream and yields responses formatted according to Vercel's protocol. While starter templates exist (such as `ai-sdk-python-streaming`), it lacks the native Python decorators found in Chainlit or the SDK provided by CopilotKit.

### Embeddability and Context Injection

The UI components built with the Vercel AI SDK are standard React or framework-specific components, meaning they can easily be styled as floating widgets or side panels using standard CSS (e.g., Tailwind).

Context injection relies on standard HTTP request payloads. When utilizing `useChat`, developers can pass an `options` object containing dynamic host-site context (such as the URL or user session tokens) directly into the body of the `POST` request. The FastAPI backend then receives this context and injects it into the LangGraph state before invoking the graph execution.

### Feature Analysis: Requirements vs. Capabilities

- **Tool/Function Calling UI (Generative UI):** The SDK excels in structured data generation. The `useObject` hook allows the frontend to stream structured JSON objects conforming to Zod schemas directly from the backend. Furthermore, the `toolInvocations` array exposed by `useChat` allows developers to map incoming tool calls to custom React components. However, unlike assistant-ui's `makeAssistantToolUI`, developers must manually construct the mapping logic and manage the loading states for these tool components.
- **Message Branching:** The Vercel AI SDK does not provide out-of-the-box UI primitives for message branching or tree navigation. While the underlying state can be manipulated to reload or edit messages, building a visual branch picker (like ChatGPT's UI) requires significant custom engineering.
- **Rich Inputs/Forms:** The SDK natively supports multi-modal inputs, including robust file attachments, via the `experimental_useObject` and attachment handling APIs.

### Trade-offs

The Vercel AI SDK provides exceptional low-level control but lacks the pre-built, highly polished UI primitives found in assistant-ui or CopilotKit. Developers are responsible for building the actual chat bubbles, input bars, and tool-call rendering logic from scratch, though they can leverage libraries like `shadcn/ui` to accelerate this process. The necessity to manually bridge the LangGraph Python stream to the Data Stream Protocol introduces a layer of maintenance overhead.

## Top Contender 4: Chainlit

For teams where Python is the lingua franca and JavaScript expertise is limited, **Chainlit** offers a compelling alternative. Originally conceived as a rapid prototyping tool similar to Streamlit, Chainlit has matured to offer robust production deployments, including a standalone React client and an embeddable widget.

**Tech Stack:** Python Server, React Frontend

### Architectural Philosophy and Python-First Development

Chainlit's philosophy is rooted in abstracting frontend complexities entirely. Developers write asynchronous Python functions decorated with `@cl.on_message` or `@cl.step`, and the framework automatically generates a polished web interface. It handles WebSockets, session management, and UI rendering intrinsically, allowing data scientists and backend engineers to deploy functional, aesthetically pleasing chat applications without writing a single line of React.

### LangGraph Backend Integration

As a pure Python framework, Chainlit's integration with LangGraph is unparalleled in its simplicity. There are no REST APIs or complex event translation layers to manage. Developers simply compile their LangGraph `StateGraph`, invoke or stream the graph's execution within a Chainlit event handler, and pipe the output directly to a `cl.Message` object.

### Embeddability and Context Injection

Chainlit satisfies the embeddability requirement through its dedicated "Copilot" feature. Developers can embed the interface into any existing website—regardless of the underlying technology (Vanilla HTML, WordPress, React)—by injecting a simple `<script src="http://[your-server]/copilot/index.js"></script>` tag and calling `window.mountChainlitWidget()`. This summons a floating chat widget anchored to the screen.

Context injection is managed through a bidirectional message-passing API. The host website can execute JavaScript events such as `window.sendChainlitMessage({ type: "system_message", output: "User selected text" })`. The Python backend intercepts this system message within its `@cl.on_message` handler and injects the payload into the LangGraph context. Conversely, the LangGraph agent can trigger `cl.CopilotFunction` calls, commanding the host website to execute client-side actions (e.g., opening a modal or highlighting a UI element). To ensure security in cross-domain embeddings, developers must configure Cross-Origin Resource Sharing (CORS) within Chainlit's `allow_origins` settings and implement JSON Web Token (JWT) authentication.

### Feature Analysis: Requirements vs. Capabilities

- **Tool/Function Calling UI:** Chainlit automatically visualizes intermediate reasoning steps and tool executions. The "Chain of Thought" feature automatically collapses tool outputs and intermediate agent steps into clean accordions. Furthermore, Chainlit provides native Python wrappers for complex UI elements, allowing developers to render dataframes, audio, Plotly charts, and PDF viewers directly from the Python backend using classes like `cl.Dataframe` or `cl.Image`.
- **Message Branching:** Chainlit supports message editing (`edit_message=true`), allowing users to modify previous inputs. However, it lacks the sophisticated visual tree navigation and branch switching mechanisms found in assistant-ui. Edits are processed by updating the chat context, but the UI does not visually represent parallel conversation paths.
- **Rich Inputs/Forms:** The framework robustly supports spontaneous file uploads and provides a suite of input widgets (Select, Slider, Switch, Tags, TextInput) that can be triggered by the agent to collect structured data from the user.
- **Modern Chat Features:** Markdown rendering, LaTeX support for mathematical equations, and automatic message tagging are built-in and configurable via the `chainlit.md` configuration file.

### Trade-offs

Chainlit's primary limitation is its rigidity regarding deep frontend customization. While developers can inject custom CSS or JavaScript (`custom_css`, `custom_js`), modifying the fundamental architecture of the React-based Copilot widget requires overriding the production build or forking the repository. This severely limits the ability to implement highly bespoke, brand-specific UI paradigms. Furthermore, the original core team stepped back from active development in mid-2025, leaving maintenance primarily to the community. While it remains stable, this introduces a degree of risk regarding the long-term roadmap and support for emerging protocols like A2UI or MCP.

## Comparative Data Analysis

To synthesize the evaluation, the following tables detail the technical positioning and feature satisfaction of the top contenders.

### Table 1: Ecosystem Landscape and Core Metrics

| **Framework**     | **GitHub Stars** | **Primary License** | **Core Tech Stack**         | **Primary Target Persona**                                        |
| ----------------- | ---------------- | ------------------- | --------------------------- | ----------------------------------------------------------------- |
| **assistant-ui**  | 9,200+           | MIT                 | React, TypeScript, Tailwind | Frontend engineers requiring composable, pixel-perfect control.   |
| **CopilotKit**    | 29,900+          | MIT                 | React, Python SDK, AG-UI    | Full-stack teams building deeply integrated, state-aware agents.  |
| **Vercel AI SDK** | 20,800+          | Apache 2.0          | React, Vue, Svelte, TS      | Developers requiring low-level hooks and cross-framework support. |
| **Chainlit**      | 11,800+          | Apache 2.0          | Python Server, React Client | Python engineers seeking rapid deployment without writing JS.     |

### Table 2: Protocol Support and Streaming Mechanisms

| **Framework**     | **LangGraph Integration Paradigm**                  | **Generative UI Protocol**                | **Transport Layer**        |
| ----------------- | --------------------------------------------------- | ----------------------------------------- | -------------------------- |
| **assistant-ui**  | Requires FastAPI SSE bridge (`useLangGraphRuntime`) | Component Mapping (`makeAssistantToolUI`) | SSE / Custom HTTP          |
| **CopilotKit**    | Native (`copilotkit` Python SDK / `RunnableConfig`) | AG-UI, A2UI, MCP Apps                     | WebSockets / SSE           |
| **Vercel AI SDK** | Requires FastAPI bridge (Data Stream Protocol)      | Component Mapping (`useObject`)           | SSE (Data Stream Protocol) |
| **Chainlit**      | Native Python execution (`@cl.on_message`)          | Python Elements (`cl.Dataframe`, etc.)    | WebSockets                 |

### Table 3: Matrix of Core Feature Requirements

| **Feature Requirement**                 | **assistant-ui**                      | **CopilotKit**                       | **Vercel AI SDK**               | **Chainlit**                     |
| --------------------------------------- | ------------------------------------- | ------------------------------------ | ------------------------------- | -------------------------------- |
| **Tool Calling UI (Accordions/States)** | Exceptional                           | Exceptional                          | Medium (Requires custom build)  | High (Auto-accordions)           |
| **Message Branching (UI Trees)**        | Exceptional (`BranchPickerPrimitive`) | Medium (Relies on graph state)       | Low (No built-in UI primitives) | Low (Supports edits, no trees)   |
| **Rich Inputs / Dynamic Forms**         | High                                  | Exceptional (A2UI declarative forms) | High                            | High (Python input widgets)      |
| **Embeddability (Side Panel/Widget)**   | Yes (`<AssistantSidebar>` or script)  | Yes (`<CopilotSidebar>`)             | Yes (Custom React wrapper)      | Yes (Copilot script tag)         |
| **Context Injection (Host to Agent)**   | High (`useAssistantContext`)          | Exceptional (`useAgentContext`)      | Medium (HTTP payload injection) | Medium (`sendChainlitMessage`)   |
| **Zero Vendor Lock-in (UI Layer)**      | Absolute (Copy/paste components)      | High (Bring your own components)     | Absolute (Headless hooks)       | Low (Requires overriding builds) |

## Architectural Considerations for Migration

Migrating from a synchronous, procedural environment like Streamlit to a highly asynchronous, event-driven architecture necessitates fundamental shifts in system design. Streamlit operates by continuously re-executing the entire Python script from top to bottom upon every state change. This paradigm is fundamentally incompatible with the long-running, stateful nature of complex LangGraph workflows, which require durable execution, memory persistence across graph iterations, and asynchronous tool invocations.

### Addressing the Transport Layer Complexity

When decoupling the frontend from the Python backend, the engineering team must select a transport strategy. If the architecture utilizes **assistant-ui** or **Vercel AI SDK**, developers must build a robust FastAPI or Flask middleware layer. This middleware is responsible for invoking the LangGraph compiled graph, listening to the `astream_events` output, filtering relevant node transitions, and yielding an SSE stream formatted specifically for the chosen frontend library. While powerful, this introduces maintenance overhead, as any changes to the LangGraph node structure may require updates to the translation middleware.

Conversely, adopting a protocol-driven approach like **CopilotKit** eliminates this middleware requirement. By utilizing the AG-UI protocol and the accompanying Python SDK, the framework automatically handles the serialization of graph states, tool progress, and token generation, piping them directly to the React frontend.

### Security and Sandboxing in the Era of Generative UI

The shift toward Generative UI—where agents dynamically generate forms, execute code, and render interactive widgets—introduces novel security vectors. If an application utilizes open-ended protocols like MCP Apps, there is a risk analogous to Cross-Site Scripting (XSS) if the agent's output is not rigorously sanitized.

Frameworks like assistant-ui and CopilotKit mitigate these risks fundamentally by relying on schema validation rather than raw HTML injection. By enforcing `Zod` schema validation on all tool outputs, the frontend ensures that it only renders pre-compiled, safe React components. The agent dictates the _data_ populating the component (e.g., plotting coordinates on a map), but it cannot inject arbitrary executable JavaScript into the DOM. Furthermore, when implementing context injection (e.g., passing scraped page content to the LLM), the backend must implement prompt injection defenses to ensure malicious text from the host website does not override the agent's system instructions.

## Final Recommendation

The definitive selection among these top contenders hinges upon the engineering team's technological proficiency, the desired level of absolute control over the visual presentation, and the complexity of the LangGraph agent's interaction with the host application.

1. **The Verdict for Absolute UI Control and React-Centric Teams: assistant-ui** If the primary objective is to achieve a pristine, consumer-grade user experience that is visually indistinguishable from premier market offerings, **assistant-ui** is the optimal architectural choice. Its composable `shadcn/ui` architecture guarantees zero vendor lock-in; the UI code physically resides within the host repository, allowing developers to manipulate every interaction paradigm. It is uniquely positioned as the only framework analyzed that handles complex message branching and conversation tree navigation natively and elegantly on the client, completely satisfying that specific constraint. While it requires a more deliberate effort to engineer the FastAPI SSE bridge to the LangGraph backend compared to CopilotKit, the resulting interface provides unparalleled flexibility, accessibility, and integration into existing React or standalone web applications.
2. **The Verdict for Deep Agent State Synchronization: CopilotKit** If the application's requirements dictate that the LangGraph agent functions as a true "co-pilot"—frequently reading the host website's state, pausing for human-in-the-loop approvals, and manipulating application data dynamically—**CopilotKit** represents the superior technological alignment. Its reliance on the AG-UI protocol and its native Python LangGraph SDK completely eliminate backend event translation boilerplate. The out-of-the-box `<CopilotSidebar>` widget fulfills the embeddability requirement flawlessly, and its multi-tiered approach to Generative UI (Static, Declarative A2UI, and MCP Apps) provides immense versatility for visualizing complex agent actions. It is the most advanced, purpose-built protocol for deeply integrated agentic experiences currently available in the open-source ecosystem.
3. **The Verdict for Python-Exclusive Teams: Chainlit** If the engineering organization lacks dedicated JavaScript/React resources and requires the ability to manage the entire stack—including UI configurations and widget deployments—exclusively from Python, **Chainlit** remains a highly effective solution. Its Copilot widget is trivial to embed into vanilla HTML or existing websites, and it handles LangGraph streaming intrinsically. However, due to its rigid internal component structure and recent transitions in maintainer activity, it presents a higher risk for long-term vendor lock-in regarding frontend aesthetics and restricts the ability to implement highly bespoke Generative UI paradigms.

**Synthesis:** For a robust, production-ready migration from Streamlit that explicitly demands a modular, embeddable widget, dynamic tool rendering, true message branching, and strict avoidance of UI vendor lock-in, **assistant-ui** offers the best long-term architectural stability for teams with React capabilities. For teams prioritizing seamless LangGraph state synchronization, human-in-the-loop workflows, and rapid deployment of a deeply integrated agent side-panel without managing transport layer middleware, **CopilotKit** is the definitive choice.

## Deep Research Prompt

**Objective:** Conduct a deep research analysis to identify and evaluate the best open-source frontend frameworks, templates, or UI libraries specifically built for modern AI chat applications, particularly those powered by LangChain and LangGraph backends.

**Background:** I am currently using Streamlit, but I need to migrate to a more robust, production-ready frontend. I do not want to build the UI from scratch; the solution should provide pre-built, high-quality components out of the box while avoiding vendor lock-in. Crucially, I need this UI to be embeddable as a side panel or widget on existing websites, not just a standalone web app.

**Core Feature Requirements:** Please filter and evaluate projects based on their out-of-the-box support for the following:

1. **Tool/Function Calling UI:** Ability to cleanly display intermediate agent steps, tool executions, and their outputs (e.g., expandable accordions or loading states for LangGraph nodes).
2. **Advanced Streaming:** Native support for token-by-token streaming (SSE or WebSockets).
3. **Message Branching:** UI support for regenerating responses, editing previous user messages, and handling conversation branches/trees.
4. **Rich Inputs/Forms:** Capability to render dynamic forms, file uploads, and structured data inputs within or alongside the chat interface.
5. **Embeddability & Context Injection:** The solution must be modular enough to be configured as a side panel or floating widget on any existing website. It must also support passing dynamic context (e.g., current URL, scraped page content, user session data) from the host website into the AI chat context.
6. **Modern Chat Features:** Markdown rendering, code highlighting, citations, and a polished, responsive user interface.

**Community & Open-Source Constraints:**

- **License:** Must be truly open-source (e.g., MIT, Apache 2.0) with zero vendor lock-in.
- **Popularity:** High GitHub stars (ideally 2,000+).
- **Health:** Active maintenance, frequent recent commits, and strong community support (Discord/GitHub issues).
- **Stack:** Preferably React/Next.js, Vue, or Svelte-based ecosystems.

**Expected Output Format:**

1. **Top Contenders:** Provide a detailed breakdown of the top 3 to 5 projects that best meet these criteria (e.g., Vercel AI SDK, Flowise embed, Langflow embed, Chainlit, etc.).
2. **Deep-Dive Comparison:** For each project, include:
    - GitHub Repository link and current Star count.
    - Core Tech Stack (Frontend framework, styling library).
    - How it integrates with a Python-based LangGraph/LangChain API backend.
    - Specific documentation or patterns for embedding it as a widget and injecting host-site context.
    - Pros and Cons specifically related to my feature requirements.
3. **Recommendation:** A final verdict on which framework offers the best balance of "out-of-the-box readiness," "embeddability," and "customizability" for a LangGraph developer.

## Links

- [ElevenLabs UI \| ElevenLabs UI](https://ui.elevenlabs.io/)
- [JavaScript AI Chatbot Widget for Support Agents \| DHTMLX](https://dhtmlx.com/docs/products/dhtmlxChatbot/)
- [Acme](https://demo.achromatic.dev/)
- [Inconvo \| Build Reliable Data Agents](https://inconvo.com/)
