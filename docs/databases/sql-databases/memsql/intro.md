# Intro

MemSQL is a distributed in-memory relational database designed for both transactional and analytical workloads.

## History

MemSQL was a Y-combinator graduate start-up founded in 2011.

## Checkpoints

[Non-Blocking](https://dbdb.io/browse?checkpoints=non-blocking)[Consistent](https://dbdb.io/browse?checkpoints=consistent)
MemSQL uses multi-version concurrency control and it's natural to create a consistent(non-fuzzy) snapshot without the need to block ongoing transactions.

## Concurrency Control

[Multi-version Concurrency Control (MVCC)](https://dbdb.io/browse?concurrency-control=multi-version-concurrency-control-mvcc)
MemSQL uses multi-version concurrency control. Reads are not blocked, writes acquire row-level locks.

## Data Model

[Relational](https://dbdb.io/browse?data-model=relational)[Key/Value](https://dbdb.io/browse?data-model=keyvalue)
MemSQL is a distributed relational database. It also supports two-column key/value store.

## Indexes

[Skip List](https://dbdb.io/browse?indexes=skip-list)[Hash Table](https://dbdb.io/browse?indexes=hash-table)
Skip list is the default index type in MemSQL. Skip list is lock free and thus leads extremely fast insert performance, and O(lg(n)) expected lookup/insert/delete performance. Unlike B+ tree, skip list is singly linked, thus reserve scan leads to twice as costly as forward scan. Skip list involves more pointer chasing than B+ tree which could potentially lead to more cache misses. In MemSQL, heuristics are applied to organize nearby nodes on the same physical page to mitigate penalties caused by pointer chasing. Lock-free hash table is also supported in MemSQL to perform fast exact-match queries.

## Isolation Levels

[Read Committed](https://dbdb.io/browse?isolation-levels=read-committed)
MemSQL supports read committed isolation level.

## Joins

[Nested Loop Join](https://dbdb.io/browse?joins=nested-loop-join)[Hash Join](https://dbdb.io/browse?joins=hash-join)[Sort-Merge Join](https://dbdb.io/browse?joins=sort-merge-join)[Broadcast Join](https://dbdb.io/browse?joins=broadcast-join)
Nested loop join, index-nested loop join, merge join and hash join are supported in MemSQL. Joins between two Columnstore tables are often executed as sort merge join. For distributed join queries, if two tables are joined with identical shard key, the join will be performed locally; otherwise dataset is broadcast to other nodes via the network.

## Logging

[Physical Logging](https://dbdb.io/browse?logging=physical-logging)
MemSQL implements write-ahead-logging which records only committed transactions. It uses a transaction buffer pool as back-pressure mechanism so that a worker thread doesn't generate indefinite amount of logs. Replication is implemented based on log recovery.

## Query Compilation

[Code Generation](https://dbdb.io/browse?query-compilation=code-generation)[JIT Compilation](https://dbdb.io/browse?query-compilation=jit-compilation)
Instead of the traditional interpreter based execution model, MemSQL 5 comes with a new code generation architecture, which compiles a SQL query to LLVM to machine code. When the MemSQL server encounters a SQL query, it parses SQL into AST and extracts parameters from the query, which is then transformed into a MemSQL-specific intermediate representation inMemSQL Plan Language(MPL). MemSQL then flattens MPL AST into a more compact format asMemSQL Bytecode(MBC). Plans in MBC format is then transformed into LLVM Bitcode, which LLVM uses to generate machine code. Such code generation architecture enables many low-level optimizations and avoids much less unnecessary work compared to interpreter-based execution. Compiled plans are also cached on disk for future use.

## Query Execution

[Tuple-at-a-Time Model](https://dbdb.io/browse?query-execution=tuple-at-a-time-model)[Vectorized Model](https://dbdb.io/browse?query-execution=vectorized-model)
MemSQL uses Tuple-at-a-Time Model for rowstore query execution, uses Vectorized Model for columnstore.

## Query Interface

[SQL](https://dbdb.io/browse?query-interface=sql)
MemSQL supports a subset of MySQL syntax, plus extensions for distributed SQL, geospatial and JSON queries. MySQL wire protocol is supported.

## Storage Architecture

[Disk-oriented](https://dbdb.io/browse?storage-architecture=disk-oriented)[In-Memory](https://dbdb.io/browse?storage-architecture=in-memory)
In MemSQL, rowstore is completely in-memory and columnstore is disk-backed.

## Storage Model

[Decomposition Storage Model (Columnar)](https://dbdb.io/browse?storage-model=decomposition-storage-model-columnar)[N-ary Storage Model (Row/Record)](https://dbdb.io/browse?storage-model=n-ary-storage-model-rowrecord)
In MemSQL, row segments in rowstore are stored in N-ary storage model in-memory. Column segments in columnstore are stored in decomposition storage model. Clustered columnar indexes are created for columnstore and compression is applied.

## Stored Procedures

[Not Supported](https://dbdb.io/browse?stored-procedures=not-supported)
Stored procedure is not supported.

## System Architecture

[Shared-Nothing](https://dbdb.io/browse?system-architecture=shared-nothing)
MemSQL has a two-tier, clustered architecture. The nodes in upper tier areaggregators, which are cluster-aware query routers. One special node calledMaster Aggregatoris responsible for clustering monitoring. The nodes in lower tier areleaves, which store and process partitioned shards. The aggregator sends extended SQL to leaves to perform distributed query execution.

## Views

[Virtual Views](https://dbdb.io/browse?views=virtual-views)
Views in MemSQL is not materialzed and cannot be written into.
<https://dbdb.io/db/memsql>
