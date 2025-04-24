# SQLAlchemy

## Alchemist

The SQLAlchemy SQL Toolkit and Object Relational Mapper is a comprehensive set of tools for working with databases and Python. It has several distinct areas of functionality which can be used individually or combined together. Its major components are illustrated below, with component dependencies organized into layers:

![image](../../../media/SQLAlchemy-image1.jpg)

Above, the two most significant front-facing portions of SQLAlchemy are the **Object Relational Mapper (ORM)**and **theCore.**

Core contains the breadth of SQLAlchemy's SQL and database integration and description services, the most prominent part of this being the**SQL Expression Language.**

The SQL Expression Language is a toolkit all its own, independent of the ORM package, which provides a system of constructing SQL expressions represented by composable objects, which can then be "executed" against a target database within the scope of a specific transaction, returning a result set. Inserts, updates and deletes (i.e.[DML](https://docs.sqlalchemy.org/en/14/glossary.html#term-DML)) are achieved by passing SQL expression objects representing these statements along with dictionaries that represent parameters to be used with each statement.

The ORM builds upon Core to provide a means of working with a domain object model mapped to a database schema. When using the ORM, SQL statements are constructed in mostly the same way as when using Core, however the task of DML, which here refers to the persistence of business objects in a database, is automated using a pattern called [unit of work](https://docs.sqlalchemy.org/en/14/glossary.html#term-unit-of-work), which translates changes in state against mutable objects into INSERT, UPDATE and DELETE constructs which are then invoked in terms of those objects. SELECT statements are also augmented by ORM-specific automations and object-centric querying capabilities.

Whereas working with Core and the SQL Expression language presents a schema-centric view of the database, along with a programming paradigm that is oriented around immutability, the ORM builds on top of this a domain-centric view of the database with a programming paradigm that is more explcitly object-oriented and reliant upon mutability. Since a relational database is itself a mutable service, the difference is that Core/SQL Expression language is command oriented whereas the ORM is state oriented.

https://docs.sqlalchemy.org/en/14/intro.html

## Documentation

- **[Establishing Connectivity - the Engine](https://docs.sqlalchemy.org/en/14/tutorial/engine.html#tutorial-engine)-** all SQLAlchemy applications start with an [Engine](https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Engine) object; here's how to create one.
- **[Working with Transactions and the DBAPI](https://docs.sqlalchemy.org/en/14/tutorial/dbapi_transactions.html#tutorial-working-with-transactions)-** the usage API of the [Engine](https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Engine) and its related objects [Connection](https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Connection) and [Result](https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Result) are presented here. This content is Core-centric however ORM users will want to be familiar with at least the [Result](https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Result) object.
- **[Working with Database Metadata](https://docs.sqlalchemy.org/en/14/tutorial/metadata.html#tutorial-working-with-metadata)-** SQLAlchemy's SQL abstractions as well as the ORM rely upon a system of defining database schema constructs as Python objects. This section introduces how to do that from both a Core and an ORM perspective.
- **[Working with Data](https://docs.sqlalchemy.org/en/14/tutorial/data.html#tutorial-working-with-data)-** here we learn how to create, select, update and delete data in the database. The so-called [CRUD](https://docs.sqlalchemy.org/en/14/glossary.html#term-CRUD) operations here are given in terms of SQLAlchemy Core with links out towards their ORM counterparts. The SELECT operation that is introduced in detail at [Selecting Rows with Core or ORM](https://docs.sqlalchemy.org/en/14/tutorial/data_select.html#tutorial-selecting-data) applies equally well to Core and ORM.
- [**Data Manipulation with the ORM**](https://docs.sqlalchemy.org/en/14/tutorial/orm_data_manipulation.html#tutorial-orm-data-manipulation) covers the persistence framework of the ORM; basically the ORM-centric ways to insert, update and delete, as well as how to handle transactions.
- [**Working with Related Objects**](https://docs.sqlalchemy.org/en/14/tutorial/orm_related_objects.html#tutorial-orm-related-objects) introduces the concept of the [relationship()](https://docs.sqlalchemy.org/en/14/orm/relationship_api.html#sqlalchemy.orm.relationship) construct and provides a brief overview of how it's used, with links to deeper documentation.
- [**Further Reading**](https://docs.sqlalchemy.org/en/14/tutorial/further_reading.html#tutorial-further-reading) lists a series of major top-level documentation sections which fully document the concepts introduced in this tutorial.

https://docs.sqlalchemy.org/en/14/tutorial/index.html

## Python DBAPI

This API has been defined to encourage similarity between the Python modules that are used to access databases. By doing this, we hope to achieve a consistency leading to more easily understood modules, code that is generally more portable across databases, and a broader reach of database connectivity from Python.

https://www.python.org/dev/peps/pep-0249

## State Management

- **Transient-** an instance that's not in a session, and is not saved to the database; i.e. it has no database identity. The only relationship such an object has to the ORM is that its class has a [Mapper](https://docs.sqlalchemy.org/en/14/orm/mapping_api.html#sqlalchemy.orm.Mapper) associated with it.
- **Pending-** when you [Session.add()](https://docs.sqlalchemy.org/en/14/orm/session_api.html#sqlalchemy.orm.Session.add) a transient instance, it becomes pending. It still wasn't actually flushed to the database yet, but it will be when the next flush occurs.
- **Persistent-** An instance which is present in the session and has a record in the database. You get persistent instances by either flushing so that the pending instances become persistent, or by querying the database for existing instances (or moving persistent instances from other sessions into your local session).
- **Deleted-** An instance which has been deleted within a flush, but the transaction has not yet completed. Objects in this state are essentially in the opposite of "pending" state; when the session's transaction is committed, the object will move to the detached state. Alternatively, when the session's transaction is rolled back, a deleted object movesbackto the persistent state.
- **Detached-** an instance which corresponds, or previously corresponded, to a record in the database, but is not currently in any session. The detached object will contain a database identity marker, however because it is not associated with a session, it is unknown whether or not this database identity actually exists in a target database. Detached objects are safe to use normally, except that they have no ability to load unloaded attributes or attributes that were previously marked as "expired".

https://docs.sqlalchemy.org/en/14/orm/session_state_management.html

## Flush vs commit

flush()sends your SQL statements to the database

commit()commits the transaction.

A Session object is basically an ongoing transaction of changes to a database (update, insert, delete). These operations aren't persisted to the database until they are committed (if your program aborts for some reason in mid-session transaction, any uncommitted changes within are lost).

The session object registers transaction operations withsession.add(), but doesn't yet communicate them to the database untilsession.flush()is called.

session.flush()communicates a series of operations to the database (insert, update, delete). The database maintains them as pending operations in a transaction. The changes aren't persisted permanently to disk, or visible to other transactions until the database receives a COMMIT for the current transaction (which is whatsession.commit()does).

session.commit()commits (persists) those changes to the database.

flush()isalwayscalled as part of a call tocommit()

When you use a Session object to query the database, the query will return results both from the database and from the flushed parts of the uncommitted transaction it holds. By default, Session objectsautoflushtheir operations, but this can be disabled.

Commits should reduce memory usage, although presumably there is a trade-off between memory and performance here. In other words, you probably don't want to commit every single database change, one at a time (for performance reasons), but waiting too long will increase memory usage.

https://michaelcho.me/article/sqlalchemy-commit-flush-expire-refresh-merge-whats-the-difference

## Two Phase Commits

https://docs.sqlalchemy.org/en/13/orm/session_transaction.html#enabling-two-phase-commit

## CodeGen

```bash
flask-sqlacodegen

sqlacodegen mysql+pymysql://user:pass@host.com:3306/sttash_website_LIVE --table "table_name"
```

https://github.com/ksindi/flask-sqlacodegen

## Migrations

[GitHub - sqlalchemy/alembic: A database migrations tool for SQLAlchemy.](https://github.com/sqlalchemy/alembic)

## Others

https://docs.sqlalchemy.org/en/13/faq/sessions.html#i-m-re-loading-data-with-my-session-but-it-isn-t-seeing-changes-that-i-committed-elsewhere

https://stackoverflow.com/questions/19143345/about-refreshing-objects-in-sqlalchemy-session

https://sqlmodel.tiangolo.com

SQL databases in Python, designed for simplicity, compatibility, and robustness.
