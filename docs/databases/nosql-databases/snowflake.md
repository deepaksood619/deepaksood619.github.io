# Snowflake

Snowflake is a cloud-based database and is currently offered as a pay-as-you-go service in the Amazon cloud. It is developed by Snowflake Computing.

Snowflake adopts a shared-nothing architecture. It uses Amazon S3 for its underlying data storage. It performs query execution within in elastic clusters of virtual machines, called virtual warehouse. The Cloud Service layer stores the collection of services that manage computation clusters, queries, transactions, and all the metadata like database catalogs and access control information in a key-value store (FoundationDB).

#### History

Implementation of Snowflake began in late 2012 and has been generally available since June 2015.

#### Concurrency Control

[Multi-version Concurrency Control (MVCC)](https://dbdb.io/browse?concurrency-control=multi-version-concurrency-control-mvcc)

Snowflake supports MVCC. As Snowflake's underlying data storage is done by Amazon S3, each write operation instead of performing writes in place, it creates a new entire file including the changes. The stale version of data is replaced by the newly created file, but is not deleted immediately. Snowflake allows users to define how long the stale version will be kept in S3, which is up to 90 days. Based on MVCC, Snowflake also supports time travel query.

#### Data Model

[Relational](https://dbdb.io/browse?data-model=relational) [Document / XML](https://dbdb.io/browse?data-model=document-xml)

Snowflake is relational as it supports ANSI SQL and ACID transactions. It offers built-in functions and SQL extensions for traversing, flattening, and nesting of semi-structured data, with support for popular formats such as JSON and Avro. When storing semi-structured data, Snowflake can perform automatic type inference to find the most common types and store them using the same compressed columnar format as native relational data. Thus it can accelerate query execution on them.

#### Foreign Keys

[Supported](https://dbdb.io/browse?foreign-keys=supported)

Snowflake supports defining and maintaining constraints, but does not enforce them, except for NOT NULL constraints, which are always enforced including foreign key constraint.

Snowflake, cannot handle referential integrity because, even though it supports integrity and other constraints, they are not enforced except the NOT NULL constraint that is always enforced. Other constraints than NOT NULL are created as disabled constraints.

#### Indexes

[Not Supported](https://dbdb.io/browse?indexes=not-supported)

Snowflake does not support index, as maintaining index is expensive due to its architecture. Snowflake uses min-max based pruning, and other techniques to accelerate data access.

#### Isolation Levels

[Snapshot Isolation](https://dbdb.io/browse?isolation-levels=snapshot-isolation)

According to their paper and talk, Snowflake supports Snapshot Isolation. However, according to their documentation, it is said that Read Committed is the only Isolation level that is supported.

#### Joins

[Hash Join](https://dbdb.io/browse?joins=hash-join)

#### Query Compilation

[Not Supported](https://dbdb.io/browse?query-compilation=not-supported)

#### Query Execution

[Vectorized Model](https://dbdb.io/browse?query-execution=vectorized-model)

Snowflake processes data in pipelined fashion, in batches of a few thousand rows in columnar format. It also uses a push instead of pull model as the relational operators push the intermediate results to their downstream operators.

#### Query Interface

[SQL](https://dbdb.io/browse?query-interface=sql)

#### Storage Architecture

[Disk-oriented](https://dbdb.io/browse?storage-architecture=disk-oriented)

Snowflake's data storage is done via Amazon S3 service. Upon query execution, the responsible work nodes uses HTTP -based interface to read/write data. The worker node also uses its local disk as a cache.

#### Storage Model

[Hybrid](https://dbdb.io/browse?storage-model=hybrid)

Snowflake horizontally partitions data into large immutable files which are equivalent to blocks or pages in a traditional database system. Within each file, the values of each attribute or column are grouped together and heav- ily compressed, a well-known scheme called PAX or hybrid columnar. Each table file has a header which, among other metadata, contains the offsets of each column within the file.

#### Stored Procedures

[Not Supported](https://dbdb.io/browse?stored-procedures=not-supported)

#### System Architecture

[Shared-Disk](https://dbdb.io/browse?system-architecture=shared-disk)

It uses Amazon S3 for its underlying data storage. It performs query execution within in elastic clusters of virtual machines, called virtual warehouse. Upon query execution, virtual warehouse use HTTP-based interface to read/write data from S3. The Cloud Service layer stores the collection of services that manage computation clusters, queries, transactions, and all the metadata like database catalogs and access control information, in FoundationDB.

#### Views

[Virtual Views](https://dbdb.io/browse?views=virtual-views)

## Stage data files

A Snowflake stage is a location in cloud storage that you use to load and unload data from a table. Snowflake supports:

### Internal stages

Used to store data files internally within Snowflake. Each user and table in Snowflake gets an internal stage by default for staging data files.

Internal stages can be further categorized as follows:

- **User stages:** Each of these stages pertains to a specific user, so they'll be assigned to every user by default for storing files.
- **Table stages:** Each of these stages pertains to a specific database table, so they'll be assigned to every table by default.
- **Internal named stages:** Compared to the user or table stages, these stages offer a greater degree of flexibility. As these are some of the Snowflake objects, all operations that can be performed on objects can also be performed on internally named stages. These stages must be created manually and we can specify file formats when creating these stages.

### External stages

Used to store data files externally in Amazon S3, Google Cloud Storage, or Microsoft Azure. If your data is already stored in these cloud storage services, you can use an external stage to load data in Snowflake tables.

## Snowpipe

In simple terms, Snowpipe is a continuous data ingestion service provided by Snowflake that loads files within minutes as soon as they are added to a stage and submitted for ingestion. Therefore, you can load data from files in micro-batches (organizing data into small groups/matches), allowing users to access the data within minutes (very less response time), rather than manually running COPY statements on a schedule to load large batches. By loading the data into micro-batches, Snowpipe makes it easier to analyze it. Snowpipe uses a combination of filenames and file checksums to ensure that only new data is processed.  

### Advantages of Snowpipe

- By eliminating roadblocks, Snowpipe facilitates real-time analytics.
- It is cost-effective.
- It is simple to use.
- There is no management required.
- It provides flexibility, resilience, and so on.

[Snowpipe | Snowflake Documentation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro)

## SnowSQL (CLI Client)

SnowSQL is the command line client for connecting to Snowflake to execute SQL queries and perform all DDL and DML operations, including loading data into and unloading data out of database tables.

```bash
snowsql -a <account_identifier> -u <user_name>

# Execute PUT in SnowSQL to upload local data files to the table stage provided for the `emp_basic` table you created.

PUT file://<file-path>[/\]employees0*.csv @sf_tuts.public.%emp_basic;

!exit
```

[SnowSQL (CLI Client) | Snowflake Documentation](https://docs.snowflake.com/user-guide/snowsql)

## Snowflake Objects / SQL

```sql
CREATE OR REPLACE DATABASE sf_tuts;

SELECT CURRENT_DATABASE(), CURRENT_SCHEMA();

CREATE OR REPLACE TABLE emp_basic (
   first_name STRING ,
   last_name STRING ,
   email STRING ,
   streetaddress STRING ,
   city STRING ,
   start_date DATE
   );

CREATE OR REPLACE WAREHOUSE sf_tuts_wh WITH
   WAREHOUSE_SIZE='X-SMALL'
   AUTO_SUSPEND = 180
   AUTO_RESUME = TRUE
   INITIALLY_SUSPENDED=TRUE;

SELECT CURRENT_WAREHOUSE();

LIST @sf_tuts.public.%emp_basic;

COPY INTO emp_basic
  FROM @%emp_basic
  FILE_FORMAT = (type = csv field_optionally_enclosed_by='"')
  PATTERN = '.*employees0[1-5].csv.gz'
  ON_ERROR = 'skip_file';

SELECT * FROM emp_basic;

INSERT INTO emp_basic VALUES
   ('Clementine','Adamou','cadamou@sf_tuts.com','10510 Sachs Road','Klenak','2017-9-22') ,
   ('Marlowe','De Anesy','madamouc@sf_tuts.co.uk','36768 Northfield Plaza','Fangshan','2017-1-26');

SELECT email FROM emp_basic WHERE email LIKE '%.uk';

SELECT first_name, last_name, DATEADD('day',90,start_date) FROM emp_basic WHERE start_date <= '2017-01-01';

DROP DATABASE IF EXISTS sf_tuts;

DROP WAREHOUSE IF EXISTS sf_tuts_wh;
```

[Snowflake in 20 Minutes | Snowflake Documentation](https://docs.snowflake.com/user-guide/tutorials/snowflake-in-20minutes)

### Lifecycle Diagram

![snowflake-sql-lifecycle-diagram](../../media/Pasted%20image%2020231205120527.png)

## Others

- Streamlit

## Links

[The Snowflake Data Cloud - Mobilize Data, Apps, and AI](https://www.snowflake.com/en/)

[What is Snowflake? 8 Minute Demo - YouTube](https://www.youtube.com/watch?v=9PBvVeCQi0w)

[Snowflake Explained In 9 Mins | What Is Snowflake Database | Careers In Snowflake | MindMajix - YouTube](https://www.youtube.com/watch?v=hJHWmYcdDn8)

[Snowflake Documentation](https://docs.snowflake.com/)

[Top Snowflake Interview Questions and Answers (2023) - InterviewBit](https://www.interviewbit.com/snowflake-interview-questions/)

[Top 50 Snowflake Interview Questions And Answers 2023](https://mindmajix.com/snowflake-interview-questions)
