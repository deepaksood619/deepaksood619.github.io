# CLI Tools

- [Kafka Commands](technologies/kafka/kafka-commands/readme.md)

## Confluent

- **confluent** - This tool manages Confluent Cloud and Confluent Platform, including RBAC, secrets, and the ability to deploy a single-node Confluent Platform instance as well as creating, updating, and deleting topics. For more information, see [Confluent CLI](https://docs.confluent.io/confluent-cli/current/index.html?session_ref=https%3A%2F%2Fdocs.confluent.io%2Fkafka%2Foperations-tools%2Fkafka-tools.html&url_ref=https%3A%2F%2Fdocs.confluent.io%2Fplatform%2Fcurrent%2Ftools%2Fcli-reference.html).
- **confluent-hub** - This tool installs and manages connectors. For more information, see [Confluent Marketplace Command Reference](https://docs.confluent.io/kafka-connectors/self-managed/confluent-hub/command-reference/index.html).
- **confluent-rebalancer** - This tool balances data and partitions between brokers. For more information, see [Quick Start for Auto Data Balancing in Confluent Platform](https://docs.confluent.io/platform/current/clusters/rebalancer/quickstart.html#rebalancer).

## Connect

- **connect-distributed** - This tool runs Connect in distributed mode. For more information, see [Getting Started with Kafka Connect](https://docs.confluent.io/kafka-connectors/self-managed/userguide.html).
- **connect-standalone** - This tool runs Connect in standalone mode. For more information, see see [Getting Started with Kafka Connect](https://docs.confluent.io/kafka-connectors/self-managed/userguide.html).

## Control Center

- **control-center-console-consumer** - This tool starts the Control Center console consumer.
- **control-center-export** - This tool exports data from Control Center to an output file.
- **control-center-reset** - This tool resets Control Center and deletes all data. For more information, see This tool resets Control Center and deletes all data. For more information, see [Control Center Installation](https://docs.confluent.io/control-center/current/installation/overview.html).
- **control-center-run-class** - This tool is a thin wrapper around the Control Center Java class. It is mainly used by the start and stop scripts and should not be run by itself.
- **control-center-set-acls** - This tool is used to set the Control Center ACLs.
- **control-center-start** - This tool starts Control Center. For a usage example, see [Start Confluent Platform](https://docs.confluent.io/platform/current/installation/installing_cp/zip-tar.html#start-c3-zip).
- **control-center-stop** - This tool stops Control Center. For a usage example, see [Enable and disable dynamic editing of broker configurations](https://docs.confluent.io/control-center/current/clusters.html#ff-c3-edit-broker-configs)

## KSQL

- **ksql** - This tool runs ksqlDB. For more information, see [Configure ksqlDB CLI](https://docs.confluent.io/platform/current/ksqldb/operate-and-deploy/installation/cli-config.html#ksqldb-install-configure-cli).
- **ksql-datagen** - This tool generates test data that complies with a custom schema that you define. For more information, see [kafka-connect-datagen](https://github.com/confluentinc/kafka-connect-datagen).
- **ksql-migrations** - This tool manages metadata schemas for your ksqlDB clusters by applying statements from migration files to your ksqlDB clusters. For more info, see [Manage metadata schemas](https://docs.confluent.io/platform/current/ksqldb/operate-and-deploy/migrations-tool.html#ksqldb-manage-metadata-schemas).
- **ksql-restore-command** - This tool restores the command topic.
- **ksql-run-class** - This tool is a thin wrapper around the ksqlDB Java class. It is mainly used by the start and stop scripts and should not be run by itself.
- **ksql-server-start** - This tool starts the ksqlDB server. For more information, see [Starting the ksqlDB Server](https://docs.confluent.io/platform/current/ksqldb/installing.html#start-ksql-server).
- **ksql-server-stop** - This tool stops the ksqlDB server. For more information, see [Operate ksqlDB for Confluent Platform](https://docs.confluent.io/platform/current/ksqldb/operations.html#ksql-operations).
- **ksql-stop** - This tool stops the ksqlDB CLI. For more information, see [Install ksqlDB for Confluent Platform](https://docs.confluent.io/platform/current/ksqldb/installing.html#install-overview).
- **ksql-test-runner** - This tool is a ksqlDB testing tool that can test a set of KSQL statements.

## Replicator

- **replicator** - This tool runs Replicator. For more information, see [Overview of Multi-Datacenter Deployment Solutions on Confluent Platform](https://docs.confluent.io/platform/current/multi-dc-deployments/index.html#multi-dc).
- **replicator-verifier** - This tool verifies the Replicator configuration. For more information, see [Verify Replicator Configuration for Confluent Platform](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/replicator-verifier.html#replicator-verifier).

## Schema Registry

- **schema-registry-run-class** - This tool is a thin wrapper around the Schema Registry Java class. It is mainly used by the start and stop scripts and should not be run by itself. For more information, see [Schema Registry API Usage Examples for Confluent Platform](https://docs.confluent.io/platform/current/schema-registry/develop/using.html#schemaregistry-using).
- **schema-registry-start** - This tool starts Schema Registry. For more information, see [Schema Registry API Usage Examples for Confluent Platform](https://docs.confluent.io/platform/current/schema-registry/develop/using.html#schemaregistry-using).
- **schema-registry-stop** - This tool stops Schema Registry. For more information, see [Schema Registry API Usage Examples for Confluent Platform](https://docs.confluent.io/platform/current/schema-registry/develop/using.html#schemaregistry-using).
- **schema-registry-stop-service** - This tool stops all running instances of the Schema Registry. For more information, see [Schema Registry API Usage Examples for Confluent Platform](https://docs.confluent.io/platform/current/schema-registry/develop/using.html#schemaregistry-using).

## Trogdor

This tool is a test framework for Kafka. Trogdor can run benchmarks and other workloads. Trogdor can also inject faults in order to stress test the system.

```bash
The Trogdor fault injector.

Usage:
  ./trogdor.sh [action] [options]

Actions:
  agent: Run the trogdor agent.
  coordinator: Run the trogdor coordinator.
  client: Run the client which communicates with the trogdor coordinator.
  agent-client: Run the client which communicates with the trogdor agent.
  help: This help message.
```

[kafka/TROGDOR.md at master · a0x8o/kafka · GitHub](https://github.com/a0x8o/kafka/blob/master/TROGDOR.md)

[The Kafka benchmarking suite \| The Write Ahead Log](https://platformatory.io/blog/kafka-client-performance-metrics/)

Alternative - [The OpenMessaging Benchmark Framework](https://openmessaging.cloud/docs/benchmarks/)

### Performance Testing

#### kafka-consumer-perf-test

This tool tests the consumer performance for the Kafka cluster.

```bash
kafka-consumer-perf-test \
  --bootstrap-server localhost:9092 \
  --topic topicname \
  --group consumer_group \
  --threads 8 \
  --messages 1000000
```

#### kafka-producer-perf-test

This tool tests the producer performance for the Kafka cluster. For more information, see [Quick Start for Auto Data Balancing in Confluent Platform](https://docs.confluent.io/platform/current/clusters/rebalancer/quickstart.html#rebalancer).

The most efficient way to generate massive load is using the built-in `kafka-producer-perf-test` script. This tool is designed for benchmarking and can hit 100,000+ msgs/sec from a single client.

```bash
kafka-producer-perf-test \
	--topic your_topic \
	--num-records 1000000 \
	--record-size 100 \
	--throughput 10000 \
	--producer-props bootstrap.servers=<broker_url> acks=1 batch.size=65536 linger.ms=10
```

## Demos / Hands-on / Learning

- [GitHub - confluentinc/demo-scene: Scripts and samples to support Confluent Demos, Talks, and Blogs. Not all of the examples in this repository are kept up to date. For automated tutorials and QA'd code, see https://github.com/confluentinc/tutorials/](https://github.com/confluentinc/demo-scene)
- [GitHub - confluentinc/cp-demo: Confluent Platform Demo including Apache Kafka, ksqlDB, Control Center, Schema Registry, Security, Schema Linking, and Cluster Linking](https://github.com/confluentinc/cp-demo)
- [GitHub - conflkrupa/F1-Racing-Leaderboard-POC: This is an application demonstrating how a real-time gaming leaderboard application can be built by leveraging Confluent cloud.](https://github.com/conflkrupa/F1-Racing-Leaderboard-POC/)
	- [GitHub - kos-conf/f1-leaderboard-workshop: This hands-on lab will guide you through building a real-time F1 racing leaderboard application. You'll learn how to implement real-time data streaming, performance analytics, and live dashboards.](https://github.com/kos-conf/f1-leaderboard-workshop)
- [GitHub - confluentinc/online-retailer-flink-demo at gko-2026](https://github.com/confluentinc/online-retailer-flink-demo/tree/gko-2026)
- [GitHub - confluentinc/quickstart-streaming-agents at gko](https://github.com/confluentinc/quickstart-streaming-agents/tree/gko)
	- Lab1 - Price Matching Orders With MCP Tool Calling
	- Lab2 - Vector Search & RAG
	- Lab3 - Agentic Fleet Management Using Confluent Intelligence
- [GitHub - confluentinc/examples: Apache Kafka, Apache Flink and Confluent Platform examples and demos · GitHub](https://github.com/confluentinc/examples)

## Others

- **security-plugins-run-class** - This tool is a thin wrapper around the Confluent Security Plugins Java class. It is mainly used by the start and stop scripts and should not be run by itself.
- **sr-acl-cli** - This tool runs the Schema Registry ACL CLI tool. For more information, see [Schema Registry ACL Authorizer for Confluent Platform](https://docs.confluent.io/platform/current/confluent-security-plugins/schema-registry/authorization/sracl_authorizer.html#confluentsecurityplugins-sracl-authorizer).

## Links

- [CLI Tools Shipped With Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/tools/cli-reference.html)
- [Kafka Command Line Interface (CLI) Tools \| Confluent Documentation](https://docs.confluent.io/kafka/operations-tools/kafka-tools.html)
