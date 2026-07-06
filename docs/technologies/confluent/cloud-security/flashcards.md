---
slug: /technologies/confluent/cloud-security/flashcards
title: Confluent Cloud Security Flashcards
description: Active recall cards for Confluent Cloud security concepts covering authentication, authorization, encryption, auditing, and compliance
created: 2026-07-05
updated: 2026-07-05
total_cards: 71
difficulty_distribution:
  beginner: 28
  intermediate: 28
  advanced: 15
source_notes:
  - technologies/confluent/cloud-security/readme.md
  - technologies/confluent/cloud-security/21-authenticating-users-and-applications.md
  - technologies/confluent/cloud-security/22-authorizing-using-rbac-and-acls.md
  - technologies/confluent/cloud-security/23-understanding-encryption.md
  - technologies/confluent/cloud-security/24-auditing-and-monitoring.md
  - technologies/confluent/cloud-security/25-maintaining-compliance-and-privacy.md
  - technologies/confluent/cloud-security/ip-filtering.md
---

## Authentication - User Identities

^learnkit-823174893
T | User Authentication Methods in Confluent Cloud |
Q | What are the two primary methods for authenticating users in Confluent Cloud? |
A | Email-based authentication and Single Sign-On (SSO) using SAML identity providers. |
I | SSO provides centralized policy management for MFA, password enforcement, and user termination

^learnkit-637505824
T | SSO Identity Provider Requirement |
Q | What protocol must your identity provider support to use SSO with Confluent Cloud? |
A | Security Assertion Markup Language (SAML). |
I | Common SAML providers include Okta, Active Directory, and Google accounts

^learnkit-523254700
T | SSO Benefits |
Q | Why is SSO preferred over email-based authentication for organizations? |
A | SSO provides a single entry point for all applications, enables central policy management for MFA and passwords, and allows easy termination of user access across all systems. |
I | Scales better than managing individual credentials per application

## Authentication - Workload Identities

^learnkit-316975109
T | Application Authentication Options |
Q | What are the two methods for authenticating applications or services in Confluent Cloud? |
A | API keys (with key and secret) and OAuth/OIDC. |
I | API keys are simpler; OAuth provides better scalability and centralized management

^learnkit-240519847
T | API Key Types |
Q | What are the two types of API keys in Confluent Cloud? |
A | Resource-specific API keys (granular access to individual resources) and Cloud API keys (organization-wide management access). |
I | Resource-specific keys follow principle of least privilege for production use

^learnkit-250970000
T | Service Account vs User Account API Keys |
Q | Why should production applications use service account API keys instead of user account API keys? |
A | If a user leaves, changes departments, or their account is deleted, all their API keys are deleted and applications stop working. Service accounts persist independently of user lifecycle. |
I | **Why:** Continuity and security. **How to apply:** Create service accounts for all production apps

^learnkit-447908797
T | API Key Rotation Steps |
Q | What is the recommended order for rotating API keys? |
A | 1. Create new API key, 2. Update application to use new key, 3. Verify connection via audit logs, 4. Delete old API key. |
I | **Why:** Prevents service disruption. **How to apply:** Never delete old key before verifying new key works

^learnkit-666709607
T | OAuth Identity Pools Purpose |
Q | What problem do OAuth identity pools solve? |
A | Map groups of identities to RBAC or ACL policies instead of managing permissions per individual application. |
I | **Why:** Scales to thousands of identities without hitting API key limits. **How to apply:** Group clients with similar access needs

^learnkit-892908453
T | OAuth Advantages Over API Keys |
Q | What are the three main advantages of using OAuth for authentication? |
A | 1. Cloud-native authentication solution, 2. Centralized identity management in one place, 3. Scales to thousands of identities without API key limits. |
I | OAuth is industry standard; most companies already use OAuth for other cloud resources

^learnkit-508825025
T | OAuth Client Version Requirements |
Q | What are the minimum client versions required to use OAuth with Confluent Cloud? |
A | Apache Kafka 3.2.1, Confluent Platform 7.2.1/7.1.3 or later, and librdkafka 1.9.2 or later. |
I | **How to apply:** Audit legacy clients before enabling OAuth; they may need upgrades or continue using API keys

## Global API Keys

^learnkit-288454471
T | Global API Key Definition |
Q | What is a global API key in Confluent Cloud? |
A | A single API key that can authenticate across multiple Confluent Cloud services (Cloud Management API, Kafka clusters, Schema Registry, Tableflow, Flink, ksqlDB). |
I | Simplifies multi-service authentication but requires proper RBAC/ACL permissions to authorize operations

^learnkit-209199713
T | Global API Key Limitation |
Q | Does a global API key grant permissions by itself? |
A | No. Authorization depends entirely on the RBAC roles and ACLs assigned to the principal (user or service account) that owns the key. |
I | **Why:** Separation of authentication (the key) from authorization (RBAC/ACLs). **How to apply:** Always assign proper permissions before using global keys

^learnkit-690692285
T | Global API Key Count Limit |
Q | How many global API keys can each user account or service account create? |
A | Two global API keys maximum. |
I | **How to apply:** Use resource-scoped keys when accessing only one resource type

^learnkit-864912543
T | When to Use Global API Keys |
Q | When should you use global API keys instead of resource-specific keys? |
A | When applications access multiple resource types (e.g., Kafka + Flink), using Terraform across resources, implementing multi-cluster failover, or running organization-wide admin workflows. |
I | **Why:** Reduces credential juggling. **How to apply:** For single-resource access, still prefer resource-specific keys

## Authorization - ACLs

^learnkit-754071630
T | ACL Definition |
Q | What are ACLs in Confluent Cloud? |
A | Access Control Lists - tables that store identities and their permissions (resources they can access and operations they can perform). |
I | Permissions are tied to individual identities, not roles

^learnkit-247299663
T | ACL Scalability Limitation |
Q | Why don't ACLs scale well for large organizations? |
A | Permissions are linked to individual identities. If an identity changes teams or scope, each permission must be addressed individually. Missed changes create security risks. |
I | **Why:** Labor-intensive verification for compliance. **How to apply:** Use ACLs only for small identity counts; prefer RBAC for large orgs

^learnkit-514705901
T | ACL Resource Scope |
Q | What types of resources do ACLs apply to in Confluent Cloud? |
A | Kafka resources only (topics, consumer groups, transactional IDs). ACLs don't extend to organizations or environments. |
I | **How to apply:** Use RBAC for environment/org-level access control

^learnkit-551179604
T | ACL Propagation Delay |
Q | Why might there be a delay before ACL changes take effect? |
A | ACLs are stored in Kafka controllers and propagated to brokers, which takes time even after the command returns. |
I | **How to apply:** Test ACL changes before assuming they're active

## Authorization - RBAC

^learnkit-182096268
T | RBAC vs ACL Core Difference |
Q | How does RBAC differ from ACLs in managing permissions? |
A | RBAC assigns identities to predefined roles; changing the role scope updates access for all identities in that role. ACLs require changing permissions for each individual identity. |
I | **Why:** RBAC scales better and simplifies compliance verification. **How to apply:** Prefer RBAC for organizations with hundreds/thousands of identities

^learnkit-224155989
T | RBAC Benefits |
Q | What are the main benefits of RBAC over ACLs? |
A | Integrates with centralized identity management, scales easily for large organizations, and simplifies compliance verification. |
I | **Why:** Safer and simpler to verify roles than individual ACL identities. **How to apply:** Use RBAC as the default authorization method

^learnkit-110358362
T | OrganizationAdmin Role Requirement |
Q | Which RBAC role is required to create service accounts? |
A | OrganizationAdmin role. |
I | Other admin roles (EnvironmentAdmin, CloudClusterAdmin, ResourceOwner) can grant/revoke permissions on controlled resources but not create new service accounts

^learnkit-651729172
T | RBAC Cluster Type Support |
Q | Which cluster types support RBAC permissions for granular Kafka resources (topics, consumer groups, transactional IDs)? |
A | Standard, Enterprise, Dedicated, and Freight clusters only. |
I | **How to apply:** Basic clusters don't support granular RBAC; use ACLs or upgrade cluster type

^learnkit-691870111
T | DeveloperRead Minimum Requirement |
Q | What is the minimum RBAC role needed to inspect topics and view messages in Confluent Cloud Console? |
A | DeveloperRead role. |
I | **How to apply:** Start with least privilege; grant DeveloperRead for read-only access to topic data

^learnkit-697663224
T | Default SSO Group Mapping |
Q | When SSO is enabled, what default RBAC roles are all SSO users automatically assigned? |
A | FlinkDeveloper and DataDiscovery roles via the `all-sso-users` group mapping. |
I | **Why:** Provides default user permissions. **How to apply:** Customize these defaults based on organizational needs

## Group Mapping

^learnkit-756102395
T | Group Mapping Definition |
Q | What is group mapping in Confluent Cloud? |
A | Rules that map user groups in your SSO identity provider to Confluent Cloud RBAC roles, automatically assigning roles when SSO users sign in. |
I | Automates role assignment based on external group membership

^learnkit-408136219
T | Group Mapping Types |
Q | What are the two types of group mappings available in Confluent Cloud? |
A | Basic (simple mappings between user groups and roles) and Advanced (using CEL expressions for increased flexibility). |
I | **How to apply:** Start with basic for simple use cases; use advanced when complex filtering is needed

^learnkit-579057838
T | Group Mapping User API Key Limitation |
Q | Do user API keys inherit group mapping permissions? |
A | No. Group mapping permissions are only granted after SSO users sign in via SSO. User API keys only have manually assigned permissions. |
I | **Why:** API keys are static credentials outside the SSO flow. **How to apply:** Manually assign permissions to user API keys separately

^learnkit-523944903
T | Group Mapping Best Practice |
Q | What is the recommended approach for creating a default group mapping? |
A | Create a minimal permission set with either a broad filter (advanced: `true`) or broad user group value, so new users can start immediately. |
I | **Why:** Prevents new users from being locked out. **How to apply:** Combine with least-privilege specific group mappings

## ACL and RBAC Precedence

^learnkit-368907225
T | ACL DENY Rule Precedence |
Q | What happens if an ACL DENY rule is applied to an identity? |
A | Access is denied regardless of any ACL ALLOW rules or RBAC role bindings. |
I | **Why:** DENY rules are evaluated first and override all ALLOW rules. **How to apply:** Use DENY sparingly; it overrides everything

^learnkit-826487191
T | ACL ALLOW and RBAC Interaction |
Q | If there are no ACL DENY rules, when is permission granted? |
A | If you have RBAC permission only, ACL permission only, or both RBAC and ACL permission. |
I | **Why:** ACL ALLOW and RBAC roles are additive. **How to apply:** Either mechanism can grant access independently

## ACL Concepts - Platform

^learnkit-851461661
T | Authorizer Definition |
Q | What is an authorizer in Apache Kafka? |
A | A server plugin that controls whether to authorize operations based on the principal and the resource being accessed. |
I | For KRaft clusters, use StandardAuthorizer (`org.apache.kafka.metadata.authorizer.StandardAuthorizer`)

^learnkit-621926382
T | KRaft Principal Forwarding |
Q | How are admin requests (CreateTopics, DeleteTopics) authorized in KRaft clusters? |
A | Broker receives request, forwards it to controller via Envelope request with client principal. Controller authorizes both the Envelope (using broker principal) and the underlying request (using forwarded client principal). |
I | **Why:** Separates broker-to-controller auth from client-to-broker auth. **How to apply:** Ensure both broker and client principals have proper permissions

^learnkit-195414074
T | Principal Format TLS |
Q | What is the principal name format when a client connects using TLS? |
A | TLS certificate subject name (e.g., `CN=quickstart.confluent.io,OU=TEST,O=Sales,L=PaloAlto,ST=Ca,C=US`). No spaces after commas. |
I | **How to apply:** Extract exact subject name from certificates when creating ACLs

^learnkit-372707144
T | Principal Format Kerberos |
Q | What is the principal name format when using SASL/GSSAPI (Kerberos)? |
A | Kerberos principal format (e.g., `kafka-client@hostname.com`). |
I | **How to apply:** Use Kerberos principal names when creating ACLs for Kerberos-authenticated clients

^learnkit-389435548
T | Wildcard Principal |
Q | What does the wildcard principal `User:*` do in an ACL? |
A | Grants access to all users for the specified operation and resource. |
I | **Why:** Useful for public topics but violates least privilege. **How to apply:** Use sparingly and document justification

^learnkit-375199818
T | ACL Operations Categories |
Q | What are the main ACL operation types for Kafka resources? |
A | READ (consume messages), WRITE (produce messages), CREATE (create resources), DELETE (remove resources), DESCRIBE (view metadata), ALTER (modify configs), DESCRIBE_CONFIGS, ALTER_CONFIGS. |
I | Each operation maps to specific Kafka API calls

^learnkit-321584325
T | Transactional ID Purpose |
Q | What is the purpose of a transactional ID in Kafka? |
A | Identifies a single producer instance across restarts, ensuring only one producer is active per transactional.id, enabling exactly-once semantics (EOS). |
I | **Why:** Prevents zombie producers. **How to apply:** Each transactional producer needs unique transactional.id and ACL permission

^learnkit-987528256
T | ACL Permission Types |
Q | What are the two ACL permission types? |
A | ALLOW (grants permission) and DENY (explicitly blocks permission). |
I | DENY takes precedence over ALLOW

^learnkit-272363095
T | ACL Pattern Types |
Q | What are the two ACL pattern types for matching resources? |
A | LITERAL (exact match for resource names) and PREFIXED (matches resources starting with specified prefix). |
I | **How to apply:** Use PREFIXED for topic naming conventions like `orders.*`

^learnkit-531881114
T | Super Users Default Behavior |
Q | By default, who can access resources with no associated ACLs? |
A | Only super users. |
I | **How to apply:** Override with `allow.everyone.if.no.acl.found=true` in server.properties if needed (not recommended)

## Encryption - Data at Rest and in Transit

^learnkit-362365495
T | Data in Motion vs Data at Rest |
Q | What are the two main areas to protect from attackers in Confluent Cloud? |
A | Data in motion (network traffic to/from clients) and data at rest (data stored in Kafka). |
I | Confluent Cloud encrypts both by default: TLS 1.2 for motion, encryption for rest

^learnkit-260508468
T | Confluent Cloud Encryption Defaults |
Q | What encryption does Confluent Cloud provide by default? |
A | Data at rest encrypted by default and TLS 1.2 encryption for data in motion. |
I | **How to apply:** BYOK and private networking are optional enhancements beyond defaults

## BYOK (Bring Your Own Key)

^learnkit-173079487
T | BYOK Main Benefits |
Q | What are the three main concerns BYOK addresses? |
A | 1. Encryption at storage layer with revocable key access, 2. Secures data if drives are subpoenaed, 3. Meets security compliance requirements for banking, healthcare, and government. |
I | **Why:** Renders encrypted data unreadable without key access. **How to apply:** Required for regulated industries

^learnkit-589372239
T | BYOK Access Control Limitation |
Q | When does BYOK prevent Confluent and cloud provider access to data? |
A | Only after key authorization is revoked. Before revocation, SREs and engineering teams can still access data. |
I | **Why:** BYOK is not end-to-end encryption. **How to apply:** Use end-to-end encryption if you need to prevent all provider access

^learnkit-688120518
T | BYOK Customer Responsibility |
Q | What is the customer's responsibility when using BYOK? |
A | Ensuring Confluent has access to the necessary keys. If access is lost, I/O fails and the cluster won't function. |
I | **Why:** Key management shifts from fully managed to customer-managed. **How to apply:** Monitor key access permissions continuously

^learnkit-295884195
T | BYOK Key Loss Impact |
Q | What happens if you lose access to your self-managed key? |
A | The data is essentially gone. Neither Confluent nor the cloud provider can help retrieve the self-managed key. |
I | **Why:** Encryption is only reversible with the key. **How to apply:** Implement robust key backup and disaster recovery procedures

^learnkit-324050490
T | BYOK Cluster Requirements |
Q | Which cluster types support BYOK and when must it be configured? |
A | Only Dedicated clusters. BYOK must be implemented when the cluster is created; cannot be added to existing clusters. |
I | **How to apply:** If you have an existing cluster, create new cluster with BYOK and use Replicator to migrate data

^learnkit-104038902
T | BYOK Key Rotation Support |
Q | Does Confluent support manual rotation of BYOK keys? |
A | No. However, automatic key rotation policies set in your KMS are fully supported. |
I | **How to apply:** Configure automatic rotation in AWS KMS, Azure Key Vault, or Google Cloud KMS

^learnkit-337332684
T | BYOK Encryption Scope |
Q | What data does BYOK encrypt in a cluster? |
A | All data associated with the cluster including tiered storage, ksqlDB, and all other cluster components. |
I | Comprehensive cluster-wide encryption

^learnkit-983600640
T | BYOK Performance Impact |
Q | What is the performance impact of BYOK-enabled clusters? |
A | No significant reduction in performance. |
I | Small cost: ~3 cents per 10,000 KMS API calls on AWS/GCP invoice

^learnkit-369271905
T | BYOK Key Type Requirement |
Q | What type of encryption keys must be provided for BYOK? |
A | Symmetric keys. Asymmetric keys won't work. |
I | **How to apply:** Verify key type when configuring KMS

## Client-Side Encryption

^learnkit-163884910
T | CSFLE vs CSPE Encryption Scope |
Q | What is the difference in encryption scope between CSFLE and CSPE? |
A | CSFLE encrypts specific sensitive fields. CSPE encrypts the entire message payload. |
I | **How to apply:** Use CSFLE for selective field encryption; CSPE for full payload encryption

^learnkit-939212569
T | CSFLE Rule Definition |
Q | How does CSFLE identify which fields to encrypt? |
A | By defining fields via tags in the schema. |
I | Uses ENCRYPT rule type (Domain Rule) applied to tagged fields

^learnkit-690603053
T | CSPE Use Cases |
Q | When should you use CSPE instead of CSFLE? |
A | When schema is unclear/highly dynamic, schema is extremely large (thousands of fields), CISO mandates full payload encryption, or need to move to production quickly and evolve to CSFLE later. |
I | **Why:** CSPE doesn't require schema tagging. **How to apply:** Use as stepping stone to CSFLE for complex schemas

^learnkit-128958744
T | CSFLE Access Granularity |
Q | What is the access granularity difference between CSFLE and CSPE? |
A | CSFLE allows separation of encrypted and non-encrypted fields (consumers can read non-encrypted fields). CSPE provides all-or-nothing access (consumers access all data or none). |
I | **Why:** CSFLE enables fine-grained access control at field level. **How to apply:** Use CSFLE when different consumers need different field access

## Audit Logs

^learnkit-103350253
T | Audit Log Purpose |
Q | What do Confluent Cloud audit logs track? |
A | Permission checks (ACL/RBAC policy attempts), and operations to create/delete/modify resources (API keys, clusters, user accounts, service accounts, SSO connections, connectors). |
I | Stream of authorization attempts with user, sequence, and timestamp

^learnkit-992040530
T | Audit Log Benefits |
Q | What are the four main advantages of using audit logs? |
A | 1. Gain insight into events (e.g., ACL verification), 2. Improved security (identify anomalies/unauthorized ops), 3. Understand impact (which services/users affected), 4. Evidence of compliance for regulated industries. |
I | **Why:** Forensic record for security breaches and compliance proof. **How to apply:** Monitor logs continuously for anomalies

^learnkit-713934440
T | Audit Log Storage |
Q | Where are Confluent Cloud audit logs stored and for how long? |
A | In a Kafka topic on an independent cluster, retained for seven days. |
I | **How to apply:** Replicate to another cluster or external system for longer retention

^learnkit-317849869
T | Audit Log Modification |
Q | Can users modify, delete, or produce messages directly to the audit log topic? |
A | No. Users can only consume messages using an API key specific to the audit log cluster. |
I | **Why:** Prevents tampering with audit trail. **How to apply:** Request dedicated audit log API key for read-only access

^learnkit-932454053
T | Audit Log Specification |
Q | What specification do Confluent Cloud audit logs use for standardization? |
A | CloudEvents specification - a vendor-neutral format for event data. |
I | Industry standard rapidly becoming universal for event data

^learnkit-310956568
T | Audit Log Types |
Q | What are the three types of audit logs? |
A | 1. Authentication events (client connects to cluster), 2. Authorization events (user attempts action), 3. Organization events (Confluent Cloud service performs operation). |
I | Each includes unique ID, event source, event context, and event data

^learnkit-742505901
T | Audit Log Content Limitation |
Q | Do audit log records contain the contents of the event? |
A | No. Only metadata about the event context and event data (what happened, who, when, where), not the actual event contents. |
I | **Why:** Keeps audit logs lightweight and focused on authorization tracking. **How to apply:** Don't rely on audit logs for data recovery

^learnkit-252987547
T | Audit Log Retention Strategy |
Q | What is the recommended approach for retaining audit logs beyond seven days? |
A | Use a self-managed sink connector or replicate audit logs to a managed Kafka cluster, then integrate with SIEM software for log management, alerts, filters, and custom retention policies. |
I | **Why:** SIEM integration enables automated security monitoring. **How to apply:** Configure replication during cluster setup

## Compliance and Privacy

^learnkit-155058372
T | SOC Compliance Types |
Q | What SOC compliance reports does Confluent Cloud provide? |
A | SOC 1 Type 2, SOC 2 Type 2, and SOC 3 reports. |
I | Service Organization Control compliance for service organizations

^learnkit-168295960
T | PCI DSS Definition |
Q | What does PCI DSS compliance cover? |
A | Payment Card Industry Data Security Standards concerning processing, storing, and transmitting payment card information. |
I | **How to apply:** Required for any organization handling credit card data

^learnkit-653523821
T | ISO 27001 Framework |
Q | What is ISO 27001 compliance? |
A | International Organization for Standardization 27001 framework for information security management, including annual surveillance audits for organizations outside the United States. |
I | Global standard for information security

^learnkit-299024269
T | GDPR and CCPA |
Q | What are GDPR and CCPA? |
A | GDPR is the General Data Protection Regulation (EU). CCPA is the California Consumer Privacy Act. |
I | **How to apply:** Both regulate personal data handling; GDPR is EU-wide, CCPA is California-specific

^learnkit-935260605
T | HIPAA Compliance |
Q | What is HIPAA? |
A | The Health Insurance Portability and Accountability Act - regulates healthcare data privacy and security. |
I | **How to apply:** Required for healthcare organizations handling patient data

## IP Filtering

^learnkit-295323682
T | IP Filtering Definition |
Q | What is IP Filtering in Confluent Cloud? |
A | An authorization feature that allows access to resources only from trusted source networks defined by IP groups (lists of CIDR blocks). |
I | **Why:** Enhanced security by restricting access to trusted networks. **How to apply:** All requests from non-included IPs are denied

^learnkit-491492359
T | IP Group vs IP Filter |
Q | What is the difference between an IP group and an IP filter? |
A | IP group is the list of CIDR blocks defining trusted networks. IP filter is the set of IP groups associated with a resource scope. |
I | **How to apply:** Create IP groups first, then create IP filters that use those groups

^learnkit-394415041
T | IP Filter Resource Scopes |
Q | What are the two resource scopes available for IP filters? |
A | Organization (covers all resources in Confluent Cloud organization) and Environment (covers all resources in specific environment). |
I | **How to apply:** Use Organization scope for company-wide policies; Environment scope for team-specific policies

^learnkit-795683454
T | IP Filter Operation Groups |
Q | What are the three operation groups available for IP filters? |
A | Resource management (all management operations), Schema management (schema operations), and Flink (all Apache Flink data operations). |
I | **How to apply:** Assign operation groups based on which types of operations need IP restrictions

^learnkit-395567809
T | IP Filtering Limitations |
Q | What operations are NOT currently supported by IP filtering? |
A | Protecting access to data in Kafka topics and ksqlDB databases. Also not configurable: Catalog management, Kafka Management, Logging, Metrics, Kafka data. |
I | **Why:** IP filtering focuses on management operations, not data plane. **How to apply:** Use private networking for Kafka data protection

^learnkit-482806377
T | IP Filter Audit Verification |
Q | How can you verify IP filters are working as expected? |
A | 1. Access resources from allowed IPs (should succeed), 2. Access from non-allowed IPs (should fail), 3. Check audit logs to confirm denied attempts are recorded. |
I | **Why:** Validates both allow and deny rules. **How to apply:** Test from both inside and outside trusted networks
