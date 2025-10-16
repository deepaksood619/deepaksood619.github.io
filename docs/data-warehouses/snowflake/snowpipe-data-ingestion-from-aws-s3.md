# Snowpipe Data Ingestion from AWS S3

## 1. Introduction

Snowpipe is Snowflake’s serverless, continuous data ingestion service. It allows you to load data automatically (or semi-automatically) from files as soon as they land in a stage (e.g. in Amazon S3) into a Snowflake table. 

Instead of executing large batch COPY INTO loads on a schedule, Snowpipe works in micro-batches and helps your data be available within minutes. 

There are two main ways Snowpipe can detect new files:

- Cloud event notifications (automated ingest)  
- REST API calls from client applications  

## 2. Key Concepts & Components

| Component                       | Role in Snowpipe Workflow                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Stage (external stage)**      | The location in S3 where files are stored or land. Snowpipe reads from this stage.                  |
| **File Format**                 | Defines how to parse files (e.g. CSV, JSON) — delimiter, quotes, null handling, etc.                |
| **Pipe**                        | A Snowflake object wrapping a COPY INTO statement. Snowpipe uses this definition to load new files. |
| **Notification / Event Source** | Mechanism by which Snowpipe learns of new files (S3 → SQS, or REST API).                            |
| **Load queue**                  | Files get queued internally based on notifications or explicit REST calls.                          |
| **Load history / metadata**     | Records about which files were loaded, statuses, row counts, etc.                                   |

## 3. How Snowpipe Works (Overview)

1. **Place files in S3:** You put your data files in an S3 location that a Snowflake stage points to.  
2. **Snowpipe detects new files:** It notices new or updated files using either cloud messaging (like SQS) or the REST API.  
3. **Files are queued:** Snowpipe keeps a list of the new files ready to be loaded.  
4. **Data is loaded automatically:** Snowflake’s serverless compute reads the files and runs the COPY INTO logic from the pipe, adding the rows into your table.  
5. **Tracking and metadata:** Snowflake records information about each load, including success or failure, row counts, and status.

**Some notes:**

- Snowpipe may combine or split loads into different transactions based on file size / load patterns.  
- The order of file loading is not guaranteed to follow absolute staging order because multiple processes handle the queue. 
- Snowpipe ensures deduplication of files — the same file won’t be loaded twice (unless forced). 
- Event notifications older than 14 days may not be processed if the pipe was paused. 

## 4. Setup Steps

### 4.1 Configure S3 / AWS Side

This setup ensures that S3 can send events / allow Snowflake to access files.

#### 4.1.1 Setup S3 Bucket & Prefix

- Decide on a bucket and “prefix” (subfolder) in S3 where your files will land, e.g. `s3://my-bucket/data/ingest/`
- Upload initial files there. 

#### 4.1.2 Permissions

You need to allow Snowflake to read from your S3 location. You can do this via:

- AWS IAM credentials (access key + secret) stored in the stage definition  
- Storage Integration (recommended) — a more secure way to grant permissions without embedding keys.  

If using a storage integration, you configure IAM roles and trust policies in AWS so Snowflake has permission to access that bucket.

#### 4.1.3 Enable S3 Event Notifications (for auto ingest)

To use automated ingest, you must configure S3 to send event notifications (e.g. `s3:ObjectCreated:*`) to an SNS or SQS destination. 

- **Destination:** typically an SQS queue that Snowpipe polls  
- **Optional:** Use prefix filters so only relevant file paths trigger ingest (reducing noise)  
- Make sure the S3 bucket and SQS queue are in the **same AWS region**  
- Update the SQS queue policy to allow `s3.amazonaws.com` to send messages to that queue (via `SQS:SendMessage`) with a condition that the source ARN is your bucket.  

### 4.2 Snowflake Side Setup

You do this via SQL (Snowflake UI, SnowSQL, or scripts).

#### 4.2.1 Create or Use Database / Schema and Warehouse

```sql
CREATE OR REPLACE WAREHOUSE ingest_wh
  WAREHOUSE_SIZE = 'XSMALL'
  AUTO_SUSPEND = 300
  AUTO_RESUME = TRUE;
  
USE WAREHOUSE ingest_wh;

CREATE OR REPLACE DATABASE ingest_db;

USE DATABASE ingest_db;

USE SCHEMA PUBLIC;
```

#### 4.2.2 Create File Format

Define how your incoming CSV / JSON / other file types are structured.

```sql
CREATE OR REPLACE FILE FORMAT ingest_csv_format
  TYPE = 'CSV'
  FIELD_OPTIONALLY_ENCLOSED_BY = '"'
  SKIP_HEADER = 1
  NULL_IF = ('NULL', '');
```

Adjust options (delimiters, quoting, escape, etc.) per your file pattern.

#### 4.2.3 Create External Stage

Point to your S3 location, referencing credentials or storage integration.

Using AWS credentials approach:

```sql
CREATE OR REPLACE STAGE ingest_stage
  URL = 's3://my-bucket/data/ingest/'
  CREDENTIALS = (
    AWS_KEY_ID = '<YOUR_ACCESS_KEY>'
    AWS_SECRET_KEY = '<YOUR_SECRET_KEY>'
  )
  FILE_FORMAT = ingest_csv_format;
```

#### 4.2.4 Create Target Table

Create a table whose schema matches your file’s structure, e.g.:

```sql
CREATE OR REPLACE TABLE ingest_table (
  description STRING,
  industry STRING,
  level STRING,
  size STRING,
  line_code STRING,
  value NUMBER(38,4),
  status STRING,
  Unit STRING,
  Footnotes STRING
);
```

  

Adjust data types as needed.

#### 4.2.5 Create the Pipe

Define a pipe with a COPY INTO statement.

- For automated ingest, set `AUTO_INGEST = TRUE`
- For manual ingest (REST or manual refresh), set `AUTO_INGEST = FALSE  `    

Example (auto ingest):

```sql
CREATE OR REPLACE PIPE ingest_pipe
  AUTO_INGEST = TRUE
COPY INTO ingest_table
FROM @ingest_stage
FILE_FORMAT = ingest_csv_format
ON_ERROR = 'CONTINUE';
```

Permissions: The executing user must have OPERATE on the pipe, USAGE on stage, INSERT on table, etc. 

After creating the pipe, you can inspect its notification channel:

`DESC PIPE ingest_pipe;`

The `notification_channel` column shows which SQS queue is associated (for auto ingest). 

## 5. Ingestion Methods

### Automated Cloud Messaging (S3 → SQS → Snowpipe)

This method gives you the “automatic as files arrive” behavior.

- S3 publishes new file events to SQS (via event notification) 
- Snowpipe polls the SQS queue and enqueues new files for ingest 
- Snowflake’s serverless compute reads those queued files, runs the pipe’s COPY INTO, and loads data 

## 6. Monitoring & Troubleshooting - Error Handling & Retry

- The ON_ERROR clause in the pipe’s COPY statement defines behavior on row-level errors (e.g. 'CONTINUE', 'ABORT_STATEMENT', etc.). 
- You can use VALIDATION_MODE = RETURN_ERRORS to test load behavior without inserting data. 
- For staged files that failed due to format or schema issues, examine error messages in load history and consider reformatting. 
- You have to manually remove or archive staged files you no longer want; Snowpipe does not auto-purge them.

## 7. Best Practices & Recommendations

- **File sizing:** For best performance, aim for file sizes in the range ~100–250 MB (compressed) instead of many tiny files. Too many small files can lead to high overhead. 
- **Event filtering:** Use prefix and suffix filters in S3 → SQS to only notify for relevant files (e.g., .csv) to reduce noise and cost.  
- **Use storage integrations** when possible instead of embedding AWS keys in stage definitions.  
- **Pause pipe when needed:** You can pause ingestion with ALTER PIPE … SET PIPE_EXECUTION_PAUSED = TRUE when doing maintenance. 
- **Recreating pipe:** When you recreate a pipe, its load history is dropped — be careful not to cause duplicates. 
- **Monitor costs:** Snowpipe has a compute cost plus a file overhead fee (per 1,000 files). Many small files can be expensive. 
- **Schema consistency:** Keep incoming file schema stable, or use a raw staging approach (e.g. load into VARIANT) and transform downstream.
- **Testing:** Use VALIDATION_MODE = RETURN_ERRORS or FORCE = TRUE in COPY statements while testing.

## Edge Cases

| Scenario                     | Issue                              | Solution                                                         |
| ---------------------------- | ---------------------------------- | ---------------------------------------------------------------- |
| Extra column in new file     | Load fails                         | Add MATCH_BY_COLUMN_NAME=CASE_INSENSITIVE; allow flexible schema |
| File has missing columns     | NULL values                        | Use column defaults                                              |
| Completely new schema file   | Incorrect mapping                  | Use landing raw table + JSON approach                            |
| Table created without schema | Snowflake needs explicit structure | Use dynamic schema with VARIANT                                  |
| Duplicate file load          | Duplicate rows                     | Use COPY_OPTIONS = (ON_ERROR='CONTINUE') + FILE_NAME dedup       |
| Bad data rows                | Failure                            | Use ON_ERROR = CONTINUE                                          |
| CSV delimiter issues         | wrong parsing                      | specify FIELD_OPTIONALLY_ENCLOSED_BY='"'                         |

[Snowpipe \| Snowflake Documentation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro)
