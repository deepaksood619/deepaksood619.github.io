# Amazon RDS

Managed Relational Database Service for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB

### Storage

[Amazon RDS DB instance storage - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html)

### Amazon RDS Proxy

Amazon RDS Proxy is a fully managed, highly available database proxy for [Amazon Relational Database Service (RDS)](https://aws.amazon.com/rds/) that makes applications more scalable, more resilient to database failures, and more secure.

Many applications, including those built on modern [serverless architectures](https://aws.amazon.com/serverless/), can have a large number of open connections to the database server, and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability. With RDS Proxy, failover times for Aurora and RDS databases are reduced by up to 66% and database credentials, authentication, and access can be managed through integration with AWS Secrets Manager and AWS Identity and Access Management (IAM).

[Amazon RDS Proxy](https://aws.amazon.com/rds/proxy)

## Storage

After you create an Amazon RDS DB instance, you can't modify the allocated storage size of the DB instance to decrease the total storage space it uses. To decrease the storage size of your DB instance, create a new DB instance that has less provisioned storage size. Then, migrate your data into the new DB instance using one of the following methods:

- Use the database engine's native dump and restore method. This method causes some downtime.
- Use AWS Database Migration Service (AWS DMS) for minimal downtime.

[Decrease the storage size of an Amazon RDS DB Instance | AWS re:Post](https://repost.aws/knowledge-center/rds-db-storage-size)

### Managing capacity automatically with Amazon RDS storage autoscaling

With storage autoscaling enabled, when Amazon RDS detects that you are running out of free database space it automatically scales up your storage. Amazon RDS starts a storage modification for an autoscaling-enabled DB instance when these factors apply:

- Free available space is less than or equal to 10 percent of the allocated storage.
- The low-storage condition lasts at least five minutes.
- At least six hours have passed since the last storage modification, or storage optimization has completed on the instance, whichever is longer.

The additional storage is in increments of whichever of the following is greater:

- 10 GiB
- 10 percent of currently allocated storage
- Predicted storage growth exceeding the current allocated storage size in the next 7 hours based on the `FreeStorageSpace` metrics from the past hour.

[Working with storage for Amazon RDS DB instances - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html)

## Links

- [Amazon Aurora Costs](databases/sql-databases/aws-aurora/costs.md)
- [Optimizing costs in Amazon RDS | AWS Database Blog](https://aws.amazon.com/blogs/database/optimizing-costs-in-amazon-rds/)
