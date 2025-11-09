# Amazon Opensearch

## OpenSearch

https://github.com/opensearch-project/OpenSearch

## Elasticsearch vs Amazon OpenSearch

- [Amazon OpenSearch vs. Elasticsearch | Elastic](https://www.elastic.co/amazon-opensearch-service)
- [Elasticsearch vs. OpenSearch: Performance and resource utilization analysis | Elastic Blog](https://www.elastic.co/blog/elasticsearch-opensearch-performance-gap)

## Getting Started

To get started using OpenSearch Service, you create an OpenSearch Service _domain_, which is equivalent to an OpenSearch _cluster_. Each EC2 instance in the cluster acts as one OpenSearch Service node.

[What is Amazon OpenSearch Service? - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html)

## OpenSearch Ingestion

Amazon OpenSearch Ingestion is a fully managed, serverless data collector that streams real-time logs, metrics, and trace data to Amazon OpenSearch Service domains and OpenSearch Serverless collections.

With OpenSearch Ingestion, you no longer need third-party tools like Logstash or Jaeger to ingest data. You configure your data producers to send data to OpenSearch Ingestion, and it automatically delivers it to your specified domain or collection. You can also transform data before delivery.

Because OpenSearch Ingestion is serverless, you don’t have to manage infrastructure, patch software, or scale clusters manually. You can provision ingestion pipelines directly in the AWS Management Console, and OpenSearch Ingestion handles the rest.

As a component of Amazon OpenSearch Service, OpenSearch Ingestion is powered by Data Prepper—an open-source data collector that filters, enriches, transforms, normalizes, and aggregates data for downstream analysis and visualization.

[Overview of Amazon OpenSearch Ingestion - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ingestion.html)

With OpenSearch Ingestion, you can use Amazon S3 as a source or as a destination. When you use Amazon S3 as a source, you send data to an OpenSearch Ingestion pipeline. When you use Amazon S3 as a destination, you write data from an OpenSearch Ingestion pipeline to one or more S3 buckets.

An OSI (OpenSearch Ingestion) processor is a component within an OpenSearch Ingestion pipeline that filters, transforms, enriches, or aggregates data before it is sent to its destination.

[Using an OpenSearch Ingestion pipeline with Amazon S3 - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configure-client-s3.html)

### Pipeline

A _pipeline_ is the mechanism that Amazon OpenSearch Ingestion uses to move data from its _source_ (where the data comes from) to its _sink_ (where the data goes). In OpenSearch Ingestion, the sink will always be a single Amazon OpenSearch Service domain, while the source of your data could be clients like Amazon S3, Fluent Bit, or the OpenTelemetry Collector.

[Creating Amazon OpenSearch Ingestion pipelines - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html)

### How OSI processors work

- **Data flow**: A pipeline starts with a source (like S3 or Kafka), then passes data through one or more processors, and finally sends it to a sync (like OpenSearch Serverless or another S3 bucket).
- **Processor types**: Processors perform specific tasks on the data as it moves through the pipeline. Examples include:
    - **Transformation**: Changing the structure or format of data, like grok, parse, or XML processors.
    - **Enrichment**: Adding new information to the data, such as using a machine learning model to generate vector embeddings from text.
    - **Aggregation**: Grouping data points together, like counting events or calculating statistics.
- **Offline ML**: OSI can be used to process large datasets with ML models asynchronously, which is efficient for use cases like creating vector embeddings for search.

[AWS Lambda as a processor in OSI Pipelines - YouTube](https://www.youtube.com/watch?v=qYVi5JjtH6w)

### Features

Amazon OpenSearch Ingestion provisions _pipelines_, which consist of a source, a buffer, zero or more processors, and one or more sinks. Ingestion pipelines are powered by Data Prepper as the data engine.

- [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering)
- [Splitting](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#osis-features-splitting)
- [Chaining](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#osis-features-chaining)
- [Dead-letter queues](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#osis-features-dlq)
- [Index management](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#osis-features-index-management)
- [End-to-end acknowledgement](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#osis-features-e2e)
- [Source back pressure](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#osis-features-backpressure)

[Overview of pipeline features in Amazon OpenSearch Ingestion - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html)

## Analysis on S3 Files

Analyzing Apache Parquet files stored in Amazon S3 using OpenSearch Service can be achieved through several methods, largely depending on whether you want to directly query the data in S3 or ingest it into OpenSearch for indexing and analysis.

### 1. OpenSearch Service Zero-ETL Integration with Amazon S3:

This is the most direct and modern approach for analyzing Parquet data in S3 without requiring a separate ETL process to ingest data into OpenSearch.

- **Direct Querying:** OpenSearch Service can be configured to directly query data stored in S3 buckets, including Parquet files. This allows you to run analytical queries and visualize insights on your S3 data directly within OpenSearch Dashboards without having to index the entire dataset.
- **Configuration:** You configure an S3 data source within OpenSearch Service, defining tables and optionally setting up query acceleration. You then use OpenSearch Dashboards to query and visualize the data.

[GitHub - aws-samples/aws-s3-to-opensearch-pipeline](https://github.com/aws-samples/aws-s3-to-opensearch-pipeline)

[Configuring and querying an S3 data source in OpenSearch Dashboards - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/direct-query-s3-configure.html)

### 2. Ingesting Parquet Data into OpenSearch Service:

If you require the full indexing capabilities of OpenSearch for faster search and complex aggregations, you can ingest the Parquet data from S3 into an OpenSearch domain.

- **AWS Glue:** AWS Glue can be used to extract data from Parquet files in S3, transform it (e.g., into JSON), and then load it into your OpenSearch Service domain using a Glue job with an OpenSearch Service connection.
- **OpenSearch Ingestion:** OpenSearch Ingestion is a managed service that can read Parquet data from S3, perform transformations, and then ingest it into OpenSearch Service. This is particularly useful for streaming data or for handling large volumes of data from S3.
- **AWS Lambda:** For more custom or event-driven ingestion, you can use AWS Lambda functions. A Lambda function can be triggered by S3 events (e.g., new Parquet file uploads), read the Parquet data, transform it into a suitable format (like JSON), and then send it to your OpenSearch Service domain for indexing.

## Bedrock OpenSearch

- [AWS OpenSearch SearchOCU keeps hitting the max limit \| AWS re:Post](https://repost.aws/questions/QUZt2O6WZ3QO6Ie03yTPKsgQ/aws-opensearch-searchocu-keeps-hitting-the-max-limit)
	- My OpenSearch domain exhibited unexpected Search Capacity Unit (SearchOCU) scaling behavior correlated with the number of Collections, even with minimal query activity. After deleting a large number of Collections, retaining only critical Collections totaling less than 5GB, the SearchOCU count decreased to 2. Previously, with a significantly higher number of Collections, the SearchOCU count was substantially inflated, despite low query volume.
	- This observation suggests that the sheer presence of a large number of OpenSearch Collections, independent of active search queries, influences SearchOCU consumption. While I understand the impact of query load on scaling, the mechanism by which the number of Collections drives SearchOCU inflation remains unclear.

## Pricing

- [Open-Source Search Engine - Amazon OpenSearch Service Pricing - AWS](https://aws.amazon.com/opensearch-service/pricing/)
- [Managing capacity limits for Amazon OpenSearch Serverless - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html)
- OpenSearch Compute Units (OCUs)
	- **Maximum indexing capacity** – OpenSearch Serverless can increase indexing capacity up to this number of OCUs.
	- **Maximum search capacity** – OpenSearch Serverless can increase search capacity up to this number of OCUs.

## Optimizations

- [Operational best practices for Amazon OpenSearch Service - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp.html)
- [Improve your Amazon OpenSearch Service performance with OpenSearch Optimized Instances \| AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/improve-your-amazon-opensearch-service-performance-with-opensearch-optimized-instances/)
- [Performance tuning - OpenSearch Documentation](https://opensearch.org/docs/latest/vector-search/performance-tuning/)
- [Optimizing query performance using OpenSearch indexing - OpenSearch Documentation](https://opensearch.org/docs/latest/dashboards/management/accelerate-external-data/)
- [Improve the indexing performance in OpenSearch Service \| AWS re:Post](https://repost.aws/knowledge-center/opensearch-indexing-performance)

## OpenSearch Data Prepper

- [OpenSearch Data Prepper - OpenSearch Documentation](https://opensearch.org/docs/latest/data-prepper/)
- [GitHub - opensearch-project/data-prepper: OpenSearch Data Prepper is a component of the OpenSearch project that accepts, filters, transforms, enriches, and routes data at scale.](https://github.com/opensearch-project/data-prepper)
- [Overview of Amazon OpenSearch Ingestion - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ingestion.html)

## Links

- [centralized-logging-with-opensearch](cloud/aws/analytics/centralized-logging-with-opensearch.md)
- [Working with vector search collections - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vector-search.html)
- [OpenSearch in 2025: Much more than an Elasticsearch fork \| InfoWorld](https://www.infoworld.com/article/3971473/opensearch-in-2025-much-more-than-an-elasticsearch-fork.html)
- [AWS re:Invent 2024 - OpenSearch: A journey from fork to Linux Foundation...](https://youtu.be/w0KfmeiXIvE)
- [Modernize your search and log analytics with Amazon OpenSearch Serverles...](https://youtu.be/DU2vmaQzsik)
- [AWS re:Invent 2021 - What's new in Amazon OpenSearch Service](https://youtu.be/y7cp_5Lv2A4)
- [Building Multi-Tenant Solutions with Amazon OpenSearch Service - AWS Onl...](https://youtu.be/FswkQ8YfZyc)
- [Amazon OpenSearch Service as a Vector Database](https://youtu.be/RnvFLwi4tRc)
- [AWS re:Invent 2023-Vector database and zero-ETL capabilities for Amazon ...](https://youtu.be/ol-UBfYcKUI)
- [Amazon OpenSearch Service for Vector Search: Demo | Amazon Web Services](https://youtu.be/uLQPyvzdTVQ)
- [AWS re:Invent 2023 - Improve your search with vector capabilities in Ope...](https://youtu.be/y7pxKfq8vtg)
- [Cost Optimization for OpenSearch Workloads - AWS Analytics in 15](https://youtu.be/tZOb_M6yKw8)
- [AWS re:Invent 2024 - Maximize efficiency and reduce costs with Amazon Op...](https://youtu.be/QOljfEoYbfY)
- [All About Amazon OpenSearch Ingestion | Amazon Web Services](https://youtu.be/vpYCElBxQig)
- [Demo: Chat with your PDFs using Amazon OpenSearch Service | Amazon Web S...](https://youtu.be/soZQ9crG2kk)
- [Launching your first vector engine on Amazon OpenSearch Serverless | Ama...](https://youtu.be/jGWeXVkAhH4)
- [Demo: Searching with Amazon OpenSearch Serverless | Amazon Web Services](https://youtu.be/_ZHLirviD38)
- [Amazon OpenSearch Serverless](https://youtu.be/ap2ogbM3VLc)
- [Amazon OpenSearch Serverless | Amazon Web Services](https://youtu.be/aCROb9Ggqxc)
- [Amazon OpenSearch Service | Amazon Web Services](https://youtu.be/cZHB7KBubWs)
- [Demo: Zero to Hero with Amazon OpenSearch Service | Amazon Web Services](https://youtu.be/wh2tn5BTBpg)
- [AWS re:Invent 2022 - [NEW LAUNCH!] Provision & scale OpenSearch resource...](https://youtu.be/OSaq3SkXGq8)
- [Power Your Vector Search with Amazon OpenSearch Service - AWS Analytics ...](https://youtu.be/1nTjlqwuUwU)
