# Kafka Commands

- [00-kafka-setup](technologies/kafka/kafka-commands/00-kafka-setup.md)
- [01-kafka-topics](technologies/kafka/kafka-commands/01-kafka-topics.md)
- [02-kafka-producers](technologies/kafka/kafka-commands/02-kafka-producers.md)
- [03-kafka-consumers](technologies/kafka/kafka-commands/03-kafka-consumers.md)
- [04-kafka-groups-configs](technologies/kafka/kafka-commands/04-kafka-groups-configs.md)
- [confluent cli-tools](technologies/confluent/cli-tools.md)

## Configuration

https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION

## Configs

| **CLI Tool**                 | **Legacy Flag (Kafka 3.x and older)** | **New Standard Flag (Kafka 4.1+)** |
| ---------------------------- | ------------------------------------- | ---------------------------------- |
| **`kafka-cluster`**          | `--config`                            | **`--command-config`**             |
| **`kafka-console-consumer`** | `--consumer.config`                   | **`--command-config`**             |
| **`kafka-console-producer`** | `--producer.config`                   | **`--command-config`**             |
| **`kafka-topics`**           | `--command-config`                    | **`--command-config`**             |
| **`kafka-leader-election`**  | `--admin.config`                      | **`--command-config`**             |
