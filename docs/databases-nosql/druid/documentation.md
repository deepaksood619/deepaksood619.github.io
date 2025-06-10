# Documentation

### Getting Started

- [Design](http://druid.io/docs/latest/design/index.html)
    - [What is Druid?](http://druid.io/docs/latest/design/index.html#what-is-druid)
    - [When should I use Druid](http://druid.io/docs/latest/design/index.html#when-to-use-druid)
    - [Architecture](http://druid.io/docs/latest/design/index.html#architecture)
    - [Datasources & Segments](http://druid.io/docs/latest/design/index.html#datasources-and-segments)
    - [Query processing](http://druid.io/docs/latest/design/index.html#query-processing)
    - [External dependencies](http://druid.io/docs/latest/design/index.html#external-dependencies)
    - [Ingestion overview](http://druid.io/docs/latest/ingestion/index.html)
- [Quickstart](http://druid.io/docs/latest/tutorials/index.html)
    - [Tutorial: Loading a file](http://druid.io/docs/latest/tutorials/tutorial-batch.html)
    - [Tutorial: Loading stream data from Kafka](http://druid.io/docs/latest/tutorials/tutorial-kafka.html)
    - [Tutorial: Loading a file using Hadoop](http://druid.io/docs/latest/tutorials/tutorial-batch-hadoop.html)
    - [Tutorial: Loading stream data using HTTP push](http://druid.io/docs/latest/tutorials/tutorial-tranquility.html)
    - [Tutorial: Querying data](http://druid.io/docs/latest/tutorials/tutorial-query.html)- Further tutorials
    - [Tutorial: Rollup](http://druid.io/docs/latest/tutorials/tutorial-rollup.html)
    - [Tutorial: Configuring retention](http://druid.io/docs/latest/tutorials/tutorial-retention.html)
    - [Tutorial: Updating existing data](http://druid.io/docs/latest/tutorials/tutorial-update-data.html)
    - [Tutorial: Compacting segments](http://druid.io/docs/latest/tutorials/tutorial-compaction.html)
    - [Tutorial: Deleting data](http://druid.io/docs/latest/tutorials/tutorial-delete-data.html)
    - [Tutorial: Writing your own ingestion specs](http://druid.io/docs/latest/tutorials/tutorial-ingestion-spec.html)
    - [Tutorial: Transforming input data](http://druid.io/docs/latest/tutorials/tutorial-transform-spec.html)
- [Clustering](http://druid.io/docs/latest/tutorials/cluster.html)

### Data Ingestion

- [Ingestion overview](http://druid.io/docs/latest/ingestion/index.html)
- [Data Formats](http://druid.io/docs/latest/ingestion/data-formats.html)
- [Tasks Overview](http://druid.io/docs/latest/ingestion/tasks.html)
- [Ingestion Spec](http://druid.io/docs/latest/ingestion/ingestion-spec.html)
    - [Transform Specs](http://druid.io/docs/latest/ingestion/transform-spec.html)
    - [Firehoses](http://druid.io/docs/latest/ingestion/firehose.html)
- [Schema Design](http://druid.io/docs/latest/ingestion/schema-design.html)
- [Schema Changes](http://druid.io/docs/latest/ingestion/schema-changes.html)
- [Batch File Ingestion](http://druid.io/docs/latest/ingestion/batch-ingestion.html)
    - [Native Batch Ingestion](http://druid.io/docs/latest/ingestion/native_tasks.html)
    - [Hadoop Batch Ingestion](http://druid.io/docs/latest/ingestion/hadoop.html)
- [Stream Ingestion](http://druid.io/docs/latest/ingestion/stream-ingestion.html)
    - [Kafka Indexing Service (Stream Pull)](http://druid.io/docs/latest/development/extensions-core/kafka-ingestion.html)
    - [Stream Push](http://druid.io/docs/latest/ingestion/stream-push.html)
- [Compaction](http://druid.io/docs/latest/ingestion/compaction.html)
- [Updating Existing Data](http://druid.io/docs/latest/ingestion/update-existing-data.html)
- [Deleting Data](http://druid.io/docs/latest/ingestion/delete-data.html)
- [Task Locking & Priority](http://druid.io/docs/latest/ingestion/locking-and-priority.html)
- [Task Reports](http://druid.io/docs/latest/ingestion/reports.html)
- [FAQ](http://druid.io/docs/latest/ingestion/faq.html)
- [Misc. Tasks](http://druid.io/docs/latest/ingestion/misc-tasks.html)

### Querying

- [Overview](http://druid.io/docs/latest/querying/querying.html)
- [Timeseries](http://druid.io/docs/latest/querying/timeseriesquery.html)
- [TopN](http://druid.io/docs/latest/querying/topnquery.html)
- [GroupBy](http://druid.io/docs/latest/querying/groupbyquery.html)
- [Time Boundary](http://druid.io/docs/latest/querying/timeboundaryquery.html)
- [Segment Metadata](http://druid.io/docs/latest/querying/segmentmetadataquery.html)
- [DataSource Metadata](http://druid.io/docs/latest/querying/datasourcemetadataquery.html)
- [Search](http://druid.io/docs/latest/querying/searchquery.html)
- [Select](http://druid.io/docs/latest/querying/select-query.html)
- [Scan](http://druid.io/docs/latest/querying/scan-query.html)
- Components
    - [Datasources](http://druid.io/docs/latest/querying/datasource.html)
    - [Filters](http://druid.io/docs/latest/querying/filters.html)
    - [Aggregations](http://druid.io/docs/latest/querying/aggregations.html)
    - [Post Aggregations](http://druid.io/docs/latest/querying/post-aggregations.html)
    - [Granularities](http://druid.io/docs/latest/querying/granularities.html)
    - [DimensionSpecs](http://druid.io/docs/latest/querying/dimensionspecs.html)
    - [Context](http://druid.io/docs/latest/querying/query-context.html)- [Multi-value dimensions](http://druid.io/docs/latest/querying/multi-value-dimensions.html)
- [SQL](http://druid.io/docs/latest/querying/sql.html)
- [Lookups](http://druid.io/docs/latest/querying/lookups.html)
- [Joins](http://druid.io/docs/latest/querying/joins.html)
- [Multitenancy](http://druid.io/docs/latest/querying/multitenancy.html)
- [Caching](http://druid.io/docs/latest/querying/caching.html)
- [Sorting Orders](http://druid.io/docs/latest/querying/sorting-orders.html)
- [Virtual Columns](http://druid.io/docs/latest/querying/virtual-columns.html)

### Design

- [Overview](http://druid.io/docs/latest/design/index.html)
- Storage
    - [Segments](http://druid.io/docs/latest/design/segments.html)
- Node Types
    - [Historical](http://druid.io/docs/latest/design/historical.html)
    - [Broker](http://druid.io/docs/latest/design/broker.html)
    - [Coordinator](http://druid.io/docs/latest/design/coordinator.html)
    - [Indexing Service](http://druid.io/docs/latest/design/indexing-service.html)
        - [Overlord](http://druid.io/docs/latest/design/overlord.html)
        - [MiddleManager](http://druid.io/docs/latest/design/middlemanager.html)
        - [Peons](http://druid.io/docs/latest/design/peons.html)
    - [Realtime (Deprecated)](http://druid.io/docs/latest/design/realtime.html)
- Dependencies
    - [Deep Storage](http://druid.io/docs/latest/dependencies/deep-storage.html)
    - [Metadata Storage](http://druid.io/docs/latest/dependencies/metadata-storage.html)
    - [ZooKeeper](http://druid.io/docs/latest/dependencies/zookeeper.html)

### Operations

- [API Reference](http://druid.io/docs/latest/operations/api-reference.html)
    - [Coordinator](http://druid.io/docs/latest/operations/api-reference.html#coordinator)
    - [Overlord](http://druid.io/docs/latest/operations/api-reference.html#overlord)
    - [MiddleManager](http://druid.io/docs/latest/operations/api-reference.html#middlemanager)
    - [Peon](http://druid.io/docs/latest/operations/api-reference.html#peon)
    - [Broker](http://druid.io/docs/latest/operations/api-reference.html#broker)
    - [Historical](http://druid.io/docs/latest/operations/api-reference.html#historical)
- [Including Extensions](http://druid.io/docs/latest/operations/including-extensions.html)
- [Data Retention](http://druid.io/docs/latest/operations/rule-configuration.html)
- [Metrics and Monitoring](http://druid.io/docs/latest/operations/metrics.html)
- [Alerts](http://druid.io/docs/latest/operations/alerts.html)
- [Updating the Cluster](http://druid.io/docs/latest/operations/rolling-updates.html)
- [Different Hadoop Versions](http://druid.io/docs/latest/operations/other-hadoop.html)
- [Performance FAQ](http://druid.io/docs/latest/operations/performance-faq.html)
- [Dump Segment Tool](http://druid.io/docs/latest/operations/dump-segment.html)
- [Insert Segment Tool](http://druid.io/docs/latest/operations/insert-segment-to-db.html)
- [Pull Dependencies Tool](http://druid.io/docs/latest/operations/pull-deps.html)
- [Recommendations](http://druid.io/docs/latest/operations/recommendations.html)
- [TLS Support](http://druid.io/docs/latest/operations/tls-support.html)
- [Password Provider](http://druid.io/docs/latest/operations/password-provider.html)

### Configuration

- [Configuration Reference](http://druid.io/docs/latest/configuration/index.html)
- [Recommended Configuration File Organization](http://druid.io/docs/latest/configuration/index.html#recommended-configuration-file-organization)
- [JVM Configuration Best Practices](http://druid.io/docs/latest/configuration/index.html#jvm-configuration-best-practices)
- [Common Configuration](http://druid.io/docs/latest/configuration/index.html#common-configurations)
- [Coordinator](http://druid.io/docs/latest/configuration/index.html#coordinator)
- [Overlord](http://druid.io/docs/latest/configuration/index.html#overlord)
- [MiddleManager & Peons](http://druid.io/docs/latest/configuration/index.html#middle-manager-and-peons)
- [Broker](http://druid.io/docs/latest/configuration/index.html#broker)
- [Historical](http://druid.io/docs/latest/configuration/index.html#historical)
- [Caching](http://druid.io/docs/latest/configuration/index.html#cache-configuration)
- [General Query Configuration](http://druid.io/docs/latest/configuration/index.html#general-query-configuration)
- [Configuring Logging](http://druid.io/docs/latest/configuration/logging.html)

### Development

- [Overview](http://druid.io/docs/latest/development/overview.html)
- [Libraries](http://druid.io/docs/latest/development/libraries.html)
- [Extensions](http://druid.io/docs/latest/development/extensions.html)
- [JavaScript](http://druid.io/docs/latest/development/javascript.html)
- [Build From Source](http://druid.io/docs/latest/development/build.html)
- [Versioning](http://druid.io/docs/latest/development/versioning.html)
- [Integration](http://druid.io/docs/latest/development/integrating-druid-with-other-technologies.html)
- Experimental Features
    - [Overview](http://druid.io/docs/latest/development/experimental.html)
    - [Approximate Histograms and Quantiles](http://druid.io/docs/latest/development/extensions-core/approximate-histograms.html)
    - [Datasketches](http://druid.io/docs/latest/development/extensions-core/datasketches-extension.html)
    - [Geographic Queries](http://druid.io/docs/latest/development/geo.html)
    - [Router](http://druid.io/docs/latest/development/router.html)
    - [Kafka Indexing Service](http://druid.io/docs/latest/development/extensions-core/kafka-ingestion.html)

### Misc

- [Druid Expressions Language](http://druid.io/docs/latest/misc/math-expr.html)
- [Papers & Talks](http://druid.io/docs/latest/misc/papers-and-talks.html)
- [Thanks](http://druid.io/thanks.html)
