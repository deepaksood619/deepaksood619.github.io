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

- Full load (Migrate existing data) -- If you can afford an outage long enough to copy your existing data, this option is a good one to choose. This option simply migrates the data from your source database to your target database, creating tables when necessary.
- Full load + CDC (Migrate existing data and replicate ongoing changes) -- This option performs a full data load while capturing changes on the source. After the full load is complete, captured changes are applied to the target. Eventually, the application of changes reaches a steady state. At this point, you can shut down your applications, let the remaining changes flow through to the target, and then restart your applications pointing at the target.
- CDC only (Replicate data changes only) -- In some situations, it might be more efficient to copy existing data using a method other than AWS DMS. For example, in a homogeneous migration, using native export and import tools might be more efficient at loading bulk data. In this situation, you can use AWS DMS to replicate changes starting when you start your bulk load to bring and keep your source and target databases in sync.

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

All data transfer into AWS Database Migration Service is free, and data transferred between AWS Database Migration Service and databases in Amazon RDS and Amazon EC2 Instances in the same Availability Zone also is free.

| | |
|---|---|
| c4.large | $0.154 |
| c5.large | $0.154 |

https://hevodata.com/blog/aurora-to-redshift-data-migration-using-aws-dms

## Links

- [Perform delta data loads to data lakes using AWS DMS | AWS Database Blog](https://aws.amazon.com/blogs/database/perform-delta-data-loads-to-data-lakes-using-aws-dms/)
- [Migrate an on-premises Oracle database to Amazon RDS for MySQL using AWS DMS and AWS SCT - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-an-on-premises-oracle-database-to-amazon-rds-for-mysql-using-aws-dms-and-aws-sct.html)
- [Understand and optimize replication for Amazon Redshift with AWS DMS | AWS Database Blog](https://aws.amazon.com/blogs/database/understand-and-optimize-replication-for-amazon-redshift-with-aws-dms/)
- [Using MongoDB as a source for AWS DMS - AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html)
