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
```

## Spark DataFrame vs Pandas DataFrame

| Spark DataFrame | Pandas DataFrame |
| :---: | :---: |
| Spark DataFrame supports parallelization.  | Pandas DataFrame does not support parallelization.  |
| Spark DataFrame has Multiple Nodes. | Pandas DataFrame has a Single  Node. |
| It follows Lazy Execution which means that a task is not executed until an action is performed. | It follows Eager Execution, which means task is executed immediately. |
| Spark DataFrame is Immutable. | Pandas DataFrame is Mutable. |
| Complex operations are difficult to perform as compared to Pandas DataFrame. | Complex operations are easier to perform as compared to Spark DataFrame. |
| Spark DataFrame is distributed and hence processing in the Spark DataFrame is faster for a large amount of data. | Pandas DataFrame is not distributed and hence processing in the Pandas DataFrame will be slower for a large amount of data. |
| sparkDataFrame.count() returns the number of rows. | pandasDataFrame.count() returns the number of non NA/null observations for each column. |
| Spark DataFrames are excellent for building a scalable application. | Pandas DataFrames can’t be used to build a scalable application. |
| Spark DataFrame assures fault tolerance. | Pandas DataFrame does not assure fault tolerance. We need to implement our own framework to assure it. |

[Difference Between Spark DataFrame and Pandas DataFrame - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-spark-dataframe-and-pandas-dataframe/)

[Pandas vs PySpark DataFrame With Examples - Spark By {Examples}](https://sparkbyexamples.com/pyspark/pandas-vs-pyspark-dataframe-with-examples/)