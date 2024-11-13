# Administration / Configuration

## Commands

```sql
show status like 'max_used_connections'

show variables like 'max_connections'
show variables like '%max%'

show variables like '%digest%'

SELECT @@performance_schema_max_digest_length;
SET @@performance_schema_max_digest_length = 10240;
-- need restart of RDS database

-- RDS
SELECT @@global.transaction_ISOLATION;
SELECT @@transaction_ISOLATION;

-- Aurora
SELECT @@TX_ISOLATION;

SELECT @@sql_mode;
```
