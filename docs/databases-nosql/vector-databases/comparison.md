# Comparison

- [GitHub Star History - Vector DB Comparison](https://www.star-history.com/#qdrant/qdrant&milvus-io/milvus&chroma-core/chroma&weaviate/weaviate&Date)
- [Vector DB Comparison](https://superlinked.com/vector-db-comparison)
- [Comprehensive Vector Database Comparison - Features, Performance, and Capabilities](https://vectordb.lqhl.me/)
- [The 5 Best Vector Databases | A List With Examples | DataCamp](https://www.datacamp.com/blog/the-top-5-vector-databases)
- [ChatGPT - Milvus vs pgvector Performance](https://chatgpt.com/share/6859a229-c594-8008-9d4f-c28c4578c8f2)

| Feature              | Chroma                                   | Pinecone                       | Weaviate                                | Faiss                                       | Qdrant                                 | Milvus                           | PGVector                           |
| -------------------- | ---------------------------------------- | ------------------------------ | --------------------------------------- | ------------------------------------------- | -------------------------------------- | -------------------------------- | ---------------------------------- |
| Open-source          | ✅                                        | ❎                              | ✅                                       | ✅                                           | ✅                                      | ✅                                | ✅                                  |
| Primary Use Case     | LLM Apps Development                     | Managed Vector Database for ML | Scalable Vector Storage and Search      | High-Speed Similarity Search and Clustering | Vector Similarity Search               | High-Performance AI Search       | Adding Vector Search to PostgreSQL |
| Integration          | LangChain, LlamaIndex                    | LangChain                      | OpenAI, Cohere, HuggingFace             | Python/NumPy, GPU Execution                 | OpenAPI v3, Various Language Clients   | TensorFlow, PyTorch, HuggingFace | Built into PostgreSQL ecosystem    |
| Scalability          | Scales from Python notebooks to clusters | Highly scalable                | Seamless scaling to billions of objects | Capable of handling sets larger than RAM    | Cloud-native with horizontal scaling   | Scales to billions of vectors    | Depends on PostgreSQL setup        |
| Search Speed         | Fast similarity searches                 | Low-latency search             | Milliseconds for millions of objects    | Fast, supports GPU                          | Custom HNSW algorithm for rapid search | Optimized for low-latency search | Approximate Nearest Neighbor (ANN) |
| Data Privacy         | Supports multi-user with data isolation  | Fully managed service          | Emphasizes security and replication     | Primarily for research and development      | Advanced filtering on vector payloads  | Secure multi-tenant architecture | Inherits PostgreSQL’s security     |
| Programming Language | Python, JavaScript                       | Python                         | Python, Java, Go, others                | C++, Python                                 | Rust                                   | C++, Python, Go                  | PostgreSQL extension (SQL-based)   |

## Milvus vs Qdrant

- [**Vector Database Benchmarks - Qdrant**](https://qdrant.tech/benchmarks/)
- [VectorDBBench: An Open-Source VectorDB Benchmark Tool](https://zilliz.com/vdbbench-leaderboard)
- [Milvus vs Qdrant: Vector Database Performance Comparison](https://myscale.com/blog/milvus-vs-qdrant-vector-database-performance/)
- [Choosing a vector db for 100 million pages of text. Leaning towards Milvus, Qdrant or Weaviate. Am I missing anything, what would you choose? : r/vectordatabase](https://www.reddit.com/r/vectordatabase/comments/1dcvyrm/choosing_a_vector_db_for_100_million_pages_of/)

## Qdrant vs Weaviate

| Feature              | Qdrant                                                   | Weaviate                                                            |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------------------------- |
| Data Model           | Vector + Payload (JSON-like)                             | Graph Database + Vectors                                            |
| Programming Language | Rust (performance-focused)                               | Go (modular and extensible)                                         |
| API                  | REST API, Client Libraries                               | GraphQL API                                                         |
| Indexing Algorithm   | HNSW, IVF, ANNOY                                         | HNSW, IVF, Flat                                                     |
| Hybrid Search        | Native support (dense + sparse vectors)                  | Native support (BM25 + vector search)                               |
| Filtering            | Metadata-based filtering                                 | Metadata-based, Graph Traversal                                     |
| Data Relationships   | Limited (focus on vector search)                         | Strong (supports complex graph structures)                          |
| Scalability          | Horizontal scaling, Sharding, Clustering                 | Horizontal scaling, Sharding                                        |
| Deployment           | Self-hosted, Docker, Kubernetes, Qdrant Cloud            | Self-hosted, Docker, Kubernetes, Weaviate Cloud                     |
| Use Cases            | Semantic Search, Recommendation Systems, Image Retrieval | Knowledge Graphs, Fraud Detection, Social Networks, Semantic Search |

## Comparisons

### Weaviate

- Best suited for our pipeline due to:
- Native graph-like object relationships (aligns with Graphiti)
- Built-in hybrid search (BM25 + vectors).
- Module support for external models (like OpenAI, Cohere).
- Works well with LangGraph via GraphQL or REST.

### Qdrant

- Lightweight, fast, and great hybrid search.
- Lacks graph modeling (less synergy with Graphiti).
- Super scalable and embedding-agnostic.
- Pairs well with LangGraph for retrieval, but memory/relationship modeling is manual.

### Milvus

- Strong at high-throughput vector search.
- Lacks hybrid search out of the box (requires integration).
- No graph or semantic structure; you'd handle relationships separately.
- More infra-heavy (dependency on etcd, Pulsar).

### Elasticsearch

- Good keyword search, scalable, mature ecosystem.
- Vector search is not native-first (plugin-dependent).
- No built-in LLM/RAG support.
- Not ideal for vector-first or memory-based AI pipelines, but can complement as a BM25 keyword search layer.
