# Amazon RDS

Managed Relational Database Service for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB

### Amazon RDS Proxy

Amazon RDS Proxy is a fully managed, highly available database proxy for [Amazon Relational Database Service (RDS)](https://aws.amazon.com/rds/) that makes applications more scalable, more resilient to database failures, and more secure.

Many applications, including those built on modern [serverless architectures](https://aws.amazon.com/serverless/), can have a large number of open connections to the database server, and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability. With RDS Proxy, failover times for Aurora and RDS databases are reduced by up to 66% and database credentials, authentication, and access can be managed through integration with AWS Secrets Manager and AWS Identity and Access Management (IAM).

[Amazon RDS Proxy](https://aws.amazon.com/rds/proxy)

## Autoscaling

[Scaling Your Amazon RDS Instance Vertically and Horizontally | AWS Database Blog](https://aws.amazon.com/blogs/database/scaling-your-amazon-rds-instance-vertically-and-horizontally/)

[Distribute read requests across multiple Amazon RDS read replicas | AWS re:Post](https://repost.aws/knowledge-center/requests-rds-read-replicas)

[**Managing auto-scaling of RDS** on AWS using the AWS CLI and Bash | by Renato Losio | funambol-techblog | Medium](https://medium.com/funambol-techblog/managing-auto-scaling-of-rds-on-aws-using-the-aws-cli-and-bash-9b1aa970ade3)

[amazon web services - Does AWS support Autoscaling for RDS Instance - Stack Overflow](https://stackoverflow.com/questions/34065157/does-aws-support-autoscaling-for-rds-instance)

[Scaling a RDS Instance vertically & automatically | Renato Losio](https://cloudiamo.com/2016/12/18/scaling-a-rds-instance-vertically-automatically/)

## Storage

Via Snapshot - You can’t reduce the allocated storage from what you originally configured for your source database snapshot.

After you create an Amazon RDS DB instance, you can't modify the allocated storage size of the DB instance to decrease the total storage space it uses. To decrease the storage size of your DB instance, create a new DB instance that has less provisioned storage size. Then, migrate your data into the new DB instance using one of the following methods:

- Use the database engine's native dump and restore method. This method causes some downtime.
- Use AWS Database Migration Service (AWS DMS) for minimal downtime.

[Decrease the storage size of an Amazon RDS DB Instance | AWS re:Post](https://repost.aws/knowledge-center/rds-db-storage-size)

[Amazon RDS DB instance storage - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html)

### Managing capacity automatically with Amazon RDS storage autoscaling

With storage autoscaling enabled, when Amazon RDS detects that you are running out of free database space it automatically scales up your storage. Amazon RDS starts a storage modification for an autoscaling-enabled DB instance when these factors apply:

- Free available space is less than or equal to 10 percent of the allocated storage.
- The low-storage condition lasts at least five minutes.
- At least six hours have passed since the last storage modification, or storage optimization has completed on the instance, whichever is longer.

The additional storage is in increments of whichever of the following is greater:

- 10 GiB
- 10 percent of currently allocated storage
- Predicted storage growth exceeding the current allocated storage size in the next 7 hours based on the `FreeStorageSpace` metrics from the past hour.

[Working with storage for Amazon RDS DB instances - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html)

## Replication

[Working with MySQL read replicas - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.ReadReplicas.html)

You can create up to 15 read replicas from one DB instance within the same Region. For replication to operate effectively, each read replica should have the same amount of compute and storage resources as the source DB instance. If you scale the source DB instance, also scale the read replicas.

RDS for MySQL supports cascading read replicas.

You can run multiple read replica create and delete actions at the same time that reference the same source DB instance. When you perform these actions, stay within the limit of 15 read replicas for each source instance.

A read replica of a MySQL DB instance can't use a lower DB engine version than its source DB instance.

### Configuring replication filters with MySQL

You can use replication filters to specify which databases and tables are replicated with a read replica. Replication filters can include databases and tables in replication or exclude them from replication.

The following are some use cases for replication filters:

- To reduce the size of a read replica. With replication filtering, you can exclude the databases and tables that aren't needed on the read replica.
- To exclude databases and tables from read replicas for security reasons.
- To replicate different databases and tables for specific use cases at different read replicas. For example, you might use specific read replicas for analytics or sharding.
- For a DB instance that has read replicas in different AWS Regions, to replicate different databases or tables in different AWS Regions.

#### Setting replication filtering parameters for RDS for MySQL

To configure replication filters, set the following replication filtering parameters on the read replica:

- `replicate-do-db` – Replicate changes to the specified databases. When you set this parameter for a read replica, only the databases specified in the parameter are replicated.

- `replicate-ignore-db` – Don't replicate changes to the specified databases. When the `replicate-do-db` parameter is set for a read replica, this parameter isn't evaluated.

- `replicate-do-table` – Replicate changes to the specified tables. When you set this parameter for a read replica, only the tables specified in the parameter are replicated. Also, when the `replicate-do-db` or `replicate-ignore-db` parameter is set, make sure to include the database that includes the specified tables in replication with the read replica.

- `replicate-ignore-table` – Don't replicate changes to the specified tables. When the `replicate-do-table` parameter is set for a read replica, this parameter isn't evaluated.

- `replicate-wild-do-table` – Replicate tables based on the specified database and table name patterns. The `%` and `_` wildcard characters are supported. When the `replicate-do-db` or `replicate-ignore-db` parameter is set, make sure to include the database that includes the specified tables in replication with the read replica.

- `replicate-wild-ignore-table` – Don't replicate tables based on the specified database and table name patterns. The `%` and `_` wildcard characters are supported. When the `replicate-do-table` or `replicate-wild-do-table` parameter is set for a read replica, this parameter isn't evaluated.

### Configuring delayed replication with MySQL

You can use delayed replication as a strategy for disaster recovery. With delayed replication, you specify the minimum amount of time, in seconds, to delay replication from the source to the read replica. In the event of a disaster, such as a table deleted unintentionally, you complete the following steps to recover from the disaster quickly:

- Stop replication to the read replica before the change that caused the disaster is sent to it.

    Use the [mysql.rds_stop_replication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-stored-proc-replicating.html#mysql_rds_stop_replication) stored procedure to stop replication.

- Start replication and specify that replication stops automatically at a log file location.

    You specify a location just before the disaster using the [mysql.rds_start_replication_until](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-stored-proc-replicating.html#mysql_rds_start_replication_until) stored procedure.

- Promote the read replica to be the new source DB instance by using the instructions in [Promoting a read replica to be a standalone DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Promote).

### Using cascading read replicas with RDS for MySQL

RDS for MySQL supports cascading read replicas. With _cascading read replicas_, you can scale reads without adding overhead to your source RDS for MySQL DB instance.

With cascading read replicas, your RDS for MySQL DB instance sends data to the first read replica in the chain. That read replica then sends data to the second replica in the chain, and so on. The end result is that all read replicas in the chain have the changes from the RDS for MySQL DB instance, but without the overhead solely on the source DB instance.

### Promoting Read Replica

You can promote a read replica into a standalone DB instance. If a source DB instance has several read replicas, promoting one of the read replicas to a DB instance has no effect on the other replicas.

When you promote a read replica, RDS reboots the DB instance before making it available. The promotion process can take several minutes or longer to complete, depending on the size of the read replica.

[Working with DB instance read replicas - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Promote)

[amazon web services - What all happens when we promote a read replica to separate RDS instance? - Stack Overflow](https://stackoverflow.com/questions/13730515/what-all-happens-when-we-promote-a-read-replica-to-separate-rds-instance)

#### Characteristics of a promoted read replica

After you promote the read replica, it ceases to function as a read replica and becomes a standalone DB instance. The new standalone DB instance has the following characteristics:

- The standalone DB instance retains the option group and the parameter group of the pre-promotion read replica.
- You can create read replicas from the standalone DB instance and perform point-in-time restore operations.
- You can't use the DB instance as a replication target because it is no longer a read replica.

## Links

- [High Availability (HA)](databases/sql-databases/aws-aurora/high-availability-ha.md)
- [Amazon Aurora Costs](databases/sql-databases/aws-aurora/costs.md)
- [Optimizing costs in Amazon RDS | AWS Database Blog](https://aws.amazon.com/blogs/database/optimizing-costs-in-amazon-rds/)
- [Resolve an Amazon RDS instance that is in an incompatible-parameters state | AWS re:Post](https://repost.aws/knowledge-center/rds-incompatible-parameters)
