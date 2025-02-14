# Backup

[Understanding Amazon Aurora backup storage usage - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-storage-backup.html)

Amazon Aurora maintains two types of backup: automated (continuous) backups and snapshots.

## Automated backup storage

The automated (continuous) backup for a cluster incrementally stores all database changes within a specified retention period to be able to restore to any point in time within that retention period. Retention periods can range from 1–35 days. Automated backups are incremental and charged based on the amount of storage that’s required to restore to any time within the retention period.

Aurora also provides a free amount of backup usage. This free amount of usage is equal to the latest cluster volume size (as represented by the `VolumeBytesUsed` Amazon CloudWatch metric). This amount is subtracted from the calculated automated backup usage. There is also no charge for an automated backup whose retention period is just 1 day.

For example, your automated backup has a retention period of 7 days, and you want to restore your cluster to its state from four days ago. Aurora uses the incremental data stored in the automated backup to re-create the state of the cluster at that exact time four days ago.

The automated backup stores all the required information to be able to restore the cluster at any point in time in the retention window. That means that it stores all changes during the retention window, including writes of new information or deletion of existing information. For databases where many changes occur, the size of the automated backup grows over time. After a database stops experiencing changes, you can expect the size of the automated backup to decrease, as the previously stored changes exit the retention window.

The total billed usage for the automated backup never exceeds the cumulative cluster volume size over the retention period. For example, if your retention period is 7 days, and your cluster volume was 100 GB every day, then the billed automated backup usage never exceeds 700 GB (100 GB * 7).

| db engine    | size    | time to snapshot | time to restore | backup tool  |
| ------------ | ------- | ---------------- | --------------- | ------------ |
| Aurora MYSQL | 1457 GB | 2.40 min         | 41.27 min       | aws snapshot |

## Snapshot storage

DB cluster snapshots are always full backups whose size is that of the cluster volume at the time the snapshot is taken. Snapshots, either taken manually by the user or automatically by an [AWS Backups](https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html) plan, are treated as manual snapshots. Aurora provides unlimited free storage for all snapshots that lie within the automated backup retention period. After a manual snapshot is outside the retention period, it's billed per GB-month. Any automated system snapshot is never charged unless copied and retained past the retention period.

Manual snapshots are not deleted. You can have up to 100 manual snapshots per Region.

| Service&nbsp;                        | Monthly Cost( $ Per GB) | Size (TB) | Month  | &nbsp;1 Year | 7 Years |
| ------------------------------------ | ----------------------- | --------- | ------ | ------------ | ------- |
| Amazon Aurora Snapshot               | $0.021                  | 1         | $21.50 | $258.048     | $1,806  |
| Amazon S3 Standard-Infrequent        | $0.012                  | 1         | $12.80 | $153.600     | $1,075  |
| Amazon S3 Glacier Flexible Retrieval | $0.0036                 | 1         | $3.68  | $44.230      | $309    |

[Reduce Amazon Aurora MySQL backup costs using MySQL Shell and Amazon S3 | AWS Database Blog](https://aws.amazon.com/blogs/database/reduce-amazon-aurora-mysql-backup-costs-using-mysql-shell-and-amazon-s3/)

## Amazon CloudWatch metrics for Aurora backup storage

### `BackupRetentionPeriodStorageUsed`

Represents the amount of backup storage used, in bytes, for storing automated backups at the current time.

- The value depends on the size of the cluster volume and the number of changes (writes and updates) that are made to the DB cluster during the retention period. This is because the automated backup must store all incremental changes made to the cluster to be able to restore to any point in time.
- This metric doesn't subtract the free tier of backup usage that Aurora provides.
- This metric emits a single daily data point for the automated backup usage recorded on that day.

### `SnapshotStorageUsed`

Represents the amount of backup storage used, in bytes, for storing manual snapshots beyond the automated backup's retention period.

- The value depends on the number of snapshots you keep beyond the automated backup’s retention period and the size of each snapshot.
- The size of each snapshot is the size of the cluster volume at the time you take the snapshot.
- Snapshots are full backups, not incremental.
- This metric emits one daily data point for each snapshot being charged. To retrieve your daily total snapshot usage, take the sum of this metric over a period of 1 day.

### `TotalBackupStorageBilled`

Represents the metrics for all billed backup usage, in bytes, for the given cluster:

`BackupRetentionPeriodStorageUsed + SnapshotStorageUsed - free tier`

- This metric emits one daily data point for the `BackupRetentionPeriodStorageUsed` value _minus_ the free tier of backup usage that Aurora provides. This free tier is equal to the latest recorded size of the DB cluster volume. This data point represents the actual billed usage for the automated backup.
- This metric emits individual daily data points for all of the `SnapshotStorageUsed` values.
- To retrieve your total daily billed backup usage, take the sum of this metric over a period of 1 day. This sums all of the billed snapshot usage with the billed automated backup usage, to give your total billed backup usage.

## Calculating backup storage usage

The usage for an automated backup is calculated by looking at all of the incremental records that must be stored, to be able to restore to any point in time within the retention period of the backup.

For example, you have an automated backup with retention period of 7 days. Your cluster volume size just before the retention period was 100 GB, so that’s the least amount that Aurora needs to store. Then you have the following activity for the next 7 days, where the incremental record size is the amount of storage needed to store the change records coming from your database’s writes and updates.

|Day|Incremental record size (GB)|
|---|---|
|1|10|
|2|15|
|3|25|
|4|20|
|5|10|
|6|25|
|7|30|
|Total|135|

This data means that the calculated automated backup usage for your backup is the following:

`100 GB (volume size before retention period) + 135 GB (size of incremental records) = 235 GB total backup usage`

The billed usage then subtracts the free tier of usage. Assume that the latest size of your volume is 200 GB:

`235 GB total backup usage - 200 GB (latest volume size) = 35 GB billed backup usage`

[Demystifying Amazon RDS backup storage costs | AWS Database Blog](https://aws.amazon.com/blogs/database/demystifying-amazon-rds-backup-storage-costs/)

[Can someone help me understand RDS snapshot/backup costs? : r/aws](https://www.reddit.com/r/aws/comments/15gf254/can_someone_help_me_understand_rds_snapshotbackup/)

## FAQs

[mysql - Should I stick only to AWS RDS Automated Backup or DB Snapshots? - Stack Overflow](https://stackoverflow.com/questions/9815612/should-i-stick-only-to-aws-rds-automated-backup-or-db-snapshots)

### When am I billed for snapshots?

You're billed for manual snapshots that are outside (older than) the retention period of the automated backup.

### What's a manual snapshot?

A manual snapshot is a snapshot to which one of the following conditions applies:

- Manually requested by you
- Taken by an automated backup service such as AWS Backup
- Copied from an automated system snapshot to preserve it outside the retention period

### What happens to my manual snapshots if I delete my DB cluster?

Manual snapshots don't expire until you delete them.

When you delete your DB cluster, the manual snapshots that you previously took continue to exist. If these snapshots previously weren't being billed because they were within the automated backup retention period, now they're not covered anymore and all start to be billed at their full size for their usage.

### How can I reduce my backup storage costs?

There are a few ways to reduce backup usage related costs:

- Delete manual snapshots that lie outside your automated backup’s retention period. This includes the snapshots you’ve taken, as well as the snapshots that your AWS Backup plan might have taken. Make sure to check your AWS Backup plan to make sure it isn't keeping snapshots outside the retention period that you don't expect.
- Evaluate your writes and updates to your database to see if you can reduce the number of changes you're making. Because our automated backup stores all incremental changes within the retention period, reducing the number of updates that you're making also reduces your automated backup charges.
- Evaluate whether reducing your automated backup’s retention period would make sense. Reducing the retention period means that the backup stores fewer days of incremental data, which could reduce the overall backup cost. However, reducing this retention period could also cause some snapshots to start being billed because they're now outside the retention period. Make sure to check all the extra snapshot costs that you might incur before deciding whether this is the right course of action for you.

### How is backup storage billed?

Backup storage is billed by the GB-month.

This means that the backup storage usage is charged as the weighted average of the usage over the given month. Here are a few examples for a 30-day month:

- Billed backup usage is 100 GB for all 30 days of the month. Your charge is the following:

    `(100 GB * 30) / 30 = 100 GB-month`

- Billed backup usage is 100 GB for the first 15 days of the month, then 0 GB for the last 15. Your charge is the following:

    `(100 GB * 15 + 0 GB * 15) / 30 = 50 GB-month`

- Billed backup usage is 50 GB for the first 10 days of the month, 100 GB for the next 10 days, then 150 GB for the final 10. Your charge is the following:

    `(50 GB * 10 + 100 GB * 10 + 150 GB * 10) / 30 = 100 GB-month`

### How does the backtrack setting for my DB cluster affect backup storage usage?

The backtrack setting for an Aurora DB cluster doesn't affect the volume of backup data for that cluster. Amazon bills the storage for backtracking data separately. For pricing information about Aurora backtracking, see the [Amazon Aurora pricing](https://aws.amazon.com/rds/aurora/pricing) page.

### How do storage costs apply to shared snapshots?

If you share a snapshot with another user, you're still the owner of that snapshot. The storage costs apply to the snapshot owner. If you delete a shared snapshot that you own, nobody can access it.

To keep access to a shared snapshot owned by someone else, you can copy that snapshot. Doing so makes you the owner of the new snapshot. Any storage costs for the copied snapshot apply to your account.

### Is there downtime for enabling Amazon RDS automated backups?

When you [enable Amazon RDS automated backups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.Enabling), an outage can occur when you update the backup retention period from "0" to a nonzero value. An outage can also occur when you update from a nonzero value to "0". The outage will be equivalent to the duration of a reboot and any engine recovery tasks performed during the engine startup.

**Note:** If you disable automated backups in Amazon RDS, all of your previous automated backup jobs will also be deleted.

### What is the difference between automated backups and DB Snapshots?

Amazon RDS provides two different methods for backing up and restoring your DB instance(s) [automated backups](https://aws.amazon.com/rds/features/backup/) and [database snapshots](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html) (DB Snapshots).

The automated backup feature of Amazon RDS enables [point-in-time recovery](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) of your DB instance. When automated backups are turned on for your DB Instance, Amazon RDS automatically performs a full daily snapshot of your data (during your preferred backup window) and captures transaction logs (as updates to your DB Instance are made). When you initiate a point-in-time recovery, transaction logs are applied to the most appropriate daily backup in order to restore your DB instance to the specific time you requested.

Amazon RDS retains backups of a DB Instance for a limited, user-specified period of time called the retention period, which by default is 7 days but can be set to up to 35 days. You can initiate a point-in-time restore and specify any second during your retention period, up to the Latest Restorable Time. You can use the [DescribeDBInstances](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html) API to return the latest restorable time for you DB instance, which is typically within the last five minutes.

Alternatively, you can find the Latest Restorable Time for a DB instance by selecting it in the AWS Management Console and looking in the "Description" tab in the lower panel of the Console.

DB Snapshots are user-initiated and enable you to back up your DB instance in a known state as frequently as you wish, and then restore to that specific state at any time. DB Snapshots can be created with the AWS Management Console, CreateDBSnapshot API, or create-db-snapshot command and are kept until you explicitly delete them.

The snapshots which Amazon RDS performs for enabling automated backups are available to you for copying (using the AWS console or the [copy-db-snapshot command](http://docs.aws.amazon.com/cli/latest/reference/rds/copy-db-snapshot.html)) or for the snapshot restore functionality. You can identify them using the "automated" Snapshot Type. In addition, you can identify the time at which the snapshot has been taken by viewing the "Snapshot Created Time" field.

Alternatively, the identifier of the "automated" snapshots also contains the time (in UTC) at which the snapshot has been taken.

Please note: When you perform a restore operation to a point in time or from a DB Snapshot, a new DB Instance is created with a new endpoint (the old DB Instance can be deleted if so desired). This is done to enable you to create multiple DB Instances from a specific DB Snapshot or point in time.

### Where are my automated backups and DB snapshots stored and how do I manage their retention?

Amazon RDS DB snapshots and automated backups are stored in [S3](https://aws.amazon.com/s3/).

[Amazon RDS FAQs](https://aws.amazon.com/rds/faqs/#23)

## Exports in Amazon S3

Costs - 10 snapshots for a database 20gb in size, costs over $23 USD

2.5 TB of data compressed to 463 GB in AWS S3 in parquet format

You can export DB snapshot data to an Amazon S3 bucket. The export process runs in the background and doesn't affect the performance of your active DB instance.

When you export a DB snapshot, Amazon RDS extracts data from the snapshot and stores it in an Amazon S3 bucket. The data is stored in an Apache Parquet format that is compressed and consistent.

You can export all types of DB snapshots—including manual snapshots, automated system snapshots, and snapshots created by the AWS Backup service. By default, all data in the snapshot is exported. However, you can choose to export specific sets of databases, schemas, or tables.

After the data is exported, you can analyze the exported data directly through tools like Amazon Athena or Amazon Redshift Spectrum.

[Exporting DB snapshot data to Amazon S3 - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html)

Limitations - [Exporting DB snapshot data to Amazon S3 - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html#USER_ExportSnapshot.Limits)

### Important Difference

Unfortunately exporting an RDS snapshot of Aurora MySQL to S3 and creating a new database cluster from the exported Snapshot will not be possible, this is because when you export a DB snapshot, Amazon RDS extracts data from the snapshot and stores it in an Amazon S3 bucket in your account. The data is stored in an Apache Parquet format that is compressed and consistent.

Please note that "**restore from s3**" and "**export snapshot to s3**" are serving for 2 different purposes.

Exporting a snapshot to S3 is a one way direction. The files in parquet format that have been exported to S3 **can't be used to restore back to RDS**. The purpose of it is to allow Amazon Athena or Amazon Redshift Spectrum to analyze data directly from s3.

On the other hand, restoring from s3 is for restoring a XtraBackup created on your local server which is for migrating data from an external MySQL database to an Amazon Aurora MySQL DB cluster

[amazon web services - Restore Aurora DB cluster from S3 not working - Stack Overflow](https://stackoverflow.com/questions/65922345/restore-aurora-db-cluster-from-s3-not-working)

[postgresql - How to restore exported RDS snapshot from S3 to RDS cluster - Stack Overflow](https://stackoverflow.com/questions/72547543/how-to-restore-exported-rds-snapshot-from-s3-to-rds-cluster)

[Amazon RDS Snapshot Export to S3 - YouTube](https://www.youtube.com/watch?v=lyNGeDg6EII)

[GitHub - aws-samples/rds-snapshot-export-to-s3-pipeline: RDS Snapshot Export to S3 Pipeline](https://github.com/aws-samples/rds-snapshot-export-to-s3-pipeline)

[postgresql - How to restore exported RDS snapshot from S3 to RDS cluster - Stack Overflow](https://stackoverflow.com/questions/72547543/how-to-restore-exported-rds-snapshot-from-s3-to-rds-cluster)

- There is currently no method available to import these Parquet files back into RDS. You would have to write some code yourself to read the Parquet files and insert the data back into a running RDS instance if you needed that.

## Import from S3

Amazon RDS supports importing MySQL databases by using backup files. You can create a backup of your database, store it on Amazon S3, and then restore the backup file onto a new Amazon RDS DB instance running MySQL.

### Limitations

- You can't restore from an encrypted source database, but you can restore to an encrypted Amazon RDS DB instance.
- You can't restore from an encrypted backup in the Amazon S3 bucket.
- You can't import a MySQL 5.5 or 5.6 database.
- User accounts, Functions, Stored Procedures are not imported automatically. Save your user accounts from your source database and add them to your new DB instance later.

[Restoring a backup into a MySQL DB instance - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html#MySQL.Procedural.Importing.Limitations)

## Replication

[Replication with Amazon Aurora MySQL - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.html)

[Replication with Amazon Aurora - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html)

# Backup / Restore Tools

To restore your database, you can use the [pg_dump utility](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Procedural.Importing.html#PostgreSQL.Procedural.Importing.EC2) for PostgreSQL or for PostgreSQL versions 10.10 and later, and 11.5. Or, you can use [Transportable Databases](https://aws.amazon.com/blogs/database/migrating-databases-using-rds-postgresql-transportable-databases/), which moves data much faster than the pg_dump/pg_restore method. The [mysqldump](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.SmallExisting.html) utility is available for importing data into MySQL/MariaDB engines, or you can use the [external replication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.NonRDSRepl.html) method for reduced downtime. Similarly, you can use [Data Pump](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Procedural.Importing.DataPump.html) for Oracle and [native full backup](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.html#SQLServer.Procedural.Importing.Native.Using) (.bak files) for SQL Server.

[Restoring a backup into a MySQL DB instance - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html)

[Importing data from an external MariaDB or MySQL database to an RDS for MariaDB or RDS for MySQL DB instance - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.SmallExisting.html)

[Importing data to an Amazon RDS MariaDB or MySQL database with reduced downtime - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.NonRDSRepl.html)

[Importing data from any source to a MariaDB or MySQL DB instance - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.AnySource.html)

[Homogeneous migrations - Amazon Aurora MySQL Migration Handbook](https://docs.aws.amazon.com/whitepapers/latest/amazon-aurora-mysql-migration-handbook/homogeneous-migrations.html)

[Self-managed homogeneous migrations - Amazon Aurora MySQL Migration Handbook](https://docs.aws.amazon.com/whitepapers/latest/amazon-aurora-mysql-migration-handbook/self-managed-homogeneous-migrations.html)

### SAAS

- Nimesa Backup and Recovery for AWS - BYOL Edition
- [AWS Marketplace: Nimesa Backup and Recovery for AWS - BYOL Edition](https://aws.amazon.com/marketplace/pp/prodview-imk2hwjotrx44)

## Links

- [Improve performance of your bulk data import to Amazon RDS for MySQL | AWS Database Blog](https://aws.amazon.com/blogs/database/improve-performance-of-your-bulk-data-import-to-amazon-rds-for-mysql/)
- [Perform automated backups of Amazon RDS MySQL | AWS re:Post](https://repost.aws/knowledge-center/rds-mysql-automated-backups)
- [Reduce Amazon Aurora MySQL backup costs using MySQL Shell and Amazon S3 | AWS Database Blog](https://aws.amazon.com/blogs/database/reduce-amazon-aurora-mysql-backup-costs-using-mysql-shell-and-amazon-s3/)
