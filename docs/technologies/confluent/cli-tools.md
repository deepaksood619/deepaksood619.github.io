# CLI Tools

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

## Kafka

- **kafka-acls** - This tool adds, removes, and lists ACLs. For more information, see [Manage Access Control Lists (ACLs) for Authorization in Confluent Platform](https://docs.confluent.io/platform/current/security/authorization/acls/manage-acls.html#kafka-acl-tool).
- **kafka-add-brokers** - This tool describes the status of the Confluent Balancer broker addition operations. For more information, see [Add a broker (restart)](https://docs.confluent.io/platform/current/clusters/sbc/sbc-tutorial.html#add-a-broker-sbc).
- **kafka-alter-broker-health** - This tool interacts with the Broker Health API to manage and describe the health status of Kafka brokers. You can use this tool to set a broker component’s health status by specifying the component (for example, `UNSPECIFIED`, `STORAGE`, `NETWORK`, or `EXTERNAL_CONNECTIVITY_STARTUP`) and applying a desired health status (`DEGRADED` or `HEALTHY`). The tool can also provide details on degraded brokers, which are less preferred as partition leaders than healthy brokers.
- **kafka-avro-console-consumer** - This tool receives Avro data in JSON format from the console. For more information, see [Formats, Serializers, and Deserializers](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html).
- **kafka-avro-console-producer** - This tool sends Avro data in JSON format to the console. For more information, see [Formats, Serializers, and Deserializers](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html).
- **kafka-broker-api-versions** - This tool displays the API versions of all nodes in the cluster.
- **kafka-cells-admin** - This tool manages cells in a Kafka cluster.
- **kafka-configs** - This tool updates broker configs and topic configs. For more information, see [Dynamically change broker settings](https://docs.confluent.io/platform/current/kafka/dynamic-config.html#kafka-dyn-broker-config) and [Modifying topics](https://docs.confluent.io/platform/current/kafka/post-deployment.html#modifying-topics).
- **kafka-client-metrics** - This tool enables you to describe and change client metric configuration values. For example, use the following command to list client metrics. `kafka-client-metrics --bootstrap-server <host:port> --list`
- **kafka-cluster** - Use this tool to get the ID of a cluster or unregister a cluster. For more information, see [Generate and format IDs](https://docs.confluent.io/platform/current/kafka-metadata/config-kraft.html#generate-format-ids).
- **kafka-cluster-links** - This tool creates and manages Cluster Linking between Confluent Enterprise and Confluent Cloud clusters.
- **kafka-console-consumer** - This tool reads data from Kafka topics and sends output to STDOUT. For more information, see [Kafka Consumer for Confluent Platform](https://docs.confluent.io/platform/current/clients/consumer.html#kafka-consumer).
- **kafka-console-producer** - This tool sends data to Kafka topics. For more information, see [Kafka Producer for Confluent Platform](https://docs.confluent.io/platform/current/clients/producer.html#kafka-producer).
- **kafka-consumer-groups** - This tool gets a list of the active groups in the cluster. For more information, see [Kafka consumer group tool](https://docs.confluent.io/platform/current/clients/consumer.html#kafka-consumer-describe-group).
- **kafka-consumer-perf-test** - This tool tests the consumer performance for the Kafka cluster.
- **kafka-delegation-tokens** - This tool creates, renews, expires, and describes delegation tokens. For more information, see [Use Delegation Tokens for Authentication in Confluent Platform](https://docs.confluent.io/platform/current/security/authentication/delegation-tokens/overview.html#kafka-sasl-delegate-auth).
- **kafka-delete-records** - This tool deletes partition records.
- **kafka-dump-log** - This tool parses a log file and dumps its contents to the console. This is useful for debugging log segments. For more information, see [Debug log segments](https://docs.confluent.io/platform/current/kafka-metadata/config-kraft.html#debug-log-segments).
- **kafka-features** - This tool manages feature flags to disable or enable functionality at runtime in Kafka.
- **kafka-get-offsets** - This tool provides an interactive shell for getting topic-partition offsets.
- **kafka-groups** - This tool helps to list groups of all types.
- **kafka-json-schema-console-producer** - This tool sends JSON schema data in JSON format from the console. For more information, see [Formats, Serializers, and Deserializers](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html).
- **kafka-json-schema-console-consumer** - This tool receives JSON schema data in JSON format from the console. For more information, see [Formats, Serializers, and Deserializers](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html).
- **kafka-leader-election** - This tool initiates leader election for topic partitions.
- **kafka-leader-exclusion** - This tool makes calls to Leadership Priority API. It changes leadership priority and describes demoted brokers. Demoted brokers will be less preferred as partition leaders compared to brokers with normal leadership priority.
- **kafka-log-dirs** - This tool gets a list of replicas per log directory on a broker.
- **kafka-metadata-quorum** - This tool describes the metadata quorum status. This tool is useful when you are debugging a cluster in KRaft mode. For more information, see [Describe runtime status](https://docs.confluent.io/platform/current/kafka-metadata/config-kraft.html#describe-runtime-status).
- **kafka-metadata-shell** - This tool enables you to interactively examine the metadata stored in a KRaft cluster. For more information, see [Inspect the metadata partition](https://docs.confluent.io/platform/current/kafka-metadata/config-kraft.html#metadata-shell).
- **kafka-mirror-maker** - This tool runs MirrorMaker. For more information, see [Kafka MirrorMaker: A Comprehensive Guide](https://www.confluent.io/learn/kafka-mirrormaker/?session_ref=https%3A%2F%2Fdocs.confluent.io%2Fkafka%2Foperations-tools%2Fkafka-tools.html&url_ref=https%3A%2F%2Fdocs.confluent.io%2Fplatform%2Fcurrent%2Ftools%2Fcli-reference.html).
- **kafka-mirrors** - This tool creates and manages identical mirror topics between clusters using Cluster Linking.
- **kafka-mqtt-run-class** - This tool is a thin wrapper around the MQTT Proxy Java class. It is mainly used by the start and stop scripts and should not be run by itself. For more information, see [MQTT Proxy for Confluent Platform](https://docs.confluent.io/platform/current/kafka-mqtt/intro.html#kafka-mqtt-intro).
- **kafka-mqtt-start** - This tool starts MQTT Proxy. For more information, see [MQTT Proxy for Confluent Platform](https://docs.confluent.io/platform/current/kafka-mqtt/intro.html#kafka-mqtt-intro).
- **kafka-mqtt-stop** - This tool stops MQTT Proxy. For more information, see [MQTT Proxy for Confluent Platform](https://docs.confluent.io/platform/current/kafka-mqtt/intro.html#kafka-mqtt-intro).
- **kafka-preferred-replica-election** - This tool transfers the leadership for each partition back to the “preferred replica” and is used to balance leadership among the servers. For more information, see the [Apache Kafka wiki](https://cwiki.apache.org/confluence/display/KAFKA/Replication+tools). This tool has been deprecated in Kafka 2.4 and was replaced by `kafka-leader-election`.
- **kafka-producer-perf-test** - This tool tests the producer performance for the Kafka cluster. For more information, see [Quick Start for Auto Data Balancing in Confluent Platform](https://docs.confluent.io/platform/current/clusters/rebalancer/quickstart.html#rebalancer).
- **kafka-protobuf-console-producer** - This tool sends Protobuf data in JSON format to the console. For more information, see [Formats, Serializers, and Deserializers](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html).
- **kafka-protobuf-console-consumer** - This tool receives Protobuf data in JSON format from the console. For more information, see [Formats, Serializers, and Deserializers](https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html).
- **kafka-reassign-partitions** - This tool moves topic partitions between replicas. For more information, see [Scaling the cluster (adding a node to a Kafka cluster)](https://docs.confluent.io/platform/current/kafka/post-deployment.html#scaling-the-cluster).
- **kafka-rebalance-cluster** - This tool provides visibility into the status of the SBC component, informing whether the component is disabled, starting up, or ready to serve requests. For more information, see [Monitoring the balancer with kafka-rebalance-cluster](https://docs.confluent.io/platform/current/clusters/sbc/configuration-options.html#sbc-kafka-rebalance-cluster).
- **kafka-remove-brokers** - This tool executes and describes broker removal operations. For more information, see [kafka-remove-brokers](https://docs.confluent.io/platform/current/clusters/sbc/configuration-options.html#sbc-command-remove-brokers).
- **kafka-replica-exclusions** - This tool sets, removes and describes broker replica placement exclusion.
- **kafka-replica-status** - This tool prints out the replica status of partitions.
- **kafka-replica-verification** - This tool validates that all replicas for a set of topics have the same data.
- **kafka-rest-run-class** - This tool is a thin wrapper around the REST Proxy Java class. It is mainly used by the start and stop scripts and should not be run by itself. For more information, see [Confluent REST Proxy for Apache Kafka](https://docs.confluent.io/platform/current/kafka-rest/index.html#kafkarest-intro).
- **kafka-rest-start** - This tool starts the REST Proxy. For more information, see [Confluent REST Proxy for Apache Kafka](https://docs.confluent.io/platform/current/kafka-rest/index.html#kafkarest-intro).
- **kafka-rest-stop** - This tool stops the REST Proxy. For more information, see [Confluent REST Proxy for Apache Kafka](https://docs.confluent.io/platform/current/kafka-rest/index.html#kafkarest-intro).
- **kafka-rest-stop-service** - This tool stops all running instances of the REST Proxy. For more information, see [Confluent REST Proxy for Apache Kafka](https://docs.confluent.io/platform/current/kafka-rest/index.html#kafkarest-intro).
- **kafka-run-class** - This tool is a thin wrapper around the Kafka Java class. It is mainly used by the start and stop scripts and should not be run by itself.
- **kafka-server-start** - This tool starts Kafka.
- **kafka-server-stop** - This tool stops an Kafka broker or controller. Use the `process-role` parameter to specify a broker or controller.
- **kafka-share-groups** - This tool helps to list, describe, reset and delete share groups.
- **kafka-storage** - This tool generates a Cluster UUID and format storages with the cluster ID when running Kafka in KRaft mode.
- **kafka-streams-application-reset** - This tool resets an application and forces it to reprocess its data from the beginning. For more information, see [Reset Kafka Streams Applications in Confluent Platform](https://docs.confluent.io/platform/current/streams/developer-guide/app-reset-tool.html#streams-developer-guide-app-reset).
- **kafka-topics** - This tool is used to create, delete, describe, or change a Kafka topic. For more information, see [Adding topics](https://docs.confluent.io/platform/current/kafka/post-deployment.html#adding-topics).
- **kafka-transactions** - This tool lists and describes transactions. Use to detect and abort hanging transactions.
- **kafka-verifiable-consumer** - This tool consumes messages from a topic and emits consumer events as JSON objects to STDOUT. For example, group rebalances, received messages, and offsets committed.
- **kafka-verifiable-producer** - This tool produces increasing integers to the specified topic and prints JSON metadata to STDOUT on each “send” request. This makes externally visible which messages have been `acked` and which have not.

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

## Others

- **security-plugins-run-class** - This tool is a thin wrapper around the Confluent Security Plugins Java class. It is mainly used by the start and stop scripts and should not be run by itself.
- **sr-acl-cli** - This tool runs the Schema Registry ACL CLI tool. For more information, see [Schema Registry ACL Authorizer for Confluent Platform](https://docs.confluent.io/platform/current/confluent-security-plugins/schema-registry/authorization/sracl_authorizer.html#confluentsecurityplugins-sracl-authorizer).

## Links

- [CLI Tools Shipped With Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/tools/cli-reference.html)
- [Kafka Command Line Interface (CLI) Tools \| Confluent Documentation](https://docs.confluent.io/kafka/operations-tools/kafka-tools.html)
