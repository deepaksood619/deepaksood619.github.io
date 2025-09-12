# Building

- [Create a Large Language Model from Scratch with Python - Tutorial - YouTube](https://www.youtube.com/watch?v=UU1WVnMk4E8)
- [Understanding Large Language Models - by Sebastian Raschka](https://magazine.sebastianraschka.com/p/understanding-large-language-models)
- [Large language models, explained with a minimum of math and jargon](https://www.understandingai.org/p/large-language-models-explained-with)
- [Catching up on the weird world of LLMs](https://simonwillison.net/2023/Aug/3/weird-world-of-llms/)
- [Llama from scratch (or how to implement a paper without crying) | Brian Kitano](https://blog.briankitano.com/llama-from-scratch/)
- [Llama - EXPLAINED! - YouTube](https://www.youtube.com/watch?v=yZ9jkgN2xHQ)
- [LLM2 Module 1 - Transformers | 1.6 Base/Foundation Models - YouTube](https://www.youtube.com/watch?v=sJsPgRg883w)
- [20 papers to master Language modeling? - YouTube](https://www.youtube.com/watch?v=QQIwfpOY-qA)
- [Bringing Llama 3 to Life | Joe Spisak, Delia David, Kaushik Veeraraghavan & Ye (Charlotte) Qi - YouTube](https://www.youtube.com/watch?v=ELIcy6flgQI)
- [GitHub - rasbt/reasoning-from-scratch: Implement a reasoning LLM in PyTorch from scratch, step by step](https://github.com/rasbt/reasoning-from-scratch)

## Architecture

![emerging-llm-app-stack](../../media/Pasted%20image%2020230827130415.jpg)

[Emerging Architectures for LLM Applications | Andreessen Horowitz](https://a16z.com/2023/06/20/emerging-architectures-for-llm-applications/)

[Transformers, explained: Understand the model behind GPT, BERT, and T5 - YouTube](https://youtu.be/SZorAJ4I-sA?si=-GMfzGThDO20aGkB)

- Positional encodings
- Attention
- Self attention
- GPT3 - 45tb of text data

![chat-gpt-working](../../media/Pasted%20image%2020240123172317.jpg)

[Let’s Architect! Discovering Generative AI on AWS | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/lets-architect-generative-ai/)

## Building

- [GitHub - karpathy/nanoGPT: The simplest, fastest repository for training/finetuning medium-sized GPTs.](https://github.com/karpathy/nanoGPT)

![LLM Working](../../media/llm-working.jpg)

### Decoding Strategies

- Greedy Search
- **Beam search** in Large Language Models (LLMs) is a decoding strategy that explores multiple potential output sequences simultaneously, keeping track of the most promising "beams" (or sequences) at each step, to find the most likely output.
- [Decoding Demystified : How LLMs Generate Text - III - DEV Community](https://dev.to/mahakfaheem/decoding-demystified-how-llms-generate-text-iii-3a0d)
- [Decoding Strategies in Large Language Models – Maxime Labonne](https://mlabonne.github.io/blog/posts/2023-06-07-Decoding_strategies.html)
- [Decoding Strategies in Large Language Models](https://huggingface.co/blog/mlabonne/decoding-strategies)
- [Decoding Strategies: How LLMs Choose The Next Word](https://www.assemblyai.com/blog/decoding-strategies-how-llms-choose-the-next-word)
- [Understanding greedy search and beam search \| by Jessica López Espejel \| Medium](https://medium.com/@jessica_lopez/understanding-greedy-search-and-beam-search-98c1e3cd821d)

## How to train your ChatGPT

### Stage 1: Pretraining

1. Download ~10TB of text
2. Get a cluster of ~6,000 GPUs
3. Compress the text into a neural network, pay ~$2M, wait ~12 days
4. Obtain base model

### Stage 2: Finetuning

1. Write labeling instructions
2. Hire people (or use scale.ai!), collect 100K high quality ideal Q&A responses, and/or comparisons
3. Finetune base model on this data, wait ~1 day
4. Obtain assistant model
5. Run a lot of evaluations
6. Deploy
7. Monitor, collect misbehaviors, go to step 1

## LLM Security

- Jailbreaking
- Prompt injection
- Backdoors & data poisoning
- Adversarial inputs
- Insecure output handling
- Data extraction & privacy
- Data reconstruction
- Denial of service
- Escalation
- Watermarking & evasion
- Model theft

[1hr Talk Intro to Large Language Models - YouTube](https://www.youtube.com/watch?v=zjkBMFhNj_g)

[Awesome ChatGPT Prompts | This repo includes ChatGPT prompt curation to use ChatGPT better.](https://prompts.chat/#act-as-an-unconstrained-ai-model-dan)

[SynthID - Google DeepMind](https://deepmind.google/technologies/synthid/)

## Dev Tools

- LangChain
- Langfuse
- Eden AI
- Langdock
- LLM Spark

- [GitHub - Significant-Gravitas/Auto-GPT: An experimental open-source attempt to make GPT-4 fully autonomous.](https://github.com/Significant-Gravitas/Auto-GPT)
- [Llama 2 - Meta AI](https://ai.meta.com/llama/)
- [Introducing Code Llama, a state-of-the-art large language model for coding](https://ai.meta.com/blog/code-llama-large-language-model-coding/)
- [GitHub - jerryjliu/llama\_index: **LlamaIndex** (GPT Index) is a data framework for your LLM applications](https://github.com/jerryjliu/llama_index)
- [Building your Generative AI apps with Meta's Llama 2 and Databricks | Databricks Blog](https://www.databricks.com/blog/building-your-generative-ai-apps-metas-llama-2-and-databricks)
- [GitHub - stoyan-stoyanov/llmflows: LLMFlows - Simple, Explicit and Transparent LLM Apps](https://github.com/stoyan-stoyanov/llmflows)
- [Patterns for Building LLM-based Systems & Products](https://eugeneyan.com/writing/llm-patterns/)
- [GitHub - ShishirPatil/gorilla: Gorilla: An API store for LLMs](https://github.com/ShishirPatil/gorilla)
- [gorilla-llm (Gorilla LLM (UC Berkeley))](https://huggingface.co/gorilla-llm)
- [Advancing Spark - LLM Evaluation with MLFlow 2 4 - YouTube](https://www.youtube.com/watch?v=t_WtkRdycTY)
- [GitHub - Chainlit/chainlit: Build Python LLM apps in minutes ⚡️](https://github.com/Chainlit/chainlit)
- [Awesome GPT-4](https://gpt4.tools/)
- [GitHub - xtekky/gpt4free: The official gpt4free repository | various collection of powerful language models](https://github.com/xtekky/gpt4free)
- [GitHub - yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi)
- [GitHub - coqui-ai/TTS: 🐸💬 - a deep learning toolkit for Text-to-Speech, battle-tested in research and production](https://github.com/coqui-ai/TTS)
- [GitHub - tensorchord/Awesome-LLMOps: An awesome & curated list of best LLMOps tools for developers](https://github.com/tensorchord/Awesome-LLMOps)
- [AI Development Cloud Platform | Deploy & Manage AI Logic](https://mindsdb.com/)
- [GitHub - microsoft/autogen: A programming framework for agentic AI. Join our Discord: https://discord.gg/pAbnFJrkgZ](https://github.com/microsoft/autogen)
- [GitHub - comfyanonymous/ComfyUI: The most powerful and modular stable diffusion GUI, api and backend with a graph/nodes interface.](https://github.com/comfyanonymous/ComfyUI)
    - [How to install and use ComfyUI - Stable Diffusion. - YouTube](https://www.youtube.com/watch?v=KTPLOqAMR0s)
- [GitHub - bentoml/OpenLLM: Operating LLMs in production](https://github.com/bentoml/OpenLLM)
    - [BentoML: Build, Ship, Scale AI Applications](https://bentoml.com/)
- [GitHub - agiresearch/AIOS: AIOS: LLM Agent Operating System](https://github.com/agiresearch/AIOS)
    - [LLM agent operating system (AIOS) and the future of LLM-powered agents | by Simeon Emanuilov | Apr, 2024 | Medium](https://medium.com/@simeon.emanuilov/llm-agent-operating-system-aios-and-the-future-of-llm-powered-agents-3d08b4e91c34)
- [AirLLM Unleashed. Efficiently Running 70B LLM Inference… | by Haribaskar Dhanabalan | Medium](https://medium.com/@haribaskar.dhanabalan/airllm-unleashed-2e32dae74c3d)
- [GitHub - microsoft/TinyTroupe: LLM-powered multiagent persona simulation for imagination enhancement and business insights.](https://github.com/microsoft/TinyTroupe)
- [GitHub - browserbase/stagehand: An AI web browsing framework focused on simplicity and extensibility.](https://github.com/browserbase/stagehand)
- [GitHub - microsoft/semantic-kernel: Integrate cutting-edge LLM technology quickly and easily into your apps](https://github.com/microsoft/semantic-kernel)

### Ollama / LM Studio

The easiest way to get up and running with large language models locally.

```bash
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama

docker exec -it ollama ollama run llama2

docker exec -it ollama ollama run llama2-uncensored

docker exec -it ollama ollama run mistral

>>> /? # for help
```

- [Docker](https://hub.docker.com/r/ollama/ollama)
- [LM Studio - SUPER EASY Text AI - Windows, Mac & Linux / How To - YouTube](https://www.youtube.com/watch?v=opx8yHP-SV0)
- [LM Studio - Discover, download, and run local LLMs](https://lmstudio.ai/)
- [Ollama Course – Build AI Apps Locally - YouTube](https://www.youtube.com/watch?v=GWB9ApTPTv4&ab_channel=freeCodeCamp.org)
- [Run DeepSeek-R1 on Your Laptop with Ollama - DEV Community](https://dev.to/shayy/run-deepseek-locally-on-your-laptop-37hl)
- [Jan: Open source ChatGPT-alternative that runs 100% offline - Jan](https://jan.ai/)

#### open-webui / openwebui / open webui (103K stars)

Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline. It supports various LLM runners like Ollama and OpenAI-compatible APIs, with built-in inference engine for RAG, making it a powerful AI deployment solution.

[GitHub - open-webui/open-webui: User-friendly AI Interface (Supports Ollama, OpenAI API, ...)](https://github.com/open-webui/open-webui)

OpenWebUI, it provides a universal chat like interface for using any models via Ollama. We can add prompt templates and use the chat for our purpose. It is a solution for using LLMs but not allowing the parent companies to collect the data. It is based on Open-AI's api so integrating other models would be a challenge.

- [Open WebUI](https://docs.openwebui.com/openapi-servers/mcp/)
- [GitHub - open-webui/mcpo: A simple, secure MCP-to-OpenAPI proxy server](https://github.com/open-webui/mcpo)

**Alternative**

- [librechat.ai](https://www.librechat.ai/)
	- [GitHub - danny-avila/LibreChat: Enhanced ChatGPT Clone: Features Agents, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-4o, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active project.](https://github.com/danny-avila/LibreChat)

### oobabooga

A Gradio web UI for Large Language Models. Supports transformers, GPTQ, AWQ, EXL2, llama.cpp (GGUF), Llama models.

[GitHub - oobabooga/text-generation-webui: A Gradio web UI for Large Language Models. Supports transformers, GPTQ, AWQ, EXL2, llama.cpp (GGUF), Llama models.](https://github.com/oobabooga/text-generation-webui)

[GitHub - oobabooga/text-generation-webui-extensions](https://github.com/oobabooga/text-generation-webui-extensions)

### Ludwig

Ludwig is an open-source, [declarative machine learning framework](https://ludwig.ai/latest/user_guide/what_is_ludwig/#why-declarative-machine-learning-systems) that makes it easy to define deep learning pipelines with a simple and flexible data-driven configuration system. Ludwig is suitable for a wide variety of AI tasks, and is hosted by the [Linux Foundation AI & Data](https://lfaidata.foundation/).

Ludwig enables you to apply state-of-the-art tabular, natural language processing, and computer vision models to your existing data and put them into production with just a [few short commands](https://ludwig.ai/latest/user_guide/command_line_interface).

[GitHub - ludwig-ai/ludwig: Low-code framework for building custom LLMs, neural networks, and other AI models](https://github.com/ludwig-ai/ludwig)

[Ludwig](https://ludwig.ai/latest/)

[What is Ludwig? - Ludwig](https://ludwig.ai/latest/user_guide/what_is_ludwig/)

### Others

- [GitHub - LMCache/LMCache: Supercharge Your LLM with the Fastest KV Cache Layer](https://github.com/LMCache/LMCache)

## SAAS

- [DataRobot AI Platform | Deliver Value from AI](https://www.datarobot.com/)
- [Accelerating Systems with Real-time AI Solutions - Groq](https://wow.groq.com/)
- [CrewAI](https://www.crewai.com/)

## Resources

**[LLM Visualization](https://bbycroft.net/llm)**

[Development with Large Language Models Tutorial - OpenAI, Langchain, Agents, Chroma - YouTube](https://www.youtube.com/watch?v=xZDB1naRUlk&t=1032s)

![document-based-question-answering-system](../../media/Screenshot%202023-12-28%20at%208.00.43.PM.jpg)

- [GitHub - openai/openai-cookbook: Examples and guides for using the OpenAI API](https://github.com/openai/openai-cookbook)
- [Vector Embeddings Tutorial - Create an AI Assistant with GPT-4 & Natural Language Processing - YouTube](https://www.youtube.com/watch?v=yfHHvmaMkcA)
- [This new AI is powerful and uncensored… Let’s run it - YouTube](https://www.youtube.com/watch?v=GyllRd2E6fg&ab_channel=Fireship)
- [Learn Generative AI in 30 Hours](https://www.freecodecamp.org/news/learn-generative-ai-in/)
- [AI Watermarking 101: Tools and Techniques](https://huggingface.co/blog/watermarking)
- [Optimize generative AI applications with pgvector indexing: A deep dive into IVFFlat and HNSW techniques | AWS Database Blog](https://aws.amazon.com/blogs/database/optimize-generative-ai-applications-with-pgvector-indexing-a-deep-dive-into-ivfflat-and-hnsw-techniques/)
- [V-JEPA: The next step toward advanced machine intelligence](https://ai.meta.com/blog/v-jepa-yann-lecun-ai-model-video-joint-embedding-predictive-architecture/)
- [GitHub - GoogleCloudPlatform/generative-ai: Sample code and notebooks for Generative AI on Google Cloud, with Gemini on Vertex AI](https://github.com/GoogleCloudPlatform/generative-ai)
- [ThunderKittens to make the GPUS go brr - by Bugra Akyildiz](https://mlops.substack.com/p/thunderkittens-to-make-the-gpus-go)
- [RoCE networks for distributed AI training at scale - Engineering at Meta](https://engineering.fb.com/2024/08/05/data-center-engineering/roce-network-distributed-ai-training-at-scale/)
- [GitHub - naklecha/llama3-from-scratch: llama3 implementation one matrix multiplication at a time](https://github.com/naklecha/llama3-from-scratch)
- [What We’ve Learned From A Year of Building with LLMs – Applied LLMs](https://applied-llms.org/)
- [Let's reproduce GPT-2 (124M) - YouTube](https://www.youtube.com/watch?v=l8pRSuU81PU)
- [Scaling and Reliability Challenges of LLama3](https://mlops.substack.com/p/scaling-and-reliability-challenges)
- [Building LLMs from the Ground Up: A 3-hour Coding Workshop - YouTube](https://www.youtube.com/watch?v=quh7z1q7-uc&ab_channel=SebastianRaschka)
- [How AWS engineers infrastructure to power generative AI](https://www.aboutamazon.com/news/aws/aws-infrastructure-generative-ai)
- [Advanced RAG Pipelines with LlamaIndex & Amazon Bedrock - YouTube](https://www.youtube.com/watch?v=crRyVZldwtg&ab_channel=AWSDevelopers)
- [Deep Dive into LLMs like ChatGPT - YouTube](https://youtu.be/7xTGNNLPyMI)
- [How Do AI Agents Actually Work? - YouTube](https://youtu.be/ASqYh4g4dgA)
- [What makes LLM tokenizers different from each other? GPT4 vs. FlanT5 Vs. Starcoder Vs. BERT and more - YouTube](https://youtu.be/rT6wVLEDC_w)
- [**LLM Visualization**](https://bbycroft.net/llm)
- [\[Full Workshop\] Reinforcement Learning, Kernels, Reasoning, Quantization & Agents — Daniel Han - YouTube](https://www.youtube.com/watch?v=OkEGJ5G3foU&ab_channel=AIEngineer)
	- [Advanced: Reinforcement Learning, Kernels, Reasoning, Quantization & Agents AIE 2025 - Google Slides](https://docs.google.com/presentation/d/1Jh5p_JDXt4eLD0ireaHJjJNpzqSF8E1WTwIHeojyjNU/mobilepresent?slide=id.g35e7f1de1a9_1_49)
	- [Reinforcement Learning (RL) Guide \| Unsloth Documentation](https://docs.unsloth.ai/basics/reinforcement-learning-rl-guide)
