# Data Loading Using COPY INTO from AWS S3

## Overview

COPY INTO is a bulk loading command in Snowflake used to load data on demand from external storage like Amazon S3 into Snowflake tables. Unlike Snowpipe (which provides continuous auto-ingestion), COPY INTO is manual or scheduled but gives more control, better error handling, and batch loading performance.

## When to Use COPY INTO

| Use Case                            | Choose COPY INTO     |
| ----------------------------------- | -------------------- |
| One-time or periodic batch loads    | Yes                  |
| Scheduled ETL/ELT jobs              | Yes                  |
| Need more control over loading      | Yes                  |
| Continuous streaming-like ingestion | Use Snowpipe instead |

## Prerequisites

Before you start, ensure:

- Snowflake account is set up
- Warehouse and database exist
- IAM role for S3 access configured
- Data files prepared (CSV, JSON, Parquet etc.)

## Steps

### Step 1: Create Warehouse, Database, and Schema

```sql
CREATE WAREHOUSE IF NOT EXISTS COPY_WH WAREHOUSE_SIZE = 'XSMALL' 

CREATE DATABASE IF NOT EXISTS COPY_DB;

CREATE SCHEMA IF NOT EXISTS COPY_SCHEMA;
```

### Step 2: Create Target Table

```sql
CREATE OR REPLACE TABLE CUSTOMER_DATA (
    CUSTOMER_ID INT,
    FIRST_NAME STRING,
    LAST_NAME STRING,
    EMAIL STRING,
    COUNTRY STRING,
    CREATED_AT TIMESTAMP
);
```

### Step 3: Configure AWS S3 External Stage

#### Option A: Using AWS Access Key

```sql
CREATE OR REPLACE STAGE CUSTOMER_S3_STAGE
URL='s3://my-bucket/customer-data/'
CREDENTIALS = (AWS_KEY_ID='YOUR_AWS_KEY' AWS_SECRET_KEY='YOUR_AWS_SECRET');
```

#### Option B: Using AWS IAM Role

```sql
CREATE OR REPLACE STAGE CUSTOMER_S3_STAGE
URL='s3://my-bucket/customer-data/'
CREDENTIALS = (AWS_ROLE='arn:aws:iam::123456789012:role/mySnowflakeRole');
```

### Step 4: Define File Format

Example for CSV:

```sql
CREATE OR REPLACE FILE FORMAT CSV_FMT
TYPE = 'CSV'
FIELD_DELIMITER = ','
SKIP_HEADER = 1
NULL_IF = ('NULL', 'null')
EMPTY_FIELD_AS_NULL = TRUE;
```

### Step 5: Validate File Visibility

`LIST @CUSTOMER_S3_STAGE;`

### Step 6: Load Data Using COPY INTO

```sql
COPY INTO CUSTOMER_DATA
FROM @CUSTOMER_S3_STAGE
FILE_FORMAT = (FORMAT_NAME = CSV_FMT)
ON_ERROR = 'CONTINUE';
```

Optional Parameters

| Parameter | Purpose                      | Example                |
| --------- | ---------------------------- | ---------------------- |
| ON_ERROR  | Continue or abort on errors  | ON_ERROR='SKIP_FILE'   |
| PATTERN   | Load only matching filenames | PATTERN='.*2025.*.csv' |
| FORCE     | Reload already loaded files  | FORCE=TRUE             |

### Step 7: Verify Successful Load

```sql
SELECT COUNT(*) FROM CUSTOMER_DATA;

SELECT * FROM TABLE(INFORMATION_SCHEMA.LOAD_HISTORY()) ORDER BY LAST_LOAD_TIME DESC;
```

## Example: COPY INTO Script

### 1. Select Warehouse, Database & Schema

```sql
USE WAREHOUSE COPY_WH;       -- Warehouse for running COPY INTO
USE DATABASE COPY_DB;
USE SCHEMA COPY_SCHEMA;
```

### 2. Create Target Table

```sql
CREATE OR REPLACE TABLE CUSTOMER_DATA (
    CUSTOMER_ID INT,
    FIRST_NAME STRING,
    LAST_NAME STRING,
    EMAIL STRING,
    COUNTRY STRING,
    CREATED_AT TIMESTAMP
);
```

### 3. Create File Format (CSV with settings)

```sql
CREATE OR REPLACE FILE FORMAT CSV_FMT
    TYPE = 'CSV'
    FIELD_DELIMITER = ','
    SKIP_HEADER = 1
    NULL_IF = ('NULL', 'null', '')
    EMPTY_FIELD_AS_NULL = TRUE
    FIELD_OPTIONALLY_ENCLOSED_BY = '"';
```

### 4. Create STAGE to connect to S3

Best practice: Use IAM role, not access keys.

```sql
CREATE OR REPLACE STAGE CUSTOMER_S3_STAGE
    URL = 's3://my-bucket/customer-data/'
    CREDENTIALS = (AWS_ROLE = 'arn:aws:iam::123456789012:role/mySnowflakeRole')
    FILE_FORMAT = CSV_FMT;
```

 (Optional: if S3 bucket is in a different region add endpoint)

`ENDPOINT = 's3.us-west-1.amazonaws.com';`

### 5. Validate connectivity by listing files

`LIST @CUSTOMER_S3_STAGE;`

### 6. Load data using COPY INTO

- Duplicate prevention
- ON_ERROR handling

```sql
COPY INTO CUSTOMER_DATA
FROM @CUSTOMER_S3_STAGE
FILE_FORMAT = (FORMAT_NAME = CSV_FMT)
ON_ERROR = 'CONTINUE'           -- Skip bad rows
```

Prevent loading the same file twice:

`MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE;`

### 7. Verify load

`SELECT COUNT(*) AS TOTAL_ROWS FROM CUSTOMER_DATA;`

View load history

```sql
SELECT * FROM TABLE(INFORMATION_SCHEMA.LOAD_HISTORY(
    TABLE_NAME => 'CUSTOMER_DATA',
    START_TIME => DATEADD(hour, -24, CURRENT_TIMESTAMP())
))
ORDER BY LAST_LOAD_TIME DESC;
```
