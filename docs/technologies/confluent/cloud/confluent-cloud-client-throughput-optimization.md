---
slug: /confluent-cloud-client-throughput-optimization
title: Optimize Confluent Cloud Clients for Throughput
description: Tune Kafka producer and consumer configurations on Confluent Cloud to maximize data throughput.
created: 2026-09-02
updated: 2026-10-09
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

### Codec trade-offs

- **gzip (DEFLATE = LZ77 + Huffman):** good ratio, but the slowest of the four and the most CPU per byte on the producer. Memory is modest (about a 32 KB window). Kafka's own tests have shown it as the worst throughput option, so use it only when network or storage cost dominates and CPU is spare.
- **zstd (LZ77 + FSE/Huff0 entropy coding):** best ratio of the four, and at its default level it is both smaller and faster than gzip. It has tunable levels (negative `--fast` levels up to 22). Higher levels cost much more compression CPU and a larger window/memory, but decompression speed stays roughly constant across levels. Needs Kafka 2.1+ clients and brokers (KIP-110).
- **lz4:** very fast compression and the fastest decompression, with a lower ratio than zstd or gzip. Smallest CPU and memory footprint, so it is the usual default pick for throughput and latency.
- **snappy:** similar class to lz4 (fast, modest ratio, low CPU). It trades about 20-100% larger output than zlib's fastest mode for roughly an order of magnitude more speed (see [Understanding Zstandard Compression](algorithms/data-compression/others.md)). In practice lz4 is usually equal or better, so snappy is mostly kept for compatibility.

Reference numbers (lzbench, Silesia corpus, single core, from the zstd README):

| Compressor | Ratio | Compress | Decompress |
|---|---|---|---|
| zstd 1.5.7 -1 | 2.896 | 510 MB/s | 1550 MB/s |
| zlib 1.3.1 -1 (gzip's engine) | 2.743 | 105 MB/s | 390 MB/s |
| lz4 1.10.0 | 2.101 | 675 MB/s | 3850 MB/s |
| snappy 1.2.1 | 2.089 | 520 MB/s | 1500 MB/s |

Ratios on real Kafka data differ: JSON, Avro with repeated field names, and logs compress well, while already-compressed payloads (images, encrypted data) gain nothing. Always benchmark on your own messages.

**Is the "gzip/zstd = better compression but more CPU and memory; snappy/lz4 = faster but less compression" rule true?** Mostly yes, with two corrections:

- zstd is not more CPU-hungry than gzip. At comparable or better ratio it compresses and decompresses faster. Only its high levels (10+) cost more CPU and memory than the fast codecs.
- "Lazy" is the wrong word. lz4 and snappy are LZ77-style byte-oriented codecs with no entropy-coding (Huffman/FSE) stage and only a quick match search, which is why they are fast and give a lower ratio. gzip and zstd add entropy coding and a deeper match search.

### Where compression happens in Kafka

- Compression is per record batch on the producer, so larger batches (`batch.size`, `linger.ms`) compress better. Compression CPU is paid by the producer and decompression by the consumer. The broker normally stores the batch as-is.
- If the topic or broker `compression.type` is set to a specific codec different from the producer's, the broker must decompress and recompress, which costs broker CPU. The default `producer` keeps the producer's codec.
- Compression reduces network bytes and disk usage (and on Confluent Cloud, billed ingress and egress bytes), and it raises effective throughput when the network is the bottleneck rather than CPU.
- Kafka 3.8+ (KIP-390) adds per-codec level settings (`compression.gzip.level`, `compression.lz4.level`, `compression.zstd.level`) for tuning the ratio vs CPU trade-off.
- Rule of thumb: CPU-bound or latency-sensitive means `lz4`; network or storage-bound means `zstd`; avoid `gzip` unless a legacy client requires it.

Links: [Kafka Producers](technologies/kafka/core/kafka-producers.md), [Zstd benchmarks](https://github.com/facebook/zstd), [Snappy](algorithms/data-compression/others.md)

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

## Diagnosing Why an Enterprise Cluster Runs at a High eCKU

- eCKU is the **maximum across dimensions** (ingress, egress, requests, connections, connection attempts, partitions), so the highest-utilised dimension sets the size. The Console chart *Cluster Overview > Monitor > eCKU usage* shows each dimension normalised, and whichever nears 1.0 is the driver.
- Compare each dimension with the per-eCKU limits in [Cluster Types](technologies/confluent/cloud/confluent-cluster-types.md), not only the one you suspect.
- **Metrics API gotcha:** `io.confluent.kafka.server/received_bytes` and `sent_bytes` (and the request count) are **deltas per sample**, not rates or hourly totals. Work out the bucket size (1-min query granularity vs the Grafana step, e.g. 5-min on a 24h panel) before converting to MB/s. Reading a 5-min bucket as hourly under-states traffic by 5-60x and leads to a false "well below the limits" conclusion.
- Metrics data points are typically available within about 3 minutes, so poll with that latency in mind.
- Ingress is measured on compressed wire bytes, so compression and batching directly affect the ingress eCKU. Request rate depends on batch sizes (see [Kafka Producers](technologies/kafka/core/kafka-producers.md)).
- Scale-down is slow (about 1 hour cooldown, `confluent.incremental.ramp.up.cooldown.ms`), so connection or traffic bursts keep eCKU high for at least that long. Jitter restarts and cap autoscaler step sizes to avoid connection-attempt bursts.
- Connections measured by the broker-side `active_connection_count` metric can read higher than the client-side JMX `connection-count`.
- Levers when ingress or requests drive it: larger batches with a short linger, stronger compression, sending less data (sampling or trimming payloads), isolating bulk log topics onto another cluster (e.g. Freight).
- Retry storms: when a client change causes rejections (e.g. `MESSAGE_TOO_LARGE`), aggressive timeouts and many retries can create a connection storm that throttles the whole cluster via connection quotas. Check `max.request.size`, topic `max.message.bytes`, and broker `message.max.bytes` together.

## Links

- [Optimize Confluent Cloud Clients for Throughput](https://docs.confluent.io/cloud/current/client-apps/optimizing/throughput.html)
- [How to optimize your Kafka producer for throughput](https://developer.confluent.io/tutorials/optimize-producer-throughput/confluent.html)
- [How to choose the number of topics/partitions in a Kafka cluster](https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster)
- [Comprehensive Kafka Configurations](technologies/kafka/internals/kafka-configurations.md)
- [Confluent Cloud Client Quotas](technologies/confluent/cloud/confluent-cloud-client-quotas.md)
- [Five Years of Kafka at Razorpay’s UPI Switch \| by Kshitij Nawandar \| Sep, 2026 \| Razorpay Engineering](https://engineering.razorpay.com/tryst-with-kafka-2f5cef766c45)
