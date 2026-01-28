# Confluent Cloud

[Overview of Confluent Cloud - YouTube](https://www.youtube.com/watch?v=SBcc5FFM3C8)

- **Home**
- **Environments -** Access all your clusters and Flink workspaces
- **Data portal -** Shows all of your topics in confluent cloud allowing you to search, request access and view the data flowing through your environment
- **Stream processing -** We can see all our Flink workspaces
- **Cluster links -** Configure links to multiple clusters, including the use case where we might be using Confluent cloud and on-premise Kafka cluster
- **Stream shares -** Setup and manage and any topic data that we would like to share with others.

[How to Add a Connector to Confluent Cloud - YouTube](https://www.youtube.com/watch?v=FTjVDegShi4)

- Sources and Sinks
- Adding a Connector
- Custom Connectors

[How to Set Up Networking on Confluent Cloud - YouTube](https://www.youtube.com/watch?v=f6XAjeapqmg)

- Cluster Types
- Standard Clusters
- Enterprise Clusters
- Dedicated Clusters

## Complete integrated platform

Confluent Cloud is a comprehensive platform that includes the entire ecosystem of tools needed for data streaming. This integrated approach saves you from having to build and manage a complex stack from various vendors.

### Fully-managed connectors

A library of pre-built, fully-managed connectors simplifies data integration to and from popular databases, data lakes, and other services. This removes the operational overhead of running your own Kafka Connect clusters.

### Stream Processing

- Confluent Cloud for Apache Flink provides a cloud-native, serverless service for Flink that enables simple, scalable, and secure stream processing that integrates seamlessly with Apache Kafka®. Your Kafka topics appear automatically as queryable Flink tables, with schemas and metadata attached by Confluent Cloud.
- Confluent Cloud for Apache Flink supports creating stream-processing applications by using Flink SQL, the [Flink Table API](https://docs.confluent.io/cloud/current/flink/reference/table-api.html#flink-table-api) (Java and Python), and custom [user-defined functions](https://docs.confluent.io/cloud/current/flink/concepts/user-defined-functions.html#flink-sql-udfs).

### Stream Governance

Built-in features like Schema Registry ensure data quality and compatibility across all your applications. This allows you to centrally manage schemas and prevent data errors at the source.

## Enterprise-grade networking and security

Confluent Cloud provides robust security and networking features that allow organizations to meet compliance and privacy requirements.

### Data Encryption

All data is encrypted by default. Data in motion is secured using TLS 1.2, and data at rest is encrypted using native cloud provider services. For even greater control, customers can use Bring Your Own Key (BYOK) to encrypt data at rest with their own encryption keys, and Client-Side Field Level Encryption (CSFLE) to protect sensitive data at the application layer before it is written to Confluent Cloud.

### Private Networking

To keep traffic off the public internet, Confluent Cloud offers multiple private networking options:

- VPC/VNet Peering: A direct network connection between your cloud network and your Confluent Cloud clusters.
- AWS PrivateLink, Azure Private Link, and Google Cloud Private Service Connect: These provide a more secure, one-way, and simpler alternative to peering, allowing your applications to connect to Confluent Cloud privately without exposing the IP space of your network.

### Identity and Access Management

The platform provides a full suite of identity controls, including:

- Role-Based Access Control (RBAC): Granular permissions for users and service accounts to ensure that only authorized entities can perform specific actions on resources.
	- [Predefined RBAC roles in Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html)
- Auditing: Comprehensive audit logs track all user and application activity, which is essential for security monitoring and compliance.

## Confluent Resource Names (CRNs)

Confluent Resource Names (CRNs) are used to uniquely identify all Confluent resources.

A CRN is a valid URI having an "authority" of confluent.cloud or a self-managed metadata service URL, followed by the minimal hierarchical set of key-value pairs necessary to uniquely identify a resource.

**Examples**

- Organization resource - 	`crn://confluent.cloud/organization=9bb441c4-edef-46ac-8a41-c49e44a3fd9a`
- Environment resource - `crn://confluent.cloud/organization=9bb441c4-edef-46ac-8a41-c49e44a3fd9a/environment=env-456xy`
- KEK (Schema Registry Key Encryption Keys (KEKs)) - `crn://confluent.cloud/organization=9bb441c4-edef-46ac-8a41-c49e44a3fd9a/environment=env-456xy/schema-registry=lsrc-789qw//kek=test_kek`

[Confluent Cloud API Reference Documentation](https://docs.confluent.io/cloud/current/api.html#section/Identifiers-and-URLs/Confluent-Resource-Names-(CRNs))

## Links

- [Apache Kafka 101: Confluent's Flagship Course on Apache Kafka® Fundamentals ft. Tim Berglund - YouTube](https://www.youtube.com/playlist?list=PLf38f5LhQtheK16nwnCYFqH23WUUvZfSb)
	- [What You'll Learn in This Apache Kafka® 101 Course](https://developer.confluent.io/courses/apache-kafka/events/)
- [Release Notes for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/release-notes/index.html)
