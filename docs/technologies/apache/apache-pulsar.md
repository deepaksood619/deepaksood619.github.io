# Apache Pulsar

Apache Pulsar is an open-source distributed pub-sub messaging system originally created at Yahoo and now part of the Apache Software Foundation

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

## Pulsar advantages over Kafka

1. If you prefer a message queue system, one designed for big data loads, Pulsar is actually implemented as a queue system that also supports the log model.

2. In Kafka, each partition is explicitly tied to one file on one physical disk, which means that the maximum possible partition size is bounded by the hard drive that stores it. This explicit map‐ ping also complicates scaling a Kafka topic by splitting it into more partitions, because of the data movement to new files and possibly new disks that is required. It also makes scaling down, by consolidating partitions, sufficiently hard that it is almost never done. Because Pulsar treats a partition as an abstraction, decoupled from how the partition is actually stored, the Pulsar implementation is able to store partitions of unlimited size. Scaling up and down is much easier, too.

## References

<http://pulsar.apache.org>

<https://streaml.io/blog/pulsar-streaming-queuing>

<https://streaml.io/blog/why-apache-pulsar>

<https://medium.com/swlh/performance-comparison-between-apache-pulsar-and-kafka-latency-79fb0367f407>
