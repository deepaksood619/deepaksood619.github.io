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
```

### Reclaiming Space

[Summary Tables in MySQL](https://mysql.rjweb.org/doc.php/summarytables)

## Huge Deletes

- MyISAM will lock the table during the entire operation, thereby nothing else can be done with the table.
- InnoDB won't lock the table, but it will chew up a lot of resources, leading to sluggishness.
- InnoDB has to write the undo information to its transaction logs; this significantly increases the I/O required.
- Replication, being asynchronous, will effectively be delayed (on Replicas) while the DELETE is running.

[MySQL Big DELETEs](https://mysql.rjweb.org/doc.php/deletebig)

[query optimization - Deleting millions of rows in MySQL - Stack Overflow](https://stackoverflow.com/questions/1318972/deleting-millions-of-rows-in-mysql)