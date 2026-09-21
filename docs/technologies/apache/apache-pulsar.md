---
slug: /technologies/apache/apache-pulsar
title: Apache Pulsar Overview
description: Discover Apache Pulsar, a powerful open-source pub-sub messaging system featuring low latency, scalability, and serverless integration.
created: 2023-03-05
updated: 2026-09-20
---
Apache Pulsar is an open-source distributed pub-sub messaging system originally created at Yahoo and now part of the Apache Software Foundation

## Architecture

Pulsar's defining architectural choice is separating the serving layer from the storage layer, unlike Kafka where brokers own both compute and disk for a partition.

- **Brokers (serving layer)** - stateless nodes that handle and load-balance incoming messages from producers, dispatch messages to consumers, run an HTTP server for the REST admin API, and use a custom binary protocol for data transfer. Brokers hold no data themselves; a topic is handled by only one broker at a time, but any broker can take over a topic instantly because the data lives elsewhere.
- **Apache BookKeeper (storage layer)** - a distributed write-ahead log (WAL) system that provides persistent storage through independent append-only logs called **ledgers**. Each ledger has a single writer and is replicated across multiple bookies (storage nodes) per an ensemble/write-quorum/ack-quorum configuration, guaranteeing read consistency even during failures.
- **Segment-centric storage** - a topic partition is not a single file on one disk (as in Kafka); it is broken into **segments** that roll over on a size or time limit, and each segment is spread across a different set of bookies. Because a partition's data is not pinned to any one storage node, partitions can grow effectively unbounded, and scaling storage up or down is just adding or removing bookies rather than moving partition files.
- **Metadata store** - maintains cluster metadata (topic info, schema, broker load data). Historically ZooKeeper; Pulsar 4.0 introduced **Oxia** as the recommended metadata store for new clusters, aimed at solving the "million topic problem" for multi-tenant SaaS deployments where every customer gets its own topic. RocksDB is used for standalone/single-node deployments.
- **Geo-replication** - brokers run replicators that tail locally published entries and republish them to remote clusters, enabling active-active multi-region topics without a separate mirroring tool (unlike Kafka's MirrorMaker/Cluster Linking).
- **Tiered storage** - older segments can be offloaded from bookies to cheaper long-term storage such as S3 or GCS once they age out of hot storage, without changing how consumers read the topic.
- **Service discovery** - clients connect through a single DNS name and are transparently redirected to the broker currently owning the requested topic/partition.

## Features

- **Pulsar Functions -** Easily deploy lightweight compute logic using developer-friendly APIs without needing to run your own stream processing engine
- Horizontally scalable
- Low latency with durability
- Geo-replication
- Multi-tenancy
- Persistent storage - Persistent message storage based on Apache BookKeeper. Provides IO-level isolation between write and read operations
- Operability - REST Admin API for provisioning, administration, tools and monitoring. Deploy on bare metal or Kubernetes.
- A serverless connector framework [Pulsar IO](http://pulsar.apache.org/docs/en/io-overview) built on-top-of Pulsar Functions to make moving data in and out Apache Pulsar easier.
- [Tiered Storage](http://pulsar.apache.org/docs/en/concepts-tiered-storage) offloads data from hot/warn storage to cold/longterm storage (such as S3 and GCS) when the data is aging out.
- Multiple [subscription modes](http://pulsar.apache.org/docs/en/concepts-messaging#subscription-modes) for topics ([exclusive](http://pulsar.apache.org/docs/en/concepts-messaging#exclusive), [shared](http://pulsar.apache.org/docs/en/concepts-messaging#shared), and [failover](http://pulsar.apache.org/docs/en/concepts-messaging#failover))

## Flexible Messaging Model

Pulsar generalizes these two messaging concepts through one unified messaging API - Producers publish messages to topics, messages are broadcast to different subscriptions. Consumers can then subscribe to those subscriptions to consume messages. The consumers in same subscription can choose a flexible way to consume messages - exclusively, shared and failover. As with a queue, shared subscription, with round-robin delivery, allows applications to divide up processing over the consumers in same subscription. Unlike other messaging systems, Pulsar allows scaling the number of active consumers beyond the number of partitions within a topic.

## Pulsar vs Kafka

| Aspect | Kafka | Pulsar |
|---|---|---|
| Architecture | Monolithic - broker owns both compute and storage (disk) for a partition | Layered - stateless brokers (compute) + BookKeeper bookies (storage) are scaled independently |
| Storage unit | A partition is one file on one broker's disk; size bounded by that disk | A partition is split into segments spread across many bookies; effectively unbounded size |
| Scaling storage | Adding partitions/disks requires moving data between brokers; shrinking is rarely done in practice | Adding/removing bookies rebalances segments automatically; no partition file movement |
| Consumption model | Consumer groups with one consumer per partition at a time | Exclusive, shared, failover, and key-shared subscription modes decouple consumer count from partition count |
| Multi-tenancy | Not a first-class concept; isolation is bolted on via quotas/ACLs | First-class - tenants and namespaces with hard per-tenant resource limits |
| Metadata/coordination | Kafka 4.0 removed ZooKeeper in favor of built-in **KRaft** consensus | ZooKeeper historically; Pulsar 4.0 introduces **Oxia** as the recommended metadata store |
| Geo-replication | Requires MirrorMaker 2 or Cluster Linking as a separate component | Built into brokers as native replicators between clusters |
| Throughput/latency | Highest raw throughput and lowest p99 latency (~5ms) in OpenMessaging Benchmark tests, roughly 2x Pulsar's throughput | Competitive but behind Kafka on raw OMB throughput/latency numbers |
| Operational footprint | Fewer moving parts post-KRaft (just Kafka brokers) | More node types to run and monitor - brokers, bookies, and a metadata store |
| Ecosystem/community | Much larger - Kafka Streams, ksqlDB, Kafka Connect, and by far the bigger Stack Overflow/Slack/job-market footprint | Smaller community and documentation surface, though growing (Pulsar Functions, Pulsar IO) |

**When Pulsar tends to win:** multi-tenant SaaS platforms that need per-tenant isolation and potentially millions of topics, workloads needing both queue and log semantics on the same topic, built-in geo-replication across regions, and use cases where partitions must grow without bound or be rebalanced without moving data.

**When Kafka tends to win:** maximum raw throughput/lowest latency, simpler day-2 operations (especially post-KRaft, now a single component instead of Kafka + ZooKeeper vs Pulsar + BookKeeper + a metadata store), and any team that needs the depth of the surrounding ecosystem (Kafka Streams, Connect, ksqlDB) and community/vendor support.

**What Kafka still doesn't touch:** Pulsar's native multi-tenancy (per-tenant/namespace quotas), segment-centric storage that lets a single partition grow unbounded and rebalance without moving data, and built-in geo-replication — those stay Pulsar's actual differentiators.

## References

- http://pulsar.apache.org
- [Pulsar Concepts and Architecture](https://pulsar.apache.org/docs/next/concepts-architecture-overview/)
- https://streaml.io/blog/pulsar-streaming-queuing
- https://streaml.io/blog/why-apache-pulsar
- https://medium.com/swlh/performance-comparison-between-apache-pulsar-and-kafka-latency-79fb0367f407
- [A Guide to Apache Pulsar: Compare Features and Architecture to Apache Kafka - StreamNative](https://streamnative.io/blog/guide-apache-pulsar-compare-features-architecture-to-apache-kafka)
- [Kafka vs Pulsar - Performance, Features, and Architecture Compared - Confluent](https://www.confluent.io/compare/kafka-vs-pulsar/)
- [Pulsar vs Kafka 2026: The Post-ZooKeeper Era](https://sanj.dev/post/pulsar-vs-kafka-deep-dive)
- [Apache Pulsar: The Next Gen Messaging & Queuing System • Karthik Ramasamy • YOW! 2020 - YouTube](https://www.youtube.com/watch?v=_SSFM7FTI8A)
- [Benchmarking RabbitMQ vs Kafka vs Pulsar Performance](https://www.confluent.io/blog/kafka-fastest-messaging-system/)
