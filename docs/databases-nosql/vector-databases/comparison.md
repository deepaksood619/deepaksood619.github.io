# Comparison

- [GitHub Star History - Vector DB Comparison](https://www.star-history.com/#qdrant/qdrant&milvus-io/milvus&chroma-core/chroma&weaviate/weaviate&Date)
- [Vector DB Comparison](https://superlinked.com/vector-db-comparison)
- [Comprehensive Vector Database Comparison - Features, Performance, and Capabilities](https://vectordb.lqhl.me/)

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
