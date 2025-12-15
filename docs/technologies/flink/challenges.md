# Challenges

## Small file generation

- Streaming ingestion often generates many small Apache Parquet™ files, which significantly degrade query performance and increase metadata and storage overhead. This is a common challenge when data arrives continuously and must be written in near real time.
- The traditional and most common merging method operates record by record, requiring each Parquet file to be decompressed, decoded from columnar to row format, merged, and then re-encoded and compressed again. While functional, this approach is computationally heavy and slow due to repetitive encode/decode transformations.

## Partition skew

- Another problem we faced was that short-lived downstream slowdowns (like garbage collection pauses) can unbalance Kafka consumption across Flink subtasks. Skewed data leads to less efficient compression and slower queries.
- We addressed this through operational tuning (aligning parallelism with partitions, adjusting fetch parameters), connector-level fairness (round-robin polling, pause/resume for heavy partitions, per-partition quotas), and improved observability (per-partition lag metrics, skew-aware autoscaling, and targeted alerts).

## Checkpoint and Commit Synchronization

- We also found that Flink checkpoints track consumed offsets, while Hudi commits track writes. If they become misaligned during a failure, data can be skipped or duplicated.
- To solve this problem, we extended Hudi commit metadata to embed Flink checkpoint IDs, enabling deterministic recovery during rollbacks or failovers.

[From Batch to Streaming: Accelerating Data Freshness in Uber’s Data Lake \| Uber Blog](https://www.uber.com/en-IN/blog/from-batch-to-streaming-accelerating-data-freshness-in-ubers-data-lake/)
