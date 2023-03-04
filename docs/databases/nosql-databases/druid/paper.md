# Paper

1. Realtime Node

Real-time nodes encapsulate the functionality to ingest and query event streams. Events indexed via these nodes are immediately available for querying. The nodes are only concerned with events for some small time range and periodically hand off immutable batches of events they have collected over this small time range to other nodes in the Druid cluster that are specialized in dealing with batches of immutable events. Real-time nodes leverage Zookeeper [19] for coordination with the rest of the Druid cluster. The nodes announce their online state and the data they serve in Zookeeper.

Real-time nodes maintain an in-memory index buffer for all in- coming events. These indexes are incrementally populated as events are ingested and the indexes are also directly queryable. Druid be- haves as a row store for queries on events that exist in this JVM heap-based buffer. To avoid heap overflow problems, real-time nodes persist their in-memory indexes to disk either periodically or after some maximum row limit is reached. This persist process converts data stored in the in-memory buffer to a column oriented storage format described in Section 4. Each persisted index is im- mutable and real-time nodes load persisted indexes into off-heap memory such that they can still be queried. This process is de- scribed in detail in [33] and is illustrated in Figure 2.

On a periodic basis, each real-time node will schedule a back- ground task that searches for all locally persisted indexes. The task merges these indexes together and builds an immutable block of data that contains all the events that have been ingested by a real- time node for some span of time. We refer to this block of data as a "segment". During the handoff stage, a real-time node uploads this segment to a permanent backup storage, typically a distributed file system such as S3 [12] or HDFS [36], which Druid refers to as "deep storage". The ingest, persist, merge, and handoff steps are fluid; there is no data loss during any of the processes.
2. Historical Nodes

Historical nodes encapsulate the functionality to load and serve the immutable blocks of data (segments) created by real-time nodes. In many real-world workflows, most of the data loaded in a Druid cluster is immutable and hence, historical nodes are typically the main workers of a Druid cluster. Historical nodes follow a shared- nothing architecture and there is no single point of contention among the nodes. The nodes have no knowledge of one another and are operationally simple; they only know how to load, drop, and serve immutable segments.

Similar to real-time nodes, historical nodes announce their on- line state and the data they are serving in Zookeeper. Instructions to load and drop segments are sent over Zookeeper and contain infor- mation about where the segment is located in deep storage and how to decompress and process the segment. Before a historical node downloads a particular segment from deep storage, it first checks a local cache that maintains information about what segments already exist on the node. If information about a segment is not present in the cache, the historical node will proceed to download the segment from deep storage. Once pro- cessing is complete, the segment is announced in Zookeeper. At this point, the segment is queryable. The local cache also allows for historical nodes to be quickly updated and restarted. On startup, the node examines its cache and immediately serves whatever data it finds. Historical nodes can support read consistency because they only deal with immutable data. Immutable data blocks also enable a sim- ple parallelization model: historical nodes can concurrently scan and aggregate immutable blocks without blocking.

*Tiers*

Historical nodes can be grouped in different tiers, where all nodes in a given tier are identically configured. Different performance and fault-tolerance parameters can be set for each tier. The purpose of tiered nodes is to enable higher or lower priority segments to be dis- tributed according to their importance. For example, it is possible to spin up a "hot" tier of historical nodes that have a high num- ber of cores and large memory capacity. The "hot" cluster can be configured to download more frequently accessed data. A parallel "cold" cluster can also be created with much less powerful backing hardware. The "cold" cluster would only contain less frequently accessed segments.
3. Broker Nodes

Broker nodes act as query routers to historical and real-time nodes. Broker nodes understand the metadata published in Zookeeper about what segments are queryable and where those segments are located. Broker nodes route incoming queries such that the queries hit the right historical or real-time nodes. Broker nodes also merge partial results from historical and real-time nodes before returning a final consolidated result to the caller.
*Caching*

Broker nodes contain a cache with a LRU [31, 20] invalidation strategy. The cache can use local heap memory or an external distributed key/value store such as Memcached [16]. Each time a bro- ker node receives a query, it first maps the query to a set of seg- ments. Results for certain segments may already exist in the cache and there is no need to recompute them. For any results that do not exist in the cache, the broker node will forward the query to the correct historical and real-time nodes. Once historical nodes return their results, the broker will cache these results on a per segment ba- sis for future use.

Real-time data is never cached and hence requests for real-time data will al- ways be forwarded to real-time nodes. Real-time data is perpetually changing and caching the results is unreliable.

The cache also acts as an additional level of data durability. In the event that all historical nodes fail, it is still possible to query results if those results already exist in the cache.
4. Coordinator Nodes

Druid coordinator nodes are primarily in charge of data manage- ment and distribution on historical nodes. The coordinator nodes tell historical nodes to load new data, drop outdated data, replicate data, and move data to load balance. Druid uses a multi-version concurrency control swapping protocol for managing immutable segments in order to maintain stable views. If any immutable seg- ment contains data that is wholly obsoleted by newer segments, the outdated segment is dropped from the cluster. Coordinator nodes undergo a leader-election process that determines a single node that runs the coordinator functionality. The remaining coordinator nodes act as redundant backups.

A coordinator node runs periodically to determine the current state of the cluster. It makes decisions by comparing the expected state of the cluster with the actual state of the cluster at the time of the run. As with all Druid nodes, coordinator nodes maintain a Zookeeper connection for current cluster information. Coordinator nodes also maintain a connection to a MySQL database that con- tains additional operational parameters and configurations. One of the key pieces of information located in the MySQL database is a table that contains a list of all segments that should be served by historical nodes. This table can be updated by any service that cre- ates segments, for example, real-time nodes. The MySQL database also contains a rule table that governs how segments are created, destroyed, and replicated in the cluster.
*Rules*

Rules govern how historical segments are loaded and dropped from the cluster. Rules indicate how segments should be assigned to different historical node tiers and how many replicates of a segment should exist in each tier. Rules may also indicate when segments should be dropped entirely from the cluster. Rules are usually set for a period of time
LoadBalancing

These query patterns suggest replicating recent historical seg- ments at a higher rate, spreading out large segments that are close in time to different historical nodes, and co-locating segments from different data sources.

## Storage Engine

- In-memory storage engine
- Memory mapped storage engine

## Query API

Druid has its own query language and accepts queries as POST requests. Broker, historical, and real-time nodes all share the same query API.

## References

<http://static.druid.io/docs/druid.pdf>
