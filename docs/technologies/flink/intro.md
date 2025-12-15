# Intro

Apache Flink is a stream processing framework that can also handle batch tasks. It considers batches to simply be data streams with finite boundaries, and thus treats batch processing as a subset of stream processing. This stream-first approach to all processing has a number of interesting side effects.

This stream-first approach has been called the **Kappa architecture**, in contrast to the more widely known Lambda architecture (where batching is used as the primary processing method with streams used to supplement and provide early but unrefined results). Kappa architecture, where streams are used for everything, simplifies the model and has only recently become possible as stream processing engines have grown more sophisticated.

The four cornerstones on which Flink is built
1. Streaming
2. State
3. Time
4. Snapshots

## Real-time Stream Processors

Advanced stream processors allow you to perform a wide range of tasks including:

- **Windowed aggregations** (e.g., count pageviews per minute)
- **Stream-to-table joins** (e.g., enrich clickstream data with user profiles)
- **Event filtering** and **deduplication**
- **Resilience to late or out-of-order data**

Stream processing frameworks are purpose-built to manage state, ordering, and fault tolerance at scale.

## Streaming

![streaming](../../media/Screenshot%202025-12-16%20at%2012.47.23%20AM.png)

- A stream is a sequence of events
- Business data is always a stream: bounded or unbounded
- For Flink, batch processing is just a special case in the runtime

## Links

- [06-sliding-window-analytics](technologies/apache-spark/06-sliding-window-analytics.md)
- [Stream Processing \| Apache Kafka 101 (2025 Edition) - YouTube](https://www.youtube.com/watch?v=vF5y17Pypds)
- [**Apache Flink 101 - YouTube**](https://www.youtube.com/playlist?list=PLa7VYi0yPIH1UdmQcnUr8lvjbUV8JriK0)
- [Getting Started \| Apache Flink](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/gettingstarted/)
- [Apache Flink® SQL](https://developer.confluent.io/courses/flink-sql/overview/)
- [Apache Flink® SQL - YouTube](https://www.youtube.com/playlist?list=PLf38f5LhQthefDFLQwHXdLmFsrZWUQWbw)
- https://dzone.com/articles/introduction-to-streaming-etl-with-apache-flink
- https://flink.apache.org/flink-architecture.html
- [CDC Stream Processing with Apache Flink](https://youtu.be/K2ibvfmFh8Y?si=_K1jRSc0ez7Ntw9y)
- [Apache Flink 1.19 - Deprecations, New Features, and Improvements](https://youtu.be/362g8odTRYk)
- [Krones real-time production line monitoring with Amazon Managed Service for Apache Flink | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/krones-real-time-production-line-monitoring-with-amazon-managed-service-for-apache-flink/)
- [Welcome to Amazon Managed Service for Apache Flink learning series \| Amazon Web Services - YouTube](https://youtu.be/PUmRMf8vqrE)
- [Dynamic Tables \| Apache Flink](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/concepts/dynamic_tables/)
- [What is Apache Flink®?](https://youtu.be/PVoc5tRr6to)
- [Apache Kafka Vs. Apache Flink](https://youtu.be/gAIOZiJVECg)
- [Apache Flink - A Must-Have For Your Streams | Systems Design Interview 0...](https://youtu.be/fYO5-6Owt0w)
- [Apache Spark Vs. Apache Flink Vs. Apache Kafka Vs. Apache Storm! Data St...](https://youtu.be/V3Q3EkbEc_k)
- [Stateless vs Stateful Stream Processing with Kafka Streams and Apache Flink](https://youtu.be/LYf05ArIkzA)
- [Consume Apache Kafka Messages using Apache Flink and Java](https://youtu.be/JfqoVuVDYUE)
