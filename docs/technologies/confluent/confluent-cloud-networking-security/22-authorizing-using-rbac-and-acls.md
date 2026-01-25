# Authorizing Using RBAC and ACLs

Your identities will need access to Confluent Cloud, whether it is to create applications or send and receive data. Allowing them to access your cluster as easily as possible is important to how well your business runs. At the same time, your access model needs to be structured in a way where you can easily add, remove, change, and verify permissions.

Authorization is where you will make sure that your authenticated users have the access they should have, and no more or no less. It is not unheard of to have to authorize hundreds, thousands, or even tens of thousands of identities. If you’ve ever used the open source implementation of Kafka, you may be familiar with the burdensome process of having to create an LDAP store to configure your group, role, and user hierarchies, then applying ACL based on the group and role hierarchies, and finally implementing a custom authorizer that pairs the groups and users in LDAP with those in Kafka.

None of that extra effort is necessary with Confluent Cloud. Instead, there are two methods for authorizing your identities: access control lists (ACLs), and role-based access control (RBAC).

## ACLs

ACLs are tables that store identities and what they can do or see (the resources they can access and permissions they have) within Confluent Cloud. The important thing to remember is that permissions are tied to each identity and linked to the access they have been given for each resource. If an identity changes teams or scope, you will have to make sure to address things at an individual level. If at any point even one of these changes is missed, or configured incorrectly, you now have identities that have access to more than what they should.

This problem is only made worse as the number of identities in your organization increases. Verifying permissions for compliance with laws and regulations can become quite a labor-intensive and time-consuming process, not to mention a potential security risk.

**ACLs are specific to Kafka resources and don’t extend to other Confluent Cloud concepts, such as environments and organizations.** Managing ACLs for a small number of identities likely isn’t a big deal. However, if you are working with a large organization with hundreds or thousands of identities, using **ACLs doesn’t scale.** You’re left with the second option for organizing identities, role-based access control.

Note that because ACLs are stored in the Kafka controllers and propagated to the brokers, there may be a delay before the change takes effect, even after the command returns.

## RBACs

RBACs allow you to configure predefined roles within your organization. Identities are assigned to a role and gain access to an organization, environment, cluster, or specific Kafka resources like topics, consumer groups, and transactional IDs based on that role.

For example, imagine a user, Milton, who is part of a group of users that require access to read data from your Purchases topic. Using ACLs, Milton’s identity is granted permission to access the read data. If tomorrow Milton also requires access to the read data from a topic called Returns, that permission must be added to Milton’s user identity (and the identity of everyone else who also now needs access).

Using RBACs, Milton is assigned to the DeveloperRead role. Each identity assigned to the DeveloperRead role has access to read data from the Purchase topic. Adding access to the Returns topic can be achieved by changing the DeveloperRead role scope to now include access to the Returns topic. Every identity within that role gains the correct access.

As opposed to ACLs, **RBAC integrates with a centralized identity management system and allows much simpler scaling for large organizations.** From a compliance perspective, **it’s safer and simpler to verify your RBAC roles to prove compliance** than to attempt to confirm each individual ACL identity.

## RBAC roles

Confluent Cloud has the following roles preconfigured. You may want to [reference the documentation](https://docs.confluent.io/cloud/current/access-management/access-control/cloud-rbac.html#ccloud-rbac-roles) for more in-depth details on each of these roles.

| Predefined RBAC role                                                                                                                        | Manage API keys resource-scoped to                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [OrganizationAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#organizationadmin-role) | Clusters (Kafka, ksqlDB, and Schema Registry) and Flink in the organization and resource management APIs.                           |
| [EnvironmentAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#environmentadmin-role)   | Clusters (Kafka, Schema Registry and ksqlDB) and Flink regions owned by the principal.                                              |
| [CloudClusterAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#cloudclusteradmin-role) | Kafka clusters owned by the principal.                                                                                              |
| [Operator](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#operator-role)                   | Clusters (Kafka, Schema Registry, Flink, and ksqlDB) owned by the principal.                                                        |
| NetworkAdmin                                                                                                                                |                                                                                                                                     |
| MetricsViewer                                                                                                                               |                                                                                                                                     |
| [ResourceOwner](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#resourceowner-role)         | Clusters (Kafka, ksqlDB, and Schema Registry) owned by the principal.                                                               |
| [DeveloperManage](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#developermanage-role)     | Clusters (Kafka, ksqlDB, and Schema Registry) owned by the principal.                                                               |
| [DeveloperRead](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#developerread-role)         | Clusters (Kafka, ksqlDB, and Schema Registry) owned by the principal.                                                               |
| [DeveloperWrite](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#developerwrite-role)       | Clusters (Kafka, ksqlDB, and Schema Registry) owned by the principal.                                                               |
| [DataDiscovery](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#datadiscovery-role)         | Schema Registry clusters owned by the principal.                                                                                    |
| [KsqlAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#ksqladmin-role)                 | ksqlDB clusters that the principal has access to.                                                                                   |
| [ResourceKeyAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#resourcekeyadmin-role)   | Clusters (Kafka, ksqlDB, and Schema Registry) and Flink regions the principal has access to, but cannot create API keys for itself. |

#### Administration roles

- [AccountAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#accountadmin-role)
- [BillingAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#billingadmin-role)
- [CloudClusterAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#cloudclusteradmin-role)
- [ConnectManager](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#connectmanager-role)
- [DataSteward](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#datasteward-role)
- [EnvironmentAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#environmentadmin-role)
- [FlinkAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#flinkadmin-role)
- [KsqlAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#ksqladmin-role)
- [NetworkAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#networkadmin-role)
- [OrganizationAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#organizationadmin-role)
- [ResourceKeyAdmin](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#resourcekeyadmin-role)
- [ResourceOwner](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#resourceowner-role)

#### Application development roles

- [DeveloperManage](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#developermanage-role)
- [DeveloperRead](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#developerread-role)
- [DeveloperWrite](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#developerwrite-role)
- [FlinkDeveloper](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#flinkdeveloper-role)
- [MetricsViewer](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#metricsviewer-role)
- [Operator](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#operator-role)
- [ResourceOwner](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#resourceowner-role)

[Predefined RBAC roles in Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html)

## RBAC Considerations

Also, there are a couple of things to keep in mind as you use RBAC in Confluent Cloud:

- **RBAC permissions for operations on granular Kafka resources (topics, consumer groups, and transactional IDs) are supported only on Standard, Enterprise, Dedicated, and Freight clusters.**
- To create service accounts, you must be granted the OrganizationAdmin role. All the other cluster administration roles (EnvironmentAdmin, CloudClusterAdmin, and ResourceOwner) can grant or revoke permissions for existing service accounts on the resources that they control.
- Role bindings are limited like every other resource on Confluent Cloud. You will want to check the official documentation to see the current guidance.
- You must use version 2.8.1 or later of the Confluent CLI to manage RBAC roles.
- When SSO is enabled for an organization, a default [group mapping](https://docs.confluent.io/cloud/current/_glossary.html#term-group-mapping) (`all-sso-users`) is applied to all SSO user accounts and binds them to two predefined RBAC roles ([FlinkDeveloper](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#flinkdeveloper-role) and [DataDiscovery](https://docs.confluent.io/cloud/current/security/access-control/rbac/predefined-rbac-roles.html#datadiscovery-role)) that provide default user permissions to access Confluent Cloud resources in an SSO-enabled organization. These default user permissions can be customized by administrators. For more information, see [Default user permissions](https://docs.confluent.io/cloud/current/security/authenticate/user-identities/user-accounts/manage-sso-user-accounts.html#default-user-permissions).
- To use the Confluent Cloud Console or Confluent CLI, a user must be assigned at least one role.
- To allow a principal to inspect topics and view messages using the Confluent Cloud Console, you must minimally grant that account the DeveloperRead role.
- If a user or service account is deleted, all API keys and role bindings associated with that user or service account are also deleted.

**Considerations**

- If you use OAuth for authentication you will be creating identity pools for your principals. There are two parts to every identity pool: **who can use the pool, and what the pool can access.** The “who” is a set of conditions that the identity needs to satisfy in order to use the pool. The “what” is defined by ACLs and RBAC roles.
- You can use a mix of ACLs and RBACs. This may be helpful if you need to provide a small set of identities with access to a resource in your Confluent Cloud cluster. However, as an investment in the future, we recommend going with RBACs over ACLs.

## ACLs and RBAC Order of Precedence

As both ACLs and RBAC provide authorization, there is an order of precedence in granting access:

1. ﻿﻿﻿ACL DENY rules are applied first. If an ACL DENY is applied, then access is denied regardless of any ACL ALLOW rules and RBAC role bindings.
2. ﻿﻿﻿ACL ALLOW and RBAC roles are applied. All RBAC roles are ALLOW.

When there are no ACL DENY rules that apply:

- ﻿﻿If you only have an RBAC permission, but not an ACL, permission is granted.
- ﻿﻿If you have only ACL permission, but not RBAC, permission is granted.
- ﻿﻿If you have both an RBAC and ACL permission, permission is granted.

## Use Access Control Lists (ACLs) for Authorization in Confluent Platform

Apache Kafka® includes a pluggable authorization framework (Authorizer), configured using the `authorizer.class.name` configuration property in the Confluent Server broker configuration file. The StandardAuthorizer is available for KRaft-based clusters. For KRaft-based clusters, ACLs are stored in the KRaft-based Kafka cluster metadata. Confluent Server brokers use the authorizer to determine whether or not to authorize an operation based on the principal and the resource being accessed.

Setting ACLs is important – if a resource does not have associated ACLs, only super users can access the resource.

### ACL concepts

#### Authorizer

An authorizer is a server plugin used by Apache Kafka® to authorize operations. More specifically, an authorizer controls whether or not to authorize an operation based on the principal and the resource being accessed. For KRaft-based Kafka clusters, the authorizer is StandardAuthorizer (`org.apache.kafka.metadata.authorizer.StandardAuthorizer`).

To enable and use the StandardAuthorizer on a KRaft-based Kafka cluster, set the full class name for your configuration on all nodes (brokers, controllers, or combined brokers and controllers) in their configuration file to:

`authorizer.class.name=org.apache.kafka.metadata.authorizer.StandardAuthorizer`

Custom authorizers should be tested and validated to ensure compatibility.

#### KRaft Principal Forwarding

In KRaft clusters, administrator requests, such as `CreateTopics` and `DeleteTopics`, are sent to the broker listeners by the client. The broker then forwards the request to the active controller through the first listener configured in `controller.listener.names`. Authorization of these requests is done on the controller node. This is achieved by way of an `Envelope` request which packages both the underlying request from the client as well as the client principal. When the controller receives the forwarded Envelope request from the broker, it first authorizes the `Envelope` request using the authenticated broker principal. Then it authorizes the underlying request using the forwarded principal.

### Principal

A principal is an entity that can be authenticated by the authorizer. Clients of a Confluent Server broker identify themselves as a particular principal using various security protocols. The way a principal is identified depends upon which security protocol it uses to connect to the Confluent Server broker (for example: [mTLS](https://docs.confluent.io/platform/current/kafka/configure-mds/mutual-tls-auth-rbac.html#mutual-tls-auth-rbac), [SASL/GSSAPI](https://docs.confluent.io/platform/current/security/authentication/sasl/gssapi/overview.html#kafka-sasl-auth-gssapi), or [SASL/PLAIN](https://docs.confluent.io/platform/current/security/authentication/sasl/plain/overview.html#kafka-sasl-auth-plain)). Authentication depends on the security protocol in place (such as SASL or TLS) to recognize a principal within a Confluent Server broker.

The following examples show the principal name format based on the security protocol being used:

- When a client connects to a Confluent Server broker using the TLS security protocol, the principal name will be in the form of the TLS certificate subject name: `CN=quickstart.confluent.io,OU=TEST,O=Sales,L=PaloAlto,ST=Ca,C=US`. Note that there are no spaces after the comma between subject parts.

- When a client connects to a Confluent Server broker using the SASL security protocol with GSSAPI (Kerberos) mechanism, the principal will be in the Kerberos principal format: `kafka-client@hostname.com`. For more detail, refer to [Kerberos Principal Names](https://docs.oracle.com/cd/E19253-01/816-4557/refer-31/index.html).

- When a client connects to a Confluent Server broker using the SASL security protocol with a PLAIN or SCRAM mechanism, the principal is a simple text string, such as `alice`, `admin`, or `billing_etl_job_03`.

In the following ACL, the plain text principals (`User:alice`, `User:fred`) are identified as Kafka users who are allowed to run specific operations (read and write) from either of the specified hosts (host-1, host-2) on a specific resource (topic):

```bash
kafka-acls --bootstrap-server localhost:9092 \
  --command-config adminclient-configs.conf \
  --add \
  --allow-principal User:alice \
  --allow-principal User:fred \
  --allow-host host-1 \
  --allow-host host-2 \
  --operation read \
  --operation write \
  --topic finance-topic
```

To follow best practices, create one principal per application and give each principal only the ACLs required and no more. For example, if Alice is writing three programs that access different topics to automate a billing workflow, she could create three principals: `billing_etl_job_01`, `billing_etl_job_02`, and `billing_etl_job_03`. She would then grant each principal permissions on only the required topics and run each program with its specific principal.

Alternatively, she could take a middle-ground approach and create a single `billing_etl_jobs` principal with access to all topics that the billing programs require and run all three with that principal.

Alice should not run these programs as her own principal because she would presumably have broader permissions than the jobs actually need. Running with one principal per application also helps significantly with debugging and auditing because it’s clearer which application is performing each operation.

#### Wildcard principals

You can create ACLs for all principals by using a wildcard in the principal `User:*`. ACLs that include a wildcard for the user principal apply to all users. For example, the following command grants everyone access to the topic `testTopic`:

```bash
kafka-acls --bootstrap-server localhost:9092 \
  --command-config adminclient-configs.conf \
  --add \
  --allow-principal User:* \
  --operation All \
  --topic testTopic
```

### Operations

An operation is an action performed on a [resource](https://docs.confluent.io/platform/current/security/authorization/acls/overview.html#acl-resources). In addition to identifying the resources to which users or groups have access, ACLs identify the operations those users or groups are authorized to perform. For each resource, an operation is mapped to one or more Kafka APIs or request types for that resource. For example, a READ operation for the Topic resource is mapped to Fetch, OffsetCommit, and TxnOffsetCommit. Or, a WRITE operation for the Topic resource is mapped to Produce and AddPartitionsToTxn.

**Groups**

- Cluster resource operations
- Topic resource type operations
- Group resource type operations
- Token resource type operations
- Transactional ID resource type operations

**Operations**

- **READ**: Consume messages from topics
- **WRITE**: Produce messages to topics
- **CREATE**: Create new resources
- **DELETE**: Remove resources
- **DESCRIBE**: View metadata about resources
- **ALTER**: Modify resource configurations
- **DESCRIBE_CONFIGS**: View configuration settings
- **ALTER_CONFIGS**: Modify configuration settings

### Resources

- **Clusters**
- **Delegation Token (only for CP not for CC) -** Delegation tokens are shared secrets between Apache Kafka® brokers and clients. Authentication based on delegation tokens is a lightweight authentication mechanism that you can use to complement existing SASL/SSL methods.
- **Group -** Groups in the brokers. All protocol calls that work with groups, such as joining a group, must have corresponding privileges with the group in the subject. Group (group.id) includes Consumer Group, Stream Group (application.id), Connect Worker Group, or any other group that uses the Consumer Group protocol, like Schema Registry cluster.
- **Topics**
- **Transactional ID -** A transactional ID (transactional.id) identifies a single producer instance across application restarts and provides a way to ensure a single writer; this is necessary for exactly-once semantics (EOS). Only one producer can be active for each transactional.id. When a producer starts, it first checks whether or not there is a pending transaction by a producer with its own transactional.id. If there is, then it waits until the transaction has finished (abort or commit). This guarantees that the producer always starts from a consistent state.
	- [Kafka’s transactional.id – your first guess is probably wrong. It’s actually all about zombies](https://community.ibm.com/community/user/blogs/kim-clark1/2024/06/19/kafka-transactionalid)

### Permissions

ACLs specify whether to allow or deny access:

- **ALLOW**: Grants permission to perform the specified operation
- **DENY**: Explicitly blocks permission to perform the specified operation

### Use prefixed ACLs /  Pattern Types

- **LITERAL**: Exact match for resource names
- **PREFIXED**: Matches resources that start with the specified prefix

You can specify ACL resources using either a LITERAL value (default), a PREFIXED pattern type, or a wildcard `(*)`, which allows both.

If you identify the resource as LITERAL, Kafka will attempt to match the full resource name (for example, topic or consumer group) with the resource specified in the ACL. In some cases, you might want to use an asterisk `(*)` to specify all resources.

If you identify the resource as PREFIXED, Kafka attempts to match the prefix of the resource name with the resource specified in ACL.

### Host restrictions

- **Wildcard**: `/*` allows access from any host (default).
- **Specific IP addresses**: Restrict access to specific IP addresses.
- **IP ranges**: Restrict access to specific IP ranges.

### Super users

By default, if a resource has no associated ACLs, then only super users can access that resource. If you want to change that behavior, you can include the following in `server.properties`: `allow.everyone.if.no.acl.found=true`.

## ACL best practices

- **Consider RBAC first** - RBAC is preferred over ACLs because it provides predefined roles with standardized permissions, making access management simpler and more consistent across your organization. While ACLs offer fine-grained control at the individual resource level, RBAC provides better scalability and reduces administrative overhead through role-based templates. See [Role-based Access Control (RBAC) on Confluent Cloud](https://docs.confluent.io/cloud/current/security/access-control/rbac/overview.html#cloud-rbac) for more information.

- **Principle of least privilege** - Grant only the minimum permissions necessary for principals to perform their required operations. Avoid granting overly broad permissions.

- **Use specific resource names** - Prefer specific topic and consumer group names over wildcards when possible. This provides better security control and auditability.

- **Regular ACL audits** - Periodically review and clean up unused ACLs to maintain security hygiene.

- **Document ACL purposes** - Use descriptive comments or documentation to explain why specific ACLs exist and what they enable.

- **Test ACL changes** - Use the `--dry-run` option when creating ACLs to preview the impact before applying changes.

- **Monitor access patterns** - Use [audit logs](https://docs.confluent.io/cloud/current/monitoring/audit-logging/cloud-audit-log-concepts.html#cloud-audit-logs) to monitor how ACLs are being used and identify potential security issues. For information about ACL events in audit logs, see [Kafka Cluster Management and Operations Auditable Event Methods on Confluent Cloud](https://docs.confluent.io/cloud/current/monitoring/audit-logging/event-methods/kafka-management.html#kafka-management-auditable-events) for ACL management events and [Kafka Cluster Authentication and Authorization Auditable Event Methods on Confluent Cloud](https://docs.confluent.io/cloud/current/monitoring/audit-logging/event-methods/authorization-authentication-events.html#authentication-authorization-auditable-events) for ACL authorization events.

- **Coordinate with RBAC -** Since ACLs work alongside RBAC in Confluent Cloud, ensure your ACL strategy complements your RBAC role assignments. For detailed guidance on using ACLs with RBAC, including precedence rules and best practices, see [Use ACLs with RBAC on Confluent Cloud](https://docs.confluent.io/cloud/current/security/access-control/rbac/use-acls-with-rbac.html#using-acls-with-rbac).

- **Consider performance impact -** Each ACL adds overhead to authorization checks. Monitor ACL count and consider consolidating similar ACLs to maintain optimal performance. For ACL limits by cluster type, see [Kafka Cluster Types in Confluent Cloud](https://docs.confluent.io/cloud/current/clusters/cluster-types.html#cloud-cluster-types).

[Use access control lists (ACLs) for authorization in Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/security/authorization/acls/overview.html)

[Access Control Lists (ACLs) overview for Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/security/access-control/acls/overview.html)

[Manage access control lists (ACLs) for authorization in Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/security/authorization/acls/manage-acls.html)
