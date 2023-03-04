# DCL - Data Control Language

## Data Control Language (DCL) / Data Management Language (DML)

show grants for 'raghwendra_sarkar';

- Grant

```sql
GRANT SELECT, SHOW VIEW
ON mydatabase.*
TO myreaduser@myhost IDENTIFIED BY 'somepassword';
FLUSH PRIVILEGES;

CREATE USER 'app_kollectai'@'%' IDENTIFIED BY '7dd69a6ca8854def9bf99b71';

FLUSH PRIVILEGES;

GRANT SELECT,UPDATE,INSERT ON sttash_website_LIVE.temp_invoice TO 'nauman_mansuri'@'%';

GRANT SELECT on ts_web_contact_us TO ashish_kumar;

Note that the FLUSH PRIVILEGES command resets MySQLs privileges and you won’t be able to use the new user grants until it is run.

Now we can log in as the new user and run show tables to see that it only has access to the trips table and not the other two. This new user simply doesn’t know the other tables even exist.

https://chartio.com/resources/tutorials/mysql-table-level-permissions/

GRANT LOAD FROM S3 ON *.* TO 'deepak_sood'@'%'
GRANT SELECT,SHOW VIEW,execute ON sttash_website_LIVE.* TO 'deepak_sood'@'%'

GRANT SELECT,UPDATE,INSERT,SHOW VIEW ON sttash_website_LIVE.st_collection_lead_assign TO 'test'@'%';
GRANT SELECT ON sttash_website_LIVE.elev8_offer_tmp_clicked TO 'test'@'%';
```

- Revoke

## Postgres Grant Command

```sql
 GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { [ TABLE ] table_name [, ...]
         | ALL TABLES IN SCHEMA schema_name [, ...] }
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { { SELECT | INSERT | UPDATE | REFERENCES } ( column_name [, ...] )
    [, ...] | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
    ON [ TABLE ] table_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { { USAGE | SELECT | UPDATE }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { SEQUENCE sequence_name [, ...]
         | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { { CREATE | CONNECT | TEMPORARY | TEMP } [, ...] | ALL [ PRIVILEGES ] }
    ON DATABASE database_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON DOMAIN domain_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN DATA WRAPPER fdw_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN SERVER server_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { EXECUTE | ALL [ PRIVILEGES ] }
    ON { { FUNCTION | PROCEDURE | ROUTINE } routine_name [ ( [ [ argmode ] [ arg_name ] arg_type [, ...] ] ) ] [, ...]
         | ALL { FUNCTIONS | PROCEDURES | ROUTINES } IN SCHEMA schema_name [, ...] }
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON LANGUAGE lang_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
    ON LARGE OBJECT loid [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { { CREATE | USAGE } [, ...] | ALL [ PRIVILEGES ] }
    ON SCHEMA schema_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { CREATE | ALL [ PRIVILEGES ] }
    ON TABLESPACE tablespace_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON TYPE type_name [, ...]
    TO role_specification [, ...] [ WITH GRANT OPTION ]
 where role_specification can be:
 [ GROUP ] role_name
  | PUBLIC
  | CURRENT_USER
  | SESSION_USER
 GRANT role_name [, ...] TO role_name [, ...] [ WITH ADMIN OPTION ]
```

The GRANT command has two basic variants: one that grants privileges on a database object (table, column, view, foreign table, sequence, database, foreign-data wrapper, foreign server, function, procedure, procedural language, schema, or tablespace), and one that grants membership in a role. These variants are similar in many ways, but they are different enough to be described separately.

- GRANT on Database Objects
- GRANT on Roles

<https://www.postgresql.org/docs/current/sql-grant.html>

## Processes

```sql
show full processlist

SELECT * FROM INFORMATION_SCHEMA.PROCESSLIST
```

Mysql show processlist lists many processes sleep and info = null?

Those are idle connections being held by a client. You should make sure that whatever client library you are using (JDBC, ...) is configured to not keep unused connections open so long, or that your # clients * max # of connections isn't too big.

```sql
# kill all processes from a single user
select concat('KILL ',id,';') from information_schema.processlist where user='user';

kill <process_id>

select * from sys.user_summary_by_file_io;

select * from information_schema.innoDB_locks;
select * from information_schema.innodb_lock_waits;
```
