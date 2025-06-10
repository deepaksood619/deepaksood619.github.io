# MemSQL

MemSQLis a [distributed](https://en.wikipedia.org/wiki/Distributed_database), [in-memory](https://en.wikipedia.org/wiki/In-memory_database), [SQL](https://en.wikipedia.org/wiki/Structured_Query_Language)[database](https://en.wikipedia.org/wiki/Database) management system.

It is a [relational database management system](https://en.wikipedia.org/wiki/Relational_database_management_system)(RDBMS). It [compiles](https://en.wikipedia.org/wiki/Compiler) Structured Query Language ([SQL](https://en.wikipedia.org/wiki/SQL)) into machine code, via [termed code generation](https://en.wikipedia.org/w/index.php?title=Termed_code_generation&action=edit&redlink=1).

MemSQL combines lock-free data structures and a [just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation)(JIT) to process highly volatile workloads. More specifically, MemSQL implements lock-free [hash tables](https://en.wikipedia.org/wiki/Hash_table) and lock-free [skip lists](https://en.wikipedia.org/wiki/Skip_list) in memory for fast random access to data. SQL queries sent to the MemSQL server are converted into byte code and compiled through [LLVM](https://en.wikipedia.org/wiki/LLVM) into [machine code](https://en.wikipedia.org/wiki/Machine_code). Queries are then stripped of their parameters and the query template is stored as a shared object which is subsequently matched against incoming queries to the system. Executing pre-compiled query plans removes interpretation along hot code paths, providing highly efficient code paths that minimize the number of [central processing unit](https://en.wikipedia.org/wiki/Central_processing_unit)(CPU) instructions required to process SQL statements.

MemSQL is wire-compatible with [MySQL](https://en.wikipedia.org/wiki/MySQL).This means that applications can connect to MemSQL through MySQL clients and drivers, as well as standard [Open Database Connectivity](https://en.wikipedia.org/wiki/Open_Database_Connectivity)(ODBC) and [Java Database Connectivity](https://en.wikipedia.org/wiki/Java_Database_Connectivity)(JDBC) connectors.

In addition to MySQL syntax and functionality, MemSQL can also store columns in [JSON](https://en.wikipedia.org/wiki/JSON) format, and supports [geospatial](https://en.wikipedia.org/wiki/Geospatial) datatypes and operations.

## Distributed Architecture

A MemSQL database is a distributed database implemented with aggregators and leaf nodes.MemSQL binaries used for aggregator and leaf nodes are nearly the same, with the only difference being the user identifying the node as an aggregator or leaf. An aggregator is responsible for receiving SQL queries, breaking them up across leaf nodes, and aggregating results back to the client. A leaf node stores MemSQL data and processes queries from the aggregator. All communication between aggregators and leaf nodes is done over the network through SQL syntax. MemSQL uses hash partitioning to distribute data uniformly across the number of leaf nodes.

## Durability

MemSQL durability is slightly different for its in-memory rowstore and an on-disk columnstore.

Durability for the in-memory rowstore is implemented with a write-ahead log and snapshots, similar to checkpoints. With default settings, as soon as a transaction is acknowledged in memory, the database will asynchronously write the transaction to disk as fast as the disk allows.

The on-disk columnstore is actually fronted by an in-memory rowstore-like structure (skiplist). This structure has the same durability guarantees as the MemSQL rowstore. Apart from that, the columnstore is durable since its data is stored on disk.

## Replication

A MemSQL cluster can be configured in "High Availability" mode, where every data partition is automatically created with master and slave versions on two separate leaf nodes. In High Availability mode, aggregators send transactions to the master partitions, which then send logs to the slave partitions. In the event of an unexpected master failure, the slave partitions take over as master partitions in a fully online operation.

Effortlessly set up streaming ingest feeds from [Apache Kafka](http://docs.memsql.com/docs/kafka-extractor), [Amazon S3](http://docs.memsql.com/docs/s3-pipelines-overview), and [HDFS](https://docs.memsql.com/docs/hdfs-pipelines-overview/) using a single [CREATE PIPELINE](http://docs.memsql.com/docs/create-pipeline) command

https://www.memsql.com

https://en.wikipedia.org/wiki/MemSQL

https://www.memsql.com/blog/a-technical-introduction-to-memsql
