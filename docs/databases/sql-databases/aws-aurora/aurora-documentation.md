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

## References

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Reference.html#AuroraMySQL.Reference.ParameterGroups
