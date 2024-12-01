# Stored Procedure

A **stored procedure** (also termed **proc, storp, sproc, StoPro, StoredProc, StoreProc, sp, or SP**) is a [subroutine](https://en.wikipedia.org/wiki/Subroutine) available to applications that access a [relational database management system](https://en.wikipedia.org/wiki/Relational_database_management_system)(RDBMS). Such procedures are stored in the database [data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).

Uses for stored procedures include [data-validation](https://en.wikipedia.org/wiki/Data_validation)(integrated into the database) or [access-control](https://en.wikipedia.org/wiki/Access_control) mechanisms. Furthermore, stored procedures can consolidate and centralize logic that was originally implemented in applications. To save time and memory, extensive or complex processing that requires execution of several [SQL](https://en.wikipedia.org/wiki/SQL) statements can be saved into stored procedures, and all applications call the procedures. One can use nested stored procedures by executing one stored procedure from within another.

Stored procedures may return [result sets](https://en.wikipedia.org/wiki/Result_set), i.e., the results of aSELECTstatement. Such result sets can be processed using [cursors](https://en.wikipedia.org/wiki/Cursor_(databases)), by other stored procedures, by associating a result-set locator, or by applications. Stored procedures may also contain declared variables for processing data and cursors that allow it to loop through multiple rows in a table. Stored-procedure flow-control statements typically includeIF,WHILE,LOOP,REPEAT, andCASEstatements, and more. Stored procedures can receive variables, return results or modify variables and return them, depending on how and where the variable is declared.

```sql
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;

EXEC procedure_name;
```

## Advantages of using stored procedures

- **A stored procedure allows modular programming -** You can create the procedure once, store it in the database, and call it any number of times in your program.
- **A stored procedure allows faster execution -** If the operation requires a large amount of SQL code that is performed repetitively, stored procedures can be faster. They are parsed and optimized when they are first executed, and a compiled version of the stored procedure remains in a memory cache for later use. This means the stored procedure does not need to be reparsed and reoptimized with each use, resulting in much faster execution times.
- **A stored procedure can reduce network traffic -** An operation requiring hundreds of lines of Transact-SQL code can be performed through a single statement that executes the code in a procedure, rather than by sending hundreds of lines of code over the network.
- **Stored procedures provide better security to your data -** Users can be granted permission to execute a stored procedure even if they do not have permission to execute the procedure's statements directly.

## Types of stored procedures

- **System-stored procedures** are stored in the master database and these start with asp_prefix. These procedures can be used to perform a variety of tasks to support SQL Server functions for external application calls in the system tables
	- Example: sp_helptext [StoredProcedure_Name]
- **User-defined stored procedures** are usually stored in a user database and are typically designed to complete the tasks in the user database. While coding these procedures don't use the `sp_prefix` because if we use the `sp_prefix` first, it will check the master database, and then it comes to user defined database.
- **Extended stored procedures** are the procedures that call functions from DLL files. Nowadays, extended stored procedures are deprecated for the reason it would be better to avoid using extended stored procedures.

https://en.wikipedia.org/wiki/Stored_procedure

## Differences

- A **stored routine** is either a procedure or a function.
- A **procedure** is invoked using a CALL statement and can only pass back values using output variables.
- A **function** can be called from inside a statement just like any other function and can return a scalar value.

### Stored Procedures

- Procedure can return zero or n values
- Procedures can have input/output parameters for it
- Procedure allows select as well as DML statement in it
- A stored procedure may have arguments that areIN,OUT, orINOUT.
- A procedure can't be called from DML statements.
- Procedures are parsed and compiled.
- Procedures are mainly used to process the tasks.
- Procedure doesn't return value.procedure can return more than one values using OUT parameter
- They are stored in compiled format in the database where as Functions are compiled and executed run time.
- A procedure is used to execute business logic.
- Stored procedure returns always integer value by default zero.
- Stored procedure has the security and reduces the network traffic.
- It create variable table and but can't return variable table.
- Print command used.
- It execute Dynamic SQL.

### Functions

- function can return one value which is mandatory
- functions can have only input parameters
- function allows only select statement in it
- Functions may only haveINarguments.
- DML operations performs in functions.
- functions always return a single value to the caller.
- Functions are mainly used to compute values.
- A function is used to compute a value.
- It returns type could be scalar or table or table values.
- It create variable table and can return variable table.
- Print command cant't use.
- It can't execute dynamic sql.

https://www.mysqltutorial.org/mysql-error-handling-in-stored-procedures

[mysql - What's the differences between stored procedures, functions and routines? - Stack Overflow](https://stackoverflow.com/questions/2680745/whats-the-differences-between-stored-procedures-functions-and-routines)

## Access

ForMySQL 8, connect your database viaWorkbench, go toAdministration -> User and Privileges, and select the user account you want to modify, then switch to "Administrative Roles", tick "SELECT" on right panel (Global Privileges), Click 'Apply' and done.

## Queries

### Stored Procedure - CopyUsersLogInBatches

```sql
DELIMITER $$

CREATE PROCEDURE CopyUsersLogInBatches()
BEGIN
    DECLARE batch_size INT DEFAULT 1000000;
    DECLARE start_id INT;
    DECLARE max_id INT;

    -- Initialize start_id and max_id
    SELECT MIN(id) INTO start_id FROM users_log;
    SELECT MAX(id) INTO max_id FROM users_log;

    -- Loop to copy data in batches
    WHILE start_id <= max_id DO
        INSERT INTO users_log_backup_27_nov_2024
        SELECT *
        FROM users_log
        WHERE id BETWEEN start_id AND start_id + batch_size - 1;

        -- Update the start_id for the next batch
        SET start_id = start_id + batch_size;
    END WHILE;
END$$

DELIMITER ;
```

### Stored Procedure - DeleteUsersLogInBatches

```sql
DELIMITER $$

CREATE PROCEDURE DeleteUsersLogInBatches()
BEGIN
    DECLARE batch_size INT DEFAULT 100000; -- Number of rows to delete in each batch
    DECLARE start_id INT DEFAULT 0; -- Starting ID for the first batch
    DECLARE end_id INT DEFAULT 14900000; -- Target maximum ID for deletion

    -- Loop to delete data in batches
    WHILE start_id < end_id DO
        -- Delete rows in the current batch
        DELETE FROM users_log
        WHERE id BETWEEN start_id AND start_id + batch_size - 1;

        -- Update the start_id for the next batch
        SET start_id = start_id + batch_size;
    END WHILE;
END$$

DELIMITER ;
```

### Stored Procedure with Progress and Total Rows Deleted - DeleteOldSessionsInBatches

```sql
DELIMITER $$

CREATE PROCEDURE DeleteOldSessionsInBatches()
BEGIN
    DECLARE batch_size INT DEFAULT 10000; -- Number of rows to delete in each batch
    DECLARE rows_deleted INT DEFAULT 0; -- Counter for rows deleted in each iteration
    DECLARE total_deleted INT DEFAULT 0; -- Total rows deleted across all batches

    -- Loop to delete data in batches
    REPEAT
        -- Delete a batch of rows
        DELETE FROM entrancecorner.django_session
        WHERE expire_date BETWEEN NOW() - INTERVAL 180 DAY AND NOW() - INTERVAL 165 DAY
        LIMIT batch_size;

        -- Get the number of rows deleted in this batch
        SET rows_deleted = ROW_COUNT();

        -- Update the total count of rows deleted
        SET total_deleted = total_deleted + rows_deleted;

        -- Output progress message
        SELECT CONCAT('Deleted ', rows_deleted, ' rows in this batch. Total so far: ', total_deleted) AS Progress;

    UNTIL rows_deleted = 0 -- Exit when no more rows match the criteria
    END REPEAT;

    -- Final message with total rows deleted
    SELECT CONCAT('Deletion process completed. Total rows deleted: ', total_deleted) AS FinalMessage;
END$$

DELIMITER ;
```

### Stored Procedure - DeleteContentRevisionsEfficiently

```sql
DELIMITER $$

CREATE PROCEDURE DeleteContentRevisionsEfficiently()
BEGIN
    DECLARE current_model_name VARCHAR(255); -- Placeholder for the current model_name
    DECLARE finished INT DEFAULT 0;         -- Loop termination flag
    DECLARE rows_deleted INT DEFAULT 0;     -- Counter for rows deleted
    DECLARE total_deleted INT DEFAULT 0;    -- Total rows deleted

    -- Cursor to iterate over distinct model_name values
    DECLARE model_cursor CURSOR FOR
    SELECT DISTINCT model_name FROM content_revisions;

    -- Handler for the end of the cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;

    -- Open the cursor
    OPEN model_cursor;

    -- Loop through each model_name
    fetch_loop: LOOP
        FETCH model_cursor INTO current_model_name;

        -- Exit loop if no more data
        IF finished = 1 THEN
            LEAVE fetch_loop;
        END IF;

        -- Print progress: start processing current model_name
        SELECT CONCAT('Processing model_name: ', current_model_name) AS ProgressMessage;

        -- Delete rows for the current model_name with ranking logic
        DELETE cr
        FROM content_revisions cr
        JOIN (
            SELECT id
            FROM (
                SELECT id,
                       ROW_NUMBER() OVER (PARTITION BY model_id ORDER BY created DESC, revision_no DESC) AS rn
                FROM content_revisions
                WHERE model_name = current_model_name
            ) ranked_revisions
            WHERE rn > 5
        ) to_delete
        ON cr.id = to_delete.id;

        -- Get the number of rows deleted for the current group
        SET rows_deleted = ROW_COUNT();

        -- Update the total count
        SET total_deleted = total_deleted + rows_deleted;

        -- Print progress: rows deleted for the current model_name
        SELECT CONCAT('Deleted ', rows_deleted, ' rows for model_name: ', current_model_name, '. Total deleted so far: ', total_deleted) AS ProgressMessage;
    END LOOP;

    -- Close the cursor
    CLOSE model_cursor;

    -- Final message
    SELECT CONCAT('Deletion process completed. Total rows deleted: ', total_deleted) AS FinalMessage;
END$$

DELIMITER ;
```

### Calling a Stored Procedure

```sql
call DeleteUsersLogInBatches();

-- drop stored procedure
drop procedure DeleteUsersLogInBatches;
```

### Stored Procedure with Progress Output

```sql
DELIMITER $$

CREATE PROCEDURE DeleteUsersLogInBatches()
BEGIN
    DECLARE batch_size INT DEFAULT 1000000; -- Number of rows to delete in each batch
    DECLARE start_id INT DEFAULT 0; -- Starting ID for the first batch
    DECLARE end_id INT DEFAULT 14900000; -- Target maximum ID for deletion

    -- Loop to delete data in batches
    WHILE start_id < end_id DO
        -- Delete rows in the current batch
        DELETE FROM users_log
        WHERE id BETWEEN start_id AND start_id + batch_size - 1;

        -- Output progress message
        SELECT CONCAT('Deleted rows with IDs from ', start_id, ' to ', start_id + batch_size - 1) AS Progress;

        -- Update the start_id for the next batch
        SET start_id = start_id + batch_size;
    END WHILE;

    -- Final message
    SELECT 'Deletion process completed.' AS FinalMessage;
END$$

DELIMITER ;
```
