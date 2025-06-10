# MyDumper

MyDumper is a MySQL Logical Backup Tool. It has 2 tools:

- `mydumper` which is responsible to export a consistent backup of MySQL databases
- `myloader` reads the backup from mydumper, connects to the destination database and imports the backup.

Both tools use multithreading capabilities.

MyDumper is Open Source and maintained by the community, it is not a Percona, MariaDB or MySQL product.

`mydumper` is a tool used for backing up MySQL database servers much faster than the mysqldump tool distributed with MySQL. It also has the capability to retrieve the binary logs from the remote server at the same time as the dump itself.

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
- myloader doesn't import database user accounts automatically. If you are restoring the backup to Amazon RDS or Aurora, recreate the users with the required permissions. For more information, see [Master user account privileges](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.MasterAccounts.html) in the Amazon RDS documentation. If you are restoring the backup to an Amazon EC2 database instance, you can manually export the source database user accounts and import them into the EC2 instance.

## Best practices

- Configure mydumper to divide each table into segments, such as 10,000 rows in each segment, and write each segment in a separate file. This makes it possible to import the data in parallel later.
- If you are using the InnoDB engine, use the `--trx-consistency-only` option to minimize locking.
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

For details and step-by-step instructions, see the [mydumper project](https://github.com/maxbube/mydumper).

Follow these three steps to perform full data load using mydumper.

1. Produce a dump file containing source data.
2. Restore this dump file on the target database using myloader.
3. Retrieve the binary log position for ongoing replication.

For example, the following command creates the backup of DbName1 and DbName2 databases using mydumper.

```bash
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

```bash
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

## Configs

### Connection Options

- -h, --host - The host to connect to
- -u, --user - Username with the necessary privileges
- -p, --password - User password
- -a, --ask-password - Prompt For User password
- -P, --port - TCP/IP port to connect to
- -S, --socket - UNIX domain socket file to use for connection
- -C, --compress-protocol - Use compression on the MySQL connection
- --ssl - Connect using SSL
- --ssl-mode - Desired security state of the connection to the server: DISABLED, PREFERRED, REQUIRED, VERIFY_CA, VERIFY_IDENTITY
- --key - The path name to the key file
- --cert - The path name to the certificate file
- --ca - The path name to the certificate authority file
- --capath - The path name to a directory that contains trusted SSL CA certificates in PEM format
- --cipher - A list of permissible ciphers to use for SSL encryption
- --tls-version - Which protocols the server permits for encrypted connections

### Filter Options

- -x, --regex - Regular expression for 'db.table' matching
- -B, --database - Database to dump
- -i, --ignore-engines - Comma delimited list of storage engines to ignore
- --where - Dump only selected records.
- -U, --updated-since - Use Update_time to dump only tables updated in the last U days
- --partition-regex - Regex to filter by partition name.
- -O, --omit-from-file - File containing a list of `database[.table]` entries to skip, one per line (skips before applying regex option)
- -T, --tables-list - Comma delimited table list to dump (does not exclude regex option). Table name must include database name. For instance: test.t1,test.t2

### Lock Options

- -z, --tidb-snapshot - Snapshot to use for TiDB
- -k, --no-locks - Do not execute the temporary shared read lock. WARNING: This will cause inconsistent backups
- --use-savepoints - Use savepoints to reduce metadata locking issues, needs SUPER privilege
- --no-backup-locks - Do not use Percona backup locks
- --lock-all-tables - Use LOCK TABLE for all, instead of FTWRL
- --less-locking - Minimize locking time on InnoDB tables.
- --trx-consistency-only - Transactional consistency only

### PMM Options

- --pmm-path - which default value will be /usr/local/percona/pmm2/collectors/textfile-collector/high-resolution
- --pmm-resolution - which default will be high

### Exec Options

- --exec-threads - Amount of threads to use with --exec
- --exec - Command to execute using the file as parameter
- --exec-per-thread - Set the command that will receive by STDIN and write in the STDOUT into the output file
- --exec-per-thread-extension - Set the extension for the STDOUT file when --exec-per-thread is used

### If long query running found

- --long-query-retries - Retry checking for long queries, default 0 (do not retry)
- --long-query-retry-interval - Time to wait before retrying the long query check in seconds, default 60
- -l, --long-query-guard - Set long query timer in seconds, default 60
- -K, --kill-long-queries - Kill long running queries (instead of aborting)

### Job Options

- --max-rows - Limit the number of rows per block after the table is estimated, default 1000000. It has been deprecated, use --rows instead. Removed in future releases
- --char-deep
- --char-chunk
- -r, --rows - Spliting tables into chunks of this many rows. It can be MIN:START_AT:MAX. MAX can be 0 which means that there is no limit. It will double the chunk size if query takes less than 1 second and half of the size if it is more than 2 seconds
- --split-partitions - Dump partitions into separate files. This options overrides the --rows option for partitioned tables.

### Checksum Options

- -M, --checksum-all - Dump checksums for all elements
- --data-checksums - Dump table checksums with the data
- --schema-checksums - Dump schema table and view creation checksums
- --routine-checksums - Dump triggers, functions and routines checksums

### Objects Options

- -m, --no-schemas - Do not dump table schemas with the data and triggers
- -Y, --all-tablespaces - Dump all the tablespaces.
- -d, --no-data - Do not dump table data
- -G, --triggers - Dump triggers. By default, it do not dump triggers
- -E, --events - Dump events. By default, it do not dump events
- -R, --routines - Dump stored procedures and functions. By default, it do not dump stored procedures nor functions
- --views-as-tables - Export VIEWs as they were tables
- -W, --no-views - Do not dump VIEWs

### Statement Options

- --load-data
- --csv - Automatically enables --load-data and set variables to export in CSV format.
- --fields-terminated-by
- --fields-enclosed-by
- --fields-escaped-by - Single character that is going to be used to escape characters in the LOAD DATA statement, default: ''
- --lines-starting-by - Adds the string at the begining of each row. When --load-data is used it is added to the LOAD DATA statement. Its affects INSERT INTO statements also when it is used.
- --lines-terminated-by - Adds the string at the end of each row. When --load-data is used it is added to the LOAD DATA statement. Its affects INSERT INTO statements also when it is used.
- --statement-terminated-by - This might never be used, unless you know what are you doing
- -N, --insert-ignore - Dump rows with INSERT IGNORE
- --replace - Dump rows with REPLACE
- --complete-insert - Use complete INSERT statements that include column names
- --hex-blob - Dump binary columns using hexadecimal notation
- --skip-definer - Removes DEFINER from the CREATE statement. By default, statements are not modified
- -s, --statement-size - Attempted size of INSERT statement in bytes, default 1000000
- --tz-utc - SET TIME_ZONE='+00:00' at top of dump to allow dumping of TIMESTAMP data when a server has data in different time zones or data is being moved between servers with different time zones, defaults to on use --skip-tz-utc to disable.
- --skip-tz-utc
- --set-names - Sets the names, use it at your own risk, default binary

### Extra Options

- -F, --chunk-filesize - Split tables into chunks of this output file size. This value is in MB
- --exit-if-broken-table-found - Exits if a broken table has been found
- --success-on-1146 - Not increment error count and Warning instead of Critical in case of table doesn't exist
- -e, --build-empty-files - Build dump files even if no data available from table
- --no-check-generated-fields - Queries related to generated fields are not going to be executed.It will lead to restoration issues if you have generated columns
- --order-by-primary - Sort the data by Primary Key or Unique key if no primary key exists
- -c, --compress - Compress output files using: /usr/bin/gzip and /usr/bin/zstd. Options: GZIP and ZSTD. Default: GZIP

### Daemon Options

- -D, --daemon - Enable daemon mode
- -I, --snapshot-interval - Interval between each dump snapshot (in minutes), requires --daemon, default 60
- -X, --snapshot-count - number of snapshots, default 2

### Application Options

- -?, --help - Show help options
- -o, --outputdir - Directory to output files to
- --clear - Clear output directory before dumping
- --dirty - Overwrite output directory without clearing (beware of leftover chunks)
- --stream - It will stream over STDOUT once the files has been written. Since v0.12.7-1, accepts NO_DELETE, NO_STREAM_AND_NO_DELETE and TRADITIONAL which is the default value and used if no parameter is given
- -L, --logfile - Log file name to use, by default stdout is used
- --disk-limits - Set the limit to pause and resume if determines there is no enough disk space. Accepts values like: `'<resume>:<pause>'` in MB. For instance: 100:500 will pause when there is only 100MB free and will resume if 500MB are available
- -t, --threads - Number of threads to use, default 4
- -V, --version - Show the program version and exit
- --identifier-quote-character - This set the identifier quote character that is used to INSERT statements only on mydumper and to split statement on myloader. Use SQL_MODE to change the CREATE TABLE statements Possible values are: BACKTICK and DOUBLE_QUOTE. Default: BACKTICK
- -v, --verbose - Verbosity of output, 0 = silent, 1 = errors, 2 = warnings, 3 = info, default 2
- --debug - Turn on debugging output (automatically sets verbosity to 3)
- --defaults-file - Use a specific defaults file. Default: /etc/mydumper.cnf
- --defaults-extra-file - Use an additional defaults file. This is loaded after --defaults-file, replacing previous defined values

## Verification of data on RDS against the source DB

It is a very important step to make sure that data is restored correctly to target DB. We need to execute the following commands on the source and target DB servers and we should see the same results.

```sql
# Check the databases
show databases;

# Check the tables count in each database
SELECT table_schema, COUNT(*) as tables_count FROM information_schema.tables group by table_schema;

# Check the triggers count in each database
select trigger_schema, COUNT(*) as triggers_count
from information_schema.triggers group by trigger_schema;

# Check the routines count in each database
select routine_schema, COUNT(*) as routines_count
from information_schema.routines group by routine_schema;

# Check the events count in each database
select event_schema, COUNT(*) as events_count
from information_schema.events group by event_schema;

```

### Check the rows count of all tables from a database. Create the following procedure

```sql
DELIMITER $$

CREATE PROCEDURE `COUNT_ROWS_COUNTS_BY_TABLE`(dbName varchar(128))
BEGIN
DECLARE done INT DEFAULT 0;
DECLARE TNAME CHAR(255);

DECLARE table_names CURSOR for
    SELECT CONCAT("`", TABLE_SCHEMA, "`.`", table_name, "`") FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = dbName;

DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

OPEN table_names;

DROP TABLE IF EXISTS TABLES_ROWS_COUNTS;
CREATE TEMPORARY TABLE TABLES_ROWS_COUNTS
  (
    TABLE_NAME CHAR(255),
    RECORD_COUNT INT
  ) ENGINE = MEMORY;


WHILE done = 0 DO

  FETCH NEXT FROM table_names INTO TNAME;

   IF done = 0 THEN
    SET @SQL_TXT = CONCAT("INSERT INTO TABLES_ROWS_COUNTS(SELECT '" , TNAME  , "' AS TABLE_NAME, COUNT(*) AS RECORD_COUNT FROM ", TNAME, ")");

    PREPARE stmt_name FROM @SQL_TXT;
    EXECUTE stmt_name;
    DEALLOCATE PREPARE stmt_name;
  END IF;

END WHILE;

CLOSE table_names;

SELECT * FROM TABLES_ROWS_COUNTS;

SELECT SUM(RECORD_COUNT) AS TOTAL_DATABASE_RECORD_CT FROM TABLES_ROWS_COUNTS;

END$$

DELIMITER ;
```

Run the following in both DB servers and compare for each database.

`call COUNT_ROWS_COUNTS_BY_TABLE('DbName1');`

Make sure that all the commands are executed on both source and target DB servers and you should see same results. Once everything is good, take a snapshot before proceeding any further. Change DB parameter group to a new parameter group according to your current source configuration.

## Commands

### MyDumper

```bash
brew install mydumper
apt install mydumper

docker pull mydumper/mydumper:latest

docker run --rm -it -v $(pwd):$(pwd) --entrypoint /bin/bash mydumper/mydumper
docker run --rm -it -v $(pwd):$(pwd) -p 1056:1056 --entrypoint /bin/bash mydumper/mydumper:latest-zstd

mydumper -V

# Dump the database
mydumper -h source-rds-endpoint -u username -p password -o /path/to/dumpdir --threads 4

mydumper -h 127.0.0.1 -P 1056 -u root -p xxx -o full --threads 4

nohup time mydumper --no-locks --host=127.0.0.1 --port=1056 --clear --user=root --password=xxx --regex='^(schema_name\.table_name)$' --outputdir=table_name --logfile=table_name.log --verbose=3 --compress --compress-protocol --threads=4 --chunk-filesize=500 -G -E -R --build-empty-files --rows=50000 &
```

### MyLoader

```bash
# Restore the database
myloader -h target-rds-endpoint -u username -p password -d /path/to/dumpdir --threads 4
```

[mydumper/docs/mydumper\_usage.rst at master · mydumper/mydumper · GitHub](https://github.com/mydumper/mydumper/blob/master/docs/mydumper_usage.rst)

[Migration MySQL to AWS RDS or Aurora | by Hala Aljomaat | Medium](https://medium.com/@halaaljomaat_78324/migration-mysql-to-aws-rds-or-aurora-d9f77c91b43b)

## Links

- [Releases · mydumper/mydumper](https://github.com/mydumper/mydumper/releases)
- [hub.docker.com/layers/mydumper/mydumper/latest-zstd/images/sha256-b1aa2a37166bd1a2c7c368436105f0f90529b13e7a94cfe0efd36710e611aef0?context=explore](https://hub.docker.com/layers/mydumper/mydumper/latest-zstd/images/sha256-b1aa2a37166bd1a2c7c368436105f0f90529b13e7a94cfe0efd36710e611aef0?context=explore)
