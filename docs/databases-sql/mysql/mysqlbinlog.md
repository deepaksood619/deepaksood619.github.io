# mysqlbinlog

The server's binary log consists of files containing "events" that describe modifications to database contents. The server writes these files in binary format. To display their contents in text format, use the [**mysqlbinlog**](https://dev.mysql.com/doc/refman/8.4/en/mysqlbinlog.html "6.6.9 mysqlbinlog — Utility for Processing Binary Log Files") utility. You can also use [**mysqlbinlog**](https://dev.mysql.com/doc/refman/8.4/en/mysqlbinlog.html "6.6.9 mysqlbinlog — Utility for Processing Binary Log Files") to display the contents of relay log files written by a replica server in a replication setup because relay logs have the same format as binary logs.

[6.6.9 mysqlbinlog — Utility for Processing Binary Log Files](https://dev.mysql.com/doc/refman/8.4/en/mysqlbinlog.html)

### 7.4.4.2 Setting The Binary Log Format

You can select the binary logging format explicitly by starting the MySQL server with [``--binlog-format=_`type`_``](https://dev.mysql.com/doc/refman/8.4/en/replication-options-binary-log.html#sysvar_binlog_format). The supported values for _`type`_ are:

- `STATEMENT` causes logging to be statement based.
- `ROW` causes logging to be row based. This is the default.
- `MIXED` causes logging to use mixed format.

[7.4.4.2 Setting The Binary Log Format](https://dev.mysql.com/doc/refman/8.4/en/binary-log-setting.html)

### Difference between Row, Statement and Mixed binlog format

Statement-based replication is the fastest and most compact, but in some circumstances it can produce different (non-deterministic) results on slaves than on the master, resulting in inconsistency. An example might be:

```sql
UPDATE mytable SET a = a + 1 LIMIT 1;
```

There's no way to guarantee which row will get updated as there is no sort order on it and order on disk is not predictable or consistent.

Row based replication avoids this problem by replicating the changed data rather than the queries, but whereas a statement like:

```sql
UPDATE mytable SET a = a + 1;
```

requires replicating just a few bytes for statement-based replication no matter how many rows it affects: if it updates 1 million rows, row-based replication will replicate all 1 million rows, which will be much slower and create much bigger binary logs.

Mixed mode switches between the two, using whichever is most efficient or safe (for example, simple inserts are probably best done by row-based replication - using statements may be slower). The opportunity for problems comes in recognising which statements are non-deterministic, which is a non-trivial problem.

In summary:

- Row-based: always safe, possibly very slow and inefficient in time and space
- Statement-based: not always safe, but may be much faster
- Mixed-mode: best of both worlds in theory, but could possibly get it wrong resulting in either slow performance, or wrong data depending on which way it gets it wrong!

[database - Which binlog format to use for MySQL Replication? - Server Fault](https://serverfault.com/questions/212549/which-binlog-format-to-use-for-mysql-replication)

[19.2.1.3 Determination of Safe and Unsafe Statements in Binary Logging](https://dev.mysql.com/doc/refman/8.4/en/replication-rbr-safe-unsafe.html)

[Difference between row-based and statement-based replication in MySQL? - Database Administrators Stack Exchange](https://dba.stackexchange.com/questions/8978/difference-between-row-based-and-statement-based-replication-in-mysql)

[Comparing MySQL Statement-Based and Row-Based Replication | Database Journal](https://www.databasejournal.com/mysql/comparing-mysql-statement-based-and-row-based-replication/)

[Is MySQL Statement-Based / Mixed Replication Really Safe?](https://www.percona.com/blog/is-mysql-statement-based-mixed-replication-really-safe/)

### Statement

With statement-based binary logging, the source server writes the executed queries to the binary log. This is a very fast, compact, and efficient logging method that works perfectly in most cases. However, it is possible for the data on the source and replica to become different if a query is designed in such a way that the data modification is nondeterministic (generally not a recommended practice, even outside of replication).

## binlog_row_image

This variable, in row-based replication, determines if row images are written to the blog as **full** (log all columns), **minimal** (Log only changed columns and columns used to identify rows), or **noblob** (log all columns except BLOB or TEXT columns).

Setting **binlog_row_image** to MINIMAL reduces the amount of data pushed into the binary log. However, this setting also skips essential data used to recover your database from data corruption, or human mistakes.

This can impact performance and storage size.

[MySQL binlog\_row\_image set to MINIMAL - Percona Platform](https://docs.percona.com/percona-platform/advisors/checks/binlog-row-image.html)
