# Compute

## Virtual Warehouse

- In Snowflake, a Virtual Warehouse is a unit of compute resources that is used to execute SQL queries. It is a cluster of compute nodes that work together to process queries submitted to Snowflake.
- A Virtual Warehouse can be configured with a specific size (i.e., the number of nodes) to handle the workload efficiently. Users can create multiple virtual warehouses to isolate different workloads or business units.
- Virtual Warehouses can be dynamically scaled vertically by adjusting the number of nodes. Snowflake can also automatically pause and resume virtual warehouses to optimize costs based on usage patterns.

Example of creating a Virtual Warehouse:

```sql
CREATE WAREHOUSE my_warehouse WITH WAREHOUSE_SIZE = 'MEDIUM';
```

## Multi-Cluster Warehouse

- A Multi-Cluster Warehouse is a configuration option for a Virtual Warehouse in Snowflake. It allows users to have multiple clusters of compute nodes within a single virtual warehouse.
- This feature enables parallel processing of queries by utilizing multiple clusters simultaneously. It improves the overall concurrency and performance of the virtual warehouse.
- Users can specify the number of clusters when creating or modifying a multi-cluster warehouse. The clusters work in parallel to process queries, enhancing the system's ability to handle concurrent workloads.

Example of creating a Multi-Cluster Warehouse:

```sql
CREATE WAREHOUSE my_multi_cluster_warehouse WITH WAREHOUSE_SIZE = 'MEDIUM' CLUSTER_COUNT = 2;
```

## Key Differences

- A Virtual Warehouse is the basic unit of compute resources in Snowflake, while Multi-Cluster Warehouse is a configuration option within a Virtual Warehouse.
- A Virtual Warehouse can have one or more clusters. The concept of a single-cluster warehouse is implicitly part of the Virtual Warehouse concept.
- Multi-Cluster Warehouses are designed to improve concurrency and performance by allowing multiple clusters to process queries simultaneously.
