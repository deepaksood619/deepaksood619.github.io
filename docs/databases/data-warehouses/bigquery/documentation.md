# Documentation

- [Product overview](/bigquery/docs/introduction)

## How does BigQuery work?

- [Storage](/bigquery/docs/storage_overview)
- [Analytics](/bigquery/docs/query-overview)
- [Administration](/bigquery/docs/admin-intro)

## Get started

- [Use the BigQuery sandbox](https://cloud.google.com/bigquery/docs/sandbox)

## Quickstarts

### Try the Cloud console

- [Query public data](/bigquery/docs/quickstarts/query-public-dataset-console)
- [Load and query data](/bigquery/docs/quickstarts/load-data-console)
- [Enable asset management](/bigquery/docs/enable-assets)

### Try the command-line tool

- [Query public data](/bigquery/docs/quickstarts/query-public-dataset-bq)
- [Load and query data](/bigquery/docs/quickstarts/load-data-bq)

- [Try the client libraries](/bigquery/docs/quickstarts/quickstart-client-libraries)

## Explore BigQuery tools

- [Explore the console](/bigquery/docs/bigquery-web-ui)
- [Explore the command-line tool](/bigquery/docs/bq-command-line-tool)

## Migrate

- [Overview](https://cloud.google.com/bigquery/docs/migration/migration-overview)

## Migrate a data warehouse

- [Introduction to BigQuery Migration Service](/bigquery/docs/migration-intro)
- [Migration assessment](/bigquery/docs/migration-assessment)
- [Migrate schema and data](/bigquery/docs/migration/schema-data-overview)
- [Migrate data pipelines](/bigquery/docs/migration/pipelines)

### Migrate SQL

- [Translate SQL queries interactively](/bigquery/docs/interactive-sql-translator)
- [Translate SQL queries using the API](/bigquery/docs/api-sql-translator)
- [Translate SQL queries in batch](/bigquery/docs/batch-sql-translator)
- [Generate metadata for translation and assessment](/bigquery/docs/generate-metadata)
- [Transform SQL translations with YAML](/bigquery/docs/config-yaml-translation)
- [Map SQL object names for batch translation](/bigquery/docs/output-name-mapping)

## Migration guides

### Amazon Redshift

- [Migration overview](/bigquery/docs/migration/redshift-overview)
- [Migrate Amazon Redshift schema and data](/bigquery/docs/migration/redshift)
- [Migrate Amazon Redshift schema and data when using a VPC](/bigquery/docs/migration/redshift-vpc)
- [SQL translation reference](/bigquery/docs/migration/redshift-sql)

### Apache Hive

- [Migration overview](/bigquery/docs/migration/hive-overview)
- [Migrate Apache Hive schema and data](/bigquery/docs/migration/hive)
- [SQL translation reference](/bigquery/docs/migration/hive-sql)

### IBM Netezza

- [Migrate from IBM Netezza](/bigquery/docs/migration/netezza)
- [SQL translation reference](/bigquery/docs/migration/netezza-sql)

### Oracle

- [Migration guide](/bigquery/docs/migration/oracle-migration)
- [SQL translation reference](/bigquery/docs/migration/oracle-sql)

### Snowflake

- [Migration guide](/bigquery/docs/migration/snowflake-overview)
- [SQL translation reference](/bigquery/docs/migration/snowflake-sql)

### Teradata

- [Migration overview](/bigquery/docs/migration/teradata-overview)
- [Migrate Teradata schema and data](/bigquery/docs/migration/teradata)
- [Migration tutorial](/bigquery/docs/migration/teradata-tutorial)
- [SQL translation reference](/bigquery/docs/migration/teradata-sql)

## Design

- [Organize resources](https://cloud.google.com/bigquery/docs/resource-hierarchy)
- [Understand editions](https://cloud.google.com/bigquery/docs/editions-intro)

## Datasets

- [Introduction](/bigquery/docs/datasets-intro)
- [Create datasets](/bigquery/docs/datasets)
- [List datasets](/bigquery/docs/listing-datasets)
- [Update dataset properties](/bigquery/docs/updating-datasets)
- [Cross-region replication](/bigquery/docs/data-replication)
- [Managed disaster recovery](/bigquery/docs/managed-disaster-recovery)
- [Dataset data retention](/bigquery/docs/time-travel)

## Tables

### BigQuery tables

- [Introduction](/bigquery/docs/tables-intro)
- [Create and use tables](/bigquery/docs/tables)
- [BigQuery tables for Apache Iceberg](/bigquery/docs/iceberg-tables)

- Specify table schemas

    - [Specify a schema](/bigquery/docs/schemas)
    - [Specify nested and repeated columns](/bigquery/docs/nested-repeated)
    - [Specify default column values](/bigquery/docs/default-values)

- Segment with partitioned tables

    - [Introduction](/bigquery/docs/partitioned-tables)
    - [Create partitioned tables](/bigquery/docs/creating-partitioned-tables)
    - [Manage partitioned tables](/bigquery/docs/managing-partitioned-tables)
    - [Query partitioned tables](/bigquery/docs/querying-partitioned-tables)

- Optimize with clustered tables

    - [Introduction](/bigquery/docs/clustered-tables)
    - [Create and use clustered tables](/bigquery/docs/creating-clustered-tables)
    - [Query clustered tables](/bigquery/docs/querying-clustered-tables)

### External tables

- [Introduction](/bigquery/docs/external-data-sources)

- Types of external tables

    - [BigLake external tables](/bigquery/docs/biglake-intro)
    - [BigQuery Omni](/bigquery/docs/omni-introduction)
    - [Object tables](/bigquery/docs/object-table-introduction)
    - [External tables](/bigquery/docs/external-tables)

- [External table definition file](/bigquery/docs/external-table-definition)
- [Externally partitioned data](/bigquery/docs/hive-partitioned-queries)
- [Use metadata caching](/bigquery/docs/metadata-caching)
- [Amazon S3 BigLake external tables](/bigquery/docs/omni-aws-create-external-table)
- [BigLake external tables for Apache Iceberg](/bigquery/docs/iceberg-external-tables)
- [Azure Blob Storage BigLake tables](/bigquery/docs/omni-azure-create-external-table)
- [Bigtable external table](/bigquery/docs/create-bigtable-external-table)
- [BigLake external tables for Cloud Storage](/bigquery/docs/create-cloud-storage-table-biglake)
- [Cloud Storage object tables](/bigquery/docs/object-tables)
- [Cloud Storage external tables](/bigquery/docs/external-data-cloud-storage)
- [Delta Lake BigLake tables](/bigquery/docs/create-delta-lake-table)
- [Google Drive external tables](/bigquery/docs/external-data-drive)

## Views

### Logical views

- [Introduction](/bigquery/docs/views-intro)
- [Create views](/bigquery/docs/views)
- [Get information about views](/bigquery/docs/view-metadata)
- [Manage views](/bigquery/docs/managing-views)

### Materialized views

- [Introduction](/bigquery/docs/materialized-views-intro)
- [Create materialized views](/bigquery/docs/materialized-views-create)
- [Create materialized view replicas](/bigquery/docs/materialized-view-replicas-create)

## Routines

- [Manage routines](/bigquery/docs/routines)
- [User-defined functions](/bigquery/docs/user-defined-functions)
- [User-defined aggregate functions](/bigquery/docs/user-defined-aggregates)
- [Table functions](/bigquery/docs/table-functions)
- [Remote functions](/bigquery/docs/remote-functions)
- [SQL stored procedures](/bigquery/docs/procedures)
- [Stored procedures for Apache Spark](/bigquery/docs/spark-procedures)
- [Analyze object tables by using remote functions](/bigquery/docs/object-table-remote-function)
- [Remote functions and Translation API tutorial](/bigquery/docs/remote-functions-translation-tutorial)

## Connections

- [Introduction](/bigquery/docs/connections-api-intro)
- [Amazon S3 connection](/bigquery/docs/omni-aws-create-connection)
- [Apache Spark connection](/bigquery/docs/connect-to-spark)
- [Azure Blob Storage connection](/bigquery/docs/omni-azure-create-connection)
- [Cloud resource connection](/bigquery/docs/create-cloud-resource-connection)
- [Spanner connection](/bigquery/docs/connect-to-spanner)
- [Cloud SQL connection](/bigquery/docs/connect-to-sql)
- [AlloyDB connection](/bigquery/docs/connect-to-alloydb)
- [SAP Datasphere connection](/bigquery/docs/connect-to-sap-datasphere)
- [Manage connections](/bigquery/docs/working-with-connections)
- [Configure connections with network attachments](/bigquery/docs/connections-with-network-attachment)

## Indexes

### Search indexes

- [Introduction](/bigquery/docs/search-intro)
- [Manage search indexes](/bigquery/docs/search-index)

### Vector indexes

- [Introduction](/bigquery/docs/vector-search-intro)
- [Manage vector indexes](/bigquery/docs/vector-index)

## Load, transform, and export

- [Introduction](/bigquery/docs/load-transform-export-intro)

## Load data

- [Introduction](/bigquery/docs/loading-data)

### BigQuery Data Transfer Service

- [Introduction](/bigquery/docs/dts-introduction)
- [Data location and transfers](/bigquery/docs/dts-locations)
- [Authorize transfers](/bigquery/docs/dts-authentication-authorization)
- [Enable transfers](/bigquery/docs/enable-transfer-service)
- [Manage transfers](/bigquery/docs/working-with-transfers)
- [Transfer run notifications](/bigquery/docs/transfer-run-notifications)
- [Troubleshoot transfer configurations](/bigquery/docs/transfer-troubleshooting)
- [Use service accounts](/bigquery/docs/use-service-accounts)
- [Use third-party transfers](/bigquery/docs/third-party-transfer)
- [Use custom organization policies](/bigquery/docs/transfer-custom-constraints)
- [Data source change log](/bigquery/docs/transfer-changes)

- Transfer guides

    - Amazon S3

        - [Introduction](/bigquery/docs/s3-transfer-intro)
        - [Schedule transfers](/bigquery/docs/s3-transfer)
        - [Transfer runtime parameters](/bigquery/docs/s3-transfer-parameters)

    - Azure Blob Storage

        - [Introduction](/bigquery/docs/blob-storage-transfer-intro)
        - [Schedule transfers](/bigquery/docs/blob-storage-transfer)
        - [Transfer runtime parameters](/bigquery/docs/blob-storage-transfer-parameters)

    - Campaign Manager

        - [Schedule transfers](/bigquery/docs/doubleclick-campaign-transfer)
        - [Report transformation](/bigquery/docs/doubleclick-campaign-transformation)

    - Cloud Storage

        - [Introduction](/bigquery/docs/cloud-storage-transfer-overview)
        - [Schedule transfers](/bigquery/docs/cloud-storage-transfer)
        - [Transfer runtime parameters](/bigquery/docs/gcs-transfer-parameters)

    - Comparison Shopping Service Center

        - [Introduction](/bigquery/docs/css-center-transfer)
        - [Schedule transfers](/bigquery/docs/css-center-transfer-schedule-transfers)
        - [Transfer report schema](/bigquery/docs/css-center-products-schema)

    - Display & Video 360

        - [Schedule transfers](/bigquery/docs/display-video-transfer)
        - [Report transformation](/bigquery/docs/display-video-transformation)

    - Facebook Ads

        - [Schedule transfers](/bigquery/docs/facebook-ads-transfer)
        - [Report transformation](/bigquery/docs/facebook-ads-transformation)

    - Google Ad Manager

        - [Schedule transfers](/bigquery/docs/doubleclick-publisher-transfer)
        - [Report transformation](/bigquery/docs/doubleclick-publisher-transformation)

    - Google Ads

        - [Schedule transfers](/bigquery/docs/google-ads-transfer)
        - [Report transformation](/bigquery/docs/google-ads-transformation)

    - Google Merchant Center

        - [Introduction](/bigquery/docs/merchant-center-transfer)
        - [Schedule transfers](/bigquery/docs/merchant-center-transfer-schedule-transfers)
        - Transfer report schema

            - [Best Sellers table](/bigquery/docs/merchant-center-best-sellers-schema)
            - [Local Inventories table](/bigquery/docs/merchant-center-local-inventories-schema)
            - [Performance table](/bigquery/docs/merchant-center-performance-schema)
            - [Price Benchmarks table](/bigquery/docs/merchant-center-price-benchmarks-schema)
            - [Price Competitiveness table](/bigquery/docs/merchant-center-price-competitiveness-schema)
            - [Price Insights table](/bigquery/docs/merchant-center-price-insights-schema)
            - [Product Inventory table](/bigquery/docs/merchant-center-product-inventory-schema)
            - [Product Targeting table](/bigquery/docs/merchant-center-product-targeting-schema)
            - [Products table](/bigquery/docs/merchant-center-products-schema)
            - [Regional Inventories table](/bigquery/docs/merchant-center-regional-inventories-schema)
            - [Top Brands table](/bigquery/docs/merchant-center-top-brands-schema)
            - [Top Products table](/bigquery/docs/merchant-center-top-products-schema)

    - Google Play

        - [Schedule transfers](/bigquery/docs/play-transfer)
        - [Transfer report transformation](/bigquery/docs/play-transformation)

    - Oracle

        - [Schedule transfers](/bigquery/docs/oracle-transfer)

    - Salesforce

        - [Schedule transfers](/bigquery/docs/salesforce-transfer)

    - Salesforce Marketing Cloud

        - [Schedule transfers](/bigquery/docs/sfmc-transfer)

    - Search Ads 360

        - [Schedule transfers](/bigquery/docs/search-ads-transfer)
        - [Transfer report transformation](/bigquery/docs/search-ads-transformation)
        - [Migration guide](/bigquery/docs/search-ads-migration-guide)

    - ServiceNow

        - [Schedule transfers](/bigquery/docs/servicenow-transfer)

    - YouTube channel

        - [Schedule transfers](/bigquery/docs/youtube-channel-transfer)
        - [Transfer report transformation](/bigquery/docs/youtube-channel-transformation)

    - YouTube content owner

        - [Schedule transfers](/bigquery/docs/youtube-content-owner-transfer)
        - [Transfer report transformation](/bigquery/docs/youtube-content-owner-transformation)

### Batch load data

- [Introduction](/bigquery/docs/batch-loading-data)
- [Auto-detect schemas](/bigquery/docs/schema-detect)
- [Load Avro data](/bigquery/docs/loading-data-cloud-storage-avro)
- [Load Parquet data](/bigquery/docs/loading-data-cloud-storage-parquet)
- [Load ORC data](/bigquery/docs/loading-data-cloud-storage-orc)
- [Load CSV data](/bigquery/docs/loading-data-cloud-storage-csv)
- [Load JSON data](/bigquery/docs/loading-data-cloud-storage-json)
- [Load externally partitioned data](/bigquery/docs/hive-partitioned-loads-gcs)
- [Load data from a Datastore export](/bigquery/docs/loading-data-cloud-datastore)
- [Load data from a Firestore export](/bigquery/docs/loading-data-cloud-firestore)
- [Load data using the Storage Write API](/bigquery/docs/write-api-batch-load)
- [Load data into partitioned tables](/bigquery/docs/load-data-partitioned-tables)

### Write and read data with the Storage API

- [Read data with the Storage Read API](/bigquery/docs/reference/storage)

- Write data with the Storage Write API

    - [Introduction](/bigquery/docs/write-api)
    - [Stream data with the Storage Write API](/bigquery/docs/write-api-streaming)
    - [Batch load data with the Storage Write API](/bigquery/docs/write-api-batch)
    - [Best practices](/bigquery/docs/write-api-best-practices)
    - [Stream updates with change data capture](/bigquery/docs/change-data-capture)
    - [Use the legacy streaming API](/bigquery/docs/streaming-data-into-bigquery)

- [Load data from other Google services](/bigquery/docs/load-data-google-services)
- [Discover and catalog Cloud Storage data](/bigquery/docs/automatic-discovery)
- [Load data using third-party apps](/bigquery/docs/load-data-third-party)
- [Load data using cross-cloud operations](/bigquery/docs/load-data-using-cross-cloud-transfer)

## Transform data

- [Introduction](/bigquery/docs/transform-intro)

### Prepare data

- [Introduction](/bigquery/docs/data-prep-introduction)
- [Prepare data with Gemini](/bigquery/docs/data-prep-get-suggestions)

- [Transform with DML](/bigquery/docs/data-manipulation-language)
- [Transform data in partitioned tables](/bigquery/docs/using-dml-with-partitioned-tables)
- [Work with change history](/bigquery/docs/change-history)

### Transform data with workflows

- [Introduction](/bigquery/docs/workflows-introduction)
- [Create workflows](/bigquery/docs/create-workflows)

## Export data

- [Introduction](/bigquery/docs/export-intro)
- [Export query results](/bigquery/docs/export-file)
- [Export to Cloud Storage](/bigquery/docs/exporting-data)
- [Export to Bigtable](/bigquery/docs/export-to-bigtable)
- [Export to Spanner](/bigquery/docs/export-to-spanner)
- [Export to Pub/Sub](/bigquery/docs/export-to-pubsub)
- [Export as Protobuf columns](/bigquery/docs/protobuf-export)

## Analyze

- [Introduction](/bigquery/docs/query-overview)

## Explore your data

- [Create queries with table explorer](/bigquery/docs/table-explorer)
- [Generate profile insights](/bigquery/docs/data-profile-scan)
- [Generate data insights](/bigquery/docs/data-insights)
- [Analyze with a data canvas](/bigquery/docs/data-canvas)
- [Analyze data with Gemini](/bigquery/docs/gemini-analyze-data)

## Query BigQuery data

- [Run a query](/bigquery/docs/running-queries)
- [Write queries with Gemini](/bigquery/docs/write-sql-gemini)
- [Write query results](/bigquery/docs/writing-results)

### Query data with SQL

- [Introduction](/bigquery/docs/introduction-sql)
- [Arrays](/bigquery/docs/arrays)
- [JSON data](/bigquery/docs/json-data)
- [Multi-statement queries](/bigquery/docs/multi-statement-queries)
- [Parameterized queries](/bigquery/docs/parameterized-queries)
- [Pipe syntax](/bigquery/docs/pipe-syntax-guide)
- [Recursive CTEs](/bigquery/docs/recursive-ctes)
- [Sketches](/bigquery/docs/sketches)
- [Table sampling](/bigquery/docs/table-sampling)
- [Time series](/bigquery/docs/working-with-time-series)
- [Transactions](/bigquery/docs/transactions)
- [Wildcard tables](/bigquery/docs/querying-wildcard-tables)

### Use geospatial analytics

- [Introduction](/bigquery/docs/geospatial-intro)
- [Work with geospatial analytics](/bigquery/docs/geospatial-data)
- [Best practices for spatial analysis](/bigquery/docs/best-practices-spatial-analysis)
- [Visualize geospatial data](/bigquery/docs/geospatial-visualize)
- [Grid systems for spatial analysis](/bigquery/docs/grid-systems-spatial-analysis)
- [Geospatial analytics syntax reference](/bigquery/docs/reference/standard-sql/geography_functions)

- Geospatial analytics tutorials

    - [Get started with geospatial analytics](/bigquery/docs/geospatial-get-started)
    - [Use geospatial analytics to plot a hurricane's path](/bigquery/docs/geospatial-tutorial-hurricane)

### Search data

- [Search indexed data](/bigquery/docs/search)
- [Work with text analyzers](/bigquery/docs/text-analysis-search)

- [Access historical data](/bigquery/docs/access-historical-data)

## Work with queries

### Save queries

- [Introduction](/bigquery/docs/saved-queries-introduction)
- [Create saved queries](/bigquery/docs/work-with-saved-queries)

### Continuous queries

- [Introduction](/bigquery/docs/continuous-queries-introduction)
- [Create continuous queries](/bigquery/docs/continuous-queries)

- [Use cached results](/bigquery/docs/cached-results)

### Work with sessions

- [Introduction](/bigquery/docs/sessions-intro)
- [Create sessions](/bigquery/docs/sessions-create)
- [Write queries in sessions](/bigquery/docs/sessions-write-queries)
- [Run queries in sessions](/bigquery/docs/sessions-run-queries)
- [Terminate sessions](/bigquery/docs/sessions-terminating)
- [View query history in sessions](/bigquery/docs/sessions-view-history)
- [Find sessions](/bigquery/docs/sessions-get-ids)

- [Troubleshoot queries](/bigquery/docs/troubleshoot-queries)

### Optimize queries

- [Introduction](/bigquery/docs/best-practices-performance-overview)
- [Use the query plan explanation](/bigquery/docs/query-plan-explanation)
- [Get query performance insights](/bigquery/docs/query-insights)
- [Optimize query computation](/bigquery/docs/best-practices-performance-compute)
- [Use history-based optimizations](/bigquery/docs/history-based-optimizations)
- [Optimize storage for query performance](/bigquery/docs/best-practices-storage)
- [Use materialized views](/bigquery/docs/materialized-views-use)
- [Use BI Engine](/bigquery/docs/bi-engine-query)
- [Use nested and repeated data](/bigquery/docs/best-practices-performance-nested)
- [Optimize functions](/bigquery/docs/best-practices-performance-functions)

## Query external data sources

### Manage open source metadata

- BigQuery metastore

    - [Introduction](/bigquery/docs/about-bqms)
    - [Use with Apache Spark and standard tables, BigQuery tables for Apache Iceberg, and external tables](/bigquery/docs/bqms-use-tables)
    - [Use with Apache Spark in BigQuery Studio](/bigquery/docs/bqms-use-notebook)
    - [Use with Apache Spark in Dataproc](/bigquery/docs/bqms-use-dataproc)
    - [Use with Apache Spark in Dataproc Serverless](/bigquery/docs/bqms-use-dataproc-serverless)
    - [Use with stored procedures](/bigquery/docs/bqms-use-stored-procedures)
    - [Create tables with Apache Spark and query in BigQuery](/bigquery/docs/bqms-query-tables)
    - [Additional features](/bigquery/docs/bqms-features)
    - [Migrate from Dataproc Metastore](/bigquery/docs/bqms-dpms-migration-tool)

- [BigLake Metastore](/bigquery/docs/manage-open-source-metadata)

### Use external tables and datasets

- Amazon S3 data

    - [Query Amazon S3 data](/bigquery/docs/query-aws-data)
    - [Export query results to Amazon S3](/bigquery/docs/omni-aws-export-results-to-s3)

- [Query Apache Iceberg data](/bigquery/docs/query-iceberg-data)
- [Query open table formats with manifests](/bigquery/docs/query-open-table-format-using-manifest-files)

- Azure Blob Storage data

    - [Query Azure Blob Storage data](/bigquery/docs/query-azure-data)
    - [Export query results to Azure Blob Storage](/bigquery/docs/omni-azure-export-results-to-azure-storage)

- [Query Cloud Bigtable data](/bigquery/docs/external-data-bigtable)

- Cloud Storage data

    - [Query Cloud Storage data in BigLake tables](/bigquery/docs/query-cloud-storage-using-biglake)
    - [Query Cloud Storage data in external tables](/bigquery/docs/query-cloud-storage-data)

- [Work with Salesforce Data Cloud data](/bigquery/docs/salesforce-quickstart)
- [Query Google Drive data](/bigquery/docs/query-drive-data)
- [Create AWS Glue federated datasets](/bigquery/docs/glue-federated-datasets)
- [Create Spanner external datasets](/bigquery/docs/spanner-external-datasets)

### Run federated queries

- [Federated queries](/bigquery/docs/federated-queries-intro)
- [Query SAP Datasphere data](/bigquery/docs/sap-datasphere-federated-queries)
- [Query AlloyDB data](/bigquery/docs/alloydb-federated-queries)
- [Query Spanner data](/bigquery/docs/spanner-federated-queries)
- [Query Cloud SQL data](/bigquery/docs/cloud-sql-federated-queries)

## Use notebooks

- [Introduction](/bigquery/docs/programmatic-analysis)

### Use Colab notebooks

- [Introduction](/bigquery/docs/notebooks-introduction)
- [Create notebooks](/bigquery/docs/create-notebooks)
- [Explore query results](/bigquery/docs/explore-data-colab)

### Use DataFrames

- [Introduction](/bigquery/docs/bigquery-dataframes-introduction)
- [Try BigQuery DataFrames](/bigquery/docs/dataframes-quickstart)
- [Use BigQuery DataFrames](/bigquery/docs/use-bigquery-dataframes)

### Use Jupyter notebooks

- [Use the BigQuery JupyterLab plugin](/bigquery/docs/jupyterlab-plugin)
- [Use managed Jupyter notebooks](/bigquery/docs/visualize-jupyter)

## Use analysis and BI tools

- [Introduction](/bigquery/docs/data-analysis-tools-intro)
- [Use Connected Sheets](/bigquery/docs/connected-sheets)
- [Use Tableau](/bigquery/docs/analyze-data-tableau)
- [Use Looker](/bigquery/docs/looker)
- [Use Looker Studio](/bigquery/docs/visualize-looker-studio)
- [Use third-party tools](/bigquery/docs/third-party-integration)

### Google Cloud Ready - BigQuery

- [Overview](/bigquery/docs/bigquery-ready-overview)
- [Partners](/bigquery/docs/bigquery-ready-partners)

## Share with Analytics Hub

- [Introduction](/bigquery/docs/analytics-hub-introduction)
- [Manage data exchanges](/bigquery/docs/analytics-hub-manage-exchanges)
- [Manage listings](/bigquery/docs/analytics-hub-manage-listings)
- [Manage subscriptions](/bigquery/docs/analytics-hub-manage-subscriptions)
- [Configure user roles](/bigquery/docs/analytics-hub-grant-roles)
- [View and subscribe to listings](/bigquery/docs/analytics-hub-view-subscribe-listings)
- [Share sensitive data with data clean rooms](/bigquery/docs/data-clean-rooms)

### Entity resolution

- [Introduction](/bigquery/docs/entity-resolution-intro)
- [Use entity resolution](/bigquery/docs/entity-resolution-setup)

- [VPC Service Controls for Analytics Hub](/bigquery/docs/analytics-hub-vpc-sc-rules)
- [Stream sharing with Pub/Sub](/bigquery/docs/analytics-hub-stream-sharing)
- [Commercialize listings on Cloud Marketplace](/bigquery/docs/analytics-hub-cloud-marketplace)

## AI and machine learning

- [Introduction](/bigquery/docs/bqml-introduction)

## Generative AI and pretrained models

### Choose generative AI and task-specific functions

- [Choose a natural language processing function](/bigquery/docs/choose-ml-text-function)
- [Choose a document processing function](/bigquery/docs/choose-document-processing-function)
- [Choose a transcription function](/bigquery/docs/choose-transcription-function)

### Generative AI

- [Overview](/bigquery/docs/generative-ai-overview)

#### Tutorials

- Generate text

	- [Generate text using public data and Gemini](/bigquery/docs/generate-text-tutorial-gemini)
	- [Generate text using public data and PaLM](/bigquery/docs/generate-text-tutorial)
	- [Generate text using your data](/bigquery/docs/generate-text)
	- [Handle quota errors by calling ML.GENERATE\_TEXT iteratively](/bigquery/docs/iterate-generate-text-calls)
	- [Tune a model using your data](/bigquery/docs/generate-text-tuning)
	- [Use tuning and evaluation to improve model performance](/bigquery/docs/tune-evaluate)
	- [Analyze images with a Gemini vision model](/bigquery/docs/image-analysis)

- Generate embeddings

    - [Generate text embeddings using an LLM](/bigquery/docs/generate-text-embedding)
    - [Generate image embeddings using an LLM](/bigquery/docs/generate-visual-content-embedding)
    - [Handle quota errors by calling ML.GENERATE\_EMBEDDING iteratively](/bigquery/docs/iterate-generate-embedding-calls)
    - [Generate video embeddings using an LLM](/bigquery/docs/generate-video-embedding)
    - [Generate and search multimodal embeddings](/bigquery/docs/generate-multimodal-embeddings)
    - [Generate text embeddings using pretrained TensorFlow models](/bigquery/docs/generate-embedding-with-tensorflow-models)

- Vector search

    - [Search embeddings with vector search](/bigquery/docs/vector-search)
    - [Perform semantic search and retrieval-augmented generation](/bigquery/docs/vector-index-text-search-tutorial)

### Task-specific solutions

- [Overview](/bigquery/docs/ai-application-overview)

#### Tutorials

- Natural language processing

    - [Understand text](/bigquery/docs/understand-text)
    - [Translate text](/bigquery/docs/translate-text)

- Document processing

    - [Process documents](/bigquery/docs/process-document)
    - [Parse PDFs in a retrieval-augmented generation pipeline](/bigquery/docs/rag-pipeline-pdf)

- Speech recognition

    - [Transcribe audio files](/bigquery/docs/transcribe)

- Computer vision

    - [Annotate images](/bigquery/docs/annotate-image)
    - [Run inference on image data](/bigquery/docs/object-table-inference)
    - [Analyze images with an imported classification model](/bigquery/docs/inference-tutorial-resnet)
    - [Analyze images with an imported feature vector model](/bigquery/docs/inference-tutorial-mobilenet)

## Machine learning

### ML models and MLOps

- [End-to-end journey per model](/bigquery/docs/e2e-journey)
- [Model creation](/bigquery/docs/model-overview)
- [Hyperparameter tuning overview](/bigquery/docs/hp-tuning-overview)
- [Model evaluation overview](/bigquery/docs/evaluate-overview)
- [Model inference overview](/bigquery/docs/inference-overview)
- [Explainable AI overview](/bigquery/docs/xai-overview)
- [Model weights overview](/bigquery/docs/weights-overview)
- [ML pipelines overview](/bigquery/docs/ml-pipelines-overview)
- [Model monitoring overview](/bigquery/docs/model-monitoring-overview)
- [Manage BigQueryML models in Vertex AI](/bigquery/docs/managing-models-vertex)

### Use cases

- [Forecasting](/bigquery/docs/forecasting-overview)
- [Anomaly detection](/bigquery/docs/anomaly-detection-overview)
- [Recommendation](/bigquery/docs/recommendation-overview)
- [Classification](/bigquery/docs/classification-overview)
- [Regression](/bigquery/docs/regression-overview)
- [Dimensionality reduction](/bigquery/docs/dimensionality-reduction-overview)
- [Clustering](/bigquery/docs/clustering-overview)

### Tutorials

- [Get started with BigQuery ML](/bigquery/docs/create-machine-learning-model)

- Regression and classification

    - [Create a linear regression model](/bigquery/docs/linear-regression-tutorial)
    - [Create a logistic regression classification model](/bigquery/docs/logistic-regression-prediction)
    - [Create a boosted tree classification model](/bigquery/docs/boosted-tree-classifier-tutorial)

- Clustering

    - [Cluster data with a k-means model](/bigquery/docs/kmeans-tutorial)

- Recommendation

    - [Create recommendations based on explicit feedback with a matrix factorization model](/bigquery/docs/bigqueryml-mf-explicit-tutorial)
    - [Create recommendations based on implicit feedback with a matrix factorization model](/bigquery/docs/bigqueryml-mf-implicit-tutorial)

- Time series forecasting

    - [Forecast a single time series with a univariate model](/bigquery/docs/arima-single-time-series-forecasting-tutorial)
    - [Forecast multiple time series with a univariate model](/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
    - [Scale a univariate time series model to millions of time series](/bigquery/docs/arima-speed-up-tutorial)
    - [Forecast a single time series with a multivariate model](/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
    - [Forecast multiple time series with a multivariate model](/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
    - [Use custom holidays with a univariate model](/bigquery/docs/time-series-forecasting-holidays-tutorial)
    - [Limit forecasted values for a univariate model](/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
    - [Forecast hierarchical time series with a univariate model](/bigquery/docs/arima-time-series-forecasting-with-hierarchical-time-series)

- Anomaly detection

    - [Anomaly detection with a multivariate time series](/bigquery/docs/time-series-anomaly-detection-tutorial)

- Imported and remote models

    - [Make predictions with imported TensorFlow models](/bigquery/docs/making-predictions-with-imported-tensorflow-models)
    - [Make predictions with scikit-learn models in ONNX format](/bigquery/docs/making-predictions-with-sklearn-models-in-onnx-format)
    - [Make predictions with PyTorch models in ONNX format](/bigquery/docs/making-predictions-with-pytorch-models-in-onnx-format)
    - [Make predictions with remote models on Vertex AI](/bigquery/docs/bigquery-ml-remote-model-tutorial)

- Hyperparameter tuning

    - [Improve model performance with hyperparameter tuning](/bigquery/docs/hyperparameter-tuning-tutorial)

- Export models

    - [Export a BigQuery ML model for online prediction](/bigquery/docs/export-model-tutorial)

## Augmented analytics

- [Contribution analysis](/bigquery/docs/contribution-analysis)

### Tutorials

- [Get data insights from contribution analysis using a summable metric](/bigquery/docs/get-contribution-analysis-insights)
- [Get data insights from contribution analysis using a summable ratio metric](/bigquery/docs/get-contribution-analysis-insights-sum-ratio)

## Create and manage features

- [Feature preprocessing overview](/bigquery/docs/preprocess-overview)
- [Supported input feature types](/bigquery/docs/input-feature-types)
- [Automatic preprocessing](/bigquery/docs/auto-preprocessing)
- [Manual preprocessing](/bigquery/docs/manual-preprocessing)
- [Feature serving](/bigquery/docs/feature-serving)
- [Perform feature engineering with the TRANSFORM clause](/bigquery/docs/bigqueryml-transform)

## Work with models

- [List models](/bigquery/docs/listing-models)
- [Manage models](/bigquery/docs/managing-models)
- [Get model metadata](/bigquery/docs/getting-model-metadata)
- [Update model metadata](/bigquery/docs/updating-model-metadata)
- [Export models](/bigquery/docs/exporting-models)
- [Delete models](/bigquery/docs/deleting-models)

- [Reference patterns](https://cloud.google.com/bigquery/docs/reference-patterns)

## Administer

- [Introduction](/bigquery/docs/admin-intro)

## Manage resources

- [Organize resources](/bigquery/docs/resource-hierarchy)
- [Understand reliability](/bigquery/docs/reliability-intro)

### Manage code assets

- [Manage data preparations](/bigquery/docs/manage-data-preparations)
- [Manage notebooks](/bigquery/docs/manage-notebooks)
- [Manage saved queries](/bigquery/docs/manage-saved-queries)
- [Manage workflows](/bigquery/docs/manage-workflows)

### Manage tables

- [Manage tables](/bigquery/docs/managing-tables)
- [Manage table data](/bigquery/docs/managing-table-data)
- [Modify table schemas](/bigquery/docs/managing-table-schemas)

### Manage table clones

- [Introduction](/bigquery/docs/table-clones-intro)
- [Create table clones](/bigquery/docs/table-clones-create)

### Manage table snapshots

- [Introduction](/bigquery/docs/table-snapshots-intro)
- [Create table snapshots](/bigquery/docs/table-snapshots-create)
- [Restore table snapshots](/bigquery/docs/table-snapshots-restore)
- [List table snapshots](/bigquery/docs/table-snapshots-list)
- [View table snapshot metadata](/bigquery/docs/table-snapshots-metadata)
- [Update table snapshot metadata](/bigquery/docs/table-snapshots-update)
- [Delete table snapshots](/bigquery/docs/table-snapshots-delete)
- [Create periodic table snapshots](/bigquery/docs/table-snapshots-scheduled)

- [Manage default configurations](/bigquery/docs/default-configuration)
- [Manage datasets](/bigquery/docs/managing-datasets)
- [Manage materialized views](/bigquery/docs/materialized-views-manage)
- [Manage materialized view replicas](/bigquery/docs/materialized-view-replicas-manage)

## Orchestrate resources

- [Introduction](/bigquery/docs/orchestrate-workloads)

### Orchestrate code assets

- [Orchestrate notebooks](/bigquery/docs/orchestrate-notebooks)
- [Orchestrate workflows](/bigquery/docs/orchestrate-workflows)
- [Orchestrate DAGs](/bigquery/docs/orchestrate-dags)

### Orchestrate jobs and queries

- [Run jobs programmatically](/bigquery/docs/running-jobs)
- [Schedule queries](/bigquery/docs/scheduling-queries)

## Workload management

- [Introduction](/bigquery/docs/reservations-intro)
- [Slots](/bigquery/docs/slots)
- [Slot reservations](/bigquery/docs/reservations-workload-management)
- [Slots autoscaling](/bigquery/docs/slots-autoscaling-intro)

### Use reservations

- [Get started](/bigquery/docs/reservations-get-started)
- [Estimate slot capacity requirements](/bigquery/docs/slot-estimator)
- [View slot recommendations and insights](/bigquery/docs/slot-recommender)
- [Purchase and manage slot commitments](/bigquery/docs/reservations-commitments)
- [Work with slot reservations](/bigquery/docs/reservations-tasks)
- [Work with reservation assignments](/bigquery/docs/reservations-assignments)

### Manage jobs

- [Understand jobs](/bigquery/docs/jobs-overview)
- [Manage jobs](/bigquery/docs/managing-jobs)

- [Use query queues](/bigquery/docs/query-queues)

### Legacy reservations

- [Introduction to legacy reservations](/bigquery/docs/reservations-intro-legacy)
- [Legacy slot commitments](/bigquery/docs/reservations-details-legacy)
- [Purchase and manage legacy slot commitments](/bigquery/docs/reservations-commitments-legacy)
- [Work with legacy slot reservations](/bigquery/docs/reservations-tasks-legacy)

### Manage BI Engine

- [Introduction](/bigquery/docs/bi-engine-intro)
- [Reserve BI Engine capacity](/bigquery/docs/bi-engine-reserve-capacity)

## Monitor workloads

- [Introduction](/bigquery/docs/monitoring)
- [Monitor resource utilization](/bigquery/docs/admin-resource-charts)
- [Monitor jobs](/bigquery/docs/admin-jobs-explorer)
- [Monitor Analytics Hub listings](/bigquery/docs/analytics-hub-monitor-listings)
- [Monitor BI Engine](/bigquery/docs/bi-engine-monitor)
- [Monitor data quality](/bigquery/docs/data-quality-scan)
- [Monitor Data Transfer Service](/bigquery/docs/dts-monitor)
- [Monitor materialized views](/bigquery/docs/materialized-views-monitor)
- [Monitor reservations](/bigquery/docs/reservations-monitoring)
- [Monitor continuous queries](/bigquery/docs/continuous-queries-monitor)
- [Dashboards, charts and alerts](/bigquery/docs/monitoring-dashboard)

## Optimize resources

### Control costs

- [Estimate and control costs](/bigquery/docs/best-practices-costs)
- [Create custom query quotas](/bigquery/docs/custom-quotas)

### Optimize with recommendations

- [Introduction](/bigquery/docs/recommendations-intro)
- [Manage cluster and partition recommendations](/bigquery/docs/manage-partition-cluster-recommendations)
- [Manage materialized view recommendations](/bigquery/docs/manage-materialized-recommendations)

### Organize with labels

- [Introduction](/bigquery/docs/labels-intro)
- [Add labels](/bigquery/docs/adding-labels)
- [View labels](/bigquery/docs/viewing-labels)
- [Update labels](/bigquery/docs/updating-labels)
- [Filter using labels](/bigquery/docs/filtering-labels)
- [Delete labels](/bigquery/docs/deleting-labels)

### Manage data quality

- [Monitor data quality with scans](/bigquery/docs/data-quality-scan)
- [Data Catalog overview](/bigquery/docs/data-catalog-overview)
- [Work with Data Catalog](/bigquery/docs/data-catalog)

## Govern

- [Introduction](/bigquery/docs/data-governance)

## Control access to resources

- [Introduction](https://cloud.google.com/bigquery/docs/access-control)

### Control access with IAM

- [Manage resource access policies](https://cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [Control access with tags](https://cloud.google.com/bigquery/docs/tags)
- [Control access with conditions](/bigquery/docs/conditions)

### Control access with authorization

- [Authorized datasets](https://cloud.google.com/bigquery/docs/authorized-datasets)
- [Authorized routines](/bigquery/docs/authorized-routines)
- [Authorized views](/bigquery/docs/authorized-views)

### Restrict network access

- [Control access with VPC service controls](https://cloud.google.com/bigquery/docs/vpc-sc)
- [Regional endpoints](/bigquery/docs/regional-endpoints)

## Control column and row access

### Control access to table columns

- [Introduction to column-level access control](/bigquery/docs/column-level-security-intro)
- [Restrict access with column-level access control](https://cloud.google.com/bigquery/docs/column-level-security)
- [Impact on writes](https://cloud.google.com/bigquery/docs/column-level-security-writes)

### Manage policy tags

- [Manage policy tags across locations](https://cloud.google.com/bigquery/docs/managing-policy-tags-across-locations)
- [Best practices for using policy tags](https://cloud.google.com/bigquery/docs/best-practices-policy-tags)

### Control access to table rows

- [Introduction to row-level security](https://cloud.google.com/bigquery/docs/row-level-security-intro)
- [Work with row-level security](https://cloud.google.com/bigquery/docs/managing-row-level-security)
- [Use row-level security with other BigQuery features](/bigquery/docs/using-row-level-security-with-features)
- [Best practices for row-level security](/bigquery/docs/best-practices-row-level-security)

## Protect sensitive data

### Mask data in table columns

- [Introduction to data masking](https://cloud.google.com/bigquery/docs/column-data-masking-intro)
- [Mask column data](https://cloud.google.com/bigquery/docs/column-data-masking)

### Anonymize data with differential privacy

- [Use differential privacy](/bigquery/docs/differential-privacy)
- [Extend differential privacy](/bigquery/docs/extend-differential-privacy)

- [Restrict data access using analysis rules](https://cloud.google.com/bigquery/docs/analysis-rules)
- [Use Sensitive Data Protection](https://cloud.google.com/bigquery/docs/scan-with-dlp)

## Manage encryption

- [Encryption at rest](https://cloud.google.com/bigquery/docs/encryption-at-rest)
- [Customer-managed encryption keys](https://cloud.google.com/bigquery/docs/customer-managed-encryption)
- [Column-level encryption with Cloud KMS](/bigquery/docs/column-key-encrypt)
- [AEAD encryption](https://cloud.google.com/bigquery/docs/aead-encryption-concepts)

## Audit workloads

- [Introduction](/bigquery/docs/introduction-audit-workloads)
- [Audit policy tags](https://cloud.google.com/bigquery/docs/auditing-policy-tags)
- [View Data Policy audit logs](/bigquery/docs/column-data-masking-audit-logging)
- [Data Transfer Service audit logs](/bigquery/docs/audit-logging)
- [Analytics Hub audit logging](https://cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- [BigQuery audit logs reference](/bigquery/docs/reference/auditlogs)
- [Migrate audit logs](/bigquery/docs/reference/auditlogs/migration)
- [BigLake API audit logs](/bigquery/docs/biglake-audit-logging)
- [BigQuery Migration API audit logs](/bigquery/docs/reference/auditlogs/audit-logging-bq-migration)

## Develop

- [Introduction](https://cloud.google.com/bigquery/docs/developer-overview)
- [BigQuery code samples](https://cloud.google.com/bigquery/docs/samples)

## BigQuery API basics

- [BigQuery APIs and libraries overview](/bigquery/docs/reference/libraries-overview)

### Authentication

- [Introduction](/bigquery/docs/authentication)
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
