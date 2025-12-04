# DataFrame

- [PySpark - Create an empty DataFrame](https://sparkbyexamples.com/pyspark/pyspark-create-an-empty-dataframe/)
- [PySpark - Convert RDD to DataFrame](https://sparkbyexamples.com/pyspark/convert-pyspark-rdd-to-dataframe/)
- [PySpark - Convert DataFrame to Pandas](https://sparkbyexamples.com/pandas/convert-pyspark-dataframe-to-pandas/)
- [PySpark - show()](https://sparkbyexamples.com/pyspark/pyspark-show-display-dataframe-contents-in-table/)
- [PySpark - StructType & StructField](https://sparkbyexamples.com/pyspark/pyspark-structtype-and-structfield/)
- [PySpark - Column Class](https://sparkbyexamples.com/pyspark/pyspark-column-functions/)
- [PySpark - select()](https://sparkbyexamples.com/pyspark/select-columns-from-pyspark-dataframe/)
- [PySpark - collect()](https://sparkbyexamples.com/pyspark/pyspark-collect/)
- [PySpark - withColumn()](https://sparkbyexamples.com/pyspark/pyspark-withcolumn/)
- [PySpark - withColumnRenamed()](https://sparkbyexamples.com/pyspark/pyspark-rename-dataframe-column/)
- [PySpark - where() & filter()](https://sparkbyexamples.com/pyspark/pyspark-where-filter/)
- [PySpark - drop() & dropDuplicates()](https://sparkbyexamples.com/pyspark/pyspark-distinct-to-drop-duplicates/)
- [PySpark - orderBy() and sort()](https://sparkbyexamples.com/pyspark/pyspark-orderby-and-sort-explained/)
- [PySpark - groupBy()](https://sparkbyexamples.com/pyspark/pyspark-groupby-explained-with-example/)
- [PySpark - join()](https://sparkbyexamples.com/pyspark/pyspark-join-explained-with-examples/)
- [PySpark - union() & unionAll()](https://sparkbyexamples.com/pyspark/pyspark-union-and-unionall/)
- [PySpark - unionByName()](https://sparkbyexamples.com/pyspark/pyspark-unionbyname/)
- [PySpark - UDF (User Defined Function)](https://sparkbyexamples.com/pyspark/pyspark-udf-user-defined-function/)
- [PySpark - transform()](https://sparkbyexamples.com/pyspark/pyspark-transform-function/)
- [PySpark - apply()](https://sparkbyexamples.com/pyspark/pyspark-apply-function-to-column/)
- [PySpark - map()](https://sparkbyexamples.com/pyspark/pyspark-map-transformation/)
- [PySpark - flatMap()](https://sparkbyexamples.com/pyspark/pyspark-flatmap-transformation/)
- [PySpark - foreach()](https://sparkbyexamples.com/pyspark/pyspark-foreach-usage-with-examples/)
- [PySpark - sample() vs sampleBy()](https://sparkbyexamples.com/pyspark/pyspark-sampling-example/)
- [PySpark - fillna() & fill()](https://sparkbyexamples.com/pyspark/pyspark-fillna-fill-replace-null-values/)
- [PySpark - pivot() (Row to Column)](https://sparkbyexamples.com/pyspark/pyspark-pivot-and-unpivot-dataframe/)
- [PySpark - partitionBy()](https://sparkbyexamples.com/pyspark/pyspark-partitionby-example/)
- [PySpark - MapType (Map/Dict)](https://sparkbyexamples.com/pyspark/pyspark-maptype-dict-examples/)

```python
# Copy pyspark.sql.dataframe.DataFrame to another dataframe
df_copy = df.alias('df')

# Subtract two pyspark.sql.dataframe.DataFrame
diff_df = df.subtract(df_copy)
diff_df.display()

result_df = df.where(df["id"].isin(['5edc8f7d-0036-4910-84c4-48d46f7eeb04']))
result_df.display()
result_df.head()

# group by
df1.groupBy(F.date_format('updatedAt','yyyy-MM-dd').alias('day')).count().display()

# filter
df2 = df1.filter((df1.updatedAt >= "2023-04-05"))
df3 = df2.filter(df.amount.isNotNull())

# select
df1.select('amount').groupby('amount').count().display()

# group by count, order by count desc
from pyspark.sql.functions import desc

dfFilter.sort(desc(df.groupby('DepositTransactionId').count())).display()

# dropDuplicates
df = df.dropDuplicates()
```

### CAST

```python
# cast columns to different types
from pyspark.sql.functions import col

from pyspark.sql.types import DateType, LongType, DoubleType, IntegerType, BooleanType

df = df.withColumn("col_name", col("col_name").cast(IntegerType())) \
.withColumn("col_name2", col("col_name2").cast(IntegerType())) \
.withColumn("col_name3", col("col_name3").cast(BooleanType()))
```

## Spark DataFrame vs Pandas DataFrame

| Spark DataFrame | Pandas DataFrame |
| :---: | :---: |
| Spark DataFrame supports parallelization.  | Pandas DataFrame does not support parallelization.  |
| Spark DataFrame has Multiple Nodes. | Pandas DataFrame has a Single  Node. |
| It follows Lazy Execution which means that a task is not executed until an action is performed. | It follows Eager Execution, which means task is executed immediately. |
| Spark DataFrame is Immutable. | Pandas DataFrame is Mutable. |
| Complex operations are difficult to perform as compared to Pandas DataFrame. | Complex operations are easier to perform as compared to Spark DataFrame. |
| Spark DataFrame is distributed and hence processing in the Spark DataFrame is faster for a large amount of data. | Pandas DataFrame is not distributed and hence processing in the Pandas DataFrame will be slower for a large amount of data. |
| sparkDataFrame.count() returns the number of rows. | pandasDataFrame.count() returns the number of non NA/null observations for each column. |
| Spark DataFrames are excellent for building a scalable application. | Pandas DataFrames can’t be used to build a scalable application. |
| Spark DataFrame assures fault tolerance. | Pandas DataFrame does not assure fault tolerance. We need to implement our own framework to assure it. |

[Difference Between Spark DataFrame and Pandas DataFrame - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-spark-dataframe-and-pandas-dataframe/)

[Pandas vs PySpark DataFrame With Examples - Spark By Examples](https://sparkbyexamples.com/pyspark/pandas-vs-pyspark-dataframe-with-examples/)

## Spark collect

PySpark RDD/DataFrame `collect()` is an action operation that is used to retrieve all the elements of the dataset (from all nodes) to the driver node. We should use the collect() on smaller dataset usually after [filter()](https://sparkbyexamples.com/pyspark/pyspark-where-filter/), [group()](https://sparkbyexamples.com/pyspark/pyspark-groupby-explained-with-example/) e.t.c. Retrieving larger datasets results in `OutOfMemory` error.

#### When to avoid Collect()

Usually, collect() is used to retrieve the action output when you have very small result set and calling `collect()` on an RDD/DataFrame with a bigger result set causes out of memory as it returns the entire dataset (from all workers) to the driver hence we should avoid calling collect() on a larger dataset.

#### collect () vs select ()

`select()` is a transformation that returns a new DataFrame and holds the columns that are selected whereas collect() is an action that returns the entire data set in an Array to the driver.

[PySpark Collect() - Retrieve data from DataFrame - Spark By Examples](https://sparkbyexamples.com/pyspark/pyspark-collect/)

## Writing Data - .saveAsTable() vs .writeTo()

### Using .saveAsTable()

This is the **classic Spark SQL method**. It’s been around for a long time and works with Hive tables, Parquet tables, and modern catalogs like Iceberg.

`df.write.mode("overwrite").format("iceberg").saveAsTable("iceberg_jdbc.default.people_data_iceberg")`

This line of code:

- Writes a DataFrame to the table people_data_iceberg
- Uses the mode "overwrite" to replace existing data

Supports Iceberg, Hive, or any table with a registered catalog

But there’s a catch — **if you use mode("overwrite") without caution**, Spark will **drop and recreate the entire table**, deleting all partitions.

**The Partition Overwrite Problem**

Imagine you have this Iceberg table:

![Article content](https://media.licdn.com/dms/image/v2/D5612AQH4bpNFVznggQ/article-inline_image-shrink_1000_1488/B56Zpid68mG0AQ-/0/1762588602799?e=1766620800&v=beta&t=Iq6wAq2jJGA2ZfkqhCHTiPbR2-sXPq13d81AimcLoVc)

Now, you only want to replace records for India.

If you do this:

```
india_df = df.filter("country = 'India'")
india_df.write.mode("overwrite").format("iceberg").saveAsTable("iceberg_jdbc.default.people_data_iceberg")
```

Boom — Spark overwrites the entire table unless you **enable dynamic partition overwrite**.

### The Workaround — Dynamic Partition Overwrite

To safely overwrite only specific partitions, you can enable a Spark config:

```
spark.conf.set("spark.sql.sources.partitionOverwriteMode", "dynamic")
```

Then run:

```
india_df.write.mode("overwrite").format("iceberg").saveAsTable("iceberg_jdbc.default.people_data_iceberg")
```

### Enter .writeTo(): The Modern API

Starting from Spark 3.1+, a **new, safer, and more expressive API** was introduced — .writeTo().

Here’s how it looks:

```
india_df.writeTo("iceberg_jdbc.default.people_data_iceberg").overwritePartitions()
```

This achieves the same goal — only the India partition is replaced — but with **no extra configuration needed**.

Now Spark will:

- Detect the partitions present in the incoming DataFrame (country='India')
- Overwrite **only those partitions**
- Leave others (USA, Brazil) untouched

Without this config, you risk erasing your whole table.

### Final Thoughts

While .saveAsTable() remains useful and backward-compatible, it’s a **legacy approach** designed before modern table formats existed. On the other hand, .writeTo() is built for **atomic, schema-aware, and partition-safe writes** — especially for **Iceberg**, **Delta**, and **Hudi** tables.

#### Use .writeTo() when

- Working with Iceberg or Delta
- You want fine-grained control (create, replace, overwritePartitions)
- You care about explicit and safe write semantics

#### Use .saveAsTable() when

- You’re integrating with legacy Hive tables
- You already have a global partitionOverwriteMode set

[saveAsTable() vs .writeTo() in Apache Spark: The Subtle but Powerful Difference](https://www.linkedin.com/pulse/saveastable-vs-writeto-apache-spark-subtle-powerful-difference-bf9ic/)
