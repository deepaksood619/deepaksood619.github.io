# Intro

Multi-cluster, shared storage architecture

Snowflake is a cloud-based database and is currently offered as a pay-as-you-go service in AWS, Azure and GCP cloud. It is developed by Snowflake Computing.

Snowflake adopts a shared-storage architecture. It uses Amazon S3 for its underlying data storage. It performs query execution within in elastic clusters of virtual machines, called virtual warehouse. The Cloud Service layer stores the collection of services that manage computation clusters, queries, transactions, and all the metadata like database catalogs and access control information in a key-value store (FoundationDB).

#### History

Implementation of Snowflake began in late 2012 and has been generally available since June 2015.

#### Concurrency Control

[Multi-version Concurrency Control (MVCC)](https://dbdb.io/browse?concurrency-control=multi-version-concurrency-control-mvcc)

Snowflake supports MVCC. As Snowflake's underlying data storage is done by Amazon S3, each write operation instead of performing writes in place, it creates a new entire file including the changes. The stale version of data is replaced by the newly created file, but is not deleted immediately. Snowflake allows users to define how long the stale version will be kept in S3, which is up to 90 days. Based on MVCC, Snowflake also supports time travel query.

#### Data Model

[Relational](https://dbdb.io/browse?data-model=relational) [Document / XML](https://dbdb.io/browse?data-model=document-xml)

Snowflake is relational as it supports ANSI SQL and ACID transactions. It offers built-in functions and SQL extensions for traversing, flattening, and nesting of semi-structured data, with support for popular formats such as JSON and Avro. When storing semi-structured data, Snowflake can perform automatic type inference to find the most common types and store them using the same compressed columnar format as native relational data. Thus it can accelerate query execution on them.

#### Foreign Keys

[Supported](https://dbdb.io/browse?foreign-keys=supported)

Snowflake supports defining and maintaining constraints, but does not enforce them, except for NOT NULL constraints, which are always enforced including foreign key constraint.

Snowflake relies on deferred constraint checking during query execution rather than during data modification, allowing for flexibility in data loading.

Snowflake, cannot handle referential integrity because, even though it supports integrity and other constraints, they are not enforced except the NOT NULL constraint that is always enforced. Other constraints than NOT NULL are created as disabled constraints.

Snowflake provides the following constraint functionality:

- Unique, primary, and foreign keys, and NOT NULL columns.
- Named constraints.
- Single-column and multi-column constraints.
- Creation of constraints inline and out-of-line.
- Support for creation, modification and deletion of constraints.

[Overview of Constraints | Snowflake Documentation](https://docs.snowflake.com/en/sql-reference/constraints-overview)

#### Indexes

[Not Supported](https://dbdb.io/browse?indexes=not-supported)

Snowflake does not support index, as maintaining index is expensive due to its architecture. Snowflake uses min-max based pruning, and other techniques to accelerate data access.

#### Isolation Levels

[Snapshot Isolation](https://dbdb.io/browse?isolation-levels=snapshot-isolation)

According to their paper and talk, Snowflake supports Snapshot Isolation. However, according to their documentation, it is said that Read Committed is the only Isolation level that is supported.

#### Joins

[Hash Join](https://dbdb.io/browse?joins=hash-join)

#### Query Compilation

[Not Supported](https://dbdb.io/browse?query-compilation=not-supported)

#### Query Execution

[Vectorized Model](https://dbdb.io/browse?query-execution=vectorized-model)

Snowflake processes data in pipelined fashion, in batches of a few thousand rows in columnar format. It also uses a push instead of pull model as the relational operators push the intermediate results to their downstream operators.

#### Query Interface

[SQL](https://dbdb.io/browse?query-interface=sql)

Snowflake's SQL query engine includes an automatic query optimization feature. The query optimizer assesses the query and execution plan, taking into account factors like table statistics, data distribution, and available compute resources. This dynamic optimization process ensures that queries are executed efficiently, leveraging the platform's resources effectively for optimal performance.

#### Storage Architecture

[Disk-oriented](https://dbdb.io/browse?storage-architecture=disk-oriented)

Snowflake's data storage is done via Amazon S3 service. Upon query execution, the responsible work nodes uses HTTP-based interface to read/write data. The worker node also uses its local disk as a cache.

#### Storage Model

[Hybrid](https://dbdb.io/browse?storage-model=hybrid)

Snowflake horizontally partitions data into large immutable files which are equivalent to blocks or pages in a traditional database system. Within each file, the values of each attribute or column are grouped together and heavily compressed, a well-known scheme called PAX or hybrid columnar. Each table file has a header which, among other metadata, contains the offsets of each column within the file.

#### Stored Procedures

[Not Supported](https://dbdb.io/browse?stored-procedures=not-supported)

#### System Architecture

[Shared-Disk](https://dbdb.io/browse?system-architecture=shared-disk)

It uses Amazon S3 for its underlying data storage. It performs query execution within its elastic clusters of virtual machines, called virtual warehouse. Upon query execution, virtual warehouse use HTTP-based interface to read/write data from S3. The Cloud Service layer stores the collection of services that manage computation clusters, queries, transactions, and all the metadata like database catalogs and access control information, in FoundationDB.

Snowflake actually uses a multi-cluster, shared data architecture. The storage and compute layers are separate, and the data is stored in a centralized object store (like Amazon S3). Compute clusters, or virtual warehouses, can access and process this shared data concurrently.

#### Views

[Virtual Views](https://dbdb.io/browse?views=virtual-views)

### Features

- Multiple Cloud Provider Support
- Unlimited Storage & Compute
- Data Platform as Service
- Unique 3 Layer Architecture
- Virtual Warehouse (compute)
- Support for semi structure data
- Snowflake Time Travel
- Snowflake Zero Copy Clone
- Continuous Data Loading (Snowpipe)
- Support for ANSI SQL + Extended SQL
- Snowflake Micropartition / Clustering
- Snowflake Data Security & Encryption
- Snowflake RBAC & DAC
- Data Sharing & Reader's Account
- Data Replication & Failover
- Snowflake Connectors & Drivers
- Tasks / Task Scheduling / DAGs
- Streams (CDC - any changes in the table)
- Sequences
    - Sequences are used to generate unique numbers across sessions and statements, including concurrent statements. They can be used to generate values for a primary key or any column that requires a unique value.
- Snowpark for Python, Java ans Scala - Runtimes and libraries that securely deploy and process non-SQL code in Snowflake.

## Others

- Streamlit

## Links

- [**Snowflake SnowPro Certification - Tutorial - YouTube**](https://www.youtube.com/playlist?list=PLba2xJ7yxHB71_GEKbQDBk0EKMq6b6S-k)
- [**Snowflake Tutorial - YouTube**](https://www.youtube.com/playlist?list=PLba2xJ7yxHB7SWc4Sm-Sp3uGN74ulI4pS)
- [The Snowflake Data Cloud - Mobilize Data, Apps, and AI](https://www.snowflake.com/en/)
- [What is Snowflake? 8 Minute Demo - YouTube](https://www.youtube.com/watch?v=9PBvVeCQi0w)
- [Snowflake Explained In 9 Mins | What Is Snowflake Database | Careers In Snowflake | MindMajix - YouTube](https://www.youtube.com/watch?v=hJHWmYcdDn8)
- [Snowflake Documentation](https://docs.snowflake.com/)
- [Top Snowflake Interview Questions and Answers (2023) - InterviewBit](https://www.interviewbit.com/snowflake-interview-questions/)
- [Top 50 Snowflake Interview Questions And Answers 2023](https://mindmajix.com/snowflake-interview-questions)
