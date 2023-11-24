# Comparisions

[Druid FAQs / Comparisions](databases/nosql-databases/druid/faqs.md)

[ClickBench — a Benchmark For Analytical DBMS](https://benchmark.clickhouse.com/)

### Clickhouse vs Snowflake

ClickHouse is designed for real-time data analytics and exploration at scale. Snowflake is a cloud data warehouse that is well-optimized for executing long-running reports and ad-hoc data analysis. When it comes to real-time analytics, ClickHouse shines with faster queries at a fraction of the cost.

- Cost: ClickHouse is cost-effective. ClickHouse Cloud is 3-5x more cost-effective than Snowflake.
- Performance: ClickHouse has faster queries. ClickHouse Cloud querying speeds are over 2x faster than Snowflake.
- Data compression: ClickHouse Cloud results in 38% better data compression than Snowflake.
- Architecture: ClickHouse uses Shared-Nothing Architecture by default, but also supports Shared-Disk Architecture.
- Querying: ClickHouse uses SQL for querying, with support for SQL joins.
- Integration: ClickHouse integrates with some common tools for visual analytics, including Superset, Grafana and Tableau.

#### Links

- [ClickHouse vs Snowflake](https://clickhouse.com/comparison/snowflake)
- [Compare ClickHouse vs Snowflake](https://www.influxdata.com/comparison/clickhouse-vs-snowflake/)
- [In-depth: ClickHouse vs Snowflake - PostHog](https://posthog.com/blog/clickhouse-vs-snowflake)
- [Snowflake vs Clickhouse (2023) | Firebolt](https://www.firebolt.io/comparison/snowflake-vs-clickhouse)
- [ClickHouse vs Snowflake for Real-Time Analytics - Comparing and Migrating](https://clickhouse.com/blog/clickhouse-vs-snowflake-for-real-time-analytics-comparison-migration-guide)

## Others

### [Compare real-time analytics databases in 2023: Rockset, Apache Druid, ClickHouse, Pinot | Rockset](https://rockset.com/blog/comparing-rockset-apache-druid-clickhouse-real-time-analytics/)

Rockset beat both ClickHouse and Druid query performance on the Star Schema Benchmark. Rockset is 1.67 times faster than ClickHouse with the same hardware configuration. And 1.12 times faster than Druid, even though Druid used 12.5% more compute.

### [Comparison of the Open Source OLAP Systems for Big Data: ClickHouse, Druid, and Pinot | by Roman Leventov | Medium](https://leventov.medium.com/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7)

ClickHouse, Druid and Pinot have fundamentally similar architecture, and their own niche between general-purpose Big Data processing frameworks such as Impala, Presto, Spark, and columnar databases with proper support for unique primary keys, point updates and deletes, such as InfluxDB.

Among those three systems, ClickHouse stands a little apart from Druid and Pinot, while the latter two are almost identical, they are pretty much two independently developed implementations of exactly the same system.

ClickHouse more resembles “traditional” databases like PostgreSQL. A single-node installation of ClickHouse is possible. On small scale (less than 1 TB of memory, less than 100 CPU cores) ClickHouse is much more interesting than Druid or Pinot, if you still want to compare with them, because ClickHouse is simpler and has less moving parts and services. I would say that it competes with InfluxDB or Prometheus on this scale, rather than with Druid or Pinot.

Druid and Pinot more resemble other Big Data systems in the Hadoop ecosystem. They retain “self-driving” properties even on very large scale (more than 500 nodes), while ClickHouse requires a lot of attention of professional SREs. Also, Druid and Pinot are in the better position to optimize for infrastructure costs of large clusters, and better suited for the cloud environments, than ClickHouse.

The only sustainable difference between Druid and Pinot is that Pinot depends on Helix framework and going to continue to depend on ZooKeeper, while Druid could move away from the dependency on ZooKeeper. On the other hand, Druid installations are going to continue to depend on the presence of some SQL database.

Currently Pinot is optimized better than Druid.
