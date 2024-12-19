# Types of Databases

## RDBMS / Relational database (ACID)

A relational database management system (RDBMS) is a program that allows you to create, update, and administer a relational database. Most relational database management systems use the SQL language to access the database.

A relational database is a type of database. It uses a structure that allows us to identify and access datain relationto another piece of data in the database. Often, data in a relational database is organized into tables.

Columns - Tables can have hundreds, thousands, sometimes even millions of columns of data. Columns are labeled with a descriptive name (say, age) and have a specific data type

Rows/Records - Tables can also have many rows of data. These rows are often called records

- MySQL Cluster
- PostgreSQL
- VoltDB
- Clustrix
- ScaleBase
- NimbusDB
- Megastore over BigTable
- MariaDB
- SQLite

## NoSQL Databases (Scales better, Higher availability)

- While the traditional SQL can be effectively used to handle large amount of structured data, we need NoSQL (Not Only SQL) to handle unstructured data
- NoSQL databases store unstructured data with no particular schema
- Each row can have its own set of column values. NoSQL gives better performance in storing massive amount of data

### Key-Value

- Project Voldemort
- Riak
- Redis
- Aerospike
- Scalaris
- Tokyo cabinet
- Memcached, membrain, and membase
- LF (fully decentralized fully replicated key/value store.)
- Etcd

### Wide Column / Extensible Record Stores / Column-family

Can have many many different types of column

- HBase
- HyperTable
- Cassandra

## Column Oriented Database

Not to be confused with column-family databases, column-oriented databases are very similar to relational databases, but store data on disk by column instead of by row. This means that all of the data for a single column is together, allowing for faster aggregation on larger data sets. Since the columns are separate from each other, inserting or updating values is a performance intensive task, so column-oriented databases are primarily used for analytical work where entire data sets can be preloaded at one time.- Druid

## Object Oriented Database

Object-oriented databases store data items as objects, seeking to bridge the gap between the representations used by objected-oriented programming languages and databases. Although this solves many problems with translating between different data paradigms, historically, adoption has suffered due to increased complexity, lack of standardization, and difficulty decoupling the data from the original application.

## Document Oriented Database / Document Stores

- Semi-structured data (XML, JSON)
- Flat File Database

#### Databases

- SimpleDB
- CouchDB
- MongoDB
- Terrastore
- SQLite
- RethinkDB

https://rethinkdb.com

## Hierarchical database / Graph based database (Entities, Relationships)

- Dgraph
- Nebula-graph - https://nebula-graph.io
- [Alibaba Graph Database](https://cn.aliyun.com/product/gdb)- A real-time, reliable, cloud-native graph database service that supports property graph model.
- [Amazon Neptune](https://aws.amazon.com/neptune/)- Fully-managed graph database service.
- [Ultimate Scalable Graph Database: ArangoDB for Real-World Use Cases](https://arangodb.com/)
    - [GitHub - arangodb/arangodb: 🥑 ArangoDB is a native multi-model database with flexible data models for documents, graphs, and key-values. Build high performance applications using a convenient SQL-like query language or JavaScript extensions.](https://github.com/arangodb/arangodb)
- [Bitsy](https://github.com/lambdazen/bitsy/wiki)- A small, fast, embeddable, durable in-memory graph database.
- [Blazegraph](https://github.com/blazegraph/tinkerpop3)- RDF graph database with OLTP support.
- [CosmosDB](https://docs.microsoft.com/en-us/azure/cosmos-db/graph-introduction)- Microsoft's distributed OLTP graph database.
- [ChronoGraph](https://github.com/MartinHaeusler/chronos/tree/master/org.chronos.chronograph)- A versioned graph database.
- [DSEGraph](https://www.datastax.com/products/datastax-enterprise-graph)- DataStax graph database with OLTP and OLAP support.
- [GRAKN.AI](https://grakn.ai/)- Distributed OLTP/OLAP knowledge graph system.
- [Hadoop (Spark)](https://tinkerpop.apache.org/docs/current/reference/#sparkgraphcomputer)- OLAP graph processor using Spark.
- [HGraphDB](https://github.com/rayokota/hgraphdb)- OLTP graph database running on Apache HBase.
- [Huawei Graph Engine Service](https://www.huaweicloud.com/en-us/product/ges.html)- Fully-managed, distributed, at-scale graph query and analysis service that provides a visualized interactive analytics platform.
- IBM Graph- OLTP graph database as a service.
- [JanusGraph](http://janusgraph.org/)- Distributed OLTP and OLAP graph database with BerkeleyDB, Apache Cassandra and Apache HBase support.
- [JanusGraph (Amazon)](https://github.com/awslabs/dynamodb-janusgraph-storage-backend/)- The Amazon DynamoDB Storage Backend for JanusGraph.
	- https://medium.com/terminusdb/graph-fundamentals-part-1-rdf-60dcf8d0c459
- [neo4j-gremlin-bolt](https://github.com/SteelBridgeLabs/neo4j-gremlin-bolt)- OLTP graph database (using Bolt Protocol).
- [OrientDB](https://github.com/orientechnologies/orientdb-gremlin)- OLTP graph database
- [Apache S2Graph](https://s2graph.apache.org/)- OLTP graph database running on Apache HBase.
- [Sqlg](https://github.com/pietermartin/sqlg)- OLTP implementation on SQL databases.
- [Stardog](https://stardog.com/)- RDF graph database with OLTP and OLAP support.
- [TinkerGraph](https://tinkerpop.apache.org/docs/current/reference/#tinkergraph-gremlin)- In-memory OLTP and OLAP reference implementation.
- Titan - Distributed OLTP and OLAP graph database with BerkeleyDB, Apache Cassandra and Apache HBase support.
- [Titan (Amazon)](https://github.com/awslabs/dynamodb-titan-storage-backend)- The Amazon DynamoDB storage backend for Titan.
- [Titan (Tupl)](https://github.com/classmethod/tupl-titan-storage-backend)- The Tupl storage backend for Titan.
- [Unipop](https://github.com/rmagen/unipop)- OLTP Elasticsearch and JDBC backed graph.
- http://tinkerpop.apache.org

Examples

- Filesystems
- DNS
- LDAP directories

### Neo4j

[Neo4j](https://tinkerpop.apache.org/docs/current/reference/#neo4j-gremlin)- OLTP graph database (embedded and high availability) (open source, noSQL graph database)

- [Build Graph Databases with Neo4j](https://www.freecodecamp.org/news/learn-neo4j-database-course/)
- Use cases - [Graph Data Science for Fraud Detection & Analytics | Neo4j](https://neo4j.com/use-cases/fraud-detection/)
- [Graph Database Use Cases & Solutions](https://neo4j.com/use-cases/)
- [Generative AI - Ground LLMs with Knowledge Graphs](https://neo4j.com/generativeai/)
- [Analyzing the Panama Papers with Neo4j: Data Models, Queries & More](https://neo4j.com/blog/analyzing-panama-papers-neo4j/)
- [GraphRAG: Unlocking LLM discovery on narrative private data - Microsoft Research](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/)
- [Free downloadable Neo4j presentation materials - Developer Guides](https://neo4j.com/developer/download-materials/)
- [Neo4j Introduction Workshop for Partners | PPT](https://www.slideshare.net/slideshow/neo4j-introduction-workshop-for-partners/274021584)

## Network databases

- IDMS

## Time-Series databases

- TimeScale DB (TSDB)
- InfluxDB
- OpenTSDB
- Prometheus

## In-memory databases

- Redis
- RocksDB
- Memcached (a distributed memory object caching system)

### In-Memory Databases (IMDB) and In-Memory Data Grids (IMDG)

One of the crucial differences between In-Memory Data Grids and In-Memory Databases lies in the ability to scale to hundreds and thousands of servers. That is the In-Memory Data Grid's**inherent capability** for such scale due to their MPP (Massively Parallel Processing) architecture, and the In-Memory Database's**explicit inability** to scale due to fact that SQL joins, in general, cannot be efficiently performed in a distribution context.

https://www.gridgain.com/resources/blog/in-memory-database-vs-in-memory-data-grid-revisited

## Cloud databases / on-line databases / Managed services

- Google Firebase
- Facebook Parse
- Amazon DynamoDB
- Amazon Aurora
- [One-stop Generative AI Stack to Build Production-ready Apps | DataStax](https://www.datastax.com/)
- [Astra DB | DataStax](https://www.datastax.com/products/datastax-astra)

## Object Storage

Object storage (also known asobject-based storage) is a [computer data storage](https://en.wikipedia.org/wiki/Computer_data_storage) architecture that manages data as objects, as opposed to other storage architectures like [file systems](https://en.wikipedia.org/wiki/File_systems) which manages data as a file hierarchy, and [block storage](https://en.wikipedia.org/wiki/Block_storage) which manages data as blocks within sectors and tracks.Each object typically includes the data itself, a variable amount of [metadata](https://en.wikipedia.org/wiki/Metadata), and a [globally unique identifier](https://en.wikipedia.org/wiki/Globally_unique_identifier). Object storage can be implemented at multiple levels, including the device level (object-storage device), the system level, and the interface level. In each case, object storage seeks to enable capabilities not addressed by other storage architectures, like interfaces that can be directly programmable by the application, a namespace that can span multiple instances of physical hardware, and data-management functions like [data replication](https://en.wikipedia.org/wiki/Data_replication) and data distribution at object-level granularity.

Object storage systems allow retention of massive amounts of [unstructured data](https://en.wikipedia.org/wiki/Unstructured_data). Object storage is used for purposes such as storing photos on [Facebook](https://en.wikipedia.org/wiki/Facebook), songs on [Spotify](https://en.wikipedia.org/wiki/Spotify), or files in online collaboration services, such as [Dropbox](https://en.wikipedia.org/wiki/Dropbox_(service)).- S3

- Azure Blob Storage

https://en.wikipedia.org/wiki/Object_storage

## NewSQL databases

NewSQL databases follow the relational structure and semantics, but are built using more modern, scalable designs. The goal is to offer greater scalability than relational databases and greaterconsistency guaranteesthan NoSQL alternatives. They achieve this by sacrificing certain amounts of availability in the event of a networking partition. The trade offs between consistency and availability is a fundamental problem of distributed databases described by theCAP theorem.- MemSQL

- VoltDB
- Spanner
- Calvin
- CockroachDB
- FaunaDB

https://www.youtube.com/watch?v=2CipVwISumA&t=661s&ab_channel=Fireship

- yugabyteDB

## Multi-model databases

Multi-model databases are databases that combine the functionality of more than one type of database. The benefits of this approach are clear - the same system can use different representations for different types of data.- ArangoDB

- OrientDB
- Couchbase

## Semantic RDF graph database

Semantic RDF graph databases are databases that map objects using the Resource Description Framework. This framework a way to describe, in detail, objects and their relationships by categorizing pieces of data and connections. The idea is to map subjects, actions, and objects like you would in a sentence (for example, "Bill calls Sue"). For most use cases, labeled property graphs, usually just called [graph databases](https://www.prisma.io/blog/comparison-of-database-models-1iz9u29nwn37#graph-databases-mapping-relationships-by-focusing-on-how-connections-between-data-are-meaningful), can express relationships more flexibly and concisely.

## Ledger Databases

## Embedded databases

https://github.com/Jsondb/jsondb-core

## Resources

- [Vector Databases](databases/nosql-databases/vector-databases.md)
- https://www.toptal.com/database/database-migrations-caterpillars-butterflies
- https://www.toptal.com/database/database-design-bad-practices
- https://dbdb.io
- https://www.sciencedirect.com/science/article/pii/S1319157816300453
- [Rust at speed - building a fast concurrent database](https://www.youtube.com/watch?v=s19G6n0UjsM)
- https://www.youtube.com/watch?v=Cym4TZwTCNU
- https://www.freecodecamp.org/news/learn-nosql-in-3-hours
- [Trillions of Indexes: How Uber’s LedgerStore Supports Such Massive Scale](https://blog.bytebytego.com/p/trillions-of-indexes-how-ubers-ledgerstore)
