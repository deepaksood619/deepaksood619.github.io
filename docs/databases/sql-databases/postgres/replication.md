# Replication

### Types

#### Streaming Replication

- **Type:** Asynchronous
- **Method:** Uses a continuous stream of write-ahead logs (WAL) from the primary server to the standby server(s).
- **Data Transfer:** Replicates entire database clusters at the block level.
- **Failover:** Generally used for read-only failover. Failover to a standby server in case the primary server fails.
- **Consistency:** Synchronous replication can be achieved by waiting for acknowledgments from the standby, ensuring transaction durability.
- **Usage:** Commonly used for high availability and disaster recovery.

#### Physical Replication

- **Type:** Synchronous or Asynchronous
- **Method:** Replicates physical blocks of data, similar to streaming replication, but allows for more flexibility in configuration.
- **Data Transfer:** Replicates entire data pages at the storage level.
- **Failover:** Primarily used for read-only failover, similar to streaming replication.
- **Consistency:** Can be synchronous, ensuring that a transaction is committed on both the primary and standby servers before returning to the client.
- **Usage:** Suitable for high availability, disaster recovery, and load balancing.

#### Logical Replication

- **Type:** Asynchronous
- **Method:** Replicates changes in the database on a logical level, such as tables, rows, or columns.
- **Data Transfer:** Replicates changes made to the data, providing more flexibility in what is replicated.
- **Failover:** Often used for upgrading databases with minimal downtime or for data distribution across different systems.
- **Consistency:** Typically asynchronous, so there might be some delay in data replication.
- **Usage:** Useful for selective data replication, upgrades, and data distribution.

#### Bi-Directional Replication (BDR)

- **Type:** Asynchronous
- **Method:** Replicates changes bidirectionally between nodes.
- **Data Transfer:** Allows for bidirectional replication of changes made to the data.
- **Failover:** Can be used for read and write failover, allowing writes on multiple nodes.
- **Consistency:** Asynchronous replication, so there might be some delay in data replication.
- **Usage:** Useful for multi-master setups where multiple nodes can accept both read and write operations. It enables data consistency across multiple nodes.

Streaming replication and physical replication are more focused on providing high availability and disaster recovery, while logical replication allows for more selective data replication. Bi-Directional Replication (BDR) is a specific implementation of multi-master replication, allowing for bidirectional data synchronization between nodes.

### Bi-directional Replication (BDR)

PostgreSQL supports block-based (physical) replication as well as the row-based (logical) replication. **Physical replication is traditionally used to create read-only replicas of a primary instance**, and utilized in both self-managed and managed deployments of PostgreSQL. Uses for physical read replicas can include high availability, disaster recovery, and scaling out the reader nodes. Although there is flexibility in the use cases for physical replicas, consider that all data in the database must be replicated from the write instance to its readers.

In contrast, **logical replication allows you to choose a subset of the data to replicate**. Additionally, when using logical replication, there is no requirement for the secondary nodes to be read-only. You can configure logical replication to get data for some tables and at the same time, the application can directly write to the same or different tables in the database.

The publisher- and subscriber-based [logical replication feature](https://www.postgresql.org/docs/current/logical-replication.html) was introduced into core PostgreSQL starting with version 10, but prior to that, PostgreSQL started supporting the [logical decoding feature](https://www.postgresql.org/docs/current/logicaldecoding-explanation.html) from version 9.4. Much of the logical replication capability in core PostgreSQL was based on the work done for the open-source PostgreSQL logical replication extension called [pglogical](https://github.com/2ndQuadrant/pglogical).

[PostgreSQL bi-directional replication using pglogical | AWS Database Blog](https://aws.amazon.com/blogs/database/postgresql-bi-directional-replication-using-pglogical/)

**PostgreSQL’s bidirectional replication** (Postgres-BDR or BDR) is PostgreSQL’s first open-source multi-master replication system to achieve full production status. BDR was developed by 2ndQuadrant, specially designed for **distribution** in different geographical clusters, using efficient asynchronous logical replication, and **supporting** any node with more than 2 to 48 nodes in the distributed database.

[EDB Docs - EDB Postgres Distributed (PGD) v4 - BDR (Bi-Directional Replication)](https://www.enterprisedb.com/docs/pgd/4/bdr/)

[Converting from Asynchronous to Synchronous Replication in PostgreSQL | Severalnines](https://severalnines.com/database-blog/converting-asynchronous-synchronous-replication-postgresql)

[PostgreSQL: Software Catalogue - Clustering/replication](https://www.postgresql.org/download/products/3-clusteringreplication/)

## Multiple Masters to Single Slave (Multi-Source Replication)

Multi-Source Replication enables a replication slave to receive transactions from multiple sources simultaneously. Multi-source replication can be used to backup multiple servers to a single server, to merge table shards, and consolidate data from multiple servers to a single server.

![image](https://severalnines.com/wp-content/uploads/2022/05/07-mysql-rep-wp.jpeg)

MySQL and MariaDB have different implementations of multi-source replication, where MariaDB must have GTID with gtid-domain-id configured to distinguish the originating transactions while MySQL uses a separate replication channel for each master the slave replicates from. In MySQL, masters in a multi-source replication topology can be configured to use either global transaction identifier (GTID) based replication, or binary log position-based replication.

[MySQL replication for high availability | Severalnines](https://severalnines.com/resources/whitepapers/mysql-replication-high-availability/)

[MySQL 8.0 Reference Manual - 19.1.5 MySQL Multi-Source Replication](https://dev.mysql.com/doc/refman/8.0/en/replication-multi-source.html)

[The Difference Between MySQL Multi-Master and Multi-Source Replication | Severalnines](https://severalnines.com/blog/difference-between-mysql-multi-master-and-multi-source-replication/)

## Dump and Restore

[PostgreSQL: improving pg\_dump, pg\_restore performance - Stack Overflow](https://stackoverflow.com/questions/2094963/postgresql-improving-pg-dump-pg-restore-performance)

[pg dump - Postgresql 13 - Speed up pg\_dump to 5 minutes instead of 70 minutes - Server Fault](https://serverfault.com/questions/1081642/postgresql-13-speed-up-pg-dump-to-5-minutes-instead-of-70-minutes)

[Speeding up Postgres Data Dumps](https://www.iseatz.com/blog/speeding-up-postgres-data-dumps)

[PostgreSQL: Documentation: 17: 25.3. **Continuous Archiving and Point-in-Time Recovery (PITR)**](https://www.postgresql.org/docs/current/continuous-archiving.html)

## Links

- [26. High Availability, Load Balancing, and Replication](https://www.postgresql.org/docs/12/high-availability.html)
- [30. Logical Replication](https://www.postgresql.org/docs/12/logical-replication.html)
- [49. Replication Progress Tracking](https://www.postgresql.org/docs/12/replication-origins.html)
- [EDB failover manager (EFM) for managing streaming replication - DBACLASS DBACLASS](https://dbaclass.com/article/edb-failover-managerefm-for-managing-streaming-replication/)
- [Difference between PostgreSQL and MySQL: (1) Replication · Hironobu SUZUKI @ InterDB](https://www.interdb.jp/blog/pgsql/pg_vs_my_01/)
- [Replicate data between partitioned and non-partitioned tables using trigger functions in Amazon RDS for PostgreSQL or Amazon Aurora PostgreSQL | AWS Database Blog](https://aws.amazon.com/blogs/database/replicate-data-between-partitioned-and-non-partitioned-tables-using-trigger-functions-in-amazon-rds-for-postgresql-or-amazon-aurora-postgresql/)
