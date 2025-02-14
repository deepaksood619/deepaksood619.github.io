# Terms

### [**clone**](https://docs.snowflake.net/manuals/sql-reference/sql/create-clone.html)

a clone is a copy of a storage object (database / schema / table). This is typically a zero-copy clone, meaning the underlying data exists only once but metadata creates 2 different entities on top of the base data.

### [**credits**](https://docs.snowflake.net/manuals/user-guide/credits.html)

compute credits are the unit of compute in Snowflake. One credit is charged for one node running for one hour in Snowflake. Larger warehouses consist of more nodes and therefore charge more credits per hour.

### [**data sharing**](https://docs.snowflake.net/manuals/user-guide/data-sharing-intro.html)

secure data sharing is a unique feature of Snowflake that allows account-to-account sharing of data. This allows producers to securely expose storage objects (databases / schemas / tables) to consumers. The sharing is live and has a wide range of configurations to ensure the desired billing of storage and compute.

### [**database**](https://docs.snowflake.net/manuals/sql-reference/ddl-database.html)

a database is the top-level storage object in Snowflake. All storage objects are contained within a database. This is the highest level of data organization available.

### [**file format**](https://docs.snowflake.net/manuals/sql-reference/sql/create-file-format.html)

a named file format is a collection of rules for processing file data to and from Snowflake stages. File format rules include data formatting, extension-specific options (like skipping headers in CSV files), and error tolerance options (like skipping files with too many errors).

### [**materialized view**](https://docs.snowflake.net/manuals/user-guide/views-materialized.html)

a materialized view is a stored query against 1 underlying table (this restriction may change in the future) that automatically runs behind the scenes. The query results are stored (materialized), which can improve read latency.

### [**privilege**](https://docs.snowflake.net/manuals/user-guide/security-access-control-overview.html#privileges)

privileges are definitions of specific access permissions to specific objects. In Snowflake’s security model, privileges on objects are granted to roles. Roles are granted either to users or other roles. Privileges are never directly assigned to users.

### [**role**](https://docs.snowflake.net/manuals/user-guide/security-access-control-overview.html#roles)

a role is the unit of Snowflake security to which privileges can be granted to or revoked from. Roles _are not_ users but are _assigned_ to users to authorize user activity.

### [**schema**](https://docs.snowflake.net/manuals/sql-reference/ddl-database.html#schema-management)

a schema is the second layer of storage organization in Snowflake below a database. They are containers that hold tables, views, stages, and other bottom-level objects. Security objects and warehouses are not stored at this level. A schema and a database together define a namespace in Snowflake.

### [**sequence**](https://docs.snowflake.net/manuals/user-guide/querying-sequences.html)

a sequence is a generator object that creates unique values in SQL statements that cover many rows. This is an advanced SQL concept. [Check out this article that gives an overview of the concept](https://www.geeksforgeeks.org/sql-sequences/).

### [**Snowpipe**](https://docs.snowflake.net/manuals/user-guide/data-load-snowpipe-intro.html)

this refers to Snowflake’s continuous loading solution. It is confusing right now because Snowpipe is being upgraded for asynchronous file handling through queues, but not all instances will have this ability (auto ingest). In short, all Snowpipes make regular file ingestion from external stages more manageable for your production workflows.

### [**SnowSQL**](https://docs.snowflake.net/manuals/user-guide/snowsql.html)

SnowSQL refers to the Snowflake CLI tool. It’s also commonly used to refer to the actual SQL code that is run in Snowflake.

### [**stage**](https://docs.snowflake.net/manuals/sql-reference/sql/create-stage.html)

this is a file location used for data ingestion. Stages can either be internal (managed by Snowflake) or external (managed by you). Stages are just S3 (AWS) or Blob Storage Containers (Azure) where data in Snowflake-supported file formats can be stored before loading into a Snowflake table. Understanding stages is critical to building production data pipelines.

### [**stored procedures**](https://docs.snowflake.net/manuals/sql-reference/stored-procedures-overview.html)

stored procedures are reusable functions defined with a mix of JavaScript and SQL for advanced functionality. These are useful for implementing logic with advanced [control flow](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow) requirements that are unsupported by SQL (error handling, for-loops, conditional branching).

### [**streams**](https://docs.snowflake.net/manuals/user-guide/streams.html)

streams are change records on top of tables. They are queryable like normal tables but include an automatically-updated record of every data change that occurred on the target object. These are a preview feature, so make sure you have it enabled.

### [**table**](https://docs.snowflake.net/manuals/sql-reference/ddl-table.html)

a table is the lowest level object in Snowflake. It is a structured collection of persisted data.

### [**tasks**](https://docs.snowflake.net/manuals/user-guide/tasks.html)

a task is a SQL statement executed either on a schedule or in response to the completion of another task. Tasks are useful for job scheduling and are currently preview features.

### [**temporary table**](https://docs.snowflake.net/manuals/user-guide/tables-temp-transient.html#temporary-tables)

These tables exist only for the duration of a session and are not queriable by any other user. This is useful for ETL processing and helps reduce storage costs as temp tables do not use the same amount of failsafe storage that a standard table does.

### [**time travel**](https://docs.snowflake.net/manuals/user-guide/data-time-travel.html)

This feature enables users to query data at different points within a range of time (configured at the storage object level). The longer the range of time (up to 90 days, but 1 day by default), the more storage charges are incurred. This feature is valuable for comparing state over time without having to manage additional complex storage structures.

### [**transaction**](https://docs.snowflake.net/manuals/sql-reference/transactions.html)

A transaction is a collection of SQL statements that must either be entirely executed successfully or entirely unexecuted (no partial execution). These transactions are fully [ACID compliant](https://en.wikipedia.org/wiki/ACID).

### [**transient table**](https://docs.snowflake.net/manuals/user-guide/tables-temp-transient.html#transient-tables)

Transient tables are really similar to temporary tables, but they persist beyond a single session and can be queried by other users. They differ from standard tables by having no failsafe storage, making them cheaper but less durable.

### [**UDF (user-defined function)**](https://docs.snowflake.net/manuals/sql-reference/udf-overview.html)

a UDF is a named collection of either SQL or JavaScript logic that accepts arguments and returns either a scalar (single value) or series of rows, depending on how it is defined. It does not support the creation or modification of objects (DML) and only returns newly computed values.

### [**user**](https://docs.snowflake.net/manuals/user-guide/admin-user-management.html)

a user is an entity of authentication. Authorization is granted to users through roles. Roles are a named collection of 0 or more privileges to perform actions with Snowflake objects. Users are often associated with individuals but are also used to authenticate services, such as BI connections.

### [**view**](https://docs.snowflake.net/manuals/user-guide/views-introduction.html)

a view is a table-like object that can be queried but stores no actual data. The structure of a view is defined when it is created as a SQL statement that selects from other underlying objects (including other views).

### [**warehouse**](https://docs.snowflake.net/manuals/user-guide/warehouses-overview.html)

a virtual warehouse is the object of compute in Snowflake. The size of a warehouse indicates how many nodes are in the compute cluster used to run queries. Warehouses are needed to load data from cloud storage and perform computations. They retain source data in a node-level cache as long as they are not suspended. Snowflake credits are billed for a 1-node (XSMALL) warehouse running for 1 hour (10-second minimum charge, prorated per second of run after that).

### [**worksheet**](https://docs.snowflake.net/manuals/user-guide/ui-worksheet.html)

a worksheet is a tab within the Snowflake Web UI with its own distinct context from the user’s logged-in context. Each worksheet has a SQL editor space where SQL is commonly developed and ran in one location.
