# Cost Optimization / Explorer / Billing

[Cost Optimization with AWS](https://aws.amazon.com/aws-cost-management/cost-optimization/)

[Cloud Financial Management with AWS](https://aws.amazon.com/aws-cost-management/)

### Region Costs

- Oregon - 333.98
- N.Virginia - 333.98
- Singapore - 440.74
- Hyderabad - 433.53

## AWS Cost Explorer

- **APS3:** Asia Pacific (Mumbai)
- **APS5:** Asia Pacific (Hyderabad)
- GDA - Glacier Deep Archive
- CUR - Cost and Usage Report - https://medium.com/@ayushsharma.in/taming-aws-costs-with-cost-and-usage-reports-aws-athena-d2536b35b234

### Different Costs Type

#### Unblended costs

The vast majority of AWS customers use the unblended cost dataset to understand their usage. This is the cost dataset presented to you on the Bills page. It’s the default option for analyzing costs using [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) or setting custom budgets using [AWS Budgets](https://aws.amazon.com/aws-cost-management/aws-budgets/).

Unblended costs represent your usage costs on the day they are charged to you. In finance terms, they represent your costs on a cash basis of accounting. For most of you, this is the only cost dataset that you will ever need.

#### Amortized costs

Viewing your amortized costs is useful in cases in which it doesn’t make sense to view your costs on the day that they were charged. Or, as many of finance owners say, it’s useful to view costs on an accrual basis rather than a cash basis. This cost dataset is especially useful for those of you who have purchased [AWS Reservations](https://aws.amazon.com/aws-cost-management/reserved-instance-reporting/) such as Amazon EC2 Reserved Instances.

Savings Plans and Reservations often have upfront or recurring monthly fees associated with them. As you can see in the first chart, these recurring fees are charged on the first day of the month. That can lead to a spike on one day, if you are using unblended costs as your cost dataset. When you toggle over to amortized costs, these recurring costs (as well as any upfront costs) are distributed evenly across the month.

#### Blended costs

Blended costs were originally created to support customers who chose to consolidate their billing under a single paying account. Nowadays, these costs are not used frequently due to the way that they are calculated.

Blended costs are calculated by multiplying each account’s service usage against something called a blended rate. A blended rate is the average rate of on-demand usage, as well as Savings Plans- and reservation-related usage, that is consumed by member accounts in an organization for a particular service.

[Understanding your AWS Cost Datasets: A Cheat Sheet | AWS Cloud Financial Management](https://aws.amazon.com/blogs/aws-cloud-financial-management/understanding-your-aws-cost-datasets-a-cheat-sheet/)

[AWS Cost Explorer now supports Hourly and Resource Level Granularity](https://aws.amazon.com/about-aws/whats-new/2019/11/aws-cost-explorer-supports-hourly-resource-level-granularity/)

[Resource-level data at daily granularity - AWS Cost Management](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-resource-daily.html)

- In Cost Explorer, you can enable resource-level data for your chosen AWS services at daily granularity for the past 14 days.
- We will disable resource-level data at daily granularity for your organization if no one in the organization accesses it in three consecutive months. However, if you need the data, you can re-enable it in Cost Management preferences.

### Cost Anomaly Detection

[AWS Cost Anomaly Detection](https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/)

### AWS Cost Optimization Hub

Consolidate and Prioritize Cost Optimization Opportunities

Cost Optimization Hub allows you to easily identify, filter, and consolidate over 15 types of AWS cost optimization recommendations, such as EC2 instance rightsizing recommendations, Graviton migration recommendations, idle resource detection, and Savings Plans recommendations across your AWS accounts and AWS Regions within your organization through a single dashboard, so that you can get the most out of your AWS spend. Cost Optimization Hub helps you quantify and aggregate estimated savings of these recommendations, taking your specific discount with AWS, such as Reserved Instances and Savings Plans, into consideration, so you can easily compare and prioritize recommendations. With Cost Optimization Hub, you can get answers to your cost optimization questions within minutes, such as "How much can I save by implementing rightsizing recommendations?" "Which AWS accounts have the most cost optimization opportunities?" and "What are the top 3 actions I can take to save costs?" and drive cost optimization initiatives through a single pane of glass.

[Cost Optimization Hub](https://aws.amazon.com/aws-cost-management/cost-optimization-hub/)

[Introducing Cost Optimization Hub](https://aws.amazon.com/about-aws/whats-new/2023/11/cost-optimization-hub/)

### Rightsizing Recommendations

[Optimizing your cost with Rightsizing Recommendations - AWS Cost Management](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html)

## AWS Compute Optimizer

NOTE:

1. We can use this AWS service for Databases running on EC2 for rightsizing recommendation
2. It did not provide recommendations specifically for Amazon RDS

#### Supported resources and requirements

Compute Optimizer generates recommendations for the following resources:

- Amazon Elastic Compute Cloud (Amazon EC2) instances
- Amazon EC2 Auto Scaling groups
- Amazon Elastic Block Store (Amazon EBS) volumes
- AWS Lambda functions
- Amazon Elastic Container Service (Amazon ECS) services on AWS Fargate
- Commercial software licenses

## AWS Trusted Advisor

- We can use AWS Trusted Advisor service that provides best practice recommendations across various categories, including cost optimization.
- While it may not directly recommend RDS resizing, it offers insights into cost-effective resource utilization and can highlight opportunities for optimization.

[Organizational view for AWS Trusted Advisor - AWS Support](https://docs.aws.amazon.com/awssupport/latest/user/organizational-view.html)

## CUDOS Dashboard / CID (Cloud Intelligence Dashboard)

- [Workshop Studio](https://catalog.workshops.aws/awscid/en-US/faqs)
- [Workshop Studio](https://catalog.workshops.aws/awscid/en-US)
- [d1s0yx3p3y3rah.cloudfront.net/anonymous-embed?dashboard=cudos](https://d1s0yx3p3y3rah.cloudfront.net/anonymous-embed?dashboard=cudos)
- [Using CUDOS Dashboard visualizations for AWS Marketplace spend visibility and optimization | AWS Marketplace](https://aws.amazon.com/blogs/awsmarketplace/using-cudos-dashboard-visualizations-aws-marketplace-spend-visibility-optimization/)
- [Visualize and gain insights into your AWS cost and usage with Cloud Intelligence Dashboards and CUDOS using Amazon QuickSight | AWS Cloud Operations & Migrations Blog](https://aws.amazon.com/blogs/mt/visualize-and-gain-insights-into-your-aws-cost-and-usage-with-cloud-intelligence-dashboards-using-amazon-quicksight/)
- [FOCUS Dashboard - YouTube](https://www.youtube.com/watch?v=JfAE9PtXWHA&ab_channel=AWSCloudIntelligenceDashboards)

## Savings Plan

- Savings plan is not application for spot instances
- Commit to a minimum amount of spending per hour for one or three years to receive a discount on On-Demand Instances. Savings Plans can offer up to 72% off the regular price. However, they can't be canceled during the term and can waste money if not fully utilized.

### Spot Instances

Provide access to leftover capacity at a discount of up to 90% off the On-Demand price. However, they aren't guaranteed to be available and are not ideal for mission-critical workloads because AWS can reclaim them with just two minutes notice.

![savings and spot usage](../../media/Screenshot%202024-08-30%20at%2011.31.01%20PM.jpg)

[EC2 Spot Instances vs. AWS Savings Plans: What are the Potential Savings?](https://www.missioncloud.com/blog/ec2-spot-instances-vs-aws-savings-plans-what-are-the-potential-savings)

[Spot vs. Savings Plans: How to Get Discounts Across All Of Your AWS Spend | nOps](https://www.nops.io/blog/spot-vs-savings-plans/)

[Effective utilization of AWS Savings Plans and EC2 spot instances | Spot.io](https://spot.io/resources/aws-ec2-pricing/effective-utilization-of-aws-savings-plans-and-ec2-spot-instances/)

### Spot don't use savings plan

Spot instances do not use AWS Savings Plans

- Price: Spot instances are already up to 90% discounted, so other discounts like Savings Plans won't apply.
- Commitment: Savings Plans require a commitment and can't be canceled during the term.
- Usage: Savings Plans don't apply to spot usage or usage covered by Reserved Instances (RIs).

Spot instances can be a good option for applications that are fault-tolerant, stateless, or flexible, such as web servers, big data, and containerized workloads. However, because AWS can reclaim Spot instances with just a two minute warning, they might not be ideal for mission-critical or production workloads.

## Savings plan Utilization Report and Coverage Report

**Utilization Report**: Measures the amount of the savings plan you are using. If it's less than 100% it means that you reserved more than you need.

**Coverage Report**: Measures the percentage of your costs covered by the savings plan. If it's less than 100%, you can increase your savings plan to optimize costs.

Ideally, both should be 100%, but I would say that it's more important to keep the utilization report at 100% because it's already a fixed cost that you already acquired. The coverage report indicates further improvement opportunities to reduce costs.

- [amazon web services - Difference Between AWS SAVING PLAN Coverage Report vs Utilization Report - Stack Overflow](https://stackoverflow.com/questions/72490474/difference-between-aws-saving-plan-coverage-report-vs-utilization-report)
- [Using the utilization report - Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/ce-sp-usingPR.html)
- [Using your coverage report - Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/ce-sp-usingCR.html)
- [Compute Savings Plans – Amazon Web Services](https://aws.amazon.com/savingsplans/compute-pricing/)

## Reserved Instances

With Aurora MySQL they have [size flexibility](https://aws.amazon.com/about-aws/whats-new/2017/10/amazon-rds-reserved-instances-offer-instance-size-flexibility/) -- so they can purchase a T3.Large, and run 4 T3.Smalls to get the discount (or whatever the size factor is). However, they must commit to the T3 family. They will not be able to get the discount by running a T2 RDS instance. That T2 will be billed on-demand rates.

Also RDS RI purchased in one account can be used in another account if RI sharing is enabled (consolidated billing).

If running a instance for less than 12-15 hours then on-demand can be cheaper than RI, since RI's cost is 24 hours, and doesn't depend on if the instance is used or not.

- [Reserved Instances for RDS Aurora | AWS re:Post](https://repost.aws/questions/QU2oqoI7B8R8KR21qsCIGP6Q/reserved-instances-for-rds-aurora)
- [Reserved Instances and Savings Plans discount sharing - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html)
- [Billing examples for specific services - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html#consolidatedbilling-rds)
- [Does RI sharing in orgs apply to RDS RIs too? | AWS re:Post](https://repost.aws/questions/QUQCZ8ZgB8T1KqNHJsFzfnGg/does-ri-sharing-in-orgs-apply-to-rds-ris-too)

## Reservations Utilization Report and Coverage Report

[Reserved Instance Reporting](https://aws.amazon.com/aws-cost-management/reserved-instance-reporting/)

## Other Tools

- [Overview - Komiser](https://docs.komiser.io/welcome/overview)
- [Instance Scheduler on AWS](https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/)

## Tools for checking costs

- [GitHub - concurrencylabs/aws-cost-analysis: Tools that make it easier to analyze AWS Cost and Usage reports. Initial version provides support for Athena and QuickSight.](https://github.com/concurrencylabs/aws-cost-analysis)
- [GitHub - hystax/optscale: FinOps and cloud cost optimization tool. Supports AWS, Azure, GCP, Alibaba Cloud and Kubernetes.](https://github.com/hystax/optscale)
- [Economize Cloud – Cloud Cost Optimization Software](https://www.economize.cloud/)

### Alerting

- [Email delta cost usage report in a multi-account organization using AWS Lambda | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/email-delta-cost-usage-report-in-a-multi-account-organization-using-aws-lambda/)
- [Generate AWS cost reports automatically using the Cost-Explorer API | by TechStoryLines | Medium](https://medium.com/@TechStoryLines/generate-aws-cost-reports-automatically-using-the-cost-explorer-api-ef472fca4151)

## Wrong Costs

![AWS Wrong Costs](../../media/Screenshot%202024-06-24%20at%208.03.33%20PM.jpg)

![AWS Wrong Data Transfer Costs](../../media/Screenshot%202024-06-22%20at%2010.52.14%20PM.jpg)

## Links

- [Aurora - configurations-optimizations-best-practices](databases/sql-databases/aws-aurora/configurations-optimizations-best-practices.md)
- [Understanding your AWS billing and usage reports for Amazon S3 - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/aws-usage-report-understand.html)
- [AWS tools to optimize your Amazon RDS costs | AWS Database Blog](https://aws.amazon.com/blogs/database/aws-tools-to-optimize-your-amazon-rds-costs/)
- [AWS Cost Anomaly Detection](https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/) - Automated cost anomaly detection and root cause analysis
- [Cost optimization - AWS Support](https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html)
- [Understanding Consolidated Bills - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/con-bill-blended-rates.html)
- [Best Practices for AWS Organizations](https://www.densify.com/finops/aws-organizations-best-practices/)
- [Amazon Q for Cost Analysis | The Keys to AWS Optimization | S10 E10 - YouTube](https://www.youtube.com/watch?v=snJdAqr_GJA)
