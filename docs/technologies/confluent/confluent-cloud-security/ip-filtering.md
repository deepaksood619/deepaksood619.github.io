# IP Filtering

IP Filtering is an authorization feature that provides Confluent Cloud organizations with enhanced security by allowing access to your resources only from trusted source networks. You can create IP filters for your Confluent Cloud organization that allow inbound requests based on the included IP groups (lists of [CIDR blocks](https://docs.confluent.io/cloud/current/_glossary.html#term-CIDR-block)) defining your trusted source networks. All incoming API requests that originate from IP addresses not included in your IP filters are denied.

## Key Components

- **IP group**: The list of [CIDR blocks](https://docs.confluent.io/cloud/current/_glossary.html#term-CIDR-block) specifying the trusted source networks. IP groups are used to create IP filters that control access to Confluent Cloud resources.
- **IP filter**: The set of IP groups associated with a resource scope. IP filters define which IP groups are allowed to access operations within a given scope.
- **Resource scope**: The scope of resources covered by IP filters. Two resource scopes are available:
    - Organization: Covers all resources in the Confluent Cloud organization.
    - Environment: Covers all resources in a specific Confluent Cloud environment.
- **Operation group**: The set of operations that are allowed by an IP filter. The following operation groups are available:
    - **Resource management**: Covers all management operations
    - **Schema management**: Covers schema management operations
    - **Flink**: Covers all operations related to Apache Flink data.

## Example

Assume that Julia manages the Confluent Cloud organization for her company and wants to ensure that management operations can be performed only from trusted network locations.

1. Julia collects a list of the CIDR blocks that represent the trusted network locations for her company.
2. She creates an IP group for each trusted network location, naming each IP group to match the trusted network location.
	1. For example, she creates an IP group named “SF Office” for the trusted network location of her company’s San Francisco office. And, another IP group named “Corp VPN” for the trusted network location of her company’s corporate VPN.
3. Next, Julia creates an IP filter and adds the IP groups for the trusted network locations to the IP filter.
	1. She names the IP filter “Allow Corporate Offices and VPN” to indicate that it permits access from the corporate location networks and the VPN. She also associates the IP filter with the “management” operations group, which restricts operations to the management of Confluent Cloud resources.
4. Finally, Julia verifies that the IP filter is working as expected by doing the following:
    - Attempt to access her Confluent Cloud resources from IP address included in her IP filters.
    - Attempt to access her Confluent Cloud resources from IP address not included in her IP filters. These attempts are denied.
    - Check the Confluent Cloud audit log to see that her tests to access her Confluent Cloud resources from IP addresses not included in her IP filters are denied, as expected, and are recorded in the audit log.

## Limitations

- Protecting access to data in Kafka topics and ksqlDB databases is not supported.
- The following operation groups are currently available:
    - Resource management: Covers the management of Confluent Cloud resources using the resource management APIs (`api.confluent.cloud`).
    - Schema management: Covers schema management operations.
    - Flink: Covers all operations related to Apache Flink data.
    - Currently not configurable are the following operation groups:
        - Catalog management
        - Kafka Management
        - Logging
        - Metrics
        - Kafka data
    For details, see [Operation groups](https://docs.confluent.io/cloud/current/security/access-control/ip-filtering/manage-ip-filters.html#ip-filter-operation-groups).
- When an IP filter is applied to the resource management operation group, creating a connector by executing a KSQL statement fails.
- Only IPv4 CIDR blocks are supported.

## Links

[IP Filtering on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/security/access-control/ip-filtering/overview.html)
