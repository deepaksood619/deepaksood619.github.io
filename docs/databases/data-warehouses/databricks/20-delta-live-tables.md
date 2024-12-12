# Delta Live Tables

Delta Live Tables is a declarative framework for building reliable, maintainable, and testable data processing pipelines. You define the transformations to perform on your data and Delta Live Tables manages task orchestration, cluster management, monitoring, data quality, and error handling.

Instead of defining your data pipelines using a series of separate Apache Spark tasks, you define streaming tables and materialized views that the system should create and keep up to date. Delta Live Tables manages how your data is transformed based on queries you define for each processing step. You can also enforce data quality with Delta Live Tables _expectations_, which allow you to define expected data quality and specify how to handle records that fail those expectations.

## What are Delta Live Tables datasets?

Delta Live Tables datasets are the streaming tables, materialized views, and views maintained as the results of declarative queries. The following table describes how each dataset is processed:

| Dataset type | How are records processed through defined queries? |
|---|---|
| Streaming table | Each record is processed exactly once. This assumes an append-only source. |
| Materialized views | Records are processed as required to return accurate results for the current data state. Materialized views should be used for data sources with updates, deletions, or aggregations, and for change data capture processing (CDC). |
| Views | Records are processed each time the view is queried. Use views for intermediate transformations and data quality checks that should not be published to public datasets. |

### Streaming table

A _streaming table_ is a Delta table with extra support for streaming or incremental data processing. Streaming tables allow you to process a growing dataset, handling each row only once. Because most datasets grow continuously over time, streaming tables are good for most ingestion workloads. Streaming tables are optimal for pipelines that require data freshness and low latency. Streaming tables can also be useful for massive scale transformations, as results can be incrementally calculated as new data arrives, keeping results up to date without needing to fully recompute all source data with each update. Streaming tables are designed for data sources that are append-only.

### Materialized view

A _materialized view_ (or _live table_) is a view where the results have been precomputed. Materialized views are refreshed according to the update schedule of the pipeline in which they’re contained. Materialized views are powerful because they can handle any changes in the input. Each time the pipeline updates, query results are recalculated to reflect changes in upstream datasets that might have occurred because of compliance, corrections, aggregations, or general CDC. Delta Live Tables implements materialized views as Delta tables, but abstracts away complexities associated with efficient application of updates, allowing users to focus on writing queries.

### Views

All _views_ in Databricks compute results from source datasets as they are queried, leveraging caching optimizations when available. Delta Live Tables does not publish views to the catalog, so views can be referenced only within the pipeline in which they are defined. Views are useful as intermediate queries that should not be exposed to end users or systems. Databricks recommends using views to enforce data quality constraints or transform and enrich datasets that drive multiple downstream queries.

## What is a Delta Live Tables pipeline?

A _pipeline_ is the main unit used to configure and run data processing workflows with Delta Live Tables.

A pipeline contains materialized views and streaming tables declared in Python or SQL source files. Delta Live Tables infers the dependencies between these tables, ensuring updates occur in the right order. For each dataset, Delta Live Tables compares the current state with the desired state and proceeds to create or update datasets using efficient processing methods.

## When to use views, materialized views, and streaming tables

To ensure your pipelines are efficient and maintainable, choose the best dataset type when you implement your pipeline queries.

#### Consider using a view when

- You have a large or complex query that you want to break into easier-to-manage queries.
- You want to validate intermediate results using expectations.
- You want to reduce storage and compute costs and do not require the materialization of query results. Because tables are materialized, they require additional computation and storage resources.

#### Consider using a materialized view when

- Multiple downstream queries consume the table. Because views are computed on demand, the view is re-computed every time the view is queried.
- The table is consumed by other pipelines, jobs, or queries. Because views are not materialized, you can only use them in the same pipeline.
- You want to view the results of a query during development. Because tables are materialized and can be viewed and queried outside of the pipeline, using tables during development can help validate the correctness of computations. After validating, convert queries that do not require materialization into views.

#### Consider using a streaming table when

- A query is defined against a data source that is continuously or incrementally growing.
- Query results should be computed incrementally.
- High throughput and low latency is desired for the pipeline.

#### Some general rules

- The less frequently your underlying data sources update (i.e. your data freshness requirement is constrained upstream), the more rationale there is to convert expensive joins and queries into materialized views.
- Similarly, the less actual data that comes in as part of changes, the more rationale there is to use materialized views and DLT because those incremental data points can be (sanely!) maintained.
- And again, if it's okay for your data to be "directionally correct" or have some imprecision, then again the performance benefits of a materialized view are greater.
- And finally, if a particular set of query patterns dominate your overall usage (think 80/20 rule), there's more rationale to provide materialized views of those results to users.

[Views vs Materialized Delta Tables](https://community.databricks.com/s/question/0D53f00001GHVMlCAP/views-vs-materialized-delta-tables)

[Getting Started with Delta Live Tables - Databricks](https://www.databricks.com/discover/pages/getting-started-with-delta-live-tables)

[What is Delta Live Tables? | Databricks on AWS](https://docs.databricks.com/delta-live-tables/index.html)

[Delta Live Tables SQL language reference | Databricks on AWS](https://docs.databricks.com/delta-live-tables/sql-ref.html)

[Tutorial: Run your first Delta Live Tables pipeline | Databricks on AWS](https://docs.databricks.com/delta-live-tables/tutorial-pipelines.html)
