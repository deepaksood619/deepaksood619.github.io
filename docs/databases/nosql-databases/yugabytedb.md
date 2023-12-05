# YugabyteDB

YugabyteDB is a high-performance, cloud-native distributed SQL database that aims to support all PostgreSQL features. It is best fit for cloud-native OLTP (i.e. real-time, business critical) applications that need absolute data correctness and require at least one of the following: scalability, high tolerance to failures, globally-distributed deployments.

The core features of YugabyteDB include:

- **Powerful RDBMS capabilities**Yugabyte SQL (YSQLfor short) reuses the query layer of PostgreSQL (similar to Amazon Aurora PostgreSQL), thereby supporting most of its features (datatypes, queries, expressions, operators and functions, stored procedures, triggers, extensions, etc). Here is a detailed [list of features currently supported by YSQL](https://github.com/yugabyte/yugabyte-db/blob/master/architecture/YSQL-Features-Supported).
- **Distributed transactions** The transactions design is based on the Google Spanner architecture. Strongly consistency of writes is achieved by using Raft consensus for replication and cluster-wide distributed ACID transactions usinghybrid logical clocks. *Snapshot* andserializableisolation levels are supported. Reads (queries) have strong consistency by default, but can be tuned dynamically to read from followers and read-replicas.
- **Continuous availability** YugabyteDB is extremely resilient to common outages with native failover and repair. YugabyteDB can be configured to tolerate disk, node, zone, region and cloud failures automatically. For a typical deployment where a YugabyteDB cluster is deployed in one region across multiple zones on a public cloud, the RPO is 0 (meaning no data is lost on a failure) and the RTO is 3 seconds (meaning the data being served by the failed node is available in 3 seconds).
- **Horizontal scalability** Scaling a YugabyteDB cluster in order to achieve more IOPS or data storage is as simple as adding nodes to the cluster.
- **Geo-distributed, multi-cloud**YugabyteDB can be deployed in public clouds and natively inside Kubernetes. It supports deployments that span three or more fault domains, such as multi-zone, multi-region and multi-cloud deployments. It also supports xCluster asynchronous replication with unidirectional master-slave and bidirectional multi-master configurations that can be leveraged in two-region deployments. To serve (stale) data with low latencies, read replicas are also a supported feature.
- **Multi API design**The query layer of YugabyteDB is built to be extensible. Currently, YugabyteDB supports two distributed SQL APIs [Yugabyte SQL (YSQL)](https://docs.yugabyte.com/latest/api/ysql/), a fully relational API that re-uses query layer of PostgreSQL, and [Yugabyte Cloud QL (YCQL)](https://docs.yugabyte.com/latest/api/ycql/), a semi-relational SQL-like API with documents/indexing support with Apache Cassandra QL roots.
- **100% open source**YugabyteDB is fully open-source under the [Apache 2.0 license](https://github.com/yugabyte/yugabyte-db/blob/master/LICENSE). The open-source version has powerful enterprise features distributed backups, encryption of data at-rest, in-flight TLS encryption, change data capture, read replicas and others.

### Features

- PostgreSQL-compatible and works with many PostgreSQL database tools such as language drivers, object-relational mapping (ORM) tools, and schema-migration tools.
- Horizontally scalable, where performance scales out simply as nodes are added.
- Resilient and consistent in its data layer.
- Deployable in public clouds, natively with Kubernetes, or on its own managed services.
- 100% open source with powerful enterprise features such as distributed backups, encryption of data at rest, in-flight TLS encryption, change data capture, and read replicas.

https://github.com/yugabyte/yugabyte-db

https://docs.yugabyte.com/latest/comparisons

https://docs.yugabyte.com/latest/architecture/design-goals

[YugabyteDB supports read committed isolation - YouTube](https://www.youtube.com/watch?v=4ZiFKWOPvoc&ab_channel=HusseinNasser)
