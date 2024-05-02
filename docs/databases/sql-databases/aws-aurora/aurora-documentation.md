# Aurora Documentation

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html

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

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Reference.html#AuroraMySQL.Reference.ParameterGroups

## Parallel query for Aurora MySQL

Aurora MySQL parallel query is an optimization that parallelizes some of the I/O and computation involved in processing data-intensive queries. The work that is parallelized includes retrieving rows from storage, extracting column values, and determining which rows match the conditions in the WHERE clause and join clauses. This data-intensive work is delegated (in database optimization terms, pushed down) to multiple nodes in the Aurora distributed storage layer. Without parallel query, each query brings all the scanned data to a single node within the Aurora MySQL cluster (the head node) and performs all the query processing there.

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html

https://aws.amazon.com/blogs/aws/new-parallel-query-for-amazon-aurora

## Cloning Database

Using database cloning, you can quickly and cost-effectively create clones of all of the databases within an Aurora DB cluster. The clone databases require only minimal additional space when first created.
Database cloning uses acopy-on-write protocol, in which data is copied at the time that data changes, either on the source databases or the clone databases. You can make multiple clones from the same DB cluster. You can also create additional clones from other clones. For more information on how the copy-on-write protocol works in the context of Aurora storage, see [Copy-on-Write Protocol for Database Cloning](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html#Aurora.Managing.Clone.Protocol).

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html

## Backtracking an Amazon Aurora DB

Backtracking lets you rewind the Aurora DB cluster to the time you specify. With backtracking enabled, Aurora keeps a record of changes to your database and allows you to switch to a previous consistent state. With this feature you can easily undo mistakes. For example, if by accident you perform a destructive action, such as a DELETE without a WHERE clause, you can quickly backtrack to a state before the accident. Unlike restoring from a snapshot or automated backup - a slower operation, backtracking lets you move back and forth in time in a matter of minutes.
Backtracking is not a replacement for backing up your DB cluster so that you can restore it to a point in time.

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html

https://aws.amazon.com/getting-started/tutorials/aurora-cloning-backtracking

## RDS Blue Green Deployments

A blue/green deployment copies a production database environment to a separate, synchronized staging environment. By using Amazon RDS Blue/Green Deployments, you can make changes to the database in the staging environment without affecting the production environment. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. When you're ready, you can promote the staging environment to be the new production database environment, with downtime typically under one minute.

Amazon Aurora creates the staging environment by _cloning_ the underlying Aurora storage volume in the production environment. The cluster volume in the staging environment only stores incremental changes made to that environment.

The _green environment_ is the staging environment. The staging environment stays in sync with the current production environment using logical replication.

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

During testing, we recommend that you keep your databases in the green environment read only. Enable write operations on the green environment with caution because they can result in replication conflicts. They can also result in unintended data in the production databases after switchover. To enable write operations for Aurora MySQL, set the `read_only` parameter to `0`, then reboot the DB instance. For Aurora PostgreSQL, set the `default_transaction_read_only` parameter to `off` at the session level.

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

A _switchover_ promotes the DB cluster, including its DB instances, in the green environment to be the production DB cluster. Before you switch over, production traffic is routed to the cluster in the blue environment. After you switch over, production traffic is routed to the DB cluster in the green environment.

#### Switchover timeout

You can specify a switchover timeout period between 30 seconds and 3,600 seconds (one hour). If the switchover takes longer than the specified duration, then any changes are rolled back and no changes are made to either environment. The default timeout period is 300 seconds (five minutes).

[Switching a blue/green deployment - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments-switching.html#blue-green-deployments-switching-guardrails)

### Switchover actions

When you switch over a blue/green deployment, RDS performs the following actions:

1. Runs guardrail checks to verify if the blue and green environments are ready for switchover.
2. Stops new write operations on the DB cluster in both environments.
3. Drops connections to the DB instances in both environments and doesn't allow new connections.
4. Waits for replication to catch up in the green environment so that the green environment is in sync with the blue environment.
5. Renames the DB cluster and DB instances in the both environments.
6. Allows connections to databases in both environments.
7. Allows write operations on the DB cluster in the new production environment.

If the switchover starts and then stops before finishing for any reason, then any changes are rolled back, and no changes are made to either environment.

You can't roll back a blue/green deployment after switchover. For critical production workloads, consider provisioning a backup DB cluster before switching over.

[Switching a blue/green deployment - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments-switching.html)

[Deleting a blue/green deployment - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments-deleting.html)
