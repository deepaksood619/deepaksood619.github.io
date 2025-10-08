# Advanced

1. Transaction Wraparound Problem
2. Transaction ID Freezing
3. Integration of Freezing Logic in VACUUM
4. Aggressive Freezing vs. Lazy Freezing
5. Multi-page Freezing and Freeze Map Maintenance

Low level working - https://erthalion.info/2019/12/06/postgresql-stay-curious

Locking Tuples internals - https://github.com/postgres/postgres/blob/master/src/backend/access/heap/README.tuplock

Youtube - [Breaking PostgreSQL at Scale - Christophe Pettus](https://www.youtube.com/watch?v=XUkTUMZRBE8)

### Transaction Wraparound Problem

- [What is Transaction Wraparound in PostgreSQL ?](https://medium.com/@pawanpg0963/what-is-transaction-wraparound-in-postgresql-91c972266780)
- [Prevent transaction ID wraparound  \|  Cloud SQL for PostgreSQL  \|  Google Cloud](https://cloud.google.com/sql/docs/postgres/recommender-high-transactionid-utilization)
- [Prevent transaction ID wraparound by using postgres\_get\_av\_diag() for monitoring autovacuum \| AWS Database Blog](https://aws.amazon.com/blogs/database/prevent-transaction-id-wraparound-by-using-postgres_get_av_diag-for-monitoring-autovacuum/)
- [How to simulate the deadly, infamous, misunderstood & complex ‘Transaction Wraparound Problem’ in PostgreSQL … « Tales From A Lazy Fat DBA](https://fatdba.com/2021/07/20/how-to-simulate-the-deadly-transaction-wraparound-problem-in-postgresql/)

### Tools

- [pgAdmin - PostgreSQL Tools](https://www.pgadmin.org/)
- [PostgreSQL tools for database development and management](https://www.devart.com/dbforge/postgresql/)

## Row Security Policies

```sql
CREATE TABLE accounts (manager text, company text, contact_email text);

ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY account_managers ON accounts TO managers
    USING (manager = current_user);
```

[PostgreSQL: Documentation: 17: 5.9. Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)

## Others

- [Asynchronous IO in Postgres 18 \| The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=yGjGc21mmoU)
