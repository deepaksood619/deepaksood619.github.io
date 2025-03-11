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

#### LangGraph

- [Build Agentic Workflows Using LangGraph! - YouTube](https://www.youtube.com/watch?v=QblpBsipCwM)
- [LangChain vs. LangGraph: Which AI Framwork Is Right for You?](https://www.curotec.com/insights/langchain-vs-langgraph-framework-comparison/)
- [AI Agent Workflows: A Complete Guide on Whether to Build With LangGraph or LangChain | by Sandi Besen | Towards Data Science](https://towardsdatascience.com/ai-agent-workflows-a-complete-guide-on-whether-to-build-with-langgraph-or-langchain-117025509fa0)
- [GitHub - neo4j-labs/llm-graph-builder: Neo4j graph construction from unstructured data using LLMs](https://github.com/neo4j-labs/llm-graph-builder)
- [Neo4j LLM Knowledge Graph Builder - Extract Nodes and Relationships from Unstructured Text](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/)
- [GraphRAG Python Package: Accelerating GenAI With Knowledge Graphs](https://neo4j.com/blog/graphrag-python-package/)
- [User Guide: RAG — neo4j-graphrag-python documentation](https://neo4j.com/docs/neo4j-graphrag-python/current/user_guide_rag.html#retriever-configuration)
- [GenAI Stack](https://neo4j.com/labs/genai-ecosystem/genai-stack/)

##### Courses

- [GraphAcademy — Free, Self-Paced, Hands-on Online Training](https://graphacademy.neo4j.com/)
- [Graph Data Modeling Fundamentals](https://graphacademy.neo4j.com/courses/modeling-fundamentals/)

#### LangSmith

- [LangSmith](https://www.langchain.com/langsmith)
- [What is LangSmith and why should I care as a developer? | by Logan Kilpatrick | Around the Prompt | Medium](https://medium.com/around-the-prompt/what-is-langsmith-and-why-should-i-care-as-a-developer-e5921deb54b5)

## Links

- [Why Developers are Quitting LangChain](https://analyticsindiamag.com/ai-features/why-developers-are-quitting-langchain/)
