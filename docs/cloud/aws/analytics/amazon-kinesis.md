# Amazon Kinesis

Work with Real-time Streaming Data

AWS Kinesis is a suite of services designed to handle real-time data streaming at scale. It allows you to collect, process, and analyze data as it is generated, enabling real-time insights and actions. AWS Kinesis includes several components, each tailored for different aspects of streaming data:

1. **Amazon Kinesis Data Streams**: This service allows you to build real-time applications that process or analyze streaming data. You can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.
2. **Amazon Kinesis Data Firehose**: A fully managed service for delivering real-time streaming data to destinations such as Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk. It can automatically scale to match the throughput of your data and requires no ongoing administration.
3. **Amazon Kinesis Data Analytics**: This service enables you to process and analyze streaming data using standard SQL. It allows you to build real-time applications to transform and analyze your data, generating real-time metrics, dashboards, and alerts.
4. **Amazon Kinesis Video Streams**: A fully managed service that makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), and other processing. You can capture, process, and store video streams for analytics and ML applications.

### Key Features of AWS Kinesis

- **Real-Time Processing**: Process and analyze data as it arrives, enabling instant insights and actions.
- **Scalability**: Easily scales to handle any amount of streaming data, from megabytes to terabytes per hour.
- **Fully Managed**: Reduces the operational overhead, allowing you to focus on building applications rather than managing infrastructure.
- **Integration**: Seamlessly integrates with other AWS services, such as S3, Redshift, Elasticsearch Service, and Lambda.
- **Flexibility**: Supports multiple languages and frameworks, including Java, Scala, Python, and SQL.

### Common Use Cases

- **Log and Event Data Collection**: Collect and analyze log and event data from applications, infrastructure, and devices.
- **Real-Time Analytics**: Perform real-time analytics on streaming data to derive actionable insights.
- **Machine Learning**: Stream data into machine learning models for real-time predictions and anomaly detection.
- **Data Ingestion**: Capture and load data streams into data lakes or data warehouses for further analysis.

AWS Kinesis is a powerful tool for any application or system that requires real-time data processing, allowing you to react to new information quickly and efficiently.

[Serverless Streaming Data Service - Amazon Kinesis](https://aws.amazon.com/pm/kinesis/)

[Amazon Kinesis Video Streams FAQs](https://aws.amazon.com/kinesis/video-streams/faqs/)

[Definitive Guide to Optimize Kinesis Costs | by HashedIn Technologies | Medium](https://medium.com/@hashedin/definitive-guide-to-optimize-kinesis-costs-b8b480991e44)

[Managed Streaming Data Service | Amazon Kinesis Data Streams Pricing | Amazon Web Services](https://aws.amazon.com/kinesis/data-streams/pricing/)

### Provisioned vs On-demand

| **Feature**             | **Provisioned Mode**                                                                           | **On-Demand Mode**                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Capacity Allocation** | Manually specify number of shards                                                              | Automatically scales based on data throughput                                               |
| **Ingestion Capacity**  | 1 MB/sec or 1000 records/sec per shard                                                         | Scales automatically based on data volume                                                   |
| **Retrieval Capacity**  | 2 MB/sec per shard                                                                             | Scales automatically based on data volume                                                   |
| **Scaling**             | Manual adjustment of shard count                                                               | Automatic scaling without user intervention                                                 |
| **Cost Structure**      | Based on number of provisioned shards                                                          | Pay-as-you-go based on actual throughput                                                    |
| **Management**          | Requires monitoring and managing shard capacity                                                | No need to manage shard capacity                                                            |
| **Use Cases**           | Predictable and consistent traffic patterns                                                    | Variable and unpredictable traffic patterns                                                 |
| **Complexity**          | Higher, due to manual capacity management                                                      | Lower, due to automated scaling                                                             |
| **Best For**            | Applications with steady, predictable workloads                                                | Applications with fluctuating or unknown workloads                                          |
| **Examples**            | - Video streaming service with consistent viewers, - IoT applications with steady data rates | - Retail apps with seasonal traffic, - Social media platforms with variable user activity |

#### Pricing

|             | hourly rate | hours | daily costs per shard | days | Monthly costs per shard |
| ----------- | ----------- | ----- | --------------------- | ---- | ----------------------- |
| on-demand   | $0.05       | 24    | $1.24                 | 30   | $37.22                  |
| provisioned | $0.02       | 24    | $0.42                 | 30   | $12.60                  |

[AWS Pricing Calculator - on-demand vs provisioned](https://calculator.aws/#/estimate?id=df50253955e97e4143474db1e344777c754c5287)

[Choosing the Data Stream Capacity Mode - Amazon Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html)

## Amazon Kinesis Data Firehose

Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and [Splunk](https://aws.amazon.com/kinesis/data-firehose/splunk/), enabling near real-time analytics with existing business intelligence tools and dashboards you're already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.

https://aws.amazon.com/kinesis/data-firehose

## Amazon Kinesis vs Apache Kafka

Amazon Kinesis and Apache Kafka are both powerful platforms designed for handling real-time data streams, but they have different features, strengths, and use cases. Here’s a detailed comparison:

### Architecture and Management

**Amazon Kinesis:**

- **Managed Service**: Kinesis is a fully managed service provided by AWS, which means AWS takes care of the underlying infrastructure, scaling, and maintenance.
- **Components**: Kinesis offers different services tailored to specific needs, including Kinesis Data Streams, Kinesis Data Firehose, Kinesis Data Analytics, and Kinesis Video Streams.
- **Ease of Use**: As a managed service, it reduces operational overhead, allowing users to focus on application development rather than infrastructure management.

**Apache Kafka:**

- **Open Source**: Kafka is an open-source distributed event streaming platform. Users are responsible for managing the infrastructure, including setup, scaling, and maintenance.
- **Flexibility**: Kafka provides more control over configuration and customization, which can be beneficial for complex use cases.
- **Ecosystem**: Kafka has a rich ecosystem, including tools like Kafka Connect for data integration and Kafka Streams for stream processing.

### Scalability and Performance

**Amazon Kinesis:**

- **Automatic Scaling**: Kinesis can automatically scale to handle varying data throughput without user intervention.
- **Throughput Limits**: There are soft limits on the number of shards, but these can be increased upon request. Each shard in Kinesis Data Streams supports up to 1 MB/sec or 1000 records/sec for writes and 2 MB/sec for reads.
- **Latency**: Kinesis provides low-latency processing, typically within milliseconds.

**Apache Kafka:**

- **Scalability**: Kafka is highly scalable and can handle very high throughputs by adding more brokers and partitions.
- **Performance**: Known for high throughput, low latency, and fault tolerance. Kafka can process millions of messages per second.
- **Control**: Users have full control over tuning performance and scalability parameters.

### Data Retention and Ordering

**Amazon Kinesis:**

- **Retention Period**: Default retention period is 24 hours, but it can be extended up to 7 days for Kinesis Data Streams.
- **Ordering**: Maintains strict ordering of records within a shard.

**Apache Kafka:**

- **Retention Policies**: Highly configurable retention policies. Data can be retained based on time (e.g., days) or size (e.g., GB).
- **Ordering**: Guarantees ordering within a partition.

### Ecosystem and Integration

**Amazon Kinesis:**

- **AWS Integration**: Seamlessly integrates with other AWS services like Lambda, S3, Redshift, Elasticsearch, and more.
- **Data Firehose**: Simplifies the process of loading streaming data into AWS services for storage and analysis.

**Apache Kafka:**

- **Broad Ecosystem**: Extensive support through Kafka Connect for integrating with various data sources and sinks.
- **Third-Party Tools**: Wide range of third-party tools and services that integrate with Kafka, such as Confluent Platform.

### Cost

**Amazon Kinesis:**

- **Pay-as-You-Go**: Pricing is based on the number of shards (for Kinesis Data Streams) and the volume of data ingested and processed.
- **Managed Costs**: Costs include the managed service overhead, but eliminate the need for infrastructure management.

**Apache Kafka:**

- **Self-Managed**: Costs are associated with the infrastructure (e.g., servers, storage, network) and the operational overhead of managing the Kafka cluster.
- **Cloud Services**: Confluent and other providers offer managed Kafka services, which can simplify operations but come with their own pricing models.

### Use Cases

**Amazon Kinesis:**

- **Real-Time Analytics**: Applications that require near real-time processing and analysis of streaming data.
- **AWS-Centric Workloads**: Ideal for applications heavily integrated with other AWS services.
- **Simplicity and Management**: Use cases where ease of use and reduced operational overhead are important.

**Apache Kafka:**

- **High Throughput**: Applications requiring very high throughput and low-latency processing.
- **Custom Integrations**: Use cases that need extensive customization and integration with various data sources.
- **Complex Workloads**: Large-scale distributed systems that need fine-grained control over configuration and performance tuning.

In summary, the choice between Amazon Kinesis and Apache Kafka depends on factors like the required level of control, integration needs, scalability requirements, and operational preferences. Kinesis is ideal for users who prefer a fully managed solution within the AWS ecosystem, while Kafka is suited for those who need high customization and control over their streaming infrastructure.

[Kafka vs Kinesis: Setup, Performance, Security, and Price | Upsolver](https://www.upsolver.com/blog/comparing-apache-kafka-amazon-kinesis)

[AWS Kinesis vs. Kafka: Comparing Architectures, Features, and Cost | by Instaclustr | Medium](https://instaclustr.medium.com/aws-kinesis-vs-kafka-comparing-architectures-features-and-cost-99ac1bb75f1c)

[Apache Kafka VS AWS Kinesis](https://www.linkedin.com/pulse/apache-kafka-vs-aws-kinesis-darshan-doshi/)

## Links

- [Amazon Kinesis Data Streams: Auto-scaling the number of shards | by Brandon Stanley | Slalom Data & AI | Medium](https://medium.com/slalom-data-ai/amazon-kinesis-data-streams-auto-scaling-the-number-of-shards-105dc967bed5)
