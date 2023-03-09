# Delta Lake

[Delta Lake](https://databricks.com/wp-content/uploads/2020/08/p975-armbrust.pdf) is an open-source storage framework that enables building a  
[Lakehouse architecture](http://cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf) with compute engines including Spark, PrestoDB, Flink, Trino, and Hive and APIs for Scala, Java, Rust, Ruby, and Python.

- Open Format Storage Layer
- Built on Parquet
- Enables ACID Transactions

[Home | Delta Lake](https://delta.io/)

[Welcome to the Delta Lake documentation — Delta Lake Documentation](https://docs.delta.io/latest/index.html)

## [Getting Started with Delta Lake](https://delta.io/learn/getting-started)

### Create a table

To create a Delta table, write a DataFrame out in the delta format. You can use existing Spark SQL code and change the format from parquet, csv, json, and so on, to delta.

```python
data = spark.range(0, 5)
data.write.format("delta").save("/tmp/delta-table")
```

These operations create a new Delta table using the schema that was _inferred_ from your DataFrame. 

[Create a table](https://docs.delta.io/latest/delta-batch.html#-ddlcreatetable)

[Write to a table](https://docs.delta.io/latest/delta-batch.html#-deltadataframewrites)

### Read a table

You read data in your Delta table by specifying the path to the files `"/tmp/delta-table"`:

```python
df = spark.read.format("delta").load("/tmp/delta-table")
df.show()
```

### Update table data

Delta Lake supports several operations to modify tables using standard DataFrame APIs. This example runs a batch job to overwrite the data in the table:

#### Overwrite

```python
data = spark.range(5, 10)
data.write.format("delta").mode("overwrite").save("/tmp/delta-table")
```

If you read this table again, you should see only the values 5-9 you have added because you overwrote the previous data.

#### Conditional update without overwrite

Delta Lake provides programmatic APIs to conditional update, delete, and merge (upsert) data into tables. Here are a few examples:

```python
from delta.tables import *
from pyspark.sql.functions import *

deltaTable = DeltaTable.forPath(spark, "/tmp/delta-table")

# Update every even value by adding 100 to it
deltaTable.update(
  condition = expr("id % 2 == 0"),
  set = { "id": expr("id + 100") })

# Delete every even value
deltaTable.delete(condition = expr("id % 2 == 0"))

# Upsert (merge) new data
newData = spark.range(0, 20)

deltaTable.alias("oldData") \
  .merge(
    newData.alias("newData"),
    "oldData.id = newData.id") \
  .whenMatchedUpdate(set = { "id": col("newData.id") }) \
  .whenNotMatchedInsert(values = { "id": col("newData.id") }) \
  .execute()

deltaTable.toDF().show()
```

You should see that some of the existing rows have been updated and new rows have been inserted.

[Table deletes, updates, and merges](https://docs.delta.io/latest/delta-update.html)

## Read older versions of data using time travel

You can query previous snapshots of your Delta table by using time travel. If you want to access the data that you overwrote, you can query a snapshot of the table before you overwrote the first set of data using the versionAsOf option.

```python
df = spark.read.format("delta") \
  .option("versionAsOf", 0) \
  .load("/tmp/delta-table")

df.show()
```

You should see the first set of data, from before you overwrote it. Time travel takes advantage of the power of the Delta Lake transaction log to access data that is no longer in the table. Removing the version 0 option (or specifying version 1) would let you see the newer data again.

[Query an older snapshot of a table (time travel)](https://docs.delta.io/latest/delta-batch.html#-deltatimetravel)

## Write a stream of data to a table

You can also write to a Delta table using Structured Streaming. The Delta Lake transaction log guarantees exactly-once processing, even when there are other streams or batch queries running concurrently against the table. By default, streams run in append mode, which adds new records to the table:

```python
streamingDf = spark.readStream.format("rate").load()

stream = streamingDf \
  .selectExpr("value as id") \
  .writeStream.format("delta") \
  .option("checkpointLocation", "/tmp/checkpoint") \
  .start("/tmp/delta-table")
```

While the stream is running, you can read the table using the earlier commands.

You can stop the stream by running `stream.stop()` in the same terminal that started the stream.

[Table streaming reads and writes](https://docs.delta.io/latest/delta-streaming.html) 

## Read a stream of changes from a table

While the stream is writing to the Delta table, you can also read from that table as streaming source. For example, you can start another streaming query that prints all the changes made to the Delta table. You can specify which version Structured Streaming should start from by providing the `startingVersion` or `startingTimestamp` option to get changes from that point onwards.

[Structured Streaming](https://docs.delta.io/latest/delta-streaming.html#-specify-initial-position)

```python
stream2 = spark.readStream.format("delta") \
  .load("/tmp/delta-table") \
  .writeStream.format("console") \
  .start()
```

### Concurrency control

Delta Lake provides ACID transaction guarantees between reads and writes. This means that:

-   For supported [storage systems](https://docs.delta.io/latest/delta-storage.html), multiple writers across multiple clusters can simultaneously modify a table partition and see a consistent snapshot view of the table and there will be a serial order for these writes.
-   Readers continue to see a consistent snapshot view of the table that the Apache Spark job started with, even when a table is modified during a job.
-   [Optimistic concurrency control](https://docs.delta.io/latest/concurrency-control.html#optimistic-concurrency-control)
-   [Write conflicts](https://docs.delta.io/latest/concurrency-control.html#write-conflicts)
-   [Avoid conflicts using partitioning and disjoint command conditions](https://docs.delta.io/latest/concurrency-control.html#avoid-conflicts-using-partitioning-and-disjoint-command-conditions)
-   [Conflict exceptions](https://docs.delta.io/latest/concurrency-control.html#conflict-exceptions)

## FAQs

### What format does Delta Lake use to store data?

Delta Lake uses versioned Parquet files to store your data in your cloud storage. Apart from the versions, Delta Lake also stores a transaction log to keep track of all the commits made to the table or blob store directory to provide ACID transactions.
