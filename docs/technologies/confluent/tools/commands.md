---
slug: /technologies/confluent/commands
title: Essential Kafka Commands Guide
description: Explore key Kafka and Confluent commands for managing clusters, topics, and services effectively using CLI tools.
created: 2025-12-10
updated: 2026-07-14
---
```bash
./kafka-topics --version
```

## Confluent

```bash
# https://docs.confluent.io/confluent-cli/current/install.html#install-confluent-cli
sudo apt install curl gnupg

sudo mkdir -p /etc/apt/keyrings
curl https://packages.confluent.io/confluent-cli/deb/archive.key | sudo gpg --dearmor -o /etc/apt/keyrings/confluent-cli.gpg
sudo chmod go+r /etc/apt/keyrings/confluent-cli.gpg

echo "deb [signed-by=/etc/apt/keyrings/confluent-cli.gpg] https://packages.confluent.io/confluent-cli/deb stable main" | sudo tee /etc/apt/sources.list.d/confluent-cli.list >/dev/null

sudo apt update

sudo apt install confluent-cli

brew install confluentinc/tap/cli

confluent version
confluent login --save
# To avoid session timeouts, non-SSO users can save their credentials with confluent login --save.
confluent login
confluent logout

# If your account is SSO-enabled, entering your email redirects you through the browser-based SSO flow automatically. For headless/remote environments:
confluent login --no-browser
# If you belong to multiple orgs, you may need:
confluent login --organization <ORG_ID>

# local commands
confluent local services kafka version
confluent local services ksql-server version
confluent local services schema-registry version

confluent environment list
confluent environment use env-n093j6

confluent kafka cluster list
# cluster id = lkc-zmjxkd
confluent kafka cluster use lkc-pggvwv5

confluent api-key list
confluent api-key create --resource lkc-pggvwv5
confluent api-key store <api_key> <api_secret> --resource lkc-pggvwv5
confluent api-key use <api_key> --resource lkc-pggvwv5

# cloud commands
# topic
confluent kafka topic list
confluent kafka topic create test-topic
confluent kafka topic update sample_data_orders --config "num.partitions=7"

# produce
confluent kafka topic produce test-topic

# generate test data
while true; do
  echo "{\"ts\":\"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\"}"
  sleep 1
done | confluent kafka topic produce test-topic

# consume
confluent kafka topic consume clickstream
confluent kafka topic consume clickstream --group test-group
confluent kafka topic consume --from-beginning test-topic
confluent kafka topic consume test-topic --from-beginning --timestamp

# broker configuration
confluent kafka cluster configuration update --config auto.create.topics.enable=true
confluent kafka cluster configuration list --cluster lkc-abc05
confluent kafka cluster configuration describe auto.create.topics.enable

confluent-hub install confluentinc/kafka-connect-datagen:latest

# ACLs create - Read, Write
confluent kafka acl create --allow --service-account deep-test-service-account --operations read,describe,write --topic "*" --cluster lkc-pggvwv5

confluent kafka acl create --allow --service-account deep-test-service-account --operations read,describe,write --consumer-group "*" --cluster lkc-pggvwv5
```

### Tags

```bash
curl --silent -u $APIKEY:$APISECRET \
  --request GET \
  --url "$SCHEMA_REGISTRY_ENDPOINT/catalog/v1/search/basic?types=kafka_topic&query=test-topic" | jq .
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
