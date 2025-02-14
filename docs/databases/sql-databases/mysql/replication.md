# Replication

[MySQL Replication Tutorial - YouTube](https://www.youtube.com/playlist?list=PLd5sTGXltJ-mvbbhIyLT8hjinK9RYfjhY)

[MySQL Replication course from zero to hero | MySQL DBA | Udemy](https://www.udemy.com/course/mysql-replication-course-from-zero-to-hero/)

[Replicating - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-stored-proc-replicating.html)

[Replicating - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-stored-proc-replicating.html)

```sql
show slave status;

stop slave;

-- Slave_IO_Running: Yes
-- Slave_SQL_Running: Yes
-- Seconds_Behind_Master: 0

change master to
    MASTER_HOST='<>'
    MASTER_USER='<>'
    MASTER_PASSWORD='<>'
    MASTER_LOG_FILE='<>'
    MASTER_LOG_POS='<>'
    FOR CHANNEL '<channel_name>';
```

## Reverse Replication

[Configure reverse replication using AWS DMS to migrate an Oracle database to Amazon RDS for Oracle | AWS Database Blog](https://aws.amazon.com/blogs/database/configure-reverse-replication-using-aws-dms-to-migrate-an-oracle-database-to-amazon-rds-for-oracle/)

## Links

[How Binary Logs (and Filesystems) Affect MySQL Performance](https://www.percona.com/blog/how-binary-logs-and-filesystems-affect-mysql-performance/)

[mysql - How to disable binlog\_format in AWS RDS? - Database Administrators Stack Exchange](https://dba.stackexchange.com/questions/318682/how-to-disable-binlog-format-in-aws-rds)

[Configuring MySQL binary logging - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.MySQL.BinaryFormat.html)

- You can turn off binary logging by setting the backup retention period of a DB instance to zero, but this disables daily automated backups. Disabling automated backups turns off or disables the `log_bin` session variable. This disables binary logging on the RDS for MySQL DB instance, which in turn resets the `binlog_format` session variable to the default value of `ROW` in the database. We recommend that you don't disable backups.
