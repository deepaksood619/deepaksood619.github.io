# Apache Samza

Apache Samza

Apache Samza is a stream processing framework that is tightly tied to the Apache Kafka messaging system. While Kafka can be used by many stream processing systems, Samza is designed specifically to take advantage of Kafka's unique architecture and guarantees. It uses Kafka to provide fault tolerance, buffering, and state storage.

Samza uses YARN for resource negotiation. This means that by default, a Hadoop cluster is required (at least HDFS and YARN), but it also means that Samza can rely on the rich features built into YARN.

Stream Processing Model

Samza relies on Kafka's semantics to define the way that streams are handled. Kafka uses the following concepts when dealing with data:

- **Topics**: Each stream of data entering a Kafka system is called a topic. A topic is basically a stream of related information that consumers can subscribe to.
- **Partitions**: In order to distribute a topic among nodes, Kafka divides the incoming messages into partitions. The partition divisions are based on a key such that each message with the same key is guaranteed to be sent to the same partition. Partitions have guaranteed ordering.
- **Brokers**: The individual nodes that make up a Kafka cluster are called brokers.
- **Producer**: Any component writing to a Kafka topic is called a producer. The producer provides the key that is used to partition a topic.
- **Consumers**: Consumers are any component that reads from a Kafka topic. Consumers are responsible for maintaining information about their own offset, so that they are aware of which records have been processed if a failure occurs.

Because Kafka is represents an immutable log, Samza deals with immutable streams. This means that any transformations create new streams that are consumed by other components without affecting the initial stream.

Advantages and Limitations

Samza's reliance on a Kafka-like queuing system at first glance might seem restrictive. However, it affords the system some unique guarantees and features not common in other stream processing systems.

For example, Kafka already offers replicated storage of data that can be accessed with low latency. It also provides a very easy and inexpensive multi-subscriber model to each individual data partition. All output, including intermediate results, is also written to Kafka and can be independently consumed by downstream stages.

In many ways, this tight reliance on Kafka mirrors the way that the MapReduce engine frequently references HDFS. While referencing HDFS between each calculation leads to some serious performance issues when batch processing, it solves a number of problems when stream processing.

Samza's strong relationship to Kafka allows the processing steps themselves to be very loosely tied together. An arbitrary number of subscribers can be added to the output of any step without prior coordination. This can be very useful for organizations where multiple teams might need to access similar data. Teams can all subscribe to the topic of data entering the system, or can easily subscribe to topics created by other teams that have undergone some processing. This can be done without adding additional stress on load-sensitive infrastructure like databases.

Writing straight to Kafka also eliminates the problems of **backpressure**. Backpressure is when load spikes cause an influx of data at a rate greater than components can process in real time, leading to processing stalls and potentially data loss. Kafka is designed to hold data for very long periods of time, which means that components can process at their convenience and can be restarted without consequence.

Samza is able to store state, using a fault-tolerant checkpointing system implemented as a local key-value store. This allows Samza to offer an at-least-once delivery guarantee, but it does not provide accurate recovery of aggregated state (like counts) in the event of a failure since data might be delivered more than once.

Samza offers high level abstractions that are in many ways easier to work with than the primitives provided by systems like Storm. Samza only supports JVM languages at this time, meaning that it does not have the same language flexibility as Storm.

Summary

Apache Samza is a good choice for streaming workloads where Hadoop and Kafka are either already available or sensible to implement. Samza itself is a good fit for organizations with multiple teams using (but not necessarily tightly coordinating around) data streams at various stages of processing. Samza greatly simplifies many parts of stream processing and offers low latency performance. It might not be a good fit if the deployment requirements aren't compatible with your current system, if you need extremely low latency processing, or if you have strong needs for exactly-once semantics.
