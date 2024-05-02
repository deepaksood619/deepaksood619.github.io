# High Availability (HA)

## Read Replica vs Multi-AZ vs Multi-Region

In Amazon RDS, [Multi-AZ](https://aws.amazon.com/rds/features/multi-az/) and read replicas are two different types of instances. The standby instance created for Multi-AZ deployment is not accessible and is only used for high availability. On the other hand, in [Amazon Aurora](https://aws.amazon.com/rds/aurora/), the Multi-AZ standby is just another read replica that is accessible. So for [high availability of an Aurora cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html), one read replica is required even if it’s unused.

### RDS HA

For your [MySQL](https://aws.amazon.com/rds/mysql/), [MariaDB](https://aws.amazon.com/rds/mariadb/), [PostgreSQL](https://aws.amazon.com/rds/postgresql/), [Oracle](https://aws.amazon.com/rds/oracle/), and [SQL Server](https://aws.amazon.com/rds/sqlserver/) database (DB) instances, you can use Amazon RDS Multi-AZ deployments. When you provision a Multi-AZ DB instance, Amazon RDS automatically creates a primary DB instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby DB instance. Since the endpoint for your DB instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.

Amazon RDS offers two replication options to enhance availability and performance:

- [Multi-AZ deployments](https://aws.amazon.com/rds/features/multi-az/) gives high availability and automatic failover. Amazon RDS creates a storage-level replica of the database in a second Availability Zone. It then synchronously replicates data from the primary to the standby DB instance for high availability. The primary DB instance serves application requests, while the standby DB instance remains ready to take over in case of a failure. Amazon RDS manages all aspects of failure detection, failover, and repair actions so the applications using the database can be highly available.
- [Read replicas](https://aws.amazon.com/rds/features/read-replicas/) allow applications to scale their read operations across multiple database instances. The database engine replicates data asynchronously to the read replicas. The application sends the write requests (`INSERT`, `UPDATE`, and `DELETE`) to the primary database, and read requests (`SELECT`) can be load balanced across read replicas. In case of failure of the primary node, [you can manually promote a read replica to become the new primary database](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Promote).

#### New Amazon RDS Multi-AZ Deployment Option With Two Readable Standby Instances

Starting today, we’re adding a new option to deploy RDS databases. This option combines automatic failover and read replicas: Amazon RDS Multi-AZ with two readable standby instances. This deployment option is available for MySQL and PostgreSQL databases. This is a [database cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) with one primary and two readable standby instances. It provides up to 2x faster transaction commit latency and automated failovers, typically under 35 seconds.

- write operations are faster
- failover operations are typically faster than in the Multi-AZ DB instance scenario
- the two standby instances are hot standbys
- leveraging local storage for transaction log optimizes replication

[New Amazon RDS for MySQL & PostgreSQL Multi-AZ Deployment Option: Improved Write Performance & Faster Failover | AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-rds-multi-az-db-cluster/)

[Configuring and managing a Multi-AZ deployment - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)

### Aurora HA

The Amazon Aurora PostgreSQL and Amazon Aurora MySQL engines include additional High Availability options. Even with a single database instance, Amazon Aurora increases availability by replicating your data six ways across three Availability Zones. This means that your DB cluster can tolerate a failure of an Availability Zone without any loss of data and only a brief interruption of service.

In addition, you can choose to run one or more Replicas in an Amazon Aurora DB cluster. If the primary instance in the DB cluster fails, RDS automatically promotes an existing Aurora Replica to be the new primary instance and updates the server endpoint so that your application can continue operation with no manual intervention. If no Replicas have been provisioned, RDS will automatically create a new replacement DB instance for you when a failure is detected.

[Amazon RDS High Availability | Cloud Relational Database | Amazon Web Services](https://aws.amazon.com/rds/ha/)

## MySQL Enterprise High Availability

### High Availability with MySQL InnoDB Cluster

MySQL InnoDB Cluster delivers a complete high availability solution for MySQL. Each server in an InnoDB Cluster replicates data to all members of the cluster while providing fault tolerance, automated failover, and elasticity. MySQL InnoDB Cluster provides built-in group membership management, data consistency guarantees, node failure detection and database failover, without the need for manual intervention.

- MySQL Group Replication
- MySQL ReplicaSet
- MySQL ClusterSet
- MySQL Router
- MySQL Shell

#### Disaster Recovery with MySQL InnoDB ClusterSet

MySQL InnoDB ClusterSet provides disaster tolerance for InnoDB Cluster deployments by linking a primary InnoDB Cluster with one or more replicas of itself in different datacenters. InnoDB ClusterSet automatically manages replication from the primary cluster to the replica clusters using a dedicated ClusterSet replication channel. If the primary cluster becomes unavailable due to the loss of the data center or the loss of network connectivity, you can make a replica cluster active instead to restore the availability of the service.

[MySQL Enterprise High Availability](https://www.mysql.com/products/enterprise/high_availability.html)

[Presentation - MySQL Database High Availability Architectures](https://www.mysql.com/content/download/id/768/)

## MySQL NDB Cluster: High Availability

With its distributed, shared-nothing architecture, MySQL NDB Cluster has been carefully designed to deliver 99.999% availability ensuring resilience to failures and the ability to perform scheduled maintenance without downtime.

Protecting against outages:

- **Synchronous Replication** - Data within each data node is synchronously replicated to another data node.
- **Automatic Failover** - MySQL NDB Cluster's heartbeating mechanism instantly detects any failures and automatically fails over, typically within one second, to other nodes in the cluster, without interrupting service to clients.
- **Self Healing** - Failed nodes are able to self-heal by automatically restarting and resynchronizing with other nodes before re-joining the cluster, with complete application transparency
- **Shared Nothing Architecture, No Single Point of Failure** - each node has its own disk and memory, so the risk of a failure caused by shared components such as storage, is eliminated.
- **Geographical Replication** - Geographic replication enables nodes to be mirrored to remote data centers for disaster recovery.

MySQL NDB Cluster also protects against the estimated 30% of downtime resulting from scheduled maintenance activities by allowing on-line operations, including:

- On-Line schema updates
- On-Line scaling (adding nodes for capacity and performance)
- On-Line upgrades and patching of hosts, OS and database
- On-Line backup

[MySQL NDB Cluster: High Availability](https://www.mysql.com/products/cluster/availability.html)

## Master with Active Master (Circular Replication)

![](https://severalnines.com/wp-content/uploads/2022/05/05-mysql-rep-wp.jpeg)

Also known as ring topology, this setup requires two or more MySQL servers which act as master. All masters receive writes and generate binlogs with a few caveats:

- You need to set auto-increment offset on each server to avoid primary key collisions.
- There is no conflict resolution.
- MySQL Replication currently does not support any locking protocol between master and slave to guarantee the atomicity of a distributed update across two different servers.
- Common practice is to only write to one master and the other master acts as a hot-standby node. Still, if you have slaves below that tier, you have to switch to the new master manually if the designated master fails.

You can deploy this topology with ClusterControl 1.4 and later. Previously, ClusterControl would raise an alarm because two or more masters were currently running. One master will be configured as read-only while the other is writable. However, locking and conflict resolution need to be handled by the application itself. ClusterControl does not support two writable masters in a replication setup, one of those two masters has to be in read_only mode.

[MySQL replication for high availability | Severalnines](https://severalnines.com/resources/whitepapers/mysql-replication-high-availability/)

## Vitess

Vitess is a database clustering system for horizontal scaling of MySQL through generalized sharding.

By encapsulating shard-routing logic, Vitess allows application code and database queries to remain agnostic to the distribution of data onto multiple shards. With Vitess, you can even split and merge shards as your needs grow, with an atomic cutover step that takes only a few seconds.

### Traditional Transactional Architecture

![image](../../../media/Technologies-Tools-image1.jpg)

https://github.com/vitessio/vitess

https://vitess.io

https://www.planetscale.com/blog/videos-intro-to-vitess-its-powerful-capabilities-and-how-to-get-started

[PlanetScale: The world’s most advanced database platform](https://planetscale.com/)

## Others

- [What is MySQL High Availability? How to Choose a Solution](https://www.percona.com/blog/choosing-mysql-high-availability-solutions/)
- [What is MySQL High Availability? | Pure Storage](https://www.purestorage.com/au/knowledge/what-is-mysql-high-availability.html)
- [Architectures for high availability of MySQL clusters on Compute Engine  |  Cloud Architecture Center  |  Google Cloud](https://cloud.google.com/architecture/architectures-high-availability-mysql-clusters-compute-engine)