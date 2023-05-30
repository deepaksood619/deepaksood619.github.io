# Delta Lake Tutorial

## [Tutorial: Delta Lake | Databricks on AWS](https://docs.databricks.com/delta/tutorial.html)

### Create a table

All tables created on Databricks use Delta Lake by default.

```sql
# Load the data from its source.
df = spark.read.load("/databricks-datasets/learning-spark-v2/people/people-10m.delta")

# Write the data to a table.
table_name = "people_10m"
df.write.saveAsTable(table_name)
```

The preceding operations create a new [managed table](https://docs.databricks.com/lakehouse/data-objects.html#managed-table) by using the schema that was inferred from the data. For information about available options when you create a Delta table, see [CREATE TABLE](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-ddl-create-table.html).

For managed tables, Databricks determines the location for the data. To get the location, you can use the [DESCRIBE DETAIL](https://docs.databricks.com/delta/table-details.html) statement, for example:

```sql
display(spark.sql('DESCRIBE DETAIL people_10m'))
```

- You can directly use SQL too to create tables
- You can also use the `DeltaTableBuilder` API in Delta Lake to create tables. Compared to the DataFrameWriter APIs, this API makes it easier to specify additional information like column comments, table properties, and [generated columns](https://docs.databricks.com/delta/generated-columns.html).

## Upsert to a table

To merge a set of updates and insertions into an existing Delta table, you use the [MERGE INTO](https://docs.databricks.com/sql/language-manual/delta-merge-into.html) statement. For example, the following statement takes data from the source table and merges it into the target Delta table. When there is a matching row in both tables, Delta Lake updates the data column using the given expression. When there is no matching row, Delta Lake adds a new row. This operation is known as an _upsert_.

```sql
CREATE OR REPLACE TEMP VIEW people_updates (
  id, firstName, middleName, lastName, gender, birthDate, ssn, salary
) AS VALUES
  (9999998, 'Billy', 'Tommie', 'Luppitt', 'M', '1992-09-17T04:00:00.000+0000', '953-38-9452', 55250),
  (9999999, 'Elias', 'Cyril', 'Leadbetter', 'M', '1984-05-22T04:00:00.000+0000', '906-51-2137', 48500),
  (10000000, 'Joshua', 'Chas', 'Broggio', 'M', '1968-07-22T04:00:00.000+0000', '988-61-6247', 90000),
  (20000001, 'John', '', 'Doe', 'M', '1978-01-14T04:00:00.000+000', '345-67-8901', 55500),
  (20000002, 'Mary', '', 'Smith', 'F', '1982-10-29T01:00:00.000+000', '456-78-9012', 98250),
  (20000003, 'Jane', '', 'Doe', 'F', '1981-06-25T04:00:00.000+000', '567-89-0123', 89900);

MERGE INTO people_10m
USING people_updates
ON people_10m.id = people_updates.id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;
```

If you specify `*`, this updates or inserts all columns in the target table. This assumes that the source table has the same columns as those in the target table, otherwise the query will throw an analysis error.

You must specify a value for every column in your table when you perform an `INSERT` operation (for example, when there is no matching row in the existing dataset). However, you do not need to update all values.

## Read a table

You access data in Delta tables by the table name or the table path, as shown in the following examples:

```sql
people_df = spark.read.table(table_name)
display(people_df)

-- or

people_df = spark.read.load(table_path)
display(people_df)
```

## Write to a table

Delta Lake uses standard syntax for writing data to tables.

```sql
-- create and insert data
CREATE TABLE student_copy AS SELECT * FROM student;
```

To atomically add new data to an existing Delta table, use `append` mode as in the following examples:

```sql
INSERT INTO people10m SELECT * FROM more_people
```

To atomically replace all the data in a table, use `overwrite` mode as in the following examples:

```sql
INSERT OVERWRITE TABLE people10m SELECT * FROM more_people
```

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

.option("OverwriteSchema", True)
.option("mergeSchema", True)
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

## Retrieve Delta table history

You can retrieve information on the operations, user, timestamp, and so on for each write to a Delta table by running the `history` command. The operations are returned in reverse chronological order. By default table history is retained for 30 days.

```sql
DESCRIBE HISTORY '/data/events/' -- get the full history of the table

DESCRIBE HISTORY delta.`/data/events/`

DESCRIBE HISTORY '/data/events/' LIMIT 1 -- get the last operation only

DESCRIBE HISTORY eventsTable
```

[Work with Delta Lake table history | Databricks on AWS](https://docs.databricks.com/delta/history.html)
