# TSQL Queries

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
