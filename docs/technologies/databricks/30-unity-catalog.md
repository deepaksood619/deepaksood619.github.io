# Unity Catalog

Unity Catalog is a unified governance solution for all data and AI assets including files, tables, machine learning models and dashboards in your lakehouse on any cloud.

- Centralized governance for data and AI
- Built-in data search and discovery
- Performance and scale
- Automated lineage for all workloads
- Integrated with your existing tools
- Unified and secure data search experience

**Permissioning -** Permissions do inherit downwards, but ownership does not.

[Work with Unity Catalog and the legacy Hive metastore | Databricks on AWS](https://docs.databricks.com/data-governance/unity-catalog/hive-metastore.html#)

[Work with Unity Catalog and the legacy Hive metastore - Azure Databricks | Microsoft Learn](https://learn.microsoft.com/en-us/azure/databricks/data-governance/unity-catalog/hive-metastore)
[Upgrade Your Objects in Hive Metastore to Unity Catalog - The Databricks Blog](https://www.databricks.com/blog/2022/11/03/how-seamlessly-upgrade-your-hive-metastore-objects-unity-catalog-metastore-using)

[Unity Catalog best practices | Databricks on AWS](https://docs.databricks.com/data-governance/unity-catalog/best-practices.html)

## Create tables

### Managed tables

Managed tables are the default way to create tables in Unity Catalog. Unity Catalog manages the lifecycle and file layout for these tables. You should not use tools outside of Databricks to manipulate files in these tables directly.

By default, managed tables are stored in the root storage location that you configure when you create a metastore. You can optionally specify managed table storage locations at the catalog or schema levels, overriding the root storage location. Managed tables always use the [Delta](https://docs.databricks.com/delta/index.html) table format.

When a managed table is dropped, its underlying data is deleted from your cloud tenant within 30 days.

### External tables

External tables are tables whose data is stored outside of the managed storage location specified for the metastore, catalog, or schema. Use external tables only when you require direct access to the data outside of Databricks clusters or Databricks SQL warehouses.

When you run `DROP TABLE` on an external table, Unity Catalog does not delete the underlying data. To drop a table you must be its owner. You can manage privileges on external tables and use them in queries in the same way as managed tables. To create an external table with SQL, specify a `LOCATION` path in your `CREATE TABLE` statement. External tables can use the following file formats:

- DELTA
- CSV
- JSON
- AVRO
- PARQUET
- ORC
- TEXT

#### Fully delete an external table

```sql
DROP TABLE <table_name>
dbutils.fs.rm("s3://<path_to_table>", True)
```

[Create tables | Databricks on AWS](https://docs.databricks.com/data-governance/unity-catalog/create-tables.html#)

## Links

[YouTube](https://www.youtube.com/watch?v=KjtYgZDsY7E)
