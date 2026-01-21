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

## Apache Flink Checkpoints

Apache Flink implements a mechanism that allows reprocessing only the events from a specific point in time (previous stored state) instead of replaying the entire history of the application.

There are usually two options for doing that:

1. **External State -** Using an External State would mean that Apache Flink would be utilizing an external persisted system and every access and update would need to be stored to the external persisted storage (i.e., a database or distributed file system)
2. **Internal State -** Using an Internal State mechanism means that Apache Flink persists state locally while only parodically takes snapshots of the accumulated state of the application to an external storage or persisted file system to recreate and reproduce the state when necessary.

Each one of the approaches comes with its own advantages and drawbacks. For example, using External State means that scaling/rescaling of the state is independent from the processing logic but at the same time tends to be significantly slower because each access and update to the state needs to go over the network which impacts how quick the response might be.

Additionally, securing exactly-once guarantees with an external storage system tends to be troublesome because the technology would need to coordinate different environments with different processing semantics and guarantees. On the other hand, choosing an Internal State means that every state access or update is significantly faster since it’s local and does not have to travel through the network. Additionally, using Internal State allows the creation of a highly consistent, distributed state snapshot of a stream processing application, which is the case for Apache Flink.

### How checkpointing in Apache Flink works - Distributed Snapshots

Apache Flink recovers from failures without the need to reprocess every event from the beginning using a Distributed Snapshots mechanism. Distributed Snapshots in Apache Flink work in a similar fashion to the Chandy–Lamport algorithm.

A Flink application consists of a **pipeline of task managers** executing the operator’s code, and a **job manager** that acts as a single entity coordinating the checkpointing process among other responsibilities. **Job manager comes with a checkpoint coordinator** that periodically triggers checkpoints by sending trigger requests to all source tasks in the pipeline. Sources, upon request, take a snapshot copy of their state and store it in a distributed storage or file system before they emit checkpoint barriers downstream.

These barriers are injected into the data stream and flow with the records as part of the event stream. Barriers never (actually they might; see unaligned checkpoints) overtake records, they flow strictly in line. A barrier separates the records in the data stream into the set of records that goes into the current snapshot, and the records that go into the next snapshot.

### Configuring checkpoints in Apache Flink

#### Choosing State Backend

One of the primary considerations when you configure checkpoints in a Flink application is related to the chosen state backend. State backends include local data that can be accessed by each operator in Flink, and they are the ones defining where this ‘working’ state of the application is kept and how it can be accessed by operators. Apache Flink offers two different state backends, the _HashMap State Backend_ and an _EmbeddedRocksDBStateBackend_, each of them coming with their own advantages and specific characteristics. We take a closer look at both state backends below.

- **HashMapStateBackend -**  The _HashMapStateBackend_ keeps all the ‘working’ state in memory which naturally results in a faster operation compared to the RocksDB state backend because each access happens in memory and there is no need for data serialization/deserialization. At the same time, this state backend is limited by the amount of available memory in our application.
- **EmbeddedRocksDBStateBackend -** The RocksDBStateBackend uses a co-located key-value store to keep the ‘working’ state of your Apache Flink application while it spills data into disks. Consequently, RocksDB needs to serialize and deserialize data for your application resulting in a 10X slower operation compared to the HashMap state backend described above. However, RocksDB memory size is practically ‘unlimited’ since we are no longer restricted by the available memory but only by the disk size which can be updated as needed.

#### Choosing Checkpoint Storage

A second configuration parameter that data engineers and software developers need to consider when configuring a Flink application is choosing the appropriate checkpoint storage, meaning defining where Apache Flink will store the distributed snapshots. Apache Flink provides two options for storing checkpoints: the JobManagerCheckpointStorage and the FileSystemCheckpointStorage which we describe below.

- **JobManagerCheckpointStorage -** As a default, Apache Flink uses the JobManagerCheckpointStorage which will use the memory of Flink JobManagers to store the checkpoints. Although this ensures that the checkpoints are persisted in the cases of TaskManager failures, when a JobManager fails the stored checkpoints will also disappear.
- FileSystemCheckpointStorage

[A%20beginners%20Guide%20to%20checkpoints%20in%20Apache%20Flink%20pdf.pdf](https://www.ververica.com/hubfs/Download%20assets/A%20beginners%20Guide%20to%20checkpoints%20in%20Apache%20Flink%20pdf.pdf)

[How Apache Flink manages Kafka consumer offsets](https://www.ververica.com/blog/how-apache-flink-manages-kafka-consumer-offsets)
