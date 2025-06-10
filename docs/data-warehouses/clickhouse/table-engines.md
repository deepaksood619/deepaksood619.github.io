# Table Engines

[Table Engines \ClickHouse Docs](https://clickhouse.com/docs/engines/table-engines

The table engine (type of table) determines:

- How and where data is stored, where to write it to, and where to read it from.
- Which queries are supported, and how.
- Concurrent data access.
- Use of indexes, if present.
- Whether multithread request execution is possible.
- Data replication parameters.

## Engine Families[​](https://clickhouse.com/docs/engines/table-engines#engine-families)

### MergeTree[​](https://clickhouse.com/docs/engines/table-engines#mergetree)

The most universal and functional table engines for high-load tasks. The property shared by these engines is quick data insertion with subsequent background data processing. `MergeTree` family engines support data replication (with [Replicated*](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication) versions of engines), partitioning, secondary data-skipping indexes, and other features not supported in other engines.

Engines in the family:

1. [MergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/mergetree)
2. [ReplacingMergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replacingmergetree)
3. [SummingMergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/summingmergetree)
4. [AggregatingMergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/aggregatingmergetree)
5. [CollapsingMergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/collapsingmergetree)
6. [VersionedCollapsingMergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/versionedcollapsingmergetree)
7. [GraphiteMergeTree](https://clickhouse.com/docs/engines/table-engines/mergetree-family/graphitemergetree)

### Log[​](https://clickhouse.com/docs/engines/table-engines#log)

Lightweight [engines](https://clickhouse.com/docs/engines/table-engines/log-family) with minimum functionality. They're the most effective when you need to quickly write many small tables (up to approximately 1 million rows) and read them later as a whole.

Engines in the family:

1. [TinyLog](https://clickhouse.com/docs/engines/table-engines/log-family/tinylog)
2. [StripeLog](https://clickhouse.com/docs/engines/table-engines/log-family/stripelog)
3. [Log](https://clickhouse.com/docs/engines/table-engines/log-family/log)

### Integration Engines[​](https://clickhouse.com/docs/engines/table-engines#integration-engines)

Engines for communicating with other data storage and processing systems.

Engines in the family:

1. [ODBC](https://clickhouse.com/docs/engines/table-engines/integrations/odbc)
2. [JDBC](https://clickhouse.com/docs/engines/table-engines/integrations/jdbc)
3. [MySQL](https://clickhouse.com/docs/engines/table-engines/integrations/mysql)
4. [MongoDB](https://clickhouse.com/docs/engines/table-engines/integrations/mongodb)
5. [Redis](https://clickhouse.com/docs/engines/table-engines/integrations/redis)
6. [HDFS](https://clickhouse.com/docs/engines/table-engines/integrations/hdfs)
7. [S3](https://clickhouse.com/docs/engines/table-engines/integrations/s3)
8. [Kafka](https://clickhouse.com/docs/engines/table-engines/integrations/kafka)
9. [EmbeddedRocksDB](https://clickhouse.com/docs/engines/table-engines/integrations/embedded-rocksdb)
10. [RabbitMQ](https://clickhouse.com/docs/engines/table-engines/integrations/rabbitmq)
11. [PostgreSQL](https://clickhouse.com/docs/engines/table-engines/integrations/postgresql)
12. [S3Queue](https://clickhouse.com/docs/engines/table-engines/integrations/s3queue)
13. [TimeSeries](https://clickhouse.com/docs/engines/table-engines/special/time_series)

### Special Engines[​](https://clickhouse.com/docs/engines/table-engines#special-engines)

Engines in the family:

1. [Distributed](https://clickhouse.com/docs/engines/table-engines/special/distributed)
2. [Dictionary](https://clickhouse.com/docs/engines/table-engines/special/dictionary)
3. [Merge](https://clickhouse.com/docs/engines/table-engines/special/merge)
4. [Executable](https://clickhouse.com/docs/engines/table-engines/special/executable)
5. [File](https://clickhouse.com/docs/engines/table-engines/special/file)
6. [Null](https://clickhouse.com/docs/engines/table-engines/special/null)
7. [Set](https://clickhouse.com/docs/engines/table-engines/special/set)
8. [Join](https://clickhouse.com/docs/engines/table-engines/special/join)
9. [URL](https://clickhouse.com/docs/engines/table-engines/special/url)
10. [View](https://clickhouse.com/docs/engines/table-engines/special/view)
11. [Memory](https://clickhouse.com/docs/engines/table-engines/special/memory)
12. [Buffer](https://clickhouse.com/docs/engines/table-engines/special/buffer)
13. [External Data](https://clickhouse.com/docs/engines/table-engines/special/external-data)
14. [GenerateRandom](https://clickhouse.com/docs/engines/table-engines/special/generate)
15. [KeeperMap](https://clickhouse.com/docs/engines/table-engines/special/keeper-map)
16. [FileLog](https://clickhouse.com/docs/engines/table-engines/special/filelog)
