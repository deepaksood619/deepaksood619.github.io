# Delta Lake

[Delta Lake](https://databricks.com/wp-content/uploads/2020/08/p975-armbrust.pdf) is an open-source storage framework that enables building a
[Lakehouse architecture](http://cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf) with compute engines including Spark, PrestoDB, Flink, Trino, and Hive and APIs for Scala, Java, Rust, Ruby, and Python.

- Open Format Storage Layer
- Built on Parquet
- Enables ACID Transactions

[Home | Delta Lake](https://delta.io/)

[Welcome to the Delta Lake documentation — Delta Lake Documentation](https://docs.delta.io/latest/index.html)

[What is Delta Lake? | Databricks on AWS](https://docs.databricks.com/delta/index.html)

## Concurrency control

Delta Lake provides ACID transaction guarantees between reads and writes. This means that:

- For supported [storage systems](https://docs.delta.io/latest/delta-storage.html), multiple writers across multiple clusters can simultaneously modify a table partition and see a consistent snapshot view of the table and there will be a serial order for these writes.
- Readers continue to see a consistent snapshot view of the table that the Apache Spark job started with, even when a table is modified during a job.
- [Optimistic concurrency control](https://docs.delta.io/latest/concurrency-control.html#optimistic-concurrency-control)
- [Write conflicts](https://docs.delta.io/latest/concurrency-control.html#write-conflicts)
- [Avoid conflicts using partitioning and disjoint command conditions](https://docs.delta.io/latest/concurrency-control.html#avoid-conflicts-using-partitioning-and-disjoint-command-conditions)
- [Conflict exceptions](https://docs.delta.io/latest/concurrency-control.html#conflict-exceptions)

## Delta Lake Transaction Log

The Delta Lake transaction log (also known as the `DeltaLog`) is an ordered record of every transaction that has ever been performed on a Delta Lake table since its inception.

- What the transaction log is, how it’s structured, and how commits are stored as files on disk.
- How the transaction log serves as a single source of truth, allowing Delta Lake to implement the principle of atomicity.
- How Delta Lake computes the state of each table - including how it uses the transaction log to catch up from the most recent checkpoint.
- Using optimistic concurrency control to allow multiple concurrent reads and writes even as tables change.
- How Delta Lake uses mutual exclusion to ensure that commits are serialized properly, and how they are retried silently in the event of a conflict.

**[Understanding the Delta Lake Transaction Log - Databricks Blog](https://www.databricks.com/blog/2019/08/21/diving-into-delta-lake-unpacking-the-transaction-log.html)**

## FAQs

### What format does Delta Lake use to store data?

Delta Lake uses versioned Parquet files to store your data in your cloud storage. Apart from the versions, Delta Lake also stores a transaction log to keep track of all the commits made to the table or blob store directory to provide ACID transactions.

### Apache Hudi vs Delta Lake vs Apache Iceberg

Delta outperformed Iceberg and Hudi in loading and querying the data.

[Delta vs Iceberg vs hudi : Reassessing Performance | by DataBeans | Medium](https://databeans-blogs.medium.com/delta-vs-iceberg-vs-hudi-reassessing-performance-cb8157005eb0)

[A Thorough Comparison of Delta Lake, Iceberg and Hudi – Databricks](https://www.databricks.com/session_na20/a-thorough-comparison-of-delta-lake-iceberg-and-hudi)

[Apache Hudi vs Delta Lake vs Apache Iceberg - Lakehouse Feature Comparison](https://www.onehouse.ai/blog/apache-hudi-vs-delta-lake-vs-apache-iceberg-lakehouse-feature-comparison)
