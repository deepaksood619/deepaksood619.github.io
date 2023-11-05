# Databricks SQL

[SQL language reference | Databricks on AWS](https://docs.databricks.com/sql/language-manual/index.html)

## Query

### [set_operator](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-setops.html)

A construct combining subqueries using `UNION`, `EXCEPT`, or `INTERSECT` operators.

### [ORDER BY](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-orderby.html)

An ordering of the rows of the complete result set of the query. The output rows are ordered across the partitions. This parameter is mutually exclusive with `SORT BY`, `CLUSTER BY`, and `DISTRIBUTE BY` and cannot be specified together.

### [DISTRIBUTE BY](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-distributeby.html)

A set of expressions by which the result rows are repartitioned. This parameter is mutually exclusive with `ORDER BY` and `CLUSTER BY` and cannot be specified together.

### [SORT BY](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-sortby.html)

An ordering by which the rows are ordered within each partition. This parameter is mutually exclusive with `ORDER BY` and `CLUSTER BY` and cannot be specified together.

### [CLUSTER BY](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-clusterby.html)

A set of expressions that is used to repartition and sort the rows. Using this clause has the same effect of using `DISTRIBUTE BY` and `SORT BY` together.

### [WINDOW](https://docs.databricks.com/sql/language-manual/sql-ref-syntax-qry-select-named-window.html)

Defines named window specifications that can be shared by multiple [Window functions](https://docs.databricks.com/sql/language-manual/sql-ref-window-functions.html) in the `select_query`.

### Lateral View - map / explode

```sql
WITH data AS (
 SELECT
  abc,
  cde,
  count(1) AS nodes
 FROM
  table_name
 WHERE
  filter_col = 'filter_value'
 GROUP BY
  ALL
),
-- Example of storing table as map in a single cell
dummy_data AS (
 SELECT
  array_agg((abc, cde, nodes)) AS column_name
 FROM
  DATA
)
-- Go from map cell to rows and columns
SELECT
 m['abc'] AS abc,
 m['cde'] AS cde,
 m['nodes'] AS nodes
FROM
 dummy_data LATERAL VIEW explode(column_name) AS m
```

[LATERAL VIEW clause | Databricks](https://docs.databricks.com/en/sql/language-manual/sql-ref-syntax-qry-select-lateral-view.html)

## Materialized Views

```sql
create materialized view schema.dev.test_materialized_view_job_run snapshot as select * from schema.dev.job_run limit 100;
```

Materialized view only run from DBSQL Warehouse and not from notebook.

## Explain

Provides the logical or physical plans for an input statement. By default, this clause provides information about a physical plan only.

`EXPLAIN [ EXTENDED | CODEGEN | COST | FORMATTED ] statement`

- **EXTENDED** - Generates parsed logical plan, analyzed logical plan, optimized logical plan and physical plan. Parsed Logical plan is a unresolved plan that extracted from the query. Analyzed logical plans transforms which translates unresolvedAttribute and unresolvedRelation into fully typed objects. The optimized logical plan transforms through a set of optimization rules, resulting in the physical plan.
- **CODEGEN** - Generates code for the statement, if any and a physical plan.
- **COST** - If plan node statistics are available, generates a logical plan and the statistics.
- **FORMATTED** - Generates two sections: a physical plan outline and node details.
- **statement** - A SQL statement to be explained.

## Examples

```sql
CREATE TABLE student_copy AS SELECT * FROM student;

SHOW COLUMNS IN `default`.test ;

DESCRIBE TABLE `default`.test ;

SELECT createdAtDate, subject, count(*) FROM students group by ALL ORDER BY ALL;
```

### Print all

```python
schemas = ['bronze', 'silver', 'gold']

for each_schema in schemas:
 df = spark.sql(f"SHOW TABLES IN test.{each_schema}").collect()

 for each in df:
  print("\n", each)
  print(spark.sql(f"DESCRIBE test.{each_schema}.{each[1]}").collect())
```

## Others

[How to view all databases, tables, and columns in Databricks | by Kristo Raun | Helmes People | Medium](https://medium.com/helmes-people/how-to-view-all-databases-tables-and-columns-in-databricks-9683b12fee10)
