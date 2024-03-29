# Examples

```python
# SQL table to parquet
from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
df = spark.read.jdbc("YOUR_MYSQL_JDBC_CONN_STRING",  "YOUR_TABLE", properties={"user": "YOUR_USER", "password": "YOUR_PASSWORD"})
df.write.parquet("YOUR_HDFS_FILE")

# CSV to Parquet
from pyspark import SparkContext
from pyspark.sql import SQLContext
from pyspark.sql.types import *

if __name__ == "__main__":
    sc = SparkContext(appName="CSV2Parquet")
    sqlContext = SQLContext(sc)

    schema = StructType([
            StructField("col1", IntegerType(), True),
            StructField("col2", IntegerType(), True),
            StructField("col3", StringType(), True),
            StructField("col4", StringType(), True),
            StructField("col5", StringType(), True),
            StructField("col6", DoubleType(), True)])

    rdd = sc.textFile("/home/sarvesh/Desktop/input.csv").map(lambda line: line.split(","))
    df = sqlContext.createDataFrame(rdd, schema)
    df.write.parquet('/home/sarvesh/Desktop/input-parquet')

# Parquet to csv
from pyspark import SparkContext
from pyspark.sql import SQLContext
from pyspark.sql.types import *

if __name__ == "__main__":
    sc = SparkContext(appName="Parquet2CSV")
    sqlContext = SQLContext(sc)
readdf = sqlContext.read.parquet('/home/sarvesh/Desktop/submissions-parquet')
    readdf.rdd.map(tuple).map(lambda row: str(row[0]) + "," + str(row[1]) + ","+ str(row[2]) + ","+ str(row[3])+ ","+ str(row[4])+","+ str(row[5])).saveAsTextFile("/home/sarvesh/Desktop/parquet-to-csv.csv")

# http://blogs.quovantis.com/how-to-convert-csv-to-parquet-files/

from pyspark.sql import SparkSession

spark = SparkSession \
    .builder \
    .appName("Python Spark SQL basic example") \
    .config("spark.some.config.option", "some-value") \
    .getOrCreate()

df = spark.read.csv("/Users/deepak/Repositories/Python-Competitive-Programming/Experiments/creditcard.csv", header=True, sep=",", inferSchema=True)

df.write.parquet('/Users/deepak/Repositories/Python-Competitive-Programming/Experiments/output-parquet')

data.count(), len(data.columns)
data.show(5)
data.printSchema()
data.select("Name","Platform","User_Score","User_Count").show(15, truncate=False)
data.describe(["User_Score","User_Count"]).show()
data.groupBy("Platform").count().orderBy("count", ascending=False).show(10)

condition1 = (data.User_Score.isNotNull()) | (data.User_Count.isNotNull())
condition2 = data.User_Score != "tbd"
data = data.filter(condition1).filter(condition2)

# https://towardsdatascience.com/pyspark-import-any-data-f2856cda45fd

# Check if table exists in Spark Catlogue
spark.catalog.tableExists("schema.dev.table_name")
```

### Glue Transformation from Aurora DB to Parquet in s3

```python
 import sys
 from awsglue.transforms import *
 from awsglue.utils import getResolvedOptions
 from pyspark.context import SparkContext
 from awsglue.context import GlueContext
 from awsglue.job import Job

 args = getResolvedOptions(sys.argv, ['JOB_NAME'])

 sc = SparkContext()
 glueContext = GlueContext(sc)
 spark = glueContext.spark_session
 job = Job(glueContext)
 job.init(args ['JOB_NAME'], args)

 datasource0 = glueContext.create_dynamic_frame.from_catalog(database = "aurora", table_name = "aurorasttash_website_live_userdevicesms_old", transformation_ctx = "datasource0")
 # datasource0 = glueContext.create_dynamic_frame_from_options("s3", {'paths': ["s3://example-migration-data/test"], 'recurse':True, 'groupFiles': 'inPartition', 'groupSize': '104857600'}, format="json")

 applymapping1 = ApplyMapping.apply(frame = datasource0, mappings = [("device_id", "string", "device_id", "string"), ("sender", "string", "sender", "string"), ("message_type", "string", "message_type", "string"), ("id", "int", "id", "int"), ("customer_id", "int", "customer_id", "int"), ("message", "string", "message", "string"), ("create_date", "timestamp", "create_date", "timestamp"), ("sms_time", "timestamp", "sms_time", "timestamp")], transformation_ctx = "applymapping1")

 resolvechoice2 = ResolveChoice.apply(frame = applymapping1, choice = "make_struct", transformation_ctx = "resolvechoice2")

 dropnullfields3 = DropNullFields.apply(frame = resolvechoice2, transformation_ctx = "dropnullfields3")
 # datasource_df = dropnullfields3.repartition(2)
 datasink4 = glueContext.write_dynamic_frame.from_options(frame = dropnullfields3, connection_type = "s3", connection_options = {"path": "s3://example-migration-data/glue/user_device_sms_old"}, format = "parquet", transformation_ctx = "datasink4")
 job.commit()
```

### PySpark Tutorial

```python
 # File location and type
 file_location = "/FileStore/tables/game_skater_stats.csv"
 file_type = "csv"

 # CSV options
 infer_schema = "true"
 first_row_is_header = "true"
 delimiter = ","

 # The applied options are for CSV files. For other file types, these will be ignored.
 df = spark.read.format(file_type) \
   .option("inferSchema", infer_schema) \
   .option("header", first_row_is_header) \
   .option("sep", delimiter) \
   .load(file_location)

 display(df)

 # how to take the dataframe from the past snippet and save it as a parquet file on DBFS, and then reload the dataframe from the saved parquet file.
 df.write.save('/FileStore/parquet/game_skater_stats',
                format='parquet')
 df = spark.read.load("/FileStore/parquet/game_skater_stats")
 display(df)

```

https://towardsdatascience.com/a-brief-introduction-to-pyspark-ff4284701873

### Queries

```python
table_df = table_df.union(table_df)

table_df.display()
table_df.show()
display(table_df)

table_df.count()

table_df.limit(10).display()

table_df_2.replace('Revenue Fee', 'Maintanence Fee').display()

# check column types
table_df.schema
table_df.dtypes

# Add a new column
table_df_2 = table_df.withColumn("bonus_amount", table_df.salary*0.3)
```

[Show() Vs Display(). To Display the dataframe in a tabular… | by Harun Raseed Basheer | Medium](https://medium.com/@harun.raseed093/show-vs-display-7a7185f3ef65)

#### Load testing data

```python
# Load the data from its source.
df = spark.read.load("/databricks-datasets/learning-spark-v2/people/people-10m.delta")

# Write the data to a table.

table_name = "people_10m"

df.write.saveAsTable(table_name)

# Load a table in spark dataframe
people_df = spark.read.table('people_10m')
display(people_df)

df = spark.sql('SELECT * FROM people_10m WHERE id >= 9999998')
```

#### Timestamps

```python
from pyspark.sql.functions import to_timestamp, lit

# add a new column with a specific date
specific_date = "2022-03-13 10:30:00"
df3 = df.withColumn("specific_date", to_timestamp(lit(specific_date)))

df2 = df.withColumn("pipelineAt", F.current_timestamp())
```

#### Querying postgres db using jdbc

```python
tablename = 'xyz'

# Load Table
source = f'"{tablename}"'

df = (spark.read.format("jdbc")
 .option("url", URL)
 .option("dbtable", f"(select * from {source} limit 1000)")
 .option("user", user)
 .option("password", password)
 .option("ssl", True)
 .option("sslmode", "require")
 .option("sslrootcert", ssl_path)
 .load())

print(df.count())
```
