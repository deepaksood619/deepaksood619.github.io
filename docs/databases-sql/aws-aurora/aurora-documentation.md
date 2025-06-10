# Aurora Documentation

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html

## SELECT INTO OUTFILE

Integration Aurora MySQL with AWS Services > Saving data into text files in Amazon S3

You can use the **SELECT INTO OUTFILE S3** statement to query data from an Amazon Aurora MySQL DB cluster and save it directly into text files stored in an Amazon S3 bucket. You can use this functionality to skip bringing the data down to the client first, and then copying it from the client to Amazon S3. The **LOAD DATA FROM S3** statement can use the files created by this statement to load data into an Aurora DB cluster.

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.SaveIntoS3.html

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.LoadFromS3.html

```sql
-- move data to s3
SELECT * FROM equifax_raw_response WHERE inserted_on BETWEEN '2016-01-01' AND '2019-08-31'
INTO OUTFILE S3 's3-ap-south-1://stashfin-migration-data/rds/equifax_raw_response/equifax_raw_response_2016-01-01_to_2019-08-31'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
MANIFEST ON;

SELECT * FROM equifax_raw_response WHERE inserted_on LIMIT 100
    INTO OUTFILE S3 's3-ap-south-1://stashfin-migration-data/rds/equifax_raw_response/equifax_raw_response_escaped'
    CHARACTER SET utf8mb4
    FIELDS TERMINATED BY ','
    OPTIONALLY ENCLOSED BY '"'
    ESCAPED BY '\\'
    LINES TERMINATED BY '\n'
    MANIFEST ON
    OVERWRITE ON;

-- Load Back data from s3
LOAD DATA FROM S3 MANIFEST 's3-ap-south-1://stashfin-migration-data/rds/equifax_raw_response/equifax_raw_response_2016-01-01_to_2019-08-31.manifest'
INTO TABLE equifax_raw_response
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
(xml_insert_id, customer_id, load_id, request_data, xml_string, inserted_on, inserted_by, s3_key_request, s3_key_response, is_success);

SELECT
    [ALL | DISTINCT | DISTINCTROW ]
        [HIGH_PRIORITY]
        [STRAIGHT_JOIN]
        [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
        [SQL_CACHE | SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
    select_expr [, select_expr ...]
    [FROM table_references
        [PARTITION partition_list]
    [WHERE where_condition]
    [GROUP BY {col_name | expr | position}
        [ASC | DESC], ... [WITH ROLLUP]]
    [HAVING where_condition]
    [ORDER BY {col_name | expr | position}
            [ASC | DESC], ...]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [PROCEDURE procedure_name(argument_list)]
INTO OUTFILE S3 's3_uri'
[CHARACTER SET charset_name]
    [export_options]
    [MANIFEST {ON | OFF}]
    [OVERWRITE {ON | OFF}]

export_options:
    [{FIELDS | COLUMNS}
        [TERMINATED BY 'string']
        [[OPTIONALLY] ENCLOSED BY 'char']
        [ESCAPED BY 'char']
    ]
    [LINES
        [STARTING BY 'string']
        [TERMINATED BY 'string']
    ]

LOAD DATA FROM S3 [FILE | PREFIX | MANIFEST] 'S3-URI'
    [REPLACE | IGNORE]
    INTO TABLE tbl_name
    [PARTITION (partition_name,...)]
    [CHARACTER SET charset_name]
    [{FIELDS | COLUMNS}
        [TERMINATED BY 'string']
        [[OPTIONALLY] ENCLOSED BY 'char']
        [ESCAPED BY 'char']
    ]
    [LINES
        [STARTING BY 'string']
        [TERMINATED BY 'string']
    ]
    [IGNORE number {LINES | ROWS}]
    [(col_name_or_user_var,...)]
    [SET col_name = expr,...]

39385044 row(s) affected 246.881 sec/4 minutes
```

### Considerations

The number of files written to the Amazon S3 bucket depends on the amount of data selected by the `SELECT INTO OUTFILE S3` statement and the file size threshold for Aurora MySQL. The default file size threshold is 6 gigabytes (GB). If the data selected by the statement is less than the file size threshold, a single file is created; otherwise, multiple files are created. Other considerations for files created by this statement include the following:

- Aurora MySQL guarantees that rows in data files are not split across file boundaries. For multiple files, the size of every data file except the last is typically close to the file size threshold. However, occasionally staying under the file size threshold results in a row being split across two data files. In this case, Aurora MySQL creates a data file that keeps the row intact, but might be larger than the file size threshold.
- Because each `SELECT` statement in Aurora MySQL runs as an atomic transaction, a `SELECT INTO OUTFILE S3` statement that selects a large data set might run for some time. If the statement fails for any reason, you might need to start over and issue the statement again. If the statement fails, however, files already uploaded to Amazon S3 remain in the specified Amazon S3 bucket. You can use another statement to upload the remaining data instead of starting over again.
- If the amount of data to be selected is large (more than 25 GB), we recommend that you use multiple `SELECT INTO OUTFILE S3` statements to save the data to Amazon S3. Each statement should select a different portion of the data to be saved, and also specify a different `file_prefix` in the `s3-uri` parameter to use when saving the data files. Partitioning the data to be selected with multiple statements makes it easier to recover from an error in one statement. If an error occurs for one statement, only a portion of data needs to be re-selected and uploaded to Amazon S3. Using multiple statements also helps to avoid a single long-running transaction, which can improve performance.
- If multiple `SELECT INTO OUTFILE S3` statements that use the same `file_prefix` in the `s3-uri` parameter run in parallel to select data into Amazon S3, the behavior is undefined.
- Metadata, such as table schema or file metadata, is not uploaded by Aurora MySQL to Amazon S3.
- In some cases, you might re-run a `SELECT INTO OUTFILE S3` query, such as to recover from a failure. In these cases, you must either remove any existing data files in the Amazon S3 bucket with the same file prefix specified in `s3-uri`, or include `OVERWRITE ON` in the `SELECT INTO OUTFILE S3` query.

The `SELECT INTO OUTFILE S3` statement returns a typical MySQL error number and response on success or failure. If you don't have access to the MySQL error number and response, the easiest way to determine when it's done is by specifying `MANIFEST ON` in the statement. The manifest file is the last file written by the statement. In other words, if you have a manifest file, the statement has completed.

Currently, there's no way to directly monitor the progress of the `SELECT INTO OUTFILE S3` statement while it runs. However, suppose that you're writing a large amount of data from Aurora MySQL to Amazon S3 using this statement, and you know the size of the data selected by the statement. In this case, you can estimate progress by monitoring the creation of data files in Amazon S3.

To do so, you can use the fact that a data file is created in the specified Amazon S3 bucket for about every 6 GB of data selected by the statement. Divide the size of the data selected by 6 GB to get the estimated number of data files to create. You can then estimate the progress of the statement by monitoring the number of files uploaded to Amazon S3 while the statement runs.

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Reference.html#AuroraMySQL.Reference.ParameterGroups

[Importing data from Amazon S3 into an RDS for PostgreSQL DB instance - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.S3Import.html)

## Parallel query for Aurora MySQL

Aurora MySQL parallel query is an optimization that parallelizes some of the I/O and computation involved in processing data-intensive queries. The work that is parallelized includes retrieving rows from storage, extracting column values, and determining which rows match the conditions in the WHERE clause and join clauses. This data-intensive work is delegated (in database optimization terms, pushed down) to multiple nodes in the Aurora distributed storage layer. Without parallel query, each query brings all the scanned data to a single node within the Aurora MySQL cluster (the head node) and performs all the query processing there.

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html

https://aws.amazon.com/blogs/aws/new-parallel-query-for-amazon-aurora

## Cloning Database

Using database cloning, you can quickly and cost-effectively create clones of all of the databases within an Aurora DB cluster. The clone databases require only minimal additional space when first created.

Database cloning uses a copy-on-write protocol, in which data is copied at the time that data changes, either on the source databases or the clone databases. You can make multiple clones from the same DB cluster. You can also create additional clones from other clones. For more information on how the copy-on-write protocol works in the context of Aurora storage, see [Copy-on-Write Protocol for Database Cloning](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html#Aurora.Managing.Clone.Protocol).

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html

## Backtracking an Amazon Aurora DB

Backtracking lets you rewind the Aurora DB cluster to the time you specify. With backtracking enabled, Aurora keeps a record of changes to your database and allows you to switch to a previous consistent state. With this feature you can easily undo mistakes. For example, if by accident you perform a destructive action, such as a DELETE without a WHERE clause, you can quickly backtrack to a state before the accident. Unlike restoring from a snapshot or automated backup - a slower operation, backtracking lets you move back and forth in time in a matter of minutes.

Backtracking is not a replacement for backing up your DB cluster so that you can restore it to a point in time.

### Backtracking limitations

- Backtracking is only available for DB clusters that were created with the Backtrack feature enabled. You can't modify a DB cluster to enable the Backtrack feature. You can enable the Backtrack feature when you create a new DB cluster or restore a snapshot of a DB cluster.
- The limit for a backtrack window is 72 hours.
- Backtracking affects the entire DB cluster. For example, you can't selectively backtrack a single table or a single data update.
- You can't create cross-Region read replicas from a backtrack-enabled cluster, but you can still enable binary log (binlog) replication on the cluster. If you try to backtrack a DB cluster for which binary logging is enabled, an error typically occurs unless you choose to force the backtrack. Any attempts to force a backtrack will break downstream read replicas and interfere with other operations such as blue/green deployments.
- You can't backtrack a database clone to a time before that database clone was created. However, you can use the original database to backtrack to a time before the clone was created. For more information about database cloning, see [Cloning a volume for an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html).
- Backtracking causes a brief DB instance disruption. You must stop or pause your applications before starting a backtrack operation to ensure that there are no new read or write requests. During the backtrack operation, Aurora pauses the database, closes any open connections, and drops any uncommitted reads and writes. It then waits for the backtrack operation to complete.
- You can't restore a cross-Region snapshot of a backtrack-enabled cluster in an AWS Region that doesn't support backtracking.
- If you perform an in-place upgrade for a backtrack-enabled cluster from Aurora MySQL version 2 to version 3, you can't backtrack to a point in time before the upgrade happened.

[Backtracking an Aurora DB cluster - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html)

[Workshop Studio](https://aws.amazon.com/getting-started/tutorials/aurora-cloning-backtracking)

[Amazon Aurora Backtrack – Turn Back Time | AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-aurora-backtrack-turn-back-time/)

### Backtracking vs PITR

| Feature                   | Aurora Backtrack                       | Point-in-Time Recovery (PITR)            |
| ------------------------- | -------------------------------------- | ---------------------------------------- |
| **Recovery Speed**        | Instantaneous                          | May take longer (depends on backup size) |
| **Database Availability** | Remains available during backtrack     | Requires creating a new DB cluster       |
| **Retention Period**      | Up to 72 hours                         | Up to 35 days                            |
| **Granularity**           | Per second within the backtrack window | Per second within the retention period   |
| **Cost**                  | Additional cost for backtrack logs     | Standard backup storage cost             |
| **Use Case**              | Quick recovery from recent changes     | Recovery from significant data loss      |
| **Implementation**        | Does not create a new cluster          | Creates a new cluster                    |

- **Aurora Backtrack** is ideal for quick recovery from recent, small-scale data issues without downtime.
- **PITR** is suitable for recovering from major incidents or data corruption, even if they occurred several days ago, but requires downtime to create a new cluster.

## RDS Blue Green Deployments

A blue/green deployment copies a production database environment to a separate, synchronized staging environment. By using Amazon RDS Blue/Green Deployments, you can make changes to the database in the staging environment without affecting the production environment. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. When you're ready, you can promote the staging environment to be the new production database environment, with downtime typically under one minute.

Amazon Aurora creates the staging environment by _cloning_ the underlying Aurora storage volume in the production environment. The cluster volume in the staging environment only stores incremental changes made to that environment.

The _green environment_ is the staging environment. The staging environment stays in sync with the current production environment using logical replication.

Because the green environment is a copy of the topology of the production environment, the DB cluster and all of its DB instances are copied in the deployment. The green environment also includes the features used by the DB cluster, such as DB cluster snapshots, Performance Insights, Enhanced Monitoring, and Aurora Serverless v2.

Blue/green deployments provide the following benefits:

- Easily create a production-ready staging environment.
- Automatically replicate database changes from the production environment to the staging environment.
- Test database changes in a safe staging environment without affecting the production environment.
- Stay current with database patches and system updates.
- Implement and test newer database features.
- Switch over your staging environment to be the new production environment without changes to your application.
- Safely switch over through the use of built-in switchover guardrails.
- Eliminate data loss during switchover.
- Switch over quickly, typically under a minute depending on your workload.

[Introduction to Amazon RDS Blue/Green Deployments | Amazon Web Services](https://www.youtube.com/watch?v=mGAjzAzBOsk)

[Blue/Green Deployments in Amazon Aurora and Amazon RDS. How it Looks? - DEV Community](https://dev.to/girishmukim/fully-managed-bluegreen-deployments-in-amazon-aurora-and-amazon-rds-4dc3)

[Using Amazon RDS Blue/Green Deployments for database updates - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html)

### Options

During testing, we recommend that you keep your databases in the green environment read only. Enable write operations on the green environment with caution because they can result in replication conflicts. They can also result in unintended data in the production databases after switchover. To enable write operations for Aurora MySQL, set the `read_only` parameter to `0`, then reboot the DB instance. For Aurora PostgreSQL, set the `default_transaction_read_only` parameter to `off` at the session level.

RDS Blue/Green Deployments only support default option groups for major version upgrades. Don't specify a major version upgrade when you create the blue/green deployment. After you create the blue/green deployment, you can upgrade the database in the green environment.

Any Aurora Auto Scaling policies that are defined on the blue DB cluster aren't copied to the green environment.

- Blue/green deployments aren't supported for the following features:
    - Amazon RDS Proxy
    - Cross-Region read replicas
    - Aurora Serverless v1 DB clusters
    - DB clusters that are part of an Aurora global database
    - Babelfish for Aurora PostgreSQL
    - AWS CloudFormation

### Switchovers

A _switchover_ promotes the DB cluster, including its DB instances, in the green environment to be the production DB cluster. Before you switch over, production traffic is routed to the cluster in the blue environment. After you switch over, production traffic is routed to the DB cluster in the green environment.

#### Switchover timeout

You can specify a switchover timeout period between 30 seconds and 3,600 seconds (one hour). If the switchover takes longer than the specified duration, then any changes are rolled back and no changes are made to either environment. The default timeout period is 300 seconds (five minutes).

[Switching a blue/green deployment - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments-switching.html#blue-green-deployments-switching-guardrails)

### Switchover actions

When you switch over a blue/green deployment, RDS performs the following actions:

1. Runs guardrail checks to verify if the blue and green environments are ready for switchover.
2. Stops new write operations on the DB cluster in both environments.
3. Drops connections to the DB instances in both environments and doesn't allow new connections.
4. Waits for replication to catch up in the green environment so that the green environment is in sync with the blue environment.
5. Renames the DB cluster and DB instances in the both environments.
6. Allows connections to databases in both environments.
7. Allows write operations on the DB cluster in the new production environment.

If the switchover starts and then stops before finishing for any reason, then any changes are rolled back, and no changes are made to either environment.

You can't roll back a blue/green deployment after switchover. For critical production workloads, consider provisioning a backup DB cluster before switching over.

[Switching a blue/green deployment - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments-switching.html)

[Deleting a blue/green deployment - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments-deleting.html)
