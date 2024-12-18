# Optimizing Locking Operations

- 8.11 Optimizing Locking Operations
- 8.11.2 Table Locking Issues
- 8.11.3 Concurrent Inserts
- 8.11.4 Metadata Locking
- 8.11.5 External Locking

**Internal locking** is performed within the MySQL server itself to manage contention for table contents by multiple threads. This type of locking is internal because it is performed entirely by the server and involves no other programs.

**External locking** occurs when the server and other programs lock [MyISAM](https://dev.mysql.com/doc/refman/5.7/en/myisam-storage-engine.html) table files to coordinate among themselves which program can access the tables at which time.
8.11.1 Internal Locking Methods

MySQL uses [**row-level locking**](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_row_lock) for InnoDB tables to support simultaneous write access by multiple sessions, making them suitable for multi-user, highly concurrent, and OLTP applications.

To avoid [deadlocks](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_deadlock) when performing multiple concurrent write operations on a single InnoDB table, acquire necessary locks at the start of the transaction by issuing a SELECT ... FOR UPDATE statement for each group of rows expected to be modified, even if the data change statements come later in the transaction. If transactions modify or lock more than one table, issue the applicable statements in the same order within each transaction. Deadlocks affect performance rather than representing a serious error, because InnoDB automatically [detects](https://dev.mysql.com/doc/refman/5.7/en/glossary.html#glos_deadlock_detection) deadlock conditions and rolls back one of the affected transactions.

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

## Different Locks

1. **Shared Lock (S Lock) -** It allows multiple transactions to read a resource simultaneously but not modify it. Other transactions can also acquire a shared lock on the same resource.
2. **Exclusive Lock (X Lock) -** It allows a transaction to both read and modify a resource. No other transaction can acquire any type of lock on the same resource while an exclusive lock is held.
3. **Update Lock (U Lock) -** It is used to prevent a deadlock scenario when a transaction intends to update a resource.
4. **Schema Lock -** It is used to protect the structure of database objects.
5. **Bulk Update Lock (BU Lock) -** It is used during bulk insert operations to improve performance by reducing the number of locks required.
6. **Key-Range Lock -** It is used in indexed data to prevent phantom reads (inserting new rows into a range that a transaction has already read).
7. **Row-Level Lock -** It locks a specific row in a table, allowing other rows to be accessed concurrently.
8. **Page-Level Lock -** It locks a specific page (a fixed-size block of data) in the database.
9. **Table-Level Lock -** It locks an entire table. This is simple to implement but can reduce concurrency significantly.

![Types of database locks](../../../media/Pasted%20image%2020240626161909.jpg)

### Row Locks

InnoDB uses row-level locking for `DELETE` operations. This means that all rows that match the condition `id < 391919930` will be locked until the transaction is complete. Row locks prevent other transactions from modifying or deleting these rows until the current transaction is finished.

### Range Locks

A range lock is a type of lock that InnoDB uses to lock a range of index entries. It is more commonly associated with preventing other transactions from inserting, updating, or deleting rows within a specific range that matches the condition of a query. Range locks are part of the mechanism InnoDB uses to implement the REPEATABLE READ isolation level.

```sql
SELECT * FROM orders WHERE order_id BETWEEN 100 AND 200 FOR UPDATE;
```

In this case, InnoDB locks all rows where `order_id` is between 100 and 200, including any potential gaps within this range.

### Gap Locks

Depending on the isolation level of your transaction, InnoDB might use gap locks to prevent other transactions from inserting new rows into the gaps covered by the index range of the `DELETE` statement. Gap locks are particularly relevant in `REPEATABLE READ` or higher isolation levels.

```sql
DELETE FROM orders WHERE order_id < 100;
```

Here, InnoDB locks the gaps between existing rows where `order_id` is less than 100 to prevent new rows from being inserted into these gaps, which would affect the results of this `DELETE` operation.

Therefore it's better to use between for `DELETE` to make operation non-locking

```sql
DELETE FROM orders WHERE order_id betwen 0 and 100;
```

### Index Locks

InnoDB locks the index entries for the rows being deleted. This prevents other transactions from modifying the indexes until the transaction is complete.

### Table Locks

While InnoDB primarily uses row-level locking, there can also be implicit table-level locks that prevent schema changes to the table while the `DELETE` operation is in progress.

### Intention Locks

- During SELECT/INSERT/UPDATE/DELETE, a shared intention lock ("IS") allows access by multiple threads to work on the same table, but blocks exclusive table locks.
- ﻿﻿During ALTER TABLE or DROP TABLE, an exclusive intention lock ("IX") blocks other table locks, either shared or exclusive. So no one else can query, and no one can run their own ALTER/DROP TABLE.

### Insert intention lock

- ﻿﻿A special kind of gap lock, requested before a client tries to insert a row.
- ﻿﻿Insert locks are shared, not exclusive—multiple clients can acquire insert locks on the same gap.
- ﻿﻿But insert locks conflict with other exclusive locks.

#### why is insert intention lock shared?

- ﻿﻿Multiple clients prepare to insert into the same gap.
- ﻿﻿They may be inserting different rows within the same gap, so they don't conflict with each other.
- ﻿﻿But the insert intention lock blocks other clients from requesting exclusive locks on the same gap.

### Auto-inc lock

- ﻿﻿A table lock, used when a client requests the next unique id for a given table.
- ﻿﻿Ensures that each id is given to one client.
- ﻿﻿Brief—it is released as soon as the id is generated, instead of lasting to the end of the transaction like other locks.
- ﻿﻿Because the lock is so brief, neither client can "**undo**"— i.e. return their id to the stack for someone else to use.

### Deadlock

- ﻿﻿When two or more concurrent clients wait for each other to release their locks, but since they are both waiting, they will never give up the lock they have.
- ﻿﻿In other words, a catch-22 of lock-waits.
- ﻿﻿Many people use the term "deadlock" incorrectly— when they are describing a simple one-way lock wait.
- Resolving deadlocks - MySQL detects cycles in lock waits, and kills one of the transactions immediately.
- avoiding deadlocks
    - ﻿﻿Each client locks everything they need in one atomic request.
    - ﻿﻿All clients request locks in the same order.

### Key Differences between Range and Gap Locks

#### Locking Focus

- **Range Lock**: Locks both existing index entries and the gaps between them.
- **Gap Lock**: Locks only the gaps between existing index entries.

#### Use Case

- **Range Lock**: Ensures that the range of index entries remains consistent, used in scenarios where the exact range of rows needs to be locked.
- **Gap Lock**: Ensures that no new rows can be inserted into the gaps, used to prevent phantom reads and ensure repeatable reads.

## Lock Errors

### Waiting for metadata lock

[Pitfalls of Metadata Locking During DDL Execution in Production](https://www.linkedin.com/pulse/pitfalls-metadata-locking-during-ddl-execution-pranav-pandey/)

[MySQL :: MySQL 8.0 Reference Manual :: 29.12.13.3 The metadata\_locks Table](https://dev.mysql.com/doc/refman/8.0/en/performance-schema-metadata-locks-table.html)

## Links

- [Overview of Different ALTER Algorithms and Its Locking Scenarios in MySQL - Sri Sakthivel M.D. - YouTube](https://www.youtube.com/watch?v=MqWQH-WWFBE&ab_channel=Percona)
- [InnoDB Locking Explained with Stick Figures | PPT](https://www.slideshare.net/slideshow/innodb-locking-explained-with-stick-figures/54574903)
