# Aurora Global Databases

Amazon Aurora global databases span multiple AWS Regions, enabling low latency global reads and providing fast recovery from the rare outage that might affect an entire AWS Region. An Aurora global database has a primary DB cluster in one Region, and up to five secondary DB clusters in different Regions.

You can scale up each secondary cluster independently, by adding one or more Aurora Replicas (read-only Aurora DB instances) to serve read-only workloads.

Only the primary cluster performs write operations. Clients that perform write operations connect to the DB cluster endpoint of the primary DB cluster. Aurora global database uses the cluster storage volume and not the database engine for replication.

Aurora global databases are designed for applications with a worldwide footprint. The read-only secondary DB clusters (AWS Regions) allow you to support read operations closer to application users. By using the write forwarding feature, you can also configure an Aurora global database so that secondary clusters send data to the primary.

## Advantages of Amazon Aurora global databases

By using Aurora global databases, you can get the following advantages:

- **Global reads with local latency** – If you have offices around the world, you can use an Aurora global database to keep your main sources of information updated in the primary AWS Region. Offices in your other Regions can access the information in their own Region, with local latency.

- **Scalable secondary Aurora DB clusters** – You can scale your secondary clusters by adding more read-only instances (Aurora Replicas) to a secondary AWS Region. The secondary cluster is read-only, so it can support up to 16 read-only Aurora Replica instances rather than the usual limit of 15 for a single Aurora cluster.

- **Fast replication from primary to secondary Aurora DB clusters** – The replication performed by an Aurora global database has little performance impact on the primary DB cluster. The resources of the DB instances are fully devoted to serve application read and write workloads.

- **Recovery from Region-wide outages** – The secondary clusters allow you to make an Aurora global database available in a new primary AWS Region more quickly (lower RTO) and with less data loss (lower RPO) than traditional replication solutions.

## Using write forwarding in an Amazon Aurora global database

You can reduce the number of endpoints that you need to manage for applications running on your Aurora global database, by using _write forwarding_. With write forwarding enabled, secondary clusters in an Aurora global database forward SQL statements that perform write operations to the primary cluster. The primary cluster updates the source and then propagates resulting changes back to all secondary AWS Regions.

The write forwarding configuration saves you from implementing your own mechanism to send write operations from a secondary AWS Region to the primary Region. Aurora handles the cross-Region networking setup. Aurora also transmits all necessary session and transactional context for each statement. The data is always changed first on the primary cluster and then replicated to the secondary clusters in the Aurora global database. This way, the primary cluster is the source of truth and always has an up-to-date copy of all your data.

[Using write forwarding in an Amazon Aurora global database - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html)

## Local Write Forwarding

_Local (in-cluster) write forwarding_ allows your applications to issue read/write transactions directly on an Aurora Replica. These transactions are then forwarded to the writer DB instance to be committed. You can use local write forwarding when your applications require _read-after-write consistency_, which is the ability to read the latest write in a transaction.

Read replicas receive updates asynchronously from the writer. Without write forwarding, you have to transact any reads that require read-after-write consistency on the writer DB instance. Or you have to develop complex custom application logic to take advantage of multiple read replicas for scalability. Your applications must fully split all read and write traffic, maintaining two sets of database connections to send the traffic to the correct endpoint. This development overhead complicates application design when the queries are part of a single logical session, or transaction, within the application. Moreover, because replication lag can differ among read replicas, it's difficult to achieve global read consistency across all instances in the database.

Write forwarding avoids the need to split those transactions or send them exclusively to the writer, which simplifies application development. This new capability makes it easy to achieve read scale for workloads that need to read the latest write in a transaction and aren't sensitive to write latency.

[Using local write forwarding in an Amazon Aurora MySQL DB cluster - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-write-forwarding.html)

## Aurora Limitless

[Announcing Amazon Aurora Limitless Database](https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-aurora-limitless-database/)

Amazon Aurora Limitless Database, which enables you to scale your Amazon Aurora clusters to millions of write transactions per second and manage petabytes of data. With this new capability, you can scale your relational database workloads on Aurora beyond the limits of a single Aurora writer instance without needing to create custom application logic or manage multiple databases.

Aurora Limitless Database makes it easy for you to scale your relational database workloads by providing a serverless endpoint that automatically distributes data and queries across multiple Amazon Aurora Serverless instances while maintaining the transactional consistency of a single database. Aurora Limitless Database offers capabilities such as distributed query planning and transaction management, eliminating the need for you to create custom solutions or manage multiple databases to scale. As your workloads increase, Aurora Limitless Database adds additional compute resources while staying within your specified budget, so there is no need to provision for peak, and compute automatically scales down when demand is low.
