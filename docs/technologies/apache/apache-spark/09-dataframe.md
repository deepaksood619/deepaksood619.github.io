# DataFrame

- [PySpark – Create an empty DataFrame](https://sparkbyexamples.com/pyspark/pyspark-create-an-empty-dataframe/)
- [PySpark – Convert RDD to DataFrame](https://sparkbyexamples.com/pyspark/convert-pyspark-rdd-to-dataframe/)
- [PySpark – Convert DataFrame to Pandas](https://sparkbyexamples.com/pandas/convert-pyspark-dataframe-to-pandas/)
- [PySpark – show()](https://sparkbyexamples.com/pyspark/pyspark-show-display-dataframe-contents-in-table/)
- [PySpark – StructType & StructField](https://sparkbyexamples.com/pyspark/pyspark-structtype-and-structfield/)
- [PySpark – Column Class](https://sparkbyexamples.com/pyspark/pyspark-column-functions/)
- [PySpark – select()](https://sparkbyexamples.com/pyspark/select-columns-from-pyspark-dataframe/)
- [PySpark – collect()](https://sparkbyexamples.com/pyspark/pyspark-collect/)
- [PySpark – withColumn()](https://sparkbyexamples.com/pyspark/pyspark-withcolumn/)
- [PySpark – withColumnRenamed()](https://sparkbyexamples.com/pyspark/pyspark-rename-dataframe-column/)
- [PySpark – where() & filter()](https://sparkbyexamples.com/pyspark/pyspark-where-filter/)
- [PySpark – drop() & dropDuplicates()](https://sparkbyexamples.com/pyspark/pyspark-distinct-to-drop-duplicates/)
- [PySpark – orderBy() and sort()](https://sparkbyexamples.com/pyspark/pyspark-orderby-and-sort-explained/)
- [PySpark – groupBy()](https://sparkbyexamples.com/pyspark/pyspark-groupby-explained-with-example/)
- [PySpark – join()](https://sparkbyexamples.com/pyspark/pyspark-join-explained-with-examples/)
- [PySpark – union() & unionAll()](https://sparkbyexamples.com/pyspark/pyspark-union-and-unionall/)
- [PySpark – unionByName()](https://sparkbyexamples.com/pyspark/pyspark-unionbyname/)
- [PySpark – UDF (User Defined Function)](https://sparkbyexamples.com/pyspark/pyspark-udf-user-defined-function/)
- [PySpark – transform()](https://sparkbyexamples.com/pyspark/pyspark-transform-function/)
- [PySpark – apply()](https://sparkbyexamples.com/pyspark/pyspark-apply-function-to-column/)
- [PySpark – map()](https://sparkbyexamples.com/pyspark/pyspark-map-transformation/)
- [PySpark – flatMap()](https://sparkbyexamples.com/pyspark/pyspark-flatmap-transformation/)
- [PySpark – foreach()](https://sparkbyexamples.com/pyspark/pyspark-foreach-usage-with-examples/)
- [PySpark – sample() vs sampleBy()](https://sparkbyexamples.com/pyspark/pyspark-sampling-example/)
- [PySpark – fillna() & fill()](https://sparkbyexamples.com/pyspark/pyspark-fillna-fill-replace-null-values/)
- [PySpark – pivot() (Row to Column)](https://sparkbyexamples.com/pyspark/pyspark-pivot-and-unpivot-dataframe/)
- [PySpark – partitionBy()](https://sparkbyexamples.com/pyspark/pyspark-partitionby-example/)
- [PySpark – MapType (Map/Dict)](https://sparkbyexamples.com/pyspark/pyspark-maptype-dict-examples/)

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

[Pandas vs PySpark DataFrame With Examples - Spark By {Examples}](https://sparkbyexamples.com/pyspark/pandas-vs-pyspark-dataframe-with-examples/)

## Spark collect

PySpark RDD/DataFrame `collect()` is an action operation that is used to retrieve all the elements of the dataset (from all nodes) to the driver node. We should use the collect() on smaller dataset usually after [filter()](https://sparkbyexamples.com/pyspark/pyspark-where-filter/), [group()](https://sparkbyexamples.com/pyspark/pyspark-groupby-explained-with-example/) e.t.c. Retrieving larger datasets results in `OutOfMemory` error.

#### When to avoid Collect()

Usually, collect() is used to retrieve the action output when you have very small result set and calling `collect()` on an RDD/DataFrame with a bigger result set causes out of memory as it returns the entire dataset (from all workers) to the driver hence we should avoid calling collect() on a larger dataset.

#### collect () vs select ()

`select()` is a transformation that returns a new DataFrame and holds the columns that are selected whereas collect() is an action that returns the entire data set in an Array to the driver.

[PySpark Collect() - Retrieve data from DataFrame - Spark By {Examples}](https://sparkbyexamples.com/pyspark/pyspark-collect/)
