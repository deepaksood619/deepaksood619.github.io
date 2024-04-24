# Amazon RDS

Managed Relational Database Service for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB

### Storage

[Amazon RDS DB instance storage - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html)

### Amazon RDS Proxy

Amazon RDS Proxy is a fully managed, highly available database proxy for [Amazon Relational Database Service (RDS)](https://aws.amazon.com/rds/) that makes applications more scalable, more resilient to database failures, and more secure.

Many applications, including those built on modern [serverless architectures](https://aws.amazon.com/serverless/), can have a large number of open connections to the database server, and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability. With RDS Proxy, failover times for Aurora and RDS databases are reduced by up to 66% and database credentials, authentication, and access can be managed through integration with AWS Secrets Manager and AWS Identity and Access Management (IAM).

[Amazon RDS Proxy](https://aws.amazon.com/rds/proxy)

## Links

- [Amazon Aurora Costs](databases/sql-databases/aws-aurora/costs.md)
