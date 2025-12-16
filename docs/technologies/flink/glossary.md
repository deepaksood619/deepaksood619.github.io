# Glossary

## Checkpoint Storage

The location where the [State Backend](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#state-backend) will store its snapshot during a checkpoint (Java Heap of [JobManager](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-jobmanager) or Filesystem).

## Flink Application Cluster

A Flink Application Cluster is a dedicated [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster) that only executes [Flink Jobs](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job) from one [Flink Application](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-application). The lifetime of the [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster) is bound to the lifetime of the Flink Application.

## Flink Job Cluster

A Flink Job Cluster is a dedicated [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster) that only executes a single [Flink Job](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job). The lifetime of the [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster) is bound to the lifetime of the Flink Job. This deployment mode has been deprecated since Flink 1.15.

## Flink Cluster

A distributed system consisting of (typically) one [JobManager](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-jobmanager) and one or more [Flink TaskManager](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-taskmanager) processes.

## Event

An event is a statement about a change of the state of the domain modelled by the application. Events can be input and/or output of a stream or batch processing application. Events are special types of [records](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#Record).

## ExecutionGraph

see [Physical Graph](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#physical-graph)

## Function

Functions are implemented by the user and encapsulate the application logic of a Flink program. Most Functions are wrapped by a corresponding [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator).

## Instance

The term _instance_ is used to describe a specific instance of a specific type (usually [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) or [Function](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#function)) during runtime. As Apache Flink is mostly written in Java, this corresponds to the definition of _Instance_ or _Object_ in Java. In the context of Apache Flink, the term _parallel instance_ is also frequently used to emphasize that multiple instances of the same [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) or [Function](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#function) type are running in parallel.

## Flink Application

A Flink application is a Java Application that submits one or multiple [Flink Jobs](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job) from the `main()` method (or by some other means). Submitting jobs is usually done by calling `execute()` on an execution environment.

The jobs of an application can either be submitted to a long running [Flink Session Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-session-cluster), to a dedicated [Flink Application Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-application-cluster), or to a [Flink Job Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job-cluster).

## Flink Job

A Flink Job is the runtime representation of a [logical graph](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#logical-graph) (also often called dataflow graph) that is created and submitted by calling `execute()` in a [Flink Application](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-application).

## JobGraph

see [Logical Graph](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#logical-graph)

## Flink JobManager

The JobManager is the orchestrator of a [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster). It contains three distinct components: Flink Resource Manager, Flink Dispatcher and one [Flink JobMaster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-jobmaster) per running [Flink Job](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job).

## Flink JobMaster

JobMasters are one of the components running in the [JobManager](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-jobmanager). A JobMaster is responsible for supervising the execution of the [Tasks](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#task) of a single job.

## JobResultStore

The JobResultStore is a Flink component that persists the results of globally terminated (i.e. finished, cancelled or failed) jobs to a filesystem, allowing the results to outlive a finished job. These results are then used by Flink to determine whether jobs should be subject to recovery in highly-available clusters.

## Logical Graph

A logical graph is a directed graph where the nodes are [Operators](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) and the edges define input/output-relationships of the operators and correspond to data streams or data sets. A logical graph is created by submitting jobs from a [Flink Application](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-application).

Logical graphs are also often referred to as _dataflow graphs_.

## Managed State

Managed State describes application state which has been registered with the framework. For Managed State, Apache Flink will take care about persistence and rescaling among other things.

## Operator

Node of a [Logical Graph](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#logical-graph). An Operator performs a certain operation, which is usually executed by a [Function](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#function). Sources and Sinks are special Operators for data ingestion and data egress.

## Operator Chain

An Operator Chain consists of two or more consecutive [Operators](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) without any repartitioning in between. Operators within the same Operator Chain forward records to each other directly without going through serialization or Flink’s network stack.

## Partition

A partition is an independent subset of the overall data stream or data set. A data stream or data set is divided into partitions by assigning each [record](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#Record) to one or more partitions. Partitions of data streams or data sets are consumed by [Tasks](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#task) during runtime. A transformation which changes the way a data stream or data set is partitioned is often called repartitioning.

## Physical Graph

A physical graph is the result of translating a [Logical Graph](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#logical-graph) for execution in a distributed runtime. The nodes are [Tasks](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#task) and the edges indicate input/output-relationships or [partitions](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#partition) of data streams or data sets.

## Record

Records are the constituent elements of a data set or data stream. [Operators](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) and [Functions](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#Function) receive records as input and emit records as output.

## (Runtime) Execution Mode

DataStream API programs can be executed in one of two execution modes: `BATCH` or `STREAMING`. See [Execution Mode](https://nightlies.apache.org/flink/flink-docs-release-2.2/docs/dev/datastream/execution_mode/) for more details.

## Flink Session Cluster

A long-running [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster) which accepts multiple [Flink Jobs](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job) for execution. The lifetime of this Flink Cluster is not bound to the lifetime of any Flink Job. Formerly, a Flink Session Cluster was also known as a Flink Cluster in _session mode_. Compare to [Flink Application Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-application-cluster).

## State Backend

For stream processing programs, the State Backend of a [Flink Job](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-job) determines how its [state](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#managed-state) is stored on each TaskManager (Java Heap of TaskManager or (embedded) RocksDB).

## Sub-Task

A Sub-Task is a [Task](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#task) responsible for processing a [partition](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#partition) of the data stream. The term “Sub-Task” emphasizes that there are multiple parallel Tasks for the same [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) or [Operator Chain](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator-chain).

## Table Program

A generic term for pipelines declared with Flink’s relational APIs (Table API or SQL).

## Task

Node of a [Physical Graph](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#physical-graph). A task is the basic unit of work, which is executed by Flink’s runtime. Tasks encapsulate exactly one parallel instance of an [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) or [Operator Chain](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator-chain).

## Flink TaskManager

TaskManagers are the worker processes of a [Flink Cluster](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-cluster). [Tasks](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#task) are scheduled to TaskManagers for execution. They communicate with each other to exchange data between subsequent Tasks.

## Transformation

A Transformation is applied on one or more data streams or data sets and results in one or more output data streams or data sets. A transformation might change a data stream or data set on a per-record basis, but might also only change its partitioning or perform an aggregation. While [Operators](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) and [Functions](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#function) are the “physical” parts of Flink’s API, Transformations are only an API concept. Specifically, most transformations are implemented by certain [Operators](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator).

## UID

A unique identifier of an [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator), either provided by the user or determined from the structure of the job. When the [Application](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#flink-application) is submitted this is converted to a [UID hash](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#uid-hash).

## UID hash

A unique identifier of an [Operator](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#operator) at runtime, otherwise known as “Operator ID” or “Vertex ID” and generated from a [UID](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/#uid). It is commonly exposed in logs, the REST API or metrics, and most importantly is how operators are identified within [savepoints](https://nightlies.apache.org/flink/flink-docs-release-2.2/docs/ops/state/savepoints/).

[Fetching Title#ree1](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/glossary/)
