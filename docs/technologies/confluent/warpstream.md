# WarpStream

[Kafka is dead, long live Kafka](https://www.warpstream.com/blog/kafka-is-dead-long-live-kafka)

WarpStream is an Apache Kafka protocol **compatible data streaming platform** built directly on top of **S3**. It's delivered as a single, stateless Go binary, so there are no local disks to manage, no brokers to rebalance, and no ZooKeeper to operate. WarpStream is 5-10x cheaper than Kafka in the cloud because data streams directly to and from S3 instead of using inter-zone networking, which can be over 80% of the infrastructure cost of a Kafka deployment at scale.

## WarpStream Tableflow

**It reads from Kafka, builds Iceberg tables, and keeps them compacted**

Tableflow automates **all** of the annoying parts about generating and maintaining Iceberg tables:

1. It auto-scales.
2. It integrates with schema registries or lets you declare the schemas inline.
3. It has a DLQ.
4. It handles upserts.
5. It enforces retention policies.
6. It can perform stateless transformations as records are ingested.
7. It keeps the table compacted, and it does so continuously and incrementally without having to run a giant major compaction at regular intervals.
8. It cleans up old snapshots automatically.
9. It detects and cleans up orphaned files that were created as part of failed inserts or compactions.
10. It can ingest data at massive rates (GiBs/s) while also maintaining strict (and configurable) freshness guarantees.
11. It speaks multiple table formats (yes, Delta lake too).
12. It works exactly the same in every cloud.

[The Case for an Iceberg-Native Database: Why Spark Jobs and Zero-Copy Kafka Won’t Cut It - WarpStream](https://www.warpstream.com/blog/the-case-for-an-iceberg-native-database-why-spark-jobs-and-zero-copy-kafka-wont-cut-it)

## Others

- [What is Bring Your Own Cloud (BYOC)? \| Confluent](https://www.confluent.io/learn/bring-your-own-cloud/)

## Links

Confluent acquired WarpStream for **$220 million** in a deal completed on September 9, 2024. This acquisition was reported in cash and stock, bringing WarpStream's technology and talent to the data streaming platform Confluent

- [WarpStream - An Apache Kafka Compatible Data Streaming Platform](https://www.warpstream.com/)
- [Intro to WarpStream in 5 Minutes - YouTube](https://www.youtube.com/watch?v=J1pwvHToOhg)
- [How WarpStream reinvented Kafka (and soared to a $220m exit in only 13 months) - YouTube](https://www.youtube.com/watch?v=NcH4jDyJECY)
- [What The Heck is WarpStream? \| HackerNoon](https://hackernoon.com/what-the-heck-is-warpstream)
- [Confluent acquires WarpStream \| Confluent](https://www.confluent.io/blog/confluent-acquires-warpstream/)
- [WarpStream is Dead, Long Live WarpStream](https://www.warpstream.com/blog/warpstream-is-dead-long-live-warpstream)
- [What is WarpStream by Confluent? (A Lightboard by Tim Berglund) - YouTube](https://www.youtube.com/watch?v=lrD0abLJhYY)
