# RAG - retrieval-augmented generation

Presentation - [Empowering GenAI with RAG](https://docs.google.com/presentation/d/1s8lM_3jm6eF_SbWRSzGjREO3QN7RZcgeUM_zA6TH-J8/edit#slide=id.p1)

RAG is an AI framework for retrieving facts from an external knowledge base to ground large language models (LLMs) on the most accurate, up-to-date information and to give users insight into LLMs' generative process.

- RAG combines retrieval and generation processes to enhance the capabilities of LLMs
- In RAG, the model retrieves relevant information from a knowledge base or external sources
- This retrieved information is then used in conjunction with the model's internal knowledge to generate coherent and contextually relevant responses
- RAG enables LLMs to produce higher-quality and more context-aware outputs compared to traditional generation methods
- Essentially, RAG empowers LLMs to leverage external knowledge for improved performance in various natural language processing tasks

## Why is Retrieval-Augmented Generation important

- You can think of the LLM as an over-enthusiastic new employee who refuses to stay informed with current events but will always answer every question with absolute confidence.
- Unfortunately, such an attitude can negatively impact user trust and is not something you want your chatbots to emulate!
- RAG is one approach to solving some of these challenges. It redirects the LLM to retrieve relevant information from authortative, pre-determined knowledge sources.
- Organizations have greater control over the generated text output, and users gain insights into how the ML generates the response.

## Codes

- [generative-ai/gemini/use-cases/retrieval-augmented-generation/multimodal\_rag\_langchain.ipynb at main · GoogleCloudPlatform/generative-ai · GitHub](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/multimodal_rag_langchain.ipynb)
- [GitHub - Farzad-R/Advanced-QA-and-RAG-Series: This repository contains advanced LLM-based chatbots for Q&A using LLM agents, and Retrieval Augmented Generation (RAG) and with different databases. (VectorDB, GraphDB, SQLite, CSV, XLSX, etc.)](https://github.com/Farzad-R/Advanced-QA-and-RAG-Series)
- [example-app-langchain-rag/rag\_chain.py at main · streamlit/example-app-langchain-rag · GitHub](https://github.com/streamlit/example-app-langchain-rag/blob/main/rag_chain.py)
- [GitHub - langchain-ai/rag-from-scratch](https://github.com/langchain-ai/rag-from-scratch)
- [generative-ai/gemini/qa-ops/building\_DIY\_multimodal\_qa\_system\_with\_mRAG.ipynb at main · GoogleCloudPlatform/generative-ai · GitHub](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/qa-ops/building_DIY_multimodal_qa_system_with_mRAG.ipynb)
- [Building A RAG System with Gemma, MongoDB and Open Source Models - Hugging Face Open-Source AI Cookbook](https://huggingface.co/learn/cookbook/en/rag_with_hugging_face_gemma_mongodb)

## Advanced

![rag-architecture](../../media/Pasted%20image%2020250129203918.jpg)

![RAG from Scratch](../../media/Pasted%20image%2020240802004652.jpg)

[Stop Saying RAG Is Dead – Hamel’s Blog](https://hamel.dev/notes/llm/rag/not_dead.html)

### Advanced RAG Techniques

- Query Expansion (with multiple queries)
    - [GitHub - pdichone/advanced-rag-techniques](https://github.com/pdichone/advanced-rag-techniques)
    - Downsides
		- Lots of results
			 - queries might not always be relevant or useful
		- Results not always relevant and or useful

[Advanced RAG Techniques: Unlocking the Next Level | by Tarun Singh | Medium](https://medium.com/@krtarunsingh/advanced-rag-techniques-unlocking-the-next-level-040c205b95bc)

RIG - Retrieval Interleaved Generation - [DataGemma through RIG and RAG - by Bugra Akyildiz](https://mlops.substack.com/p/datagemma-through-rig-and-rag)

#### Contextual Retrieval

Contextual Retrieval (introduced by Anthropic1) addresses a common issue in traditional Retrieval-Augmented Generation (RAG) systems: individual text chunks often lack enough context for accurate retrieval and understanding.

Contextual Retrieval enhances each chunk by adding specific, explanatory context before embedding or indexing it. This preserves the relationship between the chunk and its broader document, significantly improving the system's ability to retrieve and use the most relevant information.

- [Better Context for your RAG with Contextual Retrieval | MLExpert - Get Things Done with AI Bootcamp](https://www.mlexpert.io/blog/rag-contextual-retrieval)

#### Chunking

- **Fixed Size Chunking -** The simplest approach - split text into chunks of consistent size (e.g., 100 words, 200 characters). Easy to implement but might break sentences awkwardly.
- **Recursive Chunking -** Hierarchically splits documents, preserving structure while creating manageable chunks. Great for maintaining context across different levels of detail.
- **Document-based Chunking -** Uses natural document markers like paragraphs, sections, or chapters as boundaries. Keeps related information together but can create wildly different chunk sizes.
- **Semantic Chunking -** Variable-size chunks based on meaning rather than arbitrary markers. More sophisticated but computationally intensive.
- **Late Chunking -** Embeds first, then chunks - preserving more contextual information in the vectors themselves.

![Chunking Techniques](../../media/Pasted%20image%2020250803135740.png)

#### Reranking

- [Rerankers and Two-Stage Retrieval \| Pinecone](https://www.pinecone.io/learn/series/rag/rerankers/)
- [What is a reranker and do I need one? - ZeroEntropy](https://www.zeroentropy.dev/articles/what-is-a-reranker-and-do-i-need-one)

#### Others

- [ZeroEntropy - The Engine That Powers Human-Level Search](https://www.zeroentropy.dev/)

### GraphRAG

- [Enhancing the Accuracy of RAG Applications With Knowledge Graphs | by Tomaz Bratanic | Neo4j Developer Blog | Medium](https://medium.com/neo4j/enhancing-the-accuracy-of-rag-applications-with-knowledge-graphs-ad5e2ffab663)
- [Enhance Your RAG Applications with Knowledge Graph RAG | Build Intelligent Apps With SingleStore](https://www.singlestore.com/blog/enhance-your-rag-applications-with-knowledge-graph-rag/)
- [GraphRAG: Unlocking LLM discovery on narrative private data - Microsoft Research](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/)
- [GraphRAG: New tool for complex data discovery now on GitHub - Microsoft Research](https://www.microsoft.com/en-us/research/blog/graphrag-new-tool-for-complex-data-discovery-now-on-github/)
- [Neo4j | 🦜️🔗 LangChain](https://python.langchain.com/docs/integrations/graphs/neo4j_cypher/)
	- langchain cypher qa chain
- [YouTube](https://youtu.be/Z_4rohX4Ki8)

![Graph RAG](../../media/Screenshot%202024-12-27%20at%2011.34.53%20AM.jpg)

## Cache-Augmented Generation (CAG)

[RAG vs. CAG: Solving Knowledge Gaps in AI Models - YouTube](https://www.youtube.com/watch?v=HdafI0t3sEY)

[GitHub - hhhuang/CAG: Cache-Augmented Generation: A Simple, Efficient Alternative to RAG](https://github.com/hhhuang/CAG)

## Tools

- [GitHub - bitswired/website-to-knowledge-base](https://github.com/bitswired/website-to-knowledge-base)
- [GitHub - weaviate/Verba: Retrieval Augmented Generation (RAG) chatbot powered by Weaviate](https://github.com/weaviate/Verba)
- [GitHub - deepsense-ai/ragbits: Building blocks for rapid development of GenAI applications](https://github.com/deepsense-ai/ragbits)
- [GitHub - vitali87/code-graph-rag: Search Monorepos and get relevant answers](https://github.com/vitali87/code-graph-rag)
- [GitHub - microsoft/markitdown: Python tool for converting files and office documents to Markdown.](https://github.com/microsoft/markitdown)
- **[GitHub - HKUDS/RAG-Anything: "RAG-Anything: All-in-One RAG System"](https://github.com/HKUDS/RAG-Anything)**
- [GitHub - yichuan-w/LEANN: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device.](https://github.com/yichuan-w/LEANN)
	- Our evaluation shows that LEANN reduces index size to under 5% of the original raw data, achieving up to 50 times smaller storage than standard indexes, while maintaining 90% top-3 recall in under 2 seconds on real-world question answering benchmarks.

### NoCode Tools

- **RAGFlow** - RAGFlow is a RAG engine for deep document understanding! It lets you build enterprise-grade RAG workflows on complex docs with well-founded citations. Supports multimodal data understanding, web search, deep research, etc. 100% open-source with 59k+ stars!
	- [GitHub - infiniflow/ragflow: RAGFlow is an open-source RAG (Retrieval-Augmented Generation) engine based on deep document understanding.](https://github.com/infiniflow/ragflow)
- **xpander** - xpander is a framework-agnostic backend for agents that manages memory, tools, multi-user states, events, guardrails, etc. While it is not a core no-code tool, you can build, test, and deploy Agents by primarily using the UI. Compatible with LlamaIndex, CrewAI, etc.
	- https://github.com/xpander-ai/xpander.ai
- **Transformer Lab** - Transformer Lab is an app to experiment with LLMs: - Train, fine-tune, or chat.
	- One-click LLM download (DeepSeek, Gemma, etc.)
	- Drag-n-drop UI for RAG.
	- Built-in logging, and more. A 100% open-source and local!
	- [GitHub - transformerlab/transformerlab-app: Open Source Application for Advanced LLM + Diffusion Engineering: interact, train, fine-tune, and evaluate large language models on your own computer.](https://github.com/transformerlab/transformerlab-app)
- **Llama Factory** - LLaMA-Factory lets you train and fine-tune open-source LLMs and VLMs without writing any code. Supports 100+ models, multimodal fine-tuning, PPO, DPO, experiment tracking, and much more! 100% open-source with 50k stars!
	- [GitHub - hiyouga/LLaMA-Factory: Unified Efficient Fine-Tuning of 100+ LLMs & VLMs (ACL 2024)](https://github.com/hiyouga/LLaMA-Factory)
- **Langflow** - Langflow is a drag-and-drop visual tool to build AI agents. It lets you build and deploy AI-powered agents and workflows. Supports all major LLMs, vector DBs, etc. 100% open-source with 82k+ stars!
	- [GitHub - langflow-ai/langflow: Langflow is a powerful tool for building and deploying AI-powered agents and workflows.](https://github.com/langflow-ai/langflow)
- **AutoAgent** - AutoAgent is a zero-code framework that lets you build and deploy Agents using natural language. It comes with: - Universal LLM support
	- Native self-managing Vector DB
	- Function-calling and ReAct interaction modes.
	- 100% open-source with 5k stars!
	- [GitHub - HKUDS/AutoAgent: "AutoAgent: Fully-Automated and Zero-Code LLM Agent Framework"](https://github.com/HKUDS/AutoAgent)
- [GitHub - truefoundry/cognita: RAG (Retrieval Augmented Generation) Framework for building modular, open source applications for production by TrueFoundry](https://github.com/truefoundry/cognita)

## Links

- [What is RAG (Retrieval-Augmented Generation)?](https://aws.amazon.com/what-is/retrieval-augmented-generation)
- [RAG Best Practices: Enhancing Large Language Models with Retrieval-Augmented Generation | by Juan C Olamendy | Medium](https://medium.com/@juanc.olamendy/rag-best-practices-enhancing-large-language-models-with-retrieval-augmented-generation-6961c8b834ff)
- [A Gentle Introduction to Retrieval Augmented Generation (RAG)](https://wandb.ai/cosmo3769/RAG/reports/A-Gentle-Introduction-to-Retrieval-Augmented-Generation-RVmlldzo1MjM4Mjk1)
- [REALM: Integrating Retrieval into Language Representation Models](https://research.google/blog/realm-integrating-retrieval-into-language-representation-models/)
- [Learn RAG Fundamentals and Advanced Techniques](https://www.freecodecamp.org/news/learn-rag-fundamentals-and-advanced-techniques/)
- [Using ChatGPT to Search Enterprise Data with Pamela Fox - YouTube](https://www.youtube.com/watch?v=lj5NjKHuFlo)
- [What is retrieval-augmented generation? | IBM Research Blog](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
- [What is Retrieval-Augmented Generation (RAG)? - YouTube](https://youtu.be/T-D1OfcDW1M?si=KoUb-NXATK50d3i7)
- [**Vector Search RAG Tutorial - Combine Your Data with LLMs with Advanced Search - YouTube**](https://www.youtube.com/watch?v=JEBDfGqrAUA)
- [RAG - Retrieval-Augmented Generation - Full Guide - Build a RAG System to Chat with Your Documents - YouTube](https://www.youtube.com/watch?v=vdLquGgg28A&ab_channel=VinciBits)
- [GitHub - beaucarnes/vector-search-tutorial](https://github.com/beaucarnes/vector-search-tutorial)
- [DSPy: Not Your Average Prompt Engineering](https://jina.ai/news/dspy-not-your-average-prompt-engineering/)
- [langchain/cookbook/RAPTOR.ipynb at master · langchain-ai/langchain · GitHub](https://github.com/langchain-ai/langchain/blob/master/cookbook/RAPTOR.ipynb)
- [Introduction to Retrieval Augmented Generation (RAG)](https://www.coursera.org/projects/introduction-to-rag)
- [A beginner's guide to building a Retrieval Augmented Generation (RAG) application from scratch](https://learnbybuilding.ai/tutorials/rag-from-scratch)
- [Building RAG with Open-Source and Custom AI Models](https://www.bentoml.com/blog/building-rag-with-open-source-and-custom-ai-models)
- [RAG - Retrieval Augmented Generation - YouTube](https://www.youtube.com/playlist?list=PL8motc6AQftn-X1HkaGG9KjmKtWImCKJS)
- [How to Choose the Right Embedding Model for Your LLM Application | MongoDB](https://www.mongodb.com/developer/products/atlas/choose-embedding-model-rag/)
- [Building Production RAG Over Complex Documents - YouTube](https://www.youtube.com/watch?v=dI_TmTW9S4c)
- [Retrieval-Augmented Generation (RAG) Patterns and Best Practices - YouTube](https://www.youtube.com/watch?v=eUY9i1CWmUg)
- [RAG (Retrieval Augmented Generation) - YouTube](https://www.youtube.com/playlist?list=PLQxDHpeGU14Blorx3Ps1eZJ4XvKET1_vx)
- [Exploring Hacker News by mapping and analyzing 40 million posts and comments for fun | Wilson Lin](https://blog.wilsonl.in/hackerverse/)
- [Mastering RAG Systems for LLMs](https://go.kolena.com/mastering-rag-systems-for-llms)
- [Build a real-time RAG chatbot using Google Drive and Sharepoint](https://blog.streamlit.io/build-a-real-time-rag-chatbot-google-drive-sharepoint/)
- [Building a Knowledge base for custom LLMs using Langchain, Chroma, and GPT4All \| by Anindyadeep \| Medium](https://cismography.medium.com/building-a-knowledge-base-for-custom-llms-using-langchain-chroma-and-gpt4all-950906ae496d)
- [Introduction to Retrieval Augmented Generation (RAG) \| Weaviate](https://weaviate.io/blog/introduction-to-rag)
- [Advanced RAG Techniques \| Weaviate](https://weaviate.io/blog/advanced-rag)
- [Multimodal Retrieval Augmented Generation(RAG) \| Weaviate](https://weaviate.io/blog/multimodal-rag)
- [What is Agentic RAG \| Weaviate](https://weaviate.io/blog/what-is-agentic-rag)
- [RAG with BigQuery - YouTube](https://youtu.be/2kUNLAnXuUE)
- [RAG Crash Course - Daily Dose of Data Science](https://www.dailydoseofds.com/tag/rag-crash-course/)
