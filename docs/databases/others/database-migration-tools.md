# Database Migration Tools

## Liquibase

Liquibase helps millions of teams track, version, and deploy database schema changes.

Liquibase Hub

- Visualize all changes
- Changelogs
  - **Formats**
    - XML
    - YAML
    - JSON
    - SQL
- Tracking Tables
  - DATABASECHANGELOG

Track which changes have or have not been deployed

- DATABASECHANGELOGLOCK
- commands - liquibase update

https://www.liquibase.org

#### Fixing Forward

Since rolling back database changes is complicated, time-consuming, and error-prone, the fixing forward approach is very quickly getting very popular.

#### Fixing forward is lower-risk

DBAs aren't trying to get the database back to the old state. Instead, the focus is on getting to a good working state (with all that updated data).

#### Fixing forward eliminates overhead

Teams can become more agile with their development for database code, making it very popular with the DevOps, CI/CD, and Agile development communities.

The fix forward method works best when changes are broken into small chunks that are deployed independently and automatically. If you're starting from a software development environment where you have one years' worth of work about to deploy, this may not be the approach you adopt right now. However, there are tools that can help you break up your database scripts and schema changes into small, trackable chunks that make this approach much more accessible to companies that are ready to try this out.

https://www.liquibase.com/blog/roll-back-database-fix-forward

## Others

- [MySQL Database Migration Tool | Version Control | Flyway](https://flywaydb.org/mysql)
- Dbmate (database migration tool, allowing users to keep its database schema in sync with multiple developers and the production servers - Supports MySQL, PostgreSQL, SQLite, and ClickHouse) - [GitHub - amacneil/dbmate: :rocket: A lightweight, framework-agnostic database migration tool.](https://github.com/amacneil/dbmate)
- Apache NiFi
- rsync
- Data migration tool (DM) by TiDB is an open-source tool
- Refinery
- Ladder
- [Atlas | Open-source database schema management tool](https://atlasgo.io/) - manage your database schema as code

[10 Best Open Source Database Migration Tools](https://wisdomplexus.com/blogs/open-source-database-migration-tools/)
