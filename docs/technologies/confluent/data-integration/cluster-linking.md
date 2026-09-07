---
slug: /technologies/confluent/cluster-linking
title: Cluster Linking for Data Replication
description: Discover how Cluster Linking enables seamless data replication across clusters with Confluent Cloud for enhanced availability and sharing.
created: 2026-03-04
updated: 2026-09-07
---
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

**Cluster Linking is link-level, but mirroring operations are topic-level.**

- One cluster link can contain multiple mirror topics; you do **not** need a separate link per topic.
- You can create, pause, promote, fail over, or delete mirror topics **individually**.
- Pausing/stopping one mirror topic does not stop the others.
- If you pause or delete the **cluster link**, it affects mirroring for all topics attached to that link.
- Auto-create configuration is link-level, but filters can restrict which source topics are mirrored.

## Topic types

| Type                       | Meaning                                                                    | Writable? |
| -------------------------- | --------------------------------------------------------------------------- | --------- |
| Regular topic               | Standard Kafka topic created directly on a cluster; typically the source for replication | Yes       |
| Mirror topic                | Cluster-Link-managed, byte-for-byte copy of a source topic on the destination cluster | No (read-only) |
| Promoted/failover topic     | A mirror topic converted into a regular topic via promote or failover        | Yes       |
| Local / remote mirror       | In bidirectional linking, mirrors created on each side from the other cluster's topic | No        |

Compacted, delete-retention, and tiered-storage settings are not separate topic types — they're regular topic configs, and Cluster Linking mirrors them as configured (e.g., a compacted source topic mirrors as compacted).

**A mirror topic cannot be created on top of an already-existing regular topic** — the destination topic name must not already exist (unless a `link.prefix` is used). If the topic already exists on the source side, mirroring it under the same name on the destination works fine. After promote/failover, the topic becomes a regular writable topic; to mirror it again, follow the failover/recovery procedure rather than reusing it directly.

## Bidirectional mode

Cluster Linking bidirectional mode (a bidirectional cluster link) enables better Disaster Recovery and active/active architectures, with data and metadata flowing bidirectionally between two or more clusters.

- By default, **a cluster link is a one-way bridge:** topics go from a source cluster to a destination cluster, with data and metadata always flowing from source to destination.
- In contrast, **a bidirectional cluster link is a two-way bridge:** topics on either side can go to the other cluster, with data and metadata flowing in both directions.

### Consumer-last migrations

Bidirectional cluster links are useful for certain types of migrations, where consumers are migrated after producers.

- In most migrations from an old cluster to a new cluster, a default cluster link suffices because consumers are migrated before or at the same time as producers.
- If there are straggling consumers on the old cluster, a bidirectional cluster link can help by ensuring their consumer offsets flow to the new cluster and are available when these consumers need to migrate. A default cluster link does not do this.

**Producer-first pattern (consumers stay on the old cluster temporarily):** create the topic on the new cluster, then a reverse link (new → old) with a prefix (e.g., `new.`) that mirrors `new.orders` back onto the old cluster. Move producers to the new cluster, and point old-cluster consumers at both topics with an anchored regex, e.g. `^(orders|new.orders)$` (avoid broad patterns like `.*orders`, which can match unrelated topics). Caveats:

- **Ordering isn't preserved across the two topics** — the same key can land on different partitions in each, so don't rely on cross-topic ordering; use an event timestamp or sequence number if it matters.
- **Avoid replaying history** into the reverse mirror: set `mirror.start.offset.spec=latest` on the reverse link before cutover so it only carries records produced after the switch, and confirm the mirror is active before cutting producers over (to avoid a gap).
- **Offsets don't map across topic names** — since consumers read two differently-named topics, normal offset sync won't carry over when consumers eventually move to the new topic; that move needs a manual offset/cutover plan. Keep offset sync disabled on this temporary reverse link unless you have one.

Prefer the standard old → new link (consumers moving with or before producers) when possible — it preserves offsets and syncs consumer groups, so consumers resume on the new cluster with minimal duplicate processing. Reach for the producer-first/prefixed pattern only when consumers must stay on the old cluster and can be updated to subscribe to two topic names.

### Reverse-and-start vs reverse-and-swap vs failover vs truncate-and-restore

Four related operations for switching which side of a mirror is writable — each with different data-loss and reversibility trade-offs. All of the reverse and truncate-and-restore operations require a bidirectional cluster link; `truncate-and-restore` additionally requires KRaft mode on Confluent Platform.

| Operation | Purpose | Data-loss behavior | Result |
| --- | --- | --- | --- |
| `reverse-and-start` | Planned switchover/failback while both clusters are available | Designed to preserve data after synchronization; source is briefly read-only | Source and mirror roles are exchanged; new mirror becomes ACTIVE |
| `reverse-and-swap` | Informal umbrella term, not a primary CLI command | Depends on the underlying reverse operation | Usually means reversing roles via `reverse-and-start` or `reverse-and-pause` |
| `failover` | Emergency DR when the source is unavailable | May lose records within replication lag | Mirror immediately becomes a writable normal topic; irreversible |
| `truncate-and-restore` | Re-establish mirroring after a failover/promote | Deletes divergent records written to the old primary after failover; those records may be lost unless reprocessed | Old primary becomes a mirror of the active DR topic |

**Rule of thumb:**

- Both sides healthy → `reverse-and-start`
- Source unavailable → `failover`
- After failover, restore mirroring → `truncate-and-restore`
- Complete failback to the original primary → `truncate-and-restore` followed by `reverse-and-start`

```bash
# planned switchover/failback (both clusters reachable)
confluent kafka mirror reverse-and-start <topic> --link <link-name>

# unplanned DR failover (source down/unreachable)
confluent kafka mirror failover <topic> --link <link-name>

# restore redundancy after failover: truncate divergent data on the old
# primary, wait for it to catch up as a mirror, then switch roles back
confluent kafka mirror truncate-and-restore <topic> --link <link-name>
confluent kafka mirror reverse-and-start <topic> --link <link-name>
```

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
- [Manage Mirror Topics for Cluster Linking on Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/cluster-linking/mirror-topics-cp.html)
