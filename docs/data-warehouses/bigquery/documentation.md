# Documentation

[Enable the BigQuery sandbox  \|  Google Cloud](https://cloud.google.com/bigquery/docs/sandbox)

- [Product overview](https://cloud.google.com/bigquery/docs/introduction)

## How does BigQuery work?

- [Storage](https://cloud.google.com/bigquery/docs/storage_overview)
- [Analytics](https://cloud.google.com/bigquery/docs/query-overview)
- [Administration](https://cloud.google.com/bigquery/docs/admin-intro)

## Get started

- [Use the BigQuery sandbox](https://cloud.google.com/bigquery/docs/sandbox)

## Quickstarts

### Try the Cloud console

- [Query public data](https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- [Load and query data](https://cloud.google.com/bigquery/docs/quickstarts/load-data-console)
- [Enable asset management](https://cloud.google.com/bigquery/docs/enable-assets)

### Try the command-line tool

- [Query public data](https://cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-bq)
- [Load and query data](https://cloud.google.com/bigquery/docs/quickstarts/load-data-bq)

- [Try the client libraries](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)

## Explore BigQuery tools

- [Explore the console](https://cloud.google.com/bigquery/docs/bigquery-web-ui)
- [Explore the command-line tool](https://cloud.google.com/bigquery/docs/bq-command-line-tool)

## Migrate

- [Overview](https://cloud.google.com/bigquery/docs/migration/migration-overview)

## Migrate a data warehouse

- [Introduction to BigQuery Migration Service](https://cloud.google.com/bigquery/docs/migration-intro)
- [Migration assessment](https://cloud.google.com/bigquery/docs/migration-assessment)
- [Migrate schema and data](https://cloud.google.com/bigquery/docs/migration/schema-data-overview)
- [Migrate data pipelines](https://cloud.google.com/bigquery/docs/migration/pipelines)

### Migrate SQL

- [Translate SQL queries interactively](https://cloud.google.com/bigquery/docs/interactive-sql-translator)
- [Translate SQL queries using the API](https://cloud.google.com/bigquery/docs/api-sql-translator)
- [Translate SQL queries in batch](https://cloud.google.com/bigquery/docs/batch-sql-translator)
- [Generate metadata for translation and assessment](https://cloud.google.com/bigquery/docs/generate-metadata)
- [Transform SQL translations with YAML](https://cloud.google.com/bigquery/docs/config-yaml-translation)
- [Map SQL object names for batch translation](https://cloud.google.com/bigquery/docs/output-name-mapping)

## Migration guides

### Amazon Redshift

- [Migration overview](https://cloud.google.com/bigquery/docs/migration/redshift-overview)
- [Migrate Amazon Redshift schema and data](https://cloud.google.com/bigquery/docs/migration/redshift)
- [Migrate Amazon Redshift schema and data when using a VPC](https://cloud.google.com/bigquery/docs/migration/redshift-vpc)
- [SQL translation reference](https://cloud.google.com/bigquery/docs/migration/redshift-sql)

### Apache Hive

- [Migration overview](https://cloud.google.com/bigquery/docs/migration/hive-overview)
- [Migrate Apache Hive schema and data](https://cloud.google.com/bigquery/docs/migration/hive)
- [SQL translation reference](https://cloud.google.com/bigquery/docs/migration/hive-sql)

### IBM Netezza

Netezza is ==a data warehouse system that offers analytics, AI, and machine learning (ML) capabilities==. It's a subsidiary of IBM, and is available on IBM Cloud, AWS, and Microsoft Azure.

#### Features

- **Scalability**: Scales up and down based on usage
- **Open formats**: Supports open formats like Parquet and Iceberg for secure data sharing
- **In-database analytics**: Allows users to run complex queries and build models directly in the database
- **Geospatial capabilities**: Built-in geospatial capabilities for analyzing data
- **Solid-state disks**: Data is stored on solid-state disks (SSDs) that are self-encrypting drives (SEDs)

- [Migrate from IBM Netezza](https://cloud.google.com/bigquery/docs/migration/netezza)
- [SQL translation reference](https://cloud.google.com/bigquery/docs/migration/netezza-sql)

### Oracle

- [Migration guide](https://cloud.google.com/bigquery/docs/migration/oracle-migration)
- [SQL translation reference](https://cloud.google.com/bigquery/docs/migration/oracle-sql)

### Snowflake

- [Migration guide](https://cloud.google.com/bigquery/docs/migration/snowflake-overview)
- [SQL translation reference](https://cloud.google.com/bigquery/docs/migration/snowflake-sql)

### Teradata

- [Migration overview](https://cloud.google.com/bigquery/docs/migration/teradata-overview)
- [Migrate Teradata schema and data](https://cloud.google.com/bigquery/docs/migration/teradata)
- [Migration tutorial](https://cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- [SQL translation reference](https://cloud.google.com/bigquery/docs/migration/teradata-sql)

## Design

- [Organize resources](https://cloud.google.com/bigquery/docs/resource-hierarchy)
- [Understand editions](https://cloud.google.com/bigquery/docs/editions-intro)

## Datasets

- [Introduction](https://cloud.google.com/bigquery/docs/datasets-intro)
- [Create datasets](https://cloud.google.com/bigquery/docs/datasets)
- [List datasets](https://cloud.google.com/bigquery/docs/listing-datasets)
- [Update dataset properties](https://cloud.google.com/bigquery/docs/updating-datasets)
- [Cross-region replication](https://cloud.google.com/bigquery/docs/data-replication)
- [Managed disaster recovery](https://cloud.google.com/bigquery/docs/managed-disaster-recovery)
- [Dataset data retention](https://cloud.google.com/bigquery/docs/time-travel)

## Tables

### BigQuery tables

- [Introduction](https://cloud.google.com/bigquery/docs/tables-intro)
- [Create and use tables](https://cloud.google.com/bigquery/docs/tables)
- [BigQuery tables for Apache Iceberg](https://cloud.google.com/bigquery/docs/iceberg-tables)

- Specify table schemas

    - [Specify a schema](https://cloud.google.com/bigquery/docs/schemas)
    - [Specify nested and repeated columns](https://cloud.google.com/bigquery/docs/nested-repeated)
    - [Specify default column values](https://cloud.google.com/bigquery/docs/default-values)

- Segment with partitioned tables

    - [Introduction](https://cloud.google.com/bigquery/docs/partitioned-tables)
    - [Create partitioned tables](https://cloud.google.com/bigquery/docs/creating-partitioned-tables)
    - [Manage partitioned tables](https://cloud.google.com/bigquery/docs/managing-partitioned-tables)
    - [Query partitioned tables](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)

- Optimize with clustered tables

    - [Introduction](https://cloud.google.com/bigquery/docs/clustered-tables)
    - [Create and use clustered tables](https://cloud.google.com/bigquery/docs/creating-clustered-tables)
    - [Query clustered tables](https://cloud.google.com/bigquery/docs/querying-clustered-tables)

### External tables

- [Introduction](https://cloud.google.com/bigquery/docs/external-data-sources)

- Types of external tables

    - [BigLake external tables](https://cloud.google.com/bigquery/docs/biglake-intro)
    - [BigQuery Omni](https://cloud.google.com/bigquery/docs/omni-introduction)
    - [Object tables](https://cloud.google.com/bigquery/docs/object-table-introduction)
    - [External tables](https://cloud.google.com/bigquery/docs/external-tables)

- [External table definition file](https://cloud.google.com/bigquery/docs/external-table-definition)
- [Externally partitioned data](https://cloud.google.com/bigquery/docs/hive-partitioned-queries)
- [Use metadata caching](https://cloud.google.com/bigquery/docs/metadata-caching)
- [Amazon S3 BigLake external tables](https://cloud.google.com/bigquery/docs/omni-aws-create-external-table)
- [BigLake external tables for Apache Iceberg](https://cloud.google.com/bigquery/docs/iceberg-external-tables)
- [Azure Blob Storage BigLake tables](https://cloud.google.com/bigquery/docs/omni-azure-create-external-table)
- [Bigtable external table](https://cloud.google.com/bigquery/docs/create-bigtable-external-table)
- [BigLake external tables for Cloud Storage](https://cloud.google.com/bigquery/docs/create-cloud-storage-table-biglake)
- [Cloud Storage object tables](https://cloud.google.com/bigquery/docs/object-tables)
- [Cloud Storage external tables](https://cloud.google.com/bigquery/docs/external-data-cloud-storage)
- [Delta Lake BigLake tables](https://cloud.google.com/bigquery/docs/create-delta-lake-table)
- [Google Drive external tables](https://cloud.google.com/bigquery/docs/external-data-drive)

## Views

### Logical views

- [Introduction](https://cloud.google.com/bigquery/docs/views-intro)
- [Create views](https://cloud.google.com/bigquery/docs/views)
- [Get information about views](https://cloud.google.com/bigquery/docs/view-metadata)
- [Manage views](https://cloud.google.com/bigquery/docs/managing-views)

### Materialized views

- [Introduction](https://cloud.google.com/bigquery/docs/materialized-views-intro)
- [Create materialized views](https://cloud.google.com/bigquery/docs/materialized-views-create)
- [Create materialized view replicas](https://cloud.google.com/bigquery/docs/materialized-view-replicas-create)

## Routines

- [Manage routines](https://cloud.google.com/bigquery/docs/routines)
- [User-defined functions](https://cloud.google.com/bigquery/docs/user-defined-functions)
- [User-defined aggregate functions](https://cloud.google.com/bigquery/docs/user-defined-aggregates)
- [Table functions](https://cloud.google.com/bigquery/docs/table-functions)
- [Remote functions](https://cloud.google.com/bigquery/docs/remote-functions)
- [SQL stored procedures](https://cloud.google.com/bigquery/docs/procedures)
- [Stored procedures for Apache Spark](https://cloud.google.com/bigquery/docs/spark-procedures)
- [Analyze object tables by using remote functions](https://cloud.google.com/bigquery/docs/object-table-remote-function)
- [Remote functions and Translation API tutorial](https://cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)

## Connections

- [Introduction](https://cloud.google.com/bigquery/docs/connections-api-intro)
- [Amazon S3 connection](https://cloud.google.com/bigquery/docs/omni-aws-create-connection)
- [Apache Spark connection](https://cloud.google.com/bigquery/docs/connect-to-spark)
- [Azure Blob Storage connection](https://cloud.google.com/bigquery/docs/omni-azure-create-connection)
- [Cloud resource connection](https://cloud.google.com/bigquery/docs/create-cloud-resource-connection)
- [Spanner connection](https://cloud.google.com/bigquery/docs/connect-to-spanner)
- [Cloud SQL connection](https://cloud.google.com/bigquery/docs/connect-to-sql)
- [AlloyDB connection](https://cloud.google.com/bigquery/docs/connect-to-alloydb)
- [SAP Datasphere connection](https://cloud.google.com/bigquery/docs/connect-to-sap-datasphere)
- [Manage connections](https://cloud.google.com/bigquery/docs/working-with-connections)
- [Configure connections with network attachments](https://cloud.google.com/bigquery/docs/connections-with-network-attachment)

## Indexes

### Search indexes

- [Introduction](https://cloud.google.com/bigquery/docs/search-intro)
- [Manage search indexes](https://cloud.google.com/bigquery/docs/search-index)

### Vector indexes

- [Introduction](https://cloud.google.com/bigquery/docs/vector-search-intro)
- [Manage vector indexes](https://cloud.google.com/bigquery/docs/vector-index)

## Load, transform, and export

- [Introduction](https://cloud.google.com/bigquery/docs/load-transform-export-intro)

## Load data

- [Introduction](https://cloud.google.com/bigquery/docs/loading-data)

### BigQuery Data Transfer Service

- [Introduction](https://cloud.google.com/bigquery/docs/dts-introduction)
- [Data location and transfers](https://cloud.google.com/bigquery/docs/dts-locations)
- [Authorize transfers](https://cloud.google.com/bigquery/docs/dts-authentication-authorization)
- [Enable transfers](https://cloud.google.com/bigquery/docs/enable-transfer-service)
- [Manage transfers](https://cloud.google.com/bigquery/docs/working-with-transfers)
- [Transfer run notifications](https://cloud.google.com/bigquery/docs/transfer-run-notifications)
- [Troubleshoot transfer configurations](https://cloud.google.com/bigquery/docs/transfer-troubleshooting)
- [Use service accounts](https://cloud.google.com/bigquery/docs/use-service-accounts)
- [Use third-party transfers](https://cloud.google.com/bigquery/docs/third-party-transfer)
- [Use custom organization policies](https://cloud.google.com/bigquery/docs/transfer-custom-constraints)
- [Data source change log](https://cloud.google.com/bigquery/docs/transfer-changes)

- Transfer guides

    - Amazon S3

        - [Introduction](https://cloud.google.com/bigquery/docs/s3-transfer-intro)
        - [Schedule transfers](https://cloud.google.com/bigquery/docs/s3-transfer)
        - [Transfer runtime parameters](https://cloud.google.com/bigquery/docs/s3-transfer-parameters)

    - Azure Blob Storage

        - [Introduction](https://cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
        - [Schedule transfers](https://cloud.google.com/bigquery/docs/blob-storage-transfer)
        - [Transfer runtime parameters](https://cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)

    - Campaign Manager

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
        - [Report transformation](https://cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)

    - Cloud Storage

        - [Introduction](https://cloud.google.com/bigquery/docs/cloud-storage-transfer-overview)
        - [Schedule transfers](https://cloud.google.com/bigquery/docs/cloud-storage-transfer)
        - [Transfer runtime parameters](https://cloud.google.com/bigquery/docs/gcs-transfer-parameters)

    - Comparison Shopping Service Center

        - [Introduction](https://cloud.google.com/bigquery/docs/css-center-transfer)
        - [Schedule transfers](https://cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
        - [Transfer report schema](https://cloud.google.com/bigquery/docs/css-center-products-schema)

    - Display & Video 360

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/display-video-transfer)
        - [Report transformation](https://cloud.google.com/bigquery/docs/display-video-transformation)

    - Facebook Ads

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/facebook-ads-transfer)
        - [Report transformation](https://cloud.google.com/bigquery/docs/facebook-ads-transformation)

    - Google Ad Manager

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
        - [Report transformation](https://cloud.google.com/bigquery/docs/doubleclick-publisher-transformation)

    - Google Ads

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/google-ads-transfer)
        - [Report transformation](https://cloud.google.com/bigquery/docs/google-ads-transformation)

    - Google Merchant Center

        - [Introduction](https://cloud.google.com/bigquery/docs/merchant-center-transfer)
        - [Schedule transfers](https://cloud.google.com/bigquery/docs/merchant-center-transfer-schedule-transfers)
        - Transfer report schema

            - [Best Sellers table](https://cloud.google.com/bigquery/docs/merchant-center-best-sellers-schema)
            - [Local Inventories table](https://cloud.google.com/bigquery/docs/merchant-center-local-inventories-schema)
            - [Performance table](https://cloud.google.com/bigquery/docs/merchant-center-performance-schema)
            - [Price Benchmarks table](https://cloud.google.com/bigquery/docs/merchant-center-price-benchmarks-schema)
            - [Price Competitiveness table](https://cloud.google.com/bigquery/docs/merchant-center-price-competitiveness-schema)
            - [Price Insights table](https://cloud.google.com/bigquery/docs/merchant-center-price-insights-schema)
            - [Product Inventory table](https://cloud.google.com/bigquery/docs/merchant-center-product-inventory-schema)
            - [Product Targeting table](https://cloud.google.com/bigquery/docs/merchant-center-product-targeting-schema)
            - [Products table](https://cloud.google.com/bigquery/docs/merchant-center-products-schema)
            - [Regional Inventories table](https://cloud.google.com/bigquery/docs/merchant-center-regional-inventories-schema)
            - [Top Brands table](https://cloud.google.com/bigquery/docs/merchant-center-top-brands-schema)
            - [Top Products table](https://cloud.google.com/bigquery/docs/merchant-center-top-products-schema)

    - Google Play

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/play-transfer)
        - [Transfer report transformation](https://cloud.google.com/bigquery/docs/play-transformation)

    - Oracle

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/oracle-transfer)

    - Salesforce

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/salesforce-transfer)

    - Salesforce Marketing Cloud

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/sfmc-transfer)

    - Search Ads 360

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/search-ads-transfer)
        - [Transfer report transformation](https://cloud.google.com/bigquery/docs/search-ads-transformation)
        - [Migration guide](https://cloud.google.com/bigquery/docs/search-ads-migration-guide)

    - ServiceNow

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/servicenow-transfer)

    - YouTube channel

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/youtube-channel-transfer)
        - [Transfer report transformation](https://cloud.google.com/bigquery/docs/youtube-channel-transformation)

    - YouTube content owner

        - [Schedule transfers](https://cloud.google.com/bigquery/docs/youtube-content-owner-transfer)
        - [Transfer report transformation](https://cloud.google.com/bigquery/docs/youtube-content-owner-transformation)

### Batch load data

- [Introduction](https://cloud.google.com/bigquery/docs/batch-loading-data)
- [Auto-detect schemas](https://cloud.google.com/bigquery/docs/schema-detect)
- [Load Avro data](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-avro)
- [Load Parquet data](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-parquet)
- [Load ORC data](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-orc)
- [Load CSV data](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [Load JSON data](https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-json)
- [Load externally partitioned data](https://cloud.google.com/bigquery/docs/hive-partitioned-loads-gcs)
- [Load data from a Datastore export](https://cloud.google.com/bigquery/docs/loading-data-cloud-datastore)
- [Load data from a Firestore export](https://cloud.google.com/bigquery/docs/loading-data-cloud-firestore)
- [Load data using the Storage Write API](https://cloud.google.com/bigquery/docs/write-api-batch-load)
- [Load data into partitioned tables](https://cloud.google.com/bigquery/docs/load-data-partitioned-tables)

### Write and read data with the Storage API

- [Read data with the Storage Read API](https://cloud.google.com/bigquery/docs/reference/storage)

- Write data with the Storage Write API

    - [Introduction](https://cloud.google.com/bigquery/docs/write-api)
    - [Stream data with the Storage Write API](https://cloud.google.com/bigquery/docs/write-api-streaming)
    - [Batch load data with the Storage Write API](https://cloud.google.com/bigquery/docs/write-api-batch)
    - [Best practices](https://cloud.google.com/bigquery/docs/write-api-best-practices)
    - [Stream updates with change data capture](https://cloud.google.com/bigquery/docs/change-data-capture)
    - [Use the legacy streaming API](https://cloud.google.com/bigquery/docs/streaming-data-into-bigquery)

- [Load data from other Google services](https://cloud.google.com/bigquery/docs/load-data-google-services)
- [Discover and catalog Cloud Storage data](https://cloud.google.com/bigquery/docs/automatic-discovery)
- [Load data using third-party apps](https://cloud.google.com/bigquery/docs/load-data-third-party)
- [Load data using cross-cloud operations](https://cloud.google.com/bigquery/docs/load-data-using-cross-cloud-transfer)

## Transform data

- [Introduction](https://cloud.google.com/bigquery/docs/transform-intro)

### Prepare data

- [Introduction](https://cloud.google.com/bigquery/docs/data-prep-introduction)
- [Prepare data with Gemini](https://cloud.google.com/bigquery/docs/data-prep-get-suggestions)

- [Transform with DML](https://cloud.google.com/bigquery/docs/data-manipulation-language)
- [Transform data in partitioned tables](https://cloud.google.com/bigquery/docs/using-dml-with-partitioned-tables)
- [Work with change history](https://cloud.google.com/bigquery/docs/change-history)

### Transform data with workflows

- [Introduction](https://cloud.google.com/bigquery/docs/workflows-introduction)
- [Create workflows](https://cloud.google.com/bigquery/docs/create-workflows)

## Export data

- [Introduction](https://cloud.google.com/bigquery/docs/export-intro)
- [Export query results](https://cloud.google.com/bigquery/docs/export-file)
- [Export to Cloud Storage](https://cloud.google.com/bigquery/docs/exporting-data)
- [Export to Bigtable](https://cloud.google.com/bigquery/docs/export-to-bigtable)
- [Export to Spanner](https://cloud.google.com/bigquery/docs/export-to-spanner)
- [Export to Pub/Sub](https://cloud.google.com/bigquery/docs/export-to-pubsub)
- [Export as Protobuf columns](https://cloud.google.com/bigquery/docs/protobuf-export)

## Analyze

- [Introduction](https://cloud.google.com/bigquery/docs/query-overview)

## Explore your data

- [Create queries with table explorer](https://cloud.google.com/bigquery/docs/table-explorer)
- [Generate profile insights](https://cloud.google.com/bigquery/docs/data-profile-scan)
- [Generate data insights](https://cloud.google.com/bigquery/docs/data-insights)
- [Analyze with a data canvas](https://cloud.google.com/bigquery/docs/data-canvas)
- [Analyze data with Gemini](https://cloud.google.com/bigquery/docs/gemini-analyze-data)

## Query BigQuery data

- [Run a query](https://cloud.google.com/bigquery/docs/running-queries)
- [Write queries with Gemini](https://cloud.google.com/bigquery/docs/write-sql-gemini)
- [Write query results](https://cloud.google.com/bigquery/docs/writing-results)

### Query data with SQL

- [Introduction](https://cloud.google.com/bigquery/docs/introduction-sql)
- [Arrays](https://cloud.google.com/bigquery/docs/arrays)
- [JSON data](https://cloud.google.com/bigquery/docs/json-data)
- [Multi-statement queries](https://cloud.google.com/bigquery/docs/multi-statement-queries)
- [Parameterized queries](https://cloud.google.com/bigquery/docs/parameterized-queries)
- [Pipe syntax](https://cloud.google.com/bigquery/docs/pipe-syntax-guide)
- [Recursive CTEs](https://cloud.google.com/bigquery/docs/recursive-ctes)
- [Sketches](https://cloud.google.com/bigquery/docs/sketches)
- [Table sampling](https://cloud.google.com/bigquery/docs/table-sampling)
- [Time series](https://cloud.google.com/bigquery/docs/working-with-time-series)
- [Transactions](https://cloud.google.com/bigquery/docs/transactions)
- [Wildcard tables](https://cloud.google.com/bigquery/docs/querying-wildcard-tables)

### Use geospatial analytics

- [Introduction](https://cloud.google.com/bigquery/docs/geospatial-intro)
- [Work with geospatial analytics](https://cloud.google.com/bigquery/docs/geospatial-data)
- [Best practices for spatial analysis](https://cloud.google.com/bigquery/docs/best-practices-spatial-analysis)
- [Visualize geospatial data](https://cloud.google.com/bigquery/docs/geospatial-visualize)
- [Grid systems for spatial analysis](https://cloud.google.com/bigquery/docs/grid-systems-spatial-analysis)
- [Geospatial analytics syntax reference](https://cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)

- Geospatial analytics tutorials

    - [Get started with geospatial analytics](https://cloud.google.com/bigquery/docs/geospatial-get-started)
    - [Use geospatial analytics to plot a hurricane's path](https://cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)

### Search data

- [Search indexed data](https://cloud.google.com/bigquery/docs/search)
- [Work with text analyzers](https://cloud.google.com/bigquery/docs/text-analysis-search)

- [Access historical data](https://cloud.google.com/bigquery/docs/access-historical-data)

## Work with queries

### Save queries

- [Introduction](https://cloud.google.com/bigquery/docs/saved-queries-introduction)
- [Create saved queries](https://cloud.google.com/bigquery/docs/work-with-saved-queries)

### Continuous queries

- [Introduction](https://cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [Create continuous queries](https://cloud.google.com/bigquery/docs/continuous-queries)

- [Use cached results](https://cloud.google.com/bigquery/docs/cached-results)

### Work with sessions

- [Introduction](https://cloud.google.com/bigquery/docs/sessions-intro)
- [Create sessions](https://cloud.google.com/bigquery/docs/sessions-create)
- [Write queries in sessions](https://cloud.google.com/bigquery/docs/sessions-write-queries)
- [Run queries in sessions](https://cloud.google.com/bigquery/docs/sessions-run-queries)
- [Terminate sessions](https://cloud.google.com/bigquery/docs/sessions-terminating)
- [View query history in sessions](https://cloud.google.com/bigquery/docs/sessions-view-history)
- [Find sessions](https://cloud.google.com/bigquery/docs/sessions-get-ids)

- [Troubleshoot queries](https://cloud.google.com/bigquery/docs/troubleshoot-queries)

### Optimize queries

- [Introduction](https://cloud.google.com/bigquery/docs/best-practices-performance-overview)
- [Use the query plan explanation](https://cloud.google.com/bigquery/docs/query-plan-explanation)
- [Get query performance insights](https://cloud.google.com/bigquery/docs/query-insights)
- [Optimize query computation](https://cloud.google.com/bigquery/docs/best-practices-performance-compute)
- [Use history-based optimizations](https://cloud.google.com/bigquery/docs/history-based-optimizations)
- [Optimize storage for query performance](https://cloud.google.com/bigquery/docs/best-practices-storage)
- [Use materialized views](https://cloud.google.com/bigquery/docs/materialized-views-use)
- [Use BI Engine](https://cloud.google.com/bigquery/docs/bi-engine-query)
- [Use nested and repeated data](https://cloud.google.com/bigquery/docs/best-practices-performance-nested)
- [Optimize functions](https://cloud.google.com/bigquery/docs/best-practices-performance-functions)

## Query external data sources

### Manage open source metadata

- BigQuery metastore

    - [Introduction](https://cloud.google.com/bigquery/docs/about-bqms)
    - [Use with Apache Spark and standard tables, BigQuery tables for Apache Iceberg, and external tables](https://cloud.google.com/bigquery/docs/bqms-use-tables)
    - [Use with Apache Spark in BigQuery Studio](https://cloud.google.com/bigquery/docs/bqms-use-notebook)
    - [Use with Apache Spark in Dataproc](https://cloud.google.com/bigquery/docs/bqms-use-dataproc)
    - [Use with Apache Spark in Dataproc Serverless](https://cloud.google.com/bigquery/docs/bqms-use-dataproc-serverless)
    - [Use with stored procedures](https://cloud.google.com/bigquery/docs/bqms-use-stored-procedures)
    - [Create tables with Apache Spark and query in BigQuery](https://cloud.google.com/bigquery/docs/bqms-query-tables)
    - [Additional features](https://cloud.google.com/bigquery/docs/bqms-features)
    - [Migrate from Dataproc Metastore](https://cloud.google.com/bigquery/docs/bqms-dpms-migration-tool)

- [BigLake Metastore](https://cloud.google.com/bigquery/docs/manage-open-source-metadata)

### Use external tables and datasets

- Amazon S3 data

    - [Query Amazon S3 data](https://cloud.google.com/bigquery/docs/query-aws-data)
    - [Export query results to Amazon S3](https://cloud.google.com/bigquery/docs/omni-aws-export-results-to-s3)

- [Query Apache Iceberg data](https://cloud.google.com/bigquery/docs/query-iceberg-data)
- [Query open table formats with manifests](https://cloud.google.com/bigquery/docs/query-open-table-format-using-manifest-files)

- Azure Blob Storage data

    - [Query Azure Blob Storage data](https://cloud.google.com/bigquery/docs/query-azure-data)
    - [Export query results to Azure Blob Storage](https://cloud.google.com/bigquery/docs/omni-azure-export-results-to-azure-storage)

- [Query Cloud Bigtable data](https://cloud.google.com/bigquery/docs/external-data-bigtable)

- Cloud Storage data

    - [Query Cloud Storage data in BigLake tables](https://cloud.google.com/bigquery/docs/query-cloud-storage-using-biglake)
    - [Query Cloud Storage data in external tables](https://cloud.google.com/bigquery/docs/query-cloud-storage-data)

- [Work with Salesforce Data Cloud data](https://cloud.google.com/bigquery/docs/salesforce-quickstart)
- [Query Google Drive data](https://cloud.google.com/bigquery/docs/query-drive-data)
- [Create AWS Glue federated datasets](https://cloud.google.com/bigquery/docs/glue-federated-datasets)
- [Create Spanner external datasets](https://cloud.google.com/bigquery/docs/spanner-external-datasets)

### Run federated queries

- [Federated queries](https://cloud.google.com/bigquery/docs/federated-queries-intro)
- [Query SAP Datasphere data](https://cloud.google.com/bigquery/docs/sap-datasphere-federated-queries)
- [Query AlloyDB data](https://cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [Query Spanner data](https://cloud.google.com/bigquery/docs/spanner-federated-queries)
- [Query Cloud SQL data](https://cloud.google.com/bigquery/docs/cloud-sql-federated-queries)

## Use notebooks

- [Introduction](https://cloud.google.com/bigquery/docs/programmatic-analysis)

### Use Colab notebooks

- [Introduction](https://cloud.google.com/bigquery/docs/notebooks-introduction)
- [Create notebooks](https://cloud.google.com/bigquery/docs/create-notebooks)
- [Explore query results](https://cloud.google.com/bigquery/docs/explore-data-colab)

### Use DataFrames

- [Introduction](https://cloud.google.com/bigquery/docs/bigquery-dataframes-introduction)
- [Try BigQuery DataFrames](https://cloud.google.com/bigquery/docs/dataframes-quickstart)
- [Use BigQuery DataFrames](https://cloud.google.com/bigquery/docs/use-bigquery-dataframes)

### Use Jupyter notebooks

- [Use the BigQuery JupyterLab plugin](https://cloud.google.com/bigquery/docs/jupyterlab-plugin)
- [Use managed Jupyter notebooks](https://cloud.google.com/bigquery/docs/visualize-jupyter)

## Use analysis and BI tools

- [Introduction](https://cloud.google.com/bigquery/docs/data-analysis-tools-intro)
- [Use Connected Sheets](https://cloud.google.com/bigquery/docs/connected-sheets)
- [Use Tableau](https://cloud.google.com/bigquery/docs/analyze-data-tableau)
- [Use Looker](https://cloud.google.com/bigquery/docs/looker)
- [Use Looker Studio](https://cloud.google.com/bigquery/docs/visualize-looker-studio)
	- [Monitoring organic Google Search traffic in Looker Studio - YouTube](https://youtu.be/3ezmohvavzI)
- [Use third-party tools](https://cloud.google.com/bigquery/docs/third-party-integration)

### Google Cloud Ready - BigQuery

- [Overview](https://cloud.google.com/bigquery/docs/bigquery-ready-overview)
- [Partners](https://cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Share with Analytics Hub

- [Introduction](https://cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [Manage data exchanges](https://cloud.google.com/bigquery/docs/analytics-hub-manage-exchanges)
- [Manage listings](https://cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [Manage subscriptions](https://cloud.google.com/bigquery/docs/analytics-hub-manage-subscriptions)
- [Configure user roles](https://cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- [View and subscribe to listings](https://cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- [Share sensitive data with data clean rooms](https://cloud.google.com/bigquery/docs/data-clean-rooms)

### Entity resolution

- [Introduction](https://cloud.google.com/bigquery/docs/entity-resolution-intro)
- [Use entity resolution](https://cloud.google.com/bigquery/docs/entity-resolution-setup)

- [VPC Service Controls for Analytics Hub](https://cloud.google.com/bigquery/docs/analytics-hub-vpc-sc-rules)
- [Stream sharing with Pub/Sub](https://cloud.google.com/bigquery/docs/analytics-hub-stream-sharing)
- [Commercialize listings on Cloud Marketplace](https://cloud.google.com/bigquery/docs/analytics-hub-cloud-marketplace)

## AI and machine learning

- [Introduction](https://cloud.google.com/bigquery/docs/bqml-introduction)

## Generative AI and pretrained models

### Choose generative AI and task-specific functions

- [Choose a natural language processing function](https://cloud.google.com/bigquery/docs/choose-ml-text-function)
- [Choose a document processing function](https://cloud.google.com/bigquery/docs/choose-document-processing-function)
- [Choose a transcription function](https://cloud.google.com/bigquery/docs/choose-transcription-function)

### Generative AI

- [Overview](https://cloud.google.com/bigquery/docs/generative-ai-overview)

#### Tutorials

- Generate text

	- [Generate text using public data and Gemini](https://cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
	- [Generate text using public data and PaLM](https://cloud.google.com/bigquery/docs/generate-text-tutorial)
	- [Generate text using your data](https://cloud.google.com/bigquery/docs/generate-text)
	- [Handle quota errors by calling ML.GENERATE\_TEXT iteratively](https://cloud.google.com/bigquery/docs/iterate-generate-text-calls)
	- [Tune a model using your data](https://cloud.google.com/bigquery/docs/generate-text-tuning)
	- [Use tuning and evaluation to improve model performance](https://cloud.google.com/bigquery/docs/tune-evaluate)
	- [Analyze images with a Gemini vision model](https://cloud.google.com/bigquery/docs/image-analysis)

- Generate embeddings

    - [Generate text embeddings using an LLM](https://cloud.google.com/bigquery/docs/generate-text-embedding)
    - [Generate image embeddings using an LLM](https://cloud.google.com/bigquery/docs/generate-visual-content-embedding)
    - [Handle quota errors by calling ML.GENERATE\_EMBEDDING iteratively](https://cloud.google.com/bigquery/docs/iterate-generate-embedding-calls)
    - [Generate video embeddings using an LLM](https://cloud.google.com/bigquery/docs/generate-video-embedding)
    - [Generate and search multimodal embeddings](https://cloud.google.com/bigquery/docs/generate-multimodal-embeddings)
    - [Generate text embeddings using pretrained TensorFlow models](https://cloud.google.com/bigquery/docs/generate-embedding-with-tensorflow-models)

- Vector search

    - [Search embeddings with vector search](https://cloud.google.com/bigquery/docs/vector-search)
    - [Perform semantic search and retrieval-augmented generation](https://cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

### Task-specific solutions

- [Overview](https://cloud.google.com/bigquery/docs/ai-application-overview)

#### Tutorials

- Natural language processing

    - [Understand text](https://cloud.google.com/bigquery/docs/understand-text)
    - [Translate text](https://cloud.google.com/bigquery/docs/translate-text)

- Document processing

    - [Process documents](https://cloud.google.com/bigquery/docs/process-document)
    - [Parse PDFs in a retrieval-augmented generation pipeline](https://cloud.google.com/bigquery/docs/rag-pipeline-pdf)

- Speech recognition

    - [Transcribe audio files](https://cloud.google.com/bigquery/docs/transcribe)

- Computer vision

    - [Annotate images](https://cloud.google.com/bigquery/docs/annotate-image)
    - [Run inference on image data](https://cloud.google.com/bigquery/docs/object-table-inference)
    - [Analyze images with an imported classification model](https://cloud.google.com/bigquery/docs/inference-tutorial-resnet)
    - [Analyze images with an imported feature vector model](https://cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)

## Machine learning

### ML models and MLOps

- [End-to-end journey per model](https://cloud.google.com/bigquery/docs/e2e-journey)
- [Model creation](https://cloud.google.com/bigquery/docs/model-overview)
- [Hyperparameter tuning overview](https://cloud.google.com/bigquery/docs/hp-tuning-overview)
- [Model evaluation overview](https://cloud.google.com/bigquery/docs/evaluate-overview)
- [Model inference overview](https://cloud.google.com/bigquery/docs/inference-overview)
- [Explainable AI overview](https://cloud.google.com/bigquery/docs/xai-overview)
- [Model weights overview](https://cloud.google.com/bigquery/docs/weights-overview)
- [ML pipelines overview](https://cloud.google.com/bigquery/docs/ml-pipelines-overview)
- [Model monitoring overview](https://cloud.google.com/bigquery/docs/model-monitoring-overview)
- [Manage BigQueryML models in Vertex AI](https://cloud.google.com/bigquery/docs/managing-models-vertex)

### Use cases

- [Forecasting](https://cloud.google.com/bigquery/docs/forecasting-overview)
- [Anomaly detection](https://cloud.google.com/bigquery/docs/anomaly-detection-overview)
- [Recommendation](https://cloud.google.com/bigquery/docs/recommendation-overview)
- [Classification](https://cloud.google.com/bigquery/docs/classification-overview)
- [Regression](https://cloud.google.com/bigquery/docs/regression-overview)
- [Dimensionality reduction](https://cloud.google.com/bigquery/docs/dimensionality-reduction-overview)
- [Clustering](https://cloud.google.com/bigquery/docs/clustering-overview)

### Tutorials

- [Get started with BigQuery ML](https://cloud.google.com/bigquery/docs/create-machine-learning-model)

- Regression and classification

    - [Create a linear regression model](https://cloud.google.com/bigquery/docs/linear-regression-tutorial)
    - [Create a logistic regression classification model](https://cloud.google.com/bigquery/docs/logistic-regression-prediction)
    - [Create a boosted tree classification model](https://cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)

- Clustering

    - [Cluster data with a k-means model](https://cloud.google.com/bigquery/docs/kmeans-tutorial)

- Recommendation

    - [Create recommendations based on explicit feedback with a matrix factorization model](https://cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
    - [Create recommendations based on implicit feedback with a matrix factorization model](https://cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial)

- Time series forecasting

    - [Forecast a single time series with a univariate model](https://cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
    - [Forecast multiple time series with a univariate model](https://cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
    - [Scale a univariate time series model to millions of time series](https://cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
    - [Forecast a single time series with a multivariate model](https://cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
    - [Forecast multiple time series with a multivariate model](https://cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
    - [Use custom holidays with a univariate model](https://cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
    - [Limit forecasted values for a univariate model](https://cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
    - [Forecast hierarchical time series with a univariate model](https://cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-hierarchical-time-series)

- Anomaly detection

    - [Anomaly detection with a multivariate time series](https://cloud.google.com/bigquery/docs/time-series-anomaly-detection-tutorial)

- Imported and remote models

    - [Make predictions with imported TensorFlow models](https://cloud.google.com/bigquery/docs/making-predictions-with-imported-tensorflow-models)
    - [Make predictions with scikit-learn models in ONNX format](https://cloud.google.com/bigquery/docs/making-predictions-with-sklearn-models-in-onnx-format)
    - [Make predictions with PyTorch models in ONNX format](https://cloud.google.com/bigquery/docs/making-predictions-with-pytorch-models-in-onnx-format)
    - [Make predictions with remote models on Vertex AI](https://cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)

- Hyperparameter tuning

    - [Improve model performance with hyperparameter tuning](https://cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)

- Export models

    - [Export a BigQuery ML model for online prediction](https://cloud.google.com/bigquery/docs/export-model-tutorial)

## Augmented analytics

- [Contribution analysis](https://cloud.google.com/bigquery/docs/contribution-analysis)

### Tutorials

- [Get data insights from contribution analysis using a summable metric](https://cloud.google.com/bigquery/docs/get-contribution-analysis-insights)
- [Get data insights from contribution analysis using a summable ratio metric](https://cloud.google.com/bigquery/docs/get-contribution-analysis-insights-sum-ratio)

## Create and manage features

- [Feature preprocessing overview](https://cloud.google.com/bigquery/docs/preprocess-overview)
- [Supported input feature types](https://cloud.google.com/bigquery/docs/input-feature-types)
- [Automatic preprocessing](https://cloud.google.com/bigquery/docs/auto-preprocessing)
- [Manual preprocessing](https://cloud.google.com/bigquery/docs/manual-preprocessing)
- [Feature serving](https://cloud.google.com/bigquery/docs/feature-serving)
- [Perform feature engineering with the TRANSFORM clause](https://cloud.google.com/bigquery/docs/bigqueryml-transform)

## Work with models

- [List models](https://cloud.google.com/bigquery/docs/listing-models)
- [Manage models](https://cloud.google.com/bigquery/docs/managing-models)
- [Get model metadata](https://cloud.google.com/bigquery/docs/getting-model-metadata)
- [Update model metadata](https://cloud.google.com/bigquery/docs/updating-model-metadata)
- [Export models](https://cloud.google.com/bigquery/docs/exporting-models)
- [Delete models](https://cloud.google.com/bigquery/docs/deleting-models)

- [Reference patterns](https://cloud.google.com/bigquery/docs/reference-patterns)

## Administer

- [Introduction](https://cloud.google.com/bigquery/docs/admin-intro)

## Manage resources

- [Organize resources](https://cloud.google.com/bigquery/docs/resource-hierarchy)
- [Understand reliability](https://cloud.google.com/bigquery/docs/reliability-intro)

### Manage code assets

- [Manage data preparations](https://cloud.google.com/bigquery/docs/manage-data-preparations)
- [Manage notebooks](https://cloud.google.com/bigquery/docs/manage-notebooks)
- [Manage saved queries](https://cloud.google.com/bigquery/docs/manage-saved-queries)
- [Manage workflows](https://cloud.google.com/bigquery/docs/manage-workflows)

### Manage tables

- [Manage tables](https://cloud.google.com/bigquery/docs/managing-tables)
- [Manage table data](https://cloud.google.com/bigquery/docs/managing-table-data)
- [Modify table schemas](https://cloud.google.com/bigquery/docs/managing-table-schemas)

### Manage table clones

- [Introduction](https://cloud.google.com/bigquery/docs/table-clones-intro)
- [Create table clones](https://cloud.google.com/bigquery/docs/table-clones-create)

### Manage table snapshots

- [Introduction](https://cloud.google.com/bigquery/docs/table-snapshots-intro)
- [Create table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-create)
- [Restore table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-restore)
- [List table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-list)
- [View table snapshot metadata](https://cloud.google.com/bigquery/docs/table-snapshots-metadata)
- [Update table snapshot metadata](https://cloud.google.com/bigquery/docs/table-snapshots-update)
- [Delete table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-delete)
- [Create periodic table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-scheduled)

- [Manage default configurations](https://cloud.google.com/bigquery/docs/default-configuration)
- [Manage datasets](https://cloud.google.com/bigquery/docs/managing-datasets)
- [Manage materialized views](https://cloud.google.com/bigquery/docs/materialized-views-manage)
- [Manage materialized view replicas](https://cloud.google.com/bigquery/docs/materialized-view-replicas-manage)

## Orchestrate resources

- [Introduction](https://cloud.google.com/bigquery/docs/orchestrate-workloads)

### Orchestrate code assets

- [Orchestrate notebooks](https://cloud.google.com/bigquery/docs/orchestrate-notebooks)
- [Orchestrate workflows](https://cloud.google.com/bigquery/docs/orchestrate-workflows)
- [Orchestrate DAGs](https://cloud.google.com/bigquery/docs/orchestrate-dags)

### Orchestrate jobs and queries

- [Run jobs programmatically](https://cloud.google.com/bigquery/docs/running-jobs)
- [Schedule queries](https://cloud.google.com/bigquery/docs/scheduling-queries)

## Workload management

- [Introduction](https://cloud.google.com/bigquery/docs/reservations-intro)
- [Slots](https://cloud.google.com/bigquery/docs/slots)
- [Slot reservations](https://cloud.google.com/bigquery/docs/reservations-workload-management)
- [Slots autoscaling](https://cloud.google.com/bigquery/docs/slots-autoscaling-intro)

### Use reservations

- [Get started](https://cloud.google.com/bigquery/docs/reservations-get-started)
- [Estimate slot capacity requirements](https://cloud.google.com/bigquery/docs/slot-estimator)
- [View slot recommendations and insights](https://cloud.google.com/bigquery/docs/slot-recommender)
- [Purchase and manage slot commitments](https://cloud.google.com/bigquery/docs/reservations-commitments)
- [Work with slot reservations](https://cloud.google.com/bigquery/docs/reservations-tasks)
- [Work with reservation assignments](https://cloud.google.com/bigquery/docs/reservations-assignments)

### Manage jobs

- [Understand jobs](https://cloud.google.com/bigquery/docs/jobs-overview)
- [Manage jobs](https://cloud.google.com/bigquery/docs/managing-jobs)

- [Use query queues](https://cloud.google.com/bigquery/docs/query-queues)

### Legacy reservations

- [Introduction to legacy reservations](https://cloud.google.com/bigquery/docs/reservations-intro-legacy)
- [Legacy slot commitments](https://cloud.google.com/bigquery/docs/reservations-details-legacy)
- [Purchase and manage legacy slot commitments](https://cloud.google.com/bigquery/docs/reservations-commitments-legacy)
- [Work with legacy slot reservations](https://cloud.google.com/bigquery/docs/reservations-tasks-legacy)

### Manage BI Engine

- [Introduction](https://cloud.google.com/bigquery/docs/bi-engine-intro)
- [Reserve BI Engine capacity](https://cloud.google.com/bigquery/docs/bi-engine-reserve-capacity)

## Monitor workloads

- [Introduction](https://cloud.google.com/bigquery/docs/monitoring)
- [Monitor resource utilization](https://cloud.google.com/bigquery/docs/admin-resource-charts)
- [Monitor jobs](https://cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [Monitor Analytics Hub listings](https://cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)
- [Monitor BI Engine](https://cloud.google.com/bigquery/docs/bi-engine-monitor)
- [Monitor data quality](https://cloud.google.com/bigquery/docs/data-quality-scan)
- [Monitor Data Transfer Service](https://cloud.google.com/bigquery/docs/dts-monitor)
- [Monitor materialized views](https://cloud.google.com/bigquery/docs/materialized-views-monitor)
- [Monitor reservations](https://cloud.google.com/bigquery/docs/reservations-monitoring)
- [Monitor continuous queries](https://cloud.google.com/bigquery/docs/continuous-queries-monitor)
- [Dashboards, charts and alerts](https://cloud.google.com/bigquery/docs/monitoring-dashboard)

## Optimize resources

### Control costs

- [Estimate and control costs](https://cloud.google.com/bigquery/docs/best-practices-costs)
- [Create custom query quotas](https://cloud.google.com/bigquery/docs/custom-quotas)

### Optimize with recommendations

- [Introduction](https://cloud.google.com/bigquery/docs/recommendations-intro)
- [Manage cluster and partition recommendations](https://cloud.google.com/bigquery/docs/manage-partition-cluster-recommendations)
- [Manage materialized view recommendations](https://cloud.google.com/bigquery/docs/manage-materialized-recommendations)

### Organize with labels

- [Introduction](https://cloud.google.com/bigquery/docs/labels-intro)
- [Add labels](https://cloud.google.com/bigquery/docs/adding-labels)
- [View labels](https://cloud.google.com/bigquery/docs/viewing-labels)
- [Update labels](https://cloud.google.com/bigquery/docs/updating-labels)
- [Filter using labels](https://cloud.google.com/bigquery/docs/filtering-labels)
- [Delete labels](https://cloud.google.com/bigquery/docs/deleting-labels)

### Manage data quality

- [Monitor data quality with scans](https://cloud.google.com/bigquery/docs/data-quality-scan)
- [Data Catalog overview](https://cloud.google.com/bigquery/docs/data-catalog-overview)
- [Work with Data Catalog](https://cloud.google.com/bigquery/docs/data-catalog)

## Govern

- [Introduction](https://cloud.google.com/bigquery/docs/data-governance)

## Control access to resources

- [Introduction](https://cloud.google.com/bigquery/docs/access-control)

### Control access with IAM

- [Manage resource access policies](https://cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [Control access with tags](https://cloud.google.com/bigquery/docs/tags)
- [Control access with conditions](https://cloud.google.com/bigquery/docs/conditions)

### Control access with authorization

- [Authorized datasets](https://cloud.google.com/bigquery/docs/authorized-datasets)
- [Authorized routines](https://cloud.google.com/bigquery/docs/authorized-routines)
- [Authorized views](https://cloud.google.com/bigquery/docs/authorized-views)

### Restrict network access

- [Control access with VPC service controls](https://cloud.google.com/bigquery/docs/vpc-sc)
- [Regional endpoints](https://cloud.google.com/bigquery/docs/regional-endpoints)

## Control column and row access

### Control access to table columns

- [Introduction to column-level access control](https://cloud.google.com/bigquery/docs/column-level-security-intro)
- [Restrict access with column-level access control](https://cloud.google.com/bigquery/docs/column-level-security)
- [Impact on writes](https://cloud.google.com/bigquery/docs/column-level-security-writes)

### Manage policy tags

- [Manage policy tags across locations](https://cloud.google.com/bigquery/docs/managing-policy-tags-across-locations)
- [Best practices for using policy tags](https://cloud.google.com/bigquery/docs/best-practices-policy-tags)

### Control access to table rows

- [Introduction to row-level security](https://cloud.google.com/bigquery/docs/row-level-security-intro)
- [Work with row-level security](https://cloud.google.com/bigquery/docs/managing-row-level-security)
- [Use row-level security with other BigQuery features](https://cloud.google.com/bigquery/docs/using-row-level-security-with-features)
- [Best practices for row-level security](https://cloud.google.com/bigquery/docs/best-practices-row-level-security)

## Protect sensitive data

### Mask data in table columns

- [Introduction to data masking](https://cloud.google.com/bigquery/docs/column-data-masking-intro)
- [Mask column data](https://cloud.google.com/bigquery/docs/column-data-masking)

### Anonymize data with differential privacy

- [Use differential privacy](https://cloud.google.com/bigquery/docs/differential-privacy)
- [Extend differential privacy](https://cloud.google.com/bigquery/docs/extend-differential-privacy)

- [Restrict data access using analysis rules](https://cloud.google.com/bigquery/docs/analysis-rules)
- [Use Sensitive Data Protection](https://cloud.google.com/bigquery/docs/scan-with-dlp)

## Manage encryption

- [Encryption at rest](https://cloud.google.com/bigquery/docs/encryption-at-rest)
- [Customer-managed encryption keys](https://cloud.google.com/bigquery/docs/customer-managed-encryption)
- [Column-level encryption with Cloud KMS](https://cloud.google.com/bigquery/docs/column-key-encrypt)
- [AEAD encryption](https://cloud.google.com/bigquery/docs/aead-encryption-concepts)

## Audit workloads

- [Introduction](https://cloud.google.com/bigquery/docs/introduction-audit-workloads)
- [Audit policy tags](https://cloud.google.com/bigquery/docs/auditing-policy-tags)
- [View Data Policy audit logs](https://cloud.google.com/bigquery/docs/column-data-masking-audit-logging)
- [Data Transfer Service audit logs](https://cloud.google.com/bigquery/docs/audit-logging)
- [Analytics Hub audit logging](https://cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- [BigQuery audit logs reference](https://cloud.google.com/bigquery/docs/reference/auditlogs)
- [Migrate audit logs](https://cloud.google.com/bigquery/docs/reference/auditlogs/migration)
- [BigLake API audit logs](https://cloud.google.com/bigquery/docs/biglake-audit-logging)
- [BigQuery Migration API audit logs](https://cloud.google.com/bigquery/docs/reference/auditlogs/audit-logging-bq-migration)

## Develop

- [Introduction](https://cloud.google.com/bigquery/docs/developer-overview)
- [BigQuery code samples](https://cloud.google.com/bigquery/docs/samples)

## BigQuery API basics

- [BigQuery APIs and libraries overview](https://cloud.google.com/bigquery/docs/reference/libraries-overview)

### Authentication

- [Introduction](https://cloud.google.com/bigquery/docs/authentication)
- [Get started](https://cloud.google.com/bigquery/docs/authentication/getting-started)
- [Authenticate as an end user](https://cloud.google.com/bigquery/docs/authentication/end-user-installed)
- [Authenticate with JSON Web Tokens](https://cloud.google.com/bigquery/docs/json-web-tokens)

- [Run jobs programmatically](https://cloud.google.com/bigquery/docs/running-jobs)
- [Paginate with BigQuery API](https://cloud.google.com/bigquery/docs/paging-results)
- [API performance tips](https://cloud.google.com/bigquery/docs/api-performance)
- [Batch requests](https://cloud.google.com/bigquery/batch)

- [Use the VS Code extension](https://cloud.google.com/bigquery/docs/vs-code-extension)
- [Choose a Python library](https://cloud.google.com/bigquery/docs/python-libraries)
- [Use ODBC and JDBC drivers](https://cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
