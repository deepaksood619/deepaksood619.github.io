---
slug: /kafka-kraft-rbac-mtls-ldap-troubleshooting
title: KRaft + RBAC + mTLS + LDAP Troubleshooting
description: Troubleshooting guide for KRaft clusters with RBAC, mTLS authentication, and LDAP authorization failures
created: 2026-07-07
updated: 2026-07-07
---

This guide covers troubleshooting `CLUSTER_AUTHORIZATION_FAILED` errors in KRaft-based Kafka clusters using RBAC, mTLS for authentication, and LDAP integration with cp-ansible.

## Problem Summary

The core failure pattern: A KRaft broker sends internal control-plane requests (heartbeats, Raft fetches) to controllers and receives `CLUSTER_AUTHORIZATION_FAILED`, followed by a fatal Raft thread failure.

This pattern indicates an **authorization problem between brokers and controllers**, not a TLS connectivity issue.

## What the Error Means

When a broker heartbeat or Raft fetch to the controller is rejected with `CLUSTER_AUTHORIZATION_FAILED`:

- The principal used by the broker/controller is **authenticated** (TLS handshake succeeded)
- The principal **does not have cluster-level authorization** for internal KRaft operations
- Authorization is enforced on **both broker and controller sides** in KRaft clusters
- A configuration correct only on brokers is **insufficient**

## Configuration Components

### Confirmed Setup

- **KRaft enabled** with Confluent Server
- **TLS with mTLS** for internal communication
- **Required client authentication** enabled
- **RBAC enabled** with LDAP settings for MDS
- **Controller quorum listeners** configured for mTLS-only (`sasl_protocol: none`)
- **Dedicated broker listener** for inter-broker traffic over mTLS

### Principal Mapping

**Broker side had:**

```text
ssl.principal.mapping.rules=RULE:^CN=([^,]+).*$/$1/,DEFAULT
```

**Controller side initially lacked** the same mapping in inventory.

**Certificate DNs:**

- Controllers: `CN=DACDCAPCTDLV01.albtests.com,...`
- Brokers: `CN=DACDCAPBRDLV01.albtests.com,...`

**Mapped principals** (after mapping): Hostname-style values like `DACDCAPCTDLV01.albtests.com`

## cp-ansible Behavior

### `rbac_super_users` Variable

- Additional list of RBAC super-user principals pushed to broker and controller logic
- When mTLS is enabled, **certificate principals must be explicitly listed**
- **Critical:** If `rbac_super_users` is defined, cp-ansible **does not automatically infer** KRaft broker/controller certificate principals

### `super.users` Property Construction

cp-ansible builds the final `super.users` from:

1. `rbac_super_users`
2. Existing `super.users`
3. LDAP MDS super user
4. Extracted certificate principals
5. Controller principals

**What matters at runtime:** The final rendered `super.users` in Kafka properties, not just the high-level inventory intent.

## Root Cause

In KRaft with mTLS and RBAC:

> Brokers and controllers **must share each other's principals as super users** during bootstrap/startup, or they will fail internal authorization for controller registration, heartbeats, and Raft traffic.

The effective runtime `super.users` on brokers/controllers was **incomplete or inconsistent**.

## Solution: Recommended Inventory Changes

### 1. Make `auth_mode` Explicit

```yaml
auth_mode: ldap
```

Even if cp-ansible defaults to LDAP for RBAC, make it explicit to avoid ambiguity in how principals are sourced for MDS and internal flows.

### 2. Apply Principal Mapping Consistently

Add to **both** broker and controller custom properties:

```yaml
kafka_broker_custom_properties:
  ssl.principal.mapping.rules: "RULE:^CN=([^,]+).*$/$1/,DEFAULT"

kafka_controller_custom_properties:
  ssl.principal.mapping.rules: "RULE:^CN=([^,]+).*$/$1/,DEFAULT"
```

This ensures both sides interpret mTLS principals consistently.

### 3. Set `super.users` Explicitly

**Do not rely only on `rbac_super_users`**. Set `super.users` explicitly under both `kafka_broker_custom_properties` and `kafka_controller_custom_properties`.

### 4. Include All Broker and Controller Principals

```yaml
kafka_broker_custom_properties:
  super.users: "User:svc_kafka_ldap;User:DACDCAPBRDLV01.albtests.com;User:DACDCAPBRDLV02.albtests.com;User:DACDCAPBRDLV03.albtests.com;User:DACDCAPCTDLV01.albtests.com;User:DACDCAPCTDLV02.albtests.com;User:DACDCAPCTDLV03.albtests.com"

kafka_controller_custom_properties:
  super.users: "User:svc_kafka_ldap;User:DACDCAPBRDLV01.albtests.com;User:DACDCAPBRDLV02.albtests.com;User:DACDCAPBRDLV03.albtests.com;User:DACDCAPCTDLV01.albtests.com;User:DACDCAPCTDLV02.albtests.com;User:DACDCAPCTDLV03.albtests.com"
```

**Includes:**

- LDAP MDS super user: `User:svc_kafka_ldap`
- All broker principals (mapped from cert CNs)
- All controller principals (mapped from cert CNs)

This aligns with the documented requirement that when mTLS is enabled, brokers' and controllers' certificate principals must be explicitly provided and shared.

## Why LDAP Was Not the Direct Root Cause

The symptom was **not** a straightforward LDAP bind or lookup failure. It was a **cluster authorization failure on internal KRaft traffic**.

- LDAP matters for MDS and RBAC bootstrapping
- The immediate blocker was broker/controller service principals not being recognized as sufficiently privileged for internal cluster operations

## Verification After Changes

After updating the inventory, verify the **rendered Kafka `server.properties`** on at least one broker and one controller.

### Check

1. `ssl.principal.mapping.rules` is present and identical
2. `super.users` contains all broker and controller principals
3. Same principals appear on both broker and controller sides

**Why:** cp-ansible composes final properties from multiple sources before writing them out.

### Commands

```bash
# On broker node
grep "ssl.principal.mapping.rules" /etc/kafka/server.properties
grep "super.users" /etc/kafka/server.properties

# On controller node
grep "ssl.principal.mapping.rules" /etc/kafka/server.properties
grep "super.users" /etc/kafka/server.properties
```

## Operational Guidance

### Restart Order

For KRaft authorization-related changes:

1. **Restart controllers first** (using rolling strategy where possible)
2. **Then restart brokers** (rolling restart)

### Monitoring

After restart, monitor for:

- `CLUSTER_AUTHORIZATION_FAILED` errors in broker logs
- Raft thread failures
- Controller connectivity issues
- Broker registration failures

## Key Takeaway

**If KRaft brokers using mTLS fail with `CLUSTER_AUTHORIZATION_FAILED` during heartbeat or Raft traffic:**

1. **Suspect first:** The effective `super.users` on brokers/controllers does not correctly include the broker and controller certificate principals as seen after principal mapping

2. **Durable fix:**
   - Make the authorization path explicit: `auth_mode: ldap`
   - Ensure principal mapping is consistent on both brokers and controllers
   - Explicitly set identical `super.users` on both broker and controller custom properties
   - Include all broker and controller principals

## Links

- [Enable RBAC in Running Confluent Platform Environment Using Ansible Playbooks](https://docs.confluent.io/ansible/current/ansible-rbac-enable.html)
- [Migrate Zookeeper-based Confluent Platform to KRaft-based Confluent Platform](https://docs.confluent.io/ansible/current/ansible-migrate-kraft.html)
- [Configure Authorization for Confluent Platform using Ansible Playbooks](https://docs.confluent.io/ansible/current/ansible-authorize.html)
- [Upgrade Confluent Platform using Confluent Ansible](https://docs.confluent.io/ansible/current/ansible-upgrade.html)
- [KRaft Overview](kraft.md)
