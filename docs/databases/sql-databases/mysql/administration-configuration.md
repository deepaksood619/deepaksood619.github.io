# Administration / Configuration

## Commands

```bash
show status like 'max_used_connections'

show variables like 'max_connections'
show variables like '%max%'

-- RDS
SELECT @@global.transaction_ISOLATION;
SELECT @@transaction_ISOLATION;

-- Aurora
SELECT @@TX_ISOLATION;

SELECT @@sql_mode;
```
