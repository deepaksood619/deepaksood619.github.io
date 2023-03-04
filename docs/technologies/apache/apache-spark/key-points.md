# Key points

## Spark Dataframes

The key data type used in PySpark is the Spark dataframe. This object can be thought of as a table distributed across a cluster and has functionality that is similar to dataframes in R and Pandas. If you want to do distributed computation using PySpark, then you'll need to perform operations on Spark dataframes, and not other python data types.

It is also possible to use Pandas dataframes when using Spark, by callingtoPandas()on a Spark dataframe, which returns a pandas object. However, this function should generally be avoided except when working with small dataframes, because it pulls the entire object into memory on a single node.

One of the key differences between Pandas and Spark dataframes is eager versus lazy execution.In PySpark, operations are delayed until a result is actually needed in the pipeline. For example, you can specify operations for loading a data set from S3 and applying a number of transformations to the dataframe, but these operations won't immediately be applied. Instead, a graph of transformations is recorded, and once the data is actually needed, for example when writing the results back to S3, then the transformations are applied as a single pipeline operation. This approach is used to avoid pulling the full data frame into memory and enables more effective processing across a cluster of machines. With Pandas dataframes, everything is pulled into memory, and every Pandas operation is immediately applied.

In general, it's a best practice to avoid eager operations in Spark if possible, since it limits how much of your pipeline can be effectively distributed.

## Key points

I prefer using the parquet format when working with Spark, because it is a file format that includes metadata about the column data types, offers file compression, and is a file format that is designed to work well with Spark. AVRO is another format that works well with Spark.

When reading CSV files into dataframes, Spark performs the operation in an eager mode, meaning that all of the data is loaded into memory before the next step begins execution, while a lazy approach is used when reading files in the parquet format. Generally, you want to avoid eager operations when working with Spark, and if I need to process large CSV files I'll first transform the data set to parquet format before executing the rest of the pipeline.

Often you'll need to process a large number of files, such as hundreds of parquet files located at a certain path or directory in DBFS. With Spark, you can include a wildcard in a path to process a collection of files.

If you want to read data from a DataBase, such as Redshift, it's a best practice to first unload the data to S3 before processing it with Spark. In Redshift, the [unload](https://docs.aws.amazon.com/redshift/latest/dg/t_Unloading_tables.html) command can be used to export data to S3 for processing:

```sql
unload ('select * from data_to_process')
to 's3://my_bucket/game_data'
iam_role 'arn:aws:iam::123:role/RedshiftExport';
```

There's also libraries for databases, such as the [spark-redshift](https://github.com/databricks/spark-redshift), that make this process easier to perform.

## Writing Data

Similar to reading data with Spark, it's not recommended to write data to local storage when using PySpark. Instead, you should use a distributed file system such as S3 or HDFS. If you going to be processing the results with Spark, then parquet is a good format to use for saving data frames. The snippet below shows how to save a dataframe to DBFS and S3 as parquet.

## DBFS (Parquet)

`df.write.save('/FileStore/parquet/game_stats', format='parquet')`

## S3 (Parquet)

`df.write.parquet("s3a://my_bucket/game_stats", mode="overwrite")`

## Transforming Data

One of the ways of performing operations on Spark dataframes is via Spark SQL, which enables dataframes to be queried as if they were tables.

## Best Practices

- **Avoid dictionaries, use dataframes:**using Python data types such as dictionaries means that the code might not be executable in a distributed mode. Instead of using keys to index values in a dictionary, consider adding another column to a dataframe that can be used as a filter.
- **UsetoPandassparingly:**CallingtoPandas()will cause all data to be loaded into memory on the driver node, and prevents operations from being performed in a distributed mode. It's fine to use this function when data has already been aggregated and you want to make use of familiar Python plotting tools, but it should not be used for large dataframes.
- **Avoid for loops:**If possible, it's preferred to rewrite for-loop logic using the groupby-apply pattern to support parallelized code execution. I've noticed that focusing on using this pattern in Python has also resulted in cleaning code that is easier to translate to PySpark.
- **Try minimizing eager operations:**In order for your pipeline to be as scalable as possible, it's good to avoid eager operations that pull full dataframes into memory. I've noticed that reading in CSVs is an eager operation, and my work around is to save the dataframe as parquet and then reload it from parquet to build more scalable pipelines.
- **Use framequery/pandasql to make porting easier:**If you're working with someone else's Python code, it can be tricky to decipher what some of the Pandas operations are achieving. If you plan on porting your code from Python to PySpark, then using a SQL library for Pandas can make this translation easier.

## Lazy Evaluation

Lazy evaluation, or lazy computing, has to do with how code is compiled. When a compiler that is not lazy (which is called strict evaluation) compiles code, it sequentially evaluates each expression it comes across. A lazy compiler on the other hand, doesn't continually evaluate expressions, but rather, waits until it is actually told to generate a result, and then performs all the evaluation all at once. So as it compiles code, it keeps track of everything it will eventually have to evaluate (in Spark this kind of evaluation log, so to speak, is called a **lineage graph**), and then whenever it is prompted to return something, it performs evaluations according to what it has in its evaluation log. This is useful because it makes programs more efficient as the compiler doesn't have to evaluate anything that isn't actually used.
