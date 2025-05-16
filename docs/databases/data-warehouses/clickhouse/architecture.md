# Architecture

- [1 INTRODUCTION](https://clickhouse.com/docs/academic_overview#1-introduction)
- [2 ARCHITECTURE](https://clickhouse.com/docs/academic_overview#2-architecture)
- [3 STORAGE LAYER](https://clickhouse.com/docs/academic_overview#3-storage-layer)
    - [3.1 On-Disk Format](https://clickhouse.com/docs/academic_overview#3-1-on-disk-format)
    - [3.2 Data Pruning](https://clickhouse.com/docs/academic_overview#3-2-data-pruning)
    - [3.3 Merge-time Data Transformation](https://clickhouse.com/docs/academic_overview#3-3-merge-time-data-transformation)
    - [3.4 Updates and Deletes](https://clickhouse.com/docs/academic_overview#3-4-updates-and-deletes)
    - [3.5 Idempotent Inserts](https://clickhouse.com/docs/academic_overview#3-5-idempotent-inserts)
    - [3.6 Data Replication](https://clickhouse.com/docs/academic_overview#3-6-data-replication)
    - [3.7 ACID Compliance](https://clickhouse.com/docs/academic_overview#3-7-acid-compliance)
- [4 QUERY PROCESSING LAYER](https://clickhouse.com/docs/academic_overview#4-query-processing-layer)
    - [4.1 SIMD Parallelization](https://clickhouse.com/docs/academic_overview#4-1-simd-parallelization)
    - [4.2 Multi-Core Parallelization](https://clickhouse.com/docs/academic_overview#4-2-multi-core-parallelization)
    - [4.3 Multi-Node Parallelization](https://clickhouse.com/docs/academic_overview#4-3-multi-node-parallelization)
    - [4.4 Holistic Performance Optimization](https://clickhouse.com/docs/academic_overview#4-4-holistic-performance-optimization)
    - [4.5 Workload Isolation](https://clickhouse.com/docs/academic_overview#4-5-workload-isolation)
    - [5 INTEGRATION LAYER](https://clickhouse.com/docs/academic_overview#5-integration-layer)
- [6 PERFORMANCE AS A FEATURE](https://clickhouse.com/docs/academic_overview#6-performance-as-a-feature)
    - [6.1 Built-in Performance Analysis Tools](https://clickhouse.com/docs/academic_overview#6-1-built-in-performance-analysis-tools)
    - [6.2 Benchmarks](https://clickhouse.com/docs/academic_overview#6-2-benchmarks)

## Abstract

ClickHouse, a popular opensource OLAP database designed for high-performance analytics over petabyte-scale data sets with high ingestion rates. Its storage layer combines a data format based on traditional log-structured merge (LSM) trees with novel techniques for continuous transformation (e.g. aggregation, archiving) of historical data in the background. Queries are written in a convenient SQL dialect and processed by a state-of-the-art vectorized query execution engine with optional code compilation. ClickHouse makes aggressive use of pruning techniques to avoid evaluating irrelevant data in queries. Other data management systems can be integrated at the table function, table engine, or database engine level.

[Architecture Overview](https://clickhouse.com/docs/academic_overview)

## Links

- [VLDB 2024 - ClickHouse: Lightning Fast Analytics for Everyone - YouTube](https://www.youtube.com/watch?v=7QXKBKDOkJE&ab_channel=ClickHouse)
- [Why is ClickHouse fast? - YouTube](https://www.youtube.com/playlist?list=PL0Z2YDlm0b3h6OKKbWVtZK3Ee6695ipEv)
- [ClickHouse gets lazier (and faster): Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization)
