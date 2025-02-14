# Backup Types

## Physical (Raw) Versus Logical Backups

Physical backups consist of raw copies of the directories and files that store database contents. This type of backup is suitable for large, important databases that need to be recovered quickly when problems occur.

Logical backups save information represented as logical database structure ([`CREATE DATABASE`](https://dev.mysql.com/doc/refman/8.0/en/create-database.html "15.1.12 CREATE DATABASE Statement"), [`CREATE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/create-table.html "15.1.20 CREATE TABLE Statement") statements) and content ([`INSERT`](https://dev.mysql.com/doc/refman/8.0/en/insert.html "15.2.7 INSERT Statement") statements or delimited-text files). This type of backup is suitable for smaller amounts of data where you might edit the data values or table structure, or recreate the data on a different machine architecture.

### Physical backup methods have these characteristics

- The backup consists of exact copies of database directories and files. Typically this is a copy of all or part of the MySQL data directory.
- Physical backup methods are faster than logical because they involve only file copying without conversion.
- Output is more compact than for logical backup.
- Because backup speed and compactness are important for busy, important databases, the MySQL Enterprise Backup product performs physical backups. For an overview of the MySQL Enterprise Backup product, see [Section 32.1, "MySQL Enterprise Backup Overview"](https://dev.mysql.com/doc/refman/8.0/en/mysql-enterprise-backup.html "32.1 MySQL Enterprise Backup Overview").
- Backup and restore granularity ranges from the level of the entire data directory down to the level of individual files. This may or may not provide for table-level granularity, depending on storage engine. For example, `InnoDB` tables can each be in a separate file, or share file storage with other `InnoDB` tables; each `MyISAM` table corresponds uniquely to a set of files.
- In addition to databases, the backup can include any related files such as log or configuration files.
- Data from `MEMORY` tables is tricky to back up this way because their contents are not stored on disk. (The MySQL Enterprise Backup product has a feature where you can retrieve data from `MEMORY` tables during a backup.)
- Backups are portable only to other machines that have identical or similar hardware characteristics.
- Backups can be performed while the MySQL server is not running. If the server is running, it is necessary to perform appropriate locking so that the server does not change database contents during the backup. MySQL Enterprise Backup does this locking automatically for tables that require it.
- Physical backup tools include the **mysqlbackup** of MySQL Enterprise Backup for `InnoDB` or any other tables, or file system-level commands (such as **cp**, **scp**, **tar**, **rsync**) for `MyISAM` tables.
- For restore:

    - MySQL Enterprise Backup restores `InnoDB` and other tables that it backed up.
    - [**ndb_restore**](https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster-programs-ndb-restore.html "25.5.23 ndb_restore — Restore an NDB Cluster Backup") restores [`NDB`](https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster.html "Chapter 25 MySQL NDB Cluster 8.0") tables.
    - Files copied at the file system level can be copied back to their original locations with file system commands.

### Logical backup methods have these characteristics

- The backup is done by querying the MySQL server to obtain database structure and content information.
- Backup is slower than physical methods because the server must access database information and convert it to logical format. If the output is written on the client side, the server must also send it to the backup program.
- Output is larger than for physical backup, particularly when saved in text format.
- Backup and restore granularity is available at the server level (all databases), database level (all tables in a particular database), or table level. This is true regardless of storage engine.
- The backup does not include log or configuration files, or other database-related files that are not part of databases.
- Backups stored in logical format are machine independent and highly portable.
- Logical backups are performed with the MySQL server running. The server is not taken offline.
- Logical backup tools include the [**mysqldump**](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html "6.5.4 mysqldump — A Database Backup Program") program and the [`SELECT ... INTO OUTFILE`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement") statement. These work for any storage engine, even `MEMORY`.
- To restore logical backups, SQL-format dump files can be processed using the [**mysql**](https://dev.mysql.com/doc/refman/8.0/en/mysql.html "6.5.1 mysql — The MySQL Command-Line Client") client. To load delimited-text files, use the [`LOAD DATA`](https://dev.mysql.com/doc/refman/8.0/en/load-data.html "15.2.9 LOAD DATA Statement") statement or the [**mysqlimport**](https://dev.mysql.com/doc/refman/8.0/en/mysqlimport.html "6.5.5 mysqlimport — A Data Import Program") client.

## Online Versus Offline Backups

Online backups take place while the MySQL server is running so that the database information can be obtained from the server. Offline backups take place while the server is stopped. This distinction can also be described as "hot" versus "cold" backups; a "warm" backup is one where the server remains running but locked against modifying data while you access database files externally.

### Online backup methods have these characteristics

- The backup is less intrusive to other clients, which can connect to the MySQL server during the backup and may be able to access data depending on what operations they need to perform.
- Care must be taken to impose appropriate locking so that data modifications do not take place that would compromise backup integrity. The MySQL Enterprise Backup product does such locking automatically.

### Offline backup methods have these characteristics

- Clients can be affected adversely because the server is unavailable during backup. For that reason, such backups are often taken from a replica that can be taken offline without harming availability.
- The backup procedure is simpler because there is no possibility of interference from client activity.

A similar distinction between online and offline applies for recovery operations, and similar characteristics apply. However, it is more likely for clients to be affected by online recovery than by online backup because recovery requires stronger locking. During backup, clients might be able to read data while it is being backed up. Recovery modifies data and does not just read it, so clients must be prevented from accessing data while it is being restored.

## Local Versus Remote Backups

A local backup is performed on the same host where the MySQL server runs, whereas a remote backup is done from a different host. For some types of backups, the backup can be initiated from a remote host even if the output is written locally on the server. host.

- [**mysqldump**](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html "6.5.4 mysqldump — A Database Backup Program") can connect to local or remote servers. For SQL output (`CREATE` and [`INSERT`](https://dev.mysql.com/doc/refman/8.0/en/insert.html "15.2.7 INSERT Statement") statements), local or remote dumps can be done and generate output on the client. For delimited-text output (with the [`--tab`](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tab) option), data files are created on the server host.
- [`SELECT ... INTO OUTFILE`](https://dev.mysql.com/doc/refman/8.0/en/select-into.html "15.2.13.1 SELECT ... INTO Statement") can be initiated from a local or remote client host, but the output file is created on the server host.
- Physical backup methods typically are initiated locally on the MySQL server host so that the server can be taken offline, although the destination for copied files might be remote.

## Snapshot Backups

Some file system implementations enable "snapshots" to be taken. These provide logical copies of the file system at a given point in time, without requiring a physical copy of the entire file system. (For example, the implementation may use copy-on-write techniques so that only parts of the file system modified after the snapshot time need be copied.) MySQL itself does not provide the capability for taking file system snapshots. It is available through third-party solutions such as Veritas, LVM, or ZFS.

## Full Versus Incremental Backups

A full backup includes all data managed by a MySQL server at a given point in time. An incremental backup consists of the changes made to the data during a given time span (from one point in time to another). MySQL has different ways to perform full backups, such as those described earlier in this section. Incremental backups are made possible by enabling the server's binary log, which the server uses to record data changes.

[Backup Policy](databases/sql-databases/mysql/backup-policy.md)

## Full Versus Point-in-Time (Incremental) Recovery

A full recovery restores all data from a full backup. This restores the server instance to the state that it had when the backup was made. If that state is not sufficiently current, a full recovery can be followed by recovery of incremental backups made since the full backup, to bring the server to a more up-to-date state.

Incremental recovery is recovery of changes made during a given time span. This is also called point-in-time recovery because it makes a server's state current up to a given time. Point-in-time recovery is based on the binary log and typically follows a full recovery from the backup files that restores the server to its state when the backup was made. Then the data changes written in the binary log files are applied as incremental recovery to redo data modifications and bring the server up to the desired point in time.

## Table Maintenance

Data integrity can be compromised if tables become corrupt. For [`InnoDB`](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html "Chapter 17 The InnoDB Storage Engine") tables, this is not a typical issue. For programs to check [`MyISAM`](https://dev.mysql.com/doc/refman/8.0/en/myisam-storage-engine.html "18.2 The MyISAM Storage Engine") tables and repair them if problems are found, see [Section 9.6, "MyISAM Table Maintenance and Crash Recovery"](https://dev.mysql.com/doc/refman/8.0/en/myisam-table-maintenance.html "9.6 MyISAM Table Maintenance and Crash Recovery").

## Backup Scheduling, Compression, and Encryption

Backup scheduling is valuable for automating backup procedures. Compression of backup output reduces space requirements, and encryption of the output provides better security against unauthorized access of backed-up data. MySQL itself does not provide these capabilities. The MySQL Enterprise Backup product can compress `InnoDB` backups, and compression or encryption of backup output can be achieved using file system utilities. Other third-party solutions may be available.

[9.1 Backup and Recovery Types](https://dev.mysql.com/doc/refman/8.0/en/backup-types.html)
