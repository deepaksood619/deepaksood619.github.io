# Databricks in 5 minutes

## The next command creates a table from a Databricks dataset

```sql
DROP TABLE IF EXISTS diamonds;

CREATE TABLE diamonds
USING csv
OPTIONS (path "/databricks-datasets/Rdatasets/data-001/csv/ggplot2/diamonds.csv", header "true")

SELECT * from diamonds

SELECT count(*) from diamonds
```

```python
diamonds = spark.read.csv("/databricks-datasets/Rdatasets/data-001/csv/ggplot2/diamonds.csv", header="true", inferSchema="true")
diamonds.write.format("delta").mode("overwrite").save("/delta/diamonds")
```

```sql
DROP TABLE IF EXISTS diamonds;
CREATE TABLE diamonds USING DELTA LOCATION '/delta/diamonds/'
```

## The next command manipulates the data and displays the results

Specifically, the command:

1. Selects color and price columns, averages the price, and groups and orders by color.
1. Displays a table of the results.

```sql
SELECT color, avg(price) AS price FROM diamonds GROUP BY color ORDER BY color
```

## Repeat the same operations using Python DataFrame API. to a Python interpreter, include the `%python` magic command

The next command creates a DataFrame from a Databricks dataset

```python
diamonds = spark.read.csv("/databricks-datasets/Rdatasets/data-001/csv/ggplot2/diamonds.csv", header="true", inferSchema="true")
```

## The next command manipulates the data and displays the results

```python
from pyspark.sql.functions import avg

display(diamonds.select("color","price").groupBy("color").agg(avg("price")).sort("color"))
```

## Others

### Saving data from SQL to spark dataframe

`variable_to_save = _sqldf`

### Tables

#### Managed Tables

- Data management: Spark manages both the metadata and the data
- Data location: Data is saved in the Spark SQL warehouse directory `/user/hive/warehouse`. Metadata is saved in a meta-store of relational entities.
- Data deletion: The metadata and the data will be deleted after deleting the table.

#### Unmanaged/External Tables

- Data management: Spark manages only the metadata, and the data itself is not controlled by Spark.
- Data location: Source data location is required to create a table.
- Data deletion: Only the metadata will be deleted. The tables are saved in the external location.

## Links

[Five Ways To Create Tables In Databricks | by Amy @GrabNGoInfo | GrabNGoInfo | Medium](https://medium.com/grabngoinfo/five-ways-to-create-tables-in-databricks-cd3847cfc3aa)
