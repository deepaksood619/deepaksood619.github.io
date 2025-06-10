# Others

## PartiQL

You now can use [PartiQL](https://aws.amazon.com/blogs/opensource/announcing-partiql-one-query-language-for-all-your-data/) with [NoSQL Workbench](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html) to run SQL-compatible queries on your DynamoDB data. PartiQL makes it easier to interact with DynamoDB, and now you can use PartiQL to query, insert, update, and delete table data by using NoSQL Workbench.

## Amazon DynamoDB Accelerator (DAX)

## Fully managed in-memory cache for DynamoDB

Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory [cache](https://aws.amazon.com/caching/) for [DynamoDB](https://aws.amazon.com/dynamodb/) that delivers up to a 10x performance improvement -- from milliseconds to microseconds -- even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management. Now you can focus on building great applications for your customers without worrying about performance at scale. You do not need to modify application logic, since DAX is compatible with existing DynamoDB API calls.

https://aws.amazon.com/dynamodb/dax

https://aws.amazon.com/blogs/aws/amazon-dynamodb-accelerator-dax-in-memory-caching-for-read-intensive-workloads

## Backup / PITR

### Export to S3

DynamoDB export to S3 is a fully managed solution for exporting your DynamoDB data to an Amazon S3 bucket at scale. Using DynamoDB export to S3, you can export data from an Amazon DynamoDB table from any time within your [point-in-time recovery (PITR)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html) window to an Amazon S3 bucket. You need to enable PITR on your table to use the export functionality. This feature enables you to perform analytics and complex queries on your data using other AWS services such as Athena, AWS Glue, Amazon SageMaker, Amazon EMR, and AWS Lake Formation.

[DynamoDB data export to Amazon S3: how it works - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html)

## Cost Optimization

[Identifying your unused resources - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CostOptimization_UnusedResources.html)

[Optimize costs with Amazon DynamoDB | AWS re:Post](https://repost.aws/knowledge-center/dynamodb-optimize-costs)

[Amazon DynamoDB Pricing: Challenges & Best Practices Intro | Finout](https://www.finout.io/blog/an-intro-to-dynamodb-pricing-challenges-and-best-practices)

[DynamoDB Pricing: How to Optimize Usage and Reduce DynamoDB Costs](https://www.finout.io/blog/how-to-optimize-usage-and-reduce-dynamodb-pricing)

[DynamoDB On Demand Provisioned Cost Optimization | AWS re:Post](https://repost.aws/questions/QUzGUZDAlpTyqRBV0Y8i3fIw/dynamodb-on-demand-provisioned-cost-optimization)

[Running spiky workloads and optimizing costs by more than 90% using Amazon DynamoDB on-demand capacity mode | AWS Database Blog](https://aws.amazon.com/blogs/database/running-spiky-workloads-and-optimizing-costs-by-more-than-90-using-amazon-dynamodb-on-demand-capacity-mode/)

### Pricing

There are two pricing options available for Amazon DynamoDB: [on-demand capacity mode](https://aws.amazon.com/dynamodb/pricing/on-demand/) and [provisioned capacity mode](https://aws.amazon.com/dynamodb/pricing/provisioned/).

[DynamoDB Pricing Provisioned vs On-Demand | AWS re:Post](https://repost.aws/questions/QUMXAJq5zxQY20qZ-VPpO5qg/dynamodb-pricing-provisioned-vs-on-demand)

[AWS Pricing Calculator](https://calculator.aws/#/estimate?id=2c649034c004a68876f4855ebd700380ec14faa6)

#### Reversed Capacity

Amazon DynamoDB reserved capacity gives you the option to reserve database capacity for a one- or three-year term and in turn receive a significant discount compared to provisioned capacity pricing.

[Amazon DynamoDB Reserved Capacity](https://aws.amazon.com/dynamodb/reserved-capacity/)
