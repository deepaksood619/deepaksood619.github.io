# Govern Data Streams

[Govern Data Streams](https://docs.confluent.io/cloud/current/sr/overview.html)

- [Overview](https://docs.confluent.io/cloud/current/stream-governance/index.html)
- [Stream Governance](https://docs.confluent.io/cloud/current/stream-governance/overview.html)
	- [Manage Governance Packages](https://docs.confluent.io/cloud/current/stream-governance/packages.html)
	- [Data Portal](https://docs.confluent.io/cloud/current/stream-governance/data-portal.html)
	- [Track Data with Stream Lineage](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html)
	- [Manage Stream Catalog](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog-overview.html)
		- [Stream Catalog User Guide](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html)
		- [REST API Catalog Usage and Examples Guide](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog-rest-apis.html)
		- [GraphQL API Catalog Usage and Examples Guide](https://docs.confluent.io/cloud/current/stream-governance/graphql.html)
- [Manage Schemas](https://docs.confluent.io/cloud/current/sr/sr-overview.html)
	- [Overview](https://docs.confluent.io/cloud/current/sr/index.html)
	- [Manage Schemas](https://docs.confluent.io/cloud/current/sr/schemas-manage.html)
	- [Delete Schemas and Manage Storage](https://docs.confluent.io/cloud/current/sr/schemas-delete-cc.html)
	- [Use Broker-Side Schema ID Validation](https://docs.confluent.io/cloud/current/sr/broker-side-schema-validation.html)
	- [Schema Linking](https://docs.confluent.io/cloud/current/sr/schema-linking.html)
	- [Schema Registry Tutorial](https://docs.confluent.io/cloud/current/sr/schema_registry_ccloud_tutorial.html)
- [Fundamentals](https://docs.confluent.io/cloud/current/sr/fundamentals/overview.html)
	- [Key Concepts](https://docs.confluent.io/cloud/current/sr/fundamentals/index.html)
	- [Schema Evolution and Compatibility](https://docs.confluent.io/cloud/current/sr/fundamentals/schema-evolution.html)
	- [Schema Formats](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/overview.html)
		- [Serializers and Deserializers Overview](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/index.html)
		- [Avro](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/serdes-avro.html)
		- [Protobuf](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/serdes-protobuf.html)
		- [JSON Schema](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/serdes-json.html)
	- [Data Contracts](https://docs.confluent.io/cloud/current/sr/fundamentals/data-contracts.html)
	- [Security Considerations](https://docs.confluent.io/cloud/current/sr/schemas-governance-security.html)
	- [Enable Private Networking](https://docs.confluent.io/cloud/current/sr/fundamentals/overview-sr-networking.html)
		- [Enable Private Networking with Schema Registry PrivateLink](https://docs.confluent.io/cloud/current/sr/fundamentals/sr-private-link.html)
		- [Enable Private Networking for Schema Registry with a Public Endpoint](https://docs.confluent.io/cloud/current/sr/fundamentals/schema-registry-vpc.html)
- [Reference](https://docs.confluent.io/cloud/current/sr/develop/overview.html)
	- [Schema Registry Reference](https://docs.confluent.io/cloud/current/sr/develop/index.html)
	- [Configure Clients to Schema Registry](https://docs.confluent.io/cloud/current/sr/sr-client-configs.html)
	- [Schema Registry C++ Client (libschemaregistry)](https://docs.confluent.io/cloud/current/sr/develop/cpp-clients.html)
	- [Maven Plugin](https://docs.confluent.io/cloud/current/sr/develop/maven-plugin.html)
	- [REST API Usage Examples](https://docs.confluent.io/cloud/current/sr/sr-rest-apis.html)
	- [Use AsyncAPI to Describe Topics and Schemas](https://docs.confluent.io/cloud/current/stream-governance/async-api.html)
- [FAQ](https://docs.confluent.io/cloud/current/sr/faqs-cc.html)

## Stream Governance Packages

Essentials and Advanced. The governance package type you choose determines the features, capabilities, limits, and billing for the governance package. Use the information in this topic to find the governance package with the features and capabilities that’s right for you:

- Use the **Essentials** package to help you get started with the governance fundamentals.
- Use the **Advanced** package for enterprise grade data governance in production workloads.

The table below offers a high-level comparison of features across the governance package types.

| Feature                                                                                                                                                                                                                                                             | Essentials                                                                          | Advanced           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------ |
| [Schema Registry](https://docs.confluent.io/cloud/current/sr/index.html#schemaregistry-intro)                                                                                                                                                                       | ✔ (Yes)                                                                             | ✔ (Yes)            |
| Schema Registry SLA                                                                                                                                                                                                                                                 | 99.5%                                                                               | 99.99%             |
| Schema Registry calls per second                                                                                                                                                                                                                                    | Read: 75 Write: 25                                                                  | Read: 75 Write: 25 |
| [Data rules](https://docs.confluent.io/cloud/current/sr/fundamentals/data-contracts.html#sr-data-contracts)                                                                                                                                                         | No                                                                                  | ✔ (Yes)            |
| Number of schemas included [1](https://docs.confluent.io/cloud/current/stream-governance/packages.html#f1)                                                                                                                                                          | 100 [2](https://docs.confluent.io/cloud/current/stream-governance/packages.html#f2) | 20,000             |
| Number of [exporters](https://docs.confluent.io/cloud/current/sr/schema-linking.html#schema-exporters) included                                                                                                                                                     | 10                                                                                  | 100                |
| [Stream catalog tags](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#data-discovery-tagging)                                                                                                                                         | ✔ (Yes)                                                                             | ✔ (Yes)            |
| [Stream catalog business metadata](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#data-discovery-business-metadata)                                                                                                                  | (No)                                                                                | ✔ (Yes)            |
| [Stream catalog REST API](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog-rest-apis.html#stream-catalog-rest-apis)                                                                                                                         | ✔ (Yes)                                                                             | ✔ (Yes)            |
| [Stream catalog GraphQL API](https://docs.confluent.io/cloud/current/stream-governance/graphql.html#catalog-graphql)                                                                                                                                                | (No)                                                                                | ✔ (Yes)            |
| [Data portal](https://docs.confluent.io/cloud/current/stream-governance/data-portal.html#stream-gov-data-portal) (powered by the Stream Catalog)                                                                                                                    | ✔ (Yes)                                                                             | ✔ (Yes)            |
| [Stream lineage](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html#cloud-stream-lineage) ([point in time](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html#stream-lineage-point-in-time): last 10 minutes) | ✔ (Yes)                                                                             | ✔ (Yes)            |
| [Stream lineage](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html#cloud-stream-lineage) ([point in time](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html#stream-lineage-point-in-time): last 7 days)     | No                                                                                  | ✔ (Yes)            |
| [AsyncAPI specification export and import](https://docs.confluent.io/cloud/current/stream-governance/async-api.html#stream-gov-async-api)                                                                                                                           | ✔ (Yes)                                                                             | ✔ (Yes)            |

## Data Portal

Data Portal is a self-service interface for discovering, exploring, and accessing Apache Kafka® topics on Confluent Cloud.

Building new streaming applications and pipelines on top of Kafka can be slow and inefficient when there is a lack of visibility into what data exists, where it comes from, and who can grant access. Data Portal leverages [Stream Catalog](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#cloud-stream-catalog) and [Stream Lineage](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html#cloud-stream-lineage) to empower data users to interact with their organization’s data streams efficiently and collaboratively.

With Data Portal, data practitioners can:

- **Search and discover existing topics** with the help of topic metadata and get a drill-down view to understand data they hold (without access to the actual data).
- **Request access to topics** through an approval workflow that connects the data user with the data owner, and admins that can approve the request.
- **View and use data in topics** (once access is granted) to build new streaming applications and pipelines.

### Prerequisites and notes

- Data Portal is available in [Confluent Cloud](https://docs.confluent.io/cloud/current/get-started/index.html#cloud-quickstart) for users with a [Stream Governance package enabled](https://docs.confluent.io/cloud/current/stream-governance/packages.html#stream-gov-packages) in their environments.
- User-generated metadata should be appended to topics to make them discoverable and present them effectively on the Data Portal. In particular, description, [tags](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#catalog-apply-tags), [business metadata](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#catalog-apply-business-metadata) and owner name and email should be added to topics.
- The topic access request workflow is not available for topics on [Basic clusters](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#cloud-cluster-types).
- The collaboration workflow for topic access requests through email is dependent upon having owner names and emails appended to topics.
- Users need search [Stream Catalog](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#stream-catalog-rbac) permissions to use the Data Portal, at a minimum [DataDiscovery](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#datadiscovery-role) role. On the “add new user” workflow, the DataDiscovery role is pre-selected by default to give the user permission to use the Data Portal.
- To approve access requests to topics, users need topic read and write granting permissions, in particular [ResourceOwner](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#resourceowner-role), [CloudClusterAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#cloudclusteradmin-role), [EnvironmentAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#environmentadmin-role) or [OrganizationAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#organizationadmin-role).
- Users need query permissions on one or more compute pools to query data with Apache Flink®️, at a minimum [FlinkDeveloper](https://docs.confluent.io/cloud/current/flink/operate-and-deploy/flink-rbac.html#flink-rbac) role.

The **"Access requests" tab in the "Accounts & access" section of Confluent Cloud is where you can view and manage all pending and past access requests for Kafka topics**. This tab is part of the Data Portal feature, which enables a self-service workflow for requesting and granting access to topics.

[Data Portal on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/stream-governance/data-portal.html)

[Organize your data quickly and easily using Confluent Data Portal - YouTube](https://www.youtube.com/watch?v=Vg7k_3vlC3Q&)

[Data Portal for Confluent Stream Governance](https://www.confluent.io/blog/data-portal-stream-governance/)

## Data Contracts for Schema Registry on Confluent Cloud

[How To Improve Data Quality With Domain Validation Rules \| Data Quality Rules - YouTube](https://www.youtube.com/watch?v=3BoljGZf5as)

Confluent Schema Registry adds support for tags, metadata, and rules, which together support the concept of a Data Contract. As a part of a Stream Governance solution, data contracts play a key role in ensuring data quality, data consistency, interoperability, and compatibility when sharing information across different systems or organizations.

### Limitations

Current limitations are:

- Kafka Connect on Confluent Cloud does not support rules execution.
- Flink SQL and ksqlDB do not support rules execution in either Confluent Platform or Confluent Cloud.
- Confluent Control Center (Legacy) does not show the new properties for Data Contracts on the schema view page, in particular metadata and rules.
- Schema rules are only executed for the root schema, not referenced schemas. For example, given a schema named “Order” that references another schema named “Product” which has some rules attached to it, the serialization/deserialization of the “Order” object will not execute the rules of the “Product” schema.
- The non-Java clients (.NET, go, Python, JavaScript) do not yet support the DLQ Action.
- JavaScript and .NET do not support schema migration rules for Protobuf due to a limitation of the underlying third-party Protobuf libraries.

### Understanding the scope of a data contract

A data contract is a formal agreement between an upstream component and a downstream component on the structure and semantics of data that is in motion. A schema is only one element of a data contract. A data contract specifies and supports the following aspects of an agreement:

- **Structure.** This is the part of the contract that is covered by the schema, which defines the fields and their types.
- **Integrity constraints.** This includes declarative constraints or data quality rules on the domain values of fields, such as the constraint that an age must be a positive integer.
- **Metadata.** Metadata is additional information about the schema or its constituent parts, such as whether a field contains sensitive information. Metadata can also include documentation for a data contract, such as who created it.
- **Rules or policies.** These data rules or policies can enforce that a field that contains sensitive information must be encrypted, or that a message containing an invalid age must be sent to a dead letter queue.
- **Change or evolution.** This implies that data contracts are versioned, and can support declarative migration rules for how to transform data from one version to another, so that even changes that would normally break downstream components can be easily accommodated.

Keeping in mind that a data contract is an agreement between an upstream component and a downstream component, note that:

- The upstream component enforces the data contract.
- The downstream component can assume that the data it receives conforms to the contract.

Data contracts are important because they provide transparency over dependencies and data usage in a stream architecture. They also help to ensure the consistency, reliability, and quality of the data in motion.

The upstream component could be a Apache Kafka® producer, while the downstream component would be the Kafka consumer. But the upstream component could also be a Kafka consumer, and the downstream component would be the application in which the Kafka consumer resides. This differentiation is important in schema evolution, where the producer may be using a newer version of the data contract, but the downstream application still expects an older version. In this case the data contract is used by the Kafka consumer to mediate between the Kafka producer and the downstream application, ensuring that the data received by the application matches the older version of the data contract, possibly using declarative transformation rules to massage the data into the desired form.

[Data Contracts for Schema Registry on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/sr/fundamentals/data-contracts.html)

## Manage Schemas - Broker-Side Schema ID Validation

Schema ID Validation enables the broker to verify that data produced to a Kafka topic uses a valid schema ID in Schema Registry that is registered according to the [subject naming strategy](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/index.html#sr-schemas-subject-name-strategy). (See also, [Schemas, subjects, and topics](https://docs.confluent.io/cloud/current/sr/fundamentals/index.html#sr-subjects-topics-primer).)

Schema Validation does not perform data introspection, but rather checks that the schema ID in the Wire Format is registered in Schema Registry under a valid subject.

You must use a serializer and deserializer (serdes) that respect the [Wire format](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/index.html#messages-wire-format), or use a Confluent supported serde, as described in [Formats, Serializers, and Deserializers](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/index.html#serializer-and-formatter).

### Limitations

- Schema validation feature does not reject tombstone records, records with a null value, even if there is no schema ID associated with the record. Messages with a null value or a null key will pass validation. This is a design choice that supports effective data management and deletion in compacted topics.

### Prerequisites

- Schema ID Validation on Confluent Cloud is **only available on [Dedicated clusters](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#dedicated-cluster)** through the hosted Schema Registry. Confluent Cloud brokers cannot use self-managed instances of Schema Registry, only the Confluent Cloud hosted Schema Registry. ([Schema validation is available for on-premises deployments](https://docs.confluent.io/platform/current/schema-registry/schema-validation.html) through Confluent Enterprise).
- You must have a [Schema Registry enabled for the environment](https://docs.confluent.io/cloud/current/get-started/schema-registry.html#cloud-sr-enable-zones) in which you are using Schema ID Validation.
- **Schema ID Validation is bounded at the level of an environment. All dedicated clusters in the same environment share a Schema Registry. Clusters do not have visibility into schemas across different environments

### Schema ID Validation Configuration options on a topic

Schema ID Validation is set at the topic level with the following parameters.

| Property                                   | Description                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `confluent.key.schema.validation`          | When set to `true`, enables schema ID validation on the message key. The default is `false`.                                                                                     |
| `confluent.value.schema.validation`        | When set to `true`, enables schema ID validation on the message value. The default is `false`.                                                                                   |
| `confluent.key.subject.name.strategy`      | Set the subject name strategy for the message key. The default is `io.confluent.kafka.serializers.subject.TopicNameStrategy`.                                                    |
| `confluent.value.subject.name.strategy`    | Set the subject name strategy for the message value. The default is `io.confluent.kafka.serializers.subject.TopicNameStrategy`.                                                  |
| `confluent.schema.validation.context.name` | Set the specific schema context that will be searched by the broker when validating the schema ID of the message key and value. The default value of this property is `default`. |

#### Tip

- Value schema and key schema validation are independent of each other; you can enable either or both.
- The subject naming strategy is tied to Schema ID Validation. This will have no effect when Schema ID Validation is not enabled.

### Schemas, subjects and topics

A **Kafka [topic](https://docs.confluent.io/cloud/current/_glossary.html#term-topic)** contains messages, and each message is a key-value pair. Either the message key or the message value, or both, can be serialized as [Avro](https://docs.confluent.io/cloud/current/_glossary.html#term-Avro), [JSON](https://docs.confluent.io/cloud/current/_glossary.html#term-JSON-Schema), or [Protobuf](https://docs.confluent.io/cloud/current/_glossary.html#term-Protobuf). A **schema** defines the structure of the data format. The Kafka topic name can be independent of the schema name. Schema Registry defines a scope in which schemas can evolve, and that scope is the **subject**. The name of the subject depends on the configured [subject name strategy](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/index.html#sr-schemas-subject-name-strategy), which by default is set to derive subject name from topic name.

[Schema Registry Concepts for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/sr/fundamentals/index.html#sr-subjects-topics-primer)

### Subject name strategy

A serializer registers a schema in Schema Registry under a `subject` name, which defines a namespace in the registry:

- Compatibility checks are per subject
- Versions are tied to subjects
- When schemas evolve, they are still associated to the same subject but get a new schema ID and version

The subject name depends on the subject name strategy. Three supported strategies include:

| Strategy                | Description                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TopicNameStrategy       | Derives subject name from topic name. (This is the default.)                                                                                             |
| RecordNameStrategy      | Derives subject name from record name, and provides a way to group logically related events that may have different data structures under a subject.     |
| TopicRecordNameStrategy | Derives the subject name from topic and record name, as a way to group logically related events that may have different data structures under a subject. |

[Broker-Side Schema ID Validation on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/sr/broker-side-schema-validation.html)

[Formats, Serializers, and Deserializers for Schema Registry on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/sr/fundamentals/serdes-develop/index.html#sr-schemas-subject-name-strategy)

## Manage Schemas - Schema Linking

Schema Linking keeps schemas in sync across two Schema Registry clusters. Schema Linking can be used in conjunction with Cluster Linking to keep both schemas and topic data in sync across two Schema Registry and Kafka clusters.

### Contexts and exporters

Schema Registry introduces two new concepts to support Schema Linking:

- **Contexts** - A [context](https://docs.confluent.io/cloud/current/sr/schema-linking.html#schema-contexts) represents an independent scope in Schema Registry, and can be used to create any number of separate “sub-registries” within one Schema Registry cluster. Each schema context is an independent grouping of schema IDs and subject names, allowing the same schema ID in different contexts to represent completely different schemas. Any schema ID or subject name without an explicit context lives in the default context, denoted by a single dot `.`. An explicit context starts with a dot and can contain any parts separated by additional dots, such as `.mycontext.subcontext`. Context names operate similar to absolute Unix paths, but with dots instead of forward slashes (the default schema is like the root Unix path). However, there is no relationship between two contexts that share a prefix.

- **Exporters** - A [schema exporter](https://docs.confluent.io/cloud/current/sr/schema-linking.html#schema-exporters) is a component that resides in Schema Registry for exporting schemas from one Schema Registry cluster to another. The lifecycle of a schema exporter is managed through APIs, which are used to create, pause, resume, and destroy a schema exporter. A schema exporter is like a “mini-connector” that can perform change data capture for schemas.

### Limitations and considerations

- On Confluent Cloud, you can have a maximum of 10 exporters with the Essentials package and 100 in the Advanced package.
- One exporter can transfer multiple schemas.
- There is no upper limit on the number of schemas that can be transferred using an exporter.

[Schema Linking for Confluent Cloud Developers \| Confluent Documentation](https://docs.confluent.io/cloud/current/sr/schema-linking.html)
