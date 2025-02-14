# Backup Comparisons

### Percona XtraBackup

#### Key Features

- **Hot Backups**: Performs non-blocking backups for InnoDB databases, meaning the database remains fully operational during the backup process.
- **Incremental Backups**: Supports incremental backups, which can significantly reduce the backup time and storage requirements.
- **Compression and Encryption**: Provides options for compressing and encrypting backups.

#### Advantages

- **Minimal Downtime**: Since it doesn’t lock the database tables, there’s minimal impact on database performance.
- **Point-in-Time Recovery**: Supports point-in-time recovery, making it easier to restore the database to a specific state.
- **Scalability**: Suitable for large databases due to its non-blocking nature and efficient resource utilization.

#### Limitations

- **Complex Setup**: Can be more complex to configure compared to simpler tools like mysqldump.
- **InnoDB Focused**: Primarily designed for InnoDB storage engine. For MyISAM, it requires additional steps.

The main advantage of XtraBackup is its flexibility, providing PITR and encryption for example.

### mysqldump

#### Key Features

- **Logical Backups**: Dumps the database contents into SQL scripts that can be used to recreate the database.
- **Flexibility**: Can backup and restore specific tables or entire databases.

#### Advantages

- **Simplicity**: Easy to use and doesn’t require additional software installation.
- **Portability**: The SQL dump files are highly portable and can be restored on different MySQL versions.
- **Compatibility**: Works with all storage engines and MySQL/MariaDB versions.

#### Limitations

- **Performance**: Can be slow for large databases as it locks tables during the dump, causing potential downtime.
- **Storage**: Resulting SQL files can be large and require significant storage space.

#### Use Case

mysqldump is appropriate when the following conditions are met:

- The data set is smaller than 10 GB.
- The network connection between source and target databases is fast and stable.
- Migration time is not critical, and the cost of re-trying the migration is very low.
- You don’t need to do any intermediate schema or data transformations.

You can decide not to use this tool if any of the following conditions are true:

- You migrate from an Amazon RDS for MySQL DB instance or a self-managed MySQL 5.5 or 5.6 database. In that case, you can get better performance results with Percona XtraBackup.
- It is impossible to establish a network connection from a single client instance to source and target databases due to network architecture or security considerations.
- The network connection between the source and target databases is unstable or very slow.
- The data set is larger than 10 GB.
- An intermediate dump file is required to perform schema or data manipulations before you can import the schema or data.

### mysql shell - Instance dump

MySQL Shell's instance dump utility `util.dumpInstance()` and schema dump utility `util.dumpSchemas()`, introduced in MySQL Shell 8.0.21, support the export of all schemas or a selected schema from an on-premise MySQL instance into an Object Storage bucket or a set of local files.

```bash
$ mysqlsh
MySQL JS > shell.connect('root@localhost:3306');
MySQL localhost:3306 ssl test JS > util.dumpInstance("/backup", {ocimds: true, compatibility: ["strip_restricted_grants","ignore_missing_pks"],threads: 16})
```

[11.5 Instance Dump Utility, Schema Dump Utility, and Table Dump Utility](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-utilities-dump-instance-schema.html)

[Reduce Amazon Aurora MySQL backup costs using MySQL Shell and Amazon S3 | AWS Database Blog](https://aws.amazon.com/blogs/database/reduce-amazon-aurora-mysql-backup-costs-using-mysql-shell-and-amazon-s3/)

### mydumper

#### Key Features

- **Parallel Processing**: Utilizes multiple threads for dumping and restoring data, significantly improving speed.
- **Consistency**: Ensures consistent backups by locking all tables during the dump process.

#### Advantages

- **Speed**: Much faster than mysqldump due to its parallel processing capabilities.
- **Consistency**: Ensures a consistent state of the database by using global read lock during the dump.

#### Limitations

- **Setup**: Requires installation and proper configuration to utilize parallel threads effectively.
- **Resource Intensive**: Can be resource-intensive, especially during large dumps with multiple threads.

### Amazon DMS

#### Key Features

- **Database Migration**: Migrates databases to and from Amazon RDS, Aurora, and other databases.
- **Continuous Data Replication**: Supports ongoing replication to keep the source and target databases in sync.
- **Minimal Downtime**: Performs migrations with minimal downtime.
- **Schema Conversion**: Converts schema as part of the migration if needed.

#### Advantages

- **Scalability**: Easily scales to handle large database migrations and continuous replication.
- **Managed Service**: Fully managed by AWS, reducing the administrative overhead.
- **Cross-Platform**: Supports a wide range of database engines, both source and target, including MySQL, PostgreSQL, Oracle, and SQL Server.
- **Security**: Integrates with AWS security services to ensure secure data transfer.

#### Limitations

- **Cost**: Can be more expensive compared to self-managed backup solutions.
- **Complexity**: Requires understanding of AWS services and proper configuration.
- **Primarily for Migration**: Primarily designed for migration and replication, not just for backup purposes.

### Comparison Table

| Feature                | Percona XtraBackup           | mysqldump                        | mydumper                   | Amazon DMS                      |
| ---------------------- | ---------------------------- | -------------------------------- | -------------------------- | ------------------------------- |
| Backup Type            | Physical (non-blocking)      | Logical (blocking)               | Logical (blocking)         | Logical/Physical (depends)      |
| Performance Impact     | Low                          | High                             | Medium                     | Low                             |
| Speed                  | Fast (especially for InnoDB) | Slow                             | Fast (parallel processing) | Fast (depends on configuration) |
| Storage Engines        | InnoDB (best suited)         | All (InnoDB, MyISAM, etc.)       | All (InnoDB, MyISAM, etc.) | All supported by DMS            |
| Incremental Backups    | Yes                          | No                               | No                         | Yes (with ongoing replication)  |
| Compression/Encryption | Yes                          | Yes (manual compression)         | No                         | Yes                             |
| Consistency            | High                         | Medium (depends on lock options) | High                       | High                            |
| Ease of Use            | Medium                       | High                             | Medium                     | High (managed service)          |
| Recovery Time          | Fast (physical restore)      | Slow (logical restore)           | Fast (parallel restore)    | Fast (minimal downtime)         |
| Setup Complexity       | High                         | Low                              | Medium                     | Medium (requires AWS knowledge) |
| Cost                   | Low/Medium                   | Low                              | Low                        | Medium/High (depends on usage)  |

### Performance

| db engine    | db data size | archival size | backup time | time to restore | backup tool  | cpu utilization | size          |
| ------------ | ------------ | ------------- | ----------- | --------------- | ------------ | --------------- | ------------- |
| Aurora MYSQL | 1457 GB      |               | 2.40 min    | 41.27 min       | aws snapshot |                 |               |
| RDS MYSQL    |              |               |             |                 |              |                 |               |
| EC2 MYSQL    | 115 GB       | 64 GB         | 20 min      |                 | mydumper     | 30 - 40%        | r5a.xlarge    |
| Aurora MYSQL | 13 GB        | 1.4 GB        | 6 hr 23 min |                 | mydumper     | 40 - 50%        | db.r6g.xlarge |

#### Performance Comparison 1

Mysql 5.7 database on EC2 as the source and Aurora MySQL 5.7 as the target with a total of 9 GB of data.

| Tool      | Time (in mins) |
| --------- | -------------- |
| Percona   | 10             |
| mydumper  | 20             |
| mysqldump | 45             |

Percona XtraBackup performed 4x faster than mysqldump and 2x faster than mydumper backups. We tested larger datasets, for example with a total of 400 GB of data, and found that the performance scaled proportionally to the dataset size.

Percona XtraBackup creates a physical backup of the database files whereas the other tools create logical backups. Percona XtraBackup is the best option for full load if your use case conforms to the restrictions listed in the Percona XtraBackup. If Percona XtraBackup isn’t compatible with your use case, mydumper is the next best option.

#### Performance Comparison 2

The benchmark was run on an [m5dn.8xlarge](https://aws.amazon.com/blogs/aws/new-m5n-and-r5n-instances-with-up-to-100-gbps-networking/) instance, with 128GB RAM, 32 vCPU, and 2xNVMe disks of 600GB (one for backup and the other one for MySQL data). The MySQL version was 8.0.26 and configured with 89Gb of buffer pool, 20Gb of redo log, and a sample database of 177 GB

![mysql backup performance](../../../media/Pasted%20image%2020240526173518.jpg)

![Backup Size](../../../media/Pasted%20image%2020240526175011.jpg)

Time to restore (in seconds)

![Time to restore](../../../media/Screenshot%202024-05-26%20at%205.50.56%20PM.jpg)

##### Outcomes

1. When using zstd compression, mydumper really shines in terms of performance. This option was added not long ago ([MyDumper 0.11.3](https://www.percona.com/blog/mydumper-0-11-3-is-now-available/)).
2. When mydumper is using gzip, MySQL Shell is the fastest backup option.
3. In 3rd we have Percona XtraBackup.
4. mysqlpump is the 4th fastest followed closer by mydumper when using gzip.
5. mysqldump is the classic old-school style to perform dumps and is the slowest of the four tools.
6. In a server with more CPUs, the potential parallelism increases, giving even more advantage to the tools that can benefit from multiple threads.
7. We can also observe that mydumper/myloader and MySQL Shell utilities produce good results in both phases. The difference from Xtrabackup is that both tools perform logical backups, which means that these tools connect to MySQL and extract the data to dump files. Because they have to extract data from MySQL, these tools are more sensitive for the MySQL configuration and backup/restore parametrization. For example, MyDumper/MyLoader has some extra options that can improve the backup and restore performance, such as `--rows`, `--chunk-filesize`, and `--innodb-optimize-keys`.
8. Note that  XtraBackup, MyDumper, and mysqldump support stream restore, reducing overall timing to perform the backup and restore operation.

[Backup Performance Comparison: mysqldump vs MySQL Shell Utilities vs mydumper vs mysqlpump vs XtraBackup](https://www.percona.com/blog/dump-performance-comparison-mysqldump-vs-mysql-shell-utilities-vs-mydumper/)

[Backup/Restore Performance Conclusion: mysqldump vs MySQL Shell Utilities vs mydumper vs mysqlpump vs XtraBackup](https://www.percona.com/blog/backup-restore-performance-conclusion-mysqldump-vs-mysql-shell-utilities-vs-mydumper-vs-mysqlpump-vs-xtrabackup/)

### Conclusion

- **Percona XtraBackup** is ideal for large, InnoDB-heavy databases requiring minimal downtime and fast recovery.
- **mysqldump** is suitable for smaller databases or environments where simplicity and portability are key.
- **mydumper** offers a middle ground with faster performance for logical backups, especially for larger datasets, but requires more setup and resources.
- **Amazon DMS** is best for environments needing cross-platform database migrations, continuous replication, and minimal administrative overhead, albeit at a potentially higher cost.

## Note

1. To ensure a valid dump file of logical backups in mysqldump and mydumper, don’t run data definition language (DDL) statements while the dump process is running. It is recommended to schedule a maintenance window for these operations. For details, see the [single-transaction documentation](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_single-transaction).
2. While exporting the data with logical backups, it is recommended to exclude MySQL default schemas (mysql, performance_schema, and information_schema), functions, stored procedures, and triggers.
3. Remove definers from schema files before uploading extracted data to Amazon RDS. For more information, see [How can I resolve definer errors](https://aws.amazon.com/premiumsupport/knowledge-center/definer-error-mysqldump).
4. Any backup operation acquires a global read lock on all tables (using FLUSH TABLES WITH READ LOCK). As soon as this lock has been acquired, the binary log coordinates are read and the lock is released. For more information, see [Establishing a Backup Policy](https://dev.mysql.com/doc/mysql-backup-excerpt/5.7/en/backup-policy.html). For logical backups this step done at the beginning of the logical dump, however for physical backup (Percona XtraBackup) this step done at the end of backup.

## Links

- [Aurora Backup](databases/sql-databases/aws-aurora/backup.md)
- [Migrating from MySQL-compatible databases - Amazon Aurora MySQL Migration Handbook](https://docs.aws.amazon.com/whitepapers/latest/amazon-aurora-mysql-migration-handbook/migrating-from-mysql-compatible-databases.html#percona-xtrabackup-1)
- [Full Load - Database Migration Guide](https://docs.aws.amazon.com/dms/latest/sbs/chap-manageddatabases.mysql2rds.fullload.html)
- [Reduce Amazon Aurora MySQL backup costs using MySQL Shell and Amazon S3 | AWS Database Blog](https://aws.amazon.com/blogs/database/reduce-amazon-aurora-mysql-backup-costs-using-mysql-shell-and-amazon-s3/)
