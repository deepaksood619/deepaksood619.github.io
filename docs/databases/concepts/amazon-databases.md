## Amazon Databases

- [Amazon Aurora](databases-sql/aws-aurora/readme.md)
- [Amazon RDS](databases-sql/amazon-rds.md)

### Amazon RDS on VMWare

Automate on-premises database management

### Amazon DynamoDB

Managed NoSQL Database

### Amazon DocumentDB (With MongoDB Compatibility)

Fully Managed Document Database

[Amazon DocumentDB: How It Works - Amazon DocumentDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/how-it-works.html)

[Amazon DocumentDB cluster storage configurations - Amazon DocumentDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-storage-configs.html)

### Amazon ElastiCache

In-memory Data Store and Cache- Query Caching

- Delayed Transactions
- Read / Write Splitting
- Connection Polling

Elasticache between rds and application - https://aws.amazon.com/blogs/database/automating-sql-caching-for-amazon-elasticache-and-amazon-rds

https://www.heimdalldata.com/aws

http://demoa.heimdalldata.com:8087/docs/theory/caching.html

Amazon ElastiCache can be used to significantly improve latency and throughput for many read-heavy application workloads (such as social networking, gaming, media sharing, leaderboard, and Q&A portals) or compute-intensive workloads (such as a recommendation engine) by allowing you to store the objects that are often read in the cache.

#### ElastiCache using Redis

https://aws.amazon.com/redis

### Amazon Redshift

Fast, Simple, Cost-effecitive Data Warehousing

### Amazon Neptune

Fully Managed Graph Database Service

Amazon Neptune is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets. The core of Amazon Neptune is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency. Neptune powers graph use cases such as recommendation engines, fraud detection, knowledge graphs, drug discovery, and network security.

Amazon Neptune is highly available, with read replicas, point-in-time recovery, continuous backup to Amazon S3, and replication across Availability Zones. Neptune is secure with support for HTTPS encrypted client connections and encryption at rest. Neptune is fully managed, so you no longer need to worry about database management tasks such as hardware provisioning, software patching, setup, configuration, or backups.

Amazon Neptune can quickly and easily process large sets of user-profiles and interactions to build social networking applications. Neptune enables highly interactive graph queries with high throughput to bring social features into your applications. For example, if you are building a social feed into your application, you can use Neptune to provide results that prioritize showing your users the latest updates from their family, from friends whose updates they ‘Like,’ and from friends who live close to them.

[Create a Virtual Knowledge Graph with Amazon Neptune and an Amazon S3 data lake | AWS Database Blog](https://aws.amazon.com/blogs/database/create-a-virtual-knowledge-graph-with-amazon-neptune-and-an-amazon-s3-data-lake/)

### AWS Database Migration Service (DMS)

Migrate Databases with Minimal Downtime

https://aws.amazon.com/dms

https://aws.amazon.com/blogs/database/archiving-data-from-relational-databases-to-amazon-glacier-via-aws-dms

https://aws.amazon.com/blogs/database/automating-aws-dms-migration-tasks

### AWS Managed Apache Cassandra Service

Amazon Managed Apache Cassandra Service is a scalable, highly available, and managed Apache Cassandra--compatible database service. With Amazon Managed Cassandra Service, you can run your Cassandra workloads on AWS using the same Cassandra application code and developer tools that you use today. You don't have to provision, patch, or manage servers, and you don't have to install, maintain, or operate software. Amazon Managed Cassandra Service is serverless, so you pay for only the resources you use and the service automatically scales tables up and down in response to application traffic. You can build applications that serve thousands of requests per second with virtually unlimited throughput and storage.

https://aws.amazon.com/mcs

### Amazon TimeStream

Fully Managed TimeSeries Database

### Amazon Managed Apache Cassandra Service

Managed Cassandra-compatible database

### Amazon Quantum Ledger Database (QLDB)

Fully managed ledged database

| **Database Type** | **Use Cases** | **AWS Service** |  |  |
|---|---|---|---|---|
| Relational | Traditional applications, ERP, CRM, e-commerce | [Amazon Aurora](https://aws.amazon.com/rds/aurora/?c=db&sec=srv) | [Amazon RDS](https://aws.amazon.com/rds/?c=db&sec=srv) | [Amazon Redshift](https://aws.amazon.com/redshift/?c=db&sec=srv) |
| Key-value | High-traffic web apps, e-commerce systems, gaming applications | [Amazon DynamoDB](https://aws.amazon.com/dynamodb/?c=db&sec=srv) |  |  |
| In-memory | Caching, session management, gaming leaderboards, geospatial applications | [Amazon ElastiCache for Memcached](https://aws.amazon.com/elasticache/memcached/?c=db&sec=srv) | [Amazon ElastiCache for Redis](https://aws.amazon.com/elasticache/redis/?c=db&sec=srv) |  |
| Document | Content management, catalogs, user profiles | [Amazon DocumentDB](https://aws.amazon.com/documentdb/?c=db&sec=srv) |  |  |
| Wide-column | High scale industrial apps for equipment maintenance, fleet management, and route optimization | [Amazon Managed Apache Cassandra Service](https://aws.amazon.com/mcs/?c=db&sec=srv) |  |  |
| Graph | Fraud detection, social networking, recommendation engines | [Amazon Neptune](https://aws.amazon.com/neptune/?c=db&sec=srv) |  |  |
| Time series | IoT applications, DevOps, industrial telemetry | [Amazon Timestream](https://aws.amazon.com/timestream/?c=db&sec=srv) |  |  |
| Ledger | Systems of record, supply chain, registrations, banking transactions | [Amazon Quantum Ledger Database](https://aws.amazon.com/qldb/?c=db&sec=srv) |  |  |

https://aws.amazon.com/products/databases
