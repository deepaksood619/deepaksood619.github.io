# Monitoring

## Monitoring and Event Notifications

- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/MonitoringOverview.html
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Monitoring.html
- https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-monitoring-integration
- https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-enhanced-monitoring-integration
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.UsingDashboard.html

## Performance Monitoring

### Performance Insights

If we modify a DB instance to enable /disable Enhanced Monitoring or performance insights, the **changes will take effect without a reboot**

When you create or modify a DB instance, you can choose Turning on Performance Insights. To get the required IAM permissions to access Performance Insights as a user, contact your account administrator.

To grant the permissions, apply the provided custom policy to an IAM user or to a policy associated with an IAM user. Performance Insights is available for all RDS and Aurora engines.

Enabling Performance Insights in Amazon RDS requires specific permissions related to RDS and Performance Insights actions. To enable Performance Insights, the IAM user or role needs the following permissions:

- rds:ModifyDBCluster: This permission allows the user to modify the DB cluster to enable Performance Insights.
- rds:DescribeDBClusters: This permission allows the user to describe the details of the DB clusters, which is necessary to check the current configuration and status of the cluster.
- pi:DescribeDimensionKeys: This permission allows the user to describe dimension keys in Performance Insights. This is necessary for querying and analyzing performance data.
- pi:GetResourceMetrics: This permission allows the user to get resource metrics from Performance Insights. This is necessary for accessing and analyzing performance metrics.

#### Use cases

- Focus: Performance Insights focuses on providing deep visibility into database-level performance and query activity.
- Metrics: It captures and analyzes database-specific metrics such as SQL query execution time, throughput, active sessions, and wait events.
- Query Analysis: Performance Insights allows you to drill down into individual SQL queries, identify high-impact queries, and analyze their performance characteristics.
- Visualizations: It offers interactive visualizations and dashboards to help you understand database workload patterns, identify inefficiencies, and optimize query performance.
- Integration: Performance Insights integrates with the AWS Management Console and provides a user-friendly interface for monitoring and analyzing database performance.

#### Gotchas

- Not supported on the following DB instance classes: db.t2.micro, db.t2.small, db.t3.micro, db.t3.small, db.t4g.small

[Turning Performance Insights on and off - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.Enabling.html)

### Enhanced Monitoring

- **Focus:** Enhanced Monitoring primarily focuses on providing detailed system-level metrics and performance data for your RDS instances.
- **Metrics:** It collects and reports a wide range of OS-level metrics such as CPU utilization, memory usage, disk I/O, and network traffic.
- **Granularity:** Enhanced Monitoring captures metrics at a high granularity (typically 1-second intervals), allowing for detailed analysis of system-level performance.
- **Visibility:** It provides insights into the underlying infrastructure and helps you identify performance bottlenecks related to the operating system and resource utilization.
- **Integration:** Enhanced Monitoring integrates with Amazon CloudWatch, allowing you to view and analyze metrics alongside other CloudWatch metrics and alarms.
- enhanced monitoring is free for rds but cost of cloudwatch for logs will be incurred
- Enhanced monitoring doesn't require restarts of RDS or Aurora Database

#### Cost

**Enhanced Monitoring metrics are stored in the CloudWatch Logs instead of in CloudWatch metrics.** The cost of Enhanced Monitoring depends on the following factors:

- You are charged for Enhanced Monitoring only if you exceed the free tier provided by Amazon CloudWatch Logs. **Charges are based on CloudWatch Logs data transfer and storage rates.**
- The amount of information transferred for an RDS instance is directly proportional to the defined granularity for the Enhanced Monitoring feature. A smaller monitoring interval results in more frequent reporting of OS metrics and increases your monitoring cost. To manage costs, set different granularities for different instances in your accounts.
- **Usage costs for Enhanced Monitoring are applied for each DB instance that Enhanced Monitoring is enabled for**. Monitoring a large number of DB instances is more expensive than monitoring only a few.
- DB instances that support a more compute-intensive workload have more OS process activity to report and higher costs for Enhanced Monitoring.

##### Example Calculation

If you have an `m5.8xlarge` instance and enable Enhanced Monitoring, the cost might be calculated as follows:

Given general pricing trends:

- **30-Second Granularity**: May cost around $0.45 per instance per hour (estimate).
- **1-Minute Granularity**: Typically costs around $0.30 per instance per hour (estimate).

Monthly Cost Calculation:

- **30-Second Granularity**: $0.45 * 24 hours/day * 30 days/month = $324 per month (approximate).
- **1-Minute Granularity**: $0.30 * 24 hours/day * 30 days/month = $216 per month (approximate).
- **15-Minute Granularity**: $0.15 * 24 hours/day * 30 days/month = $108 per month (approximate).

**You do not need to restart your Amazon RDS instance to enable Enhanced Monitoring.**

[OS metrics in Enhanced Monitoring - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring-Available-OS-Metrics.html)

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

## Audit Logs

[Publishing Amazon Aurora MySQL logs to Amazon CloudWatch Logs - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.CloudWatch.html)

[Turn on audit logging for an Amazon Aurora MySQL DB cluster | AWS re:Post](https://repost.aws/knowledge-center/advanced-audit-aurora-mysql-cloudwatch)

- server_audit_logs_upload
- server_audit_events
- server_audit_incl_users
- server_audit_excl_users - Wildcard - %test%

[Using Advanced Auditing with an Amazon Aurora MySQL DB cluster - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html)

[Configuring an audit log to capture database activities for Amazon RDS for MySQL and Amazon Aurora with MySQL compatibility | AWS Database Blog](https://aws.amazon.com/blogs/database/configuring-an-audit-log-to-capture-database-activities-for-amazon-rds-for-mysql-and-amazon-aurora-with-mysql-compatibility/)
