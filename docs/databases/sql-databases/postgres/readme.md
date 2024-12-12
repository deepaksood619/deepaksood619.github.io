# Postgres

- [Postgres Documentation](databases/sql-databases/postgres/documentation.md)
- [Architecture](databases/sql-databases/postgres/architecture.md)
- [Table Partitioning](databases/sql-databases/postgres/table-partitioning.md)
- [Postgres Indexes](databases/sql-databases/postgres/indexes.md)
- [parameters-configuration-optimization](databases/sql-databases/postgres/parameters-configuration-optimization.md)
- [Replication](databases/sql-databases/postgres/replication.md)
- [others](databases/sql-databases/postgres/others.md)
- [Postgres Commands](languages/sql/postgres-commands.md)

## Introduction

Is a relational database management system with an object-oriented approach, meaning that information can be represented as objects or classes in PostgreSQL schemas.

PostgreSQL is an open-source SQL database that is not controlled by any corporation. It is typically used for web application development.

PostgreSQL shares many of the same advantages of MySQL. It is easy to use, inexpensive, reliable and has a large community of developers. It also provides some additional features such as foreign key support without requiring complex configuration.

- SQL Query Planner
- Lexing
- Parsing
- Rewriter
- Optimizer

- Two types of SQL Commands
    - Full blown query (SELECT, INSERT, UPDATE, DELETE)
    - Utility queries (GRANT, DROP table, REVOKE)
- JOIN
    - Bring data back together from different tables
    - Merge join
    - Hash join
    - Default Join - Inner Join
- SQL is a declarative language, you tell the system what do you want, and system figures it out how to give it to you
- Query Plan
    - Optimal set of instructions to get your data from the database
    - Output of optimizer
    - Cost out different options using prunning process
- Scan
    - Sequential scan
    - Index scan
- Up to 12 tables, postgres tries all possible join operations and prunning for optimization query
- Generic query optimizer

## Schema vs Database

In PostgreSQL, a database is a collection of one or more named schemas, and a schema is a collection of tables, views, functions, and other objects within a database:

Here are some differences between databases and schemas in PostgreSQL:

- **Purpose -** A database is used to isolate data, while a schema is used to organize and manage database objects.
- **Namespace -** Schemas are logically separated by a namespace within a database.
- **Structure -** A database can contain multiple schemas, and each schema can contain multiple tables.
- **Object names -** The same object name can be used in different schemas, but two objects of the same type cannot have the same name within a schema.
- **Access -** Users can access objects in any schema in the database they are connected to, if they have privileges to do so.

#### Some reasons to use schemas include

- Allowing multiple users to use one database without interfering with each other
- Organizing database objects into logical groups
- Putting third-party applications into separate schemas so they do not collide with the names of other objects

## Functions in Postgres

Postgres provides a powerful server-side function environment in multiple programming languages.

Try to pre-process as much data as you can on the Postgres server with server-side functions. That way, you can cut down on the latency that comes from passing too much data back and forth between your application servers and your database. This approach is particularly useful for large aggregations and joins.

What's even better is your development team can use its existing skill set for writing Postgres code. Other than the default PL/pgSQL (Postgres' native procedural language), Postgres functions and triggers can be written in PL/Python, PL/Perl, PL/V8 (JavaScript extension for Postgres) and PL/R.

Here is an example of creating a PL/Python function for checking string lengths:

```sql
CREATE FUNCTION longer_string_length (string1 string, string2 string)
RETURNS integer
AS $$
a=len(string1)
b-len(string2)
if a > b:
  return a
return b
$$ LANGUAGE plpythonu;
```

## Advanced Features

- in-memory caching
- full text search - https://rob.conery.io/2019/10/29/fine-tuning-full-text-search-with-postgresql-12
- specialized indexing
- key-value storage
- Partial indexes

## JSON Types

PostgreSQL offers two types for storing JSON data - json and jsonb.

The json and jsonb data types accept *almost* identical sets of values as input. The major practical difference is one of efficiency. The json data type stores an exact copy of the input text, which processing functions must reparse on each execution; while jsonb data is stored in a decomposed binary format that makes it slightly slower to input due to added conversion overhead, but significantly faster to process, since no reparsing is needed. jsonb also supports indexing, which can be a significant advantage.

https://www.postgresql.org/docs/current/datatype-json.html

https://severalnines.com/database-blog/overview-json-capabilities-within-postgresql

[What are the differences between JSON or JSONB in PostgreSQL?](https://ftisiot.net/postgresqljson/what-are-the-differences-json-jsonb-postgresql/)

## Containment

Containment tests whether one document (a set or an array) is contained within another.

## pg_trgm

Trigram (Trigraph) concepts

A trigram is a group of three consecutive characters taken from a string. We can measure the similarity of two strings by counting the number of trigrams they share. This simple idea turns out to be very effective for measuring the similarity of words in many natural languages.

Note: pg_trgm ignores non-word characters (non-alphanumerics) when extracting trigrams from a string. Each word is considered to have two spaces prefixed and one space suffixed when determining the set of trigrams contained in the string. For example, the set of trigrams in the string "cat" is "c", "ca" , "cat", and "at". The set of trigrams in the string "foo|bar" is "f", "fo", "foo", "oo", "b", "ba", "bar", and "ar"

https://www.postgresql.org/docs/9.6/pgtrgm.html

## Caching

https://madusudanan.com/blog/understanding-postgres-caching-in-depth

## Database Physical Storage

https://www.postgresql.org/docs/current/storage.html

## Advanced

1. Transaction Wraparound Problem
2. Transaction ID Freezing
3. Integration of Freezing Logic in VACUUM
4. Aggressive Freezing vs. Lazy Freezing
5. Multi-page Freezing and Freeze Map Maintenance

Low level working - https://erthalion.info/2019/12/06/postgresql-stay-curious

Locking Tuples internals - https://github.com/postgres/postgres/blob/master/src/backend/access/heap/README.tuplock

Youtube - [Breaking PostgreSQL at Scale - Christophe Pettus](https://www.youtube.com/watch?v=XUkTUMZRBE8)

#### Tools

- [pgAdmin - PostgreSQL Tools](https://www.pgadmin.org/)
- [PostgreSQL tools for database development and management](https://www.devart.com/dbforge/postgresql/)

## SAAS

- [EDB: Open-Source, Enterprise Postgres Database Management](https://www.enterprisedb.com/)
- [EDB Docs - Failover Manager v4 - EFM](https://www.enterprisedb.com/docs/efm/latest/)

## References

- http://www.postgresqltutorial.com
- https://dev.to/digitalocean/-an-introduction-to-queries-in-postgresql-44la
- https://postgrescheatsheet.com/#/databases
- SE Radio - 328: Postgres Query Planner (Robert Blumen with Bruce Momjian)
- https://dev.to/heroku/postgres-is-underrated-it-handles-more-than-you-think-4ff3
- https://sql-performance-explained.com
- https://wiki.postgresql.org/wiki/Don%27t_Do_This
- [Scaling Postgres Episodes](https://www.youtube.com/playlist?list=PLdTaEgcmPg9Kl539gyIFtWL0-cqk3m7v9)
- [PostgreSQL Tutorials](https://www.youtube.com/playlist?list=PLdTaEgcmPg9KiTCPWh-K961tiZrvhgfFu)
- https://zerodha.tech/blog/working-with-postgresql
- [Postgres Architecture Explained - YouTube](https://www.youtube.com/watch?v=Q56kljmIN14)
- [Herding elephants: Lessons learned from sharding Postgres at Notion](https://www.notion.so/blog/sharding-postgres-at-notion)
- [Postgres Copy](https://www.postgresql.org/docs/current/sql-copy.html)
- [Fun with PostgreSQL Puzzles: Moving Objects with Arrays, Sequences, and Aggregates](https://www.crunchydata.com/blog/fun-with-postgresql-puzzles-moving-objects-with-arrays-sequences-and-aggregates)
- [Postgres System Columns Explained (ctid, xmin,xmax) - YouTube](https://www.youtube.com/watch?v=AveRgUrC7FM)
- [Index Fill Factor | The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=qXDhMJCuDEc)
- [Explaining The Postgres Meme](https://www.avestura.dev/blog/explaining-the-postgres-meme)
- [Postgres just got even faster - YouTube](https://www.youtube.com/watch?v=1KzcJXNSzgE&ab_channel=HusseinNasser)
