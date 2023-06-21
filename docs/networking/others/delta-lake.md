# Delta Lake

[Delta Lake](https://databricks.com/wp-content/uploads/2020/08/p975-armbrust.pdf) is an open-source storage framework that enables building a
[Lakehouse architecture](http://cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf) with compute engines including Spark, PrestoDB, Flink, Trino, and Hive and APIs for Scala, Java, Rust, Ruby, and Python.

- Open Format Storage Layer
- Built on Parquet
- Enables ACID Transactions

[Home | Delta Lake](https://delta.io/)

[Welcome to the Delta Lake documentation — Delta Lake Documentation](https://docs.delta.io/latest/index.html)

[What is Delta Lake? | Databricks on AWS](https://docs.databricks.com/delta/index.html)

## Concurrency control

Delta Lake provides ACID transaction guarantees between reads and writes. This means that:

- For supported [storage systems](https://docs.delta.io/latest/delta-storage.html), multiple writers across multiple clusters can simultaneously modify a table partition and see a consistent snapshot view of the table and there will be a serial order for these writes.
- Readers continue to see a consistent snapshot view of the table that the Apache Spark job started with, even when a table is modified during a job.
- [Optimistic concurrency control](https://docs.delta.io/latest/concurrency-control.html#optimistic-concurrency-control)
- [Write conflicts](https://docs.delta.io/latest/concurrency-control.html#write-conflicts)
- [Avoid conflicts using partitioning and disjoint command conditions](https://docs.delta.io/latest/concurrency-control.html#avoid-conflicts-using-partitioning-and-disjoint-command-conditions)
- [Conflict exceptions](https://docs.delta.io/latest/concurrency-control.html#conflict-exceptions)

## Delta Lake Transaction Log

The Delta Lake transaction log (also known as the `DeltaLog`) is an ordered record of every transaction that has ever been performed on a Delta Lake table since its inception.

- What the transaction log is, how it’s structured, and how commits are stored as files on disk.
- How the transaction log serves as a single source of truth, allowing Delta Lake to implement the principle of atomicity.
- How Delta Lake computes the state of each table - including how it uses the transaction log to catch up from the most recent checkpoint.
- Using optimistic concurrency control to allow multiple concurrent reads and writes even as tables change.
- How Delta Lake uses mutual exclusion to ensure that commits are serialized properly, and how they are retried silently in the event of a conflict.

**[Understanding the Delta Lake Transaction Log - Databricks Blog](https://www.databricks.com/blog/2019/08/21/diving-into-delta-lake-unpacking-the-transaction-log.html)**

## Selectively overwrite data with Delta Lake

Databricks leverages Delta Lake functionality to support two distinct options for selective overwrites:

- The `replaceWhere` option atomically replaces all records that match a given predicate.
- You can replace directories of data based on how tables are partitioned using **dynamic partition overwrites**.

```sql
-- overwrite only writes those partitions that have been updated,
table_df_parent.write.format("delta")
.mode("overwrite")
.partitionBy("snapshotDate")
.option("replaceWhere", f"snapshotDate='{run_date}'")
.saveAsTable(f"{uc_target_table_name_monthly}")
```

### Dynamic partition overwrites

When in dynamic partition overwrite mode, operations overwrite all existing data in each logical partition for which the write commits new data. Any existing logical partitions for which the write does not contain data remain unchanged. This mode is only applicable when data is being written in overwrite mode: either `INSERT OVERWRITE` in SQL, or a DataFrame write with `df.write.mode("overwrite")`.

[Selectively overwrite data with Delta Lake | Databricks on AWS](https://docs.databricks.com/delta/selective-overwrite.html)

### Partitioning best practice

Data in Spark is ideally stored in a smaller number of large files between [128MB and 1GB in size](https://docs.databricks.com/delta/optimizations/auto-optimize.html). This allows the driver and workers to operate efficiently. Having the data fragmented into many small files will slow down reading of the Delta store and will overload the driver memory as it attempts to load metadata for many small files into memory at once.

There are two causes of file fragmentation — unoptimized updates and excessive partitioning.

#### Unoptimized updates

In a continuously streaming Delta stream, data is added in small chunks over time as it streams in in a series of micro batches. With default configuration this will cause the creation of a huge number of small files.

#### Excessive partitioning

If a data column with high ordinality (many discrete values) is chosen as a partition, the Delta store can end up with thousands of partitions. This makes the data look tidy in the file store but causes each micro batch of data to be split into many small files.

#### The deadly combination

If a stream has unoptimized updates and excessive partitioning, then the two factors multiply. A delta store organised this way can easily end up with millions of small fragmented files (the number of partitions times the number of tiny updates per partition).

[Databricks Delta — Partitioning best practice | by gregzrichardson | Nintex Developers | Medium](https://medium.com/nintex-developers/databricks-delta-partitioning-best-practice-c19df9c8a7d2)

## Vacuum

[Remove unused data files with vacuum | Databricks on AWS](https://docs.databricks.com/delta/vacuum.html)

```sql
VACUUM cake.dev.transactions;

VACUUM cake.dev.transactions RETAIN 168 HOURS;
```

[VACUUM | Databricks on AWS](https://docs.databricks.com/sql/language-manual/delta-vacuum.html)

## Clone

```sql
CREATE TABLE target_schema.gold.target_table_name CLONE source_schema.gold.source_table_name;
```

[Clone a table on Databricks | Databricks on AWS](https://docs.databricks.com/delta/clone.html)

## FAQs

### What format does Delta Lake use to store data?

Delta Lake uses versioned Parquet files to store your data in your cloud storage. Apart from the versions, Delta Lake also stores a transaction log to keep track of all the commits made to the table or blob store directory to provide ACID transactions.

### Apache Hudi vs Delta Lake vs Apache Iceberg

Delta outperformed Iceberg and Hudi in loading and querying the data.

[Delta vs Iceberg vs hudi : Reassessing Performance | by DataBeans | Medium](https://databeans-blogs.medium.com/delta-vs-iceberg-vs-hudi-reassessing-performance-cb8157005eb0)

[A Thorough Comparison of Delta Lake, Iceberg and Hudi – Databricks](https://www.databricks.com/session_na20/a-thorough-comparison-of-delta-lake-iceberg-and-hudi)

[Apache Hudi vs Delta Lake vs Apache Iceberg - Lakehouse Feature Comparison](https://www.onehouse.ai/blog/apache-hudi-vs-delta-lake-vs-apache-iceberg-lakehouse-feature-comparison)
