# Snowflake

Snowflake is a cloud-based database and is currently offered as a pay-as-you-go service in the Amazon cloud. It is developed by Snowflake Computing.

Snowflake adopts a shared-nothing architecture. It uses Amazon S3 for its underlying data storage. It performs query execution within in elastic clusters of virtual machines, called virtual warehouse. The Cloud Service layer stores the collection of services that manage computation clusters, queries, transactions, and all the metadata like database catalogs and access control information in a key-value store (FoundationDB).

#### History

Implementation of Snowflake began in late 2012 and has been generally available since June 2015.

#### Concurrency Control 

[Multi-version Concurrency Control (MVCC)](https://dbdb.io/browse?concurrency-control=multi-version-concurrency-control-mvcc)

Snowflake supports MVCC. As Snowflake's underlying data storage is done by Amazon S3, each write operation instead of performing writes in place, it creates a new entire file including the changes. The stale version of data is replaced by the newly created file, but is not deleted immediately. Snowflake allows users to define how long the stale version will be kept in S3, which is up to 90 days. Based on MVCC, Snowflake also supports time travel query.

#### Data Model 

[Relational](https://dbdb.io/browse?data-model=relational) [Document / XML](https://dbdb.io/browse?data-model=document-xml)

Snowflake is relational as it supports ANSI SQL and ACID transactions. It offers built-in functions and SQL extensions for traversing, flattening, and nesting of semi-structured data, with support for popular formats such as JSON and Avro. When storing semi-structured data, Snowflake can perform automatic type inference to find the most common types and store them using the same compressed columnar format as native relational data. Thus it can accelerate query execution on them.

#### Foreign Keys

[Supported](https://dbdb.io/browse?foreign-keys=supported)

Snowflake supports defining and maintaining constraints, but does not enforce them, except for NOT NULL constraints, which are always enforced including foreign key constraint.

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

#### Storage Architecture 

[Disk-oriented](https://dbdb.io/browse?storage-architecture=disk-oriented)

Snowflake's data storage is done via Amazon S3 service. Upon query execution, the responsible work nodes uses HTTP -based interface to read/write data. The worker node also uses its local disk as a cache.

#### Storage Model 

[Hybrid](https://dbdb.io/browse?storage-model=hybrid)

Snowflake horizontally partitions data into large immutable files which are equivalent to blocks or pages in a traditional database system. Within each file, the values of each attribute or column are grouped together and heav- ily compressed, a well-known scheme called PAX or hybrid columnar. Each table file has a header which, among other metadata, contains the offsets of each column within the file.

#### Stored Procedures

[Not Supported](https://dbdb.io/browse?stored-procedures=not-supported)

#### System Architecture 

[Shared-Disk](https://dbdb.io/browse?system-architecture=shared-disk)

It uses Amazon S3 for its underlying data storage. It performs query execution within in elastic clusters of virtual machines, called virtual warehouse. Upon query execution, virtual warehouse use HTTP-based interface to read/write data from S3. The Cloud Service layer stores the collection of services that manage computation clusters, queries, transactions, and all the metadata like database catalogs and access control information, in FoundationDB.

#### Views

[Virtual Views](https://dbdb.io/browse?views=virtual-views)

## Links

[The Snowflake Data Cloud - Mobilize Data, Apps, and AI](https://www.snowflake.com/en/)

[What is Snowflake? 8 Minute Demo - YouTube](https://www.youtube.com/watch?v=9PBvVeCQi0w)

[Snowflake Explained In 9 Mins | What Is Snowflake Database | Careers In Snowflake | MindMajix - YouTube](https://www.youtube.com/watch?v=hJHWmYcdDn8)
