# MyDumper

MyDumper is a MySQL Logical Backup Tool. It has 2 tools:

- `mydumper` which is responsible to export a consistent backup of MySQL databases
- `myloader` reads the backup from mydumper, connects to the destination database and imports the backup.

Both tools use multithreading capabilities.

MyDumper is Open Source and maintained by the community, it is not a Percona, MariaDB or MySQL product.

`mydumper` is a tool used for backing up MySQL database servers much faster than the mysqldump tool distributed with MySQL. It also has the capability to retrieve the binary logs from the remote server at the same time as the dump itself.

## Why do we need MyDumper?

- Parallelism (hence, speed) and performance (avoids expensive character set conversion routines, efficient code overall)
- Easier to manage output (separate files for tables, dump metadata, etc, easy to view/parse data)
- Consistency - maintains snapshot across all threads, provides accurate master and slave log positions, etc
- Manageability - supports PCRE for specifying database and tables inclusions and exclusions

## Advantages

- MyDumper supports parallelism by using multi-threading, which improves the speed of backup and restore operations.
- MyDumper avoids expensive character set conversion routines, which helps ensure the code is highly efficient.
- MyDumper simplifies the data view and parsing by using dumping separate files for tables and metadata.
- MyDumper maintains snapshots across all threads and provides accurate positions of primary and secondary logs.
- You can use Perl Compatible Regular Expressions (PCRE) to specify whether to include or exclude tables or databases.

## Limitations

- You might choose a different tool if your data transformation processes require intermediate dump files in flat format instead of SQL format.
- myloader doesn't import database user accounts automatically. If you are restoring the backup to Amazon RDS or Aurora, recreate the users with the required permissions. For more information, see [Master user account privileges](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.MasterAccounts.html) in the Amazon RDS documentation. If you are restoring the backup to an Amazon EC2 database instance, you can manually export the source database user accounts and import them into the EC2 instance.

## Best practices

- Configure mydumper to divide each table into segments, such as 10,000 rows in each segment, and write each segment in a separate file. This makes it possible to import the data in parallel later.
- If you are using the InnoDB engine, use the `--trx-consistency-only` option to minimize locking.
- Using mydumper to export the database can become read-intensive, and the process can impact overall performance of the production database. If you have a replica database instance, run the export process from the replica. Before you run the export from the replica, stop the replication SQL thread. This helps the export process run more quickly.
- Don't export the database during peak business hours. Avoiding peak hours can stabilize the performance of your primary production database during the database export.

[GitHub - mydumper/mydumper: Official MyDumper Project](https://github.com/mydumper/mydumper)

[MyDumper - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-large-mysql-mariadb-databases/mydumper.html)

[Multi-threaded migration using mydumper and myloader - Amazon Aurora MySQL Migration Handbook](https://docs.aws.amazon.com/whitepapers/latest/amazon-aurora-mysql-migration-handbook/multi-threaded-migration-using-mydumper-and-myloader.html)

[GitHub - DSB/MySQLDumper: Backup & Restore for MySQL databases](https://github.com/DSB/MySQLDumper)

## mydumper

mydumper and myloader are third-party utilities that perform a multithreaded schema and data migration without the need to manually invoke any SQL commands or design custom migration scripts. mydumper functions similarly to mysqldump, but offers many improvements such as parallel backups, consistent reads, and built-in compression. Another benefit to mydumper is that each individual table gets dumped into a separate file. The tools are highly flexible and have reasonable configuration defaults. You can adjust the default configuration to satisfy the requirements of both small-scale and large-scale migrations.

mydumper is appropriate when the following conditions are met:

- Migration time is critical.
- You can’t use Percona XtraBackup.

You can decide not to use this tool if any of the following conditions are true:

- You migrate from an Amazon RDS for MySQL DB instance or a self-managed MySQL 5.5 or 5.6 database. In that case, you might get better results Percona XtraBackup.
- You can’t use third-party software because of operating system limitations.
- Your data transformation processes require intermediate dump files in a flat-file format and not an SQL format.

For details and step-by-step instructions, see the [mydumper project](https://github.com/maxbube/mydumper).

Follow these three steps to perform full data load using mydumper.

1. Produce a dump file containing source data.
2. Restore this dump file on the target database using myloader.
3. Retrieve the binary log position for ongoing replication.

For example, the following command creates the backup of DbName1 and DbName2 databases using mydumper.

```sql
mydumper \
--host=<db-server-address> \
--user=<mydumper-username> --password=<mydumper-password> \
--outputdir=/db-dump/mydumper-files/ \
-G -E -R --compress --build-empty-files \
--threads=4 --compress-protocol \
--regex '^(DbName1\.|DbName2\.)' \
-L /<mydumper-logs-dir>/mydumper-logs.txt
```

For example, the following command restores the backup to the Amazon RDS instance using myloader.

```sql
myloader \
--host=<rds-instance-endpoint> \
--user=<db-username> --password=<db-password> \
--directory=<mydumper-output-dir> \
--queries-per-transaction=50000 --threads=4 \
--compress-protocol --verbose=3 -e 2><myload-output-logs-path>
```

For example, the following command retrieves the binary log information from the mydumper metadata file.

```bash
cat <mydumper-output-dir>/metadata
# It should display data similar to the following:
SHOW MASTER STATUS:SHOW MASTER STATUS:
    Log: mysql-bin.000129
    Pos: 150
    GTID:
```

## Commands

```bash
brew install mydumper

mydumper -V

# Dump the database
mydumper -h source-rds-endpoint -u username -p password -o /path/to/dumpdir --threads 4

# Restore the database
myloader -h target-rds-endpoint -u username -p password -d /path/to/dumpdir --threads 4
```

[mydumper/docs/mydumper\_usage.rst at master · mydumper/mydumper · GitHub](https://github.com/mydumper/mydumper/blob/master/docs/mydumper_usage.rst)

[Migration MySQL to AWS RDS or Aurora | by Hala Aljomaat | Medium](https://medium.com/@halaaljomaat_78324/migration-mysql-to-aws-rds-or-aurora-d9f77c91b43b)
