# GTID Replication

When using GTIDs, each transaction can be identified and tracked as it is committed on the originating server and applied by any replicas; this means that it is not necessary when using GTIDs to refer to log files or positions within those files when starting a new replica or failing over to a new source, which greatly simplifies these tasks. Because GTID-based replication is completely transaction-based, it is simple to determine whether sources and replicas are consistent; as long as all transactions committed on a source are also committed on a replica, consistency between the two is guaranteed. You can use either statement-based or row-based replication with GTIDs (see [Section 16.2.1, "Replication Formats"](https://dev.mysql.com/doc/refman/5.7/en/replication-formats.html "16.2.1 Replication Formats")); however, for best results, we recommend that you use the row-based format.

GTIDs are always preserved between source and replica. This means that you can always determine the source for any transaction applied on any replica by examining its binary log. In addition, once a transaction with a given GTID is committed on a given server, any subsequent transaction having the same GTID is ignored by that server. Thus, a transaction committed on the source can be applied no more than once on the replica, which helps to guarantee consistency.

## Links

- [MySQL 5.7 Reference Manual | 16.1.3 Replication with Global Transaction Identifiers](https://dev.mysql.com/doc/refman/5.7/en/replication-gtids.html)
- [Amazon Aurora for MySQL compatibility now supports global transaction identifiers (GTIDs) replication | AWS Database Blog](https://aws.amazon.com/blogs/database/amazon-aurora-for-mysql-compatibility-now-supports-global-transaction-identifiers-gtids-replication/)
- [MySQL Adventures: GTID Replication In AWS RDS | by Bhuvanesh | Searce](https://blog.searce.com/mysql-adventures-gtid-replication-in-aws-rds-508abd87780a)
- [Using GTID-based replication - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/mysql-replication-gtid.html)
