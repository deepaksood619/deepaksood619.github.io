# Apache Flink

Apache Flink is a stream processing framework that can also handle batch tasks. It considers batches to simply be data streams with finite boundaries, and thus treats batch processing as a subset of stream processing. This stream-first approach to all processing has a number of interesting side effects.

This stream-first approach has been called the**Kappa architecture**, in contrast to the more widely known Lambda architecture (where batching is used as the primary processing method with streams used to supplement and provide early but unrefined results). Kappa architecture, where streams are used for everything, simplifies the model and has only recently become possible as stream processing engines have grown more sophisticated.

Stream Processing Model

Flink's stream processing model handles incoming data on an item-by-item basis as a true stream. Flink provides its DataStream API to work with unbounded streams of data. The basic components that Flink works with are:

- **Streams** are immutable, unbounded datasets that flow through the system
- **Operators** are functions that operate on data streams to produce other streams
- **Sources** are the entry point for streams entering the system
- **Sinks** are the place where streams flow out of the Flink system. They might represent a database or a connector to another system

Stream processing tasks take snapshots at set points during their computation to use for recovery in case of problems. For storing state, Flink can work with a number of state backends depending with varying levels of complexity and persistence.

Additionally, Flink's stream processing is able to understand the concept of "event time", meaning the time that the event actually occurred, and can handle sessions as well. This means that it can guarantee ordering and grouping in some interesting ways.

Batch Processing Model

Flink's batch processing model in many ways is just an extension of the stream processing model. Instead of reading from a continuous stream, it reads a bounded dataset off of persistent storage as a stream. Flink uses the exact same runtime for both of these processing models.

Flink offers some optimizations for batch workloads. For instance, since batch operations are backed by persistent storage, Flink removes snapshotting from batch loads. Data is still recoverable, but normal processing completes faster.

Another optimization involves breaking up batch tasks so that stages and components are only involved when needed. This helps Flink play well with other users of the cluster. Preemptive analysis of the tasks gives Flink the ability to also optimize by seeing the entire set of operations, the size of the data set, and the requirements of steps coming down the line.

Advantages and Limitations

Flink is currently a unique option in the processing framework world. While Spark performs batch and stream processing, its streaming is not appropriate for many use cases because of its micro-batch architecture. Flink's stream-first approach offers low latency, high throughput, and real entry-by-entry processing.

Flink manages many things by itself. Somewhat unconventionally, it manages its own memory instead of relying on the native Java garbage collection mechanisms for performance reasons. Unlike Spark, Flink does not require manual optimization and adjustment when the characteristics of the data it processes change. It handles data partitioning and caching automatically as well.

Flink analyzes its work and optimizes tasks in a number of ways. Part of this analysis is similar to what SQL query planners do within relationship databases, mapping out the most effective way to implement a given task. It is able to parallelize stages that can be completed in parallel, while bringing data together for blocking tasks. For iterative tasks, Flink attempts to do computation on the nodes where the data is stored for performance reasons. It can also do "delta iteration", or iteration on only the portions of data that have changes.

In terms of user tooling, Flink offers a web-based scheduling view to easily manage tasks and view the system. Users can also display the optimization plan for submitted tasks to see how it will actually be implemented on the cluster. For analysis tasks, Flink offers SQL-style querying, graph processing and machine learning libraries, and in-memory computation.

Flink operates well with other components. It is written to be a good neighbor if used within a Hadoop stack, taking up only the necessary resources at any given time. It integrates with YARN, HDFS, and Kafka easily. Flink can run tasks written for other processing frameworks like Hadoop and Storm with compatibility packages.

One of the largest drawbacks of Flink at the moment is that it is still a very young project. Large scale deployments in the wild are still not as common as other processing frameworks and there hasn't been much research into Flink's scaling limitations. With the rapid development cycle and features like the compatibility packages, there may begin to be more Flink deployments as organizations get the chance to experiment with it.

Summary

Flink offers both low latency stream processing with support for traditional batch tasks. Flink is probably best suited for organizations that have heavy stream processing requirements and some batch-oriented tasks. Its compatibility with native Storm and Hadoop programs, and its ability to run on a YARN-managed cluster can make it easy to evaluate. Its rapid development makes it worth keeping an eye on.
