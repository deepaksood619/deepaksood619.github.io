# Database Activity/Active Monitoring (DAM)

**Database activity monitoring (DAM)** refers to a suite of tools that can be used to support the ability to identify and report on fraudulent, illegal or other undesirable behavior, with minimal impact on user operations and productivity. The tools, which have evolved from basic analysis of user activity in and around relational database management systems (RDBMSs) to encompass a more comprehensive set of capabilities, such as discovery and classification, vulnerability management, application-level analysis, intrusion prevention, support for unstructured data security, identity and access management integration, and risk management support.

DAM stands for Database Activity Monitoring, referring to any solution that is used to actively monitor and analyze database activity. Database Activity Monitoring tools and technology are multipurpose, typically being used by organizations both to fulfill specific compliance criteria, as well as protect their most sensitive data from external hackers and malicious insiders.

[What is Database Activity Monitoring? DAM Explained - Cyral](https://cyral.com/glossary/database-activity-monitoring/)

## Main Capabilities of Database Activity Monitoring Tools

- Monitor and audit all database activity independently, including SELECT transactions and users’ activities, without performance degradation. Tools can work with multiple DBMSs and normalize transactions from different DBMSs, despite differences between SQL flavors.
- Securely store the database activity outside the monitored database.
- Independently monitor and audit all database activity, including administrator activity and SELECT query transactions. Tools can record all SQL transactions: DML, DDL, DCL (and sometimes TCL).
- Aggregate and correlate database activities from multiple heterogeneous database management systems.
- Enforce separation of duties of database administrators, administrator activities, and prevent the manipulation or tampering of recorded activities or logs.
- Securely store the audit logs to a central server outside the audited database.
- Ensure that a service account only accesses a database from a defined source IP and runs a narrow group of authorized queries. This policy can alert you to compromises of a service account either from the system that generally uses it or if the account credentials show up in a connection from an unexpected system.
- Enforce separation of duties by monitoring and logging database administrator activities.
- Generate alerts whenever policy violations are detected and generate alerts for rule-based or heuristic-based policy violations. For example, you might create a rule to create an alert each time a privileged user performs a SELECT query that returns more than five results from a credit card column. The trigger alerts you to the possibility that the application has been compromised via SQL injection or other attacks.

## Tools

[AWS Marketplace: SecureSphere Database Activity Monitor for AWS (BYOL)](https://aws.amazon.com/marketplace/pp/prodview-3wa5bmj5ol4g4)

[Monitor Amazon Aurora Database Activities Using DataSunrise Database Security | AWS Database Blog](https://aws.amazon.com/blogs/database/monitor-amazon-aurora-database-activities-using-datasunrise-database-security/)

[Database Activity Monitoring (DAM) - Satori](https://satoricyber.com/glossary/dam-database-activity-monitoring/)

Aurora - [Amazon Aurora Enables Database Activity Monitoring with CloudWatch Logs](https://aws.amazon.com/about-aws/whats-new/2017/09/amazon-aurora-enables-database-activity-monitoring-with-cloudwatch-logs/)

- [Build proactive database monitoring for Amazon RDS with Amazon CloudWatch Logs, AWS Lambda, and Amazon SNS | AWS Database Blog](https://aws.amazon.com/blogs/database/build-proactive-database-monitoring-for-amazon-rds-with-amazon-cloudwatch-logs-aws-lambda-and-amazon-sns/)
- [Monitoring MySQL-compatible edition of Amazon Aurora Audit Events with Amazon CloudWatch | AWS Database Blog](https://aws.amazon.com/blogs/database/monitoring-amazon-aurora-audit-events-with-amazon-cloudwatch/)
- [how can i enable Database active monitoring (DAM) on RDS postgresql | AWS re:Post](https://repost.aws/questions/QUgtKfclpwSumFcvCv9aZ8Hg/how-can-i-enable-database-active-monitoring-dam-on-rds-postgresql)

## Database Monitoring

### Percona Monitoring and Management (PMM)

Percona Monitoring and Management (PMM) is an open-source database monitoring, management, and observability solution for MySQL, PostgreSQL, and MongoDB.

It allows you to observe the health of your database systems, explore new patterns in their behavior, troubleshoot them and perform database management operations no matter where they are located on-prem or in the cloud.

- PMM **collects** thousands of out-of-the-box performance **metrics** from databases and their hosts.
- The PMM [web UI](https://docs.percona.com/percona-monitoring-and-management/get-started/interface.html) **visualizes data** in [dashboards](https://docs.percona.com/percona-monitoring-and-management/details/dashboards/).
- Additional features include [advisors for database health assessments](https://docs.percona.com/percona-monitoring-and-management/details/develop-checks/index.html).

[Monitoring Databases: A Product Comparison](https://www.percona.com/blog/monitoring-databases-a-product-comparison/)

[Percona Monitoring and Management](https://docs.percona.com/percona-monitoring-and-management/)

[Does PMM has DAM Capability? - Percona Community Forum](https://forums.percona.com/t/does-pmm-has-dam-capability/15695)

### MONyog (SQL Diagnostic Manager for MySQL)

[https://www.webyog.com/product/monyog](https://www.webyog.com/product/monyog)

MONyog MySQL Monitor and Advisor is a "MySQL DBA in a box" that helps MySQL DBAs manage more MySQL servers, tune their current MySQL servers and find and fix problems with their MySQL database applications before they can become serious problems or costly outages.

MONyog proactively monitors enterprise database environments and provides expert advice on how even those new to MySQL can tighten security, optimize performance and reduce downtime of their MySQL powered systems.

MONyog is more DBA focused and focuses on the MySQL configuration and queries.

#### Architecture

MONyog web server runs on Linux, monitoring MySQL on all platforms and also monitoring OS-data on Linux servers. To retrieve OS metrics, MONyog uses SSH. However, with this scenario (MONyog installed on a Linux machine) MONyog web-server/agent cannot collect Windows OS metrics.

Of course, the client where the MONyog output is viewed can be any browser supporting AJAX on any platform. MONyog can be installed on a remote PC as well as the server. It does not require processing, and with agentless monitoring it can collect and retrieve data from the server.

#### Advantages

- Setup and startup within two minutes
- Agentless
- Good query tools
- Manages configuration
- Great advisors for database tuning built-in
- Most comprehensive and detailed alerting

#### Disadvantages

- Cost per node
- Only supports MySQL

[MySQL Performance Metrics | Webyog](https://webyog.com/blog/monyog/top-performance-metrics-monitor-mysql-connections-buffer-pool-usage/)

### Others

- [Navisite - Database as a Service](https://www.navisite.com/services/platform-services/)
- [Best MDR Services in 2024 | Navisite](https://www.navisite.com/services/managed-detection-and-response/)
