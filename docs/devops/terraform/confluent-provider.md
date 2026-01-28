# Confluent Provider

Simplify Apache Kafka Terraform deployment with the Confluent Terraform Provider. Manage Environments, Kafka Clusters, Kafka Topics, Kafka ACLs, Service Accounts, and more in Confluent.

[Terraform Registry - Confluent Provider](https://registry.terraform.io/providers/confluentinc/confluent/latest/docs)

## Commands

```bash
git clone https://github.com/confluentinc/terraform-provider-confluent.git

cd terraform-provider-confluent/examples/configurations

// Using the example configuration //1 as an example 
cd basic-kafka-acls

terraform init

export TF_VAR_confluent_cloud_api_key="<cloud_api_key>"
export TF_VAR_confluent_cloud_api_secret="<cloud_api_secret>"

terraform plan

terraform apply

terraform output resource-ids
```

[Terraform Registry - Confluent Provider - Sample Project](https://registry.terraform.io/providers/confluentinc/confluent/latest/docs/guides/sample-project)

## Examples

- advanced-bidirectional-cluster-link-rbac
- authentication-using-oauth
- azure-key-vault
- basic-kafka-acls-with-alias
- basic-kafka-acls
- cloud-importer
- cluster-link-over-aws-private-link-networks
- cluster-link-using-oauth
- connect-artifact
- connectors
- create-default-topic-and-return-kafka-api-keys-to-consume-and-produce
- dedicated-private-service-connect-gcp-kafka-acls
- dedicated-private-service-connect-gcp-kafka-rbac
- dedicated-privatelink-aws-kafka-acls
- dedicated-privatelink-aws-kafka-rbac
- dedicated-privatelink-azure-kafka-acls
- dedicated-privatelink-azure-kafka-rbac
- dedicated-public-aws-byok-kafka-acls
- dedicated-public-azure-byok-kafka-acls
- dedicated-public-gcp-byok-kafka-acls
- dedicated-public-kafka-acls
- dedicated-public-kafka-rbac
- dedicated-transit-gateway-attachment-aws-kafka-acls
- dedicated-transit-gateway-attachment-aws-kafka-rbac
- dedicated-vnet-peering-azure-kafka-acls
- dedicated-vnet-peering-azure-kafka-rbac
- dedicated-vpc-peering-aws-kafka-acls
- dedicated-vpc-peering-aws-kafka-rbac
- dedicated-vpc-peering-gcp-kafka-acls
- dedicated-vpc-peering-gcp-kafka-rbac
- dedicated-vpc-peering-v2-aws-kafka-acls
- destination-initiated-cluster-link-rbac
- dns-forwarder
- enterprise-pni-aws-kafka-rbac
- enterprise-privatelinkattachment-aws-kafka-acls
- enterprise-privatelinkattachment-azure-kafka-acls
- field-level-encryption-schema
- flink-carry-over-offset-between-statements
- flink-connection
- flink-quickstart-2
- flink-quickstart
- flink_artifact
- freight-aws-kafka-rbac
- hashicorp-vault
- kafka-importer
- kafka-ops-env-admin-product-team
- kafka-ops-kafka-admin-product-team
- ksql-acls
- ksql-rbac
- manage-topics-via-json
- managing-single-kafka-cluster
- managing-single-schema-registry-cluster
- multiple-event-types-avro-schema
- multiple-event-types-proto-schema
- network-access-point-gcp-private-service-connect
- private-flink-quickstart
- private-link-schema-registry
- provider-integration-aws
- regular-bidirectional-cluster-link-rbac
- schema-linking
- schema-registry-importer
- single-event-types-avro-schema
- single-event-types-proto-schema-with-alias
- single-event-types-proto-schema
- source-initiated-cluster-link-rbac
- standard-kafka-acls
- standard-kafka-rbac
- stream-catalog
- tableflow
- topic-as-a-service

### Notes

- _Basic_ Kafka cluster with authorization using RBAC configuration is not supported, because both `DeveloperRead` and `DeveloperWrite` roles are not available for _Basic_ Kafka clusters.
- When considering whether to use RBAC or ACLs for access control, it is suggested you use RBAC as the default because of its ease of use and manageability at scale, but for edge cases where you need to have more granular access control, or wish to explicitly deny access, ACLs may make more sense. For example, you could use RBAC to allow access for a group of users, but an ACL to deny access for a particular member of that group.
- When using a private networking option, you must execute `terraform` on a system with connectivity to the Kafka REST API. Check the [Kafka REST API docs](https://docs.confluent.io/cloud/current/api.html//tag/Topic-\(v3\)) to learn more about it.
- If you're interested in a more granular setup with TF configuration split between a Kafka Ops team and a Product team, see [kafka-ops-env-admin-product-team](https://github.com/confluentinc/terraform-provider-confluent/tree/master/examples/configurations/kafka-ops-env-admin-product-team) and [kafka-ops-kafka-admin-product-team](https://github.com/confluentinc/terraform-provider-confluent/tree/master/examples/configurations/kafka-ops-kafka-admin-product-team).

## basic-kafka-acls

```json title=main.tf
terraform {
  required_providers {
    confluent = {
      source  = "confluentinc/confluent"
      version = "2.59.0"
    }
  }
}

provider "confluent" {
  cloud_api_key    = var.confluent_cloud_api_key
  cloud_api_secret = var.confluent_cloud_api_secret
}

resource "confluent_environment" "staging" {
  display_name = "Staging"

  stream_governance {
    package = "ESSENTIALS"
  }
}

data "confluent_schema_registry_cluster" "essentials" {
  environment {
    id = confluent_environment.staging.id
  }

  depends_on = [
    confluent_kafka_cluster.basic
  ]
}

// Update the config to use a cloud provider and region of your choice.
// https://registry.terraform.io/providers/confluentinc/confluent/latest/docs/resources/confluent_kafka_cluster
resource "confluent_kafka_cluster" "basic" {
  display_name = "inventory"
  availability = "SINGLE_ZONE"
  cloud        = "AWS"
  region       = "us-east-2"
  basic {}
  environment {
    id = confluent_environment.staging.id
  }
}

// 'app-manager' service account is required in this configuration to create 'orders' topic and grant ACLs
// to 'app-producer' and 'app-consumer' service accounts.
resource "confluent_service_account" "app-manager" {
  display_name = "app-manager"
  description  = "Service account to manage 'inventory' Kafka cluster"
}

resource "confluent_role_binding" "app-manager-kafka-cluster-admin" {
  principal   = "User:${confluent_service_account.app-manager.id}"
  role_name   = "CloudClusterAdmin"
  crn_pattern = confluent_kafka_cluster.basic.rbac_crn
}

resource "confluent_api_key" "app-manager-kafka-api-key" {
  display_name = "app-manager-kafka-api-key"
  description  = "Kafka API Key that is owned by 'app-manager' service account"
  owner {
    id          = confluent_service_account.app-manager.id
    api_version = confluent_service_account.app-manager.api_version
    kind        = confluent_service_account.app-manager.kind
  }

  managed_resource {
    id          = confluent_kafka_cluster.basic.id
    api_version = confluent_kafka_cluster.basic.api_version
    kind        = confluent_kafka_cluster.basic.kind

    environment {
      id = confluent_environment.staging.id
    }
  }

  // The goal is to ensure that confluent_role_binding.app-manager-kafka-cluster-admin is created before
  // confluent_api_key.app-manager-kafka-api-key is used to create instances of
  // confluent_kafka_topic, confluent_kafka_acl resources.

  // 'depends_on' meta-argument is specified in confluent_api_key.app-manager-kafka-api-key to avoid having
  // multiple copies of this definition in the configuration which would happen if we specify it in
  // confluent_kafka_topic, confluent_kafka_acl resources instead.
  depends_on = [
    confluent_role_binding.app-manager-kafka-cluster-admin
  ]
}

resource "confluent_kafka_topic" "orders" {
  kafka_cluster {
    id = confluent_kafka_cluster.basic.id
  }
  topic_name    = "orders"
  rest_endpoint = confluent_kafka_cluster.basic.rest_endpoint
  credentials {
    key    = confluent_api_key.app-manager-kafka-api-key.id
    secret = confluent_api_key.app-manager-kafka-api-key.secret
  }
}

resource "confluent_service_account" "app-consumer" {
  display_name = "app-consumer"
  description  = "Service account to consume from 'orders' topic of 'inventory' Kafka cluster"
}

resource "confluent_api_key" "app-consumer-kafka-api-key" {
  display_name = "app-consumer-kafka-api-key"
  description  = "Kafka API Key that is owned by 'app-consumer' service account"
  owner {
    id          = confluent_service_account.app-consumer.id
    api_version = confluent_service_account.app-consumer.api_version
    kind        = confluent_service_account.app-consumer.kind
  }

  managed_resource {
    id          = confluent_kafka_cluster.basic.id
    api_version = confluent_kafka_cluster.basic.api_version
    kind        = confluent_kafka_cluster.basic.kind

    environment {
      id = confluent_environment.staging.id
    }
  }
}

resource "confluent_kafka_acl" "app-producer-write-on-topic" {
  kafka_cluster {
    id = confluent_kafka_cluster.basic.id
  }
  resource_type = "TOPIC"
  resource_name = confluent_kafka_topic.orders.topic_name
  pattern_type  = "LITERAL"
  principal     = "User:${confluent_service_account.app-producer.id}"
  host          = "*"
  operation     = "WRITE"
  permission    = "ALLOW"
  rest_endpoint = confluent_kafka_cluster.basic.rest_endpoint
  credentials {
    key    = confluent_api_key.app-manager-kafka-api-key.id
    secret = confluent_api_key.app-manager-kafka-api-key.secret
  }
}

resource "confluent_service_account" "app-producer" {
  display_name = "app-producer"
  description  = "Service account to produce to 'orders' topic of 'inventory' Kafka cluster"
}

resource "confluent_api_key" "app-producer-kafka-api-key" {
  display_name = "app-producer-kafka-api-key"
  description  = "Kafka API Key that is owned by 'app-producer' service account"
  owner {
    id          = confluent_service_account.app-producer.id
    api_version = confluent_service_account.app-producer.api_version
    kind        = confluent_service_account.app-producer.kind
  }

  managed_resource {
    id          = confluent_kafka_cluster.basic.id
    api_version = confluent_kafka_cluster.basic.api_version
    kind        = confluent_kafka_cluster.basic.kind

    environment {
      id = confluent_environment.staging.id
    }
  }
}

// Note that in order to consume from a topic, the principal of the consumer ('app-consumer' service account)
// needs to be authorized to perform 'READ' operation on both Topic and Group resources:
// confluent_kafka_acl.app-consumer-read-on-topic, confluent_kafka_acl.app-consumer-read-on-group.
// https://docs.confluent.io/platform/current/kafka/authorization.html//using-acls
resource "confluent_kafka_acl" "app-consumer-read-on-topic" {
  kafka_cluster {
    id = confluent_kafka_cluster.basic.id
  }
  resource_type = "TOPIC"
  resource_name = confluent_kafka_topic.orders.topic_name
  pattern_type  = "LITERAL"
  principal     = "User:${confluent_service_account.app-consumer.id}"
  host          = "*"
  operation     = "READ"
  permission    = "ALLOW"
  rest_endpoint = confluent_kafka_cluster.basic.rest_endpoint
  credentials {
    key    = confluent_api_key.app-manager-kafka-api-key.id
    secret = confluent_api_key.app-manager-kafka-api-key.secret
  }
}

resource "confluent_kafka_acl" "app-consumer-read-on-group" {
  kafka_cluster {
    id = confluent_kafka_cluster.basic.id
  }
  resource_type = "GROUP"
  // The existing values of resource_name, pattern_type attributes are set up to match Confluent CLI's default consumer group ID ("confluent_cli_consumer_<uuid>").
  // https://docs.confluent.io/confluent-cli/current/command-reference/kafka/topic/confluent_kafka_topic_consume.html
  // Update the values of resource_name, pattern_type attributes to match your target consumer group ID.
  // https://docs.confluent.io/platform/current/kafka/authorization.html//prefixed-acls
  resource_name = "confluent_cli_consumer_"
  pattern_type  = "PREFIXED"
  principal     = "User:${confluent_service_account.app-consumer.id}"
  host          = "*"
  operation     = "READ"
  permission    = "ALLOW"
  rest_endpoint = confluent_kafka_cluster.basic.rest_endpoint
  credentials {
    key    = confluent_api_key.app-manager-kafka-api-key.id
    secret = confluent_api_key.app-manager-kafka-api-key.secret
  }
}

```
