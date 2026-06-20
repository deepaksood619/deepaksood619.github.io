---
slug: /databases-nosql/vector-databases/others
title: Others
description: Discover Elasticsearch, a powerful and scalable search engine for analyzing large data volumes quickly, with rich querying and broad community support.
created: 2025-06-23
updated: 2025-08-28
---
## ElasticSearch

a powerful search and analytics engine based on Apache Lucene. It's mainly used to store, search, and analyze large volumes of data quickly and in near real-time. Think of it as a super-fast, intelligent database specifically built to search through text, logs, documents, or even vector data.

### Pros

- Extremely fast and scalable
- Rich querying (full-text + filters + scoring)
- Big community and ecosystem (e.g., Kibana for visualization)
- Handles structured and unstructured data

### Cons

- Vector search is not as optimized as in Weaviate or Milvus
- Cluster management can get complex at scale
- Higher resource usage for large-scale setups

Note: Elasticsearch is not purpose-built for AI-native vector tasks. and Weaviate can handle it all because it supports hybrid search(Semantic+keyword matching)

## Others

- [turbopuffer](https://turbopuffer.com/)
	- [turbopuffer · GitHub](https://github.com/turbopuffer)
	- [Turbopuffer: Fast search on object storage \| Hacker News](https://news.ycombinator.com/item?id=40916786)
