# Hudi

Hudi - Hadoop Upserts Deletes and Incremental

Apache Hudi ingests & manages storage of large analytical datasets over DFS (hdfs or cloud stores).

Apache Hudi is a transactional data lake platform that brings database and data warehouse capabilities to the data lake. Hudi reimagines slow old-school batch data processing with a powerful new incremental processing framework for low latency minute-level analytics.

![Apache Hudi](../../media/Pasted%20image%2020240801225724.png)

## Hudi Features

1. **Mutability support for all data lake workloads -** Quickly update & delete data with Hudi’s fast, pluggable indexing. This includes streaming workloads, with full support for out-of-order data, bursty traffic & data deduplication.
2. **Improved efficiency by incrementally processing new data -** Replace old-school batch pipelines with incremental streaming on your data lake. Experience faster ingestion and lower processing times for analytical workloads.
3. **ACID Transactional guarantees to your data lake -** Bring transactional guarantees to your data lake, with consistent, atomic writes and concurrency controls tailored for longer-running lake transactions.
4. **Unlock historical data with time travel -** Query historical data with the ability to roll back to a table version; debug data versions to understand what changed over time; audit data changes by viewing the commit history.
5. **Interoperable multi-cloud ecosystem support -** Extensive ecosystem support with plug-and-play options for popular data sources & query engines. Build future-proof architectures interoperable with your vendor of choice.
6. **Comprehensive table services for high-performance analytics** - Fully automated table services that continuously schedule & orchestrate clustering, compaction, cleaning, file sizing & indexing to ensure tables are always ready.
7. **A rich platform to build your lakehouse faster** - Effortlessly build your lakehouse with built-in tools for auto ingestion from services like Debezium and Kafka and auto catalog sync for easy discoverability & more.
8. **Query acceleration through multi-modal indexes** - Experience faster write transactions on huge/wide tables & faster query performance with first-of-its kind multi-modal indexing subsystem.
9. **Resilient Pipelines with schema evolution & enforcement** - Easily change the current schema of a Hudi table to adapt to the data that is changing over time and ensure pipeline resilience by failing fast and avoiding data corruption.

## Original Motivation

- Batch ingestion is too slow
- Rewrite entire table/partition several times a day
- ETLs off raw data have no smarts to recompute
- Late arriving data is a nightmare

![Streaming vs batch](../../media/Screenshot%202024-10-07%20at%203.27.21%20PM.jpg)

![Streaming vs batch vs incremental stack](../../media/Screenshot%202024-10-07%20at%203.28.04%20PM.jpg)

## Architecture

![Hudi Architecture](../../media/Screenshot%202024-10-07%20at%203.31.50%20PM.jpg)

## Storage Type

### Copy On Write (COW)

Queries: Snapshot, Incremental

![copy on write](../../media/Screenshot%202024-10-07%20at%203.32.25%20PM.jpg)

### Merge on read (MOR)

![merge on read](../../media/Screenshot%202024-10-07%20at%203.34.05%20PM.jpg)

### Choosing Between COW and MOR

The choice between COW and MOR in Apache Hudi largely depends on your specific requirements.

1. **Read vs. Write Frequency:** If your workload is read-heavy, COW may be the better choice due to its optimized read performance. Conversely, for write-heavy applications where data is ingested frequently, MOR can handle the load more efficiently.
2. **Data Consistency:** If your application requires strong consistency and atomicity during writes, COW is preferable. MOR is better suited for scenarios where eventual consistency is acceptable.
3. **Use Case:** For analytical workloads and batch processing, COW shines. For real-time data processing and streaming applications, MOR is often the way to go.

## Links

- https://hudi.apache.org
- [Apache Hudi: A Deep Dive with Python Code Examples](https://blog.harshdaiya.com/apache-hudi-a-deep-dive-with-python-code-examples)
- [Apache Hudi vs. Delta Lake: Choosing the Right Tool for Your Data Lake on AWS | by Siladitya Ghosh | Medium](https://medium.com/@siladityaghosh/apache-hudi-vs-delta-lake-choosing-the-right-tool-for-your-data-lake-on-aws-8b97c66a5a12)
- [Exploring Time Travel Queries in Apache Hudi - DEVOPS DONE RIGHT..](https://opstree.com/blog/2024/10/22/time-travel-queries-in-apache-hudi/)
- [Understanding COW and MOR in Apache Hudi: Choosing the Right Storage Strategy  - DEVOPS DONE RIGHT..](https://opstree.com/blog/2024/11/12/understanding-cow-and-mor-in-apache-hudi-choosing-the-right-storage-strategy/)
