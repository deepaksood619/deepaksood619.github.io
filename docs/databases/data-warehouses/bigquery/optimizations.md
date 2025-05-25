# Optimizations

## Config Optimizations

### Job Priority

Option to assign adhoc queries that we run on bq studio to low priority tasks: we can override the job priority to 'batch' from 'interactive'

**Job Priority: Batch**

When you set the **Job Priority** to **Batch** and check the **Override** box:

1. **Batch Priority Enabled**: All queries you run from the BigQuery Web UI (BQ Studio) under your account will execute as **Batch** jobs by default.
2. **Impact**:
    - Batch jobs will **wait for idle slots** instead of competing for immediate slot allocation, meaning lower priority.
    - This is ideal for workloads that can tolerate delays, such as **ad-hoc queries** or **low-priority reporting tasks**.
3. **Scope**: This setting applies to queries you run directly from your account. Other users will not be affected unless they also enable this override.

## BigQuery BI Engine

BigQuery BI Engine is a fast, in-memory analysis service that accelerates many SQL queries in BigQuery by intelligently caching the data you use most frequently. BI Engine can accelerate SQL queries from any source, including those written by data visualization tools, and can manage cached tables for ongoing optimization. This lets you improve query performance without manual tuning or data tiering. You can [cluster](https://cloud.google.com/bigquery/docs/clustered-tables) and [partition](https://cloud.google.com/bigquery/docs/partitioned-tables) tables to further optimize BI Engine performance for large tables.

For example, if your dashboard only displays the last quarter's data, then consider partitioning your tables by time so only the latest partitions are loaded into memory. You can also combine the benefits of [materialized views](https://cloud.google.com/bigquery/docs/materialized-views-intro) and BI Engine. This works particularly well when the materialized views are used to join and flatten data to optimize their structure for BI Engine.

BI Engine provides the following advantages:

1. **BigQuery API:** BI Engine directly integrates with the BigQuery API. Any BI solution or custom application that works with the BigQuery API through standard mechanisms such as [REST](https://cloud.google.com/bigquery/docs/reference/rest) or [JDBC and ODBC drivers](https://cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers) can use BI Engine without modification.
2. **Vectorized runtime:** With the BI Engine, BigQuery uses a modern technique called _vectorized processing_. Using vectorized processing in an execution engine makes more efficient use of modern CPU architecture, by operating on batches of data at a time. BI Engine also uses advanced data encodings, specifically, dictionary and run-length encoding, to further compress the data that's stored in the in-memory layer.
3. **Seamless integration:** BI Engine works with BigQuery features and metadata, including authorized views, column and row level security, and data masking.
4. **Reservations:** BI Engine reservations manage memory allocation at the project location level. BI Engine caches specific columns or partitions that are queried, prioritizing those in tables marked as preferred.

- [Introduction to BI Engine  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/bi-engine-intro)
- [What is BI Engine?  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/bi-engine-query)
- [BigQuery BI Engine: Powering Fast & Fresh Dashboards for All BI Tools - YouTube](https://www.youtube.com/watch?v=tthMvgGYo9E&ab_channel=GoogleCloudEvents)
- [Always fast and fresh dashboards: Inside BigQuery BI Engine - YouTube](https://www.youtube.com/watch?v=kifUXfwqzVo&ab_channel=GoogleCloudTech)
