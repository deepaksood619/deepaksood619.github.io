---
slug: /technologies/kafka/releases-upgrades-changelogs
title: Apache Kafka Releases and Changelogs
description: Explore the latest updates and changes in Apache Kafka, including features from versions 2.4 and 4.0.
created: 2025-12-15
last_update: 2026-05-26
---
[Apache Mail Archives](https://lists.apache.org/list.html?dev@kafka.apache.org)

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
		- February 20, 2026 - Queues for Kafka provides queue semantics and elastic consumer scaling natively to Kafka through share groups and share consumers. This feature enables organizations to consolidate their messaging infrastructure while gaining elastic consumer scaling and per-message processing controls. Share groups and share consumers complement Kafka’s traditional consumer API and consumer groups.
	- [KIP-1106: Add duration based offset reset option for consumer clients](https://cwiki.apache.org/confluence/x/NIyMEw)
	- [KIP-1043: Administration of groups](https://cwiki.apache.org/confluence/x/XoowEg)
- Kafka Streams
	- [KIP-1104: Allow Foreign Key Extraction from Both Key and Value in KTable Joins](https://cwiki.apache.org/confluence/x/gIuMEw)
	- [KIP-1112: Allow custom processor wrapping](https://cwiki.apache.org/confluence/x/TZCMEw)
- Kafka Connect
	- [KIP-1074: Allow the replication of user internal topics](https://cwiki.apache.org/confluence/x/jA3OEg)
		- Previously, MirrorMaker 2 automatically excluded topics whose names ended with .internal or -internal, incorrectly classifying them as internal topics. This behavior prevented legitimate business topics from being replicated unless users implemented a custom replication policy. This KIP introduces a configurable option that allows users to replicate such topics without requiring custom code.

[Apache Kafka 4.1 | Enhanced Stability, New OAuth Support, Scalable Queue...](https://youtu.be/cr9cDJGjm2E)

## Apache Kafka 4.2

Kafka Queues (Share Groups) is now production-ready with new features like the RENEW acknowledgement type for extended processing times, adaptive batching for share coordinators, soft and strict enforcements of quantity of fetched records, and comprehensive lag metrics.

Kafka Streams brings the server-side rebalance protocol to GA with a limited feature set, adds dead letter queue support in exception handlers, introduces anchored wall-clock punctuation for deterministic scheduling, and gives users full control over whether to send a leave group request on closing.

This release also delivers significant improvements to consistency and observability: CLI tools now feature standardized arguments like –bootstrap-server across all tools, metric naming has been corrected to follow the kafka.COMPONENT convention, and new idle ratio metrics provide better visibility into controller and MetadataLoader performance.

Security is enhanced with a new allowlist connector client configuration override policy, while thread-safety improvements to RecordHeader eliminate concurrency risks.

Additional highlights include external schema support in JsonConverter for reduced message sizes, dynamic configuration for remote log manager thread pools, adaptive batching in group coordinators, and rack ID exposure in the Admin API for consumer and share group members.

- KIP-932 GA: Queues for Kafka
- KIP-1071 GA: Streams Server-Side Rebalance Protocol
- KIP-1034: Dead Letter Queue Support for Streams
- [Apache Kafka 4.2 \| 38 KIPs, Kafka Streams, Observability Improvements, Rebalance Protocol, and more - YouTube](https://www.youtube.com/watch?v=4Yw1TzJe1Z8)
- [Apache Kafka 4.2.0 Release Announcement \| Apache Kafka](https://kafka.apache.org/blog/2026/01/14/apache-kafka-4.2.0-release-announcement/)

## Apache Kafka 4.3

**Highlights**

- **KIP-1271 + KIP-1285: Header-aware State Stores for Kafka Streams:** State stores in Kafka Streams can now carry headers alongside keys and values. Opt in via dsl.store.format=HEADERS to integrate with Confluent Schema Registry's new header-based schema ID format.
- **KIP-1240: Share Group Production Tuning Controls:** Broker-side guardrails and per-group configs for delivery count limits, record lock limits, and RENEW acknowledgment toggles.
- **KIP-1066: Broker Cordoning:**  Operators can now mark log directories or entire brokers off-limits for new partition placement during maintenance, a concept borrowed from k8s.
- **KIP-1035: Managed Changelog Offsets:** Kafka Streams now stores changelog offsets inside RocksDB instead of in a separate checkpoint file, atomically flushed alongside data column families. This allows for better RocksDB behaviour and enables future transactional state store semantics.
- **KIP-1274: Classic Rebalance Protocol Deprecation, Phase 1:** Three-phase deprecation of the classic rebalance protocol begins.
    - Phase 1 in 4.3 is advance notice via a new INFO-level log message at consumer startup.
    - Phase 2 in 5.0 flips the default to KIP-848's consumer protocol.
    - Phase 3 in 6.0 removes the classic protocol.

**Notable Callouts**

- Storage percentage JMX metrics for retention monitoring (KIP-1257)
- A common ConnectPlugin interface for connector and SMT discoverability (KIP-1273)
- Coordinator buffer caps (KIP-1196) prevent OOM under heavy group churn.
- KIP-1219 adds tunable byte-size limits for KRaft fetch and snapshot requests on large clusters.
- MirrorMaker metrics align with KIP-877 naming via KIP-1280 (legacy names removed in 5.0).

**Security**

- KIP-1258: OAuth client assertion via RFC 7523. Stronger credential type for OAuth client_credentials grants. No new client configs; reuses the existing SASL/OAUTHBEARER configuration from KIP-1139.

**Client-Side KIPs Available Now in Confluent Cloud**

- KIP-1271 / KIP-1285: Header-aware state stores
- KIP-1035: Managed Changelog Offsets
- KIP-1247: Bytes class promoted to public API
- KIP-1250: num-keys metric
- KIP-1258: OAuth client assertion
- KIP-1259: Stale state directory cleanup
- KIP-1270: GlobalKTable error handling

**Preparing for AK 5.0**

  • KIP-1244: Kafka Streams Scala DSL deprecated, removed in 5.0. Migrate to the Java DSL.
  • KIP-1237: group.coordinator.rebalance.protocols deprecated, removed in 5.0.
  • KIP-1211: num.partitions / default.replication.factor on the broker role. Set these on the controller role; broker-role values will be ignored in 5.0.

[Apache Kafka 4.3 \| 25 KIPs, Kafka Streams, Share Group Controls, Broker Isolation, and more - YouTube](https://www.youtube.com/watch?v=lePgrOiX11U)

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

[KIP-899: Allow producer and consumer clients to rebootstrap - Apache Kafka - Apache Software Foundation](https://cwiki.apache.org/confluence/display/KAFKA/KIP-899%3A+Allow+producer+and+consumer+clients+to+rebootstrap)

- A Kafka client performs bootstrapping when it’s initialized, i.e. it connects to a server from `bootstrap.servers` and fetches the cluster metadata, including the addresses of online brokers. This list of brokers from the fetched metadata is used for the real work. The client periodically updates the metadata during the network client’s polls so even if the set of brokers change over time, this generally works well. However, brokers already known to the client are used for fetching the subsequent metadata updated instead of the bootstrap servers.
- `metadata.recovery.strategy=rebootstrap`
	- Enables the client to repeat the bootstrap process if all known brokers are unavailable.
- `metadata.recovery.rebootstrap.trigger.ms=300000` (5 mins)
	- The interval the client waits before re-bootstrapping if it cannot obtain metadata from any broker.
