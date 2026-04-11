# Langchain

[Welcome to LangChain - 🦜🔗 LangChain 0.0.180](https://python.langchain.com/en/latest/index.html)

- [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html)
- [Introduction to LangChain LLM: A Beginner’s Guide](https://www.makeuseof.com/langchain-llm-introduction/)
- [How to Build LLM Applications with LangChain | DataCamp](https://www.datacamp.com/tutorial/how-to-build-llm-applications-with-langchain)

![Langchain Modules](../../media/Screenshot%202024-04-16%20at%207.02.28%20PM.jpg)

```bash
python -m pip install --upgrade langchain[llm]
pip install chromadb
pip install pypdf

pip install chainlit
chainlit hello

chainlit run document_qa.py
```

#### Langchain vs LlamaIndex

Both LangChain & LlamaIndex offer distinct approaches to implementing RAG workflows.

**LangChain** follows a modular pipeline starting with Document Loaders that handle various file formats, followed by Text Splitters for chunk management, and Embeddings for vector creation.

It then utilizes Vector Stores like SingleStore, FAISS or Chroma for storage, a Retriever for similarity search, and finally, an LLM Chain for response generation. This framework emphasizes composability and flexibility in pipeline construction.

On the other hand, **LlamaIndex** begins with Data Connectors for multi-source loading, employs a Node Parser for sophisticated document processing, and features diverse Index Construction options including vector, list, and tree structures.

It implements a Storage Context for persistent storage, an advanced Query Engine for retrieval, and Response Synthesis for context integration. LlamaIndex specializes in data indexing and retrieval, offering more sophisticated indexing structures out of the box, while maintaining a focus on ease of use with structured data.

The key distinction lies in their approaches: LangChain prioritizes customization and pipeline flexibility, while LlamaIndex emphasizes structured data handling and advanced indexing capabilities, making each framework suitable for different use cases in RAG implementations.

No matter what AI framework you pick, I always recommend using a robust data platform like SingleStore that supports not just vector storage but also hybrid search, low latency, fast data ingestion, all data types, AI frameworks integration, and much more.

![image](../../media/Pasted%20image%2020241118181518.jpg)

[A Beginner’s Guide to Building LLM-Powered Applications with LangChain! - DEV Community](https://dev.to/pavanbelagatti/a-beginners-guide-to-building-llm-powered-applications-with-langchain-2d6e)

[Understanding LlamaIndex in 9 Minutes! - YouTube](https://www.youtube.com/watch?v=lOic_3bcxT8)

https://cloud.llamaindex.ai/

## LangGraph

- [GitHub - wassim249/fastapi-langgraph-agent-production-ready-template: A production-ready FastAPI template for building AI agent applications with LangGraph integration. This template provides a robust foundation for building scalable, secure, and maintainable AI agent services. · GitHub](https://github.com/wassim249/fastapi-langgraph-agent-production-ready-template) ⭐ 2.1k
	- Swagger UI - http://localhost:8000/docs
	- Grafana dashboards - http://localhost:3000 - admin,admin
	- Prometheus metrics - http://localhost:9090
- [Build Agentic Workflows Using LangGraph! - YouTube](https://www.youtube.com/watch?v=QblpBsipCwM)
- [LangChain vs. LangGraph: Which AI Framwork Is Right for You?](https://www.curotec.com/insights/langchain-vs-langgraph-framework-comparison/)
- [AI Agent Workflows: A Complete Guide on Whether to Build With LangGraph or LangChain | by Sandi Besen | Towards Data Science](https://towardsdatascience.com/ai-agent-workflows-a-complete-guide-on-whether-to-build-with-langgraph-or-langchain-117025509fa0)
- [GitHub - neo4j-labs/llm-graph-builder: Neo4j graph construction from unstructured data using LLMs](https://github.com/neo4j-labs/llm-graph-builder) ⭐ 4.6k
- [Neo4j LLM Knowledge Graph Builder - Extract Nodes and Relationships from Unstructured Text](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/)
- [GraphRAG Python Package: Accelerating GenAI With Knowledge Graphs](https://neo4j.com/blog/graphrag-python-package/)
- [User Guide: RAG — neo4j-graphrag-python documentation](https://neo4j.com/docs/neo4j-graphrag-python/current/user_guide_rag.html#retriever-configuration)
- [GenAI Stack](https://neo4j.com/labs/genai-ecosystem/genai-stack/)
- [Building LangGraph: Designing an Agent Runtime from first principles](https://blog.langchain.com/building-langgraph/)
- [How to Build Effective Agentic Systems with LangGraph \| Towards Data Science](https://towardsdatascience.com/how-to-build-effective-agentic-systems-with-langgraph/)

### Getting Started

[Quickstart - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/quickstart)

1. Define tools and model
2. Define state
3. Define model node
4. Define tool node
5. Define end logic
6. Build and compile the agent

[Thinking in LangGraph - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/thinking-in-langgraph)

Start with the process you want to automate

1. Step 1: Map out your workflow as discrete steps
2. Step 2: Identify what each step needs to do
	1. LLM steps
	2. Data steps
	3. Action steps
	4. User input steps
3. Step 3: Design your state
	1. What belongs in state?
		1. Include in state - Does it need to persist across steps? If yes, it goes in state.
		2. Don't store - Can you derive it from other data? If yes, compute it when needed instead of storing it in state.
	2. Keep state raw, format prompts on-demand
4. Step 4: Build your nodes
	1. Handle errors appropriately
	2. Implementing our email agent nodes
5. Step 5: Wire it together

![LangGraph workflow](../../media/Screenshot%202026-04-02%20at%201.12.55%20PM.png)

### Courses

- [GraphAcademy — Free, Self-Paced, Hands-on Online Training](https://graphacademy.neo4j.com/)
- [Graph Data Modeling Fundamentals](https://graphacademy.neo4j.com/courses/modeling-fundamentals/)
- [Persistence - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/persistence)
- [Durable execution - Docs by LangChain](https://docs.langchain.com/oss/python/langgraph/durable-execution)

## LangSmith

- [LangSmith](https://www.langchain.com/langsmith)
- [What is LangSmith and why should I care as a developer? | by Logan Kilpatrick | Around the Prompt | Medium](https://medium.com/around-the-prompt/what-is-langsmith-and-why-should-i-care-as-a-developer-e5921deb54b5)

## Links

- [Managing Threads and Conversation History in LangChain with Checkpoints \| by Muhammad Naufal Rizqullah \| Medium](https://medium.com/@m.naufalrizqullah17/managing-threads-and-conversation-history-in-langchain-with-checkpoints-df7b02beb321)
- [Why Developers are Quitting LangChain](https://analyticsindiamag.com/ai-features/why-developers-are-quitting-langchain/)
- [10 Python One-Liners for Calling LLMs from Your Code - MachineLearningMastery.com](https://machinelearningmastery.com/10-python-one-liners-for-calling-llms-from-your-code/)
