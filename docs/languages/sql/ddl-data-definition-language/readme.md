# DDL - Data Definition Language

## DDL (Data Definition Language)

- **Create**
- **Alter**
- **Drop**
- **Rename**
- **Truncate**
- **Comment**

```sql
ALTER USER
 ALTER USER 'lms_p2021020917'@'%' IDENTIFIED BY '00IN0hBGVZ7ABMFS';
 FLUSH PRIVILEGES;

CREATE DATABASE
 CREATE DATABASE database_name

CREATE INDEX
 CREATE INDEX index_name
 ON table_name (column_name)
 or
 CREATE UNIQUE INDEX index_name
 ON table_name (column_name)
  CREATE UNIQUE INDEX index_name
  ON table_name(index_column_1,index_column_2,...);

 ALTER TABLE `installment_fip` ADD INDEX `installment_fip_idx_inst_custom_is_del_inst_inst` (`inst_number`,`customer_facing`,`is_delete`,`inst_status`,`inst_date`);
 ALTER TABLE `installment_fip` ADD INDEX `installment_fip_idx_inst_custom_is_del_inst_emi_id` (`inst_number`,`customer_facing`,`is_delete`,`inst_status`,`emi_status_id`);
 ALTER TABLE `st_comment` ADD INDEX `st_comment_idx_status_status_loan_id_id` (`status_type_id`,`status_id`,`loan_id`,`id`);
 ALTER TABLE `st_loan` ADD INDEX `st_loan_idx_customer_id_product_code` (`customer_id`,`product_code`);
 ALTER TABLE `user_logins` ADD INDEX `user_logins_idx_publish_dept` (`publish`,`dept`);

 Show Unused indexes
  select * from sys.schema_unused_indexes;

  https://www.eversql.com/how-to-find-unused-indexes-in-a-mysql-database/

CREATE VIEW
 CREATE VIEW view_name AS
 SELECT column_name(s)
 FROM table_name
 WHERE condition

DROP DATABASE
 DROP DATABASE database_name

DROP INDEX
 DROP INDEX table_name.index_name (SQL Server)
 DROP INDEX index_name ON table_name (MS Access)
 DROP INDEX index_name (DB2/Oracle)
 ALTER TABLE table_name
 DROP INDEX index_name on table_name (MySQL)

DROP TABLE
 DROP TABLE table_name

DROP COLUMN
 ALTER TABLE st_quickwallet_payment DROP COLUMN payment_notes;

TRUNCATE TABLE
 TRUNCATE TABLE table_name

 The TRUNCATE TABLE statement removes all the rows from a table more quickly than a DELETE. Logically, TRUNCATE TABLE is similar to the DELETE statement with no WHERE clause.

 The TRUNCATE TABLE statement removes all the rows from a table, but the table structure and its columns, constraints, indexes, and so on remain intact.

ALTER SCHEMA
 ALTER SCHEMA NewSchema
TRANSFER OldSchema.TableName;
```
