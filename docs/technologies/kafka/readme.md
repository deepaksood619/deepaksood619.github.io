---
slug: /technologies/kafka/readme
title: Comprehensive Guide to Apache Kafka
description: Explore Kafka architecture, installation, configurations, and more in this detailed guide for developers and data engineers.
created: 2023-03-05
updated: 2026-06-22
---
Apache Kafka is an open-source distributed event streaming platform used for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.

## Getting Started

- [Intro to Kafka](technologies/kafka/core/intro-to-kafka.md)
- [Kafka Architecture](technologies/kafka/core/kafka-architecture.md)
- [Installing Kafka](technologies/kafka/operations/installing-kafka.md)
- [Comparison](technologies/kafka/comparison.md)
- [Use Cases](technologies/kafka/use-cases.md)

## Core Concepts

- [Kafka Topics](technologies/kafka/core/kafka-topics.md)
- [Kafka Partitions](technologies/kafka/core/kafka-partitions.md)
- [Kafka Brokers](technologies/kafka/core/kafka-brokers.md)
- [Kafka Producers](technologies/kafka/core/kafka-producers.md)
- [Kafka Consumers](technologies/kafka/core/kafka-consumers.md)
- [Kafka Message Key](technologies/kafka/core/kafka-message-key.md)
- [Kafka Topic Replication](technologies/kafka/core/kafka-topic-replication.md)
- [Kafka Guarantees](technologies/kafka/core/kafka-guarantees.md)
- [Kafka Listeners](technologies/kafka/core/kafka-listeners.md)

## Internals

- [Kafka Configurations](technologies/kafka/internals/kafka-configurations.md)
- [KRaft (Kafka Raft)](technologies/kafka/internals/kraft.md)
- [Log Compaction](technologies/kafka/internals/log-compaction.md)

## Operations

- [Installing Kafka](technologies/kafka/operations/installing-kafka.md)
- [Monitoring](technologies/kafka/operations/monitoring.md)
- [Migration / Mirroring / Replication](technologies/kafka/operations/migration-mirroring-replication.md)
  - [MirrorMaker](technologies/kafka/operations/mirrormaker.md)
  - [Cluster Linking](technologies/confluent/data-integration/cluster-linking.md) (Confluent)
  - [Replicator](technologies/confluent/data-integration/replicator.md) (Confluent)
- [Releases / Upgrades / Changelogs](technologies/kafka/operations/releases-upgrades-changelogs.md)

## Kafka Ecosystem

- [Kafka Connect](technologies/kafka/ecosystem/kafka-connect.md)
- [Kafka Streams](technologies/kafka/ecosystem/kafka-streams.md)
- [Strimzi (Kubernetes Operator)](technologies/kafka/ecosystem/strimzi.md)

## Client Libraries

- [kafka-python](technologies/kafka/clients/kafka-python.md)

## Tools

- [kafkacat / kcat](technologies/kafka/tools/kafkacat-kcat.md)
- [Kafka Commands](technologies/kafka/kafka-commands/readme.md)

## Security

- [Kafka Security Overview](technologies/kafka/security/readme.md)

## Confluent Components (moved to Confluent folder)

- [Kafka Schema Registry](technologies/confluent/components/kafka-schema-registry.md)
  - [Schema Registry Compatibility Rules](technologies/confluent/components/kafka-schema-registry-compatibility-rules.md)
- [Kafka REST Proxy](technologies/confluent/components/kafka-rest-proxy.md)

## Related Technologies

- [Confluent Platform & Cloud](technologies/confluent/readme.md)
- [Azure Event Hubs](cloud/azure/azure-event-hubs.md)
- [WarpStream](technologies/confluent/technology/warpstream.md) (Confluent)

## Additional Resources

- [Others](technologies/kafka/others.md)
- [Slides - Kafka Fundamentals](https://deepaksood619.github.io/slides-kafka-fundamentals/)
