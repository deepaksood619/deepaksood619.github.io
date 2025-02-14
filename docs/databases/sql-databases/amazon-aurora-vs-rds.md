# Amazon Aurora vs RDS

[Aurora vs RDS: How to Choose the Right AWS Database Solution](https://www.percona.com/blog/when-should-i-use-amazon-aurora-and-when-should-i-use-rds-mysql/)

## Should I Use Aurora or RDS?

- If you are looking for a native HA solution, then you should use Aurora.
- For a read-intensive workload within an HA environment, Aurora is a perfect match. Combined with [ProxySQL for RDS](https://percona.com/blog/2018/04/03/leveraging-proxysql-with-aws-aurora-for-performance), you can get high flexibility.
- Aurora performance is great but is not as much as expected for write-intensive workloads when secondary indexes exist. In any case, you should benchmark both RDS MySQL and Aurora before taking the decision to migrate.  Performance depends much on workload and schema design.
- By choosing Amazon Aurora, you are fully dependent on Amazon for bug fixes or upgrades.
- If you need to use MySQL plugins, you should use [RDS MySQL](https://www.percona.com/resources/solution-brief/grow-your-business-aws-rds-mysql-environment).
- Aurora only supports InnoDB. If you need other engines, i.e., MyISAM, RDS MySQL is the only option.
- With RDS MySQL, you can use specific MySQL releases.
- Aurora is not included in the AWS free tier and costs a bit more than RDS MySQL. If you only need a managed solution to deploy services in a less expensive way and out-of-the-box availability is not your main concern, RDS MySQL is what you need.
- If, for any reason, Performance Schema must be ON, you should not enable this on Amazon Aurora MySQL T2 instances. With the Performance Schema enabled, the T2 instance may run out of memory.
- For both products, you should carefully examine the known issues and limitations listed here [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.KnownIssuesAndLimitations.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.KnownIssuesAndLimitations.html) and here [https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.AuroraMySQL.html](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.AuroraMySQL.html).

[AWS — Difference between Amazon Aurora and Amazon RDS | by Ashish Patel | Awesome Cloud | Medium](https://medium.com/awesome-cloud/aws-difference-between-amazon-aurora-and-amazon-rds-comparison-aws-aurora-vs-aws-rds-databases-60a69dbec41f)
