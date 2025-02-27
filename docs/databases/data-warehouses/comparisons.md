# Comparisons

[Druid FAQs / Comparisons](databases/nosql-databases/druid/faqs.md)

[ClickBench - a Benchmark For Analytical DBMS](https://benchmark.clickhouse.com/)

## ClickHouse vs Snowflake

ClickHouse is designed for real-time data analytics and exploration at scale. Snowflake is a cloud data warehouse that is well-optimized for executing long-running reports and ad-hoc data analysis. When it comes to real-time analytics, ClickHouse shines with faster queries at a fraction of the cost.

- **Cost:** ClickHouse is cost-effective. ClickHouse Cloud is 3-5x more cost-effective than Snowflake.
- **Performance:** ClickHouse has faster queries. ClickHouse Cloud querying speeds are over 2x faster than Snowflake.
- **Data compression:** ClickHouse Cloud results in 38% better data compression than Snowflake.
- **Architecture:** ClickHouse uses Shared-Nothing Architecture by default, but also supports Shared-Disk Architecture.
- **Querying:** ClickHouse uses SQL for querying, with support for SQL joins.
- **Integration:** ClickHouse integrates with some common tools for visual analytics, including Superset, Grafana and Tableau.

### Links

- [ClickHouse vs Snowflake](https://clickhouse.com/comparison/snowflake)
- [Compare ClickHouse vs Snowflake](https://www.influxdata.com/comparison/clickhouse-vs-snowflake/)
- [In-depth: ClickHouse vs Snowflake - PostHog](https://posthog.com/blog/clickhouse-vs-snowflake)
- [Snowflake vs Clickhouse (2023) | Firebolt](https://www.firebolt.io/comparison/snowflake-vs-clickhouse)
- [ClickHouse vs Snowflake for Real-Time Analytics - Comparing and Migrating](https://clickhouse.com/blog/clickhouse-vs-snowflake-for-real-time-analytics-comparison-migration-guide)

## Snowflake vs Databricks

### Snowflake Pros

- **Scalable storage and compute** - Snowflake can scale storage and compute independently to handle any workload.
- **Performance** - Snowflake offers fast query processing and ability to run multiple concurrent workloads. It also has built-in caching and micro-partitioning for better performance.
- **Security** - Snowflake provides robust security with encryption, network policies, access controls, and regulatory compliance.
- **Full Availability** - Data is stored redundantly across multiple cloud providers and availability zones. Snowflake also offers features like [Time Travel](https://www.chaosgenius.io/blog/snowflake-time-travel/) and [Fail-safe](https://www.chaosgenius.io/blog/snowflake-storage-costs/#how-do-snowflake-storage-costs-work) for data recovery.
- **Flexible pricing** - Pay only for storage and compute used per second. Auto-scaling and auto-suspend features further optimize costs.
- **Ease of use** - Snowflake uses standard SQL and has an intuitive UI. Easy to set up and use even for non-technical users.
- **Robust Ecosystem** - Broad set of tools, drivers, and partners integrate natively with Snowflake.

### Snowflake Cons

- **Cost** - Can be more expensive than alternatives like Redshift for some workloads. Costs can add up quickly if usage isn't monitored and optimized.
- **Limited community** - Smaller user community compared to competitors. Less third-party support available.
- **Data streaming** - Snowflake's data streaming capabilities via Snowpipe and Stream are still maturing. Additional ETL tools are often required.
- **Unstructured data**  Mainly optimized for semi-structured and structured data. Limited support for unstructured data workloads.
- **On-premises support** - Snowflake has traditionally been cloud-only. On-prem support is still new and limited.
- **Vendor lock-in** - Not as multi-cloud as claimed. Significant benefits from tight integration with major cloud vendors.

### Databricks Pros

- **Unified analytics platform** - Databricks provides a unified platform for data engineering, data science, and machine learning workflows on an open data lake house architecture.
- **Broad technology integrations** - It natively integrates open source technologies like Apache Spark, Delta Lake, MLflow, and Koalas, avoiding vendor lock-in.
- **Auto-scaling compute** - Databricks auto-scales cluster resources optimized for big data workloads, saving on costs.
- **Security capabilities** - It offers enterprise-grade security with access controls, encryption, VPC endpoints, auditing trails, and more!!!
- **Collaboration features** - Databricks enables collaboration through shared notebooks, dashboards, ML models, and data via Delta Sharing.
- **ML lifecycle management** - End-to-end ML lifecycle managed via Model Registry, Feature Store, Hyperparameter Tuning, and MLflow.
- **Open data sharing** - Delta Sharing protocol allows open data exchange across organizations.
- **Extensive documentation** - Detailed documentation and an active community for support.

### Databricks Cons

- **Steep learning curve** - Especially for non-programmers given the complexity in setup and cluster management.
- **Scala-first development** - Primary language Scala has a smaller talent pool than Python/R.
- **Expensive pricing** - Can get expensive at scale if resource usage isn't optimized and monitored closely.
- **Small open source community** - Not as large as Apache Spark and other open source projects.
- **Limited no-code support** - Drag-and-drop interfaces are limited compared to dedicated BI/analytics platforms.
- **Data ingestion gaps** - Data ingestion and streaming capabilities aren't as comprehensive as specialized tools.
- **Inconsistent multi-cloud support** - Some capabilities like Delta Sharing and MLflow don't work across all clouds uniformly.

### Conclusion

Snowflake’s strength lies in its cloud-native architecture, instant elasticity, and excellent price-performance for analytics workloads. Databricks provides greater depth and flexibility for data engineering, data science, and machine learning use cases.

Snowflake is the easier plug-and-play cloud data warehouse while Databricks enables custom big data processing. For a unified analytics platform with end-to-end ML capabilities, Databricks is the better choice. Otherwise, Snowflake hits the sweet spot for cloud BI, data analytics, and reporting.

Choosing between Snowflake and Databricks is like deciding between a swiss army knife and a full toolkit. The swiss army knife (Snowflake) neatly packages up the most commonly used tools into one simple package. It's easy to use and great for basic tasks. The full toolkit (Databricks) provides deeper capabilities for those who need to handle heavy-duty data jobs. So consider whether you need simple data analysis or extensive data engineering and machine learning. This will lead you to determine the right platform to fulfill your needs.

[Snowflake vs Databricks: 5 Key Features Compared](https://www.chaosgenius.io/blog/snowflake-vs-databricks/)

[Databricks vs. Snowflake | Databricks](https://www.databricks.com/databricks-vs-snowflake)

[ChatGPT - Databricks as Data Warehouse](https://chatgpt.com/share/675b1a8a-31e4-8005-b280-c1cd135f704d)

## Others

### [Compare real-time analytics databases in 2023: Rockset, Apache Druid, ClickHouse, Pinot | Rockset](https://rockset.com/blog/comparing-rockset-apache-druid-clickhouse-real-time-analytics/)

Rockset beat both ClickHouse and Druid query performance on the Star Schema Benchmark. Rockset is 1.67 times faster than ClickHouse with the same hardware configuration. And 1.12 times faster than Druid, even though Druid used 12.5% more compute.

### [Comparison of the Open Source OLAP Systems for Big Data: ClickHouse, Druid, and Pinot | by Roman Leventov | Medium](https://leventov.medium.com/comparison-of-the-open-source-olap-systems-for-big-data-clickhouse-druid-and-pinot-8e042a5ed1c7)

ClickHouse, Druid and Pinot have fundamentally similar architecture, and their own niche between general-purpose Big Data processing frameworks such as Impala, Presto, Spark, and columnar databases with proper support for unique primary keys, point updates and deletes, such as InfluxDB.

Among those three systems, ClickHouse stands a little apart from Druid and Pinot, while the latter two are almost identical, they are pretty much two independently developed implementations of exactly the same system.

ClickHouse more resembles "traditional" databases like PostgreSQL. A single-node installation of ClickHouse is possible. On small scale (less than 1 TB of memory, less than 100 CPU cores) ClickHouse is much more interesting than Druid or Pinot, if you still want to compare with them, because ClickHouse is simpler and has less moving parts and services. I would say that it competes with InfluxDB or Prometheus on this scale, rather than with Druid or Pinot.

Druid and Pinot more resemble other Big Data systems in the Hadoop ecosystem. They retain "self-driving" properties even on very large scale (more than 500 nodes), while ClickHouse requires a lot of attention of professional SREs. Also, Druid and Pinot are in the better position to optimize for infrastructure costs of large clusters, and better suited for the cloud environments, than ClickHouse.

The only sustainable difference between Druid and Pinot is that Pinot depends on Helix framework and going to continue to depend on ZooKeeper, while Druid could move away from the dependency on ZooKeeper. On the other hand, Druid installations are going to continue to depend on the presence of some SQL database.

Currently Pinot is optimized better than Druid.
