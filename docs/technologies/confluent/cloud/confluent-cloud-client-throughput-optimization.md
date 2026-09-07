---
slug: /confluent-cloud-client-throughput-optimization
title: Optimize Confluent Cloud Clients for Throughput
description: Tune Kafka producer and consumer configurations on Confluent Cloud to maximize data throughput.
created: 2026-09-02
updated: 2026-09-07
---
To optimize for throughput, producers and consumers must move as much data as possible within a given amount of time. For high throughput, try maximizing the rate at which the data moves — the data rate should be the fastest possible rate.

Some configuration parameters have a range of values. How you set them depends on your requirements and other factors, such as average message size, number of partitions, and other differences in the environment. Benchmarking helps validate the configuration for your application and environment.

## Number of Partitions

A topic partition is the unit of parallelism in Kafka. Producers can send messages to different partitions in parallel, across different brokers in parallel, and read by different consumers in parallel. In general, a higher number of topic partitions results in higher throughput, and to maximize throughput you need enough partitions to distribute across the brokers in your Confluent Cloud cluster.

There are trade-offs to increasing the number of partitions. Choose the partition count based on producer throughput and consumer throughput, and benchmark performance in your environment. Also consider the design of your data patterns and key assignments so messages are distributed as evenly as possible across topic partitions — this prevents overloading certain topic partitions relative to others.

## Batching Messages

With the batching strategy of Kafka producers, you can batch messages going to the same partition — collecting multiple messages to send together in a single request. The most important step to optimize throughput is to tune producer batching to increase the batch size and the time spent waiting for the batch to populate with messages.

Larger batch sizes result in fewer requests to Confluent Cloud, which reduces load on producers and the broker CPU overhead to process each request.

- `batch.size` — increase the maximum size in bytes of each message batch.
- `linger.ms` — gives more time for batches to fill by having the producer wait longer before sending. The delay allows the producer to wait for the batch to reach the configured `batch.size`.

The trade-off is tolerating higher latency, since messages are not sent as soon as they are ready.

## Compression

Enabling compression on the producer means many bits can be sent as fewer bits. Configure `compression.type` to one of the following standard compression codecs:

- `lz4` (recommended for performance)
- `snappy`
- `zstd`
- `gzip`
- `none` (default — no compression)

Use `lz4` for performance instead of `gzip`, which is more compute intensive and may cause your application to not perform as well. Compression is applied on full batches of data, so better batching results in better compression ratios.

Unlike Confluent Platform, `compression.type` is not configurable on Confluent Cloud topics.

## Producer acks

When a producer sends a message to Confluent Cloud, the message goes to the leader broker for the target partition. The producer then awaits a response from the leader broker (assuming `acks` is not `0`, in which case the producer does not wait for any acknowledgment at all) before proceeding to send the next messages.

The sooner a producer receives a response, the sooner it can send the next message, generally resulting in higher throughput. Setting `acks=1` makes the leader broker write the record to its local log and acknowledge the request without awaiting acknowledgment from all followers. The trade-off is lower durability, because the producer does not wait until the message is replicated to other brokers.

## Memory Allocation

Kafka producers automatically allocate memory for the Java client to store unsent messages. If that memory limit is reached, the producer blocks on additional sends until memory frees up or until `max.block.ms` time passes.

Adjust how much memory is allocated with `buffer.memory`. If you do not have a lot of partitions, you may not need to adjust this at all. With a lot of partitions, tune `buffer.memory` — while also taking into account message size, linger time, and partition count — to maintain pipelines across more partitions, enabling better use of bandwidth across more brokers.

## Consumer Fetching

Adjust how much data consumers receive from each fetch from the leader broker by increasing `fetch.min.bytes`, the minimum number of bytes expected for a fetch response. Increasing this reduces the number of fetch requests made to Confluent Cloud, reducing broker CPU overhead per fetch and improving throughput.

As with producer batching, there is a trade-off to higher latency: the broker will not send new messages until the fetch request has enough messages to fulfill `fetch.min.bytes`, or until the wait time expires (`fetch.max.wait.ms`).

Where the application allows it, use consumer groups with multiple consumers to parallelize consumption — this can improve throughput by balancing load and processing multiple partitions simultaneously. The upper limit on this parallelization is the number of partitions in the topic.

## Summary of Configurations for Optimizing Throughput

### Producer

- `batch.size`: increase to 100000–200000 (default `16384`)
- `linger.ms`: increase to 10–100 (default `5`)
- `compression.type=lz4` (default `none`, meaning no compression)
- `acks=1` (default: `all` — default prior to Kafka 3.0: `1`)
- `buffer.memory`: increase if there are a lot of partitions (default `33554432`)

### Consumer

- `fetch.min.bytes`: increase to ~100000 (default `1`)
- `fetch.max.wait.ms=500` (default `500`)

## Links

- [Optimize Confluent Cloud Clients for Throughput](https://docs.confluent.io/cloud/current/client-apps/optimizing/throughput.html)
- [How to optimize your Kafka producer for throughput](https://developer.confluent.io/tutorials/optimize-producer-throughput/confluent.html)
- [How to choose the number of topics/partitions in a Kafka cluster](https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster)
- [Comprehensive Kafka Configurations](technologies/kafka/internals/kafka-configurations.md)
- [Confluent Cloud Client Quotas](technologies/confluent/cloud/confluent-cloud-client-quotas.md)
- [Five Years of Kafka at Razorpay’s UPI Switch \| by Kshitij Nawandar \| Sep, 2026 \| Razorpay Engineering](https://engineering.razorpay.com/tryst-with-kafka-2f5cef766c45)
