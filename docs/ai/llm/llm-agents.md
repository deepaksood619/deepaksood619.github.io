# # LLM Agents

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
- [Build Multi-Agent Systems with SmolAgents - YouTube](https://www.youtube.com/watch?v=uzskhpH5fvo)
- [Build AI Agents using HuggingFace's SmolAgents \| Agentic AI - YouTube](https://www.youtube.com/watch?v=VSm5-CX4QaM)
- [Build AI Agents using HuggingFace's SmolAgents \| Agentic AI - YouTube](https://www.youtube.com/watch?v=VSm5-CX4QaM)
- [Hugging Face's Smolagents: A Guide With Examples](https://www.datacamp.com/tutorial/smolagents)

## AI Agents / Tools

- [agent.ai \| The Professional Network for AI Agents](https://agent.ai/agents)
- [AI Agents Directory - Find and Compare AI Assistants \| AI Agents List](https://aiagentslist.com/)
- [AI Agents Marketplace \| AI Agents Directory - Discover Best AI Agents](https://aiagentsdirectory.com/)

![AI Agents Landscape](../../media/Pasted%20image%2020250114143214.jpg)

## References

- [Google's Blueprint to Building Powerful Agents - YouTube](https://www.youtube.com/watch?v=Z8vTgJkwyA0)
