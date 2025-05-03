# Amazon Opensearch

## OpenSearch

https://github.com/opensearch-project/OpenSearch

### Elasticsearch vs Amazon OpenSearch

- [Amazon OpenSearch vs. Elasticsearch | Elastic](https://www.elastic.co/amazon-opensearch-service)
- [Elasticsearch vs. OpenSearch: Performance and resource utilization analysis | Elastic Blog](https://www.elastic.co/blog/elasticsearch-opensearch-performance-gap)

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

- [Working with vector search collections - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vector-search.html)
- [OpenSearch in 2025: Much more than an Elasticsearch fork \| InfoWorld](https://www.infoworld.com/article/3971473/opensearch-in-2025-much-more-than-an-elasticsearch-fork.html)
