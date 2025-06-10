# Optimizations

## Micro-partitions

All data in Snowflake tables is automatically divided into micro-partitions, which are contiguous units of storage. Each micro-partition contains between 50 MB and 500 MB of uncompressed data (note that the actual size in Snowflake is smaller because data is always stored compressed). Groups of rows in tables are mapped into individual micro-partitions, organized in a columnar fashion. This size and structure allows for extremely granular pruning of very large tables, which can be comprised of millions, or even hundreds of millions, of micro-partitions.

Snowflake stores metadata about all rows stored in a micro-partition, including:

- The range of values for each of the columns in the micro-partition.
- The number of distinct values.
- Additional properties used for both optimization and efficient query processing.

Used for fine-grained pruning for faster queries

## Snowflake Clustering

In Snowflake, clustering is a type of data partitioning, where unique cluster keys are specified for each table. Cluster keys are subsets of a table's columns that are used to co-locate data within the table. These keys are appropriate for comprehensive tables. The process of managing clustered data in a table is known as re-clustering.

Clustering keys are used to enhance query performance by physically organizing data within a table based on the values in one or more columns. Clustering helps to group similar data together, which can significantly improve the efficiency of certain types of queries.

### Benefits

#### Reduced Storage and I/O Costs

Clustering keys organize data on disk in a way that groups similar values together. This can lead to reduced storage space and I/O costs because the system can skip over irrelevant data during query execution.

#### Improved Query Performance

Queries that benefit the most from clustering are those that involve range-based filters or aggregations on columns used in the clustering key. For example, if your queries often filter or aggregate data based on a date range, clustering the table based on the date column can significantly improve query performance.

#### Avoiding Full Table Scans

When a table is not clustered, certain queries may require scanning the entire table to find relevant data. Clustering keys help avoid full table scans by grouping similar data together, reducing the amount of data that needs to be scanned.

#### Better Join Performance

If your queries involve joins between multiple tables, clustering keys can improve join performance. When tables are clustered on the columns used in join conditions, the system can locate matching rows more efficiently.

#### Considerations for Large Tables

Clustering keys are particularly beneficial for large tables. As tables grow in size, the advantages of clustering become more pronounced.

#### Choosing the Right Clustering Key

It's essential to choose an appropriate clustering key based on the query patterns and access patterns of your workload. Typically, columns used in WHERE clauses or frequently used for filtering and grouping are good candidates for clustering keys.

```sql
CREATE TABLE your_table (
    column1 INT,
    column2 STRING,
    ...
    CLUSTER BY (column1, column2)
);
```

It's worth noting that while clustering can significantly improve performance for certain types of queries, it might not be beneficial for all workloads. It's recommended to analyze query patterns and performance characteristics before deciding to use clustering keys.

#### Maintenance Considerations

There are no indices in Snowflake. Instead you can use Data Clustering.

Clustering is not a one-time operation. It's an ongoing process, and the system will automatically reorganize data based on the clustering key during certain operations, such as data loading.

[Micro-partitions & Data Clustering | Snowflake Documentation](https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions)

##### Clustering Information Maintained for Micro-partitions

Snowflake maintains clustering metadata for the micro-partitions in a table, including:

- The total number of micro-partitions that comprise the table.
- The number of micro-partitions containing values that overlap with each other (in a specified subset of table columns).
- The depth of the overlapping micro-partitions.

## Data compression and metadata storage

### Columnar Storage

Snowflake uses a columnar storage format, where data for each column is stored separately on disk. This format improves compression and accelerates query performance, especially for analytical workloads where only specific columns need to be accessed.

### Automatic Compression

Snowflake automatically applies compression to stored data, reducing storage requirements and improving query performance. Compression is applied at the block level, and various compression algorithms are used based on the characteristics of the data.

### Automatic Clustering

Snowflake has the ability to automatically cluster data based on clustering keys. Clustering organizes data physically on disk, grouping similar values together. This can further improve compression ratios and accelerate query performance by reducing the amount of data that needs to be scanned.

### Metadata Storage Optimization

Snowflake efficiently manages metadata storage. Metadata, which includes information about tables, columns, and other database objects, is stored separately from the user data. This separation allows Snowflake to optimize metadata storage independently.
