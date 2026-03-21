# Kafka Setup

## Kafka confluent single node client setup

https://docs.confluent.io/current/installation/docker/docs/installation/single-node-client.html

```bash
## Create docker network
docker network create confluent

## Start Zookeeper
docker run -d --net=example-docker --name=zookeeper -e ZOOKEEPER_CLIENT_PORT=2181 confluentinc/cp-zookeeper:5.1.0

## Start Confluent Kafka
docker run -d
--net=example-docker
--name=kafka -p 9092:9092
-e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1
confluentinc/cp-kafka:5.1.0

## Start confluent kafka control center
docker run -d
--name=control-center
--net=example-docker
--ulimit nofile=16384:16384
-p 9021:9021
-v /tmp/control-center/data:/var/lib/confluent-control-center
-e CONTROL_CENTER_ZOOKEEPER_CONNECT=zookeeper:2181
-e CONTROL_CENTER_BOOTSTRAP_SERVERS=kafka:9092
-e CONTROL_CENTER_REPLICATION_FACTOR=1
-e CONTROL_CENTER_MONITORING_INTERCEPTOR_TOPIC_PARTITIONS=1
-e CONTROL_CENTER_INTERNAL_TOPICS_PARTITIONS=1
-e CONTROL_CENTER_STREAMS_NUM_STREAM_THREADS=2
-e CONTROL_CENTER_CONNECT_CLUSTER=http://kafka-connect:8082
confluentinc/cp-enterprise-control-center:5.1.0

## Barebones Command
## Installing and running

brew update

brew cask install caskroom/versions/java8

brew install kafka

## Start zookeeper server
zkserver start

bin/zookeeper-server-start.sh config/zookeeper.properties &

## Stop zookeeper server
bin/zookeeper-server-stop.sh

## Start kafka server
sh /usr/local/Cellar/kafka/2.0.0/bin/kafka-server-start /usr/local/etc/kafka/server.properties

bin/kafka-server-start.sh config/server.properties &

## Stop kafka server
bin/kafka-server-stop.sh

## RPI
wget http://mirrordirector.raspbian.org/raspbian/pool/main/libr/librdkafka/librdkafka-dev_0.9.3-1_armhf.deb

sudo dpkg -i librdkafka-dev_0.9.3-1_armhf.deb

sudo apt-get install -f

sudo apt-get install libstdc++6

## Other commands
- ./kafka-topics.sh --create --bootstrap-server my-cluster-kafka-brokers.kafka:9092 --replication-factor 2 --partitions 3 --topic test_bank_data --config compression.type="snappy"
- ./kafka-topics --describe --topic _schemas4 --zookeeper localhost:2181
- ./kafka-console-producer --broker-list localhost:9092 --topic test
- ./kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning

bin/kafka-run-class.sh kafka.tools.DumpLogSegments --files /var/lib/kafka/data-0/kafka-log0/test/00000000000000000000.log --print-data-log | grep compresscodec

# number of messages in a topic in apache kafka
./kafka-run-class kafka.tools.GetOffsetShell --broker-list ke-cp-kafka-headless:9092 --topic druid_telemetry_data_Samhi --time -1 --offsets 1 | awk -F ":" '{sum += $3} END {print sum}'

## Kafka Log Storage Directory
/var/lib/kafka/data-0/kafka-log0/
```

[Quickstart \| Apache Kafka](https://kafka.apache.org/quickstart)

[Installation and Getting started with Apache-Kafka for OSX · GitHub](https://gist.github.com/sam95/d7aed31770883bd272728ad0483629d4)

## Kafka Commands

### Cluster & Migration Management

- **`cluster-information-migration-script`**: Assists in migrating cluster metadata between different environments.
- **`kafka-metadata-shell`**: An interactive shell for inspecting the metadata quorum in KRaft-based clusters.
- **`kafka-metadata-quorum`**: Monitors and manages the status of the metadata replication quorum.
- **`kafka-metadata-recovery`**: A tool for recovering or repairing corrupted cluster metadata.
- **`kafka-migration-check`**: Validates readiness for migrating from Zookeeper to KRaft mode.
- **kafka-cells-admin** - This tool manages cells in a Kafka cluster.

### Broker & Topic Management

- **`kafka-add-brokers`**: Facilitates the addition of new brokers to an existing cluster.
- **`kafka-alter-broker-health`**: Manually modifies the health status of a broker for maintenance or testing.
	- This tool interacts with the Broker Health API to manage and describe the health status of Kafka brokers. You can use this tool to set a broker component’s health status by specifying the component (for example, `UNSPECIFIED`, `STORAGE`, `NETWORK`, or `EXTERNAL_CONNECTIVITY_STARTUP`) and applying a desired health status (`DEGRADED` or `HEALTHY`). The tool can also provide details on degraded brokers, which are less preferred as partition leaders than healthy brokers.
- **`kafka-broker-api-versions`**: Verifies the supported API versions and capabilities of the brokers.
- **`kafka-configs`**: Manages dynamic configuration overrides for topics, brokers, and clients.
- **`kafka-topics`**: The primary tool for creating, listing, describing, and altering topics.
- **`kafka-get-offsets`**: Retrieves specific offsets (earliest, latest, or timestamp-based) for topic partitions.
- **`kafka-log-dirs`**: Queries the status and disk usage of log directories across brokers.

### Producer & Consumer Tools

- **`kafka-console-producer`**: A CLI tool to send plain text messages to a Kafka topic.
- **`kafka-console-consumer`**: A CLI tool to read and display messages from a Kafka topic.
- **`kafka-producer-perf-test`**: Measures the performance and throughput of data ingestion.
- **`kafka-consumer-perf-test`**: Benchmarks the reading speed and efficiency of consumers.
- **`kafka-consumer-groups`**: Manages consumer group states, members, and offset resets.
- **`kafka-verifiable-producer`**: Produces a verifiable stream of data for testing cluster reliability.
- **`kafka-verifiable-consumer`**: Verifies that a consumer group correctly receives all produced messages.

### Schema-Specific CLI Tools

- **`kafka-avro-console-producer`**: Produces Avro-encoded data integrated with Schema Registry.
- **`kafka-avro-console-consumer`**: Consumes and decodes Avro messages using Schema Registry.
- **`kafka-json-schema-console-producer`**: Produces data validated against a JSON schema.
- **`kafka-json-schema-console-consumer`**: Consumes and decodes JSON-schema-validated messages.
- **`kafka-protobuf-console-producer`**: Produces messages using the Protobuf serialization format.
- **`kafka-protobuf-console-consumer`**: Consumes and decodes Protobuf-serialized data.

### Replication & Cluster Balancing

- **`kafka-mirror-maker`**: Replicates data between two different Kafka clusters.
- **`kafka-mirrors`**: Manages and monitors active mirror links between clusters.
- **`kafka-rebalance-cluster`**: Automatically redistributes partitions to balance broker load.
- **`kafka-reassign-partitions`**: Manually moves partitions across brokers for maintenance.
- **`kafka-replica-verification`**: Verifies that replicas across the cluster are consistent and in-sync.
- **`kafka-replica-exclusions`**: Manages brokers that should be excluded from partition leader assignments.
- **`kafka-replica-status`**: Provides a detailed report on the state of all replicas in the cluster.

### Security & Access Control

- **`kafka-acls`**: Manages Access Control Lists to secure topics and resources.
- **`kafka-delegation-tokens`**: Manages secret tokens used for lightweight authentication.
- **`sr-acl-cli`**: A tool specifically for managing ACLs within the Confluent Schema Registry.

### Connect & Integration Tools

- **`connect-distributed`**: Starts a Kafka Connect worker in distributed mode for high availability.
- **`connect-standalone`**: Starts a Kafka Connect worker in standalone mode for testing.
- **`connect-mirror-maker`**: Runs MirrorMaker within the Kafka Connect framework.
- **`connect-plugin-path`**: Lists and manages the paths for Kafka Connect plugins/connectors.
- **`kafka-mqtt-start` / `stop`**: Manages the Kafka MQTT proxy for IoT device integration.

### KSQL & Control Center

- **`ksql`**: Launches the interactive CLI for running SQL queries on Kafka streams.
- **`ksql-server-start` / `stop`**: Manages the lifecycle of the KSQL processing engine.
- **`ksql-datagen`**: Generates mock data for testing KSQL queries and stream processing.
- **`control-center-start` / `stop`**: Manages the Confluent Control Center UI service.
- **`control-center-reset`**: Resets the internal state and metrics of the Control Center.

### System & Utility Commands

- **`kafka-server-start` / `stop`**: Commands to launch or shut down the Kafka broker process.
- **`zookeeper-server-start` / `stop`**: Commands to manage the Zookeeper coordination service.
- **`kafka-storage`**: Formats and manages storage directories for KRaft-mode brokers.
- **`kafka-dump-log`**: Low-level tool to inspect and debug the contents of Kafka log segment files.
- **`kafka-run-class`**: A wrapper used to execute any internal Kafka Java class.

### Admin & Cluster Management

- **`kafka-cells-admin`** Manages logical "cells" within a Kafka cluster to isolate workloads or resources.
- **`kafka-client-metrics`** Used to describe and modify configuration values for client-side metrics.
- **`kafka-cluster`** Retrieves the Cluster ID or unregisters a cluster, primarily used during initial setup and formatting.
- **`kafka-groups`** A general-purpose tool to list groups of all types across the cluster.
- **`kafka-share-groups`** Specialized tool to list, describe, reset, and delete share groups.

### Confluent-Specific & Hybrid Cloud Tools

- **`kafka-cluster-links`** Manages "Cluster Linking" to mirror data between Confluent Enterprise and Confluent Cloud.
- **`kafka-mirrors`** Creates and manages identical mirror topics between clusters using the Cluster Linking feature.
- **`kafka-rebalance-cluster`** Provides visibility into the Service-Based Convergence (SBC) component for automated data balancing.

### Leadership & Broker Management

- **`kafka-leader-exclusion`** Interfaces with the Leadership Priority API to demote specific brokers from being preferred partition leaders.
- **`kafka-remove-brokers`** Executes and describes the operational process of removing a broker from the cluster.
- **`kafka-replica-exclusions`** Sets or describes exclusions for where replicas can be placed within the cluster.
- **`kafka-preferred-replica-election`** An older tool (deprecated in Kafka 2.4) used to balance leadership; now replaced by `kafka-leader-election`.

### Service & Wrapper Scripts

- **`kafka-mqtt-run-class`** A internal wrapper script for the MQTT Proxy Java class.
- **`kafka-rest-run-class`** A internal wrapper script for the REST Proxy Java class.
- **`kafka-rest-stop-service`** A bulk command to stop all running instances of the REST Proxy simultaneously.
