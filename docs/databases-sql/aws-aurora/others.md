# Others

## Connecting

[Using SSL/TLS to encrypt a connection to a DB instance or cluster - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html)

## Auditing

https://aws.amazon.com/premiumsupport/knowledge-center/advanced-audit-aurora-mysql-cloudwatch

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html

## Autoscaling

To meet your connectivity and workload requirements, Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas provisioned for an Aurora DB cluster using single-master replication. Aurora Auto Scaling is available for both Aurora MySQL and Aurora PostgreSQL. Aurora Auto Scaling enables your Aurora DB cluster to handle sudden increases in connectivity or workload. When the connectivity or workload decreases, Aurora Auto Scaling removes unnecessary Aurora Replicas so that you don't pay for unused provisioned DB instances.

You define and apply a scaling policy to an Aurora DB cluster. The scaling policy defines the minimum and maximum number of Aurora Replicas that Aurora Auto Scaling can manage. Based on the policy, Aurora Auto Scaling adjusts the number of Aurora Replicas up or down in response to actual workloads, determined by using Amazon CloudWatch metrics and target values.

[Using Amazon Aurora Auto Scaling with Aurora Replicas - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html)

[Create a read replica for an Amazon Aurora MySQL DB instance | AWS re:Post](https://repost.aws/knowledge-center/aurora-mysql-create-read-replica)

## High Availability

After you create the primary (writer) instance, you can create up to 15 read-only Aurora Replicas. The Aurora Replicas are also known as reader instances.

During day-to-day operations, you can offload some of the work for read-intensive applications by using the reader instances to process `SELECT` queries. When a problem affects the primary instance, one of these reader instances takes over as the primary instance. This mechanism is known as _failover_. Many Aurora features apply to the failover mechanism. For example, Aurora detects database problems and activates the failover mechanism automatically when necessary. Aurora also has features that reduce the time for failover to complete. Doing so minimizes the time that the database is unavailable for writing during a failover.

**Aurora is designed to recover as quickly as possible, and the fastest path to recovery is often to restart or to fail over to the same DB instance. Restarting is faster and involves less overhead than failover.**

To use a connection string that stays the same even when a failover promotes a new primary instance, you connect to the cluster endpoint. The _cluster endpoint_ always represents the current primary instance in the cluster. For more information about the cluster endpoint

[High availability for Amazon Aurora - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html)

### Fault tolerance for an Aurora DB cluster

If the primary instance in a DB cluster fails, Aurora automatically fails over to a new primary instance in one of two ways:

- By promoting an existing Aurora Replica to the new primary instance
- By creating a new primary instance

If the DB cluster has one or more Aurora Replicas, then an Aurora Replica is promoted to the primary instance during a failure event. A failure event results in a brief interruption, during which read and write operations fail with an exception. However, service is typically restored in less than 60 seconds, and often less than 30 seconds. To increase the availability of your DB cluster, we recommend that you create at least one or more Aurora Replicas in two or more different Availability Zones.

If the DB cluster doesn't contain any Aurora Replicas, then the primary instance is recreated in the same AZ during a failure event. A failure event results in an interruption during which read and write operations fail with an exception. Service is restored when the new primary instance is created, which typically takes less than 10 minutes. Promoting an Aurora Replica to the primary instance is much faster than creating a new primary instance.

## RDS Data API

By using RDS Data API (Data API), you can work with a web-services interface to your Aurora DB cluster. Data API doesn't require a persistent connection to the DB cluster. Instead, it provides a secure HTTP endpoint and integration with AWS SDKs. You can use the endpoint to run SQL statements without managing connections.

[Using RDS Data API - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html)

[Introducing the Data API for Amazon Aurora Serverless v2 and Amazon Aurora provisioned clusters | AWS Database Blog](https://aws.amazon.com/blogs/database/introducing-the-data-api-for-amazon-aurora-serverless-v2-and-amazon-aurora-provisioned-clusters/)

## Zero-ETL Integration

### Schema Changes

When you make schema changes to your source RDS for MySQL database in a zero-ETL integration with Amazon Redshift, the behavior depends on the type of change:

For tables that require resynchronization after schema changes, they will enter a "Syncing" state and won't be accessible in Amazon Redshift during this period. Certain operations that can trigger this resynchronization include:

- Adding a column in a specific position within a table
- Adding a timestamp column with a default value of CURRENT_TIMESTAMP
- Performing multiple column operations in a single command

For simpler schema changes, you can use the ALTER DATABASE command with the INTEGRATION REFRESH TABLES statement to resynchronize specific tables if they aren't properly reflected in Amazon Redshift:

```sql
ALTER DATABASE dbname INTEGRATION REFRESH TABLES table1, table2;
```

[Amazon RDS for MySQL - Redshift Cluster Zero-ETL Integration: schema change \| AWS re:Post](https://repost.aws/questions/QU0zSfLkNRR1OzzmfbFOC_GA/amazon-rds-for-mysql-redshift-cluster-zero-etl-integration-schema-change)

### Data Filtering

Aurora zero-ETL integrations support data filtering, which lets you control which data is replicated from your source Aurora DB cluster to your target data warehouse. Instead of replicating the entire database, you can apply one or more filters to selectively include or exclude specific tables. This helps you optimize storage and query performance by ensuring that only relevant data is transferred. Currently, filtering is limited to the database and table levels. **Column- and row-level filtering are not supported.**

Data filtering can be useful when you want to:

- Join certain tables from two or more different source clusters, and you don't need complete data from either cluster.
- Save costs by performing analytics using only a subset of tables rather than an entire fleet of databases.
- Filter out sensitive information—such as phone numbers, addresses, or credit card details—from certain tables.

[Data filtering for Aurora zero-ETL integrations - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/zero-etl.filtering.html)
