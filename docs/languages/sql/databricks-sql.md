# Databricks SQL

[SQL language reference | Databricks on AWS](https://docs.databricks.com/sql/language-manual/index.html)

## Functions

### Built-in Functions

[Built-in functions | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-functions-builtin.html)

[str_to_map function | Databricks on AWS](https://docs.databricks.com/sql/language-manual/functions/str_to_map.html)

## Materialized Views

```sql
create materialized view schema.dev.test_materialized_view_job_run snapshot as select * from schema.dev.job_run limit 100;
```

Materialized view only run from DBSQL Warehouse and not from notebook.
