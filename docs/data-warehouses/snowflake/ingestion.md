# Data Ingestion / Loading

## Snowflake Data Loading

Snowflake offers a simple and scalable approach to loading data into its platform. It supports bulk data loading from various sources, including files, cloud storage, and external tables.

### Snowflake Data Loading Methods

**Snowflake COPY Command:** The `COPY` command is a powerful tool for efficiently loading large volumes of data into Snowflake. It supports various file formats and allows data to be loaded from cloud storage, on-premises storage, or local files.

**Snowpipe:** Snowpipe is Snowflake's continuous data ingestion service. It allows you to automatically load data into Snowflake tables as soon as new data is added to a staged area in a cloud storage platform like Amazon S3 or Azure Blob Storage. Snowpipe uses event-based triggers to load data in near real-time.

**Third-Party ETL Tools:** Snowflake integrates with various third-party ETL (Extract, Transform, Load) tools. Popular tools like Apache NiFi, Talend, Informatica, and others can be used to design and execute data integration workflows with Snowflake.

### Data Formats and Compression

Snowflake supports multiple data formats, including JSON, Avro, Parquet, ORC, and more. This flexibility allows users to choose the format that best suits their data and use case.

Compression options are also available, helping to optimize storage and reduce data transfer costs.

### Concurrency and Multi-Cluster Loading

Snowflake's architecture allows for concurrent data loading, supporting parallel loading of data into tables. This enables efficient utilization of resources and faster data ingestion.

Multi-cluster loading allows you to use multiple Snowflake virtual warehouses to load data concurrently, improving performance and scalability.

### Secure Data Ingestion

Snowflake provides features for secure data ingestion, including encryption of data in transit and at rest. It also supports role-based access control to manage permissions for data loading and ingestion processes.

## Snowpipe

In simple terms, Snowpipe is a continuous data ingestion service provided by Snowflake that loads files within minutes as soon as they are added to a stage and submitted for ingestion. Therefore, you can load data from files in micro-batches (organizing data into small groups/matches), allowing users to access the data within minutes (very less response time), rather than manually running COPY statements on a schedule to load large batches. By loading the data into micro-batches, Snowpipe makes it easier to analyze it. Snowpipe uses a combination of filenames and file checksums to ensure that only new data is processed.

### Advantages of Snowpipe

- By eliminating roadblocks, Snowpipe facilitates real-time analytics.
- It is cost-effective.
- It is simple to use.
- There is no management required.
- It provides flexibility, resilience, and so on.

[Snowpipe | Snowflake Documentation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro)

## Zero-copy cloning

Snowflake’s Zero Copy Cloning is a feature which provides a quick and easy way to create a copy of any table, schema, or an entire database without incurring any additional costs as the derived copy shares the underlying storage with the original object.

1. Almost no additional storage costs for cloning data
2. No waiting time for cloning data from one environment to another
3. No need for administrative efforts, as cloning is as simple as a Select
4. Since data exists only in one place, it’s easy to maintain
5. Instantly promotes corrected/fixed data to production

[Snowflake Zero Copy Cloning - A Comprehensive Guide | Encora](https://www.encora.com/insights/zero-copy-cloning-in-snowflake)

[Snowflake Zero Copy Cloning - ThinkETL](https://thinketl.com/snowflake-zero-copy-cloning/)

## Differences

| Feature                 | COPY INTO (Batch Load)                                                                   | Snowpipe (File-based Auto-ingest)                                                | Snowpipe Streaming (Row-based)                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Purpose**             | Load large volumes of data in batches                                                    | Continuously load data from files as they become available                       | Real-time ingestion of individual rows or small batches of data                                               |
| **Data Source**         | Files staged in S3, Azure, or GCS                                                        | Files staged in S3, Azure, or GCS                                                | Direct API calls from applications, IoT devices, or streaming platforms                                       |
| **Trigger Type**        | Manual execution of COPY INTO command                                                    | Automatic via cloud storage event notifications or REST API calls                | API calls to Snowpipe Streaming endpoints                                                                     |
| **Latency**             | Minutes to hours                                                                         | Seconds to a few minutes                                                         | Sub-second (real-time)                                                                                        |
| **File Required**       | Yes                                                                                      | Yes                                                                              | No                                                                                                            |
| **Schema Handling**     | Fixed schema defined in the COPY INTO command                                            | Fixed schema defined in the COPY INTO command                                    | Flexible schema using VARIANT/JSON or fixed schema defined in the PIPE object                                 |
| **Use Case**            | Historical data loads, ETL jobs, data migrations                                         | Continuous data ingestion from cloud storage                                     | Real-time analytics, IoT data processing, clickstream data                                                    |
| **Monitoring**          | COPY_HISTORY, LOAD_HISTORY views                                                         | LOAD_HISTORY, PIPE_STATUS views                                                  | STREAMING_INGEST_HISTORY view                                                                                 |
| **Error Handling**      | ON_ERROR clause options (CONTINUE, SKIP_FILE)                                            | ON_ERROR clause options (CONTINUE, SKIP_FILE)                                    | Client-side error handling required                                                                           |
| **Duplicates Handling** | Managed via FORCE=FALSE option or staging tables                                         | Managed via file tracking and deduplication logic                                | Client-side deduplication required                                                                            |
| **Serverless**          | No – requires a virtual warehouse                                                        | Yes – serverless compute                                                         | Yes – serverless compute                                                                                      |
| **Setup Complexity**    | Easy – straightforward SQL commands                                                      | Medium – requires cloud storage setup and event notification configuration       | High – requires SDK integration, API key management, and client-side logic                                    |
| **Cost Model**          | Warehouse compute charges + storage costs                                                | Serverless compute charges based on uncompressed data size                       | Transparent, throughput-based pricing (credits per uncompressed GB)                                           |
| **Best For**            | One-time or scheduled batch loads                                                        | Continuous ingestion from cloud storage                                          | Real-time streaming analytics and low-latency data processing                                                 |
| **Pros**                | Simple setup; predictable costs; suitable for large data volumes                         | Automated data loading; serverless; near real-time data availability             | True real-time ingestion; flexible schema; no need for file staging                                           |
| **Cons**                | Not real-time; requires manual intervention; potential for higher latency in large loads | Minor delays due to event notification processing; less control over load timing | Higher complexity; client-side error handling; potential for API rate limits and schema management challenges |

## Snowpipe Streaming

Snowpipe Streaming is Snowflake’s service for continuous, low-latency loading of streaming data directly into Snowflake. It enables near real-time data ingestion and analysis, allowing high volumes of data from diverse streaming sources to be available for query and analysis within seconds.

### Implementations

1. **High-performance architecture**
	- Uses snowpipe-streaming SDK
	- Throughput-based pricing
	- Uses PIPE objects to manage data flow and lightweight transformations
	- REST API for direct ingestion
	- Server-side schema validation
	- Optimized for high throughput and query efficiency
2. **Classic architecture**
	- Uses snowflake-ingest-sdk
	- Channels open directly against target tables (no PIPE object)
	- Pricing based on serverless compute and client connections
	- Reliable for existing pipelines

### Choosing Implementation

- **New projects:** High-performance architecture for better scalability, cost predictability, and performance.
- **Existing pipelines:** Classic architecture continues to operate; migration optional.

### Snowpipe Streaming vs Snowpipe

| Category                 | Snowpipe Streaming                   | Snowpipe |
| ------------------------ | ------------------------------------ | -------- |
| **Form of data to load** | Rows                                 | Files    |
| **Third-party software** | Custom Java application code wrapper | None     |

**Note:** Snowpipe Streaming complements Snowpipe; it’s ideal when data is streamed as rows rather than written to files.
