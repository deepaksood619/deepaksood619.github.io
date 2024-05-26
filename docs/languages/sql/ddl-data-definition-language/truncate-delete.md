# Truncate vs Delete

| Truncate                                     | Delete                                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| We can't Rollback after performing Truncate. | We can Rollback after delete.                                                              |
| Truncate reset identity of table.            | Delete does not reset identity of table.                                                   |
| It locks the entire table.                   | It locks the table row.                                                                    |
| Its DDL(Data Definition Language) command.   | Its DML(Data Manipulation Language) command                                                |
| We can't use WHERE clause with it.           | We can use WHERE to filter data to delete.                                                 |
| Trigger is not fired while truncate.         | Trigger is fired.                                                                          |
| Syntax - TRUNCATE TABLE table_name           | Syntax - DELETE FROM table_name; DELETE FROM table_name WHERE example_column_id IN (1,2,3) |

### Truncate

**TRUNCATE** is a DDL command which removes the contents of the table while leaving the structure in place. Removes all rows from the given table.

Example:

```
truncate table marketing.emailcampaign

BEGIN TRAN
TRUNCATE TABLE tranTest
SELECT * FROM tranTest
ROLLBACK
SELECT * FROM tranTest
```

### Delete

**DELETE** is a DML command which removes rows given a WHERE clause

Example:

```
delete from
  marketing.emailcampaign
where
  month = 'January'

BEGIN TRAN
DELETE FROM tranTest
SELECT * FROM tranTest
ROLLBACK
SELECT * FROM tranTest


ALTER TABLE tablename AUTO_INCREMENT = 1
```

### Reclaiming Space

[Summary Tables in MySQL](https://mysql.rjweb.org/doc.php/summarytables)

### Delete Performance

With RDS MySQL Community 8.0.36 - db.m5.8xlarge

Isolation level - REPEATABLE-READ

- Selects are not blocked
- ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction (for any update or delete in that range)
- inserts are not blocked
- delete for out or range is not blocked
- If query cancelled, nothing is deleted, and everything is rolled back

| Rows Deleted | Time (sec) | Range       | Difference |
| ------------ | ---------- | ----------- | ---------- |
| 62,781       | 6.287      | 314,619,930 | 100,000    |
| 100,639      | 8.79       | 314,819,930 | 200,000    |
| 463,387      | 41.398     | 315,819,930 | 1,000,000  |
| 1,031,886    | 99.035     | 317,919,930 | 2,000,000  |
| 2,273,353    | 205.871    | 321,919,930 | 4,000,000  |
| 42,000,000   | 4096       | 391,919,930 | 70,000,000 |
| 6,352,106    | 676.205    | 401,919,930 | 10,000,000 |

## Huge Deletes

- MyISAM will lock the table during the entire operation, thereby nothing else can be done with the table.
- InnoDB won't lock the table, but it will chew up a lot of resources, leading to sluggishness.
- InnoDB has to write the undo information to its transaction logs; this significantly increases the I/O required.
- Replication, being asynchronous, will effectively be delayed (on Replicas) while the DELETE is running.

[MySQL Big DELETEs](https://mysql.rjweb.org/doc.php/deletebig)

[query optimization - Deleting millions of rows in MySQL - Stack Overflow](https://stackoverflow.com/questions/1318972/deleting-millions-of-rows-in-mysql)

### Batch Deletion

Perform deletions in smaller batches to avoid long-running transactions and potential locks.

```sql
-- Example: Delete 10,000 rows at a time
SET @batch_size = 10000;

REPEAT
  DELETE FROM your_table
  WHERE condition
  LIMIT @batch_size;
UNTIL ROW_COUNT() = 0
END REPEAT;

```

### Using DELETE with LIMIT

This approach is similar to batch deletions but ensures that each batch is explicitly controlled.

```sql
-- Delete in batches of 10,000 rows
DO
BEGIN
  DECLARE rows_affected INT DEFAULT 1;

  WHILE rows_affected > 0 DO
    DELETE FROM your_table
    WHERE condition
    LIMIT 10000;

    SET rows_affected = ROW_COUNT();
  END WHILE;
END;
```

### pt-archiver (Percona Toolkit)

```bash
pt-archiver --source h=your_host,D=your_db,t=your_table --where "condition" --purge --limit 1000 --commit-each
```

### Creating a New Table

Create a new table with only the rows you want to keep, then swap the tables.

```sql
CREATE TABLE new_table AS
SELECT * FROM your_table
WHERE NOT condition;

RENAME TABLE your_table TO old_table, new_table TO your_table;

DROP TABLE old_table;
```

### Disable Foreign Key Checks

```sql
SET FOREIGN_KEY_CHECKS = 0;

-- Perform deletion operations

SET FOREIGN_KEY_CHECKS = 1;
```

### Using Stored Procedures

```sql
DELIMITER $$

CREATE PROCEDURE BatchDelete()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

  REPEAT
    DELETE FROM your_table
    WHERE condition
    LIMIT 10000;

    IF ROW_COUNT() = 0 THEN
      SET done = 1;
    END IF;
  UNTIL done END REPEAT;
END $$

DELIMITER ;

CALL BatchDelete();
```

### Using a Temporary Table

Copy the rows to keep into a temporary table, truncate the original table, and then reinsert the rows.

```sql
CREATE TEMPORARY TABLE temp_table AS
SELECT * FROM your_table
WHERE NOT condition;

TRUNCATE TABLE your_table;

INSERT INTO your_table
SELECT * FROM temp_table;

DROP TEMPORARY TABLE temp_table;
```

### MySQL Event Scheduler

Schedule batch deletions using the MySQL event scheduler.

```sql
CREATE EVENT batch_delete
ON SCHEDULE EVERY 1 MINUTE
DO
  DELETE FROM your_table
  WHERE condition
  LIMIT 10000;
```
