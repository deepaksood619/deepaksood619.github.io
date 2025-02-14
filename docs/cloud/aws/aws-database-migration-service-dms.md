# AWS Database Migration Service (DMS)

AWS Database Migration Service (AWS DMS) is a cloud service that makes it easy to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS to migrate your data into the AWS Cloud, between on-premises instances (through an AWS Cloud setup), or between combinations of cloud and on-premises setups.

With AWS DMS, you can perform one-time migrations, and you can replicate ongoing changes to keep sources and targets in sync. If you want to change database engines, you can use the AWS Schema Conversion Tool (AWS SCT) to translate your database schema to the new platform. You then use AWS DMS to migrate the data. Because AWS DMS is a part of the AWS Cloud, you get the cost efficiency, speed to market, security, and flexibility that AWS services offer.

A task can consist of three major phases

- The full load of existing data
- The application of cached changes
- Ongoing replication

### Components

- Replication instance
- Endpoint
- Replication tasks

### Migration Types

- Full load (Migrate existing data) - If you can afford an outage long enough to copy your existing data, this option is a good one to choose. This option simply migrates the data from your source database to your target database, creating tables when necessary.
- Full load + CDC (Migrate existing data and replicate ongoing changes) - This option performs a full data load while capturing changes on the source. After the full load is complete, captured changes are applied to the target. Eventually, the application of changes reaches a steady state. At this point, you can shut down your applications, let the remaining changes flow through to the target, and then restart your applications pointing at the target.
- CDC only (Replicate data changes only) - In some situations, it might be more efficient to copy existing data using a method other than AWS DMS. For example, in a homogeneous migration, using native export and import tools might be more efficient at loading bulk data. In this situation, you can use AWS DMS to replicate changes starting when you start your bulk load to bring and keep your source and target databases in sync.

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.HighLevelView.html

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Components.html

[**https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html**](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html)

[Using a MySQL-compatible database as a source for AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html)

### Loading multiple tables in parallel

By default, AWS DMS loads eight tables at a time. You might see some performance improvement by increasing this slightly when using a very large replication server, such as a dms.c4.xlarge or larger instance.

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Troubleshooting.html

[**https://aws.amazon.com/premiumsupport/knowledge-center/dms-batch-apply-cdc-replication/**](https://aws.amazon.com/premiumsupport/knowledge-center/dms-batch-apply-cdc-replication/)

https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html

[**https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html**](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html)

```json
"ParallelApplyThreads": 4,
"ParallelApplyBufferSize": 100,
"CommitRate": 50000

// BatchApplyEnabled

"ChangeProcessingTuning": {
    "BatchApplyPreserveTransaction": true,
    "BatchApplyTimeoutMin": 120, / 300
    "BatchApplyTimeoutMax": 300, / 600
    ~~"BatchApplyMemoryLimit": 500, (for preprocessing)~~
    ~~"BatchSplitSize": 0,~~
    ~~"MinTransactionSize": 10000,~~
    ~~"CommitTimeout": 100,~~
    "MemoryLimitTotal": 2048,
    "MemoryKeepTime": 120,
    "StatementCacheSize": 50
    },

// Connection settings - maxFileSize=250000 (250MB)
```

### Schema Conversion Tool

https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html

### Pricing

Free Tier - includes up to 750 hours per month for a Single-AZ dms.t2.micro instance

All data transfer into AWS Database Migration Service is free, and data transferred between AWS Database Migration Service and databases in Amazon RDS and Amazon EC2 Instances in the same Availability Zone also is free.

|          |        |
| -------- | ------ |
| c4.large | $0.154 |
| c5.large | $0.154 |

Homogeneous data migrations - $0.0824 per migration hour

https://hevodata.com/blog/aurora-to-redshift-data-migration-using-aws-dms

#### Serverless

AWS DMS Serverless offers the flexibility and ease to migrate data without the need to provision replication instances or manually monitor use and adjust capacity. It automatically provisions, monitors, and scales migration resources to the optimal capacity needed to meet demand. DMS Serverless supports popular DMS use cases including continuous data replication, database consolidation, and migrations, even if the source and target database engines differ. It aids even the most complex migrations, including migrating tens or even hundreds of workloads simultaneously or completing ongoing data replications on AWS.

[Working with AWS DMS Serverless - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Serverless.html)

### Migration planning

[AWS DMS Fleet Advisor](https://aws.amazon.com/dms/fleet-advisor/) is a free, fully managed capability of AWS Database Migration Service (AWS DMS). It automates migration planning and helps you [migrate database and analytics fleets](https://aws.amazon.com/products/databases/migrations/) to the cloud at scale with minimal effort. To accelerate migrations, AWS DMS Fleet Advisor automatically inventories and assesses your on-premises database and analytics server fleet and identifies potential migration paths. Using historical performance and usage patterns collected from self-managed databases, Fleet Advisor can [recommend target database engines](https://docs.aws.amazon.com/dms/latest/userguide/fa-recommendations.html) and instance options as well as estimate costs. DMS helps you confidently migrate your databases and analytics systems to AWS with virtually no downtime.

AWS DMS Fleet Advisor discovers and analyzes the same source databases supported in AWS DMS, including Oracle, Microsoft SQL Server, MySQL, PostgreSQL, and more. DMS Fleet Advisor delivers results in a few hours, instead of weeks or even months, without using third-party tools or hiring migration experts.

### Schema assessment and conversion

AWS DMS Schema Conversion (DMS SC) is a fully managed feature of AWS DMS that allows you to automatically assess and convert database schemas and code objects at scale with zero downtime. AWS DMS Schema Conversion supports popular heterogeneous migrations, such as [Oracle to Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-oracle-postgresql.html), [SQL Server to Amazon RDS for MySQL](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-sql-server-mysql.html), [SQL Server to Amazon Aurora PostgreSQL-Compatible Edition,](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-sql-server-aurora-postgresql.html) and [Oracle to Amazon Aurora MySQL-Compatible Edition](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-oracle-aurora-mysql.html). You can save weeks or months of manual time and resources with a few clicks in the DMS console.

With a few clicks, you can generate an assessment report that shows the schema conversion complexity. This report provides prescriptive guidance on how to resolve any incompatibilities between the source and target database engines. Learn more about AWS DMS Schema Conversion in the [documentation](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_SchemaConversion.html) and [how to get started.](https://docs.aws.amazon.com/dms/latest/userguide/getting-started.html)

### Homogeneous Data Migration

Homogeneous data migrations - $0.0824 per migration hour

With homogeneous data migrations, you pay by the hour only for the duration of the data migration. With no replication instances to provision, you do not need to worry about over-provisioning or manually scaling capacity, saving time and cost.

#### Features

- Engine Support
    - MySQL versions 5.7.x and above
    - PosgreSQL versions 10.4 and above
    - On-premises, Amazon EC2, and Amazon RDS sources
    - Amazon RDS and Amazon Aurora Targets
- Full Schema and Data Set
    - All data types are fully migrated
    - Secondary objects are migrated
    - Partitions are also supported
- Migration Types
    - Full load
    - Full load + change data capture (CDC)
    - CDC only
- AWS DMS automatically manages the compute and storage resources in the AWS Cloud that are required for homogeneous data migrations. AWS DMS deploys these resources in a serverless environment when you start a data migration.
- AWS DMS uses native database tools to initiate a fully-automated migration between the databases of the same type.
- You can use homogeneous data migrations to migrate your data as well as the secondary objects such as partitions, functions, stored procedures, and so on.
- You can run homogeneous data migrations in the following three migration modes: full load, ongoing replication, and full load with ongoing replication.
- For homogeneous data migrations, you can use on-premises, Amazon EC2, Amazon RDS databases as a source. You can choose Amazon RDS or Amazon Aurora as a migration target for homogeneous data migrations.

## Limitations for homogeneous data migrations

The following limitations apply when you use homogeneous data migrations:

- Homogeneous data migrations only support selection rules for MongoDB and Amazon DocumentDB migrations. DMS doesn't support selection rules for other database engines. Also, you can’t use transformation rules to change the data type of columns, move objects from one schema to another, or change the names of objects.
- Homogeneous data migrations don't provide a built-in tool for data validation.
- When using homogeneous data migrations with PostgreSQL, AWS DMS migrates views as tables to your target database.
- Homogeneous data migrations don't capture schema-level changes during an ongoing data replication. If you create a new table in your source database, then AWS DMS can't migrate this table. To migrate this new table, restart your data migration.
- You can't use homogeneous data migrations in AWS DMS to migrate data from a higher database version to a lower database version.
- You can't use homogeneous data migrations in the CLI or API.
- Homogeneous data migrations don't support establishing a connection with database instances in VPC secondary CIDR ranges.
- You can't use the 8081 port for homogeneous migrations from your data providers.
- Homogeneous data migrations don't support migrating encrypted MySQL databases and tables.

[Migrating databases to their Amazon RDS equivalents with AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/data-migrations.html)

[Overview of the homogeneous data migration process in AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/dm-getting-started.html)

[Running homogeneous data migrations in AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/dm-migrating-data.html)

[Enhanced homogeneous migration capabilities with AWS Database Migration Services- AWS Database in 15 - YouTube](https://www.youtube.com/watch?v=aQ8idU-1nXk&ab_channel=AWSDevelopers)

[Migrating your PostgreSQL database to Amazon RDS for PostgreSQL with AWS Database Migration Service - YouTube](https://www.youtube.com/watch?v=HOJfrR6lcuU&ab_channel=AmazonWebServices)

## Best Practices

Make sure that you know what information and tables in the source database need to be migrated to the target database. **AWS DMS supports basic schema migration, including the creation of tables and primary keys. However, AWS DMS doesn't automatically create secondary indexes, foreign keys, user accounts, and so on, in the target database**. Depending on your source and target database engine, you might need to set up supplemental logging or modify other settings for a source or target database.

It replicates only a limited amount of data definition language (DDL) statements. AWS DMS doesn't propagate items such as indexes, users, privileges, stored procedures, and other database changes not directly related to table data.

### Objects

To migrate objects with MySQL, use the mysqldump utility to generate a dump file containing only the schema metadata. The **--no-data** option tells mysqldump not to dump table data, so the results in the dump file contain only statements to create the tables. For a definition-only dump, add the **--routines** and **--events** options to also include stored routine and event definitions.

Example:

```
mysqldump --no-data --routines --events -h SOURCE_DB_SERVER_NAME -u DMS_USER -p SOURCE_DB > path_to_dump_file.sql
```

[Migrate objects using AWS DMS | AWS re:Post](https://repost.aws/knowledge-center/dms-migrate-database-objects)

[Best practices for AWS Database Migration Service - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html)

## Links

- [Perform delta data loads to data lakes using AWS DMS | AWS Database Blog](https://aws.amazon.com/blogs/database/perform-delta-data-loads-to-data-lakes-using-aws-dms/)
- [Migrate an on-premises Oracle database to Amazon RDS for MySQL using AWS DMS and AWS SCT - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-an-on-premises-oracle-database-to-amazon-rds-for-mysql-using-aws-dms-and-aws-sct.html)
- [Understand and optimize replication for Amazon Redshift with AWS DMS | AWS Database Blog](https://aws.amazon.com/blogs/database/understand-and-optimize-replication-for-amazon-redshift-with-aws-dms/)
- [Using MongoDB as a source for AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html)
- Mysql as source - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html)
- Mysql as target - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html)
- Creating a task - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.Creating.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.Creating.html)
- Setting LOB support for source databases in an AWS DMS task -[https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html)
- Creating source and target endpoint - [https://repost.aws/knowledge-center/create-source-target-endpoints-aws-dms](https://repost.aws/knowledge-center/create-source-target-endpoints-aws-dms)
- Table mapping rule - [https://repost.aws/knowledge-center/table-mappings-aws-dms](https://repost.aws/knowledge-center/table-mappings-aws-dms)
- Using filter condition - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.Filters.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.Filters.html)
- Choosing the right AWS DMS replication instance for your migration -[https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html)
- Validation - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html#CHAP_Validating.Limitations](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html#CHAP_Validating.Limitations)
- Monitoring DMS task - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Monitoring.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Monitoring.html)
- S3 as target - [https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html)
- [Optimize memory for migration using AWS DMS | AWS re:Post](https://repost.aws/knowledge-center/dms-memory-optimization)

- [Migrating a MySQL Database to RDS for MySQL or Aurora MySQL - Database Migration Guide](https://docs.aws.amazon.com/dms/latest/sbs/chap-manageddatabases.mysql2rds.html)
- [Accelerate your database migration journey using AWS DMS Schema Conversion | AWS Database Blog](https://aws.amazon.com/blogs/database/accelerate-your-database-migration-journey-using-aws-dms-schema-conversion/)
