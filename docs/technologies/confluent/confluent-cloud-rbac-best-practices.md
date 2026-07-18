---
slug: /confluent-cloud-rbac-authentication-authorization-best-practices
title: Confluent Cloud RBAC and Authentication Best Practices
description: Comprehensive guide to RBAC roles, role bindings, service accounts, API key management, and authorization best practices in Confluent Cloud
created: 2026-07-11
updated: 2026-07-11
---

## Authentication and Authorization Strategy

### Use RBAC Over ACLs

**Recommendation:** Always prefer Role-Based Access Control (RBAC) over Access Control Lists (ACLs) for permission management in Confluent Cloud.

**Why ACLs are problematic:**

- Too complex to manage at scale
- Permissions are tied directly to API keys
- Key rotation requires manually replicating all ACL permissions to new keys
- Easy to miss permissions when creating connectors or applications
- Quickly becomes cumbersome as the number of topics and applications grows

**Why RBAC is better:**

- Permissions are managed at the service account level
- API keys automatically inherit permissions from their service account
- Changing permissions doesn't require key rotation
- Much simpler management and auditing
- Cloud-native approach designed for Confluent Cloud

### RBAC Permission Hierarchy

Confluent Cloud uses a hierarchical permission model:

```text
Organization
  └── Environment
       └── Cluster
            ├── Topics
            ├── Consumer Groups
            ├── Connectors
            └── Schema Registry
```

**Permission inheritance:**

- Higher-level permissions propagate down
- Environment Admin → Full access to all clusters in that environment
- Cloud Cluster Admin → Full access to all resources in that cluster
- Resource-level roles → Granular access to specific topics, connectors, etc.

## Service Accounts vs API Keys

### Service Accounts

**What they are:**

- Application identities (not for humans)
- Container for permissions via RBAC
- Can have multiple API keys
- Permissions are assigned once at the service account level

**Best practices:**

- Create separate service accounts for different applications or purposes
- One service account for producers/consumers
- Separate service account for connectors (needs Resource Owner on topics)
- Use descriptive naming conventions (e.g., , )

### API Keys

**What they are:**

- Credentials used by applications to authenticate
- Inherit permissions from their associated service account
- Can be scoped to specific clusters or global

**Key management best practices:**

- Generate API keys without ACLs (let RBAC handle permissions)
- Use the centralized API key management interface (hamburger menu → API Keys)
- When rotating keys, permissions automatically transfer (no manual ACL migration needed)
- Deprecated/unused keys should be deleted promptly

## API Key Scopes

### Cluster-Scoped Keys

```text
Scope: Single Kafka cluster in a specific environment
Use case: Production isolation, environment separation
Limitation: One key per cluster per service account
```

**When to use:**

- Separate dev/test/prod environments
- Want to enforce environment boundaries
- Standard use case for most applications

### Global Keys

```text
Scope: All clusters across all environments (where service account has RBAC)
Use case: Multi-cluster applications, migration scenarios
Benefit: One key works everywhere (with proper RBAC)
```

**When to use:**

- Multi-cluster replication
- Cross-environment migration tools
- Applications that need access to multiple clusters
- Global monitoring/observability tools

**How it works:**

1. Create service account
2. Grant RBAC permissions on multiple clusters
3. Generate global-scoped API key
4. Same key authenticates to all permitted clusters

## Complete RBAC Role Reference

### Organization-Level Roles

| Role | Description | Key Permissions |
|------|-------------|-----------------|
| **OrganizationAdmin** | Full organizational control | All operations across the entire organization |
| **EnvironmentAdmin** | Manage environments | Create/delete environments, manage all resources within environments |
| **BillingAdmin** | Financial management | View and manage billing, payment methods, invoices |
| **Operator** | Day-to-day operations | Manage clusters, topics, ACLs (cannot change users or roles) |
| **CloudClusterAdmin** | Cluster administration | Full cluster management capabilities |

### Environment Level

| Role | Permissions | Use Case |
|------|------------|----------|
| **EnvironmentAdmin** | Full access to all resources in environment | Environment owners, automation |
| **Operator** | Read-only access to everything, no data access | Monitoring, SRE, observability |
| **MetricsViewer** | Access to metrics only | Metrics integration, dashboards |

### Kafka Cluster Roles

| Role | Scope | Capabilities |
|------|-------|--------------|
| **CloudClusterAdmin** | Cluster | Full cluster control, broker configs, topic management |
| **DeveloperManage** | Cluster | Create/delete topics, manage ACLs (no broker config changes) |
| **DeveloperRead** | Cluster | Read from all topics in cluster |
| **DeveloperWrite** | Cluster | Write to all topics in cluster |
| **ResourceOwner** | Topic/Group | Full control over specific resource (topic or consumer group) |

### Topic-Level Roles

| Role | Permissions | Use Case |
|------|------------|----------|
| **ResourceOwner** | Create, delete, read, write, manage configs | Connectors (auto-create topics), topic owners |
| **DeveloperWrite** | Produce messages to topics | Producer applications |
| **DeveloperRead** | Consume messages from topics | Consumer applications |
| **DeveloperManage** | Manage topic configurations | Topic administrators |

**Important:** Consumers also need **DeveloperRead** on **Consumer Groups**

### Schema Registry Roles

| Role | Purpose | Capabilities |
|------|---------|--------------|
| **CloudSchemaRegistryAdmin** | Full Schema Registry management | All schema operations, compatibility settings |
| **DeveloperManage** | Create/modify schemas | Register schemas, update compatibility |
| **DeveloperRead** | Read schema definitions | View schemas, no modifications |
| **ResourceOwner** | Manage specific subjects | Full control over specific schema subjects |

### Connector Roles

| Role | Permissions | Use Case |
|------|-------------|----------|
| **CloudClusterAdmin** | Manage all connectors | Full connector administration |
| **Operator** | Deploy/configure connectors | Connector deployment and management |
| **ResourceOwner** | Manage specific connectors | Ownership of specific connector instances |
| **DeveloperWrite** | Write to connectors | Sink connector operations |
| **DeveloperRead** | Read connector configs | Monitoring, audit |

### ksqlDB Roles

| Role | Access Level | Capabilities |
|------|--------------|--------------|
| **CloudClusterAdmin** | Full ksqlDB administration | All ksqlDB operations |
| **ResourceOwner** | Manage specific ksqlDB cluster | Full control over specific cluster |
| **DeveloperManage** | Create queries/streams | Write queries, create streams/tables |
| **DeveloperRead** | Read-only access | Query existing streams/tables |

### Flink Roles

| Role | Capabilities | Use Case |
|------|--------------|----------|
| **FlinkAdmin** | Full Flink management | Cluster administration, all operations |
| **FlinkDeveloper** | Create/run statements | Develop and execute Flink SQL |
| **FlinkViewer** | Read-only access | Monitor Flink jobs, view configurations |

## Producer Application Permissions

**Minimum required permissions:**

1. **On Topics:**
   - Scope: Specific topics or prefix rule (e.g., )
   - OR: All topics (if application creates dynamic topics)

**Example setup:**

```text
Service Account: my-producer-app
RBAC Bindings:
  - DeveloperWrite on topics matching prefix "orders.*"
```

## Consumer Application Permissions

**Minimum required permissions:**

1. **On Topics:**
   - Scope: Specific topics to consume from
2. **On Consumer Groups:**
   - Scope: All consumer groups (recommended) OR specific group

**Why consumer groups permission is needed:**

- Kafka uses consumer groups to track offset commits
- Even single-consumer applications use consumer groups internally
- Recommendation: Grant DeveloperRead on ALL consumer groups (minimal overhead)

**Example setup:**

```text
Service Account: my-consumer-app
RBAC Bindings:
  - DeveloperRead on topic "orders"
  - DeveloperRead on all consumer groups
```

## Connector Permissions

**Minimum required permissions:**

1. **On Topics:**
   - Why: Connectors auto-create topics for data and metadata
   - Scope: All topics OR specific prefix
2. **On Consumer Groups:**
   - Why: Source connectors use consumer groups for offset tracking
   - Scope: All consumer groups

**Connector-specific topics created:**

- Data topics (based on source tables/streams)
- Internal metadata topics (e.g., , )
- Schema history topics (for CDC connectors)

**Example setup:**

```text
Service Account: connector-mysql-cdc
RBAC Bindings:
  - ResourceOwner on all topics
  - DeveloperRead on all consumer groups
```

## Permission Troubleshooting

### Common authorization errors

**"User is not authorized to perform this operation"**

- Check if service account has appropriate RBAC role
- Verify API key is associated with correct service account
- Check permission scope (topic/cluster/environment level)

**"Could not create topic"**

- Service account needs  on topics (not just DeveloperWrite)
- Common for connectors that auto-create topics

**"Consumer group permission denied"**

- Add  on consumer groups
- Often forgotten for sink connectors and consumers

## Key Rotation Best Practices

### With RBAC (Recommended)

1. Generate new API key for same service account
2. Update application configuration with new key
3. Verify application works with new key
4. Delete old API key
5. **No permission changes needed** (inherited from service account)

### With ACLs (Not Recommended)

1. Generate new API key
2. Manually replicate all ACL permissions to new key
3. Update application configuration
4. Verify application works
5. Delete old key and its ACLs
6. **Error-prone and time-consuming**

## Migration from Open Source Kafka

**Why ACLs exist in Confluent Cloud:**

- Open Source Kafka only had ACLs (no RBAC)
- Confluent Cloud maintained ACL support for migration compatibility
- Allows replicating existing ACL-based permissions during migration

**Migration strategy:**

1. Document existing ACLs from self-managed cluster
2. Map ACL patterns to RBAC roles in Confluent Cloud
3. Create service accounts with RBAC bindings
4. Generate API keys (without ACLs)
5. Test applications with new keys
6. Migrate applications to Confluent Cloud

**Don't:**

- Carry over ACL-based approach to Confluent Cloud long-term
- Mix ACLs and RBAC (choose one, preferably RBAC)

## Principle of Least Privilege

**Apply granular permissions:**

- Don't grant EnvironmentAdmin when CloudClusterAdmin suffices
- Don't grant CloudClusterAdmin when topic-level roles suffice
- Use prefix rules for topic permissions when possible
- Separate service accounts by application/function

**Example hierarchy:**

```text
Production environment:
  - prod-admin-sa → EnvironmentAdmin (ops team only)
  - prod-connector-sa → ResourceOwner on topics, DeveloperRead on consumer groups
  - prod-orders-consumer-sa → DeveloperRead on "orders" topic + consumer groups
  - prod-orders-producer-sa → DeveloperWrite on "orders" topic
```

## Assignment of Service Account Owners (Optional)

When creating a service account, you can optionally assign a **Resource Owner** (a human user) to that service account.

**What it does:**

- Tags a specific user as responsible for managing that service account
- Useful for accountability and auditing
- NOT required for functionality

**When to use:**

- Large organizations with many teams
- Want to track ownership/responsibility
- Compliance requirements

**When to skip:**

- Small teams where everyone manages via UI
- Service accounts managed by automation

## Best Practices Summary

✅ **DO:**

- Use RBAC over ACLs for all new deployments
- Create separate service accounts per application/purpose
- Use descriptive service account naming conventions
- Grant DeveloperRead on all consumer groups for consumers
- Use global keys for multi-cluster applications
- Apply principle of least privilege
- Use prefix rules for topic permissions when appropriate
- Document service account purposes and owners

❌ **DON'T:**

- Attach ACL permissions directly to API keys
- Use a single service account for all applications
- Grant higher permissions than necessary
- Forget consumer group permissions for consumers/connectors
- Mix ACLs and RBAC in the same deployment
- Skip key rotation policies
- Grant ResourceOwner when DeveloperWrite/Read suffices

## Tools for Permission Management

### Confluent Cloud UI

- Navigate to Service Accounts
- Click on service account → Access tab
- Grant Access → Select environment/cluster/resource
- Choose appropriate role
- Save

### Confluent CLI

```bash
# Create service account
confluent iam service-account create my-app --description "My application"

# Grant RBAC role
confluent iam rbac role-binding create \
  --principal User:<service-account-id> \
  --role DeveloperWrite \
  --resource Topic:orders \
  --kafka-cluster <cluster-id>

# Create API key
confluent api-key create --service-account <sa-id> --resource <cluster-id>
```

### Terraform (Infrastructure as Code)

```hcl
resource "confluent_service_account" "my_app" {
  display_name = "my-app"
  description  = "Service account for my application"
}

resource "confluent_role_binding" "my_app_write" {
  principal   = "User:${confluent_service_account.my_app.id}"
  role_name   = "DeveloperWrite"
  crn_pattern = "${confluent_kafka_cluster.main.rbac_crn}/kafka=${confluent_kafka_cluster.main.id}/topic=orders"
}
```

## Managing Role Bindings

### Role Binding Concepts

**Role Binding**: Associates a principal (user or service account) with a role on a specific resource scope.

**Principal Types:**

- User accounts (SSO or local)
- Service accounts (for applications)
- Identity pools (OAuth/mTLS federation)

**Scope Levels** (hierarchical):

1. Organization
2. Environment
3. Cluster
4. Resource-specific (topic, consumer group, connector, etc.)

### Console Management

**View role bindings for a principal:**

1. Navigate to **Administration > Accounts & access**
2. Select user or service account
3. Click **Access** tab
4. Expand resource tree to view all bindings

**Add role binding:**

1. Select the principal (user or service account)
2. Click **+ Add role assignment** or **Grant Access**
3. Navigate to the resource (environment/cluster/topic)
4. Choose appropriate role from dropdown
5. Save assignment

**Example workflow:**

```text
Service Account: my-producer-app
→ Grant Access
  → Select: TBO Dev Environment
    → Select: tbo-dev-cluster
      → Select: Topics
        → Role: DeveloperWrite
        → Scope: All topics (or specific topic/prefix)
→ Save
```

### CLI Management

**List all bindings for a principal:**

```bash
confluent iam rbac role-binding list \
  --principal User:<email>
```

**List bindings for service account:**

```bash
confluent iam rbac role-binding list \
  --principal User:<service-account-id>
```

**Create role binding:**

```bash
confluent iam rbac role-binding create \
  --principal User:<service-account-id> \
  --role DeveloperWrite \
  --environment <env-id> \
  --kafka-cluster <cluster-id>
```

**Create topic-specific binding:**

```bash
confluent iam rbac role-binding create \
  --principal User:<service-account-id> \
  --role ResourceOwner \
  --resource Topic:orders \
  --kafka-cluster <cluster-id>
```

**Delete role binding:**

```bash
confluent iam rbac role-binding delete <binding-id>
```

### Resource Naming Patterns

#### CRN (Confluent Resource Name) Format

**Topic CRN:**

```text
crn://<cloud>/<org>/environment=<env-id>/cloud-cluster=<cluster-id>/kafka=<cluster-id>/topic=<topic-name>
```

**Consumer Group CRN:**

```text
crn://<cloud>/<org>/environment=<env-id>/cloud-cluster=<cluster-id>/kafka=<cluster-id>/group=<group-name>
```

**Connector CRN:**

```text
crn://<cloud>/<org>/environment=<env-id>/cloud-cluster=<cluster-id>/connector=<connector-id>
```

#### Prefix Rules for Topics

**Wildcard patterns:**

```text
All topics: topic=*
Prefix match: topic=orders.*
Specific topic: topic=orders
```

**Example: Grant write access to all topics starting with "orders-":**

```bash
confluent iam rbac role-binding create \
  --principal User:<sa-id> \
  --role DeveloperWrite \
  --resource Topic:orders-* \
  --kafka-cluster <cluster-id>
```

### API Management

**List role bindings (REST API):**

```bash
GET /iam/v2/role-bindings?principal=User:<email>
```

**Create binding (REST API):**

```bash
POST /iam/v2/role-bindings
{
  "principal": "User:<service-account-id>",
  "role_name": "DeveloperRead",
  "crn_pattern": "crn://aws.us-east-1/org-123/environment=env-456/cloud-cluster=lkc-789/kafka=lkc-789/topic=orders"
}
```

## RBAC and ACL Coexistence

**How they interact:**

- RBAC is evaluated first
- If RBAC denies, ACLs are checked second
- **Permission granted if EITHER RBAC OR ACL permits**

**Decision matrix:**

```text
RBAC Result + ACL Result = Final Decision
---------------------------------------------
ALLOW       + (any)      = ALLOW
DENY        + ALLOW      = ALLOW
DENY        + DENY       = DENY
DENY        + (no ACL)   = DENY
```

**Recommendation:**

- Use RBAC for human user management
- Use RBAC for most application permissions
- Use ACLs only for application-specific fine-grained control
- **DO NOT mix both for the same principal** (confusing to manage)

### Migration Strategy: ACLs → RBAC

**Step 1: Audit existing ACLs**

```bash
kafka-acls --bootstrap-server <broker> --list
```

**Step 2: Map ACL patterns to RBAC roles**

```text
ACL: ALLOW User:app READ Topic:orders
→ RBAC: DeveloperRead on topic "orders"

ACL: ALLOW User:app WRITE Topic:orders
→ RBAC: DeveloperWrite on topic "orders"

ACL: ALLOW User:app READ Group:*
→ RBAC: DeveloperRead on all consumer groups
```

**Step 3: Create service accounts with RBAC**

```bash
# Create service account
confluent iam service-account create app-name

# Grant equivalent RBAC permissions
confluent iam rbac role-binding create \
  --principal User:<sa-id> \
  --role DeveloperRead \
  --resource Topic:orders
```

**Step 4: Generate new API keys**

```bash
confluent api-key create \
  --service-account <sa-id> \
  --resource <cluster-id>
```

**Step 5: Test and migrate applications**

**Step 6: Remove old ACLs**

```bash
kafka-acls --bootstrap-server <broker> \
  --remove --allow-principal User:<old-user>
```

## Troubleshooting RBAC Issues

### Common Problems and Solutions

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| "Insufficient permissions" error | Role scope doesn't match resource hierarchy | Verify role is granted at correct level (topic vs cluster) |
| Service account cannot connect | API key missing or no role binding | Check service account has role binding AND valid API key |
| User sees no resources in UI | No environment-level role | Grant at least Operator or MetricsViewer at environment level |
| Connector fails to create topics | Service account missing ResourceOwner | Grant ResourceOwner on topics (not just DeveloperWrite) |
| Consumer cannot commit offsets | Missing consumer group permission | Grant DeveloperRead on consumer groups |

### Validation Checklist

**For authentication issues:**

1. ✅ Confirm principal identity (email or service account ID)
2. ✅ Verify API key is valid and not expired
3. ✅ Check API key is associated with correct service account
4. ✅ Confirm service account has at least one role binding

**For authorization issues:**

1. ✅ Verify resource CRN/name accuracy
2. ✅ Check role supports the required operation
3. ✅ Confirm scope hierarchy (topic role requires cluster access)
4. ✅ Review audit logs for authorization denials
5. ✅ Check for conflicting ACLs (if ACLs are in use)

### Viewing Audit Logs

**Console:**

1. Navigate to **Administration > Audit logs**
2. Filter by principal, resource, or time range
3. Look for `authorization.failed` events

**CLI:**

```bash
confluent audit-log describe \
  --service-account <sa-id> \
  --start-time <timestamp>
```

## Advanced Patterns

### Multi-Environment Service Accounts

**Use case:** Same application deployed across dev/staging/prod

**Pattern:**

```text
Service Account: my-app (global)

Role Bindings:
  - Dev Environment:
      DeveloperWrite on all topics
      DeveloperRead on all consumer groups

  - Staging Environment:
      DeveloperWrite on topics "staging.*"
      DeveloperRead on all consumer groups

  - Prod Environment:
      DeveloperWrite on topic "prod.orders"
      DeveloperRead on group "prod.orders.consumer"
```

**API Key strategy:**

- Option 1: Cluster-scoped keys (one per environment)
- Option 2: Single global key (inherits all permissions)

### Schema Registry + Kafka Permissions

**Complete producer setup:**

```text
Service Account: schema-aware-producer

RBAC Bindings:
1. Kafka Cluster:
   - DeveloperWrite on topic "orders"

2. Schema Registry:
   - DeveloperManage (to register new schemas)
   OR
   - DeveloperRead (if only using existing schemas)
```

### ksqlDB + Kafka Permissions

**ksqlDB application setup:**

```text
Service Account: ksqldb-app

RBAC Bindings:
1. ksqlDB Cluster:
   - ResourceOwner (to manage ksqlDB cluster)
   OR
   - DeveloperManage (to create queries)

2. Kafka Cluster:
   - DeveloperRead on source topics
   - DeveloperWrite on output topics
   - DeveloperRead on consumer groups
```

### Flink + Kafka Permissions

**Flink job setup:**

```text
Service Account: flink-job

RBAC Bindings:
1. Flink Cluster:
   - FlinkDeveloper (to execute statements)

2. Kafka Cluster:
   - DeveloperRead on source topics
   - DeveloperWrite on sink topics
   - DeveloperRead on consumer groups
```

## Links

- [Confluent Cloud RBAC Documentation](https://docs.confluent.io/cloud/current/access-management/access-control/cloud-rbac.html)
- [Manage Role Bindings by Component](https://docs.confluent.io/cloud/current/security/access-control/rbac/manage-role-bindings.html)
- [Service Accounts](https://docs.confluent.io/cloud/current/access-management/service-accounts.html)
- [API Keys](https://docs.confluent.io/cloud/current/access-management/authenticate/api-keys/api-keys.html)
- [Confluent Cloud API - Role Bindings](https://docs.confluent.io/cloud/current/api.html#tag/Role-Bindings-(iamv2))
