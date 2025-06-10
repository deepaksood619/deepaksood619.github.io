# MySQL Triggers

- 23.3 Using Triggers
- 23.3.1 Trigger Syntax and Examples
- 23.3.2 Trigger Metadata
- 23.4 Using the Event Scheduler
- 23.4.1 Event Scheduler Overview
- 23.4.2 Event Scheduler Configuration
- 23.4.3 Event Syntax
- 23.4.4 Event Metadata
- 23.4.5 Event Scheduler Status
- 23.4.6 The Event Scheduler and MySQL Privileges

```sql
show triggers;

CREATE TRIGGER ins_sum BEFORE INSERT ON account FOR EACH ROW SET @sum = @sum + NEW.amount;

DROP TRIGGER test.ins_sum;

mysql> delimiter //
mysql> CREATE TRIGGER upd_check BEFORE UPDATE ON account
    -> FOR EACH ROW
    -> BEGIN
        -> IF NEW.amount < 0 THEN
            -> SET NEW.amount = 0;
        -> ELSEIF NEW.amount > 100 THEN
            -> SET NEW.amount = 100;
        -> END IF;
    -> END;//
mysql> delimiter ;
```

A trigger is a named database object that is associated with a table, and that activates when a particular event occurs for the table. Some uses for triggers are to perform checks of values to be inserted into a table or to perform calculations on values involved in an update.

### Does MySQL 5.6 have statement-level or row-level triggers?

In MySQL 5.6 and MySQL 8.0, all triggers areFOR EACH ROW; that is, the trigger is activated for each row that is inserted, updated, or deleted. MySQL 5.6 does not support triggers usingFOR EACH STATEMENT.

The SQL standard defines two types of triggers: row-level triggers and statement-level triggers.

- A row-level trigger is activated for each row that is inserted, updated, or deleted. For example, if a table has 100 rows inserted, updated, or deleted, the trigger is automatically invoked 100 times for the 100 rows affected.
- A statement-level trigger is executed once for each transaction regardless of how many rows are inserted, updated, or deleted.
MySQL supports only row-level triggers. It doesn't support statement-level triggers.

https://www.mysqltutorial.org/mysql-triggers.aspx

### When to use and not to use Triggers

Triggers are a requirement for any complex data integrity rules. These cannot be enforced anywhere except the database or you will have data integrity problems.

They are also the best place for auditing unless you don't want to capture all changes to the database (which is the problem of auditing from the application).

Triggers can cause performance issues if not written carefully and not enough developers are knowledgeable enough to write them well. This is part of where they get their bad rap.

Triggers are often slower than other means of maintaining data integrity, so if you can use a check constraint, use that instead of a trigger.

It is easy to write bad triggers that do stupid things like try to send emails. Do you really want to be unable to change records in the db if the email server goes down?

In SQL server, triggers operate on a batch of records. All too often developers think they only need to handle one record inserts, updates or deletes. That is not the only kind of data changes that happen to a database and all triggers should be tested under the conditions of 1 record change and many record changes. Forgetting to do the second test can lead to extremely poorly performing triggers or a loss of data integrity.

### Use of database triggers

1. To drive column values automatically.
2. To enforce complex integrity constraints.
3. To enforce complex business rules.
4. To customize complex security authorizations.
5. To maintain replicate tables.
6. To audit data modification.

### Different Types of Triggers

A MySQL trigger is a stored program (with queries) which is executed automatically to respond to a specific event such as insertion, updation or deletion occurring in a table.

There are 6 different types of triggers in MySQL:

1. Before Update Trigger
2. After Update Trigger
3. Before Insert Trigger
4. After Insert Trigger
5. Before Delete Trigger
6. After Delete Trigger

https://www.geeksforgeeks.org/different-types-of-mysql-triggers-with-examples

## 23.4 Using the Event Scheduler

MySQL Events are tasks that run according to a schedule. Therefore, we sometimes refer to them as *scheduled* events. When you create an event, you are creating a named database object containing one or more SQL statements to be executed at one or more regular intervals, beginning and ending at a specific date and time. Conceptually, this is similar to the idea of the Unix crontab(also known as a "cron job") or the Windows Task Scheduler.

https://www.mysqltutorial.org/mysql-triggers/working-mysql-scheduled-event

https://dev.mysql.com/doc/refman/8.0/en/events-overview.html

## Replication

GTID - Global Transaction Identifier

[How to configure GTID-based replication on MySQL servers | Enable Sysadmin](https://www.redhat.com/sysadmin/gtid-replication-mysql-servers)

[MySQL GTIDs Replication Set Up: 8 Easy Steps](https://hevodata.com/learn/mysql-gtids-and-replication-set-up/)

[MySQL Replication | 2.3.1 GTID Format and Storage](https://dev.mysql.com/doc/mysql-replication-excerpt/5.7/en/replication-gtids-concepts.html)
