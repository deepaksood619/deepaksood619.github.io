# Postgres

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
- full text search - <https://rob.conery.io/2019/10/29/fine-tuning-full-text-search-with-postgresql-12>
- specialized indexing
- key-value storage
- Partial indexes

## JSON Types

PostgreSQL offers two types for storing JSON data - json and jsonb.

The json and jsonb data types accept *almost* identical sets of values as input. The major practical difference is one of efficiency. The json data type stores an exact copy of the input text, which processing functions must reparse on each execution; while jsonb data is stored in a decomposed binary format that makes it slightly slower to input due to added conversion overhead, but significantly faster to process, since no reparsing is needed. jsonb also supports indexing, which can be a significant advantage.

<https://www.postgresql.org/docs/current/datatype-json.html>

<https://severalnines.com/database-blog/overview-json-capabilities-within-postgresql>

## Containment

Containment tests whether one document (a set or an array) is contained within another.

## Indexes in Postgres

#### [B-tree indexes](https://www.postgresql.org/docs/current/btree-intro.html)

B-tree indexes are binary trees that are used to sort data efficiently. They're the default if you use theINDEXcommand. Most of the time, a B-tree index suffices. As you scale, inconsistencies can be a larger problem, so use the [amcheck](https://www.postgresql.org/docs/11/amcheck.html) extension periodically.

#### [BRIN indexes](https://www.postgresql.org/docs/11/brin-intro.html)

A Block Range INdex (BRIN) can be used when your table is naturally already sorted by a column, and you need to sort by that column. For example, for a log table that was written sequentially, setting a BRIN index on the timestamp column lets the server know that the data is already sorted.

#### [Bloom filter index](https://www.postgresql.org/docs/11/bloom.html)

A bloom index is perfect for multi-column queries on big tables where you only need to test for equality. It uses a special mathematical structure called a bloom filter that's based on probability and uses significantly less space.

#### [GIN and GiST indexes](https://www.postgresql.org/docs/11/textsearch-indexes.html)

Use a GIN or GiST index for efficient indexes based on composite values like text, arrays, and JSON.

<https://habr.com/en/company/postgrespro/blog/448746>

## Streaming replication asynchronous and synchronous

<https://severalnines.com/database-blog/converting-asynchronous-synchronous-replication-postgresql>

## pg_trgm

Trigram (Trigraph) concepts

A trigram is a group of three consecutive characters taken from a string. We can measure the similarity of two strings by counting the number of trigrams they share. This simple idea turns out to be very effective for measuring the similarity of words in many natural languages.

Note: pg_trgm ignores non-word characters (non-alphanumerics) when extracting trigrams from a string. Each word is considered to have two spaces prefixed and one space suffixed when determining the set of trigrams contained in the string. For example, the set of trigrams in the string "cat" is "c", "ca" , "cat", and "at". The set of trigrams in the string "foo|bar" is "f", "fo", "foo", "oo", "b", "ba", "bar", and "ar"

<https://www.postgresql.org/docs/9.6/pgtrgm.html>

## Caching

<https://madusudanan.com/blog/understanding-postgres-caching-in-depth>

## Database Physical Storage

<https://www.postgresql.org/docs/current/storage.html>

## Advanced

Low level working - <https://erthalion.info/2019/12/06/postgresql-stay-curious>

Locking Tuples internals - <https://github.com/postgres/postgres/blob/master/src/backend/access/heap/README.tuplock>

Youtube - [Breaking PostgreSQL at Scale - Christophe Pettus](https://www.youtube.com/watch?v=XUkTUMZRBE8)

## Tools

- pgadmin

## References

<http://www.postgresqltutorial.com>

<https://dev.to/digitalocean/-an-introduction-to-queries-in-postgresql-44la>

<https://postgrescheatsheet.com/#/databases>

SE Radio - 328: Postgres Query Planner (Robert Blumen with Bruce Momjian)

<https://dev.to/heroku/postgres-is-underrated-it-handles-more-than-you-think-4ff3>

<https://sql-performance-explained.com>

<https://wiki.postgresql.org/wiki/Don%27t_Do_This>

[Scaling Postgres Episodes](https://www.youtube.com/playlist?list=PLdTaEgcmPg9Kl539gyIFtWL0-cqk3m7v9)

[PostgreSQL Tutorials](https://www.youtube.com/playlist?list=PLdTaEgcmPg9KiTCPWh-K961tiZrvhgfFu)

<https://zerodha.tech/blog/working-with-postgresql>

[Postgres Architecture Explained - YouTube](https://www.youtube.com/watch?v=Q56kljmIN14)

[Herding elephants: Lessons learned from sharding Postgres at Notion](https://www.notion.so/blog/sharding-postgres-at-notion)

[Postgres Copy](https://www.postgresql.org/docs/current/sql-copy.html)

[Fun with PostgreSQL Puzzles: Moving Objects with Arrays, Sequences, and Aggregates](https://www.crunchydata.com/blog/fun-with-postgresql-puzzles-moving-objects-with-arrays-sequences-and-aggregates)

[Postgres System Columns Explained (ctid, xmin,xmax) - YouTube](https://www.youtube.com/watch?v=AveRgUrC7FM)

[Index Fill Factor | The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=qXDhMJCuDEc)
