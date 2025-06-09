# TSQL / MSSQL Queries

## Find size of tables

```sql
SELECT
    s.name AS SchemaName,
    t.name AS TableName,
    p.rows AS RowCounts,
    CASE
        WHEN MIN(i.index_id) = 0 THEN 'Heap'
        ELSE 'Clustered Index'
    END AS TableType,
    CAST(SUM(a.total_pages) * 8 / 1024.0 AS DECIMAL(18,2)) AS TotalSpaceMB,
    CAST(SUM(a.used_pages) * 8 / 1024.0 AS DECIMAL(18,2)) AS UsedSpaceMB,
    CAST(SUM(a.data_pages) * 8 / 1024.0 AS DECIMAL(18,2)) AS DataSpaceMB,
    CAST((SUM(a.used_pages) - SUM(a.data_pages)) * 8 / 1024.0 AS DECIMAL(18,2)) AS IndexSpaceMB,
    CAST((SUM(a.total_pages) - SUM(a.used_pages)) * 8 / 1024.0 AS DECIMAL(18,2)) AS UnusedSpaceMB
FROM
    sys.tables t
INNER JOIN
    sys.indexes i ON t.object_id = i.object_id
INNER JOIN
    sys.partitions p ON i.object_id = p.object_id AND i.index_id = p.index_id
INNER JOIN
    sys.allocation_units a ON p.partition_id = a.container_id
INNER JOIN
    sys.schemas s ON t.schema_id = s.schema_id
GROUP BY
    s.name, t.name, p.rows
ORDER BY
    TotalSpaceMB DESC;
```

## Find Schema of Table

```sql
EXEC sp_help 'schema_name.table_name';
```

## Show Full Process List

```sql
SELECT
    s.session_id,
    s.login_name,
    s.host_name,
    s.program_name,
    s.status AS session_status,
    r.status AS request_status,
    r.command,
    r.cpu_time,
    r.total_elapsed_time,
    r.reads,
    r.writes,
    r.logical_reads,
    r.blocking_session_id,
    r.wait_type,
    r.wait_time,
    r.last_wait_type,
    r.text_size,
    r.row_count,
    r.sql_handle,
    t.text AS running_sql_text
FROM
    sys.dm_exec_sessions s
LEFT JOIN
    sys.dm_exec_requests r ON s.session_id = r.session_id
OUTER APPLY
    sys.dm_exec_sql_text(r.sql_handle) t
WHERE
    s.is_user_process = 1
ORDER BY
    r.total_elapsed_time DESC;
```

### Check Database Performance Overview

You can query system views to analyze performance metrics like CPU, I/O, and wait statistics.

```sql
-- Top Waits in the system (helps identify bottlenecks)
SELECT TOP 10
    wait_type, 
    wait_time_ms / 1000.0 AS wait_time_sec,
    waiting_tasks_count,
    wait_time_ms / NULLIF(waiting_tasks_count, 0) AS avg_wait_time_ms
FROM sys.dm_db_wait_stats
ORDER BY wait_time_ms DESC;
```

### Identify Long-Running Queries

Useful to flag slow queries.

```sql
-- Longest running queries
SELECT TOP 10
    qs.total_elapsed_time / qs.execution_count AS avg_elapsed_time,
    qs.execution_count,
    qs.total_logical_reads / qs.execution_count AS avg_logical_reads,
    qs.total_worker_time / qs.execution_count AS avg_cpu_time,
    SUBSTRING(st.text, (qs.statement_start_offset / 2) + 1,
              ((CASE qs.statement_end_offset
                    WHEN -1 THEN DATALENGTH(st.text)
                    ELSE qs.statement_end_offset
                END - qs.statement_start_offset) / 2) + 1) AS query_text
FROM sys.dm_exec_query_stats AS qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) AS st
ORDER BY avg_elapsed_time DESC;
```

### Find Missing Indexes

You can't create indexes with read-only access, but you can find missing ones and suggest them.

```sql
-- Identify missing indexes
SELECT TOP 10
    migs.avg_total_user_cost * migs.avg_user_impact * (migs.user_seeks + migs.user_scans) AS improvement_measure,
    mid.statement AS table_name,
    mid.equality_columns,
    mid.inequality_columns,
    mid.included_columns
FROM sys.dm_db_missing_index_group_stats AS migs
JOIN sys.dm_db_missing_index_groups AS mig ON migs.group_handle = mig.index_group_handle
JOIN sys.dm_db_missing_index_details AS mid ON mig.index_handle = mid.index_handle
ORDER BY improvement_measure DESC;
```

### Detect High-CPU Queries

Find which queries consume the most CPU time.

```sql
-- Top CPU-consuming queries
SELECT TOP 10
    qs.total_worker_time / 1000 AS total_cpu_ms,
    qs.execution_count,
    qs.total_worker_time / qs.execution_count AS avg_cpu_time,
    SUBSTRING(st.text, (qs.statement_start_offset / 2) + 1,
              ((CASE qs.statement_end_offset
                    WHEN -1 THEN DATALENGTH(st.text)
                    ELSE qs.statement_end_offset
                END - qs.statement_start_offset) / 2) + 1) AS query_text
FROM sys.dm_exec_query_stats AS qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) AS st
ORDER BY total_cpu_ms DESC;
```

### Analyze Index Usage

Detect unused indexes (useful when you have write access later).

```sql
-- Index usage stats
SELECT 
    OBJECT_NAME(i.object_id) AS table_name,
    i.name AS index_name,
    i.index_id,
    ps.user_seeks, ps.user_scans, ps.user_lookups, ps.user_updates
FROM sys.dm_db_index_usage_stats AS ps
JOIN sys.indexes AS i ON i.object_id = ps.object_id AND i.index_id = ps.index_id
WHERE OBJECTPROPERTY(i.object_id, 'IsUserTable') = 1
ORDER BY ps.user_updates DESC;
```

### Check Query Plan Caching

Useful for identifying parameter sniffing or inefficient plan reuse.

```sql
-- Look at plan cache to identify duplicate/inefficient plans
SELECT 
    cp.usecounts,
    cp.cacheobjtype,
    cp.objtype,
    st.text AS query_text
FROM sys.dm_exec_cached_plans AS cp
CROSS APPLY sys.dm_exec_sql_text(cp.plan_handle) AS st
ORDER BY cp.usecounts DESC;
```

### Monitor TempDB Usage

Though this is usually at server level, you can inspect usage by queries (if allowed).

```sql
-- TempDB usage by session
SELECT 
    session_id, 
    SUM(internal_objects_alloc_page_count + user_objects_alloc_page_count) * 8 AS tempdb_kb_allocated
FROM sys.dm_db_session_space_usage
GROUP BY session_id
ORDER BY tempdb_kb_allocated DESC;
```

### Query to Capture Top Resource-Intensive Queries

```sql
SELECT TOP 25
    qs.execution_count,
    qs.total_worker_time / 1000 AS total_cpu_ms,
    qs.total_worker_time / qs.execution_count / 1000 AS avg_cpu_ms,
    qs.total_elapsed_time / qs.execution_count / 1000 AS avg_duration_ms,
    qs.total_logical_reads / qs.execution_count AS avg_logical_reads,
    SUBSTRING(st.text, (qs.statement_start_offset / 2) + 1,
              ((CASE qs.statement_end_offset
                  WHEN -1 THEN DATALENGTH(st.text)
                  ELSE qs.statement_end_offset
              END - qs.statement_start_offset) / 2) + 1) AS query_text,
    qp.query_plan
FROM sys.dm_exec_query_stats AS qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) AS st
CROSS APPLY sys.dm_exec_query_plan(qs.plan_handle) AS qp
ORDER BY avg_cpu_ms DESC;
```

### Query to Get Missing Index Recommendations

```sql
SELECT TOP 20
    CONVERT(decimal(18,2), migs.avg_total_user_cost * migs.avg_user_impact * (migs.user_seeks + migs.user_scans)) AS improvement_measure,
    OBJECT_NAME(mid.object_id, mid.database_id) AS table_name,
    'CREATE INDEX [IX_' + OBJECT_NAME(mid.object_id, mid.database_id) + '_' + 
        REPLACE(REPLACE(REPLACE(ISNULL(mid.equality_columns,''), '[',''), ']',''), ', ', '_') + 
        '] ON ' + OBJECT_NAME(mid.object_id, mid.database_id) + 
        ' (' + ISNULL(mid.equality_columns,'') +
        CASE 
            WHEN mid.inequality_columns IS NOT NULL THEN ',' + mid.inequality_columns
            ELSE ''
        END + ')' +
        ISNULL(' INCLUDE (' + mid.included_columns + ')', '') AS create_index_statement
FROM sys.dm_db_missing_index_group_stats AS migs
JOIN sys.dm_db_missing_index_groups AS mig ON migs.group_handle = mig.index_group_handle
JOIN sys.dm_db_missing_index_details AS mid ON mig.index_handle = mid.index_handle
ORDER BY improvement_measure DESC;
```

## Links

- [ChatGPT - Azure SQL Optimization Guide](https://chatgpt.com/share/6823327c-dbc8-8005-b57d-a582c82a4c92)
