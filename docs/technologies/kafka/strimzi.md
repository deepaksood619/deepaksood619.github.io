# Strimzi

## Strimzi HTTP Bridge for Apache Kafka

The Strimzi HTTP Bridge for Apache Kafka provides a REST API for integrating HTTP based client applications with a Kafka cluster. You can use the API to create and manage consumers and send and receive records over HTTP rather than the native Kafka protocol.

https://strimzi.io/docs/bridge/latest

## Confluent operator

```bash
# 1: enable operator in values.yaml
# 2: enable zookeeper in values.yaml
helm install operator . -f values.yaml --namespace kafka --set operator.enabled=true
helm install zookeeper . -f values.yaml --namespace kafka --set zookeeper.enabled=true
helm install kafka . -f values.yaml --namespace kafka --set kafka.enabled=true
helm install schemaregistry . -f values.yaml --namespace kafka --set schemaregistry.enabled=true
helm upgrade zookeeper . -f values.yaml --namespace kafka --set zookeeper.enabled=true
helm upgrade kafka . -f values.yaml --namespace kafka --set kafka.enabled=true
helm list
helm uninstall ksql --namespace kafka
helm uninstall controlcenter --namespace kafka
helm uninstall connectors --namespace kafka
helm uninstall replicator --namespace kafka
helm uninstall schemaregistry --namespace kafka
helm uninstall kafka --namespace kafka
helm uninstall zookeeper --namespace kafka
helm uninstall operator --namespace kafka
```
