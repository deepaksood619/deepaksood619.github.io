# Gh-ost (Ghost)

If like 99 percent of MySQL DBAs you have faced implementing a change to a MySQL table while fearing the impact on production, then you should consider [Gh-ost](https://github.com/github/gh-ost) (GitHub Online Schema Migration). Gh-ost provides MySQL schema changes without blocking writes, without using triggers, and with the ability to pause and resume the migration!

Why is this so important? Since MySQL 5.6 shipped with new [ALTER TABLE ... ALGORITHM=INPLACE](https://dev.mysql.com/doc/refman/5.6/en/alter-table.html) DDL (Data Definition Language) functionality, it became possible to modify a table without blocking writes for common operations such as adding an index (B-tree). However, there remain a few conditions where [writes (DML statements) are blocked](https://dev.mysql.com/doc/refman/5.7/en/innodb-create-index-overview.html#innodb-online-ddl-summary-grid), most notably the addition of a `FULLTEXT` index, the encryption of the tablespace, and the conversion of a column type.

Other popular online schema change tools, such as Percona's [pt-online-schema-change](https://www.percona.com/doc/percona-toolkit/LATEST/pt-online-schema-change.html), work by implementing a set of three triggers (INSERT, UPDATE, andDELETE) on the master to keep a shadow copy table in sync with changes. This introduces a small performance penalty due to write amplification, but more significantly requires seven instances of metadata locks. These effectively stall DML (Data Manipulation Language) events.

Since Gh-ost operates using the binary log, it is not susceptible to the [trigger-based drawbacks](https://github.com/github/gh-ost/blob/master/doc/why-triggerless). Finally Gh-ost is able to effectively [throttle activity to zero events](https://github.com/github/gh-ost/blob/master/doc/interactive-commands#examples), allowing you to pause the schema migration for a while if your server begins to struggle, and resume when the activity bubble moves on.

So how does Gh-ost work? By default, Gh-ost connects to a replica (slave), identifies the master, and applies the migration on the master. It receives changes on a replica to the source table in [binlog_format=ROW](https://dev.mysql.com/doc/en/binary-log-setting.html), parses the log, and converts these statements to be re-executed on the master's shadow table.It keeps track of the row counts on the replica and identifies when it is time to perform an atomic cutover (switch tables).

![image](../../media/MySQL_SQL-MySQL-Tools-image1.jpg)

### Gh-ost operation modes

Gh-ost provides an alternative mode where you execute the migration directly on the master (whether it has slaves or not), read back the master's `binlog_format=ROW` events, and then re-apply them to the shadow table.

A final option is available to run the migration only on the replica without impacting the master, so you can test or otherwise validate the migration.

![image](../../media/MySQL_SQL-MySQL-Tools-image2.jpg)

### Gh-ost general flow

Note that if your schema has foreign keys then Gh-ost may not operate cleanly, as this configuration is not supported.

### Ghost Tables

A ghost table is a database table that is no longer in use but still takes up space. Ghost tables are often created during schema changes or data migrations

## Commands

```bash
wget https://github.com/github/gh-ost/releases/download/v1.1.0/gh-ost_1.1.0_amd64.deb

sudo dpkg -i gh-ost_1.1.0_amd64.deb

SHOW VARIABLES LIKE '%binlog_row_image%';
# this should be full instead of minimal, In RDS no restart required for this change, it's a dynamic variable
```

```bash
nohup gh-ost \
--host=10.0.40.5 \
--user=username \
--password='password' \
--database=db_name \
--table=users \
--alter="ADD COLUMN enc_uid VARCHAR(225), ADD INDEX idx_enc_uid (enc_uid)" \
--discard-foreign-keys \
--skip-foreign-key-checks \
--postpone-cut-over-flag-file=./ghost-postpone.flag \
--serve-socket-file=./ghost_migration.sock \
--initially-drop-ghost-table \
--replica-server-id=13 \
--chunk-size=1000 \
--allow-on-master \
--execute > gh-ost.log 2>&1 &

nohup gh-ost
--host=demo.com
--user=root
--password='test'
--database=db_name
--table=users
--alter="ADD COLUMN enc_uid VARCHAR(225), ADD INDEX idx_enc_uid (enc_uid)"
--exact-rowcount
--concurrent-rowcount
--assume-rbr
--discard-foreign-keys
--skip-foreign-key-checks
--postpone-cut-over-flag-file=./ghost-postpone.flag
--serve-socket-file=./ghost_session.sock
--chunk-size=1000
--allow-on-master
--execute gh-ost.log 2>&1 &
```

```sql
-- ghc table has progress information
select * from _users_ghc;
-- gho table has actual data with new column
select * from _users_gho;

-- cleanup if failure before restarting ghost command
drop table _users_ghc;
drop table _users_gho;
```

## Links

https://github.com/github/gh-ost

https://www.infoworld.com/article/3241730/top-5-open-source-tools-for-mysql-administrators.html

[GH-OST for MySQL Schema Change.](https://www.mydbops.com/blog/gh-ost-for-mysql-schema-change)

[How we Altered a MySQL Table with 50 Million Rows without Downtime using gh-ost - Browntape](https://browntape.com/how-we-altered-a-mysql-table-with-50m-rows-without-downtime-with-gh-ost/)

Alternatives - [GitHub - cashapp/spirit: Online Schema Change Tool for MySQL 8.0+](https://github.com/cashapp/spirit)

[Alter Schema With gh-ost](https://dnisha.github.io/mynotes/Production-grade-MYSQL-DBA/Alter-Schema-With-gh-ost)
