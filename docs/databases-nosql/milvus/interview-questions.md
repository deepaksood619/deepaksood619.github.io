# Interview Questions

### Architecture & Core Concepts

**Q1.** Describe the architecture of Milvus. What are the key components and their roles?

Milvus is a distributed vector database with the following core components:

- **QueryNode:** Handles vector searches
- **DataNode:** Handles insert/update/delete operations
- **IndexNode:** Builds vector indexes
- **Proxy:** API gateway and query router
- **RootCoord, QueryCoord, DataCoord, IndexCoord:** Manage coordination and metadata
- **Etcd:** Metadata store
- **Pulsar:** Messaging backbone for internal event streaming
- **MinIO / S3:** Object storage for segments and indexes

### Indexing & Search Performance

**Q2.** What are the different indexing types Milvus supports, and when do you use each?

- **IVF_FLAT:** Balanced performance; suitable for medium-sized datasets
- **IVF_PQ:** Low memory footprint, high latency; useful for resource-constrained environments
- **HNSW:** High recall and low latency; best for low-latency applications
- **DISKANN:** Disk-based index for massive datasets exceeding RAM capacity
- **FLAT:** Exact search; best for benchmarking

**Q3.** How do you choose the best search parameters (`ef`, `nprobe`) for ANN search in Milvus?

- Use `ef` (for HNSW) and `nprobe` (for IVF) to balance **recall vs. latency**
- Start low, measure recall, and increase incrementally
- Run A/B tests for real query loads
- Use metric logging to track recall and latency tradeoffs in production

### Scaling & Load Handling

**Q4.** How do you scale Milvus for large-scale ingestion (e.g., millions of embeddings/hour)?

- Horizontal scaling of **DataNodes** to parallelize ingestion
- Use **sharding** across collections/partitions
- Tune batch size and flush intervals
- Increase Pulsar partitions to avoid messaging bottlenecks
- Pre-warm memory using `load_collection` calls

**Q5.** What is Milvus's mechanism for data sharding and partitioning?

- **Collections** are top-level namespaces
- **Partitions** divide data logically within a collection
- Shards are internal constructs used for horizontal scaling
- Partitioning can optimize queries if metadata filtering is used effectively

**Q6.** How does Milvus handle high availability and fault tolerance?

- Coordination services (e.g., RootCoord) restartable via Kubernetes
- Etcd, Pulsar, and MinIO should be deployed in **HA mode**
- Use persistent volumes (PVCs) for stateful components
- Monitor with readiness/liveness probes
- Set up backup/restore via external MinIO/S3 tools

### Storage & Retention

**Q7.** How does Milvus manage vector and metadata storage under the hood?

- Metadata (schemas, collection info) stored in **etcd**
- Vector data written to **Pulsar** then flushed to **MinIO or S3**
- Indexes built and saved in object storage (MinIO/S3)
- Write-ahead logs (WAL) are managed by Milvus internally

**Q8.** How do you manage data versioning or schema evolution in Milvus?

- Milvus supports **collection and field-level schemas**
- For schema changes: Create new collections with new schemas
- Use naming/versioning conventions like `collection_v2`
- Data migration via custom scripts or SDKs (Python/Go)

### Monitoring, Observability & Optimization

**Q9.** What metrics do you track to monitor Milvus health and performance?

- Query latency, insert throughput, flush time
- Node memory and CPU usage (QueryNode, DataNode)
- Pulsar consumer lag
- Index build time
- Collection load/unload events
- Disk I/O, especially for MinIO/S3 and DISKANN

**Q10.** Describe a real-world scenario where vector search degraded in Milvus. How would you debug it?

1. Identify collection/query degrading (via logs or metrics)
2. Check index load status — was it preloaded?
3. Examine QueryNode logs for OOMs or slow response
4. Inspect Pulsar/etcd lag
5. Scale nodes if overloaded
6. Tune search parameters or consider reindexing with HNSW/IVF

### Incident Management

**Q11.** You receive an alert that Milvus vector queries are timing out. What’s your step-by-step triage?

- Check if QueryNode or Proxy crashed
- Validate collection is loaded (`show_loaded_collections`)
- Check CPU/memory saturation via Grafana/Prometheus
- Inspect Pulsar topic health (lag)
- Restart failing components with proper `gracePeriod`
- Rebalance load across nodes if needed

### RAG/LLM Integration

**Q12.** How do you optimize Milvus usage in a RAG (Retrieval Augmented Generation) setup?

- Use filtered vector search (`search with filter`)
- Maintain metadata (e.g., source, timestamp) for document chunks
- Periodic embedding re-generation on source changes
- Pre-load collections on app startup
- Cache common queries via Redis or similar
