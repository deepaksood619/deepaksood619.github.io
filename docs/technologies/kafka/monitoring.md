# Monitoring

## Monitoring / Management Tools

1. Kafka Manager
    1. https://github.com/yahoo/CMAK
    2. https://hub.docker.com/r/kafkamanager/kafka-manager
2. Kafka Center - https://github.com/xaecbd/KafkaCenter
3. Kafka lag exporter
    1. https://github.com/lightbend/kafka-lag-exporter
    2. https://www.lightbend.com/blog/monitor-kafka-consumer-group-latency-with-kafka-lag-exporter
4. Burrow
5. [GitHub - obsidiandynamics/kafdrop: Kafka Web UI](https://github.com/obsidiandynamics/kafdrop)
    1. [About | UI for Apache Kafka](https://docs.kafka-ui.provectus.io/)
6. Kafka-UI
    1. [GitHub - provectus/kafka-ui: Open-Source Web UI for Apache Kafka Management](https://github.com/provectus/kafka-ui)
    2. [About | UI for Apache Kafka](https://docs.kafka-ui.provectus.io/)
7. Kafka Tool
8. Kafka Cruise Control
9. Kakfa-monitor https://github.com/linkedin/kafka-monitor
10. [kadeck | ‍Kafka UI - Your team's Apache Kafka tool belt](https://www.kadeck.com/)

[Kafka Administration and Monitoring UI Tools](https://dzone.com/articles/kafka-administration-and-monitoring-ui-tools)

## Confluent Control Center (C3)

Confluent Control Center is a web-based tool for managing and monitoring Apache Kafka. Control Center provides the functionality for building and monitoring production data pipelines and streaming applications.

### Data Streams

You can use Control Center to monitor your data streams end to end, from producer to consumer. Use Control Center to verify that every message sent is received (and received only once), and to measure system performance end to end. Drill down to better understand cluster usage, and identify any problems.

### System Health

Control Center can monitor the health of your Kafka clusters. You can see trends for important broker and topic health metrics, as well as set alerts on important cluster KPIs.

### Kafka Connect Configuration

You can also use Control Center to manage and monitor Kafka Connect: the open source toolkit for connecting external systems to Kafka. You can easily add new sources to load data from external data systems and new sinks to write data into external data systems. Additionally, you can manage, monitor, and configure connectors with Confluent Control Center.

https://docs.confluent.io/current/tutorials/cp-demo/docs/index.html#cp-demo

## Cruise Control

Cruise Control is a product that helps run Apache Kafka clusters at large scale. Due to the popularity of Apache Kafka, many companies have increasingly large Kafka clusters with hundreds of brokers. At LinkedIn, we have 10K+ Kafka brokers, which means broker deaths are an almost daily occurrence and balancing the workload of Kafka also becomes a big overhead.

Kafka Cruise Control is designed to address this operational scalability issue.

**Actions**

- **fix** - fix the problem right away (e.g. start a rebalance, fix offline replicas)
- **check** - check the situation again after a configurable delay (e.g. adopt a grace period before fixing broker failures)
- **ignore** - ignore the anomaly (e.g. self-healing is disabled)

- [GitHub - linkedin/cruise-control: Cruise-control is the first of its kind to fully automate the dynamic workload rebalance and self-healing of a Kafka cluster. It provides great value to Kafka users by simplifying the operation of Kafka clusters.](https://github.com/linkedin/cruise-control)
- [Introducing Kafka Cruise Control Frontend](https://engineering.linkedin.com/blog/2019/02/introducing-kafka-cruise-control-frontend)

## Tips

1. Monitor both space and time retention
2. Keep as little transient data around
3. Have a quick way to increase retention
4. Use multi-tiered replication alerts
5. Balance your cluster by IO and leadership
6. Make sure lag monitoring works when consumers stop committing

## Monitoring (Definitive Guide)

- Metrics Basics
- Kafka Broker Metrics
    - Under-replicated partitions
    - Broker metrics
    - Topic and partition metrics
    - JVM monitoring
    - OS monitoring
    - Logging
- Client Monitoring
    - Producer metrics
    - Consumer metrics
    - Quotas
- Lag Monitoring
- End-to-End Monitoring

[How to monitor your Kafka cluster efficiently? | by Marco Catalano | Quantyca | Medium](https://medium.com/quantyca/how-to-monitor-your-kafka-cluster-efficiently-d45ce37c02f1)

[Monitoring Kafka Performance Metrics | Datadog](https://www.datadoghq.com/blog/monitoring-kafka-performance-metrics/)

[Exploring Kafka UI Solutions: Features, Comparisons, and Use Cases | The Write Ahead Log](https://platformatory.io/blog/comparision-of-kafka-ui-monitoring-tools/)
