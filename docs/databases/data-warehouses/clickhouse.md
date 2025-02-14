# ClickHouse

ClickHouse is an open source column-oriented database management system capable of realtime generation of analytical data reports using SQL queries.

### Key Features

- True column-oriented storage
- Vectorized query execution
- Data compression
- Parallel and distributed query execution
- Real time query processing
- Real time data ingestion
- On-disk locality of reference
- Cross-datacenter replication
- High availability
- SQL support
- Local and distributed joins
- Pluggable external dimension tables
- Arrays and nested data types
- Approximate query processing
- Probabilistic data structures
- Full support of IPv6
- Features for web analytics
- State-of-the-art algorithms
- Detailed documentation - Clean documented code

#### History

ClickHouse is developed by a Russian company called Yandex. It is designed for multiple projects within Yandex. Yandex needed a DBMS to analyze large amounts of data, thus they began to develop their own column-oriented DBMS. The prototype of ClickHouse appeared in 2009 and it was released to open-source in 2016.

#### Compression

[Dictionary Encoding](https://dbdb.io/browse?compression=dictionary-encoding) [Delta Encoding](https://dbdb.io/browse?compression=delta-encoding) [Naïve (Page-Level)](https://dbdb.io/browse?compression=naive-page-level)

In addition to general-purpose encoding with LZ4 (default) or Zstd, ClickHouse supports dictionary encoding via LowCardinality data type, as well as delta, double-delta and Gorilla encodings via column codecs.

#### Concurrency Control

[Not Supported](https://dbdb.io/browse?concurrency-control=not-supported)

ClickHouse does not support multi-statement transactions.

#### Data Model

[Relational](https://dbdb.io/browse?data-model=relational)

ClickHouse uses the relational database model.

#### Foreign Keys

[Not Supported](https://dbdb.io/browse?foreign-keys=not-supported)

ClickHouse does not support foreign keys.

#### Indexes

[Log-Structured Merge Tree](https://dbdb.io/browse?indexes=log-structured-merge-tree)

ClickHouse supports primary key indexes. The indexing mechanism is called a sparse index. In the MergeTree, data are sorted by primary key lexicographically in each part. Then ClickHouse selects some marks for every Nth row, where N is chosen adaptively by default. Together these marks serve as a sparse index, which allows efficient range queries.

#### Joins

[Hash Join](https://dbdb.io/browse?joins=hash-join)

ClickHouse uses hash join by default, which is done by placing the right part of data in a hash table in memory. If there's not enough memory for hash join it falls back to merge join.

#### Logging

[Physical Logging](https://dbdb.io/browse?logging=physical-logging)

ClickHouse replicates its data on multiple nodes and monitors data synchronicity on replicas. It recovers after failures by syncing data from other replica nodes.

#### Parallel Execution

[Intra-Operator (Horizontal)](https://dbdb.io/browse?parallel-execution=intra-operator) [Inter-Operator (Vertical)](https://dbdb.io/browse?parallel-execution=inter-operator)

ClickHouse utilizes half cores for single-node queries and one replica of each shard for distributed queries by default. It could be tuned to utilize only one core, all cores of the whole cluster or anything in between.

#### Query Compilation

[Code Generation](https://dbdb.io/browse?query-compilation=code-generation)

ClickHouse supports runtime code generation. The code is generated for every kind of query on the fly, removing all indirection and dynamic dispatch. Runtime code generation can be better when it fuses many operations together and fully utilizes CPU execution units.

#### Query Execution

[Vectorized Model](https://dbdb.io/browse?query-execution=vectorized-model)

#### Query Interface

[Custom API](https://dbdb.io/browse?query-interface=custom-api) [SQL](https://dbdb.io/browse?query-interface=sql) [HTTP / REST](https://dbdb.io/browse?query-interface=http-rest) [Command-line / Shell](https://dbdb.io/browse?query-interface=command-line-shell)

ClickHouses provides two types of parsers: a full SQL parser and a data format parser. It uses SQL parser for all types of queries and the data format parser only for INSERT queries. Beyond the query language, it provides multiple user interfaces, including HTTP interface, JDBC driver, TCP interface, command-line client, etc.

#### Storage Architecture

[Disk-oriented](https://dbdb.io/browse?storage-architecture=disk-oriented) [In-Memory](https://dbdb.io/browse?storage-architecture=in-memory) [Hybrid](https://dbdb.io/browse?storage-architecture=hybrid)

ClickHouse has multiple types of table engines. The type of the table engine determines where the data is stored, concurrent level, whether indexes are supported and some other properties. Key table engine family for production use is a [MergeTree](https://clickhouse.tech/docs/en/engines/table_engines/mergetree_family/mergetree/) that allows for resilient storage of large volumes of data and supports replication. There's also a [Log family](https://clickhouse.tech/docs/en/engines/table_engines/log_family/log_family/) for lightweight storage of temporary data and [Distributed engine](https://clickhouse.tech/docs/en/engines/table_engines/special/distributed/) for querying a cluster.

#### Storage Model

[Decomposition Storage Model (Columnar)](https://dbdb.io/browse?storage-model=decomposition-storage-model-columnar)

ClickHouse is a column-oriented DBMS and it stores data by columns.

#### Storage Organization

[Indexed Sequential Access Method (ISAM)](https://dbdb.io/browse?storage-organization=indexed-sequential-access-method-isam) [Sorted Files](https://dbdb.io/browse?storage-organization=sorted-files)

#### Stored Procedures

[Not Supported](https://dbdb.io/browse?stored-procedures=not-supported)

Currently, stored procedures and UDF are listed as open issues in ClickHouse.

#### System Architecture

[Shared-Nothing](https://dbdb.io/browse?system-architecture=shared-nothing)

ClickHouse system in a distributed setup is a cluster of shards. It uses asynchronous multimaster replication and there is no single point of contention across the system.

#### Views

[Virtual Views](https://dbdb.io/browse?views=virtual-views) [Materialized Views](https://dbdb.io/browse?views=materialized-views)

ClickHouse supports both virtual views and materialized views. The materialized views store data transformed by corresponding SELECT query. The SELECT query can contain DISTINCT, GROUP BY, ORDER BY, LIMIT, etc.

## Internals

[Modern SQL in 2023 - ClickHouse - YouTube](https://www.youtube.com/watch?v=zhrOYQpgvkk)

["Building for Fast" by Alexey Milovidov, Amsterdam, June 2022 - YouTube](https://www.youtube.com/watch?v=CAS2otEoerM&ab_channel=ClickHouse)

[Why is ClickHouse so fast? | ClickHouse Docs](https://clickhouse.com/docs/en/concepts/why-clickhouse-is-so-fast)

## Commands

```bash
docker pull clickhouse/clickhouse-server

docker run -d -p 8123:8123 -p 9000:9000 --network=test-net --name some-clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server

docker run -d --name some-clickhouse-server -p 8123:8123 -p 9000:9000 --network=test-net -e CLICKHOUSE_DB=my_database -e CLICKHOUSE_USER=username -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 -e CLICKHOUSE_PASSWORD=password --ulimit nofile=262144:262144 clickhouse/clickhouse-server

# https://hub.docker.com/r/clickhouse/clickhouse-server/

echo 'SELECT version()' | curl 'http://localhost:8123/' --data-binary @-
```

[Visual Interfaces from Third-party Developers | ClickHouse Docs](https://clickhouse.com/docs/en/interfaces/third-party/gui)

[GitHub - ClickHouse/metabase-clickhouse-driver: ClickHouse database driver for the Metabase business intelligence front-end](https://github.com/ClickHouse/metabase-clickhouse-driver)

```sql
-- https://clickhouse.com/docs/en/getting-started/quick-start

clickhouse client

CREATE TABLE my_first_table
(
    user_id UInt32,
    message String,
    timestamp DateTime,
    metric Float32
)
ENGINE = MergeTree
PRIMARY KEY (user_id, timestamp)

INSERT INTO my_first_table (user_id, message, timestamp, metric) VALUES
    (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),
    (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),
    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),
    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 )

 SELECT *
 FROM my_first_table
 ORDER BY timestamp

SELECT
   passenger_count,
   avg(toFloat32(total_amount))
FROM s3(
    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_0.gz',
    'TabSeparatedWithNames'
)
GROUP BY passenger_count
ORDER BY passenger_count;
```

[New York Taxi Data | ClickHouse Docs](https://clickhouse.com/docs/en/getting-started/example-datasets/nyc-taxi)

## Links

- [Fast Open-Source OLAP DBMS - ClickHouse](https://clickhouse.com/)
- [GitHub - ClickHouse/ClickHouse: ClickHouse is a free analytics DBMS for big data](https://github.com/ClickHouse/ClickHouse)
- [ClickHouse - YouTube](https://www.youtube.com/c/ClickHouseDB)
- [What Is ClickHouse? | ClickHouse Docs](https://clickhouse.com/docs/en/intro)
- [Getting Started with ClickHouse](https://clickhouse.com/company/events/getting-started-with-clickhouse?loc=getting-started)
- Used by - Zerodha, Cloudflare, Uber, Ebay (moved from postgres, elk, druid to clickhouse)
- [Learn ClickHouse with Mark - YouTube](https://www.youtube.com/playlist?list=PL0Z2YDlm0b3gcY5R_MUo4fT5bPqUQ66ep)
- [ClickHouse Academy - "How to" Sessions - YouTube](https://www.youtube.com/playlist?list=PL0Z2YDlm0b3gtIdcZI3B_8bMJclDOvY8s)
- [ClickHouse and The One Trillion Row Challenge](https://clickhouse.com/blog/clickhouse-1-trillion-row-challenge)
- [DataOps Barcelona 2018 - Clickhouse Use Cases - YouTube](https://www.youtube.com/watch?v=P7O6HRbFkL8&ab_channel=binlogic)
- [YouTube](https://www.youtube.com/watch?v=fGG9dApIhDU&ab_channel=CMUDatabaseGroup)
- [The Secrets of ClickHouse Performance Optimizations at BDTC 2019 - YouTube](https://www.youtube.com/watch?v=ZOZQCQEtrz8&ab_channel=ClickHouse)
- [Didi Migrates from Elasticsearch to ClickHouse for a new Generation Log Storage System](https://clickhouse.com/blog/didi-migrates-from-elasticsearch-to-clickHouse-for-a-new-generation-log-storage-system)
- [Building a Robust Data Pipeline with Kafka and ClickHouse | The Write Ahead Log](https://platformatory.io/blog/Building-a-Robust-Data-Pipeline-with-Kafka-and-ClickHouse/)
- [First ClickHouse research paper: How do you make a modern data analytics database lightning-fast?](https://clickhouse.com/blog/first-clickhouse-research-paper-vldb-lightning-fast-analytics-for-everyone)
- [Effortlessly Deploying ClickHouse on Kubernetes: A Comprehensive Guide \| by Utkarsh Umang \| Medium](https://medium.com/@luciferutkarsh/effortlessly-deploying-clickhouse-on-kubernetes-a-comprehensive-guide-b54dbd6cdf22)
