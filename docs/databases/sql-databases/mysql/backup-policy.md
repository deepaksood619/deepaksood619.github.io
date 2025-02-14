# Backup Policy

## Full Backups

To be useful, backups must be scheduled regularly. A full backup (a snapshot of the data at a point in time) can be done in MySQL with several tools. For example, [MySQL Enterprise Backup](https://dev.mysql.com/doc/refman/5.7/en/mysql-enterprise-backup.html) can perform a [physical backup](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_physical_backup) of an entire instance, with optimizations to minimize overhead and avoid disruption when backing up `InnoDB` data files; **mysqldump** provides online [logical backup](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_logical_backup). This discussion uses **mysqldump**.

Assume that we make a full backup of all our `InnoDB` tables in all databases using the following command on Sunday at 1 p.m., when load is low:

```bash
$> mysqldump --all-databases --master-data --single-transaction > backup_sunday_1_PM.sql
```

The resulting `.sql` file produced by **mysqldump** contains a set of SQL [`INSERT`](https://dev.mysql.com/doc/refman/5.7/en/insert.html) statements that can be used to reload the dumped tables at a later time.

This backup operation acquires a global read lock on all tables at the beginning of the dump (using [`FLUSH TABLES WITH READ LOCK`](https://dev.mysql.com/doc/refman/5.7/en/flush.html#flush-tables-with-read-lock)). As soon as this lock has been acquired, the binary log coordinates are read and the lock is released. If long updating statements are running when the [`FLUSH`](https://dev.mysql.com/doc/refman/5.7/en/flush.html) statement is issued, the backup operation may stall until those statements finish. After that, the dump becomes lock-free and does not disturb reads and writes on the tables.

It was assumed earlier that the tables to back up are `InnoDB` tables, so [`--single-transaction`](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html#option_mysqldump_single-transaction) uses a consistent read and guarantees that data seen by **mysqldump** does not change. (Changes made by other clients to `InnoDB` tables are not seen by the **mysqldump** process.) If the backup operation includes nontransactional tables, consistency requires that they do not change during the backup. For example, for the `MyISAM` tables in the `mysql` database, there must be no administrative changes to MySQL accounts during the backup.

## Incremental Backups

Full backups are necessary, but it is not always convenient to create them. They produce large backup files and take time to generate. They are not optimal in the sense that each successive full backup includes all data, even that part that has not changed since the previous full backup. It is more efficient to make an initial full backup, and then to make incremental backups. The incremental backups are smaller and take less time to produce. The tradeoff is that, at recovery time, you cannot restore your data just by reloading the full backup. You must also process the incremental backups to recover the incremental changes.

To make incremental backups, we need to save the incremental changes. In MySQL, these changes are represented in the binary log, so the MySQL server should always be started with the [`--log-bin`](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#option_mysqld_log-bin) option to enable that log. With binary logging enabled, the server writes each data change into a file while it updates data. Looking at the data directory of a MySQL server that was started with the [`--log-bin`](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#option_mysqld_log-bin) option and that has been running for some days, we find these MySQL binary log files:

```simple
-rw-rw---- 1 guilhem  guilhem   1277324 Nov 10 23:59 gbichot2-bin.000001
-rw-rw---- 1 guilhem  guilhem         4 Nov 10 23:59 gbichot2-bin.000002
-rw-rw---- 1 guilhem  guilhem        79 Nov 11 11:06 gbichot2-bin.000003
-rw-rw---- 1 guilhem  guilhem       508 Nov 11 11:08 gbichot2-bin.000004
-rw-rw---- 1 guilhem  guilhem 220047446 Nov 12 16:47 gbichot2-bin.000005
-rw-rw---- 1 guilhem  guilhem    998412 Nov 14 10:08 gbichot2-bin.000006
-rw-rw---- 1 guilhem  guilhem       361 Nov 14 10:07 gbichot2-bin.index
```

Each time it restarts, the MySQL server creates a new binary log file using the next number in the sequence. While the server is running, you can also tell it to close the current binary log file and begin a new one manually by issuing a [`FLUSH LOGS`](https://dev.mysql.com/doc/refman/5.7/en/flush.html#flush-logs) SQL statement or with a **mysqladmin flush-logs** command. **mysqldump** also has an option to flush the logs. The `.index` file in the data directory contains the list of all MySQL binary logs in the directory.

The MySQL binary logs are important for recovery because they form the set of incremental backups. If you make sure to flush the logs when you make your full backup, the binary log files created afterward contain all the data changes made since the backup. Let's modify the previous **mysqldump** command a bit so that it flushes the MySQL binary logs at the moment of the full backup, and so that the dump file contains the name of the new current binary log:

```bash
mysqldump --single-transaction --flush-logs --master-data=2 --all-databases > backup_sunday_1_PM.sql
```

After executing this command, the data directory contains a new binary log file, `gbichot2-bin.000007`, because the [`--flush-logs`](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html#option_mysqldump_flush-logs) option causes the server to flush its logs. The [`--master-data`](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html#option_mysqldump_master-data) option causes **mysqldump** to write binary log information to its output, so the resulting `.sql` dump file includes these lines:

```simple
-- Position to start replication or point-in-time recovery from
-- CHANGE MASTER TO MASTER_LOG_FILE='gbichot2-bin.000007',MASTER_LOG_POS=4;
```

Because the **mysqldump** command made a full backup, those lines mean two things:

- The dump file contains all changes made before any changes written to the `gbichot2-bin.000007` binary log file or higher.
- All data changes logged after the backup are not present in the dump file, but are present in the `gbichot2-bin.000007` binary log file or higher.

On Monday at 1 p.m., we can create an incremental backup by flushing the logs to begin a new binary log file. For example, executing a **mysqladmin flush-logs** command creates `gbichot2-bin.000008`. All changes between the Sunday 1 p.m. full backup and Monday 1 p.m. are in the `gbichot2-bin.000007` file. This incremental backup is important, so it is a good idea to copy it to a safe place. (For example, back it up on tape or DVD, or copy it to another machine.) On Tuesday at 1 p.m., execute another **mysqladmin flush-logs** command. All changes between Monday 1 p.m. and Tuesday 1 p.m. are in the `gbichot2-bin.000008` file (which also should be copied somewhere safe).

The MySQL binary logs take up disk space. To free up space, purge them from time to time. One way to do this is by deleting the binary logs that are no longer needed, such as when we make a full backup:

```bash
mysqldump --single-transaction --flush-logs --master-data=2 --all-databases --delete-master-logs > backup_sunday_1_PM.sql
```

## Note

Deleting the MySQL binary logs with **mysqldump --delete-master-logs** can be dangerous if your server is a replication source server, because replica servers might not yet fully have processed the contents of the binary log. The description for the [`PURGE BINARY LOGS`](https://dev.mysql.com/doc/refman/5.7/en/purge-binary-logs.html) statement explains what should be verified before deleting the MySQL binary logs. See [PURGE BINARY LOGS Statement](https://dev.mysql.com/doc/refman/5.7/en/purge-binary-logs.html).

[1.3.1 Establishing a Backup Policy](https://dev.mysql.com/doc/mysql-backup-excerpt/5.7/en/backup-policy.html)

## Grandfather-father-son or GFS?

GFS backup is a common rotation scheme for backup, in which there are three or more backup cycles, such as daily, weekly, and monthly. Typically, It consists of daily backups (son, at fixed intervals of hours in a day), a weekly full backup (father, once a week), and monthly full backup (Grandfather, once a month).

It helps to restore the database from the most possible recovery points in case of any requirement or disaster.
