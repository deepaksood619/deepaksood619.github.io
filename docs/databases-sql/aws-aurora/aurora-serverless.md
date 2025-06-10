# Amazon Aurora Serverless

Amazon Aurora Serverless is an on-demand, autoscaling configuration for Amazon Aurora. AnAurora Serverless DB cluster is a DB cluster that automatically starts up, shuts down, and scales up or down its compute capacity based on your application's needs. Aurora Serverless provides a relatively simple, cost-effective option for infrequent, intermittent, or unpredictable workloads. It can provide this because it automatically starts up, scales compute capacity to match your application's usage, and shuts down when it's not in use.

A non-Serverless DB cluster for Aurora is called a provisioned DB cluster. Aurora Serverless clusters and provisioned clusters both have the same kind of high-capacity, distributed, and highly available storage volume.

### Serverless V2

Amazon Aurora Serverless v2, currently in preview, scales instantly from hundreds to hundreds-of-thousands of transactions in a fraction of a second. As it scales, it adjusts capacity in fine-grained increments to provide just the right amount of database resources that the application needs. There is no database capacity for you to manage, you pay only for the capacity your application consumes, and you can save up to 90% of your database cost compared to the cost of provisioning capacity for peak load.

Aurora Serverless v2 (Preview) supports all manner of database workloads, from development and test environments, websites, and applications that have infrequent, intermittent, or unpredictable workloads to the most demanding, business critical applications that require high scale and high availability. It supports the full breadth of Aurora features, including Global Database, Multi-AZ deployments, and read replicas. Aurora Serverless v2 (Preview) is currently available in preview for Aurora with MySQL compatibility only.

#### Links

- [Using Amazon Aurora Serverless v1 - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html)
- [Using Aurora Serverless v2 - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html)
- [Performance and scaling for Aurora Serverless v2 - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html)
- [Aurora Serverless V2 Setup Tutorial with Postgres - YouTube](https://www.youtube.com/watch?v=0R4s1Al0F1c&ab_channel=BeABetterDev)
- [Introduction and Deep Dive for Amazon Aurora Serverless v2 - AWS Online Tech Talks - YouTube](https://www.youtube.com/watch?v=_2o7vVAxst0&ab_channel=AWSDevelopers)

## Important points

- You can't give an Aurora Serverless DB cluster a public IP address. You can access an Aurora Serverless DB cluster only from within a virtual private cloud (VPC) based on the Amazon VPC service.

[Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html)

[How Aurora Serverless v2 works - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.how-it-works.html)

## Migration

[Best practices for migrating MySQL RDS to Aurora Serverless | AWS re:Post](https://repost.aws/questions/QUj0HHjReFTemiPMxU90QJgA/best-practices-for-migrating-mysql-rds-to-aurora-serverless)

## Links

- [Getting Started with Amazon Aurora Serverless v2 | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=UJIDaVmoRT0&ab_channel=AmazonWebServices)
- [Amazon Aurora Serverless | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=xKFA6PJgp0o&ab_channel=AmazonWebServices)
- [Amazon Aurora Serverless V2 Is Finally Here And Its (Mostly) Awesome - YouTube](https://www.youtube.com/watch?v=qVky3isVKok&ab_channel=BeABetterDev)
- [Getting Started with Amazon Aurora Serverless v2- AWS Database in 15 - YouTube](https://www.youtube.com/watch?v=uZJMrciwBYo&ab_channel=AWSDevelopers)
- [Essential Strategies for Aurora Serverless v2 Adoption | AWS Events - YouTube](https://www.youtube.com/watch?v=by7WQ1igKl0&ab_channel=AWSEvents)
- [Aurora Serverless v2: Why You Need It, New Features and Pricing](https://lumigo.io/aws-serverless-ecosystem/aws-aurora-serverless/)
