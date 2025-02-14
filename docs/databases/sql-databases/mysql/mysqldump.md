# MySQLDump

## Commands

```sql
mysqldump --single-transaction --host=abc.ap-south-1.rds.amazonaws.com -u username --flush-logs --master-data=2 -p user_kyc > backup.sql

-- host=abc.ap-south-1.rds.amazonaws.com - This is the Cluster level Hostname in which Master data concept will not able to work
-- while taking backup of rds with mysqldump master-data=2 will not work as it is no longer with the mysql 8
-- Also you are missing one things is this command which is --set-gtid-purged=OFF Please check for this

-- dump via mysqlworkbench
mysqldump --defaults-file="/var/folders/9j/l_15x5sx6c133kcr5vybw54m0000gn/T/tmpco89tdwc/extraparams.cnf"  --host=127.0.0.1 --port=1053 --default-character-set=utf8 --user=root --protocol=tcp --skip-triggers "schema_name"

-- dump specific table using mysqldump
mysqldump --host=127.0.0.1 --port=1053 --default-character-set=utf8 --user=devops_read_user --protocol=tcp --lock-tables=FALSE --skip-triggers schema_name table_name > dump_file.sql -p
```

- Warning: A partial dump from a server that has GTIDs will by default include the GTIDs of all transactions, even those that changed suppressed parts of the database. If you don't want to restore GTIDs, pass --set-gtid-purged=OFF. To make a complete dump, pass --all-databases --triggers --routines --events.
- Warning: A dump from a server that has GTIDs enabled will by default include the GTIDs of all transactions, even those that were executed during its extraction and might not be represented in the dumped data. This might result in an inconsistent data dump.
- In order to ensure a consistent backup of the database, pass --single-transaction or --lock-all-tables or --master-data.

- You need (at least one of) the PROCESS privilege(s) for this operation' when trying to dump tablespaces

#### To make a backup of an entire database

```terminal
mysqldump db_name > backup-file.sql
```

#### To load the dump file back into the server

```terminal
mysql db_name < backup-file.sql
```

#### Another way to reload the dump file

```terminal
mysql -e "source /path-to-backup/backup-file.sql" db_name
```

#### mysqldump is also very useful for populating databases by copying data from one MySQL server to another

```terminal
mysqldump --opt db_name | mysql --host=remote_host -C db_name
```

#### You can dump several databases with one command

```terminal
mysqldump --databases db_name1 [db_name2 ...] > my_databases.sql
```

#### To dump all databases, use the [`--all-databases`](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_all-databases) option

```terminal
mysqldump --all-databases > all_databases.sql
```

#### For `InnoDB` tables, mysqldump provides a way of making an online backup

```terminal
mysqldump --all-databases --master-data --single-transaction > all_databases.sql
```

#### Or, in MySQL 8.0.26 and later

```terminal
mysqldump --all-databases --source-data --single-transaction > all_databases.sql
```

#### Change max_execution_time

```sql
mysql -u $DB_USER -p $DB_PASSWORD -h $DB_HOST -e "SET GLOBAL max_execution_time = 0;"

-- Perform the mysqldump
mysqldump -u $DB_USER -p $DB_PASSWORD -h $DB_HOST $DB_NAME > /path/to/your/backup.sql

-- Revert max_execution_time to its original value
mysql -u $DB_USER -p $DB_PASSWORD -h $DB_HOST -e "SET GLOBAL max_execution_time = $ORIGINAL_MAX_EXECUTION_TIME;"
```

[6.5.4 mysqldump — A Database Backup Program](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html)

## mysqldump Options

|Option Name|Description|Introduced|Deprecated|
|---|---|---|---|
|[--add-drop-database](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_add-drop-database)|Add DROP DATABASE statement before each CREATE DATABASE statement|||
|[--add-drop-table](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_add-drop-table)|Add DROP TABLE statement before each CREATE TABLE statement|||
|[--add-drop-trigger](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_add-drop-trigger)|Add DROP TRIGGER statement before each CREATE TRIGGER statement|||
|[--add-locks](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_add-locks)|Surround each table dump with LOCK TABLES and UNLOCK TABLES statements|||
|[--all-databases](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_all-databases)|Dump all tables in all databases|||
|[--allow-keywords](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_allow-keywords)|Allow creation of column names that are keywords|||
|[--apply-replica-statements](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_apply-replica-statements)|Include STOP REPLICA prior to CHANGE REPLICATION SOURCE TO statement and START REPLICA at end of output|8.0.26||
|[--apply-slave-statements](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_apply-slave-statements)|Include STOP SLAVE prior to CHANGE MASTER statement and START SLAVE at end of output||8.0.26|
|[--bind-address](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_bind-address)|Use specified network interface to connect to MySQL Server|||
|[--character-sets-dir](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_character-sets-dir)|Directory where character sets are installed|||
|[--column-statistics](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_column-statistics)|Write ANALYZE TABLE statements to generate statistics histograms|||
|[--comments](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_comments)|Add comments to dump file|||
|[--compact](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_compact)|Produce more compact output|||
|[--compatible](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_compatible)|Produce output that is more compatible with other database systems or with older MySQL servers|||
|[--complete-insert](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_complete-insert)|Use complete INSERT statements that include column names|||
|[--compress](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_compress)|Compress all information sent between client and server||8.0.18|
|[--compression-algorithms](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_compression-algorithms)|Permitted compression algorithms for connections to server|8.0.18||
|[--create-options](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_create-options)|Include all MySQL-specific table options in CREATE TABLE statements|||
|[--databases](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_databases)|Interpret all name arguments as database names|||
|[--debug](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_debug)|Write debugging log|||
|[--debug-check](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_debug-check)|Print debugging information when program exits|||
|[--debug-info](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_debug-info)|Print debugging information, memory, and CPU statistics when program exits|||
|[--default-auth](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_default-auth)|Authentication plugin to use|||
|[--default-character-set](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_default-character-set)|Specify default character set|||
|[--defaults-extra-file](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_defaults-extra-file)|Read named option file in addition to usual option files|||
|[--defaults-file](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_defaults-file)|Read only named option file|||
|[--defaults-group-suffix](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_defaults-group-suffix)|Option group suffix value|||
|[--delete-master-logs](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_delete-master-logs)|On a replication source server, delete the binary logs after performing the dump operation||8.0.26|
|[--delete-source-logs](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_delete-source-logs)|On a replication source server, delete the binary logs after performing the dump operation|8.0.26||
|[--disable-keys](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_disable-keys)|For each table, surround INSERT statements with statements to disable and enable keys|||
|[--dump-date](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_dump-date)|Include dump date as "Dump completed on" comment if --comments is given|||
|[--dump-replica](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_dump-replica)|Include CHANGE REPLICATION SOURCE TO statement that lists binary log coordinates of replica's source|8.0.26||
|[--dump-slave](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_dump-slave)|Include CHANGE MASTER statement that lists binary log coordinates of replica's source||8.0.26|
|[--enable-cleartext-plugin](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_enable-cleartext-plugin)|Enable cleartext authentication plugin|||
|[--events](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_events)|Dump events from dumped databases|||
|[--extended-insert](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_extended-insert)|Use multiple-row INSERT syntax|||
|[--fields-enclosed-by](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_fields)|This option is used with the --tab option and has the same meaning as the corresponding clause for LOAD DATA|||
|[--fields-escaped-by](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_fields)|This option is used with the --tab option and has the same meaning as the corresponding clause for LOAD DATA|||
|[--fields-optionally-enclosed-by](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_fields)|This option is used with the --tab option and has the same meaning as the corresponding clause for LOAD DATA|||
|[--fields-terminated-by](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_fields)|This option is used with the --tab option and has the same meaning as the corresponding clause for LOAD DATA|||
|[--flush-logs](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_flush-logs)|Flush MySQL server log files before starting dump|||
|[--flush-privileges](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_flush-privileges)|Emit a FLUSH PRIVILEGES statement after dumping mysql database|||
|[--force](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_force)|Continue even if an SQL error occurs during a table dump|||
|[--get-server-public-key](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_get-server-public-key)|Request RSA public key from server|||
|[--help](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_help)|Display help message and exit|||
|[--hex-blob](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_hex-blob)|Dump binary columns using hexadecimal notation|||
|[--host](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_host)|Host on which MySQL server is located|||
|[--ignore-error](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ignore-error)|Ignore specified errors|||
|[--ignore-table](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ignore-table)|Do not dump given table|||
|[--include-master-host-port](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_include-master-host-port)|Include MASTER_HOST/MASTER_PORT options in CHANGE MASTER statement produced with --dump-slave||8.0.26|
|[--include-source-host-port](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_include-source-host-port)|Include SOURCE_HOST and SOURCE_PORT options in CHANGE REPLICATION SOURCE TO statement produced with --dump-replica|8.0.26||
|[--insert-ignore](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_insert-ignore)|Write INSERT IGNORE rather than INSERT statements|||
|[--lines-terminated-by](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_lines-terminated-by)|This option is used with the --tab option and has the same meaning as the corresponding clause for LOAD DATA|||
|[--lock-all-tables](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_lock-all-tables)|Lock all tables across all databases|||
|[--lock-tables](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_lock-tables)|Lock all tables before dumping them|||
|[--log-error](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_log-error)|Append warnings and errors to named file|||
|[--login-path](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_login-path)|Read login path options from .mylogin.cnf|||
|[--master-data](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_master-data)|Write the binary log file name and position to the output||8.0.26|
|[--max-allowed-packet](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_max-allowed-packet)|Maximum packet length to send to or receive from server|||
|[--mysqld-long-query-time](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_mysqld-long-query-time)|Session value for slow query threshold|8.0.30||
|[--net-buffer-length](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_net-buffer-length)|Buffer size for TCP/IP and socket communication|||
|[--network-timeout](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_network-timeout)|Increase network timeouts to permit larger table dumps|||
|[--no-autocommit](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-autocommit)|Enclose the INSERT statements for each dumped table within SET autocommit = 0 and COMMIT statements|||
|[--no-create-db](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-create-db)|Do not write CREATE DATABASE statements|||
|[--no-create-info](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-create-info)|Do not write CREATE TABLE statements that re-create each dumped table|||
|[--no-data](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-data)|Do not dump table contents|||
|[--no-defaults](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-defaults)|Read no option files|||
|[--no-set-names](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-set-names)|Same as --skip-set-charset|||
|[--no-tablespaces](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_no-tablespaces)|Do not write any CREATE LOGFILE GROUP or CREATE TABLESPACE statements in output|||
|[--opt](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_opt)|Shorthand for --add-drop-table --add-locks --create-options --disable-keys --extended-insert --lock-tables --quick --set-charset|||
|[--order-by-primary](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_order-by-primary)|Dump each table's rows sorted by its primary key, or by its first unique index|||
|[--password](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_password)|Password to use when connecting to server|||
|[--password1](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_password1)|First multifactor authentication password to use when connecting to server|8.0.27||
|[--password2](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_password2)|Second multifactor authentication password to use when connecting to server|8.0.27||
|[--password3](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_password3)|Third multifactor authentication password to use when connecting to server|8.0.27||
|[--pipe](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_pipe)|Connect to server using named pipe (Windows only)|||
|[--plugin-authentication-kerberos-client-mode](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_plugin-authentication-kerberos-client-mode)|Permit GSSAPI pluggable authentication through the MIT Kerberos library on Windows|8.0.32||
|[--plugin-dir](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_plugin-dir)|Directory where plugins are installed|||
|[--port](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_port)|TCP/IP port number for connection|||
|[--print-defaults](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_print-defaults)|Print default options|||
|[--protocol](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_protocol)|Transport protocol to use|||
|[--quick](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_quick)|Retrieve rows for a table from the server a row at a time|||
|[--quote-names](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_quote-names)|Quote identifiers within backtick characters|||
|[--replace](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_replace)|Write REPLACE statements rather than INSERT statements|||
|[--result-file](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_result-file)|Direct output to a given file|||
|[--routines](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_routines)|Dump stored routines (procedures and functions) from dumped databases|||
|[--server-public-key-path](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_server-public-key-path)|Path name to file containing RSA public key|||
|[--set-charset](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_set-charset)|Add SET NAMES default_character_set to output|||
|[--set-gtid-purged](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_set-gtid-purged)|Whether to add SET @@GLOBAL.GTID_PURGED to output|||
|[--shared-memory-base-name](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_shared-memory-base-name)|Shared-memory name for shared-memory connections (Windows only)|||
|[--show-create-skip-secondary-engine](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_show-create-skip-secondary-engine)|Exclude SECONDARY ENGINE clause from CREATE TABLE statements|8.0.18||
|[--single-transaction](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_single-transaction)|Issue a BEGIN SQL statement before dumping data from server|||
|[--skip-add-drop-table](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_add-drop-table)|Do not add a DROP TABLE statement before each CREATE TABLE statement|||
|[--skip-add-locks](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_add-locks)|Do not add locks|||
|[--skip-comments](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_skip-comments)|Do not add comments to dump file|||
|[--skip-compact](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_compact)|Do not produce more compact output|||
|[--skip-disable-keys](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_disable-keys)|Do not disable keys|||
|[--skip-extended-insert](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_extended-insert)|Turn off extended-insert|||
|[--skip-generated-invisible-primary-key](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_skip-generated-invisible-primary-key)|Do not include generated invisible primary keys in dump file|8.0.30||
|[--skip-opt](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_skip-opt)|Turn off options set by --opt|||
|[--skip-quick](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_quick)|Do not retrieve rows for a table from the server a row at a time|||
|[--skip-quote-names](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_quote-names)|Do not quote identifiers|||
|[--skip-set-charset](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_set-charset)|Do not write SET NAMES statement|||
|[--skip-triggers](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_triggers)|Do not dump triggers|||
|[--skip-tz-utc](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tz-utc)|Turn off tz-utc|||
|[--socket](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_socket)|Unix socket file or Windows named pipe to use|||
|[--source-data](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_source-data)|Write the binary log file name and position to the output|8.0.26||
|[--ssl-ca](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|File that contains list of trusted SSL Certificate Authorities|||
|[--ssl-capath](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|Directory that contains trusted SSL Certificate Authority certificate files|||
|[--ssl-cert](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|File that contains X.509 certificate|||
|[--ssl-cipher](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|Permissible ciphers for connection encryption|||
|[--ssl-crl](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|File that contains certificate revocation lists|||
|[--ssl-crlpath](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|Directory that contains certificate revocation-list files|||
|[--ssl-fips-mode](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl-fips-mode)|Whether to enable FIPS mode on client side||8.0.34|
|[--ssl-key](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|File that contains X.509 key|||
|[--ssl-mode](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|Desired security state of connection to server|||
|[--ssl-session-data](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|File that contains SSL session data|8.0.29||
|[--ssl-session-data-continue-on-failed-reuse](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_ssl)|Whether to establish connections if session reuse fails|8.0.29||
|[--tab](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tab)|Produce tab-separated data files|||
|[--tables](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tables)|Override --databases or -B option|||
|[--tls-ciphersuites](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tls-ciphersuites)|Permissible TLSv1.3 ciphersuites for encrypted connections|8.0.16||
|[--tls-version](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tls-version)|Permissible TLS protocols for encrypted connections|||
|[--triggers](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_triggers)|Dump triggers for each dumped table|||
|[--tz-utc](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_tz-utc)|Add SET TIME_ZONE='+00:00' to dump file|||
|[--user](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_user)|MySQL user name to use when connecting to server|||
|[--verbose](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_verbose)|Verbose mode|||
|[--version](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_version)|Display version information and exit|||
|[--where](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_where)|Dump only rows selected by given WHERE condition|||
|[--xml](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_xml)|Produce XML output|||
|[--zstd-compression-level](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_zstd-compression-level)|Compression level for connections to server that use zstd compression|8.0.18|

### Restrictions

- mysqldump does not dump the `performance_schema` or `sys` schema by default. To dump any of these, name them explicitly on the command line. You can also name them with the [`--databases`](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_databases) option. For `performance_schema`, also use the [`--skip-lock-tables`](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html#option_mysqldump_lock-tables) option.
- mysqldump does not dump the `INFORMATION_SCHEMA` schema.
- mysqldump does not dump `InnoDB` [`CREATE TABLESPACE`](https://dev.mysql.com/doc/refman/8.0/en/create-tablespace.html "15.1.21 CREATE TABLESPACE Statement") statements.
- mysqldump does not dump the NDB Cluster [`ndbinfo`](https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster-ndbinfo.html "25.6.16 ndbinfo: The NDB Cluster Information Database") information database.
- mysqldump includes statements to recreate the `general_log` and `slow_query_log` tables for dumps of the `mysql` database. Log table contents are not dumped.

## Other tools

- [Rubrik Enterprise Backup – BACKUP EAGLE®](https://www.backup-eagle.com/product/rubrik-reporting)
- [Instant Data Backup and Recovery Software | Rubrik](https://www.rubrik.com/solutions/backup-recovery)

## Links

- [Best way to take AWS Aurora MySQL backups using Xtrabackup for \> 10TB large databases? - MySQL & MariaDB - Percona Community Forum](https://forums.percona.com/t/best-way-to-take-aws-aurora-mysql-backups-using-xtrabackup-for-10tb-large-databases/24246)
- [Percona XtraBackup - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-large-mysql-mariadb-databases/percona-xtrabackup.html)
- [Implementing Multi-Source Replication in AWS RDS MySQL: A Step-by-Step Guide | by Arun Pandey | Medium](https://medium.com/@arunpandeyaws/implementing-multi-source-replication-in-aws-rds-mysql-a-step-by-step-guide-02cd50231320)
- [Exploring How MySQL 5.7 Multi-Source Replication Works](https://www.percona.com/blog/mysql-5-7-multi-source-replication/)
