# Optimizing Locking Operations

- 8.11 Optimizing Locking Operations
- 8.11.2 Table Locking Issues
- 8.11.3 Concurrent Inserts
- 8.11.4 Metadata Locking
- 8.11.5 External Locking

**Internal locking** is performed within the MySQL server itself to manage contention for table contents by multiple threads. This type of locking is internal because it is performed entirely by the server and involves no other programs.

**External locking** occurs when the server and other programs lock [MyISAM](https://dev.mysql.com/doc/refman/5.7/en/myisam-storage-engine.html) table files to coordinate among themselves which program can access the tables at which time.
8.11.1 Internal Locking Methods

MySQL uses [**row-level locking**](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_row_lock) forInnoDBtables to support simultaneous write access by multiple sessions, making them suitable for multi-user, highly concurrent, and OLTP applications.

To avoid [deadlocks](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_deadlock) when performing multiple concurrent write operations on a singleInnoDBtable, acquire necessary locks at the start of the transaction by issuing aSELECT ... FOR UPDATEstatement for each group of rows expected to be modified, even if the data change statements come later in the transaction. If transactions modify or lock more than one table, issue the applicable statements in the same order within each transaction. Deadlocks affect performance rather than representing a serious error, becauseInnoDBautomatically [detects](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_deadlock_detection) deadlock conditions and rolls back one of the affected transactions.

On high concurrency systems, **deadlock detection can cause a slowdown when numerous threads wait for the same lock.** At times, it may be **more efficient to disable deadlock detection and rely on the [innodb_lock_wait_timeout](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout) setting for transaction rollback** when a deadlock occurs. Deadlock detection can be disabled using the [innodb_deadlock_detect](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_deadlock_detect) configuration option.

Advantages of row-level locking:

- Fewer lock conflicts when different sessions access different rows.
- Fewer changes for rollbacks.
- Possible to lock a single row for a long time.

MySQL uses [**table-level locking**](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_table_lock) for MyISAM, MEMORY, and MERGE tables

## Gap Locking

A gap lock is a lock on a gap between index records, or a lock on the gap before the first or after the last index record.

A lock on a gap between index records, or a lock on the gap before the first or after the last index record. For example, SELECT c1 FROM t WHERE c1 BETWEEN 10 and 20 FOR UPDATE; prevents other transactions from inserting a value of 15 into the column t.c1, whether or not there was already any such value in the column, because the gaps between all existing values in the range are locked. Contrast with record lock and next-key lock.

Gap locks are part of the tradeoff between performance and concurrency, and are used in some transaction isolation levels and not others.

[Gap Lock](https://dev.mysql.com/doc/refman/5.6/en/glossary.html#glos_gap_lock)

[Deadlock in MySQL due to Insert by multiple threads](https://stackoverflow.com/questions/32498437/deadlock-in-mysql-due-to-insert-by-multiple-threads)

[mysql deadlocks with concurrent inserts](http://thushw.blogspot.com/2010/11/mysql-deadlocks-with-concurrent-inserts.html)

It is possible to cause deadlocks in mysql (Innodb) on concurrent insert statements, without there being any transactions in progress. Deadlocks are possible even when the inserts don't collide on any key.

The deadlocks occur due to gap locking done by mysql. There are several reasons for gap locking, and in this particular case, it has to do with preserving a unique key constraint on an index. The situation presents itself to us this way: There is a unique key constraint on a column and we are doing an insert. Mysql has to make sure that the lock it takes is sufficient to prevent another concurrent insert from adding a record with the same key, thus breaking the unique key constraint.

Mysql innodb engine performs row locking on inserts. If column A has a unique key constraint, and we are adding the value "bbb" for column A in an insert statement, mysql needs to lock any gap in the index between the two current records where "bbb" will be inserted at.

[Innodb locks set](https://dev.mysql.com/doc/refman/5.6/en/innodb-locks-set.html)

## Links

- [Overview of Different ALTER Algorithms and Its Locking Scenarios in MySQL - Sri Sakthivel M.D. - YouTube](https://www.youtube.com/watch?v=MqWQH-WWFBE&ab_channel=Percona)
