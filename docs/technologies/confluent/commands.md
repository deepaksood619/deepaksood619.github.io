# Commands

```bash
./kafka-topics --version
```

## Confluent

```bash
brew install confluentinc/tap/cli

confluent version
confluent login
confluent login --save
confluent logout

# local commands
confluent local services kafka version
confluent local services ksql-server version
confluent local services schema-registry version

confluent environment list
confluent environment use env-q2rmnp

confluent kafka cluster list
# cluster id = lkc-zmjxkd
confluent kafka cluster use lkc-zmjxkd

confluent api-key list
confluent api-key create --resource lkc-zmjxkd
confluent api-key store <api_key> <api_secret> --resource lkc-zmjxkd
confluent api-key use <api_key> --resource lkc-zmjxkd

# cloud commands
# topic
confluent kafka topic list
confluent kafka topic create test-topic
confluent kafka topic update sample_data_orders --config "num.partitions=7"

# produce
confluent kafka topic produce test-topic

# consume
confluent kafka topic consume clickstream
confluent kafka topic consume clickstream --group test-group
confluent kafka topic consume --from-beginning test-topic

# broker configuration
confluent kafka cluster configuration update --config auto.create.topics.enable=true
confluent kafka cluster configuration list --cluster lkc-abc05
confluent kafka cluster configuration describe auto.create.topics.enable

confluent-hub install confluentinc/kafka-connect-datagen:latest
```

### Create producer or consumer config

```bash
# If you're ready to set up a producer or consumer, you can generate a configuration for the client using the CLI.
confluent kafka client-config create <LANGUAGE> --api-key <API_KEY> --api-secret <API_SECRET>
# output below
```

```ini
# Required connection configs for Kafka producer, consumer, and admin
bootstrap.servers=pkc-abcdef.us-east-2.aws.confluent.cloud:9092
security.protocol=SASL_SSL
sasl.mechanisms=PLAIN
sasl.username=API_KEY
sasl.password=API_SECRET

# Best practice for higher availability in librdkafka clients prior to 1.7
session.timeout.ms=45000

# Required connection configs for Confluent Cloud Schema Registry
#schema.registry.url=https://psrc-l622j.us-east-2.aws.confluent.cloud
#basic.auth.credentials.source=USER_INFO
#basic.auth.user.info={{ SR_API_KEY }}:{{ SR_API_SECRET }}
```

## Confluent Local

```bash
confluent local kafka start

confluent local kafka topic create test-topic
confluent local kafka topic delete test-topic
confluent local kafka topic create test-topic --partitions 7

# doesn't work
confluent local kafka topic update sample_data_orders_1 --config "num.partitions=6"
confluent local kafka topic update sample_data_orders_1 --partitions 6
# works
kafka-topics --bootstrap-server localhost:9092 --alter --topic sample_data_orders_1 --partitions 6

confluent local services status
```

| Command                                                                                                                                                                                             | Description                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [confluent local services connect](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/connect/index.html#confluent-local-services-connect)                            | Manage Connect.                                          |
| [confluent local services control-center](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/control-center/index.html#confluent-local-services-control-center)       | Manage Control Center.                                   |
| [confluent local services kafka](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/kafka/index.html#confluent-local-services-kafka)                                  | Manage Apache Kafka®.                                    |
| [confluent local services kafka-rest](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/kafka-rest/index.html#confluent-local-services-kafka-rest)                   | Manage Kafka REST.                                       |
| [confluent local services kraft-controller](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/kraft-controller/index.html#confluent-local-services-kraft-controller) | Manage KRaft Controller.                                 |
| [confluent local services ksql-server](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/ksql-server/index.html#confluent-local-services-ksql-server)                | Manage ksqlDB Server.                                    |
| [confluent local services list](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/confluent_local_services_list.html#confluent-local-services-list)                  | List all Confluent Platform services.                    |
| [confluent local services schema-registry](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/schema-registry/index.html#confluent-local-services-schema-registry)    | Manage Schema Registry.                                  |
| [confluent local services start](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/confluent_local_services_start.html#confluent-local-services-start)               | Start all Confluent Platform services.                   |
| [confluent local services status](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/confluent_local_services_status.html#confluent-local-services-status)            | Check the status of all Confluent Platform services.     |
| [confluent local services stop](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/confluent_local_services_stop.html#confluent-local-services-stop)                  | Stop all Confluent Platform services.                    |
| [confluent local services top](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/confluent_local_services_top.html#confluent-local-services-top)                     | View resource usage for all Confluent Platform services. |
| [confluent local services zookeeper](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/zookeeper/index.html#confluent-local-services-zookeeper)                      | Manage Apache ZooKeeper™.                                |

[Install the Confluent CLI \| Confluent Documentation](https://docs.confluent.io/confluent-cli/current/install.html)

[Tutorial: Use Confluent CLI with Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/confluent-cli/current/beginner-cloud.html)

[confluent local services \| Confluent Documentation](https://docs.confluent.io/confluent-cli/current/command-reference/local/services/index.html)
