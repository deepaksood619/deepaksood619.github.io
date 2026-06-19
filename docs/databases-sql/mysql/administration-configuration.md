---
slug: /databases-sql/mysql/administration-configuration
title: Administration / Configuration
description: Explore essential SQL commands for effective administration and configuration of database performance, including connection limits and transaction isolation settings.
created: 2024-06-07
last_update: 2025-06-10
---
## Commands

```sql
show status like 'max_used_connections'

show variables like 'max_connections'
show variables like '%max%'

show variables like '%digest%'

SELECT @@performance_schema_max_digest_length;
SET @@performance_schema_max_digest_length = 10240;
-- need restart of RDS database

-- update performance_schema table stats
-- Enable
UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED = 'YES' WHERE NAME LIKE 'statement/%';

-- Disable
UPDATE performance_schema.setup_instruments SET ENABLED = 'NO', TIMED = 'NO' WHERE NAME LIKE 'statement/%';

-- RDS
SELECT @@global.transaction_ISOLATION;
SELECT @@transaction_ISOLATION;

-- Aurora
SELECT @@TX_ISOLATION;

SELECT @@sql_mode;
```
