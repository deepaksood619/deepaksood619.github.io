# DML - Data Manipulation Language

DML (Data Manipulation Language) commands [need to be](http://www.dba-oracle.com/t_dml_statements.htm) **commited/rolled back**

```sql
-- online query without locking the tables during update
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
```

## DML

- Insert
- Update
- Delete
- Merge
- Call
- Explain Plain
- Lock Table

### DELETE

DELETE statements are used to remove rows from a table.

```sql
DELETE FROM table_name WHERE some_column = some_value;
```

Always better to use between than comparison operator, so that lock is not taken on whole table, but only range locks are taken.

```sql
-- good
DELETE FROM orders WHERE order_id betwen 0 and 100;

-- bad
DELETE FROM orders WHERE order_id < 100;
```

### INSERT INTO

```sql
INSERT INTO table_name
VALUES (value1, value2, value3,....)
or
INSERT INTO table_name
(column1, column2, column3,...)
VALUES (value1, value2, value3,....)

INSERT INTO table_name (column_1, column_2, column_3) VALUES (value_1, 'value_2', value_3);
INSERT statements are used to add a new row to a table.

INSERT INTO cron_migrate_data (`table_name`, `start_date`, `end_date`, `s3_file_path`) VALUES ('equifax_raw_response', '2019-10-01 00:00:00', '2019-10-31 23:59:59', 's3-ap-south-1://stashfin-migration-data/rds/');

-- copy whole table to new table
INSERT INTO table_name_backup SELECT * FROM table_name;
```

### Bulk Insert / Extended Inserts

```sql
INSERT IGNORE INTO userDeviceApps (`customer_id`, `app_name`, `package_name`, `version_name`, `version_code`,
`installation_date`, `last_used_date`, `create_date`, `device_id`, `hash_key`)
VALUES ('2322675', 'test', 'test', '0.0.0', '0',
'0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-01-06 18:13:15', 'xxx', '2322675,test4'), ('2322675', 'test', 'test', '0.0.0', '0',
'0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-01-06 18:13:15', 'xxx', '2322675,test5'), ('2322675', 'test', 'test', '0.0.0', '0',
'0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-01-06 18:13:15', 'xxx', '2322675,test7');
```

### Insert vs Insert Ignore

```sql
# avg - 0.074 sec
# gives error
INSERT INTO userDeviceApps (`customer_id`, `app_name`, `package_name`, `version_name`, `version_code`,
`installation_date`, `last_used_date`, `create_date`, `device_id`, `hash_key`)
VALUES ('2322675', 'test', 'test', '0.0.0', '0',
'0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-01-06 18:13:15', 'xxx', '2322675,test');

# avg - 0.400 sec
# is 5.4 times slower
# gives warning
INSERT IGNORE INTO userDeviceApps (`customer_id`, `app_name`, `package_name`, `version_name`, `version_code`,
`installation_date`, `last_used_date`, `create_date`, `device_id`, `hash_key`)
VALUES ('2322675', 'test', 'test', '0.0.0', '0',
'0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-01-06 18:13:15', 'xxx', '2322675,test');
```

- Insert ingore consumes autoincrement id and can put holes in between rows
    - https://stackoverflow.com/questions/5655396/why-insert-ignore-increments-the-auto-increment-primary-key
    - [**https://www.percona.com/blog/2011/11/29/avoiding-auto-increment-holes-on-innodb-with-insert-ignore/**](https://www.percona.com/blog/2011/11/29/avoiding-auto-increment-holes-on-innodb-with-insert-ignore/)
    - innodb_autoinc_lock_mode = 0
    - https://dev.mysql.com/doc/refman/8.0/en/innodb-auto-increment-handling.html

- Alternatives

```sql
INSERT INTO userDeviceApps (`customer_id`, `app_name`, `package_name`, `version_name`, `version_code`,
`installation_date`, `last_used_date`, `create_date`, `device_id`, `hash_key`)
SELECT '2322675', 'test3', 'test2', '0.0.0', '0',
'0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-01-06 18:13:15', 'xxx', '2322675,test3'
FROM DUAL
WHERE NOT EXISTS(
    SELECT 1
    FROM userDeviceApps
    WHERE hash_key = '2322675,test3'
)
LIMIT 1;
```

https://ypereirareis.github.io/blog/2016/03/22/mysql-insert-ignore-alternatives

### Load

```sql
LOAD DATA INFILE 'st_bank_model_features_dedupe.csv'
INTO TABLE st_bank_model_features_dedupe
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
SET create_date = STR_TO_DATE(@create_date, '%d/%m/%Y %H:%i');
```

### UPDATE

```sql
UPDATE table_name
SET some_column = some_value
WHERE some_column = some_value;
-- UPDATE statments allow you to edit rows in a table.

UPDATE`table_name`
 SET`field_name` =replace(same_field_name, 'unwanted_text', 'wanted_text')
```

### UPSERT

An upsert is a smart operation which turns into INSERT or UPDATE whichever is applicable. Also, it is an atomic transaction, means complete in a single step. Let's understand -- If a record is new, then UPSERT triggers an INSERT. But, if it already exists, then UPSERT performs an UPDATE.

MySQL provides the ON DUPLICATE KEY UPDATE option to INSERT, which accomplishes this behavior. However, there are other statements like INSERT IGNORE or REPLACE, which can also fulfill this objective.

We can imitate MySQL UPSERT in one of these three ways:

- [UPSERT using INSERT IGNORE](https://www.techbeamers.com/mysql-upsert/#upsert-using-insert)

  When we use INSERT IGNORE for adding a record, it gets through even if there are errors in performing INSERT. So, if the target table already has a row with a matching UNIQUE or PRIMARY key, then INSERT REPLACE would suppress all possible errors.

  Moreover, it skips the INSERT operation altogether. Such kind of statement is useful when we need to add a large number of records in one go. And, the table may already have a part of that data inside.

- [UPSERT using REPLACE](https://www.techbeamers.com/mysql-upsert/#upsert-using-replace)

  There come situations when we have to replace some rows even if INSERT could fail due to duplicate values of the primary key field. Hence, we should use the REPLACE statement for such cases.

  However, if we opt to use REPLACE, then it could result in one of the following outcomes:

    - If we don't face any error, then REPLACE would behave as regular INSERT command.
    - If a duplicate record exists, then REPLACE would first delete it and perform the INSERT subsequently.

- **[UPSERT using INSERT with ON DUPLICATE KEY UPDATE](https://www.techbeamers.com/mysql-upsert/#upsert-using-update) (UPSERT)**

  It is non-destructive, means it doesn't have to drop the duplicate row. Instead, it issues an UPDATE whenever it finds a matching record having the same UNIQUE or PRIMARY KEY value.

https://www.techbeamers.com/mysql-upsert

https://www.javatpoint.com/mysql-upsert

## Explain

[EXPLAIN](https://dev.mysql.com/doc/refman/5.7/en/explain.html) works with [SELECT](https://dev.mysql.com/doc/refman/5.7/en/select.html), [DELETE](https://dev.mysql.com/doc/refman/5.7/en/delete.html), [INSERT](https://dev.mysql.com/doc/refman/5.7/en/insert.html), [REPLACE](https://dev.mysql.com/doc/refman/5.7/en/replace.html), and [UPDATE](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements.

EXPLAIN EXTENDED

- The indexes it's considering using.
- The order in which it plans to join tables.
- The indexes it actually used.
- How many rows will be accessed.
- Whether it used a filesort.

### Output

- **Possible keys:** shows the keys that can be used by MySQL to find rows from the table, if this is NULL it indicates no useful indexes could be applied.
- **Key:** indicates the actual index that MySQL used.
- **Rows:** shows the number of records that were examined to produce the output. This is especially relevant during joins.
- **Key_len:** longest length of the key that was used (aka which parts of the composite index are being used) use this to tell how many columns were used from it.
- **Ref:** which columns, or constants are compared to the index in order to select rows.

#### Extra

  What you would like to see in Extra:

- Using index - MySQL was able to use a covering index
- Distinct - MySQL stops searching after it found the first matching row
- Using index condition

What you don't want to see in Extra:

- Using file sort - as said extra sorting was required
- Using temporary - a temp table was needed
- Using join buffer - tables processed in large batches of rows, instead of index lookups
- Using where - after fetching rows from storage engine, extra filtering needs to happen for each row. However it's OK if a very small number of rows were returned.

https://www.sitepoint.com/using-explain-to-write-better-mysql-queries

### Explain Analyze

In MySQL 8.0.18, `EXPLAIN ANALYZE` was introduced, a new concept built on top of the regular `EXPLAIN` query plan inspection tool. In addition to the query plan and estimated costs, which a normal `EXPLAIN` will print, `EXPLAIN ANALYZE` also prints the _actual_ costs of individual iterators in the execution plan.

**Warning** - `EXPLAIN ANALYZE` actually runs the query, so if you don’t want to run the query against your live database, do not use `EXPLAIN ANALYZE`.

[How to read MySQL EXPLAINs](https://planetscale.com/blog/how-read-mysql-explains)

## Lock Tables

```sql
START TRANSACTION;
lock table bureau_account_list WRITE;
delete from bureau_account_list where id = 0;
ALTER TABLE bureau_account_list
CHANGE COLUMN id id BIGINT(20) NOT NULL AUTO_INCREMENT ;

ALTER TABLE bureau_account_list AUTO_INCREMENT = 400000000;

ALTER TABLE sttash_website_LIVE.bureau_account_list
CHANGE COLUMN create_date create_date DATETIME NULL DEFAULT CURRENT_TIMESTAMP ;

UNLOCK TABLES;

COMMIT;
```
