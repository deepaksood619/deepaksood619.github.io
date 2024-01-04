# Architecture

## Data Platform as a Self-managed Service

Snowflake is a true self-managed service, meaning:

- There is no hardware (virtual or physical) to select, install, configure, or manage.
- There is virtually no software to install, configure, or manage.
- Ongoing maintenance, management, upgrades, and tuning are handled by Snowflake.

Snowflake runs completely on cloud infrastructure. All components of Snowflake’s service (other than optional command line clients, drivers, and connectors), run in public cloud infrastructures.

Snowflake uses virtual compute instances for its compute needs and a storage service for persistent storage of data. Snowflake cannot be run on private cloud infrastructures (on-premises or hosted).

Snowflake is not a packaged software offering that can be installed by a user. Snowflake manages all aspects of software installation and updates.

## Snowflake Architecture

Snowflake’s architecture is a hybrid of traditional shared-disk and shared-nothing database architectures. Similar to shared-disk architectures, Snowflake uses a central data repository for persisted data that is accessible from all compute nodes in the platform. But similar to shared-nothing architectures, Snowflake processes queries using MPP (massively parallel processing) compute clusters where each node in the cluster stores a portion of the entire data set locally. This approach offers the data management simplicity of a shared-disk architecture, but with the performance and scale-out benefits of a shared-nothing architecture.

![snowflake-architecture](../../../media/Pasted%20image%2020231205121227.png)

![snowflake-architecture](../../../media/Pasted%20image%2020240104225355.png)

Snowflake’s unique architecture consists of three key layers:

- [Database Storage](https://docs.snowflake.com/en/user-guide/intro-key-concepts#database-storage)
- [Query Processing](https://docs.snowflake.com/en/user-guide/intro-key-concepts#query-processing)
- [Cloud Services](https://docs.snowflake.com/en/user-guide/intro-key-concepts#cloud-services)

### Database Storage

When data is loaded into Snowflake, Snowflake reorganizes that data into its internal optimized, compressed, columnar format. Snowflake stores this optimized data in cloud storage.

Snowflake manages all aspects of how this data is stored — the organization, file size, structure, compression, metadata, statistics, and other aspects of data storage are handled by Snowflake. The data objects stored by Snowflake are not directly visible nor accessible by customers; they are only accessible through SQL query operations run using Snowflake.

### Query Processing

Query execution is performed in the processing layer. Snowflake processes queries using “virtual warehouses”. Each virtual warehouse is an MPP compute cluster composed of multiple compute nodes allocated by Snowflake from a cloud provider.

Each virtual warehouse is an independent compute cluster that does not share compute resources with other virtual warehouses. As a result, each virtual warehouse has no impact on the performance of other virtual warehouses.

A virtual warehouse is essentially a set of resources (compute clusters) that are used to process queries. It can be scaled up or down based on the workload requirements. The concept of virtual warehouses contributes to workload isolation by allowing different workloads or user groups to have dedicated resources for their queries, preventing resource contention. It also aids optimization as you can allocate the appropriate amount of resources to meet the performance needs of specific tasks.

### Cloud Services

The cloud services layer is a collection of services that coordinate activities across Snowflake. These services tie together all of the different components of Snowflake in order to process user requests, from login to query dispatch. The cloud services layer also runs on compute instances provisioned by Snowflake from the cloud provider.

Services managed in this layer include:

- Authentication
- Infrastructure management
- Metadata management
- Query parsing and optimization
- Access control

### Metadata Layer

Snowflake efficiently manages metadata storage. Metadata, which includes information about tables, columns, and other database objects, is stored separately from the user data. This separation allows Snowflake to optimize metadata storage independently. All this metadata is stored in FoundationDB and is deployed when snowflake is provisioned

### Multi-cluster, and how it is implemented in Snowflake for scalability?

In Snowflake, multi-cluster refers to the ability to have multiple virtual warehouses (compute clusters) that can be independently scaled up or down. Each virtual warehouse operates independently but can access the same underlying data stored in Snowflake's storage layer. This parallel processing capability allows for scalable and efficient query performance.

## Snowflake Caching

### 1. Metadata Cache

- Object Definition
- Statistics

### 2. Result Cache

- Exact results from exact queries
- Last 24hrs
- Underlying data cannot have changed
- Functions like current time causes expiration
- User can be different but role must be same

### 3. Warehouse Cache

- Sometime called "Local", or "SSD", or "Data Cache"
- Contain Raw data from the table, not aggregated
- When warehouse is suspended, data is dropped/purged
- Can use partial data and go deeper for remaining

### 4. Centralized Storage

- Long term storage, database and tables, remote

## Data Sharing / Data Marketplace

Snowflake supports data sharing between different accounts through its Data Sharing feature. This allows one Snowflake account to securely share data with another account. Key features associated with Snowflake's data sharing include:

1. **Secure Data Sharing:** Data sharing is done securely, and the data provider retains control over the shared data.
2. **Instant Data Access:** Consumers can access shared data instantly without the need for data movement or duplication.
3. **Granular Control:** Data providers can specify which objects (databases, schemas, tables) to share and define access privileges for the consumers.
4. **Pay-Per-Query Pricing:** Consumers are billed based on the compute resources used for querying shared data, and data providers incur no additional costs.

This capability facilitates collaboration and data exchange between different organizations or business units using Snowflake.

## Data Security / governance

### Role-Based Access Control (RBAC)

- Snowflake employs RBAC to manage access control. Users are assigned roles, and roles are granted specific privileges on databases, schemas, tables, and other objects.
- Roles can be hierarchical, allowing for a more granular and organized approach to access control.

### Privileges

- Snowflake supports fine-grained privileges that can be granted at different levels, such as ACCOUNT, SCHEMA, TABLE, VIEW, and more.
- Common privileges include SELECT, INSERT, UPDATE, DELETE, USAGE, and more. Users and roles can be granted these privileges based on the requirements of the data governance policy.

### Data Masking

- Snowflake provides data masking capabilities to control the visibility of sensitive data. Data masking rules can be applied to specific columns to ensure that only authorized users see the complete data, while others see masked or redacted values.

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

## Links

[Key Concepts & Architecture | Snowflake Documentation](https://docs.snowflake.com/en/user-guide/intro-key-concepts)

[Overview of Key Features | Snowflake Documentation](https://docs.snowflake.com/user-guide/intro-supported-features)

[How FoundationDB Powers Snowflake Metadata Forward - Blog](https://www.snowflake.com/blog/how-foundationdb-powers-snowflake-metadata-forward/)
