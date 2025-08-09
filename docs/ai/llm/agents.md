# Agents

Presentation - [Automating the Future: Build Powerful AI Agents - Google Slides](https://docs.google.com/presentation/d/1nRNP7h89k-8FTCP2kMSMbAa0zIJ6r0COm7voa1JT6Sc/edit?usp=sharing)

An LLM Agent is a software entity capable of reasoning and autonomously executing tasks.

[GitHub - viktoriasemaan/multi-agent: Examples of AI Multi-Agent Solutions](https://github.com/viktoriasemaan/multi-agent)

[Building LLM Agents with Tool Use - YouTube](https://youtu.be/5drn2DO7gNY)

[AI Agents Are Changing AWS Cost Prediction - YouTube](https://youtu.be/_cjuQlc62uc)

## Building

How to Build an AI Agent (7-Step Blueprint)

1. System Prompt - Define the agent’s goals, role, and instructions. A thoughtful prompt shapes behavior from the ground up.
2. LLM Selection - Pick your reasoning engine (e.g. GPT-4, Claude, Gemini) and tune it with parameters like temperature and max tokens.
3. Tools - Give your agent abilities: from calling APIs to using other agents as tools. This is where agents move from “talking” to “doing”.
4. Memory - Short-term and long-term memory (episodic, vector DBs, file stores) allow agents to remember, learn, and personalize over time.
5. Orchestration - This is the brain behind the brain — workflows, triggers, A2A protocols, and message queues to structure intelligent behavior.
6. User Interface - A good interface (chat, voice, web) brings your agent to life. It’s not just about function — it’s about trust and usability.
7. AI Evaluations - Agents need feedback loops. Measure performance, learn from failure, and improve continuously.

**Choosing the Right Agentic Framework**

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

- [GitHub - huggingface/smolagents: 🤗 smolagents: a barebones library for agents. Agents write python code to call tools and orchestrate other agents.](https://github.com/huggingface/smolagents)
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

- [GitHub - crewAIInc/crewAI: Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks.](https://github.com/crewAIInc/crewAI)
- [CrewAI](https://www.crewai.com/)

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

[GitHub - agno-agi/agno: Full-stack framework for building Multi-Agent Systems with memory, knowledge and reasoning.](https://github.com/agno-agi/agno)

[A beautiful UI for your Agents - Agno](https://docs.agno.com/agent-ui/introduction)

[agno/cookbook/getting\_started/05\_agent\_team.py at main · agno-agi/agno · GitHub](https://github.com/agno-agi/agno/blob/main/cookbook/getting_started/05_agent_team.py)

## AI Agents / Tools

- [agent.ai \| The Professional Network for AI Agents](https://agent.ai/agents)
- [AI Agents Directory - Find and Compare AI Assistants \| AI Agents List](https://aiagentslist.com/)
- [AI Agents Marketplace \| AI Agents Directory - Discover Best AI Agents](https://aiagentsdirectory.com/)
- [GitHub - MotiaDev/motia: Event-based orchestration framework for agents and intelligent automations](https://github.com/MotiaDev/motia)
	- [Motia - Unified Backend Framework for APIs, Events and AI Agents](https://www.motia.dev/)
	- [Content Creation Workflow](https://api.filekitcdn.com/e/k7YHPN24SoxyM8nGKZnDxa/35EqtSRzEiZvk7Nw1G82iz/player)
	- [ai-engineering-hub/motia-content-creation at main · patchy631/ai-engineering-hub · GitHub](https://github.com/patchy631/ai-engineering-hub/tree/main/motia-content-creation)
- [GitHub - strands-agents/sdk-python: A model-driven approach to building AI agents in just a few lines of code.](https://github.com/strands-agents/sdk-python)
	- [Introducing Strands Agents, an Open Source AI Agents SDK \| AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/)
- [GitHub - NirDiamant/GenAI\_Agents: This repository provides tutorials and implementations for various Generative AI Agent techniques, from basic to advanced. It serves as a comprehensive guide for building intelligent, interactive AI systems.](https://github.com/NirDiamant/GenAI_Agents)
- [GitHub - HKUDS/AutoAgent: "AutoAgent: Fully-Automated and Zero-Code LLM Agent Framework"](https://github.com/HKUDS/AutoAgent)

![AI Agents Landscape](../../media/Pasted%20image%2020250114143214.jpg)

## VertexAI

- [Build an agent using playbooks  \|  Dialogflow CX  \|  Google Cloud](https://cloud.google.com/dialogflow/cx/docs/quick/build-agent-playbook)
- [Playbook-based pre-built agents  \|  Dialogflow CX  \|  Google Cloud](https://cloud.google.com/dialogflow/cx/docs/concept/playbook/prebuilt)
- [GitHub - FirebaseExtended/compass-travel-planning-sample](https://github.com/FirebaseExtended/compass-travel-planning-sample)
- [Intro to AI agents - YouTube](https://www.youtube.com/watch?v=ZZ2QUCePgYw)
- [Build and deploy generative AI agents using natural language with Vertex AI Agent Builder - YouTube](https://www.youtube.com/watch?v=GCmGxBl3RLY)
- [GitHub - kkrishnan90/vertex-ai-search-agent-builder-demo](https://github.com/kkrishnan90/vertex-ai-search-agent-builder-demo)

## References

- [Agents \| Kaggle](https://www.kaggle.com/whitepaper-agents)
- [Building effective agents \\ Anthropic](https://www.anthropic.com/research/building-effective-agents)
- [Google's Blueprint to Building Powerful Agents - YouTube](https://www.youtube.com/watch?v=Z8vTgJkwyA0)
- [Get started  \|  Genkit  \|  Firebase](https://firebase.google.com/docs/genkit/get-started)
- [oscar - Git at Google](https://go.googlesource.com/oscar/)
- [LLM Agents - Explained! - YouTube](https://www.youtube.com/watch?v=5CLNoPiMbUc)
- [Agents 101: How to build your first AI Agent in 30 minutes!⚡️ - DEV Community](https://dev.to/copilotkit/agents-101-how-to-build-your-first-ai-agent-in-30-minutes-1042)
- [Generative AI Fine Tuning LLM Models Crash Course - YouTube](https://youtu.be/t-0s_2uZZU0)
- [Real Terms for AI - YouTube](https://www.youtube.com/playlist?list=PLIivdWyY5sqLvGdVLJZh2EMax97_T-OIB)
- [Multi-Agent Portfolio Collaboration with OpenAI Agents SDK](https://cookbook.openai.com/examples/agents_sdk/multi-agent-portfolio-collaboration/multi_agent_portfolio_collaboration)
- [\[2505.10468\] AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applications and Challenges](https://arxiv.org/abs/2505.10468)
- [GitHub - NirDiamant/agents-towards-production: This repository delivers end-to-end, code-first tutorials covering every layer of production-grade GenAI agents, guiding you from spark to scale with proven patterns and reusable blueprints for real-world launches.](https://github.com/NirDiamant/agents-towards-production)
- [How we built our multi-agent research system \\ Anthropic](https://www.anthropic.com/engineering/built-multi-agent-research-system)
- [ai-engineering-hub/agent-with-mcp-memory at main · patchy631/ai-engineering-hub · GitHub](https://github.com/patchy631/ai-engineering-hub/tree/main/agent-with-mcp-memory)
- [Enabling customers to deliver production-ready AI agents at scale \| Artificial Intelligence](https://aws.amazon.com/blogs/machine-learning/enabling-customers-to-deliver-production-ready-ai-agents-at-scale/)
