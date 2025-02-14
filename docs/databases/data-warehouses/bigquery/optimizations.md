# Optimizations

## Config Optimizations

### Job Priority

Option to assign adhoc queries that we run on bq studio to low priority tasks: we can override the job priority to 'batch' from 'interactive'

**Job Priority: Batch**

When you set the **Job Priority** to **Batch** and check the **Override** box:

1. **Batch Priority Enabled**: All queries you run from the BigQuery Web UI (BQ Studio) under your account will execute as **Batch** jobs by default.
2. **Impact**:
    - Batch jobs will **wait for idle slots** instead of competing for immediate slot allocation, meaning lower priority.
    - This is ideal for workloads that can tolerate delays, such as **ad-hoc queries** or **low-priority reporting tasks**.
3. **Scope**: This setting applies to queries you run directly from your account. Other users will not be affected unless they also enable this override.
