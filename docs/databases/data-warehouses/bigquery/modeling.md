# Modeling

### Dataset and table configurations

BigQuery offers a number of ways to configure your data and tables such as partitioning, clustering, and data locality. These configurations can help maintain large tables and reduce the overall data load and response time for your queries, thereby increasing the operational efficiency of your data workloads.

#### Partitioning

A partitioned table is a table that is divided into segments, called partitions, that make it easier to manage and query your data. Users typically split large tables into many smaller partitions, where each partition contains a day’s worth of data. Partition management is a key determinant of BigQuery’s performance and cost when querying over a specific date range because it helps BigQuery scan less data per query. For examples of partitioned table queries, see the [EDW to BigQuery migration guide](https://cloud.google.com/solutions/migration/dw2bq/dw-bq-performance-optimization#partitioning).

There are three types of table partitioning in BigQuery:

- [Tables partitioned by ingestion time:](https://cloud.google.com/bigquery/docs/creating-partitioned-tables) Tables are partitioned based on the data’s ingestion time.
- [Tables partitioned by column](https://cloud.google.com/bigquery/docs/partitioned-tables#partitioned_tables): Tables are partitioned based on a TIMESTAMP or DATE column.
- [Tables partitioned by integer range](https://cloud.google.com/bigquery/docs/creating-integer-range-partitions): Tables are partitioned based on an integer column.

A column-based time-partitioned table obviates the need to maintain partition awareness independent from the existing data filtering on the bound column. Data written to a column-based time-partitioned table is automatically delivered to the appropriate partition based on the value of the data. Similarly, queries that express filters on the partitioning column can reduce the overall data scanned, which can yield improved performance and reduced query cost for on-demand queries.

BigQuery column-based partitioning is similar to Redshift’s column-based partitioning, with a slightly different motivation. Redshift uses column-based key distribution to try to keep related data stored together within the same compute node, ultimately minimizing data shuffling that occurs during joins and aggregations. BigQuery separates storage from compute, so it leverages column-based partitioning to minimize the amount of data that [slots](https://cloud.google.com/bigquery/docs/slots) read from disk.

Once slot workers read their data from disk, BigQuery can automatically determine more optimal data sharding and quickly repartition data using BigQuery’s in-memory shuffle service.

For more information, see [Introduction to partitioned tables](https://cloud.google.com/bigquery/docs/partitioned-tables).

#### Clustering and sort keys

Redshift supports specifying table columns as either [compound](https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-compound)  or [interleaved](https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved) sort keys. In BigQuery, you can specify compound sort keys by [clustering](https://cloud.google.com/bigquery/docs/clustered-tables#overview) your table. BigQuery clustered tables improve query performance because the table data is automatically sorted based on the contents of up to four columns specified in the table’s schema. These columns are used to colocate related data. The order of the clustering columns you specify is important because it determines the sort order of the data.

Clustering can improve the performance of certain types of queries, such as queries that use filter clauses and queries that aggregate data. When data is written to a clustered table by a query job or a load job, BigQuery automatically sorts the data using the values in the clustering columns. These values are used to organize the data into multiple blocks in BigQuery storage. When you submit a query containing a clause that filters data based on the clustering columns, BigQuery uses the sorted blocks to eliminate scans of unnecessary data.

Similarly, when you submit a query that aggregates data based on the values in the clustering columns, performance is improved because the sorted blocks colocate rows with similar values.

Use clustering in the following circumstances:

- Compound sort keys are configured in your Redshift tables.
- Filtering or aggregation is configured against particular columns in your queries.

When you use clustering and partitioning together, your data can be partitioned by a date, timestamp, or integer column and then clustered on a different set of columns (up to four total clustered columns). In this case, data in each partition is clustered based on the values of the clustering columns.

When you specify sort keys in tables in Redshift, depending on the load on the system, Redshift automatically initiates the sort using your own cluster’s compute capacity. You may even need to manually run the [VACUUM](https://docs.aws.amazon.com/redshift/latest/dg/r_VACUUM_command.html) command if you want to fully sort your table data as soon as possible, for example, after a large data load. BigQuery [automatically handles](https://cloud.google.com/bigquery/docs/clustered-tables#automatic_re-clustering) this sorting for you and does not use your allocated BigQuery slots therefore not affecting the performance of any of your queries.

For more information about working with clustered tables, see the [Introduction to clustered tables](https://cloud.google.com/bigquery/docs/clustered-tables).

#### Distribution keys

Redshift uses distribution keys to optimize the location of data blocks to execute its queries. BigQuery does not use distribution keys because it automatically determines and adds stages in a query plan (while the query is running) to improve data distribution throughout query workers.

#### External sources

If you use [Redshift Spectrum](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html) to query data on Amazon S3, you can similarly use BigQuery’s external data source feature to [query data directly from files on Cloud Storage](https://cloud.google.com/bigquery/external-data-cloud-storage).

In addition to querying data in Cloud Storage, BigQuery offers [federated query functions](https://cloud.google.com/bigquery/docs/reference/standard-sql/federated_query_functions) for [querying directly](https://cloud.google.com/bigquery/external-data-sources) from the following products:

- [Cloud SQL](https://cloud.google.com/bigquery/docs/cloud-sql-federated-queries) (fully managed MySQL or PostgreSQL)
- [Cloud Bigtable](https://cloud.google.com/bigquery/external-data-bigtable) (fully managed NoSQL)
- [Drive](https://cloud.google.com/bigquery/external-data-drive) (CSV, JSON, Avro, Sheets)

#### Data locality

You can create your BigQuery datasets in both [regional](https://cloud.google.com/bigquery/docs/locations#regional-locations) and [multi-regional](https://cloud.google.com/bigquery/docs/locations#multi-regional-locations) locations, whereas Redshift only offers [regional](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#az-considerations) locations. BigQuery determines the location to run your load, query, or export jobs based on the datasets referenced in the request. Refer to the BigQuery [location considerations](https://cloud.google.com/bigquery/docs/locations#data-locations) for tips on working with regional and multi-regional datasets.

### Data type mapping in BigQuery

Redshift data types differ from BigQuery data types. For more details on BigQuery data types, refer to the official [documentation](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types).

BigQuery also supports the following data types, which do not have a direct Redshift analog.

- [ARRAY](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#array-type)
- [BYTES](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#bytes-type)
- [GEOGRAPHY](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#geography-type)
- [TIME](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#time-type)
- [STRU](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#struct-type)
