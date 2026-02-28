# Confluent Cloud Monitoring

## [Log and Monitor](https://docs.confluent.io/cloud/current/monitoring/index.html)

- [Metrics](https://docs.confluent.io/cloud/current/monitoring/metrics-api.html)
- [Metrics Integrations](https://docs.confluent.io/cloud/current/monitoring/third-party-integration.html)
- [Manage Notifications](https://docs.confluent.io/cloud/current/monitoring/configure-notifications.html)
- [Monitor Consumer Lag](https://docs.confluent.io/cloud/current/monitoring/monitor-lag.html)
- [Monitor Dedicated Clusters](https://docs.confluent.io/cloud/current/monitoring/index-dedicated-cluster-monitor.html)
    - [Monitor Cluster Load](https://docs.confluent.io/cloud/current/monitoring/cluster-load-metric.html)
    - [Manage Performance and Expansion](https://docs.confluent.io/cloud/current/monitoring/monitor-performance.html)
    - [Track Usage by Team](https://docs.confluent.io/cloud/current/monitoring/metrics-by-principal.html)
- [Observability for Kafka Clients to Confluent Cloud](https://docs.confluent.io/cloud/current/monitoring/ccloud-observability.html)
- [FAQ](https://docs.confluent.io/cloud/current/monitoring/monitor-faq.html)

```bash
# Discover Available Resources
curl -X GET 'https://api.telemetry.confluent.cloud/v2/metrics/cloud/descriptors/resources' -u '<API_KEY>:<SECRET>'
```

## Discover available metrics

```bash
curl -X GET 'https://api.telemetry.confluent.cloud/v2/metrics/cloud/descriptors/metrics?resource_type=kafka' -u '<API_KEY>:<SECRET>'
```

### io.confluent.kafka.server

- io.confluent.kafka.server/request_bytes
- io.confluent.kafka.server/response_bytes
- io.confluent.kafka.server/received_bytes
- io.confluent.kafka.server/sent_bytes
- io.confluent.kafka.server/received_records
- io.confluent.kafka.server/sent_records
- io.confluent.kafka.server/retained_bytes
- io.confluent.kafka.server/active_connection_count
- io.confluent.kafka.server/connection_info
- io.confluent.kafka.server/request_count
- io.confluent.kafka.server/deprecated_request_count
- io.confluent.kafka.server/created_acls_count_per_tenant
- io.confluent.kafka.server/partition_count
- io.confluent.kafka.server/successful_authentication_count
- io.confluent.kafka.server/consumer_lag_offsets
- io.confluent.kafka.server/max_pending_rebalance_time_milliseconds
- io.confluent.kafka.server/elastic_cku_count
- io.confluent.kafka.server/rest_produce_request_bytes
- io.confluent.kafka.server/producer_latency_avg_milliseconds
- io.confluent.kafka.server/cluster_link_destination_response_bytes
- io.confluent.kafka.server/cluster_link_source_response_bytes
- io.confluent.kafka.server/cluster_active_link_count
- io.confluent.kafka.server/cluster_link_count
- io.confluent.kafka.server/cluster_link_task_count
- io.confluent.kafka.server/cluster_link_mirror_transition_in_error
- io.confluent.kafka.server/cluster_link_mirror_topic_count
- io.confluent.kafka.server/cluster_link_mirror_topic_offset_lag
- io.confluent.kafka.server/cluster_link_mirror_topic_bytes
- io.confluent.kafka.server/cluster_load_percent
- io.confluent.kafka.server/cluster_load_percent_avg
- io.confluent.kafka.server/cluster_load_percent_max
- io.confluent.kafka.server/dedicated_cku_count
- io.confluent.kafka.server/hot_partition_ingress
- io.confluent.kafka.server/hot_partition_egress

### io.confluent.tableflow

- io.confluent.tableflow/snapshots_generated
- io.confluent.tableflow/rows_added
- io.confluent.tableflow/rows_read
- io.confluent.tableflow/bytes_added
- io.confluent.tableflow/bytes_read
- io.confluent.tableflow/kafka_topic_offset
- io.confluent.tableflow/table_offset
- io.confluent.tableflow/bytes_processed
- io.confluent.tableflow/num_topics
- io.confluent.tableflow/storage
- io.confluent.tableflow/bytes_compacted
- io.confluent.tableflow/files_compacted
- io.confluent.tableflow/rows_skipped
- io.confluent.tableflow/compactions_pending
- io.confluent.tableflow/compaction_duration
- io.confluent.tableflow/delta_bytes_added
- io.confluent.tableflow/delta_rows_added
- io.confluent.tableflow/delta_versions_generated

### io.confluent.kafka.streams

- io.confluent.kafka.streams/kafka_streams_client_state
- io.confluent.kafka.streams/thread_thread_state
- io.confluent.kafka.streams/recording_level
- io.confluent.kafka.streams/process_ratio
- io.confluent.kafka.streams/commit_ratio
- io.confluent.kafka.streams/punctuate_ratio
- io.confluent.kafka.streams/poll_ratio
- io.confluent.kafka.streams/node_e2e_latency_max
- io.confluent.kafka.streams/node_e2e_latency_min
- io.confluent.kafka.streams/size_all_mem_tables_bytes
- io.confluent.kafka.streams/estimate_num_keys
- io.confluent.kafka.streams/block_cache_usage

## Alerting

### 1. Kafka Brokers (The Core)

Broker health is the foundation of your cluster. Alerts here should typically be paged immediately to an on-call engineer.

|**Alert Name**|**Metric to Monitor (JMX / Prometheus)**|**Critical Threshold**|**Why it Matters**|
|---|---|---|---|
|**Offline Partitions**|`OfflinePartitionsCount`|`> 0`|Immediate data unavailability. Producers cannot write, and consumers cannot read from these partitions.|
|**Under-Replicated Partitions (URP)**|`UnderReplicatedPartitions`|`> 0` for > 5 mins|A broker is down, slow, or network issues are preventing replication. Risk of data loss if another broker fails.|
|**Active Controller Count**|`ActiveControllerCount`|`!= 1`|If 0, the cluster cannot manage partitions or reassign leaders. If > 1, you have a "split-brain" scenario (very rare but critical).|
|**Network Processor Idle**|`NetworkProcessorAvgIdlePercent`|`< 30%`|Brokers are bottlenecked on network threads. Time to scale out or optimize client requests.|
|**Request Handler Idle**|`RequestHandlerAvgIdlePercent`|`< 30%`|Brokers are bottlenecked on CPU/Disk IO. They cannot process requests fast enough.|

### 2. Quorum / Metadata (KRaft or ZooKeeper)

If the metadata layer fails, the brokers cannot function, even if their disks and CPUs are completely healthy.

|**Alert Name**|**Component**|**Critical Threshold**|**Why it Matters**|
|---|---|---|---|
|**ZooKeeper Disconnects**|ZooKeeper|`> 0`|Brokers losing connection to ZK will drop out of the cluster, causing massive URP spikes.|
|**Current State / Quorum**|KRaft|`CurrentState != 3` (Leader/Follower)|The KRaft controller quorum has lost consensus. Cluster management is halted.|
|**Metadata Commit Latency**|KRaft / ZK|`> 100ms`|Slow metadata commits will increase latency for producers creating new topics or partitions.|

### 3. Kafka Consumers (Data Reading)

Consumer alerts generally indicate application-level issues, but they can sometimes point to broker network bottlenecks.

|**Alert Name**|**Metric / Symptom**|**Critical Threshold**|**Why it Matters**|
|---|---|---|---|
|**Critical Consumer Lag**|`records-lag-max`|Exceeds SLA (e.g., `> 10,000` msgs)|The consumer is too slow, crashed, or stuck. Data is not being processed in real-time.|
|**High Rebalance Rate**|`join-rate` / `sync-rate`|`> 5` per minute|"Stop-the-world" rebalances halt consumption. Usually caused by consumers continually dying, network blips, or bad `max.poll.interval.ms` configs.|
|**Fetch Latency**|`fetch-latency-avg`|`> 500ms`|Consumers are waiting too long for brokers to return data. Could indicate broker disk read issues.|

### 4. Kafka Producers (Data Ingestion)

Producers are the entry point. If they fail, data is lost before it even enters the pipeline.

|**Alert Name**|**Metric / Symptom**|**Critical Threshold**|**Why it Matters**|
|---|---|---|---|
|**High Error Rate**|`record-error-rate`|`> 1%`|Producers are dropping messages due to authorization failures, message size limits, or broker unavailability.|
|**Retries Spiking**|`record-retry-rate`|Sustained `> 5%` increase|Indicates transient network issues or overloaded brokers. Increases end-to-end latency.|
|**Request Latency**|`request-latency-avg`|`> 1000ms` (varies by `acks`)|Producers are waiting too long for broker acknowledgments, which backs up application buffers.|

### 5. Infrastructure (The Foundation)

Kafka is highly dependent on Disk I/O and Network availability.

|**Alert Name**|**Resource**|**Critical Threshold**|**Action Required**|
|---|---|---|---|
|**Disk Space Exhaustion**|Disk|`> 80%` capacity|**URGENT:** If a broker disk hits 100%, it will crash and corrupt its log segments. Add disk space or lower retention policies immediately.|
|**High Disk I/O Wait**|Disk|`> 20%` iowait|Disks are too slow to keep up with incoming writes. Consider moving to faster SSDs.|
|**Network Saturation**|Network|`> 80%` of NIC capacity|Brokers cannot replicate or serve data fast enough. You need larger instances or a 10Gbps+ network upgrade.|

### 6. Kafka Connect & Ecosystem (If Applicable)

If you use Kafka Connect or Schema Registry, they need their own guardrails.

- **Kafka Connect Task Failures:** Alert if `connector-failed-task-count > 0`. A failed task means the pipeline is broken, even if the connector itself shows as "Running".
- **Schema Registry Unavailability:** Alert on HTTP 5xx errors from the registry. If producers cannot fetch schemas, they will fail to serialize and drop messages.
