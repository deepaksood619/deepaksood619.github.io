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
