# Databases - Others

## Flat file database

A **flat file database** is a [database](https://en.wikipedia.org/wiki/Database) stored as an ordinary unstructured file called a "flat file". To access the structure of the data and manipulate it on a computer system, the file must be read in its entirety into the computer's memory. Upon completion of the database operations, the file is again written out in its entirety to the host's file system. In this stored mode the database is said to be "flat", meaning that it has no structure for indexing and there are usually no structural relationships between the records. A flat file can be a [plain text](https://en.wikipedia.org/wiki/Plain_text) file or a [binary file](https://en.wikipedia.org/wiki/Binary_file).

https://en.wikipedia.org/wiki/Flat_file_database

## ScyllaDB

ScyllaDB’s close-to-the-metal architecture handles millions of OPS with predictable single-digit millisecond latencies.

ScyllaDB is an open-source distributed wide-column NoSQL database offering high availability, scalability and fault-tolerance, all while maintaining predictable low latencies and high throughput. ScyllaDB is compatible with both Apache Cassandra (CQL, SSTables) and Amazon DynamoDB interfaces. Written in C++, ScyllaDB uses the highly asynchronous shard-per-core, shared-nothing Seastar framework (http://seastar.io/), where each thread executes on its own CPU core, memory, and multi-queue network interface controller. Cross-core communication is carried out by explicit asynchronous, message passing.

- Real-time big data database
- Shared nothing architecture
- NoSQL Database
- Written in C++
- ScyllaDB does not support ACID transactions as in RDBMS.
- ScyllaDB supports CQL Light-Weight Transactions (LWT), which allow for compare-and-set (CAS) operations and strict linearizability using a Paxos consensus algorithm.
- Alternative - Cassandra
- Architecture - [ScyllaDB | Modern NoSQL Database Architecture](https://www.scylladb.com/product/technology/)
- [ScyllaDB vs Cassandra - ScyllaDB](https://www.scylladb.com/scylladb-vs-cassandra/)
- [Compare NoSQL Databases: ScyllaDB vs MongoDB vs PostgreSQL - ScyllaDB](https://www.scylladb.com/2023/04/03/mongodb-vs-postgres-vs-scylladb-tractians-benchmarking-and-migration/)

### Links

- [ScyllaDB | Monstrously Fast + Scalable NoSQL](https://www.scylladb.com)
- [GitHub - scylladb/scylladb: NoSQL data store using the seastar framework, compatible with Apache Cassandra](https://github.com/scylladb/scylladb)
- [Scylla - Database of Databases](https://dbdb.io/db/scylla)
- [ScyllaDB is better than Cassandra, and here’s why.](https://www.freecodecamp.org/news/scylladb-its-cassandra-but-better-76e3d83a4f81/)
- [Getting the Most out of Lightweight Transactions in ScyllaDB - ScyllaDB](https://www.scylladb.com/2020/07/15/getting-the-most-out-of-lightweight-transactions-in-scylla/)
- [Why does Apple use Cassandra when ScyllaDB is so much better and faster? - Quora](https://www.quora.com/Why-does-Apple-use-Cassandra-when-ScyllaDB-is-so-much-better-and-faster)
- [ScyllaDB In Action | By Bo Ingram, Staff Engineer at Discord](https://lp.scylladb.com/scylladb-in-action-book-offer)

## RocksDB

A Persistent Key-Value Store for Flash and RAM Storage by Facebook Database Engineering Team

This code is a library that forms the core building block for a fast key value server, especially suited for storing data on flash drives. It has a Log-Structured-Merge-Database (LSM) design with flexible tradeoffs between Write-Amplification-Factor (WAF), Read-Amplification-Factor (RAF) and Space-Amplification-Factor (SAF). It has multi-threaded compactions, making it specially suitable for storing multiple terabytes of data in a single database.

### Features

1. **High Performance**

    RocksDB uses a log structured database engine, written entirely in C++, for maximum performance. Keys and values are just arbitrarily-sized byte streams.

2. **Optimized for Fast Storage**

    RocksDB is optimized for fast, low latency storage such as flash drives and high-speed disk drives. RocksDB exploits the full potential of high read/write rates offered by flash or RAM.

3. **Adaptable**

    RocksDB is adaptable to different workloads. From database storage engines such as [MyRocks](https://github.com/facebook/mysql-5.6) to [application data caching](http://techblog.netflix.com/2016/05/application-data-caching-using-ssds.html) to embedded workloads, RocksDB can be used for a variety of data needs.

4. **Basic and Advanced Database Operations**

    RocksDB provides basic operations such as opening and closing a database, reading and writing to more advanced operations such as merging and compaction filters.

    https://github.com/facebook/rocksdb

## IndexedDB

IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions. Here is the definition of IndexedDB on MDN:

"IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high performance searches of this data. While DOM Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution."

Each IndexedDB database is unique to an origin (typically, this is the site domain or subdomain), meaning it cannot access or be accessed by any other origin.[Data storage limits](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) are usually quite large, if they exist at all, but different browsers handle limits and data eviction differently.

## Mnesia

Mnesiais a [distributed](https://en.wikipedia.org/wiki/Distributed_computing), [soft real-time](https://en.wikipedia.org/wiki/Real-time_computing)[database management system](https://en.wikipedia.org/wiki/Database_management_system) written in the [Erlang programming language](https://en.wikipedia.org/wiki/Erlang_(programming_language)). It is distributed as part of the [Open Telecom Platform](https://en.wikipedia.org/wiki/Open_Telecom_Platform)

Emqtt and RabbitMQ uses Mnesia database

A distributed telecommunications DBMS.

The following are some of the most important and attractive capabilities provided by Mnesia:

- A relational/object hybrid data model that is suitable for telecommunications applications.
- A DBMS query language, Query List Comprehension (QLC) as an add-on library.
- Persistence. Tables can be coherently kept on disc and in the main memory.
- Replication. Tables can be replicated at several nodes.
- Atomic transactions. A series of table manipulation operations can be grouped into a single atomic transaction.
- Location transparency. Programs can be written without knowledge of the actual data location.
- Extremely fast real-time data searches.
- Schema manipulation routines. The DBMS can be reconfigured at runtime without stopping the system.

https://en.wikipedia.org/wiki/Mnesia

http://erlang.org/doc/man/mnesia.html

https://github.com/erlang/otp/tree/master/lib/mnesia

## LevelDB

LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.

**Features**

- Keys and values are arbitrary byte arrays.
- Data is stored sorted by key.
- Callers can provide a custom comparison function to override the sort order.
- The basic operations arePut(key,value),Get(key),Delete(key).
- Multiple changes can be made in one atomic batch.
- Users can create a transient snapshot to get a consistent view of data.
- Forward and backward iteration is supported over the data.
- Data is automatically compressed using the [Snappy compression library](http://google.github.io/snappy/).
- External activity (file system operations etc.) is relayed through a virtual interface so users can customize the operating system interactions.

https://github.com/google/leveldb

## Gorilla TSDB (Used by Prometheus for storing metrics)

https://blog.acolyer.org/2016/05/03/gorilla-a-fast-scalable-in-memory-time-series-database

https://fabxc.org/tsdb

## CockroachDB

CockroachDB is a cloud-native SQL database for building global, scalable cloud services that survive disasters.

CockroachDB is a distributed SQL database built on a transactional and strongly-consistent key-value store. Itscales horizontally;survivesdisk, machine, rack, and even datacenter failures with minimal latency disruption and no manual intervention; supportsstrongly-consistentACID transactions; and provides a familiarSQLAPI for structuring, manipulating, and querying data.

https://github.com/cockroachdb/cockroach

## AresDB

A GPU-powered real-time analytics storage and query engine. It features low query latency, high data freshness and highly efficient in-memory and on disk storage management.

https://eng.uber.com/aresdb

https://github.com/uber/aresdb

## Riak

Riak is a distributed [NoSQL](https://en.wikipedia.org/wiki/NoSQL) key-value [data store](https://en.wikipedia.org/wiki/Data_store) that offers high availability, fault tolerance, operational simplicity, and scalability. In addition to the [open-source](https://en.wikipedia.org/wiki/Open-source_software) version, it comes in a supported enterprise version and a [cloud storage](https://en.wikipedia.org/wiki/Cloud_storage) version. Riak implements the principles from Amazon's [Dynamo](https://en.wikipedia.org/wiki/Dynamo_(storage_system)) paper  with heavy influence from the [CAP Theorem](https://en.wikipedia.org/wiki/CAP_Theorem). Written in [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)), Riak has fault tolerant data replication and automatic data distribution across the cluster for performance and resilience.

The Riak product line of distributed databases is built on a set of core services providing a highly reliable, scalable distributed systems framework.[RiakKV](https://riak.com/products/riak-kv/index.html) is a distributed NoSQL database.[RiakTS](https://riak.com/products/riak-ts/index.html) is builton the same core foundation as RiakKV and is highly optimized for IoT and time series data.Riak also integrates with [RiakS2](https://riak.com/products/riak-s2/index.html?p=6196.html) to optimize large object storage, and integrates with other data services including [Apache Spark](https://riak.com/products/apache-spark/index.html), [Redis Caching](https://riak.com/products/redis/index.html?p=6927.html), [Apache Solr](https://riak.com/products/solr/index.html), and [Apache Mesos](https://riak.com/products/apache-mesos/index.html?p=11511.html).

https://riak.com/products

https://en.wikipedia.org/wiki/Riak

## JanusGraph (Opensource distributed graph database)

JanusGraph is a highly scalable [graph database](https://en.wikipedia.org/wiki/Graph_database) optimized for storing and querying large graphs with billions of vertices and edges distributed across a multi-machine cluster. JanusGraph is a transactional database that can support thousands of concurrent users, complex traversals, and analytic graph queries.

https://github.com/janusgraph/janusgraph

[https://docs.janusgraph.org](https://docs.janusgraph.org/)

## ObjectBox

ObjectBox is a super fast database and sychronization solution, built uniquely for Mobile and IoT devices. We bring edge computing to small devices, allowing data to be stored and processed from sensor to server for reliable, fast and secure data management. ObjectBox is smaller than 1MB, so it is the ideal solution across hardware from Mobile Apps, to IoT Devices and IoT Gateways. We are the first high-performance NoSQL, ACID-compliant on-device edge database. All of our products are built with developers in mind, so they are easy to use and take minimal code to implement.

https://objectbox.io

## LF

LF (pronounced "aleph") is a fully decentralized fully replicated key/value store.
Fully decentralized means anyone can run a node without obtaining special permission and all nodes are effectively equal. Fully replicated means every node stores the entire data set.

LF is built on a [directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph) data model that makes synchronization easy and allows many different security and conflict resolution strategies to be used. One way to think of LF's DAG is as a gigantic [conflict-free replicated data type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)(CRDT).

Proof of work is used to rate limit writes to the shared data store on public networks and as one thing that can be taken into consideration for conflict resolution. Other things that can be considered (at the querying client's discretion) are local subjective heuristics at the node and certificates issued by a certificate authority.

https://github.com/zerotier/lf

## SQLite

- SQLite is a popular open source SQL database. It can store an entire database in a single file. One of the most significant advantages this provides is that all of the data can be stored locally without having to connect your database to a server.
- SQLite is a popular choice for databases in cellphones, PDAs, MP3 players, set-top boxes, and other electronic gadgets.

```bash
apt-get install sqlite3 libsqlite3-dev
cd /data
sqlite3 db.sqlite3
.help
.databases
.tables
.schema
.exit
PRAGMA table_info(table_name); # show all columns of a table

# Run this query to find the names of the tables in this database
SELECT name FROM sqlite_master where type = 'table';

# Run this query to find the structure of the `crime_scene_report` table
SELECT sql FROM sqlite_master where name = 'crons_cron';
SELECT sql_query FROM crons_cron;
SELECT cron_name FROM crons_cron  where sql_query like '%st_email_sms_exception_sources%';

SELECT cron_name, sql_query FROM crons_cron where sql_query like '%"goo.gl%';
SELECT cron_name, sql_query FROM crons_cron where sql_query like '%"goo.gl%' and cron_name = "credit_bldr_elig_not_assign_1";
UPDATE `crons_cron` SET `sql_query` =replace(sql_query, '"goo.gl', '"https://goo.gl') where cron_name = "credit_bldr_elig_not_assign_1";
UPDATE `crons_cron` SET `sql_query` =replace(sql_query, '"goo.gl', '"https://goo.gl');
```

### SQLite database

```python
db = sqlite3.connect(':memory:') # Using an in-memory database

cur = db.cursor()
cur.execute('''SELECT itemid, AVG(price) FROM BoughtItem GROUP BY itemid''')

print(cur.fetchall())
```

https://realpython.com/data-engineer-interview-questions-python

## Supersqllite

A feature-packed Python package and for utilizing SQLite in Python by [Plasticity](https://www.plasticity.ai/). It is intended to be a drop-in replacement to Python's built-in [SQLite API](https://docs.python.org/3/library/sqlite3.html), but without any limitations. It offers unique features like [remote streaming over HTTP](https://github.com/plasticityai/supersqlite#remote-streaming-over-http) and [bundling of extensions like JSON, R-Trees (geospatial indexing), and Full Text Search](https://github.com/plasticityai/supersqlite#extensions). SuperSQLite is also packaged with pre-compiled native binaries for SQLite and all of its extensions for nearly every platform as to avoid any C/C++ compiler errors during install.

https://github.com/plasticityai/supersqlite

## MilliDB

A full-text search database based on the fast LMDB key-value store

https://github.com/meilisearch/MeiliDB

https://www.meilisearch.com

## Lightning Memory-Mapped Database(LMDB)

LMDB is a [software library](https://en.wikipedia.org/wiki/Software_library) that provides a high-performance embedded transactional database in the form of a [key-value store](https://en.wikipedia.org/wiki/Key-value_store). LMDB is written in [C](https://en.wikipedia.org/wiki/C_(programming_language)) with [API bindings](https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database#API_and_uses) for several [programming languages](https://en.wikipedia.org/wiki/Programming_language). LMDB stores arbitrary key/data pairs as byte arrays, has a range-based search capability, supports multiple data items for a single key and has a special mode for appending records at the end of the database (MDB_APPEND) which gives a dramatic write performance increase over other similar stores.LMDB is not a [relational database](https://en.wikipedia.org/wiki/Relational_database), it is strictly a key-value store like [Berkeley DB](https://en.wikipedia.org/wiki/Berkeley_DB) and [dbm](https://en.wikipedia.org/wiki/DBM_(computing)).

LMDB may also be used [concurrently](https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database#Concurrency) in a multi-threaded or multi-processing environment, with read performance scaling linearly by design. LMDB databases may have only one writer at a time, however unlike many similar key-value databases, write transactions donotblock readers, nor do readers block writers. LMDB is also unusual in that multiple applications on the same system may simultaneously open and use the same LMDB store, as a means to scale up performance. Also, LMDB does not require a transaction log (thereby increasing write performance by not needing to write data twice) because it maintains data integrity inherently by design.

LMDB is a tiny database with some excellent properties:

- Ordered map interface (keys are always lexicographically sorted).
- Reader/writer transactions: readers don't block writers, writers don't block readers. Each environment supports one concurrent write transaction.
- Read transactions are extremely cheap.
- Environments may be opened by multiple processes on the same host, making it ideal for working around Python's [GIL](http://wiki.python.org/moin/GlobalInterpreterLock).
- Multiple named databases may be created with transactions covering all named databases.
- Memory mapped, allowing for zero copy lookup and iteration. This is optionally exposed to Python using the [buffer()](https://docs.python.org/2.7/library/functions.html#buffer) interface.
- Maintenance requires no external process or background threads.
- No application-level caching is required: LMDB fully exploits the operating system's buffer cache.

LMDB is a Btree-based database management library modeled loosely on the BerkeleyDB API, but much simplified. The entire database is exposed in a memory map, and all data fetches return data directly from the mapped memory, so no malloc's or memcpy's occur during data fetches. As such, the library is extremely simple because it requires no page caching layer of its own, and it is extremely high performance and memory-efficient. It is also fully transactional with full ACID semantics, and when the memory map is read-only, the database integrity cannot be corrupted by stray pointer writes from application code.

The library is fully thread-aware and supports concurrent read/write access from multiple processes and threads. Data pages use a copy-on- write strategy so no active data pages are ever overwritten, which also provides resistance to corruption and eliminates the need of any special recovery procedures after a system crash. Writes are fully serialized; only one write transaction may be active at a time, which guarantees that writers can never deadlock. The database structure is multi-versioned so readers run with no locks; writers cannot block readers, and readers don't block writers.

Unlike other well-known database mechanisms which use either write-ahead transaction logs or append-only data writes, LMDB requires no maintenance during operation. Both write-ahead loggers and append-only databases require periodic checkpointing and/or compaction of their log or database files otherwise they grow without bound. LMDB tracks free pages within the database and re-uses them for new write operations, so the database size does not grow without bound in normal use.
The memory map can be used as a read-only or read-write map. It is read-only by default as this provides total immunity to corruption. Using read-write mode offers much higher write performance, but adds the possibility for stray application writes thru pointers to silently corrupt the database. Of course if your application code is known to be bug-free (...) then this is not an issue.

https://en.wikipedia.org/wiki/Lightning_Memory-Mapped_Database

http://www.lmdb.tech/doc

## KsqlDB

The event streaming database purpose-built for stream processing applications.

https://ksqldb.io

https://www.confluent.io/blog/intro-to-ksqldb-sql-database-streaming

## Memcached

- Distributed cache and hold the data in-memory
- Memcached is simple, fast key-value storage
- Memcached functions like a large hash table and offers a simple API to store and retrieve arbitrarily shaped objects by key
- Can also be set up as a cluster so can provide availability and data application
- Can also flush data on the hard drive
- Memcached is a distributed system that allows its hash table capacity to scale horizontally across a pool of servers. Each Memcached server operates in complete isolation from the other servers in the pool. Therefore, the routing and load balancing between the servers must be done at the client level. Memcached clients apply a **consistent hashing** scheme to appropriately select the target servers. This scheme guarantees the following conditions:
    - The same server is always selected for the same key.
    - Memory usage is evenly balanced between the servers.
    - A minimum number of keys are relocated when the pool of servers is reduced or expanded.

## MinIO

MinIO is a high performance distributed object storage server, designed for large-scale private cloud infrastructure.

https://minio.io

[GitHub - minio/minio: High Performance Object Storage for AI](https://github.com/minio/minio)

- Others - GlusterFS

## Ehcache

Ehcache is an open source, standards-based cache that boosts performance, offloads your database, and simplifies scalability. It's the most widely-used Java-based cache because it's robust, proven, full-featured, and integrates with other popular libraries and frameworks. Ehcache scales from in-process caching, all the way to mixed in-process/out-of-process deployments with terabyte-sized caches.

https://www.ehcache.org

https://github.com/ehcache/ehcache3

## Realm

Realm is a mobile database: an alternative to SQLite & key-value stores

https://github.com/realm/realm-js

https://realm.io

## Datomic

A transactional database with a flexible data model, elastic scaling, and rich queries.

[Datomic](https://en.wikipedia.org/wiki/Datomic) is a distributed database designed to enable scalable, flexible and intelligent applications, running on new cloud architectures. It uses Datalog as the query language.

https://www.datomic.com

https://docs.datomic.com/on-prem/index.html

https://dbdb.io/db/datomic

[**https://www.datomic.com/cloud-faq.html**](https://www.datomic.com/cloud-faq.html)

## FoundationDB

FoundationDB is a distributed database designed to handle large volumes of structured data across clusters of commodity servers. It organizes data as an ordered key-value store and employs ACID transactions for all operations. It is especially well-suited for read/write workloads but also has excellent performance for write-intensive workloads. Users interact with the database using API language binding.

- **Multi-model data store.** FoundationDB is multi-model, meaning you can store many types data in a single database. All data is safely stored, distributed, and replicated in the Key-Value Store component.
- **Easily scalable and fault tolerant.** FoundationDB is easy to install, grow, and manage. It has a distributed architecture that gracefully scales out, and handles faults while acting like a single ACID database.
- **Industry-leading performance.** FoundationDB provides amazing performance on commodity hardware, allowing you to support very heavy loads at low cost.
- **Ready for production.** FoundationDB has been running in production for years and been hardened with lessons learned. Backing FoundationDB up is an unmatched testing system based on a deterministic simulation engine.
- **Open source.**

[GitHub - apple/foundationdb: FoundationDB - the open source, distributed, transactional key-value store](https://github.com/apple/foundationdb)

[FoundationDB | Home](https://www.foundationdb.org/)

## Others

- [GT.M - Wikipedia](https://en.wikipedia.org/wiki/GT.M) - GT.M is a high-throughput key–value database engine optimized for transaction processing. (It is a type also referred to as "schema-less", "schema-free", or "NoSQL".) GT.M is also an application development platform and a compiler for the ISO standard M language, also known as MUMPS.
