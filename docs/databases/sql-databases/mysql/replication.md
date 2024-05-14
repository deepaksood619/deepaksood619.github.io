# Replication

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
