# Comparisons

## Postgres vs MySQL / MySQL vs Postgres

### Why Postgres

- Window Functions, CTE, better for analytics and analytical queries
- More indexing options
- More data types
- Better performance
- Extensions and plugins

### Difference

| **Criteria**                         | **PostgreSQL**                                                                                     | **MySQL**                                                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Data Integrity & ACID Compliance** | Strict ACID compliance with advanced constraints, triggers, and foreign keys                       | ACID-compliant (with InnoDB), but historically more lenient with data integrity |
| **SQL Compliance**                   | Highly SQL-compliant with support for complex queries and advanced features                        | Less SQL-compliant but simpler for basic use cases                              |
| **Performance**                      | Optimized for complex, read-heavy queries and large datasets                                       | Faster for simple read-heavy operations and small-to-medium-sized applications  |
| **Extensibility**                    | Highly extensible (custom data types, functions, extensions)                                       | Limited extensibility but supports plugins                                      |
| **Data Types**                       | Offers a wider range of data types, including JSON, XML, and arrays.                               | Provides a more limited set of data types.                                      |
| **Indexing**                         | Supports various indexing techniques, including B-tree, hash, GiST, and GIN.                       | Primarily supports B-tree indexing.                                             |
| **Replication & Clustering**         | Supports asynchronous and synchronous replication, and logical replication                         | Mature replication options (master-slave, master-master, Galera Cluster)        |
| **Community & Ecosystem**            | Strong community, wide adoption in enterprise environments, cloud-managed services (e.g., AWS RDS) | Large community, supported by MySQL Enterprise and popular forks like MariaDB   |
| **Security**                         | Advanced access control, including row-level security and fine-grained permissions                 | Secure but lacks advanced access control features like PostgreSQL               |
| **Use Cases**                        | Best for data analytics, complex queries, enterprise-level applications                            | Ideal for high-speed web applications, e-commerce, and SaaS solutions           |
| **JSON and Document Storage**        | Excellent JSON and JSONB support for hybrid NoSQL and relational capabilities                      | Supports JSON since version 5.7, but less performant than PostgreSQL’s JSONB    |
| **Licensing**                        | PostgreSQL License (permissive and liberal)                                                        | GPL License (may require specific licensing for commercial use)                 |

### SQL Compliance

- **PostgreSQL**: Highly **SQL-compliant**, often called "the most SQL-compliant" open-source database. It supports advanced features like **window functions, common table expressions (CTEs)**, and complex queries.
- **MySQL**: Less SQL-compliant. It is easier to work with for simple use cases but might lack advanced SQL features that PostgreSQL offers.

### Performance

- **PostgreSQL**: Optimized for complex read-heavy and analytical queries. It handles large volumes of data and complex operations better due to its support for advanced indexing methods and sophisticated query optimization.
- **MySQL**: Typically faster for **simple read-heavy operations** and **small-to-medium-sized applications** with less complex queries. It's often chosen for web applications that require high-speed transactional operations.

### Links

- [Postgres vs MySQL. The fundamental difference between the… | by Hussein Nasser | Medium](https://medium.com/@hnasr/postgres-vs-mysql-5fa3c588a94e)
- [What’s the Difference Between MySQL and PostgreSQL?](https://aws.amazon.com/compare/the-difference-between-mysql-vs-postgresql/)
- [Why do you choose MySQL over Postgres? : r/node](https://www.reddit.com/r/node/comments/rv6u8u/why_do_you_choose_mysql_over_postgres/)
- [Round 22 results - TechEmpower Framework Benchmarks](https://www.techempower.com/benchmarks/#hw=ph&test=fortune&section=data-r22)
- [PostgreSQL vs MySQL - YouTube](https://www.youtube.com/watch?v=btjBNKP49Rk&ab_channel=IBMTechnology)
- [MySQL vs PostgreSQL - YouTube](https://www.youtube.com/watch?v=vAv5lks4gzA&ab_channel=Airbyte)
