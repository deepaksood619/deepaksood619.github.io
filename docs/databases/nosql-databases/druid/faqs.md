# FAQs

[Frequently Asked Questions | Apache Druid](https://druid.apache.org/faq/)

### Is Druid a data warehouse? When should I use Druid over Redshift/BigQuery/Snowflake?[​](https://druid.apache.org/faq/#is-druid-a-data-warehouse-when-should-i-use-druid-over-redshiftbigquerysnowflake "Direct link to Is Druid a data warehouse? When should I use Druid over Redshift/BigQuery/Snowflake?")

Apache Druid is a new type of database to power real-time analytic workloads for event-driven data, and isn’t a traditional data warehouse. Although Druid incorporates architecture ideas from data warehouses such as column-oriented storage, Druid also incorporates designs from search systems and timeseries databases. Druid's architecture is designed to handle many use cases that traditional data warehouses cannot.

Druid offers the following advantages over traditional data warehouses:

- Much lower latency for OLAP-style queries
- Much lower latency for data ingest (both streaming and batch)
- Out-of-the-box integration with Apache Kafka, AWS Kinesis, HDFS, AWS S3, and more
- Time-based partitioning, which enables performant time-based queries
- Fast search and filter, for fast slice and dice
- Minimal schema design and native support for semi-structured and nested data

Consider using Druid to augment your data warehouse if your use case requires:

- Powering an user-facing application
- Low-latency query response with high concurrency
- Instant data visibility
- Fast ad-hoc slice and dice
- Streaming data

To summarize, Druid shines when the use cases involves real-time analytics and where the end-user (technical or not) wants to apply numerous queries in rapid succession to explore or better understand data trends.

### Is Druid a log aggregation/log search system? When should I use Druid over Elastic/Splunk?[​](https://druid.apache.org/faq/#is-druid-a-log-aggregationlog-search-system-when-should-i-use-druid-over-elasticsplunk "Direct link to Is Druid a log aggregation/log search system? When should I use Druid over Elastic/Splunk?")

Druid uses inverted indexes (in particular, compressed bitmaps) for fast searching and filtering, but it is not generally considered a search system. While Druid contains many features commonly found in search systems, such as the ability to stream in structured and semi-structured data and the ability to search and filter the data, Druid isn’t commonly used to ingest text logs and run full text search queries over the text logs. However, Druid is often used to ingest and analyze semi-structured data such as JSON.

Druid at its core is an analytics engine and as such, it can support numerical aggregations, groupBys (including multi-dimensional groupBys), and other analytic workloads faster and more efficiently than search systems.

### Is Druid a timeseries database? When should I use Druid over InfluxDB/OpenTSDB/Prometheus?[​](https://druid.apache.org/faq/#is-druid-a-timeseries-database-when-should-i-use-druid-over-influxdbopentsdbprometheus "Direct link to Is Druid a timeseries database? When should I use Druid over InfluxDB/OpenTSDB/Prometheus?")

Druid does share some characteristics with timeseries databases, but also combines ideas from analytic databases and search systems. Like in timeseries databases, Druid is optimized for data where a timestamp is present. Druid partitions data by time, and queries that include a time filter will be significantly faster than those that do not. Aggregating metrics and filtering on dimensions (which are roughly equivalent to TSDBs' tags) are also very fast when a time filter is present. However, because Druid incorporates many architectural designs from analytics databases and search systems, it can significantly outperformance TSDBs when grouping, searching, and filtering on tags that are not time, or when computing complex metrics such as histograms and quantiles.

### Does Druid separate storage and compute?[​](https://druid.apache.org/faq/#does-druid-separate-storage-and-compute "Direct link to Does Druid separate storage and compute?")

Druid creates an indexed copy of raw data that is highly optimized for analytic queries. Druid runs queries over this indexed data, called a ['segment'](https://druid.apache.org/docs/latest/design/segments) in Druid, and does not pull raw data from an external storage system as needed by queries.

### Where does Druid fit in my big data stack?[​](https://druid.apache.org/faq/#where-does-druid-fit-in-my-big-data-stack "Direct link to Where does Druid fit in my big data stack?")

Druid typically connects to a source of raw data such as a message bus such as Apache Kafka, or a filesystem such as HDFS. Druid ingests an optimized, column-oriented, indexed copy of your data and serves analytics workloads on top of it.

A common streaming data oriented setup involving Druid looks like this: Raw data → Kafka → Stream processor (optional, typically for ETL) → Kafka (optional) → Druid → Application/user

A common batch/static file oriented setup involving Druid looks like this: Raw data → Kafka (optional) → HDFS → ETL process (optional) → Druid → Application/user

The same Druid cluster can serve both the streaming and batch path.

### Is Druid in-memory?[​](https://druid.apache.org/faq/#is-druid-in-memory "Direct link to Is Druid in-memory?")

The earliest iterations of Druid didn’t allow for data to be paged in from and out to disk, so it was often called an "in-memory" database. As Druid evolved, this limitation was removed. To provide a balance between hardware cost and query performance, Druid leverages memory-mapping to page data between disk and memory and extend the amount of data a single node can load up to the size of its disks.

Individual Historicals can be configured with the maximum amount of data they should be given. Coupled with the Coordinator’s ability to assign data to different "tiers" based on different query requirements, Druid is essentially a system that can be configured across a wide spectrum of performance requirements. All data can be in memory and processed, or data can be heavily over-committed compared to the amount of memory available. Druid can also support complex configurations, such as configuring the most recent month of data in memory, while everything else is over-committed.
