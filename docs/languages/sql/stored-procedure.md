# Stored Procedure

A **stored procedure** (also termed **proc, storp, sproc, StoPro, StoredProc, StoreProc, sp, or SP**) is a [subroutine](https://en.wikipedia.org/wiki/Subroutine) available to applications that access a [relational database management system](https://en.wikipedia.org/wiki/Relational_database_management_system)(RDBMS). Such procedures are stored in the database [data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).

Uses for stored procedures include [data-validation](https://en.wikipedia.org/wiki/Data_validation)(integrated into the database) or [access-control](https://en.wikipedia.org/wiki/Access_control) mechanisms. Furthermore, stored procedures can consolidate and centralize logic that was originally implemented in applications. To save time and memory, extensive or complex processing that requires execution of several [SQL](https://en.wikipedia.org/wiki/SQL) statements can be saved into stored procedures, and all applications call the procedures. One can use nested stored procedures by executing one stored procedure from within another.

Stored procedures may return [result sets](https://en.wikipedia.org/wiki/Result_set), i.e., the results of aSELECTstatement. Such result sets can be processed using [cursors](https://en.wikipedia.org/wiki/Cursor_(databases)), by other stored procedures, by associating a result-set locator, or by applications. Stored procedures may also contain declared variables for processing data and cursors that allow it to loop through multiple rows in a table. Stored-procedure flow-control statements typically includeIF,WHILE,LOOP,REPEAT, andCASEstatements, and more. Stored procedures can receive variables, return results or modify variables and return them, depending on how and where the variable is declared.

```sql
CREATE PROCEDURE *procedure_name*
AS
*sql_statement*
GO;

EXEC *procedure_name*;
```

## Advantages of using stored procedures

- A stored procedure allows modular programming.
    You can create the procedure once, store it in the database, and call it any number of times in your program.
- A stored procedure allows faster execution.
    If the operation requires a large amount of SQL code that is performed repetitively, stored procedures can be faster. They are parsed and optimized when they are first executed, and a compiled version of the stored procedure remains in a memory cache for later use. This means the stored procedure does not need to be reparsed and reoptimized with each use, resulting in much faster execution times.
- A stored procedure can reduce network traffic.
    An operation requiring hundreds of lines of Transact-SQL code can be performed through a single statement that executes the code in a procedure, rather than by sending hundreds of lines of code over the network.
- Stored procedures provide better security to your data
    Users can be granted permission to execute a stored procedure even if they do not have permission to execute the procedure's statements directly.
    In SQL Server we have different types of stored procedures:
  - System stored procedures
  - User-defined stored procedures
  - Extended stored Procedures

## Types of stored procedures

- **System-stored procedures** are stored in the master database and these start with asp_prefix. These procedures can be used to perform a variety of tasks to support SQL Server functions for external application calls in the system tables
    Example: sp_helptext [StoredProcedure_Name]
- **User-definedstored procedures** are usually stored in a user database and are typically designed to complete the tasks in the user database. While coding these proceduresdon't usethesp_prefix because if we use thesp_prefix first, it will check the master database, and then it comes to user defined database.
- **Extendedstored procedures** are the procedures that call functions from DLL files. Nowadays, extended stored procedures are deprecated for the reason it would be better to avoid using extended stored procedures.

<https://en.wikipedia.org/wiki/Stored_procedure>

## Stored Procedures

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

## Functions

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

<https://www.mysqltutorial.org/mysql-error-handling-in-stored-procedures>

## Access

ForMySQL 8, connect your database viaWorkbench, go toAdministration -> User and Privileges, and select the user account you want to modify, then switch to "Administrative Roles", tick "SELECT" on right panel (Global Privileges), Click 'Apply' and done.
