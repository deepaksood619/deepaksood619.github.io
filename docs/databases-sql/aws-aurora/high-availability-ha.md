# High Availability (HA)

## RDS HA

### Read Replica vs Multi-AZ vs Multi-Region

Use Multi-AZ deployments for High Availability/Failover and Read Replicas for read scalability.

In Amazon RDS, [Multi-AZ](https://aws.amazon.com/rds/features/multi-az/) and read replicas are two different types of instances. The standby instance created for Multi-AZ deployment is not accessible and is only used for high availability. On the other hand, in [Amazon Aurora](https://aws.amazon.com/rds/aurora/), the Multi-AZ standby is just another read replica that is accessible. So for [high availability of an Aurora cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html), one read replica is required even if it’s unused.

**Confusion -** Well, Multi-AZ and Read Replica both have another database instance sitting in a separate AZ and in some sense, the Read Replicas seem to be "multi-AZ" because of that. This may be confusing to some, as it appears that both designs functions the same way. Well, actually that is not the case.

[AWS — Difference between Multi-AZ and Read Replicas in Amazon RDS | by Ashish Patel | Awesome Cloud | Medium](https://medium.com/awesome-cloud/aws-difference-between-multi-az-and-read-replicas-in-amazon-rds-60fe848ef53a)

### [AWS RDS Multi-AZ vs Read Replica](https://www.linkedin.com/pulse/aws-rds-multi-az-vs-read-replica-pavan-pusuluri/)

For your [MySQL](https://aws.amazon.com/rds/mysql/), [MariaDB](https://aws.amazon.com/rds/mariadb/), [PostgreSQL](https://aws.amazon.com/rds/postgresql/), [Oracle](https://aws.amazon.com/rds/oracle/), and [SQL Server](https://aws.amazon.com/rds/sqlserver/) database (DB) instances, you can use Amazon RDS Multi-AZ deployments. When you provision a Multi-AZ DB instance, Amazon RDS automatically creates a primary DB instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby DB instance. Since the endpoint for your DB instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.

Amazon RDS offers two replication options to enhance availability and performance:

### [Multi-AZ deployments](https://aws.amazon.com/rds/features/multi-az/)

Multi-AZ gives high availability and automatic failover. Amazon RDS creates a storage-level replica of the database in a second Availability Zone. It then synchronously replicates data from the primary to the standby DB instance for high availability. The primary DB instance serves application requests, while the standby DB instance remains ready to take over in case of a failure. Amazon RDS manages all aspects of failure detection, failover, and repair actions so the applications using the database can be highly available.

#### Benefits of Multi-AZ deployment

- Replication to a standby replica is synchronous which is highly durable.
- Endpoint of DB instance remains the same after a failover, the application can resume database operations without manual intervention.
- If a failure occurs, your availability impact is limited to time that automatic failover takes to complete. This helps to achieve increased availability.
- It reduces the impact of maintenance. RDS performs maintenance on the standby first, promotes the standby to primary master, and then performs maintenance on the old master which is now a standby replica.
- To prevent any negative impact of the backup process on performance, Amazon RDS creates a backup from the standby replica.
- When a problem is detected on the primary instance, it will automatically failover to the standby in the following conditions: 1) The primary DB instance fails. 2) An Availability Zone outage. 3) The DB instance server type is changed. 4) The operating system of DB instance is undergoing software patching. 5) Manual failover of DB instance was initiated using reboot with failover.

#### Multi-AZ Use Cases

- To get high availability, and enhance availability during planned system maintenance, and help protect databases against DB instance failure and Availability Zone disruption.
- To get data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups.
- Multi-AZ makes maintenance easy.

### [Read replicas](https://aws.amazon.com/rds/features/read-replicas/)

Read Replicas allow applications to scale their read operations across multiple database instances. The database engine replicates data asynchronously to the read replicas. The application sends the write requests (`INSERT`, `UPDATE`, and `DELETE`) to the primary database, and read requests (`SELECT`) can be load balanced across read replicas. In case of failure of the primary node, [you can manually promote a read replica to become the new primary database](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Promote).

#### Benefits of Read Replicas

- Read Replicas helps in decreasing load on the primary DB by serving read-only traffic.
- You can create Read Replicas within AZ, Cross-AZ or Cross-Region.
- Read Replica can be manually promoted as a standalone database instance.
- Read Replicas support Multi-AZ deployments.
- You can use Read Replicas to take logical backups, if you want to store the backups externally to RDS.
- You can have Read Replicas of Read Replicas.
- Read Replica helps to maintain a copy of databases in a different region for disaster recovery.
- You can have up to five Read Replicas per master, each with own DNS endpoint. Unlike a Multi-AZ standby replica, you can connect to each Read Replica and use them for read scaling.

#### Read Replicas Use Cases

- Business reporting or data warehousing scenarios where you might want business reporting queries to run against a read replica, rather than your production DB instance.
- Implementing disaster recovery. You can promote a read replica to a standalone instance as a disaster recovery solution if the primary DB instance fails.
- Scaling beyond the compute or I/O capacity of a single DB instance for read-heavy database workloads. You can direct this excess read traffic to one or more read replicas.
- Serving read traffic while the source DB instance is unavailable. In some cases, source DB instance might not be able to take I/O requests, for example due to I/O suspension for backups or scheduled maintenance. In these cases, you can direct read traffic to your read replicas.

| **Multi-AZ deployments**                                                                                            | **Multi-Region deployments**                                                                                          | **Read replicas**                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Main purpose is high availability                                                                                   | Main purpose is disaster recovery and local performance                                                               | Main purpose is scalability                                                                                                 |
| Non-Aurora: synchronous replication; Aurora: synchronous replication                                                | Asynchronous replication                                                                                              | Asynchronous replication                                                                                                    |
| Non-Aurora: only the primary instance is active; Aurora: all instances are active                                   | All regions are accessible and can be used for reads                                                                  | All read replicas are accessible and can be used for read scaling                                                           |
| Non-Aurora: automated backups are taken from standby; Aurora: automated backups are taken from shared storage layer | Automated backups can be taken in each region                                                                         | No backups configured by default                                                                                            |
| Always span at least two Availability Zones within a single region                                                  | Each region can have a Multi-AZ deployment                                                                            | Can be within an Availability Zone, Cross-AZ, or Cross-Region                                                               |
| Non-Aurora: database engine version upgrades happen on primary; Aurora: all instances are updated together          | Non-Aurora: database engine version upgrade is independent in each region; Aurora: all instances are updated together | Non-Aurora: database engine version upgrade is independent from source instance; Aurora: all instances are updated together |
| Automatic failover to standby (non-Aurora) or read replica (Aurora) when a problem is detected                      | Aurora allows promotion of a secondary region to be the primary                                                       | Can be manually promoted to a standalone database instance (non-Aurora) or to be the primary instance (Aurora)              |

### New Amazon RDS Multi-AZ Deployment Option With Two Readable Standby Instances

Starting today, we’re adding a new option to deploy RDS databases. This option combines automatic failover and read replicas: Amazon RDS Multi-AZ with two readable standby instances. This deployment option is available for MySQL and PostgreSQL databases. This is a [database cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) with one primary and two readable standby instances. It provides up to 2x faster transaction commit latency and automated failovers, typically under 35 seconds.

- write operations are faster
- failover operations are typically faster than in the Multi-AZ DB instance scenario
- the two standby instances are hot standbys
- leveraging local storage for transaction log optimizes replication

[New Amazon RDS for MySQL & PostgreSQL Multi-AZ Deployment Option: Improved Write Performance & Faster Failover | AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-rds-multi-az-db-cluster/)

[Configuring and managing a Multi-AZ deployment - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)

## Aurora HA

The Amazon Aurora PostgreSQL and Amazon Aurora MySQL engines include additional High Availability options. Even with a single database instance, Amazon Aurora increases availability by replicating your data six ways across three Availability Zones. This means that your DB cluster can tolerate a failure of an Availability Zone without any loss of data and only a brief interruption of service.

In addition, you can choose to run one or more Replicas in an Amazon Aurora DB cluster. If the primary instance in the DB cluster fails, RDS automatically promotes an existing Aurora Replica to be the new primary instance and updates the server endpoint so that your application can continue operation with no manual intervention. If no Replicas have been provisioned, RDS will automatically create a new replacement DB instance for you when a failure is detected.

[Amazon RDS High Availability | Cloud Relational Database | Amazon Web Services](https://aws.amazon.com/rds/ha/)
