# Agents - Framework / Tools

## Choosing the Right Agentic Framework

Not all platforms are created equal. Some are no-code, some are open-source, some focus on orchestration, and others on ease of integration.

- OpenAI Agents API – Great for GPT-native agents, thread-based logic
- Google Vertex AI – Strong orchestration + enterprise-ready
- LangGraph – DAG-based workflows for complex multi-agent flows
- AutoGen / CrewAI – Agent-to-agent communication with tool chaining
- Make / n8n – Ideal for no-code, scenario-based automation

Understanding MCP (Multi-Agent Communication Protocol), memory integration, and orchestration style is essential when scaling from simple prompts to full systems.

## SmolAgent - Agents

### Building your agent

To initialize a minimal agent, you need at least these two arguments:

- `model`, a text-generation model to power your agent - because the agent is different from a simple LLM, it is a system that uses a LLM as its engine. You can use any of these options:

    - [TransformersModel](https://huggingface.co/docs/smolagents/v1.5.1/en/reference/agents#smolagents.TransformersModel) takes a pre-initialized `transformers` pipeline to run inference on your local machine using `transformers`.
    - [HfApiModel](https://huggingface.co/docs/smolagents/v1.5.1/en/reference/agents#smolagents.HfApiModel) leverages a `huggingface_hub.InferenceClient` under the hood.
    - [LiteLLMModel](https://huggingface.co/docs/smolagents/v1.5.1/en/reference/agents#smolagents.LiteLLMModel) lets you call 100+ different models through [LiteLLM](https://docs.litellm.ai/)!
    - [AzureOpenAIServerModel](https://huggingface.co/docs/smolagents/v1.5.1/en/reference/agents#smolagents.AzureOpenAIServerModel) allows you to use OpenAI models deployed in [Azure](https://azure.microsoft.com/en-us/products/ai-services/openai-service).
- `tools`, a list of `Tools` that the agent can use to solve the task. It can be an empty list. You can also add the default toolbox on top of your `tools` list by defining the optional argument `add_base_tools=True`.

### Links

- [GitHub - huggingface/smolagents: 🤗 smolagents: a barebones library for agents. Agents write python code to call tools and orchestrate other agents.](https://github.com/huggingface/smolagents) ⭐ 26k
- [smolagents](https://huggingface.co/docs/smolagents/en/index)
- [Introducing smolagents: simple agents that write actions in code.](https://huggingface.co/blog/smolagents)
- [Build Multi-Agent Systems with SmolAgents - YouTube](https://www.youtube.com/watch?v=uzskhpH5fvo)
- [Build AI Agents using HuggingFace's SmolAgents \| Agentic AI - YouTube](https://www.youtube.com/watch?v=VSm5-CX4QaM)
- [Build AI Agents using HuggingFace's SmolAgents \| Agentic AI - YouTube](https://www.youtube.com/watch?v=VSm5-CX4QaM)
- [Hugging Face's Smolagents: A Guide With Examples](https://www.datacamp.com/tutorial/smolagents)
- [SmolAgents: A Smol Library to Build Agents - YouTube](https://www.youtube.com/watch?v=icRKf_Mvmt8)
- [smolagent-tutorial.ipynb](https://colab.research.google.com/drive/1A03Qt_B0k8U-NPjcvkyJVX_Ch-9955ul?usp=sharing)

## CrewAI

Production-grade framework for orchestrating sophisticated AI agent systems. From simple automations to complex real-world applications, CrewAI provides precise control and deep customization. By fostering collaborative intelligence through flexible, production-ready architecture, CrewAI empowers agents to work together seamlessly, tackling complex business challenges with predictable, consistent results.

### Why CrewAI?

The power of AI collaboration has too much to offer. CrewAI is a standalone framework, built from the ground up without dependencies on Langchain or other agent frameworks. It's designed to enable AI agents to assume roles, share goals, and operate in a cohesive unit - much like a well-oiled crew. Whether you're building a smart assistant platform, an automated customer service ensemble, or a multi-agent research team, CrewAI provides the backbone for sophisticated multi-agent interactions.

### Links

- [GitHub - crewAIInc/crewAI: Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks.](https://github.com/crewAIInc/crewAI) ⭐ 47k
- [CrewAI](https://www.crewai.com/)
- [GitHub - crewAIInc/crewAI-examples: A collection of examples that show how to use CrewAI framework to automate workflows. · GitHub](https://github.com/crewAIInc/crewAI-examples) ⭐ 5.8k
	- [crewAI-examples/integrations/CrewAI-LangGraph at main · crewAIInc/crewAI-examples · GitHub](https://github.com/crewAIInc/crewAI-examples/tree/main/integrations/CrewAI-LangGraph) ⭐ 5.8k

## Agno

Developers use Agno to build Reasoning Agents, Multimodal Agents, Teams of Agents and Agentic Workflows. Agno also provides a beautiful UI to chat with your Agents, pre-built FastAPI routes to serve your Agents and tools to monitor and evaluate their performance.

Use Agno to build the 5 levels of Agentic Systems:

- Level 1: Agents with tools and instructions.
- Level 2: Agents with knowledge and storage.
- Level 3: Agents with memory and reasoning.
- Level 4: Agent Teams that can reason and collaborate.
- Level 5: Agentic Workflows with state and determinism.

```python
# pip install -U agno

from agno.agent import Agent
from agno.models.anthropic import Claude
from agno.tools.reasoning import ReasoningTools
from agno.tools.yfinance import YFinanceTools

reasoning_agent = Agent(
    model=Claude(id="claude-sonnet-4-20250514"),
    tools=[
        ReasoningTools(add_instructions=True),
        YFinanceTools(stock_price=True, analyst_recommendations=True, company_info=True, company_news=True),
    ],
    instructions="Use tables to display data.",
    markdown=True,
)
```

[GitHub - agno-agi/agno: Full-stack framework for building Multi-Agent Systems with memory, knowledge and reasoning.](https://github.com/agno-agi/agno) ⭐ 39k

[A beautiful UI for your Agents - Agno](https://docs.agno.com/agent-ui/introduction)

[agno/cookbook/getting\_started/05\_agent\_team.py at main · agno-agi/agno · GitHub](https://github.com/agno-agi/agno/blob/main/cookbook/getting_started/05_agent_team.py) ⭐ 39k

[Introducing Agno 2.0 and AgentOS: A High-Performance Runtime for Multi-Agent Systems \| Ashpreet B. posted on the topic \| LinkedIn](https://www.linkedin.com/posts/ashpreetbedi_today-were-releasing-agno-20-and-sharing-activity-7371241593552392192-x4pH)

## AutoGen

### Autogen Studio

An web-based UI for prototyping with agents without writing code. Built on AgentChat.

AutoGen Studio is a low-code interface built to help you rapidly prototype AI agents, enhance them with tools, compose them into teams and interact with them to accomplish tasks. It is built on [AutoGen AgentChat](https://microsoft.github.io/autogen) - a high-level API for building multi-agent applications.

```bash
pip install -U autogenstudio
autogenstudio ui --port 8080 --appdir ./myapp

autogenstudio serve --team=team-config.json --port=5000
```

[AutoGen — AutoGen](https://microsoft.github.io/autogen/stable/)

## VertexAI

- [Build an agent using playbooks  \|  Dialogflow CX  \|  Google Cloud](https://cloud.google.com/dialogflow/cx/docs/quick/build-agent-playbook)
- [Playbook-based pre-built agents  \|  Dialogflow CX  \|  Google Cloud](https://cloud.google.com/dialogflow/cx/docs/concept/playbook/prebuilt)
- [GitHub - FirebaseExtended/compass-travel-planning-sample](https://github.com/FirebaseExtended/compass-travel-planning-sample) ⭐ 51
- [Intro to AI agents - YouTube](https://www.youtube.com/watch?v=ZZ2QUCePgYw)
- [Build and deploy generative AI agents using natural language with Vertex AI Agent Builder - YouTube](https://www.youtube.com/watch?v=GCmGxBl3RLY)
- [GitHub - kkrishnan90/vertex-ai-search-agent-builder-demo](https://github.com/kkrishnan90/vertex-ai-search-agent-builder-demo) ⭐ 11

## Frameworks

- [GitHub - langchain-ai/langchain: The agent engineering platform · GitHub](https://github.com/langchain-ai/langchain) ⭐ 131k
- [GitHub - microsoft/autogen: A programming framework for agentic AI · GitHub](https://github.com/microsoft/autogen) ⭐ 56k
- [GitHub - agno-agi/agno: Build, run, manage agentic software at scale. · GitHub](https://github.com/agno-agi/agno) ⭐ 39k
- [GitHub - OpenBMB/ChatDev: ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration · GitHub](https://github.com/OpenBMB/ChatDev) ⭐ 32k
- [GitHub - langchain-ai/langgraph: Build resilient language agents as graphs. · GitHub](https://github.com/langchain-ai/langgraph) ⭐ 28k
- [GitHub - huggingface/smolagents: 🤗 smolagents: a barebones library for agents that think in code. · GitHub](https://github.com/huggingface/smolagents) ⭐ 26k
- [GitHub - mastra-ai/mastra: From the team behind Gatsby, Mastra is a framework for building AI-powered applications and agents with a modern TypeScript stack. · GitHub](https://github.com/mastra-ai/mastra)
	- [TypeScript AI Agent Framework & Platform \| Mastra](https://mastra.ai/)
- [GitHub Star History](https://www.star-history.com/?repos=OpenBMB%2FChatDev%2CcrewAIInc%2FcrewAI%2Clangchain-ai%2Flanggraph%2Clangchain-ai%2Flangchain%2Chuggingface%2Fsmolagents%2Cagno-agi%2Fagno%2Cmicrosoft%2Fautogen&type=date&legend=top-left)
- [agentic-frameworks-deep-dive-analysis](ai/llm/agentic-frameworks-deep-dive-analysis.md)

## AI Agents / Tools

- [agent.ai \| The Professional Network for AI Agents](https://agent.ai/agents)
- [AI Agents Directory - Find and Compare AI Assistants \| AI Agents List](https://aiagentslist.com/)
- [AI Agents Marketplace \| AI Agents Directory - Discover Best AI Agents](https://aiagentsdirectory.com/)
- [GitHub - ashishpatel26/500-AI-Agents-Projects: The 500 AI Agents Projects is a curated collection of AI agent use cases across various industries. It showcases practical applications and provides links to open-source projects for implementation, illustrating how AI agents are transforming sectors such as healthcare, finance, education, retail, and more.](https://github.com/ashishpatel26/500-AI-Agents-Projects) ⭐ 27k
- [GitHub - MotiaDev/motia: Event-based orchestration framework for agents and intelligent automations](https://github.com/MotiaDev/motia) ⭐ 15k
	- [Motia - Unified Backend Framework for APIs, Events and AI Agents](https://www.motia.dev/)
	- [Content Creation Workflow](https://api.filekitcdn.com/e/k7YHPN24SoxyM8nGKZnDxa/35EqtSRzEiZvk7Nw1G82iz/player)
	- [ai-engineering-hub/motia-content-creation at main · patchy631/ai-engineering-hub · GitHub](https://github.com/patchy631/ai-engineering-hub/tree/main/motia-content-creation) ⭐ 33k
- [GitHub - strands-agents/sdk-python: A model-driven approach to building AI agents in just a few lines of code.](https://github.com/strands-agents/sdk-python) ⭐ 5.4k
	- [Introducing Strands Agents, an Open Source AI Agents SDK \| AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/)
- [GitHub - NirDiamant/GenAI\_Agents: This repository provides tutorials and implementations for various Generative AI Agent techniques, from basic to advanced. It serves as a comprehensive guide for building intelligent, interactive AI systems.](https://github.com/NirDiamant/GenAI_Agents) ⭐ 21k
- [GitHub - HKUDS/AutoAgent: "AutoAgent: Fully-Automated and Zero-Code LLM Agent Framework"](https://github.com/HKUDS/AutoAgent) ⭐ 8.7k
- [GitHub - weaviate/elysia: Python package and backend for the Elysia platform app.](https://github.com/weaviate/elysia) ⭐ 1.9k
	- [Elysia - Demo](https://elysia.weaviate.io/)
	- [Elysia: Building an end-to-end agentic RAG app \| Weaviate](https://weaviate.io/blog/elysia-agentic-rag)
	- [We built so much into our open source agentic RAG framework, Elysia, that our "bonus features" would be the main selling points of other apps 😅 Seriously - while other frameworks are celebrating… \| Victoria Slocum \| 18 comments](https://www.linkedin.com/posts/victorialslocum_we-built-so-much-into-our-open-source-agentic-activity-7371516549565825024-mXbu)
- **[GitHub - emcie-co/parlant: LLM agents built for control. Designed for real-world use. Deployed in minutes.](https://github.com/emcie-co/parlant) ⭐ 18k**
- [GitHub - openai/agents.md: AGENTS.md — a simple, open format for guiding coding agents](https://github.com/openai/agents.md) ⭐ 19k
- [GitHub - agentscope-ai/agentscope: AgentScope: Agent-Oriented Programming for Building LLM Applications](https://github.com/agentscope-ai/agentscope) ⭐ 21k
	- [AgentScope](https://doc.agentscope.io/)
	- Transparency - Full visibility over prompts, reasoning chains, and agent interactions.
	- Runtime Control - Native support for interruptions, overrides, and custom error handling.
	- Agentic Core - Built-in handling for tools, memory, RAG, and multi-agent collaboration.
	- Model Agnostic - Works with any LLM provider without lock-in.
	- Composable - Modular, LEGO-style components let developers mix and match agents.
- [LlamaAgents Builder: From Prompt to Deployed AI Agent in Minutes - MachineLearningMastery.com](https://machinelearningmastery.com/llamaagents-builder-from-prompt-to-deployed-ai-agent-in-minutes/)

![AI Agents Landscape](../../media/Pasted%20image%2020250114143214.jpg)
