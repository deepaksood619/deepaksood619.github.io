# Releases / Upgrades / Change logs

## Apache Kafka 2.4

- Kafka Core
    - Allow consumers to fetch from closest replica (before this all reads and writes happened on the leader)
    - Implement admin API for replica reassignment
    - Sticky partitioner
    - Admin API for deleting consumers offset

https://www.confluent.io/blog/apache-kafka-2-4-latest-version-updates

## Apache Kafka 4.0

[Apache Kafka 4.0 Release: Default KRaft, Queues, Faster Rebalances](https://www.confluent.io/blog/latest-apache-kafka-release/)

- [Apache Kafka 4.0 \| ZooKeeper out, KRaft in! Scalable, Resilient, High Performance, more Cloud-Native - YouTube](https://www.youtube.com/watch?v=wQU0FtQl24A)
- Kafka Broker, Controller, Producer, Consumer and Admin Client
	- ZooKeeper is gone
	- [KIP-848: The Next Generation of the Consumer Rebalance Protocol](https://cwiki.apache.org/confluence/x/HhD1D)
	- [KIP-890: Transactions Server-Side Defense](https://cwiki.apache.org/confluence/x/B40ODg)
	- [KIP-932: Queues for Kafka (Early Access)](https://cwiki.apache.org/confluence/x/4hA0Dw)
		- [Queues for Kafka Explained (KIP-932) - YouTube](https://www.youtube.com/watch?v=Wb0xyqgaIqw)
		- Share Partition, Share Consumer
		- Cooperative consumption model
		- [Let's Take a Look at... KIP-932: Queues for Kafka! - Gunnar Morling](https://www.morling.dev/blog/kip-932-queues-for-kafka/)
		- [Queues for Kafka. Queues for Kafka is a proposed new… \| by Andrew Schofield \| Medium](https://medium.com/@andrew_schofield/queues-for-kafka-29afa8aeed86)
	- [KIP-1106: Add duration based offset reset option for consumer clients](https://cwiki.apache.org/confluence/x/NIyMEw)
	- [KIP-1043: Administration of groups](https://cwiki.apache.org/confluence/x/XoowEg)
- Kafka Streams
	- [KIP-1104: Allow Foreign Key Extraction from Both Key and Value in KTable Joins](https://cwiki.apache.org/confluence/x/gIuMEw)
	- [KIP-1112: Allow custom processor wrapping](https://cwiki.apache.org/confluence/x/TZCMEw)
- Kafka Connect
	- [KIP-1074: Allow the replication of user internal topics](https://cwiki.apache.org/confluence/x/jA3OEg)
		- Previously, MirrorMaker 2 automatically excluded topics whose names ended with .internal or -internal, incorrectly classifying them as internal topics. This behavior prevented legitimate business topics from being replicated unless users implemented a custom replication policy. This KIP introduces a configurable option that allows users to replicate such topics without requiring custom code.

[Apache Kafka 4.1 | Enhanced Stability, New OAuth Support, Scalable Queue...](https://youtu.be/cr9cDJGjm2E)

## Others

[Top Trends for Data Streaming with Apache Kafka and Flink in 2026 - Kai Waehner](https://www.kai-waehner.de/blog/2025/12/10/top-trends-for-data-streaming-with-apache-kafka-and-flink-in-2026/)

1. Proven platforms gain ground as the **data streaming ecosystem consolidates**
2. **Diskless Kafka** and Apache Iceberg create a new storage foundation
3. **Real-time analytics** becomes part of the streaming layer
4. Enterprises demand **SLAs with zero data loss** and seamless failover
5. **Regional cloud deployments** are driven by compliance and sovereignty
6. Streaming powers **Agentic AI with context and real-time model inference**

Data streaming experts should focus on helping their organizations:

- **Unify streaming and batch analytics** in a single architecture
- **Consolidate pipelines**, reduce operational burden, and increase platform value
- Deliver **regional compliance** through sovereign deployment options
- Guarantee **zero data loss** and rapid failover across regions **where needed**
- **Power AI systems with contextual, real-time event data**
