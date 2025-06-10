# Percona XtraBackup

## Features

- Create hot InnoDB backups without pausing your database
- Make incremental backups of MySQL
- Stream compressed MySQL backups to another server
- Move tables between MySQL servers on-line
- Create new MySQL replication replicas easily
- Backup MySQL without adding load to the server
- Backup locks are a lightweight alternative to FLUSH TABLES WITH READ LOCK available in Percona Server 5.6+. Percona XtraBackup uses them automatically to copy non-InnoDB data to avoid blocking DML queries that modify InnoDB tables.
- Percona XtraBackup performs throttling based on the number of IO operations per second.
- Percona XtraBackup skips secondary index pages and recreates them when a compact backup is prepared.
- Percona XtraBackup can export individual tables even from a full backup, regardless of the InnoDB version.
- Tables exported with Percona XtraBackup can be imported into Percona Server 5.1, 5.5 or 5.6+, or MySQL 5.6+.

## XtraBackup

Amazon RDS for MySQL and Amazon Aurora MySQL support migration from Percona XtraBackup files that are stored in an Amazon S3 bucket. Percona XtraBackup produces a binary backup files which can be significantly faster than migrating from logical schema and data dumps using tools such as mysqldump. The tool can be used for small-scale to large-scale migrations.

Percona XtraBackup is appropriate when the following conditions are met:

- You have administrative, system-level access to the source database.
- You migrate database servers in a 1-to-1 fashion: one source MySQL server becomes one new Amazon RDS for MySQL or Aurora DB cluster.

You can decide not to use this tool if any of the following conditions are true:

- You can’t use third-party software because of operating system limitations.
- You migrate into existing Aurora DB clusters.
- You migrate multiple source MySQL servers into a single Aurora DB cluster.
- For more information, see [Limitations and recommendations for importing backup files from Amazon S3 to Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html#MySQL.Procedural.Importing.Limitations).

For details and step-by-step instructions, see [Migrating data from MySQL by using an Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3) in the _Amazon RDS User Guide_.

Follow these three steps to perform full data load using Percona XtraBackup.

1. Produce a backup file containing source data.
2. Restore this backup file from Amazon S3 while launching a new target database.
3. Retrieve the binary log position for ongoing replication.

For example, the following command creates the backup file and streams it directly to Amazon S3.

```bash
xtrabackup --user=<myuser> --backup --parallel=4 \
--stream=xbstream --compress | \
aws s3 cp - s3://<bucket_name>/<backup_file>.xbstream
```

Use the Amazon RDS console to restore the backup files from the Amazon S3 bucket and create a new Amazon Aurora MySQL DB cluster. For more information, see [Restoring an Aurora MySQL DB cluster from an Amazon S3 bucket](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3.Restore).

For example, the following command prints the binary log (binlog) information after you finish the creation of a compressed backup.

`MySQL binlog position: filename 'mysql-bin.000001', position '481'`

For example, the following command retrieves the binary log file name and position from the from the `xtrabackup_binlog_info` file. This file is located in the main backup directory of an uncompressed backup.

```bash
$ cat </on-premises/backup>/xtrabackup_binlog_info
// Output
mysql-bin.000001     481
```

[Percona XtraBackup for MySQL - Top MySQL Backup Solution](https://www.percona.com/mysql/software/percona-xtrabackup)
