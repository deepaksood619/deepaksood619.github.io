# Database Migration Tools

## Liquibase

Liquibase helps millions of teams track, version, and deploy database schema changes.

Liquibase Hub - Visualize all changes

### Changelogs

- **Formats**
   	- XML
   	- YAML
   	- JSON
   	- SQL

### Tracking Tables

- DATABASECHANGELOG - Track which changes have or have not been deployed
- DATABASECHANGELOGLOCK

[How Liquibase Works - YouTube](https://www.youtube.com/watch?v=U9nVo9MS12o&ab_channel=Liquibase)

### Commands

```bash
liquibase update
```

### Fixing Forward

Since rolling back database changes is complicated, time-consuming, and error-prone, the fixing forward approach is very quickly getting very popular.

### Fixing forward is lower-risk

DBAs aren't trying to get the database back to the old state. Instead, the focus is on getting to a good working state (with all that updated data).

### Fixing forward eliminates overhead

Teams can become more agile with their development for database code, making it very popular with the DevOps, CI/CD, and Agile development communities.

The fix forward method works best when changes are broken into small chunks that are deployed independently and automatically. If you're starting from a software development environment where you have one years' worth of work about to deploy, this may not be the approach you adopt right now. However, there are tools that can help you break up your database scripts and schema changes into small, trackable chunks that make this approach much more accessible to companies that are ready to try this out.

### Links

- https://www.liquibase.com/blog/roll-back-database-fix-forward
- [Liquibase Community](https://www.liquibase.org)
- [Liquibase | Quickstart | Get up and running in minutes](https://www.liquibase.org/get-started/quickstart)
- [What is Liquibase? What Developers Need to Know About Schema Migration](https://www.youtube.com/watch?v=Yxl1J0l3_M0&ab_channel=CockroachDB)
- [Liquibase Pro: Quality Checks Demo - YouTube](https://www.youtube.com/watch?v=99OLjbQm1RU&ab_channel=Liquibase)

## Others

- Flyway - [MySQL Database Migration Tool | Version Control | Flyway](https://flywaydb.org/mysql)
- Dbmate (database migration tool, allowing users to keep its database schema in sync with multiple developers and the production servers - Supports MySQL, PostgreSQL, SQLite, and ClickHouse) - [GitHub - amacneil/dbmate: :rocket: A lightweight, framework-agnostic database migration tool.](https://github.com/amacneil/dbmate)
- Apache NiFi
- rsync
- Data migration tool (DM) by TiDB is an open-source tool
- Refinery
- Ladder
- [Atlas | Open-source database schema management tool](https://atlasgo.io/) - manage your database schema as code

[10 Best Open Source Database Migration Tools](https://wisdomplexus.com/blogs/open-source-database-migration-tools/)

[CI/CD for database - 2 devops tools for DB versioning and migration | **liquibase and flyway** - YouTube](https://www.youtube.com/watch?v=KjPlcXkk7xY&ab_channel=kanezi)
