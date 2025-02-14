# Thread States

The following list describes thread `State` values that are associated with general query processing and not more specialized activities such as replication. Many of these are useful only for finding bugs in the server.

- `After create`

    This occurs when the thread creates a table (including internal temporary tables), at the end of the function that creates the table. This state is used even if the table could not be created due to some error.

- `altering table`

    The server is in the process of executing an in-place [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement").

- `Analyzing`

    The thread is calculating a `MyISAM` table key distributions (for example, for [`ANALYZE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/analyze-table.html "15.7.3.1 ANALYZE TABLE Statement")).

- `checking permissions`

    The thread is checking whether the server has the required privileges to execute the statement.

- `Checking table`

    The thread is performing a table check operation.

- `cleaning up`

    The thread has processed one command and is preparing to free memory and reset certain state variables.

- `closing tables`

    The thread is flushing the changed table data to disk and closing the used tables. This should be a fast operation. If not, verify that you do not have a full disk and that the disk is not in very heavy use.

- `committing alter table to storage engine`

    The server has finished an in-place [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement") and is committing the result.

- `converting HEAP to ondisk`

    The thread is converting an internal temporary table from a `MEMORY` table to an on-disk table.

- `copy to tmp table`

    The thread is processing an [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement") statement. This state occurs after the table with the new structure has been created but before rows are copied into it.

    For a thread in this state, the Performance Schema can be used to obtain about the progress of the copy operation. See [Section 29.12.5, "Performance Schema Stage Event Tables"](https://dev.mysql.com/doc/refman/8.0/en/performance-schema-stage-tables.html "29.12.5 Performance Schema Stage Event Tables").

- `Copying to group table`

    If a statement has different `ORDER BY` and `GROUP BY` criteria, the rows are sorted by group and copied to a temporary table.

- `Copying to tmp table`

    The server is copying to a temporary table in memory.

- `Copying to tmp table on disk`

    The server is copying to a temporary table on disk. The temporary result set has become too large (see [Section 10.4.4, "Internal Temporary Table Use in MySQL"](https://dev.mysql.com/doc/refman/8.0/en/internal-temporary-tables.html "10.4.4 Internal Temporary Table Use in MySQL")). Consequently, the thread is changing the temporary table from in-memory to disk-based format to save memory.

- `Creating index`

    The thread is processing `ALTER TABLE ... ENABLE KEYS` for a `MyISAM` table.

- `Creating sort index`

    The thread is processing a [`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement") that is resolved using an internal temporary table.

- `creating table`

    The thread is creating a table. This includes creation of temporary tables.

- `Creating tmp table`

    The thread is creating a temporary table in memory or on disk. If the table is created in memory but later is converted to an on-disk table, the state during that operation is `Copying to tmp table on disk`.

- `deleting from main table`

    The server is executing the first part of a multiple-table delete. It is deleting only from the first table, and saving columns and offsets to be used for deleting from the other (reference) tables.

- `deleting from reference tables`

    The server is executing the second part of a multiple-table delete and deleting the matched rows from the other tables.

- `discard_or_import_tablespace`

    The thread is processing an `ALTER TABLE ... DISCARD TABLESPACE` or `ALTER TABLE ... IMPORT TABLESPACE` statement.

- `end`

    This occurs at the end but before the cleanup of [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement"), [`CREATE VIEW`](https://dev.mysql.com/doc/refman/8.0/en/create-view.html "15.1.23 CREATE VIEW Statement"), [`DELETE`](https://dev.mysql.com/doc/refman/8.0/en/delete.html "15.2.2 DELETE Statement"), [`INSERT`](https://dev.mysql.com/doc/refman/8.0/en/insert.html "15.2.7 INSERT Statement"), [`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement"), or [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html "15.2.17 UPDATE Statement") statements.

    For the `end` state, the following operations could be happening:

    - Writing an event to the binary log

    - Freeing memory buffers, including for blobs

- `executing`

    The thread has begun executing a statement.

- `Execution of init_command`

    The thread is executing statements in the value of the `init_command` system variable.

- `freeing items`

    The thread has executed a command. This state is usually followed by `cleaning up`.

- `FULLTEXT initialization`

    The server is preparing to perform a natural-language full-text search.

- `init`

    This occurs before the initialization of [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement"), [`DELETE`](https://dev.mysql.com/doc/refman/8.0/en/delete.html "15.2.2 DELETE Statement"), [`INSERT`](https://dev.mysql.com/doc/refman/8.0/en/insert.html "15.2.7 INSERT Statement"), [`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement"), or [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html "15.2.17 UPDATE Statement") statements. Actions taken by the server in this state include flushing the binary log and the `InnoDB` log.

- `Killed`

    Someone has sent a [`KILL`](https://dev.mysql.com/doc/refman/8.0/en/kill.html "15.7.8.4 KILL Statement") statement to the thread and it should abort next time it checks the kill flag. The flag is checked in each major loop in MySQL, but in some cases it might still take a short time for the thread to die. If the thread is locked by some other thread, the kill takes effect as soon as the other thread releases its lock.

- `Locking system tables`

    The thread is trying to lock a system table (for example, a time zone or log table).

- `logging slow query`

    The thread is writing a statement to the slow-query log.

- `login`

    The initial state for a connection thread until the client has been authenticated successfully.

- `manage keys`

    The server is enabling or disabling a table index.

- `Opening system tables`

    The thread is trying to open a system table (for example, a time zone or log table).

- `Opening tables`

    The thread is trying to open a table. This is should be very fast procedure, unless something prevents opening. For example, an [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement") or a [`LOCK TABLE`](https://dev.mysql.com/doc/refman/8.0/en/lock-tables.html "15.3.6 LOCK TABLES and UNLOCK TABLES Statements") statement can prevent opening a table until the statement is finished. It is also worth checking that your [`table_open_cache`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache) value is large enough.

    For system tables, the `Opening system tables` state is used instead.

- `optimizing`

    The server is performing initial optimizations for a query.

- `preparing`

    This state occurs during query optimization.

- `preparing for alter table`

    The server is preparing to execute an in-place [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement").

- `Purging old relay logs`

    The thread is removing unneeded relay log files.

- `query end`

    This state occurs after processing a query but before the `freeing items` state.

- `Receiving from client`

    The server is reading a packet from the client.

- `Removing duplicates`

    The query was using [`SELECT DISTINCT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement") in such a way that MySQL could not optimize away the distinct operation at an early stage. Because of this, MySQL requires an extra stage to remove all duplicated rows before sending the result to the client.

- `removing tmp table`

    The thread is removing an internal temporary table after processing a [`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement") statement. This state is not used if no temporary table was created.

- `rename`

    The thread is renaming a table.

- `rename result table`

    The thread is processing an [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement") statement, has created the new table, and is renaming it to replace the original table.

- `Reopen tables`

    The thread got a lock for the table, but noticed after getting the lock that the underlying table structure changed. It has freed the lock, closed the table, and is trying to reopen it.

- `Repair by sorting`

    The repair code is using a sort to create indexes.

- `Repair done`

    The thread has completed a multithreaded repair for a `MyISAM` table.

- `Repair with keycache`

    The repair code is using creating keys one by one through the key cache. This is much slower than `Repair by sorting`.

- `Rolling back`

    The thread is rolling back a transaction.

- `Saving state`

    For `MyISAM` table operations such as repair or analysis, the thread is saving the new table state to the `.MYI` file header. State includes information such as number of rows, the `AUTO_INCREMENT` counter, and key distributions.

- `Searching rows for update`

    The thread is doing a first phase to find all matching rows before updating them. This has to be done if the [`UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/update.html "15.2.17 UPDATE Statement") is changing the index that is used to find the involved rows.

- `Sending data`

    _Prior to MySQL 8.0.17_: The thread is reading and processing rows for a [`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement") statement, and sending data to the client. Because operations occurring during this state tend to perform large amounts of disk access (reads), it is often the longest-running state over the lifetime of a given query. _MySQL 8.0.17 and later_: This state is no longer indicated separately, but rather is included in the `Executing` state.

- `Sending to client`

    The server is writing a packet to the client.

- `setup`

    The thread is beginning an [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLEauro Statement") operation.

- `Sorting for group`

    The thread is doing a sort to satisfy a `GROUP BY`.

- `Sorting for order`

    The thread is doing a sort to satisfy an `ORDER BY`.

- `Sorting index`

    The thread is sorting index pages for more efficient access during a `MyISAM` table optimization operation.

- `Sorting result`

    For a [`SELECT`](https://dev.mysql.com/doc/refman/8.0/en/select.html "15.2.13 SELECT Statement") statement, this is similar to `Creating sort index`, but for nontemporary tables.

- `starting`

    The first stage at the beginning of statement execution.

- `statistics`

    The server is calculating statistics to develop a query execution plan. If a thread is in this state for a long time, the server is probably disk-bound performing other work.

- `System lock`

    The thread has called `mysql_lock_tables()` and the thread state has not been updated since. This is a very general state that can occur for many reasons.

    For example, the thread is going to request or is waiting for an internal or external system lock for the table. This can occur when [`InnoDB`](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html "Chapter 17 The InnoDB Storage Engine") waits for a table-level lock during execution of [`LOCK TABLES`](https://dev.mysql.com/doc/refman/8.0/en/lock-tables.html "15.3.6 LOCK TABLES and UNLOCK TABLES Statements"). If this state is being caused by requests for external locks and you are not using multiple [**mysqld**](https://dev.mysql.com/doc/refman/8.0/en/mysqld.html "6.3.1 mysqld — The MySQL Server") servers that are accessing the same [`MyISAM`](https://dev.mysql.com/doc/refman/8.0/en/myisam-storage-engine.html "18.2 The MyISAM Storage Engine") tables, you can disable external system locks with the [`--skip-external-locking`](https://dev.mysql.com/doc/refman/8.0/en/server-options.html#option_mysqld_external-locking) option. However, external locking is disabled by default, so it is likely that this option has no effect. For [`SHOW PROFILE`](https://dev.mysql.com/doc/refman/8.0/en/show-profile.html "15.7.7.30 SHOW PROFILE Statement"), this state means the thread is requesting the lock (not waiting for it).

    For system tables, the `Locking system tables` state is used instead.

- `update`

    The thread is getting ready to start updating the table.

- `Updating`

    The thread is searching for rows to update and is updating them.

- `updating main table`

    The server is executing the first part of a multiple-table update. It is updating only the first table, and saving columns and offsets to be used for updating the other (reference) tables.

- `updating reference tables`

    The server is executing the second part of a multiple-table update and updating the matched rows from the other tables.

- `User lock`

    The thread is going to request or is waiting for an advisory lock requested with a [`GET_LOCK()`](https://dev.mysql.com/doc/refman/8.0/en/locking-functions.html#function_get-lock) call. For [`SHOW PROFILE`](https://dev.mysql.com/doc/refman/8.0/en/show-profile.html "15.7.7.30 SHOW PROFILE Statement"), this state means the thread is requesting the lock (not waiting for it).

- `User sleep`

    The thread has invoked a [`SLEEP()`](https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_sleep) call.

- `Waiting for commit lock`

    [`FLUSH TABLES WITH READ LOCK`](https://dev.mysql.com/doc/refman/8.0/en/flush.html#flush-tables-with-read-lock) is waiting for a commit lock.

- `waiting for handler commit`

    The thread is waiting for a transaction to commit versus other parts of query processing.

- `Waiting for tables`

    The thread got a notification that the underlying structure for a table has changed and it needs to reopen the table to get the new structure. However, to reopen the table, it must wait until all other threads have closed the table in question.

    This notification takes place if another thread has used [`FLUSH TABLES`](https://dev.mysql.com/doc/refman/8.0/en/flush.html#flush-tables) or one of the following statements on the table in question: ``FLUSH TABLES _`tbl_name`_``, [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement"), [`RENAME TABLE`](https://dev.mysql.com/doc/refman/8.0/en/rename-table.html "15.1.36 RENAME TABLE Statement"), [`REPAIR TABLE`](https://dev.mysql.com/doc/refman/8.0/en/repair-table.html "15.7.3.5 REPAIR TABLE Statement"), [`ANALYZE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/analyze-table.html "15.7.3.1 ANALYZE TABLE Statement"), or [`OPTIMIZE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/optimize-table.html "15.7.3.4 OPTIMIZE TABLE Statement").

- `Waiting for table flush`

    The thread is executing [`FLUSH TABLES`](https://dev.mysql.com/doc/refman/8.0/en/flush.html#flush-tables) and is waiting for all threads to close their tables, or the thread got a notification that the underlying structure for a table has changed and it needs to reopen the table to get the new structure. However, to reopen the table, it must wait until all other threads have closed the table in question.

    This notification takes place if another thread has used [`FLUSH TABLES`](https://dev.mysql.com/doc/refman/8.0/en/flush.html#flush-tables) or one of the following statements on the table in question: ``FLUSH TABLES _`tbl_name`_``, [`ALTER TABLE`](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html "15.1.9 ALTER TABLE Statement"), [`RENAME TABLE`](https://dev.mysql.com/doc/refman/8.0/en/rename-table.html "15.1.36 RENAME TABLE Statement"), [`REPAIR TABLE`](https://dev.mysql.com/doc/refman/8.0/en/repair-table.html "15.7.3.5 REPAIR TABLE Statement"), [`ANALYZE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/analyze-table.html "15.7.3.1 ANALYZE TABLE Statement"), or [`OPTIMIZE TABLE`](https://dev.mysql.com/doc/refman/8.0/en/optimize-table.html "15.7.3.4 OPTIMIZE TABLE Statement").

- ``Waiting for _`lock_type`_ lock``

    The server is waiting to acquire a `THR_LOCK` lock or a lock from the metadata locking subsystem, where _`lock_type`_ indicates the type of lock.

    This state indicates a wait for a `THR_LOCK`:

    - `Waiting for table level lock`

    These states indicate a wait for a metadata lock:

    - `Waiting for event metadata lock`
    - `Waiting for global read lock`
    - `Waiting for schema metadata lock`
    - `Waiting for stored function metadata lock`
    - `Waiting for stored procedure metadata lock`
    - `Waiting for table metadata lock`
    - `Waiting for trigger metadata lock`

- `Waiting on cond`

    A generic state in which the thread is waiting for a condition to become true. No specific state information is available.

- `Writing to net`

    The server is writing a packet to the network.

[10.14.3 General Thread States](https://dev.mysql.com/doc/refman/8.0/en/general-thread-states.html)
