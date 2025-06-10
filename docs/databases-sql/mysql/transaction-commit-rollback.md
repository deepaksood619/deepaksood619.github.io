# Trasaction / Commit / Rollback

- 13.3 Transactional and Locking Statements
- 13.3.1 START TRANSACTION, COMMIT, and ROLLBACK Statements
- 13.3.2 Statements That Cannot Be Rolled Back
- 13.3.3 Statements That Cause an Implicit Commit
- 13.3.4 SAVEPOINT, ROLLBACK TO SAVEPOINT, and RELEASE SAVEPOINT Statements
- 13.3.5 LOCK TABLES and UNLOCK TABLES Statements
- 13.3.6 SET TRANSACTION Statement

In InnoDB, all user activity occurs inside a transaction. If [autocommit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit) mode is enabled, each SQL statement forms a single transaction on its own. By default, MySQL starts the session for each new connection with [autocommit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit) enabled, so MySQL does a commit after each SQL statement if that statement did not return an error. If a statement returns an error, the commit or rollback behavior depends on the error. See [Section15.21.4, "InnoDB Error Handling"](https://dev.mysql.com/doc/refman/8.0/en/innodb-error-handling.html).

A session that has [autocommit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit) enabled can perform a multiple-statement transaction by starting it with an explicit [START TRANSACTION](https://dev.mysql.com/doc/refman/8.0/en/commit.html) or [BEGIN](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement and ending it with a [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) or [ROLLBACK](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement. See [Section13.3.1, "START TRANSACTION, COMMIT, and ROLLBACK Statements"](https://dev.mysql.com/doc/refman/8.0/en/commit.html).

If [autocommit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit) mode is disabled within a session withSET autocommit = 0, the session always has a transaction open. A [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) or [ROLLBACK](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement ends the current transaction and a new one starts.

If a session that has [autocommit](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_autocommit) disabled ends without explicitly committing the final transaction, MySQL rolls back that transaction.

Some statements implicitly end a transaction, as if you had done a [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) before executing the statement. For details, see [Section13.3.3, "Statements That Cause an Implicit Commit"](https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html).

A [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) means that the changes made in the current transaction are made permanent and become visible to other sessions. A [ROLLBACK](https://dev.mysql.com/doc/refman/8.0/en/commit.html) statement, on the other hand, cancels all modifications made by the current transaction. Both [COMMIT](https://dev.mysql.com/doc/refman/8.0/en/commit.html) and [ROLLBACK](https://dev.mysql.com/doc/refman/8.0/en/commit.html) release allInnoDBlocks that were set during the current transaction.

https://dev.mysql.com/doc/refman/8.0/en/innodb-autocommit-commit-rollback.html
