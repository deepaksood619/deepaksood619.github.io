---
slug: /technologies/kafka/librdkafka
title: "librdkafka Producer Internals: Metadata, Buffering, Batching, Compression"
description: How the librdkafka producer fetches metadata, buffers messages, batches per partition and compresses, plus partition-count sizing guidance.
created: 2026-10-19
updated: 2026-10-19
---
librdkafka is the C client behind confluent-kafka-python, confluent-kafka-go, Confluent.Kafka (.NET), node-rdkafka and others. Verified against librdkafka master (`CONFIGURATION.md`, `rdkafka_broker.c`, `rdkafka_msgset_writer.c`, `rdkafka_conf.c`).

## Metadata and first message

- First `produce()` to an unknown topic triggers a Metadata request for that topic (internal main thread). `produce()` returns immediately.
- Until partition count and leaders are known, messages sit on the topic's UA (unassigned) queue. When metadata arrives the partitioner assigns partitions and the messages move to the real partition queues, handled by the leader's broker thread.
- If metadata never arrives, messages fail with `ERR__MSG_TIMED_OUT` / `ERR__UNKNOWN_TOPIC` after `message.timeout.ms` (default 300000). That timeout covers metadata wait + queue time + retries.
- `topic.metadata.refresh.interval.ms` (300000): periodic refresh. After a leader loss, fast refresh starts at the fast interval (docs: default 100 ms, falls back to `retry.backoff.ms`) and backs off exponentially up to `retry.backoff.max.ms`. Errors like `NOT_LEADER_FOR_PARTITION` also force a refresh. Messages stay queued meanwhile.

## "Buffer memory"

- No `buffer.memory` like the Java client. Limits: `queue.buffering.max.messages` (100000) and `queue.buffering.max.kbytes` (1048576, takes priority).
- **Global**, shared by all topics and partitions of that producer instance, not per partition.
- Full queue: `produce()` fails with `ERR__QUEUE_FULL` (.NET: `Local_QueueFull`); `poll()` to serve delivery reports and retry.
- A message holds its slot until its delivery report fires (also while in flight and retrying). Counted on uncompressed key + value size.

## Batching

- Each partition has its own queue. Batch closes at the first of: `linger.ms` / `queue.buffering.max.ms` (default 5), `batch.num.messages` (10000), `batch.size` (1,000,000 bytes, checked before compression, may overshoot by one message), `message.max.bytes` (1,000,000).
- **One ProduceRequest = one partition's MessageSet.** `rd_kafka_ProduceRequest(rkb, rktp, ...)` is called per toppar. The writer comment: "constructs the entire ProduceRequest, containing a single outer MessageSet for a single partition". librdkafka does not merge partitions into one request (the Java client does). N partitions with a few messages each = N requests.
- Sticky partitioning for null keys (`sticky.partitioning.linger.ms`, default 2 x `linger.ms`, i.e. 10 ms at the default linger of 5; applies to null keys, and empty keys with `consistent_random`). Default partitioner `consistent_random`.

## Compression

- Per partition batch (MessageSet / RecordBatch), records only. Codec set by `compression.codec` (topic-level override possible), level by `compression.level`; codec stored in the batch attributes bits. The request as a whole is not compressed.
- If the compressed output is not smaller than the input, it is discarded and the batch goes uncompressed. Failure to compress is non-fatal.
- Example: 30 partitions x 5 messages per linger window = 30 batches of 5 messages, 30 requests, each compressed alone. Not one 150-message batch.
- Consequence: compression ratio and request rate depend on the rate per partition x linger. Small batches get little benefit from zstd; lz4/snappy are cheaper there.
- The broker stores the batch as-is when `compression.type=producer`.

## Optimising small, many-partition workloads

1. Null keys: keep sticky (default), consider raising `sticky.partitioning.linger.ms`, raise `linger.ms` (20-100+ ms). Records per request is roughly rate-per-partition x linger.
2. Keyed messages: a partitioner cannot rescue batching (keys spread over partitions). Raise `linger.ms`, reduce partition count, or buffer per key in the app.
3. Fewer partitions on low-volume topics. Partitions cannot shrink in place: new topic + migration; keyed topics remap; consumers per group capped at partition count; hot keys.
4. Pick the codec for the batch size (lz4/snappy for small, zstd level 1-3 for large).
5. Verify with `statistics.interval.ms`: `txmsgs` vs `brokers.*.req.Produce`, `batchcnt`, `batchsize`.

## Partition count sizing (rule of thumb)

`partitions ~ max(T/p, T/c, N_consumers)`; T = peak target MB/s, p = per-partition ingress, c = per-partition egress, N_consumers = peak parallel consumers in one group.

Confluent Cloud per-partition throughput guideline (docs: Kafka Cluster Types, eCKU/CKU comparison; aggregate producer / consumer throughput per partition):

| | Basic | Standard | Enterprise | Dedicated | Freight |
|---|---|---|---|---|---|
| Ingress per partition | ~5 MBps | ~5 MBps | ~6 MBps | ~12 MBps | ~6 MBps |
| Egress per partition | ~15 MBps | ~15 MBps | ~18 MBps | ~36 MBps | ~18 MBps |

Planning guidelines, not hard-enforced limits; shared by all producers/consumers of the partition, and per-eCKU totals still apply (Enterprise: 60 MBps in / 180 MBps out, 3,000 partitions per eCKU). A customer saw per-partition produce saturate around 10 MB/s on Dedicated. Source: https://docs.confluent.io/cloud/current/clusters/cluster-types.html

Fewer partitions help only when batches are otherwise small; once each partition fills its batch within `linger.ms` the gain disappears.

## Measured on a Confluent Cloud Standard cluster (2026-10-19)

144 runs, librdkafka 1.9.2 and 2.16.0, client RTT about 300-500 ms (laptop in India to us-east-2), 600 B JSON, 30 msg/s per process. Full report: [librdkafka load test](office/iconfluent/tbo/librdkafka-partition-load-test.md).

- Null key, 36 partitions: messages per Produce request 1.1 (linger 5), 1.5 (20), 3.6 (100), 6.9 (200). A unique timestamp key: 1.0-1.1 at every linger.
- Fewer partitions, null key, linger 100: 36 partitions 3.6, 12 3.9, 6 4.3, 3 5.2. Keyed (100 keys), linger 100: 1.1 / 1.7 / 2.5 at 36 / 6 / 3 partitions.
- Idempotent producer over a high RTT: request rate is about partitions / RTT (one request in flight per partition), so 300 msg/s gives 8.7 / 24.6 / 45 msgs per request at 36 / 6 / 3 partitions. Non-idempotent shows almost no partition effect. Expect this to shrink in-region.
- Idempotence CPU: 4-7x at 30 msg/s and about 40-50x at 300 msg/s versus `enable.idempotence=false`, on 1.9.2 and 2.16.0; `max.in.flight` is not the cause. Mechanism unknown, may depend on RTT; re-measure in-region.
- Compression on 3-4 message batches: zstd and gzip -26% wire bytes, lz4 -5%, snappy -7%.
- Per-partition throughput: a single partition took 10.7 MB/s aggregate with no throttle, so the Standard "about 5 MBps in" guideline is not enforced. Aggregate plateau 10-11 MB/s was the client/network.

## Related

- [Kafka Producers](technologies/kafka/core/kafka-producers.md): partitioning strategies, batching and request rate
- [Kafka Configurations](technologies/kafka/internals/kafka-configurations.md)
- TBO application of this: `office/iconfluent/tbo/rca-25-29-outage.md` §3d and the UAPI .NET producer optimisation write-up
- [librdkafka CONFIGURATION.md](https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md)
