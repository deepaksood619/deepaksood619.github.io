# AWS Database Migration Service (DMS)

AWS Database Migration Service (AWS DMS) is a cloud service that makes it easy to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS to migrate your data into the AWS Cloud, between on-premises instances (through an AWS Cloud setup), or between combinations of cloud and on-premises setups.

With AWS DMS, you can perform one-time migrations, and you can replicate ongoing changes to keep sources and targets in sync. If you want to change database engines, you can use the AWS Schema Conversion Tool (AWS SCT) to translate your database schema to the new platform. You then use AWS DMS to migrate the data. Because AWS DMS is a part of the AWS Cloud, you get the cost efficiency, speed to market, security, and flexibility that AWS services offer.

A task can consist of three major phases

- The full load of existing data
- The application of cached changes
- Ongoing replication

## Components

- Replication instance
- Endpoint
- Replication tasks

## Migration Types

- **Full load (Migrate existing data) -** If you can afford an outage long enough to copy your existing data, this option is a good one to choose. This option simply migrates the data from your source database to your target database, creating tables when necessary.
- **Full load + CDC (Migrate existing data and replicate ongoing changes) -** This option performs a full data load while capturing changes on the source. After the full load is complete, captured changes are applied to the target. Eventually, the application of changes reaches a steady state. At this point, you can shut down your applications, let the remaining changes flow through to the target, and then restart your applications pointing at the target.
- **CDC only (Replicate data changes only) -** In some situations, it might be more efficient to copy existing data using a method other than AWS DMS. For example, in a homogeneous migration, using native export and import tools might be more efficient at loading bulk data. In this situation, you can use AWS DMS to replicate changes starting when you start your bulk load to bring and keep your source and target databases in sync.

- https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.HighLevelView.html
- https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Components.html
- [**https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html**](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html)
- [Using a MySQL-compatible database as a source for AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html)

## Loading multiple tables in parallel

By default, AWS DMS loads eight tables at a time. You might see some performance improvement by increasing this slightly when using a very large replication server, such as a `dms.c4.xlarge` or larger instance.

- https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Troubleshooting.html
- [**https://aws.amazon.com/premiumsupport/knowledge-center/dms-batch-apply-cdc-replication/**](https://aws.amazon.com/premiumsupport/knowledge-center/dms-batch-apply-cdc-replication/)
- https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html
- [**https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html**](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html)

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

## Sources & Targets

AWS DMS lets you expand the existing application to stream data from **Amazon S3 into Amazon Kinesis Data Streams** for real-time analytics without writing and maintaining new code. AWS DMS supports specifying Amazon S3 as the source and streaming services like Kinesis and Amazon Managed Streaming of Kafka (Amazon MSK) as the target. AWS DMS allows migration of full and change data capture (CDC) files to these services. AWS DMS performs this task out of box without any complex configuration or code development. You can also configure an AWS DMS replication instance to scale up or down depending on the workload.

AWS DMS supports Amazon S3 as the source and Kinesis as the target, so data stored in an S3 bucket is streamed to Kinesis. Several consumers, such as AWS Lambda, Amazon Kinesis Data Firehose, Amazon Kinesis Data Analytics, and the Kinesis Consumer Library (KCL), can consume the data concurrently to perform real-time analytics on the dataset. Each AWS service in this architecture can scale independently as needed

### Sources

DMS supports numerous sources, including databases like **Oracle, PostgreSQL, MySQL, Microsoft SQL Server, and IBM Db2**, as well as cloud-based sources like **Amazon Aurora, Amazon RDS, and Amazon S3**. It handles both homogeneous (same engine) and heterogeneous (different engine) migrations.

**Relational databases**

- **Oracle:** Versions 10.2 and higher are supported, including 11g, 12.2, 18c, and 19c.
- **PostgreSQL:** Versions 9.2 and higher are supported.
- **MySQL:** Versions 5.5, 5.6, 5.7, and 8.0 are supported.
- **Microsoft SQL Server:** Versions 2008 R2 through 2022 are supported.
- **IBM Db2:** Both Db2 for z/OS and Db2 for LUW (Linux, Unix, Windows) are supported.
- **MariaDB:** Community Edition is supported.

**AWS services**

- **Amazon Aurora:** Both MySQL and PostgreSQL-compatible versions are supported.
- **Amazon RDS:** Supports various versions of Aurora, MySQL, and PostgreSQL.
- **Amazon Redshift:** Supported for data warehousing and analytics.
- **Amazon S3:** Can be used as a source to stream data.
- **Amazon DocumentDB:** MongoDB-compatible databases are supported.

**Other sources**

- **MongoDB:** Supported for both on-premises and cloud deployments.
- **SAP ASE:** Supported as a source.
- **Microsoft Azure:** Supports various Azure databases like Azure SQL Database, Azure SQL Managed Instance, and Azure Database for MySQL/PostgreSQL.
- **Google Cloud:** Supports Google Cloud SQL for MySQL and PostgreSQL.
- **Percona MySQL:** Supported as a source.

[Sources for data migration - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html)

[Sources for AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Sources.html)

### Targets

[Targets for AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Targets.html)

- Postgres / SQL Server / MySQL
- IBM Db2 LUW versions 11.1 and 11.5
- Amazon Aurora MySQL-Compatible Edition
- Amazon Aurora PostgreSQL-Compatible Edition
- Amazon Aurora PostgreSQL Limitless
- Amazon Aurora Serverless v2
- Amazon Redshift
- Amazon Redshift Serverless
- Amazon S3
- Amazon DynamoDB
- Amazon OpenSearch Service
- Amazon ElastiCache (Redis OSS)
- Amazon Kinesis Data Streams
- Amazon DocumentDB (with MongoDB compatibility)
- Amazon Neptune
- Apache Kafka – [Amazon Managed Streaming for Apache Kafka (Amazon MSK)](https://aws.amazon.com/msk/) and [self-managed Apache Kafka](https://kafka.apache.org/)
- Babelfish (version 3.2.0 and higher) for Aurora PostgreSQL (versions 15.3/14.8 and higher)

[Targets for data migration - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.html)

## Schema Conversion Tool (SCT)

Heterogeneous migrations a two-step process. First use the AWS Schema Conversion Tool to convert the source schema and code to match that of the target database, and then use the AWS Database Migration Service to migrate data from the source database to the target database. All the required data type conversions will automatically be done by the AWS Database Migration Service during the migration. The source database can be located on your on-premises environment outside of AWS, running on an Amazon EC2 instance, or it can be an Amazon RDS database. The target can be a database in Amazon EC2 or Amazon RDS.

https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html

## Pricing

Free Tier - includes up to 750 hours per month for a Single-AZ dms.t2.micro instance

All data transfer into AWS Database Migration Service is free, and data transferred between AWS Database Migration Service and databases in Amazon RDS and Amazon EC2 Instances in the same Availability Zone also is free.

|          |        |
| -------- | ------ |
| c4.large | $0.154 |
| c5.large | $0.154 |

Homogeneous data migrations - $0.0824 per migration hour

https://hevodata.com/blog/aurora-to-redshift-data-migration-using-aws-dms

### Serverless

AWS DMS Serverless offers the flexibility and ease to migrate data without the need to provision replication instances or manually monitor use and adjust capacity. It automatically provisions, monitors, and scales migration resources to the optimal capacity needed to meet demand. DMS Serverless supports popular DMS use cases including continuous data replication, database consolidation, and migrations, even if the source and target database engines differ. It aids even the most complex migrations, including migrating tens or even hundreds of workloads simultaneously or completing ongoing data replications on AWS.

[Working with AWS DMS Serverless - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Serverless.html)

## Migration planning

[AWS DMS Fleet Advisor](https://aws.amazon.com/dms/fleet-advisor/) is a free, fully managed capability of AWS Database Migration Service (AWS DMS). It automates migration planning and helps you [migrate database and analytics fleets](https://aws.amazon.com/products/databases/migrations/) to the cloud at scale with minimal effort. To accelerate migrations, AWS DMS Fleet Advisor automatically inventories and assesses your on-premises database and analytics server fleet and identifies potential migration paths. Using historical performance and usage patterns collected from self-managed databases, Fleet Advisor can [recommend target database engines](https://docs.aws.amazon.com/dms/latest/userguide/fa-recommendations.html) and instance options as well as estimate costs. DMS helps you confidently migrate your databases and analytics systems to AWS with virtually no downtime.

AWS DMS Fleet Advisor discovers and analyzes the same source databases supported in AWS DMS, including Oracle, Microsoft SQL Server, MySQL, PostgreSQL, and more. DMS Fleet Advisor delivers results in a few hours, instead of weeks or even months, without using third-party tools or hiring migration experts.

## Schema assessment and conversion

AWS DMS Schema Conversion (DMS SC) is a fully managed feature of AWS DMS that allows you to automatically assess and convert database schemas and code objects at scale with zero downtime. AWS DMS Schema Conversion supports popular heterogeneous migrations, such as [Oracle to Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-oracle-postgresql.html), [SQL Server to Amazon RDS for MySQL](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-sql-server-mysql.html), [SQL Server to Amazon Aurora PostgreSQL-Compatible Edition,](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-sql-server-aurora-postgresql.html) and [Oracle to Amazon Aurora MySQL-Compatible Edition](https://docs.aws.amazon.com/dms/latest/sbs/schema-conversion-oracle-aurora-mysql.html). You can save weeks or months of manual time and resources with a few clicks in the DMS console.

With a few clicks, you can generate an assessment report that shows the schema conversion complexity. This report provides prescriptive guidance on how to resolve any incompatibilities between the source and target database engines. Learn more about AWS DMS Schema Conversion in the [documentation](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_SchemaConversion.html) and [how to get started.](https://docs.aws.amazon.com/dms/latest/userguide/getting-started.html)

## Homogeneous Data Migration

Homogeneous data migrations - $0.0824 per migration hour

With homogeneous data migrations, you pay by the hour only for the duration of the data migration. With no replication instances to provision, you do not need to worry about over-provisioning or manually scaling capacity, saving time and cost.

### Features

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

### Limitations for homogeneous data migrations

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

[Migration with native database tools and AWS DMS - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-database-rehost-tools/dms.html)

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

## Transformations

[Transformation rules and actions - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Transformations.html)

- `add-column`, `include-column`, `remove-column`
- `rename`
- `convert-lowercase`, `convert-uppercase`
- `add-prefix`, `remove-prefix`, `replace-prefix`
- `add-suffix`, `remove-suffix`, `replace-suffix`
- `define-primary-key`
- `change-data-type`
- `add-before-image-columns`
- `data-masking-digits-mask`
- `data-masking-digits-randomize`
- `data-masking-hash-mask`
	- The `data-masking-digits-mask`, `data-masking-digits-randomize`, and `data-masking-hash-mask` are for masking sensitive information contained in one or more columns of the table when loading to target. These transformations are only available for column rule targets. For more details, see [Using data masking to hide sensitive information](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Masking.html)

## Optimizations

- [Use AWS DMS batch apply to improve CDC replication performance \| AWS re:Post](https://repost.aws/knowledge-center/dms-batch-apply-cdc-replication)
- [Understand and optimize replication for Amazon Redshift with AWS DMS | AWS Database Blog](https://aws.amazon.com/blogs/database/understand-and-optimize-replication-for-amazon-redshift-with-aws-dms/)
- [Optimize memory for migration using AWS DMS | AWS re:Post](https://repost.aws/knowledge-center/dms-memory-optimization)

## RDS to Data Lake

[Step-by-step an Amazon RDS PostgreSQL database to an Amazon S3 data lake migration walkthrough - Database Migration Guide](https://docs.aws.amazon.com/dms/latest/sbs/postgresql-s3datalake.stepbystep.html)

## Links

- [Cloud Database Migration - AWS Database Migration Service (AWS DMS) - AWS](https://aws.amazon.com/dms)
- [Perform delta data loads to data lakes using AWS DMS | AWS Database Blog](https://aws.amazon.com/blogs/database/perform-delta-data-loads-to-data-lakes-using-aws-dms/)
- [Migrate an on-premises Oracle database to Amazon RDS for MySQL using AWS DMS and AWS SCT - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-an-on-premises-oracle-database-to-amazon-rds-for-mysql-using-aws-dms-and-aws-sct.html)
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

- [Migrating a MySQL Database to RDS for MySQL or Aurora MySQL - Database Migration Guide](https://docs.aws.amazon.com/dms/latest/sbs/chap-manageddatabases.mysql2rds.html)
- [Accelerate your database migration journey using AWS DMS Schema Conversion | AWS Database Blog](https://aws.amazon.com/blogs/database/accelerate-your-database-migration-journey-using-aws-dms-schema-conversion/)
- [How to archive data from relational databases to Amazon Glacier using AWS DMS \| AWS Database Blog](https://aws.amazon.com/blogs/database/archiving-data-from-relational-databases-to-amazon-glacier-via-aws-dms)
- [Automating AWS DMS Migration Tasks \| AWS Database Blog](https://aws.amazon.com/blogs/database/automating-aws-dms-migration-tasks)

## AWS Data Sync

AWS DataSync is an online data transfer service that simplifies, automates, and accelerates copying large amounts of data to and from AWS storage services over the internet or AWS Direct Connect.

AWS DataSync fully automates and accelerates moving large active datasets to AWS, up to 10 times faster than command-line tools. It is natively integrated with **Amazon S3, Amazon EFS, Amazon FSx for Windows File Server, Amazon CloudWatch, and AWS CloudTrail**, which provides seamless and secure access to your storage services, as well as detailed monitoring of the transfer.

AWS DataSync uses a purpose-built network protocol and scale out architecture to transfer data. A single DataSync agent is capable of saturating a 10 Gbps network link.

AWS DataSync fully automates the data transfer. It comes with retry and network resiliency mechanisms, network optimizations, built-in task scheduling, monitoring via the DataSync API and Console, and Amazon CloudWatch metrics, events, and logs that provide granular visibility into the transfer process. AWS DataSync performs data integrity verification both during the transfer and at the end of the transfer.

[Data Transfer Service - AWS DataSync - AWS](https://aws.amazon.com/datasync/)

## AWS Transfer Family

The AWS Transfer Family provides fully managed support for file transfers directly into and out of Amazon S3 and Amazon EFS.

AWS Transfer Family is a secure transfer service that enables you to transfer files into and out of AWS storage services. Transfer Family is part of the AWS Cloud platform. AWS Transfer Family offers fully managed support for the transfer of files over **SFTP, AS2, FTPS, FTP, and web browser-based transfers directly into and out of AWS storage services.** You can seamlessly migrate, automate, and monitor your file transfer workflows by maintaining existing client-side configurations for authentication, access, and firewalls—so nothing changes for your customers, partners, and internal teams, or their applications.

[Secure File Transfer - AWS Transfer Family - AWS](https://aws.amazon.com/aws-transfer-family/)

[What is AWS Transfer Family? - AWS Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html)
