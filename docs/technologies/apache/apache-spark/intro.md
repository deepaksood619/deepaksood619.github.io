# Apache Spark

Spark is a general purpose distributed data processing engine. Or in other words: load big data, do computations on it in a distributed way, and then store it.

Spark supports both Scala & Python. Even though Spark itself is written in Scala, I recommend you to use Python for your Spark jobs, as it is vastly more popular among Spark users (many data scientists use Python). It will be far easier for you to find documentation and get your question answered online.

The basic structure of a Spark-cluster:

![image](../../../media/Technologies-Apache-Apache-Spark-image1.jpg)

The cluster manager is not part of the Spark framework itself - even though Spark ships with its own, this one should not be used in production. Supported cluster managers are Mesos, Yarn, and Kubernetes.

The driver program is a Java, Scala, or Python application, which is executed on the Spark Master.

As part of the program, some Spark framework methods will be called, which themselves are executed on the worker nodes.

Each worker node might run multiple executors (as configured: normally one per available CPU core). Each of the executors will receive a task from the scheduler to be executed.

The modules of Apache Spark run directly on top of its core:

![image](../../../media/Technologies-Apache-Apache-Spark-image2.jpg)

## Spark Abstractions & Concepts

- RDD: Resilient Distributed Dataset (Immutable)
- DAG: Directed Acyclic Graph
- SparkContext
- Transformations
- Actions

## Spark Memory Management

Two types of memory

- Execution

Memory used for shuffles, joins, sorts and aggregations

- Storage memory

Memory used to cache data that will be reused later

<https://www.youtube.com/watch?v=dPHrykZL8Cg>

## Table of contents

- Framework of spark
- Resilient Distributed Datasets (RDDs)
- Spark execution

## Need of Spark

- Apache Spark is a big data analytics framework that was originally developed at the University of California, Berkely's AMPLab, in 2012.
- It is an another system for big data analytics
- Isn't MapReduce good enough?
  - Simplifies batch processing on large commodity clusters

## Spark Applications

- Twitter spam classification
- EM algorithm for traffic prediction
- K-means clustering
- Alternating Least Squares matrix factorization
- In-memory OLAP aggregation on Hive data
- SQL on Spark

## Reading material

- Matei Zaharia, Mosharaf Chowdhury - Spark: Cluster Computing with Working Sets
- Matei Zaharia - Resilient Distributed Datasets: A fault-tolerant abstraction for in-memory cluster computing

## DAG

- Action
  - Count
  - Take
  - Foreach
- Transformation
  - Map
  - ReduceByKey
  - GroupByKey
  - JoinByKey

## Spark Implementation

## Spark ideas

- Expressive computing system, not limited to map-reduce model
- Facilitate system memory
  - avoid saving intermediate results to disk
  - cache data for repetitive queries. (e.g. for machine learning)
- Compatible with Hadoop

## RDD abstraction

- Partitioned collection of records
- Spread across the cluster
- Read-only
- Caching dataset in memory
  - different storage levels available
  - fallback to disk possible

## RDD operations

- Transformations to build RDDs through deterministic operations on other RDDs
  - transformations include map, filter, join
  - lazy operation
- Actions to return value or export data
  - actions include court, collect, save
  - triggers execution

## Available APIs

- You can write in Java, Scala or Python
- Interactive interpreter: Scala & Python only
- Standalone applications: any
- Performance: Java & Scala are faster thanks to static typing

## Commands

```bash
spark-shell # run scala spark interpreter
pyspark # python interpreter
spark-submit --master local --class GvaWeather target/scala-2.10/gva-weather_2.10-1.0.jar #job submission
```

## Summary

- Concept not limited to single pass map-reduce
- Avoid sorting intermediate results on disk or HDFS
- Speedup computations when reusing datasets

## Conclusion

- RDDs provide a simple and efficient programming model
- Generalized to a broad set of applications
- Leverages coarse-grained nature of parallel algorithms for failure recovery

## Apache Spark (Core)

Spark consists of a core framework that manages the internal representation of data, including:

- serialization
- memory allocation
- caching
- increasing resilience by storing intermediate snapshots on disk
- automatic retries
- data exchange (shuffling) between worker nodes

It also provides a bunch of methods to transform data (likemapandreduce). All of these methods work on **resilient distributed datasets (RDD).**

Spark automatically recognizes dependencies between single steps and thereby knows which of them can be executed in parallel.

This is accomplished by building a directed acyclic graph (DAG), which also implies that transformations are not executed right away, but when action functions are called.

So basically, the methods can be divided into two types: RDD transformations and actions.

These are RDD transformations:

- map(func)
- flatMap()
- filter(func)
- mapPartitions(func)
- mapPartitionWithIndex()
- union(dataset)
- intersection(dataset)
- distinct()
- groupByKey()
- reduceByKey(func, [numTasks])
- sortByKey()
- join()
- coalesce()

And these are RDD actions:

- count()
- collect()
- take(n)
- top()
- countByValue()
- reduce()
- fold()
- aggregate()
- foreach()

The DAG of a running job can be viewed in the Spark UI web interface. It also shows the pending jobs, the lists of tasks, and current resource usage and configuration.

Most of the information can also be reviewed for finished (or failed) jobs if the history server is configured.

## Spark SQL

This is an abstraction of Spark's core API. Whereas the core API works with RDD, and all transformations are defined by the developer explicitly, Spark SQL represents the RDD as so-called DataFrames. The DataFrame API is more like a DSL that looks like SQL.

The developer can even more abstract the RDD by registering a DataFrame as a named in-memory table. This table can then be queried as one would query a table in a relational database using SQL.

## Spark Streaming

This can poll distributed logs like Apache Kafka or Amazon Kinesis (and some other messaging systems, like ActiveMQ) to process the messages in micro-batches. (Nearly) all functionality available for Spark batch jobs can also be applied on the RDD provided by Spark Streaming.

## MLlib

MLlib provides high-level algorithms that are commonly used in general data analysis (like clustering and regression) and in machine learning. It provides the functionality to define pipelines, train models and persist them, and read trained models to apply them to live data.

## GraphX

This lets you represent RDD as a graph (nodes are connected via edges) and perform some basic graph operations on it. Currently (only) three more advanced algorithms are provided: PageRank, ConnectedComponents, andTriangleCounting.

## Compare Spark Streaming to Kafka Streams and Flink. Highlight the differences and advantages of each technology, and for which use cases each of the stream processing frameworks works best

The following table gives an overview of some characteristics of each of the frameworks. There is not always a clear answer of when to use which framework. Especially since it's often in unimportant details where they differ.

But it's important to understand:

- That Kafka Streams is just a library (no additional infrastructure component, but it has the responsibility to deploy and scale the streaming application).
- That Flink is currently the most superior/feature-rich framework when it comes to low-latency stream processing (which is important when streams are used as the core communication between services in real-time).
- That Spark's main benefit is the whole existing eco-system including the MLlib/GraphX abstractions and that parts of the code can be reused for both batch- and stream-processing functionality.

|                                              | **Flink**                                                                                                                                                                 | **Kafka Streams**                                                                                            | **Spark Streaming**                                                                                       |
|--------------|-----------------------|------------------|------------------|
| Deployment                                    | A framework that also takes care of deployment in a cluster                                                                                                               | A library that can be included in any Java program. Deployment depends how the Java application is deployed. | A framework that also takes care of deployment in a cluster                                               |
| Life cycle                                    | Stream processing logic is run as a job in the Flink cluster                                                                                                              | Stream processing logic is run as part of a "standard" Java application                                    | Stream processing logic is run as a job in the Spark cluster                                              |
| Responsibility                                | Dedicated infrastructure team                                                                                                                                             | Application developer                                                                                        | Dedicated infrastructure team                                                                             |
| Coordination                                  | Flink master (JobManager), part of the streaming program                                                                                                                  | Leverages the Kafka cluster for coordination, load balancing, and fault-tolerance                            | Spark Master                                                                                              |
| Source of continuous data                     | Kafka, File Systems, other message queues                                                                                                                                 | Kafka only                                                                                                   | Common streaming platforms like Kafka, Flume, Kinesis, etc.                                               |
| Sink for results                              | Any storage where an implementation using the Flink Sink API is available                                                                                                 | Kafka or any other storage where a Kafka Sink is implemented using the Kafka Connect API                     | File and Kafka as a predefined sink, any other destination using the forEach-sink (manual implementation) |
| Bounded and unbounded data streams            | Unbounded and bounded                                                                                                                                                     | Unbounded                                                                                                    | Unbounded (bounded using Spark Batch jobs)                                                                |
| Semantical guarantees                         | Exactly once for internal Flink state; end-to-end exactly once with selected sources and sinks (e.g., Kafka to Flink to HDFS); at least once when Kafka is used as a sink | Exactly once, end-to-end with Kafka                                                                          | Exactly once                                                                                              |
| Stream processing approach                    | Single record                                                                                                                                                             | Single record                                                                                                | Micro-batches                                                                                             |
| State management                              | Key-value storage, transparent to the developer                                                                                                                           | No, must be implemented manually                                                                             | No, stateless by nature                                                                                   |
| Feature set                                   | Rich feature set, including event time (opposed to processing time), sliding windows, and watermarks                                                                      | Simple features set to aggregate in tumbling windows                                                         | Wide feature set but lacking some of the more advanced features that Flink offers                         |
| Low latency                                   | Yes                                                                                                                                                                       | Yes                                                                                                          | No                                                                                                        |
| Example of when to choose as stream processor | Setup of a new event-driven architecture that needs advanced stream-processing features and has low-latency requirements                                                  | JVM application that should consume an existing Kafka event stream                                           | Add stream processing when Spark is already used for batch processing and low latency is not mandatory    |

## Apache Spark

- Apache Spark is a lightning-fast cluster computing technology, designed for fast computation.

## Spark Streaming

- Spark Streaming is an extension of the core Spark API that enables scalable, high-throughput, fault-tolerant stream processing of live data streams.
- Streaming data inputs from HDFS, Kafka, Flume, TCP sockets, kinesis, etc
- Spark ML (Machine Learning) functions and GraphX graph processing algorithms are fully applicable to streaming data

![image](../../../media/Technologies-Apache-Apache-Spark-image3.jpg)

## Spark MLlib

- Spark MLlib is a distributed machine-learning framework on top of Spark. Core
- MLlib is Spark's scalable machine learning library consisting of common learning algorithms and utilities, including classfication, regression, clustering, collaborative filtering, dimensionality reduction

## Spark MLlib Component

![image](../../../media/Technologies-Apache-Apache-Spark-image4.jpg)

## Spark GraphX

- GraphX is a new component in Spark for graphs and graph-parallel computation. At a high level, GraphX extends the Spark RDD by introducing a new graph abstraction
- GraphX reuses Spark RDD concept, simplifies graph analytics tasks, provides the ability to make operations on a directed multigraph with properties attached to each vertex and edge
- GraphX is a thin layer on top of the Spark general-purpose dataflow framework

![image](../../../media/Technologies-Apache-Apache-Spark-image5.jpg)

## pyspark

docker run -p 8888:8888 jupyter/pyspark-notebook

<https://realpython.com/pyspark-intro>

<https://www.datacamp.com/community/blog/big-data-with-pyspark>

<http://spark.apache.org/docs/2.1.0/api/python/pyspark.sql.html>

<https://towardsdatascience.com/natural-language-processing-with-spark-9efef3564270>

## Spark UI

<https://spark.apache.org/docs/3.0.0-preview/web-ui.html>

## References

<https://www.toptal.com/spark/interview-questions>

<https://databricks.com> - Free Spark Cluster

<https://medium.freecodecamp.org/how-to-use-spark-clusters-for-parallel-processing-big-data-86a22e7f8b50>

<https://www.toptal.com/spark/introduction-to-apache-spark>

<https://github.com/jaceklaskowski/mastering-spark-sql-book>

<https://towardsdatascience.com/a-neanderthals-guide-to-apache-spark-in-python-9ef1f156d427>

<https://www.freecodecamp.org/news/use-pyspark-for-data-processing-and-machine-learning>
