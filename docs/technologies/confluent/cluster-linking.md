# Cluster Linking

Cluster Linking allows you to directly connect clusters and perfectly mirror topics, consumer offsets, and ACLs from one cluster to another.

Cluster Linking on Confluent Cloud is a fully-managed service for replicating data from one Confluent cluster to another. Programmatically, it creates perfect copies of your topics and keeps data in sync across clusters. Cluster Linking is a powerful geo-replication technology for:

- **Multi-cloud and global architectures** powered by real-time data in motion
- **Data sharing** between different teams, lines of business, or organizations
- **High Availability (HA)/Disaster Recovery (DR)** during an outage of a cloud provider’s region
- **Data and workload migration** from a Apache Kafka® cluster to Confluent Cloud or Confluent Platform cluster to Confluent Cloud
- **Protect Tier 1, customer-facing applications and workloads from disruption** by creating a read-replica cluster for lower-priority applications and workloads
- **Hybrid cloud architectures** that supply real-time data to applications across on-premises datacenters and the cloud
- Syncing data between production environments and staging or development environments

```bash
confluent kafka link create tokyo-sydney
  --source-bootstrap-server pkc-abc.ap-south-1.aws.confluent.cloud:9092
  --source-cluster lkc-42492
  --source-api-key AP1K3Y
  --source-api-secret ********

confluent kafka mirror create clickstream.tokyo
   --link tokyo-sydney
```

## Bidirectional mode

Cluster Linking bidirectional mode (a bidirectional cluster link) enables better Disaster Recovery and active/active architectures, with data and metadata flowing bidirectionally between two or more clusters.

- By default, **a cluster link is a one-way bridge:** topics go from a source cluster to a destination cluster, with data and metadata always flowing from source to destination.
- In contrast, **a bidirectional cluster link is a two-way bridge:** topics on either side can go to the other cluster, with data and metadata flowing in both directions.

### Consumer-last migrations

Bidirectional cluster links are useful for certain types of migrations, where consumers are migrated after producers.

- In most migrations from an old cluster to a new cluster, a default cluster link suffices because consumers are migrated before or at the same time as producers.
- If there are straggling consumers on the old cluster, a bidirectional cluster link can help by ensuring their consumer offsets flow to the new cluster and are available when these consumers need to migrate. A default cluster link does not do this.

## Restrictions and limitations

To use bidirectional mode for Cluster Linking, both clusters must be one of these types:

- [Dedicated or Enterprise cluster on Confluent Cloud](https://docs.confluent.io/cloud/current/clusters/cluster-types.html)
- [Confluent Platform 7.5 or later](https://docs.confluent.io/platform/current/installation/versions-interoperability.html)

Bidirectional mode is not supported if either of the clusters is a Basic or Standard Confluent Cloud cluster, a version of Confluent Platform 7.4 or earlier, or open source Apache Kafka®.

Consumer group prefixing cannot be enabled for bidirectional links. Setting `consumer.group.prefix.enable` to `true` on a bidirectional cluster link will result in an “invalid configuration” error stating that the cluster link cannot be validated due to this limitation.

## Links

- [Learn about Confluent Cluster Linking | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=D8VeBdDg7xI&ab_channel=Confluent)
- [Hands-on Course - Introduction to Hybrid and Multicloud Architecture](https://developer.confluent.io/courses/hybrid-cloud/intro/)
- [Overview of Cluster Linking Confluent Platform | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/cluster-linking/index.html)
- [Cluster Linking on Confluent Cloud for data sharing across multi-region clusters | Confluent Documentation](https://docs.confluent.io/cloud/current/multi-cloud/cluster-linking/index.html)
- [Managing and Configuring Cluster Links on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/multi-cloud/cluster-linking/cluster-links-cc.html)
