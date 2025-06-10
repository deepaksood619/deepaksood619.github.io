# Databricks in 5 minutes

## Databricks Input Widget Parameters

There are 4 types of widgets:

- `text`: Input a value in a text box.
- `dropdown`: Select a value from a list of provided values.
- `combobox`: Combination of text and dropdown. Select a value from a provided list or input one in the text box.
- `multiselect`: Select one or more values from a list of provided values.

```python
# Define Variables

dbutils.widgets.text('widget_name','')
tablename = dbutils.widgets.get('widget_name')

dbutils.widgets.remove("widget_name")

# help docs
dbutils.widgets.help("dropdown")

dbutils.widgets.dropdown("state", "CA", ["CA", "IL", "MI", "NY", "OR", "VA"])
dbutils.widgets.text("database", "customers_dev")

dbutils.notebook.run(i['nb_path'], i['timeout'], i['args']).split(';')


user = meta_info.user
password = dbutils.secrets.get('secret','password')
```

## Create a table from a Databricks dataset

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

## Use python objects in sql query

```python
merkle_date=dbutils.widgets.get('merkle_date')
```

```sql
%sql
select merkle_date, count(1) as rows
from merkle_tree where merkle_date = '$merkle_date'
group by 1
```

## Others

### Saving data from SQL to spark dataframe

`variable_to_save = _sqldf`

### Tables

#### Managed Tables

- Data management: Spark manages both the metadata and the data
- Data location: Data is saved in the Spark SQL warehouse directory `/user/hive/warehouse`. Metadata is saved in a meta-store of relational entities.
- Data deletion: The metadata and the data will be deleted after deleting the table.

#### Unmanaged/External Tables

- Data management: Spark manages only the metadata, and the data itself is not controlled by Spark.
- Data location: Source data location is required to create a table.
- Data deletion: Only the metadata will be deleted. The tables are saved in the external location.

## Links

[Five Ways To Create Tables In Databricks | by Amy @GrabNGoInfo | GrabNGoInfo | Medium](https://medium.com/grabngoinfo/five-ways-to-create-tables-in-databricks-cd3847cfc3aa)

[Create and share Lakeview dashboards | Databricks on AWS](https://docs.databricks.com/en/dashboards/lakeview.html)
