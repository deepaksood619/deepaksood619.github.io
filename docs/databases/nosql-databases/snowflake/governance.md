# Governance

## Data Security / governance

### Role-Based Access Control (RBAC)

- Snowflake employs RBAC to manage access control. Users are assigned roles, and roles are granted specific privileges on databases, schemas, tables, and other objects.
- Roles can be hierarchical, allowing for a more granular and organized approach to access control.

### Privileges

- Snowflake supports fine-grained privileges that can be granted at different levels, such as ACCOUNT, SCHEMA, TABLE, VIEW, and more.
- Common privileges include SELECT, INSERT, UPDATE, DELETE, USAGE, and more. Users and roles can be granted these privileges based on the requirements of the data governance policy.

### Data Masking

Snowflake provides data masking capabilities to control the visibility of sensitive data. Data masking rules can be applied to specific columns to ensure that only authorized users see the complete data, while others see masked or redacted values.

### Column-Level Security

Snowflake allows for column-level security, enabling administrators to control access to specific columns within a table. This is particularly useful when dealing with sensitive or confidential data within a dataset.

### Audit Logging

- Snowflake offers comprehensive audit logging capabilities. Audit logs capture information about user activity, including login attempts, executed queries, and changes to access control settings.
- Audit logs are essential for compliance, monitoring, and forensic analysis.

### Data Sharing with Secure Views

Snowflake supports secure data sharing, allowing organizations to share data with other Snowflake accounts securely. Data can be shared through secure views, which are views with defined access controls.

### Information Schema

Snowflake provides an INFORMATION_SCHEMA, a system-defined schema that contains metadata about the objects within the database. This schema can be queried to gather information about tables, views, columns, privileges, and more.

### External OAuth Authentication

Snowflake supports external OAuth authentication, allowing organizations to integrate with identity providers for centralized user authentication and management.

## Data Sharing / Data Marketplace

Snowflake supports data sharing between different accounts through its Data Sharing feature. This allows one Snowflake account to securely share data with another account. Key features associated with Snowflake's data sharing include:

1. **Secure Data Sharing:** Data sharing is done securely, and the data provider retains control over the shared data.
2. **Instant Data Access:** Consumers can access shared data instantly without the need for data movement or duplication.
3. **Granular Control:** Data providers can specify which objects (databases, schemas, tables) to share and define access privileges for the consumers.
4. **Pay-Per-Query Pricing:** Consumers are billed based on the compute resources used for querying shared data, and data providers incur no additional costs.

This capability facilitates collaboration and data exchange between different organizations or business units using Snowflake.
