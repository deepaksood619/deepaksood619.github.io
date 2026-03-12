# Interview Questions

## Top 5 Vector Database Questions

1. What are the core trade-offs between **HNSW** (Hierarchical Navigable Small World) and **IVF** (Inverted File) indexing in terms of memory, speed, and accuracy?

2. How does **Metadata Filtering** (pre-filtering vs. post-filtering) impact the recall and latency of a vector search?

3. When would you use **Product Quantization (PQ)** or **Scalar Quantization (SQ)**, and what is the typical impact on retrieval precision?

4. How do you handle **Multi-Tenancy** in a vector database to ensure data isolation and prevent "noisy neighbor" performance issues for SaaS users?

5. What is the strategy for **Re-indexing** a production database when you switch to a new embedding model (e.g., moving from 768 to 1536 dimensions) without downtime?

## Answers

### 1. HNSW vs. IVF

- **HNSW:** A graph-based index. It is extremely fast for queries and offers high recall but has a **high memory footprint** because it stores a complex graph structure in RAM. It’s best for "always-on" low-latency apps.

- **IVF:** A cluster-based index. It divides vectors into "buckets." It is more **memory-efficient** and faster to build but usually has slightly higher latency and lower recall than HNSW because it only searches the most relevant clusters.

### 2. Metadata Filtering

- **Pre-filtering:** Filters the data _before_ the vector search. It ensures 100% accurate filtering but can be slow if the filter is "weak" (e.g., filtering for a common tag), as the index might not be optimized for that combination.

- **Post-filtering:** Performs the vector search first, then removes results that don't match the filter. This is fast but risky; if your search returns 10 results and all 10 are filtered out, the user gets **zero results** even if matching data exists deeper in the database.

### 3. Quantization (PQ vs. SQ)

- **Scalar Quantization (SQ):** Rounds floating-point numbers (e.g., 32-bit to 8-bit). It reduces memory by 4x with minimal accuracy loss.

- **Product Quantization (PQ):** Breaks vectors into chunks and "compresses" each chunk into a codebook value. It can reduce memory by **10x-50x**, but it significantly impacts precision. Use PQ for billion-scale datasets where RAM cost is the primary bottleneck.

### 4. Multi-Tenancy Strategies

- **Metadata Tagging:** Store all users in one index and filter by `user_id`. Simple to manage but carries a risk of data leakage if a bug occurs in the filter logic.

- **Namespacing/Partitioning:** Uses logical partitions within the DB. Offers better performance isolation.

- **Collection-per-User:** Physical isolation. Most secure, but doesn't scale well if you have 100,000+ small users, as each collection has its own overhead.

### 5. Zero-Downtime Re-indexing

You cannot "convert" old embeddings to a new model's dimensions. You must:

1. **Dual-Write:** Start writing new incoming data to both the old index and a new, empty index.

2. **Backfill:** Run a background job to re-embed historical data and upsert it into the new index.

3. **Shadow Testing:** Run queries against both and compare results.

4. **Cutover:** Once the new index is ready and validated, flip the API traffic to the new index and decommission the old one.
