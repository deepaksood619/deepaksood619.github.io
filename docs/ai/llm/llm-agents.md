# LLM Agents

Presentation - [Automating the Future: Build Powerful AI Agents - Google Slides](https://docs.google.com/presentation/d/1nRNP7h89k-8FTCP2kMSMbAa0zIJ6r0COm7voa1JT6Sc/edit?usp=sharing)

An LLM Agent is a software entity capable of reasoning and autonomously executing tasks.

[GitHub - viktoriasemaan/multi-agent: Examples of AI Multi-Agent Solutions](https://github.com/viktoriasemaan/multi-agent)

[Building LLM Agents with Tool Use - YouTube](https://youtu.be/5drn2DO7gNY)

[AI Agents Are Changing AWS Cost Prediction - YouTube](https://youtu.be/_cjuQlc62uc)

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

## AI Agents / Tools

- [agent.ai \| The Professional Network for AI Agents](https://agent.ai/agents)
- [AI Agents Directory - Find and Compare AI Assistants \| AI Agents List](https://aiagentslist.com/)
- [AI Agents Marketplace \| AI Agents Directory - Discover Best AI Agents](https://aiagentsdirectory.com/)
- [GitHub - MotiaDev/motia: Event-based orchestration framework for agents and intelligent automations](https://github.com/MotiaDev/motia)
- [GitHub - agno-agi/agno: Agno is a lightweight library for building Agents with memory, knowledge, tools and reasoning.](https://github.com/agno-agi/agno)
	- [A beautiful UI for your Agents - Agno](https://docs.agno.com/agent-ui/introduction)
	- Developers use Agno to build Reasoning Agents, Multimodal Agents, Teams of Agents and Agentic Workflows. Agno also provides a beautiful UI to chat with your Agents, pre-built FastAPI routes to serve your Agents and tools to monitor and evaluate their performance.
- [GitHub - strands-agents/sdk-python: A model-driven approach to building AI agents in just a few lines of code.](https://github.com/strands-agents/sdk-python)
	- [Introducing Strands Agents, an Open Source AI Agents SDK \| AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/)
- [GitHub - NirDiamant/GenAI\_Agents: This repository provides tutorials and implementations for various Generative AI Agent techniques, from basic to advanced. It serves as a comprehensive guide for building intelligent, interactive AI systems.](https://github.com/NirDiamant/GenAI_Agents)

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
