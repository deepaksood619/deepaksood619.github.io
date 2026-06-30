---
slug: /kafka-fetch-from-follower-ec2
title: Kafka Fetch from Follower - EC2 Configuration
description: Architectural and operational best practices for configuring Kafka consumers on EC2 to use Fetch from Follower feature
created: 2026-06-30
updated: 2026-06-30
---

Fetch from Follower (FFF) allows Kafka consumers to read from a follower replica in the same Availability Zone instead of always reading from the partition leader, reducing cross-AZ egress costs in multi-AZ deployments.

## Core Concepts & Prerequisites

**Purpose of FFF**: By default, Kafka consumers fetch from the partition leader, which can increase cross-AZ traffic costs in multi-AZ setups. FFF allows consumers to fetch from a follower replica in the same physical Availability Zone (AZ) to reduce egress costs.

**Requirements**: Consumers must inform the broker of their zone using the `client.rack` configuration. The client must be Apache Kafka version 2.4 or higher.

**Network Support**: FFF is supported on Dedicated clusters with VPC peering, or Enterprise/Freight clusters with a Private Network Interface (PNI), but not on Basic or Standard clusters.

## Availability Zone Identification

**AZ IDs vs. AZ Names**: Always use the AZ ID (e.g., `use1-az1`) instead of the AZ name (e.g., `us-east-1a`) for `client.rack` configurations. AZ names map to different physical zones depending on the account, whereas AZ IDs are stable across accounts and are what Confluent Cloud uses.

**EC2 Metadata Endpoint**: When retrieving the AZ metadata from EC2, you must use the `placement/availability-zone-id` path rather than the standard name path.

## EC2 Metadata & IMDSv2 Considerations

**IMDSv2 Requirements**: Obtaining metadata via IMDSv2 requires issuing a PUT request for a session token, which must then be included in the header of subsequent GET requests. Token TTLs can be set up to 21,600 seconds. Failing to provide this token will result in a 401 Unauthorized error.

**Container Network Hops**: User Data scripts run on the host system where a default network hop limit of 1 is sufficient. However, if consumers are running inside Docker containers, there is an extra network hop.

**Modifying Hop Limits**: For containerized apps, the IMDS token requests will time out unless the `http-put-response-hop-limit` instance metadata option is increased to 2 or higher.

## Deployment Architecture Patterns

### Primary Recommendation (User Data Injection)

The most practical and reliable approach for production is computing the AZ ID at boot time via EC2 User Data and writing it to global or service-level environment configurations.

This easily shares the variable across background processes, systemd services, Auto Scaling Groups, and AMIs without redundant metadata lookups.

**Systemd Best Practice**: Instead of modifying `/etc/environment`, writing to a dedicated `EnvironmentFile` (e.g., `/etc/default/myapp`) isolates variables by service and avoids global sharing.

**Idempotency**: Boot scripts should replace existing values (e.g., using `sed`) rather than blindly appending, to prevent duplicate entries.

### Secondary Approach (User Profile Wrapper)

Injecting the environment variable via `~/.profile` and a wrapper script provides a smaller blast radius and is quick for testing. However, it is strictly login-shell-oriented and unsuitable as a default production standard for service managers like systemd or boot auto-starts.

## Application Design & Fallback Policies

**Separation of Concerns**: Application code should avoid fetching EC2 metadata directly; instead, it should consume file-defined settings with an environment variable fallback.

**Configuration Priority**: The recommended priority order is a manual override in the config file first, falling back to the auto-injected environment variable (e.g., `AWS_AZ_ID`) if the file value is empty.

### Failure Modes

**Relaxed Mode (Recommended)**: If the AZ ID lookup fails during boot, the application simply defaults to standard leader fetching without crashing.

**Strict Mode**: The service refuses to start if the AZ ID cannot be resolved, helping detect broken states early but impacting availability.

## Verification and Monitoring

**Log Verification**: For Java applications, enabling DEBUG logging on consumer internals will show "preferred read replica" messages if FFF is working. For Python clients, inspecting real per-partition fetch targets via stats callbacks is necessary.

**Metrics API**: The most definitive way to verify zone alignment is querying the Confluent Cloud Metrics API using the `metric.zone_alignment` grouping. This will return statuses like `SAME_ZONE`, `CROSS_ZONE`, or `UNKNOWN`.

## Links

- [Fetch from Follower - Confluent Documentation](https://docs.confluent.io/cloud/current/networking/fetch-from-follower.html)
- [VPC Peering with Fetch from Follower](technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md)
- [Kafka Topic Replication](technologies/kafka/core/kafka-topic-replication.md)
