# Amazon Kinesis

Work with Real-time Streaming Data

AWS Kinesis is a suite of services designed to handle real-time data streaming at scale. It allows you to collect, process, and analyze data as it is generated, enabling real-time insights and actions. AWS Kinesis includes several components, each tailored for different aspects of streaming data:

1. **Amazon Kinesis Data Streams**: This service allows you to build real-time applications that process or analyze streaming data. You can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.
	1. The data collected is available in milliseconds to enable real-time analytics use cases such as real-time dashboards, real-time anomaly detection, dynamic pricing, and more.
	2. KDS makes sure your streaming data is available to multiple real-time analytics applications, to Amazon S3, or AWS Lambda within 70 milliseconds of the data being collected. Amazon Kinesis data streams scale from megabytes to terabytes per hour and scale from thousands to millions of PUT records per second. You can dynamically adjust the throughput of your stream at any time based on the volume of your input data.
2. **Amazon Kinesis Data Firehose**: A fully managed service for delivering real-time streaming data to destinations such as Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk. It can automatically scale to match the throughput of your data and requires no ongoing administration.
3. **Amazon Kinesis Data Analytics**: This service enables you to process and analyze streaming data using standard SQL. It allows you to build real-time applications to transform and analyze your data, generating real-time metrics, dashboards, and alerts.
	1. With Amazon Kinesis Data Analytics for SQL Applications, you can process and analyze streaming data using standard SQL. The service enables you to quickly author and run powerful SQL code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.
	2. [What Is Amazon Kinesis Data Analytics for SQL Applications? - Amazon Kinesis Data Analytics for SQL Applications Developer Guide](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html)
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

### Enhanced Fan-Out

Enhanced fan-out allows developers to scale up the number of stream consumers (applications reading data from a stream in real-time) by offering each stream consumer its own read throughput. Meanwhile, the HTTP/2 data retrieval API allows data to be delivered from producers to consumers in 70 milliseconds or better (a 65% improvement) in typical scenarios. These new features enable developers to build faster, more reactive, highly parallel, and latency-sensitive applications on top of Kinesis Data Streams.

[Amazon Kinesis Data Streams Adds Enhanced Fan-Out and HTTP/2 for Faster Streaming \| AWS News Blog](https://aws.amazon.com/blogs/aws/kds-enhanced-fanout/)

### Provisioned vs On-demand

| **Feature**             | **Provisioned Mode**                                                                         | **On-Demand Mode**                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Capacity Allocation** | Manually specify number of shards                                                            | Automatically scales based on data throughput                                             |
| **Ingestion Capacity**  | 1 MB/sec or 1000 records/sec per shard                                                       | Scales automatically based on data volume                                                 |
| **Retrieval Capacity**  | 2 MB/sec per shard                                                                           | Scales automatically based on data volume                                                 |
| **Scaling**             | Manual adjustment of shard count                                                             | Automatic scaling without user intervention                                               |
| **Cost Structure**      | Based on number of provisioned shards                                                        | Pay-as-you-go based on actual throughput                                                  |
| **Management**          | Requires monitoring and managing shard capacity                                              | No need to manage shard capacity                                                          |
| **Use Cases**           | Predictable and consistent traffic patterns                                                  | Variable and unpredictable traffic patterns                                               |
| **Complexity**          | Higher, due to manual capacity management                                                    | Lower, due to automated scaling                                                           |
| **Best For**            | Applications with steady, predictable workloads                                              | Applications with fluctuating or unknown workloads                                        |
| **Examples**            | - Video streaming service with consistent viewers, - IoT applications with steady data rates | - Retail apps with seasonal traffic, - Social media platforms with variable user activity |

#### Pricing

|             | hourly rate | hours | daily costs per shard | days | Monthly costs per shard |
| ----------- | ----------- | ----- | --------------------- | ---- | ----------------------- |
| on-demand   | $0.05       | 24    | $1.24                 | 30   | $37.22                  |
| provisioned | $0.02       | 24    | $0.42                 | 30   | $12.60                  |

[AWS Pricing Calculator - on-demand vs provisioned](https://calculator.aws/#/estimate?id=df50253955e97e4143474db1e344777c754c5287)

[Choosing the Data Stream Capacity Mode - Amazon Kinesis Data Streams](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html)

## Amazon Kinesis Data Firehose

Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores and analytics tools. It can capture, transform, and load streaming data into **Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and [Splunk](https://aws.amazon.com/kinesis/data-firehose/splunk/)**, enabling near real-time analytics with existing business intelligence tools and dashboards you're already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.

Kinesis Firehose **cannot be used to process and analyze the streaming data** in custom applications. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics.

https://aws.amazon.com/kinesis/data-firehose

### Kinesis Data Firehose vs Kinesis Data Streams

| Feature             | Kinesis Data Firehose                                                             | Kinesis Data Streams                                                      |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Primary use**     | Load streaming data to destinations like S3, Redshift, Elasticsearch, and Splunk. | Process and consume streaming data with custom applications in real-time. |
| **Management**      | Fully managed service; automatically scales and handles operational tasks.        | Requires manual management of scaling by configuring shards.              |
| **Data processing** | Offers built-in data transformation (e.g., using Lambda) before delivery.         | Provides flexibility for custom processing logic and complex workflows.   |
| **Flexibility**     | Lower flexibility with pre-defined destinations and consumers.                    | High flexibility for integrating with custom applications.                |
| **Data retention**  | Stores data for up to 24 hours in case of delivery failure.                       | Can retain data for up to 365 days, depending on configuration.           |
| **Complexity**      | Simpler, with lower operational overhead.                                         | More complex due to the need for custom consumers and manual scaling.     |

## Links

- [Amazon Kinesis Data Streams: Auto-scaling the number of shards | by Brandon Stanley | Slalom Data & AI | Medium](https://medium.com/slalom-data-ai/amazon-kinesis-data-streams-auto-scaling-the-number-of-shards-105dc967bed5)
- [AWS re:Invent 2024 - What’s new: Data streaming on AWS (ANT327)](https://youtu.be/N_fuloZuoSU)
