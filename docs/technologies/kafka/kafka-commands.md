# Kafka Commands

## Configuration

https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION

## CloudFormation template

https://aws-quickstart.s3.amazonaws.com/quickstart-confluent-kafka/templates/confluent-kafka.template

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

## Create topic
docker run
--net=example-docker
--rm confluentinc/cp-kafka:5.1.0
kafka-topics --create --topic smap_telemetry_data --partitions 3 --replication-factor 1 --config retention.ms=-1
--if-not-exists --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

## Alter topic
docker run
--net=example-docker
--rm confluentinc/cp-kafka:5.1.0
kafka-topics --alter --topic smap_telemetry_data --partitions 3 -config retention.ms=-1 --zookeeper zookeeper1:2181,zookeeper2:2181,zookeeper3:2181

docker run
--net=example-docker
--rm confluentinc/cp-kafka:5.1.0
kafka-topics --alter --topic iot_data --config retention.ms=-1 --zookeeper zookeeper1:2181,zookeeper2:2181,zookeeper3:2181

## Delete topic
# Topic is marked for deletion and if kafka is configured with KAFKA_DELETE_TOPIC_ENABLE:"true" then it is deleted

docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0

kafka-topics --delete --topic _schemas --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

## Show all Topics
docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-topics --describe --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-topics --describe --topic smap_telemetry_data --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-topics --describe --topic smap_telemetry_data --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

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

## Create data
docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
bash -c "seq 42 | kafka-console-producer --request-required-acks 1
--broker-list kafka1:19091,kafka2:19092,kafka3:19093 --topic smap_telemetry_data && echo 'Produced 42 messages.'"

## Receive data
docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-console-consumer --bootstrap-server kafka1:19091,kafka2:19092,kafka3:19093 --topic smap_telemetry_data --from-beginning

# kafka.example.com - 9091,9092,9093
docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-console-consumer --bootstrap-server kafka.example.com:9091,kafka.example.com:9092,kafka.example.com:9093 --topic dev_smap_telemetry_data --from-beginning

# consume druid_telemetry_data
docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-console-consumer --bootstrap-server kafka.example.com:9091,kafka.example.com:9092,kafka.example.com:9093 --topic druid_telemetry_data --from-beginning

## Show consumer group offsets
kafka-consumer-groups --bootstrap-server kafka1:19091,kafka2:19092,kafka3:19093 --list

kafka-consumer-groups --bootstrap-server ke-cp-kafka-headless:9092 --describe --group kafka_influx_republisher_group

kafka-consumer-groups --bootstrap-server kafka1:19091,kafka2:19092,kafka3:19093 --describe --group kafka_druid_republisher_group

## Kafka Configs
## Describe a topic

kafka-configs --bootstrap-server ke-cp-kafka-headless:9092 --entity-type brokers --entity-default --describe
kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name smap_telemetry_data --describe

## Add config
kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name smap_telemetry_data --alter --add-config retention.ms=604800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name druid_telemetry_data --alter --add-config retention.ms=172800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name test_smap_telemetry_data --alter --add-config retention.ms=172800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name dev_druid_telemetry_data --alter --add-config retention.ms=172800000

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

## Create Topic
sh /usr/local/Cellar/kafka/2.0.0/bin/kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

## List all topics
sh /usr/local/Cellar/kafka/2.0.0/bin/kafka-topics --list --zookeeper localhost:2181

bin/kafka-topics.sh --list --zookeeper localhost:2181

## Start producer
sh /usr/local/Cellar/kafka/2.0.0/bin/kafka-console-producer --broker-list localhost:9092 --topic test

bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test

## Start consumer
sh /usr/local/Cellar/kafka/2.0.0/bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning

bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

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

## Kafka Commands (inside docker container)

cd /usr/bin

kafka-acls
kafka-broker-api-versions
kafka-configs
kafka-console-consumer
kafka-console-producer
kafka-consumer-groups
kafka-consumer-perf-test
kafka-delegation-tokens
kafka-delete-records
kafka-dump-log
kafka-log-dirs
kafka-mirror-maker
kafka-preferred-replica-election
kafka-producer-perf-test
kafka-reassign-partitions
kafka-replica-verification
kafka-run-class

bin/kafka-run-class.sh kafka.tools.DumpLogSegments --files /var/lib/kafka/data-0/kafka-log0/test/00000000000000000000.log --print-data-log | grep compresscodec

kafka-server-start
kafka-server-stop
kafka-streams-application-reset
kafka-topics
kafka-verifiable-consumer
kafka-verifiable-producer

## Explore with kafka commands

# kafka version
kafka-topics --version

# List all topics
kafka-topics --zookeeper ke-cp-zookeeper-headless:2181 --list

# Create the topic
kafka-topics --zookeeper ke-cp-zookeeper-headless:2181 --topic telemetry_data --create --partitions 3 --replication-factor 1 --if-not-exists

# Describe a topic
kafka-topics --describe --topic smap_samhi --zookeeper ke-cp-zookeeper-headless:2181

kafka-configs --bootstrap-server ke-cp-kafka-headless:9092 --entity-type brokers --entity-default --describe

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name telemetry_data --describe

# Add config
kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name telemetry_data --alter --add-config retention.ms=604800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name druid_telemetry_data --alter --add-config retention.ms=172800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name test_telemetry_data --alter --add-config retention.ms=172800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name dev_druid_telemetry_data --alter --add-config retention.ms=172800000

# Add partitions
kafka-topics --zookeeper ke-cp-zookeeper-headless:2181 --alter --topic smap_samhi --partitions 3

## sh add_partitions.sh

# !/bin/bash
VAL="$(kafka-topics --zookeeper ke-cp-zookeeper-headless:2181 --list | grep druid)"

for i in $VAL
do
kafka-topics --zookeeper ke-cp-zookeeper-headless:2181 --alter --topic $i --partitions 3
done

# Create a message
MESSAGE="`date -u`"

# Produce a test message to the topic
echo "$MESSAGE" | kafka-console-producer --broker-list ke-cp-kafka-headless:9092 --topic ke-topic

# Consume a test message from the topic
kafka-console-consumer --bootstrap-server ke-cp-kafka-headless:9092 --topic bench_data --max-messages 1

kafka-console-consumer --bootstrap-server ke-cp-kafka-headless:9092 --topic test_telemetry_data

kafka-console-consumer --bootstrap-server ke-cp-kafka.kafka:9092 --topic test_telemetry_data

kafka-console-consumer --bootstrap-server ke-cp-kafka-external-0:31090,ke-cp-kafka-external-1:31091,ke-cp-kafka-external-2:31092 --topic test_telemetry_data

kafka-console-consumer --bootstrap-server ke-cp-kafka-headless:9092 --topic telemetry_data

kafka-console-consumer --bootstrap-server ke-cp-kafka-headless:9092 --topic druid_telemetry_data --from-beginning

# consume first message from kafka topic
./kafka-console-consumer --bootstrap-server ke-cp-kafka-headless:9092 --topic druid_telemetry_data_Samhi --from-beginning --max-messages 1

# number of messages in a topic in apache kafka
./kafka-run-class kafka.tools.GetOffsetShell --broker-list ke-cp-kafka-headless:9092 --topic druid_telemetry_data_Samhi --time -1 --offsets 1 | awk -F ":" '{sum += $3} END {print sum}'

## Kafka Consumer Group
cd /usr/bin
- kafka-consumer-groups --bootstrap-server ke-cp-kafka-headless:9092 --list
- ./kafka-consumer-groups --bootstrap-server ke-cp-kafka-headless:9092 --describe --group kafka_prod_to_staging --members --verbose
- kafka-consumer-groups --bootstrap-server ke-cp-kafka-headless:9092 --describe --group kafka_prod_to_staging --offsets
- kafka-consumer-groups --bootstrap-server ke-cp-kafka-headless:9092 --describe --group kafka_prod_to_staging --offsets --verbose
- kafka-consumer-groups --bootstrap-server ke-cp-kafka-headless:9092 --delete --group kafka_archiver_consumer_group

## Kafka Log Storage Directory

/var/lib/kafka/data-0/kafka-log0/
```

https://kafka.apache.org/quickstart

https://gist.github.com/sam95/d7aed31770883bd272728ad0483629d4

## Others

### KeyTool

Manages a keystore (database) of cryptographic keys, X.509 certificate chains, and trusted certificates.

The `keytool` command is a Java utility used to manage a keystore (a database of cryptographic keys and certificates). Common commands include:

#### Key Management

- **`keytool -genkeypair`**: Generates a public and private key pair and stores it in a keystore entry. `keytool -genkeypair -alias mydomain -keyalg RSA -keysize 2048 -keystore keystore.jks`
- **`keytool -genseckey`**: Generates a secret key and stores it in a keystore.
- **`keytool -delete`**: Deletes an entry (e.g., a certificate) from a keystore. `keytool -delete -alias mydomain -keystore keystore.jks`
- **`keytool -keypasswd`**: Changes the password protecting a specific key within a keystore entry.

#### Certificate Management

- **`keytool -certreq`**: Generates a Certificate Signing Request (CSR) in PKCS #10 format, which is sent to a Certificate Authority (CA) to request a signed certificate. `keytool -certreq -alias mydomain -file mydomain.csr -keystore keystore.jks`
- **`keytool -importcert`**: Imports a certificate or a certificate chain (the CA's reply) into the keystore. `keytool -importcert -trustcacerts -alias mydomain -file mydomain.crt -keystore keystore.jks`
- **`keytool -exportcert`**: Exports a certificate from the keystore to a file. `keytool -exportcert -alias mydomain -file mydomain.crt -keystore keystore.jks`
- **`keytool -importkeystore`**: Imports all entries from one keystore into another.

#### Information Display

- **`keytool -list`**: Lists the entries in a keystore. Adding the `-v` (verbose) option provides detailed information, including certificate fingerprints and validity dates. `keytool -list -v -keystore keystore.jks`
- **`keytool -printcert`**: Prints the content of a stand-alone certificate file in a human-readable format. `keytool -printcert -file mydomain.crt`

#### Keystore Management

- **`keytool -storepasswd`**: Changes the password that protects the integrity of the entire keystore file.

[keytool - Oracle Documentation](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html)
