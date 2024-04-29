# Others

## Auditing

https://aws.amazon.com/premiumsupport/knowledge-center/advanced-audit-aurora-mysql-cloudwatch

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html

## Autoscaling

To meet your connectivity and workload requirements, Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas provisioned for an Aurora DB cluster using single-master replication. Aurora Auto Scaling is available for both Aurora MySQL and Aurora PostgreSQL. Aurora Auto Scaling enables your Aurora DB cluster to handle sudden increases in connectivity or workload. When the connectivity or workload decreases, Aurora Auto Scaling removes unnecessary Aurora Replicas so that you don't pay for unused provisioned DB instances.
You define and apply a scaling policy to an Aurora DB cluster. The scaling policy defines the minimum and maximum number of Aurora Replicas that Aurora Auto Scaling can manage. Based on the policy, Aurora Auto Scaling adjusts the number of Aurora Replicas up or down in response to actual workloads, determined by using Amazon CloudWatch metrics and target values.

## High Availability

After you create the primary (writer) instance, you can create up to 15 read-only Aurora Replicas. The Aurora Replicas are also known as reader instances.

During day-to-day operations, you can offload some of the work for read-intensive applications by using the reader instances to process `SELECT` queries. When a problem affects the primary instance, one of these reader instances takes over as the primary instance. This mechanism is known as _failover_. Many Aurora features apply to the failover mechanism. For example, Aurora detects database problems and activates the failover mechanism automatically when necessary. Aurora also has features that reduce the time for failover to complete. Doing so minimizes the time that the database is unavailable for writing during a failover.

**Aurora is designed to recover as quickly as possible, and the fastest path to recovery is often to restart or to fail over to the same DB instance. Restarting is faster and involves less overhead than failover.**

To use a connection string that stays the same even when a failover promotes a new primary instance, you connect to the cluster endpoint. The _cluster endpoint_ always represents the current primary instance in the cluster. For more information about the cluster endpoint

[High availability for Amazon Aurora - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html)

### Fault tolerance for an Aurora DB cluster

If the primary instance in a DB cluster fails, Aurora automatically fails over to a new primary instance in one of two ways:

- By promoting an existing Aurora Replica to the new primary instance
- By creating a new primary instance

If the DB cluster has one or more Aurora Replicas, then an Aurora Replica is promoted to the primary instance during a failure event. A failure event results in a brief interruption, during which read and write operations fail with an exception. However, service is typically restored in less than 60 seconds, and often less than 30 seconds. To increase the availability of your DB cluster, we recommend that you create at least one or more Aurora Replicas in two or more different Availability Zones.

If the DB cluster doesn't contain any Aurora Replicas, then the primary instance is recreated in the same AZ during a failure event. A failure event results in an interruption during which read and write operations fail with an exception. Service is restored when the new primary instance is created, which typically takes less than 10 minutes. Promoting an Aurora Replica to the primary instance is much faster than creating a new primary instance.

## Monitoring and Event Notifications

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/MonitoringOverview.html
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Monitoring.html
- https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-monitoring-integration
- https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-enhanced-monitoring-integration
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.UsingDashboard.html

## Performance Monitoring

### Why does Performance Insights measure database load in sessions?

Sessions, in this case, is shorthand for "average active sessions," sometimes abbreviated "AAS." An active session is a database connection that has submitted a request to the database but has not yet received the response. Measuring the average number of active concurrent sessions over time provides a clear picture of the load on the database.

### The Performance Insights dashboard

The dashboard is divided into two parts:

- At the top, aload chartshows the recent history of database load in units of average active sessions (AAS).
- On the bottom, atop activity tableshows what is contributing to database load for the time interval on the load chart.

By default, the load chart is color coded by wait type. Breaking down database load by wait types can help you understand what kind of database mechanisms are chiefly contributing to the load. Top activity shows SQL statements by default. Understanding what SQL is chiefly contributing to the load can help you understand what parts of your application are responsible for bottlenecks.

### Tuning a database load bottleneck

A session is database terminology for a database connection serving an application. Sessions that are waiting during database requests contribute to database load. A session might wait for a response for many reasons. A common reason is that the request is executing and using CPU to complete. However, the request could also be waiting for I/O to complete, for a lock, for writes to storage, for space in a buffer area, or for any number of other reasons. These various wait states appear in the load chart as stacked color areas. The colors correspond to wait states that can be seen in the legend on the right side. The most prominent colors in the load chart are the greatest contributors to database load.

An important visual cue in the load chart is theMax CPUline. This line represents the number of vCPUs (virtual central processing units) on the host. If more sessions are active in CPU wait than there are vCPUs, it means that the instance is running beyond CPU capacity. Whenever the overall load goes over theMax CPUline, there might be a bottleneck. The bottleneck could be because of CPU saturation, or it could be caused by one of the many other ways that sessions wait in a database.

### CPU bottleneck

In the preceding examples, there are two vCPU cores, so only two sessions can concurrently run on the CPU without queueing. If three sessions run on the CPU concurrently, then, at any given point in time, at least one of them is waiting in the run queue and therefore not getting work done.

https://aws.amazon.com/blogs/database/analyzing-amazon-rds-database-workload-with-performance-insights

## Metrics

### Freeable memory

It includes cached memory and memory used for buffers (besides what's really free/unused). They'll all be freed if an application requests more memory than what's free.

If you have a lot of freeable memory you can downgrade to a smaller instance. If you are running out of freeable memory, then it is time to upgrade.

The freeable memory includes the amount of physical memory left unused by the system plus the total amount of buffer or page cache memory that are free and available.

So it's freeable memory across the entire system. While MySQL is the main consumer of memory on the host we do have internal processes in addition to the OS that use up a small amount of additional memory.

If you see your freeable memory near 0 or also start seeing swap usage then you may need to scale up to a larger instance class or adjust MySQL memory settings. For example decreasing the innodb_buffer_pool_size (by default set to 75% of physical memory) is one way example of adjusting MySQL memory settings.
