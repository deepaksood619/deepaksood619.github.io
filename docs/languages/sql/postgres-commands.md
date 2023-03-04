# Postgres Commands

`brew install postgresql`

## psql - start postgres sql query engine

```sql
psql -h xx.xx.us-west-2.rds.amazonaws.com -p 5432 -U postgres
xxx

psql -h xx.xx.xx.xx -p 5432 -U dev -d dev_metta_pg

psql -d postgres -U postgres
xx

\d - show databases
\d rides; - show rides table
select count(*) from rides;
\dx - List of installed extensions
\l - list all databases with owner
\dt
\dt+  - you get a view of the tables in the database along with an (empty) description column
\dn+ - public schema indicates permissions for the postgres role
\du - show all users
\dt *.* - show all tables

select version();
SELECT schema_name FROM information_schema.schemata;

create user myuser with encrypted password 'mypass';
grant all privileges on database postgres to myuser;
psql -h xx.xx.us-west-2.rds.amazonaws.com -p 5432 -U myuser -d postgres

CREATE USER quicksight4 PASSWORD 'ac9c922490fad8cafa5d68a5';
grant all privileges on database postgres to quicksight4;
grant all privileges on database prod_metta_pg2 to quicksight4;
psql -h xx.xx.us-west-2.rds.amazonaws.com -p 5432 -U quicksight4 -d postgres

GRANT CONNECT ON DATABASE postgres TO quicksight;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO quicksight;
GRANT USAGE ON SCHEMA public TO quicksight;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO quicksight;

REASSIGN OWNED BY quicksight TO postgres;  -- or some other trusted role
DROP OWNED BY ryan;
DROPUSERryan;
```

psql has a `ECHO_HIDDEN` variable you can set to show (or 'echo') any SQL queries performed behind the scenes by backslash commands.

`set ECHO_HIDDEN on`

```sql
-- select database
\c [databasename]: Connect to [databasename] on local database cluster

CREATE DATABASE zenalytix_db_new;

psql -U zenatix -d zenalytix_db_new -p 5432

psql -h localhost -p 5432 -U postgres -d airflow
psql -h localhost -p 5432 -U postgres (sentry)

-- get table sizes
SELECT *, pg_size_pretty(total_bytes) AS total
    , pg_size_pretty(index_bytes) AS INDEX
    , pg_size_pretty(toast_bytes) AS toast
    , pg_size_pretty(table_bytes) AS TABLE
  FROM (
  SELECT *, total_bytes-index_bytes-COALESCE(toast_bytes,0) AS table_bytes FROM (
      SELECT c.oid,nspname AS table_schema, relname AS TABLE_NAME
              , c.reltuples AS row_estimate
              , pg_total_relation_size(c.oid) AS total_bytes
              , pg_indexes_size(c.oid) AS index_bytes
              , pg_total_relation_size(reltoastrelid) AS toast_bytes
          FROM pg_class c
          LEFT JOIN pg_namespace n ON n.oid = c.relnamespace
          WHERE relkind = 'r'
  ) a
) a order by total_bytes desc;

-- get databases sizes
SELECT d.datname AS Name,  pg_catalog.pg_get_userbyid(d.datdba) AS Owner,
    CASE WHEN pg_catalog.has_database_privilege(d.datname, 'CONNECT')
        THEN pg_catalog.pg_size_pretty(pg_catalog.pg_database_size(d.datname))
        ELSE 'No Access'
    END AS SIZE
FROM pg_catalog.pg_database d
    ORDER BY
    CASE WHEN pg_catalog.has_database_privilege(d.datname, 'CONNECT')
        THEN pg_catalog.pg_database_size(d.datname)
        ELSE NULL
    END DESC -- nulls first
    LIMIT 20;

-- table sizes
select table_name, pg_relation_size(quote_ident(table_name))
from information_schema.tables
where table_schema = 'public'
order by 2;

REINDEX DATABASE zenalytx_db_new;
REINDEX INDEX index_name;
REINDEX TABLE table_name;

VACUUM numbers;
VACUUM FULL;  # to free up space in all the dbs

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;

-- User Management
CREATE USER test WITH SUPERUSER PASSWORD 'test123';
ALTER USER test WITH PASSWORD 'test1234';
DROP USER test;

delete from task_instance where execution_date::date < '2021-01-13 21:00:00+0';
```

### Configurations

```sql
show statement_timeout;
set statement_timeout to 60000; commit;
```

## Tools

- pg_buffercache

    see what's occupying the shared buffer cache of your instance

- pg_prewarm

    load table data into either the operating system cache or the Postgres buffer cache

### Commands

[ABORT](https://www.postgresql.org/docs/current/sql-abort.html)--- abort the current transaction

[ALTER AGGREGATE](https://www.postgresql.org/docs/current/sql-alteraggregate.html)--- change the definition of an aggregate function

[ALTER COLLATION](https://www.postgresql.org/docs/current/sql-altercollation.html)--- change the definition of a collation

[ALTER CONVERSION](https://www.postgresql.org/docs/current/sql-alterconversion.html)--- change the definition of a conversion

[ALTER DATABASE](https://www.postgresql.org/docs/current/sql-alterdatabase.html)--- change a database

[ALTER DEFAULT PRIVILEGES](https://www.postgresql.org/docs/current/sql-alterdefaultprivileges.html)--- define default access privileges

[ALTER DOMAIN](https://www.postgresql.org/docs/current/sql-alterdomain.html)--- change the definition of a domain

[ALTER EVENT TRIGGER](https://www.postgresql.org/docs/current/sql-altereventtrigger.html)--- change the definition of an event trigger

[ALTER EXTENSION](https://www.postgresql.org/docs/current/sql-alterextension.html)--- change the definition of an extension

[ALTER FOREIGN DATA WRAPPER](https://www.postgresql.org/docs/current/sql-alterforeigndatawrapper.html)--- change the definition of a foreign-data wrapper

[ALTER FOREIGN TABLE](https://www.postgresql.org/docs/current/sql-alterforeigntable.html)--- change the definition of a foreign table

[ALTER FUNCTION](https://www.postgresql.org/docs/current/sql-alterfunction.html)--- change the definition of a function

[ALTER GROUP](https://www.postgresql.org/docs/current/sql-altergroup.html)--- change role name or membership

[ALTER INDEX](https://www.postgresql.org/docs/current/sql-alterindex.html)--- change the definition of an index

[ALTER LANGUAGE](https://www.postgresql.org/docs/current/sql-alterlanguage.html)--- change the definition of a procedural language

[ALTER LARGE OBJECT](https://www.postgresql.org/docs/current/sql-alterlargeobject.html)--- change the definition of a large object

[ALTER MATERIALIZED VIEW](https://www.postgresql.org/docs/current/sql-altermaterializedview.html)--- change the definition of a materialized view

[ALTER OPERATOR](https://www.postgresql.org/docs/current/sql-alteroperator.html)--- change the definition of an operator

[ALTER OPERATOR CLASS](https://www.postgresql.org/docs/current/sql-alteropclass.html)--- change the definition of an operator class

[ALTER OPERATOR FAMILY](https://www.postgresql.org/docs/current/sql-alteropfamily.html)--- change the definition of an operator family

[ALTER POLICY](https://www.postgresql.org/docs/current/sql-alterpolicy.html)--- change the definition of a row level security policy

[ALTER PROCEDURE](https://www.postgresql.org/docs/current/sql-alterprocedure.html)--- change the definition of a procedure

[ALTER PUBLICATION](https://www.postgresql.org/docs/current/sql-alterpublication.html)--- change the definition of a publication

[ALTER ROLE](https://www.postgresql.org/docs/current/sql-alterrole.html)--- change a database role

[ALTER ROUTINE](https://www.postgresql.org/docs/current/sql-alterroutine.html)--- change the definition of a routine

[ALTER RULE](https://www.postgresql.org/docs/current/sql-alterrule.html)--- change the definition of a rule

[ALTER SCHEMA](https://www.postgresql.org/docs/current/sql-alterschema.html)--- change the definition of a schema

[ALTER SEQUENCE](https://www.postgresql.org/docs/current/sql-altersequence.html)--- change the definition of a sequence generator

[ALTER SERVER](https://www.postgresql.org/docs/current/sql-alterserver.html)--- change the definition of a foreign server

[ALTER STATISTICS](https://www.postgresql.org/docs/current/sql-alterstatistics.html)--- change the definition of an extended statistics object

[ALTER SUBSCRIPTION](https://www.postgresql.org/docs/current/sql-altersubscription.html)--- change the definition of a subscription

[ALTER SYSTEM](https://www.postgresql.org/docs/current/sql-altersystem.html)--- change a server configuration parameter

[ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html)--- change the definition of a table

[ALTER TABLESPACE](https://www.postgresql.org/docs/current/sql-altertablespace.html)--- change the definition of a tablespace

[ALTER TEXT SEARCH CONFIGURATION](https://www.postgresql.org/docs/current/sql-altertsconfig.html)--- change the definition of a text search configuration

[ALTER TEXT SEARCH DICTIONARY](https://www.postgresql.org/docs/current/sql-altertsdictionary.html)--- change the definition of a text search dictionary

[ALTER TEXT SEARCH PARSER](https://www.postgresql.org/docs/current/sql-altertsparser.html)--- change the definition of a text search parser

[ALTER TEXT SEARCH TEMPLATE](https://www.postgresql.org/docs/current/sql-altertstemplate.html)--- change the definition of a text search template

[ALTER TRIGGER](https://www.postgresql.org/docs/current/sql-altertrigger.html)--- change the definition of a trigger

[ALTER TYPE](https://www.postgresql.org/docs/current/sql-altertype.html)--- change the definition of a type

[ALTER USER](https://www.postgresql.org/docs/current/sql-alteruser.html)--- change a database role

[ALTER USER MAPPING](https://www.postgresql.org/docs/current/sql-alterusermapping.html)--- change the definition of a user mapping

[ALTER VIEW](https://www.postgresql.org/docs/current/sql-alterview.html)--- change the definition of a view

[ANALYZE](https://www.postgresql.org/docs/current/sql-analyze.html)--- collect statistics about a database

[BEGIN](https://www.postgresql.org/docs/current/sql-begin.html)--- start a transaction block

[CALL](https://www.postgresql.org/docs/current/sql-call.html)--- invoke a procedure

[CHECKPOINT](https://www.postgresql.org/docs/current/sql-checkpoint.html)--- force a write-ahead log checkpoint

[CLOSE](https://www.postgresql.org/docs/current/sql-close.html)--- close a cursor

[CLUSTER](https://www.postgresql.org/docs/current/sql-cluster.html)--- cluster a table according to an index

[COMMENT](https://www.postgresql.org/docs/current/sql-comment.html)--- define or change the comment of an object

[COMMIT](https://www.postgresql.org/docs/current/sql-commit.html)--- commit the current transaction

[COMMIT PREPARED](https://www.postgresql.org/docs/current/sql-commit-prepared.html)--- commit a transaction that was earlier prepared for two-phase commit

[COPY](https://www.postgresql.org/docs/current/sql-copy.html)--- copy data between a file and a table

[CREATE ACCESS METHOD](https://www.postgresql.org/docs/current/sql-create-access-method.html)--- define a new access method

[CREATE AGGREGATE](https://www.postgresql.org/docs/current/sql-createaggregate.html)--- define a new aggregate function

[CREATE CAST](https://www.postgresql.org/docs/current/sql-createcast.html)--- define a new cast

[CREATE COLLATION](https://www.postgresql.org/docs/current/sql-createcollation.html)--- define a new collation

[CREATE CONVERSION](https://www.postgresql.org/docs/current/sql-createconversion.html)--- define a new encoding conversion

[CREATE DATABASE](https://www.postgresql.org/docs/current/sql-createdatabase.html)--- create a new database

[CREATE DOMAIN](https://www.postgresql.org/docs/current/sql-createdomain.html)--- define a new domain

[CREATE EVENT TRIGGER](https://www.postgresql.org/docs/current/sql-createeventtrigger.html)--- define a new event trigger

[CREATE EXTENSION](https://www.postgresql.org/docs/current/sql-createextension.html)--- install an extension

[CREATE FOREIGN DATA WRAPPER](https://www.postgresql.org/docs/current/sql-createforeigndatawrapper.html)--- define a new foreign-data wrapper

[CREATE FOREIGN TABLE](https://www.postgresql.org/docs/current/sql-createforeigntable.html)--- define a new foreign table

[CREATE FUNCTION](https://www.postgresql.org/docs/current/sql-createfunction.html)--- define a new function

[CREATE GROUP](https://www.postgresql.org/docs/current/sql-creategroup.html)--- define a new database role

[CREATE INDEX](https://www.postgresql.org/docs/current/sql-createindex.html)--- define a new index

[CREATE LANGUAGE](https://www.postgresql.org/docs/current/sql-createlanguage.html)--- define a new procedural language

[CREATE MATERIALIZED VIEW](https://www.postgresql.org/docs/current/sql-creatematerializedview.html)--- define a new materialized view

[CREATE OPERATOR](https://www.postgresql.org/docs/current/sql-createoperator.html)--- define a new operator

[CREATE OPERATOR CLASS](https://www.postgresql.org/docs/current/sql-createopclass.html)--- define a new operator class

[CREATE OPERATOR FAMILY](https://www.postgresql.org/docs/current/sql-createopfamily.html)--- define a new operator family

[CREATE POLICY](https://www.postgresql.org/docs/current/sql-createpolicy.html)--- define a new row level security policy for a table

[CREATE PROCEDURE](https://www.postgresql.org/docs/current/sql-createprocedure.html)--- define a new procedure

[CREATE PUBLICATION](https://www.postgresql.org/docs/current/sql-createpublication.html)--- define a new publication

[CREATE ROLE](https://www.postgresql.org/docs/current/sql-createrole.html)--- define a new database role

[CREATE RULE](https://www.postgresql.org/docs/current/sql-createrule.html)--- define a new rewrite rule

[CREATE SCHEMA](https://www.postgresql.org/docs/current/sql-createschema.html)--- define a new schema

[CREATE SEQUENCE](https://www.postgresql.org/docs/current/sql-createsequence.html)--- define a new sequence generator

[CREATE SERVER](https://www.postgresql.org/docs/current/sql-createserver.html)--- define a new foreign server

[CREATE STATISTICS](https://www.postgresql.org/docs/current/sql-createstatistics.html)--- define extended statistics

[CREATE SUBSCRIPTION](https://www.postgresql.org/docs/current/sql-createsubscription.html)--- define a new subscription

[CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html)--- define a new table

[CREATE TABLE AS](https://www.postgresql.org/docs/current/sql-createtableas.html)--- define a new table from the results of a query

[CREATE TABLESPACE](https://www.postgresql.org/docs/current/sql-createtablespace.html)--- define a new tablespace

[CREATE TEXT SEARCH CONFIGURATION](https://www.postgresql.org/docs/current/sql-createtsconfig.html)--- define a new text search configuration

[CREATE TEXT SEARCH DICTIONARY](https://www.postgresql.org/docs/current/sql-createtsdictionary.html)--- define a new text search dictionary

[CREATE TEXT SEARCH PARSER](https://www.postgresql.org/docs/current/sql-createtsparser.html)--- define a new text search parser

[CREATE TEXT SEARCH TEMPLATE](https://www.postgresql.org/docs/current/sql-createtstemplate.html)--- define a new text search template

[CREATE TRANSFORM](https://www.postgresql.org/docs/current/sql-createtransform.html)--- define a new transform

[CREATE TRIGGER](https://www.postgresql.org/docs/current/sql-createtrigger.html)--- define a new trigger

[CREATE TYPE](https://www.postgresql.org/docs/current/sql-createtype.html)--- define a new data type

[CREATE USER](https://www.postgresql.org/docs/current/sql-createuser.html)--- define a new database role

[CREATE USER MAPPING](https://www.postgresql.org/docs/current/sql-createusermapping.html)--- define a new mapping of a user to a foreign server

[CREATE VIEW](https://www.postgresql.org/docs/current/sql-createview.html)--- define a new view

[DEALLOCATE](https://www.postgresql.org/docs/current/sql-deallocate.html)--- deallocate a prepared statement

[DECLARE](https://www.postgresql.org/docs/current/sql-declare.html)--- define a cursor

[DELETE](https://www.postgresql.org/docs/current/sql-delete.html)--- delete rows of a table

[DISCARD](https://www.postgresql.org/docs/current/sql-discard.html)--- discard session state

[DO](https://www.postgresql.org/docs/current/sql-do.html)--- execute an anonymous code block

[DROP ACCESS METHOD](https://www.postgresql.org/docs/current/sql-drop-access-method.html)--- remove an access method

[DROP AGGREGATE](https://www.postgresql.org/docs/current/sql-dropaggregate.html)--- remove an aggregate function

[DROP CAST](https://www.postgresql.org/docs/current/sql-dropcast.html)--- remove a cast

[DROP COLLATION](https://www.postgresql.org/docs/current/sql-dropcollation.html)--- remove a collation

[DROP CONVERSION](https://www.postgresql.org/docs/current/sql-dropconversion.html)--- remove a conversion

[DROP DATABASE](https://www.postgresql.org/docs/current/sql-dropdatabase.html)--- remove a database

[DROP DOMAIN](https://www.postgresql.org/docs/current/sql-dropdomain.html)--- remove a domain

[DROP EVENT TRIGGER](https://www.postgresql.org/docs/current/sql-dropeventtrigger.html)--- remove an event trigger

[DROP EXTENSION](https://www.postgresql.org/docs/current/sql-dropextension.html)--- remove an extension

[DROP FOREIGN DATA WRAPPER](https://www.postgresql.org/docs/current/sql-dropforeigndatawrapper.html)--- remove a foreign-data wrapper

[DROP FOREIGN TABLE](https://www.postgresql.org/docs/current/sql-dropforeigntable.html)--- remove a foreign table

[DROP FUNCTION](https://www.postgresql.org/docs/current/sql-dropfunction.html)--- remove a function

[DROP GROUP](https://www.postgresql.org/docs/current/sql-dropgroup.html)--- remove a database role

[DROP INDEX](https://www.postgresql.org/docs/current/sql-dropindex.html)--- remove an index

[DROP LANGUAGE](https://www.postgresql.org/docs/current/sql-droplanguage.html)--- remove a procedural language

[DROP MATERIALIZED VIEW](https://www.postgresql.org/docs/current/sql-dropmaterializedview.html)--- remove a materialized view

[DROP OPERATOR](https://www.postgresql.org/docs/current/sql-dropoperator.html)--- remove an operator

[DROP OPERATOR CLASS](https://www.postgresql.org/docs/current/sql-dropopclass.html)--- remove an operator class

[DROP OPERATOR FAMILY](https://www.postgresql.org/docs/current/sql-dropopfamily.html)--- remove an operator family

[DROP OWNED](https://www.postgresql.org/docs/current/sql-drop-owned.html)--- remove database objects owned by a database role

[DROP POLICY](https://www.postgresql.org/docs/current/sql-droppolicy.html)--- remove a row level security policy from a table

[DROP PROCEDURE](https://www.postgresql.org/docs/current/sql-dropprocedure.html)--- remove a procedure

[DROP PUBLICATION](https://www.postgresql.org/docs/current/sql-droppublication.html)--- remove a publication

[DROP ROLE](https://www.postgresql.org/docs/current/sql-droprole.html)--- remove a database role

[DROP ROUTINE](https://www.postgresql.org/docs/current/sql-droproutine.html)--- remove a routine

[DROP RULE](https://www.postgresql.org/docs/current/sql-droprule.html)--- remove a rewrite rule

[DROP SCHEMA](https://www.postgresql.org/docs/current/sql-dropschema.html)--- remove a schema

[DROP SEQUENCE](https://www.postgresql.org/docs/current/sql-dropsequence.html)--- remove a sequence

[DROP SERVER](https://www.postgresql.org/docs/current/sql-dropserver.html)--- remove a foreign server descriptor

[DROP STATISTICS](https://www.postgresql.org/docs/current/sql-dropstatistics.html)--- remove extended statistics

[DROP SUBSCRIPTION](https://www.postgresql.org/docs/current/sql-dropsubscription.html)--- remove a subscription

[DROP TABLE](https://www.postgresql.org/docs/current/sql-droptable.html)--- remove a table

[DROP TABLESPACE](https://www.postgresql.org/docs/current/sql-droptablespace.html)--- remove a tablespace

[DROP TEXT SEARCH CONFIGURATION](https://www.postgresql.org/docs/current/sql-droptsconfig.html)--- remove a text search configuration

[DROP TEXT SEARCH DICTIONARY](https://www.postgresql.org/docs/current/sql-droptsdictionary.html)--- remove a text search dictionary

[DROP TEXT SEARCH PARSER](https://www.postgresql.org/docs/current/sql-droptsparser.html)--- remove a text search parser

[DROP TEXT SEARCH TEMPLATE](https://www.postgresql.org/docs/current/sql-droptstemplate.html)--- remove a text search template

[DROP TRANSFORM](https://www.postgresql.org/docs/current/sql-droptransform.html)--- remove a transform

[DROP TRIGGER](https://www.postgresql.org/docs/current/sql-droptrigger.html)--- remove a trigger

[DROP TYPE](https://www.postgresql.org/docs/current/sql-droptype.html)--- remove a data type

[DROP USER](https://www.postgresql.org/docs/current/sql-dropuser.html)--- remove a database role

[DROP USER MAPPING](https://www.postgresql.org/docs/current/sql-dropusermapping.html)--- remove a user mapping for a foreign server

[DROP VIEW](https://www.postgresql.org/docs/current/sql-dropview.html)--- remove a view

[END](https://www.postgresql.org/docs/current/sql-end.html)--- commit the current transaction

[EXECUTE](https://www.postgresql.org/docs/current/sql-execute.html)--- execute a prepared statement

[EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)--- show the execution plan of a statement

[FETCH](https://www.postgresql.org/docs/current/sql-fetch.html)--- retrieve rows from a query using a cursor

[GRANT](https://www.postgresql.org/docs/current/sql-grant.html)--- define access privileges

[IMPORT FOREIGN SCHEMA](https://www.postgresql.org/docs/current/sql-importforeignschema.html)--- import table definitions from a foreign server

[INSERT](https://www.postgresql.org/docs/current/sql-insert.html)--- create new rows in a table

[LISTEN](https://www.postgresql.org/docs/current/sql-listen.html)--- listen for a notification

[LOAD](https://www.postgresql.org/docs/current/sql-load.html)--- load a shared library file

[LOCK](https://www.postgresql.org/docs/current/sql-lock.html)--- lock a table

[MOVE](https://www.postgresql.org/docs/current/sql-move.html)--- position a cursor

[NOTIFY](https://www.postgresql.org/docs/current/sql-notify.html)--- generate a notification

[PREPARE](https://www.postgresql.org/docs/current/sql-prepare.html)--- prepare a statement for execution

[PREPARE TRANSACTION](https://www.postgresql.org/docs/current/sql-prepare-transaction.html)--- prepare the current transaction for two-phase commit

[REASSIGN OWNED](https://www.postgresql.org/docs/current/sql-reassign-owned.html)--- change the ownership of database objects owned by a database role

[REFRESH MATERIALIZED VIEW](https://www.postgresql.org/docs/current/sql-refreshmaterializedview.html)--- replace the contents of a materialized view

[REINDEX](https://www.postgresql.org/docs/current/sql-reindex.html)--- rebuild indexes

[RELEASE SAVEPOINT](https://www.postgresql.org/docs/current/sql-release-savepoint.html)--- destroy a previously defined savepoint

[RESET](https://www.postgresql.org/docs/current/sql-reset.html)--- restore the value of a run-time parameter to the default value

[REVOKE](https://www.postgresql.org/docs/current/sql-revoke.html)--- remove access privileges

[ROLLBACK](https://www.postgresql.org/docs/current/sql-rollback.html)--- abort the current transaction

[ROLLBACK PREPARED](https://www.postgresql.org/docs/current/sql-rollback-prepared.html)--- cancel a transaction that was earlier prepared for two-phase commit

[ROLLBACK TO SAVEPOINT](https://www.postgresql.org/docs/current/sql-rollback-to.html)--- roll back to a savepoint

## [SAVEPOINT](https://www.postgresql.org/docs/current/sql-savepoint.html)--- define a new savepoint within the current transaction

[SECURITY LABEL](https://www.postgresql.org/docs/current/sql-security-label.html)--- define or change a security label applied to an object

[SELECT](https://www.postgresql.org/docs/current/sql-select.html)--- retrieve rows from a table or view

[SELECT INTO](https://www.postgresql.org/docs/current/sql-selectinto.html)--- define a new table from the results of a query

[SET](https://www.postgresql.org/docs/current/sql-set.html)--- change a run-time parameter

[SET CONSTRAINTS](https://www.postgresql.org/docs/current/sql-set-constraints.html)--- set constraint check timing for the current transaction

[SET ROLE](https://www.postgresql.org/docs/current/sql-set-role.html)--- set the current user identifier of the current session

[SET SESSION AUTHORIZATION](https://www.postgresql.org/docs/current/sql-set-session-authorization.html)--- set the session user identifier and the current user identifier of the current session

[SET TRANSACTION](https://www.postgresql.org/docs/current/sql-set-transaction.html)--- set the characteristics of the current transaction

[SHOW](https://www.postgresql.org/docs/current/sql-show.html)--- show the value of a run-time parameter

[START TRANSACTION](https://www.postgresql.org/docs/current/sql-start-transaction.html)--- start a transaction block

[TRUNCATE](https://www.postgresql.org/docs/current/sql-truncate.html)--- empty a table or set of tables

[UNLISTEN](https://www.postgresql.org/docs/current/sql-unlisten.html)--- stop listening for a notification

[UPDATE](https://www.postgresql.org/docs/current/sql-update.html)--- update rows of a table

[VACUUM](https://www.postgresql.org/docs/current/sql-vacuum.html)--- garbage-collect and optionally analyze a database

[VALUES](https://www.postgresql.org/docs/current/sql-values.html)--- compute a set of rows

<https://www.postgresql.org/docs/current/sql-commands.html>

## pg_dumpall

pg_dumpall dumps all databases in given PostgreSQL installation (cluster), and does it to plain text file. Everything goes there. Additionally, it dumpsglobalthings -- roles and tablespaces, which cannot be dumped by pg_dump.

The major benefit of pg_dumpall is that it's single command, and you get results.

There is huge number of drawbacks though:

- dump is large, because it's uncompressed
- dumping is slow, because it's done sequentially, with single worker
- it's hard to restore just parts of dump

## pg_dump

pg_dump, on the other hand, can't dump globals, and can dump only one database at a time. But it can use four dump formats:

- plain
- custom
- directory
- tar

Plain is just plain text format, just like pg_dumpall dumps. You can load it with psql, and extracting parts can be complicated if dump is large.

All other formats (custom, directory, and tar) are restored using pg_restore program.

## Adding hstore in database

```sql
psql -U postgres template1
create extension hstore;
q
```

Cannot use `--keepdb` after this, since new db is to be created

<https://www.depesz.com/2019/12/10/how-to-effectively-dump-postgresql-databases>
