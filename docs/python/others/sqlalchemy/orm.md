# ORM

## ORM (Object Relational Mapper)

The SQLAlchemy Object Relational Mapper presents a method of associating user-defined Python classes with database tables, and instances of those classes (objects) with rows in their corresponding tables. It includes a system that transparently synchronizes all changes in state between objects and their related rows, called a [unit of work](https://docs.sqlalchemy.org/en/13/glossary.html#term-unit-of-work), as well as a system for expressing database queries in terms of the user defined classes and their defined relationships between each other.

The ORM is in contrast to the SQLAlchemy Expression Language, upon which the ORM is constructed. Whereas the SQL Expression Language, introduced in [SQL Expression Language Tutorial](https://docs.sqlalchemy.org/en/13/core/tutorial.html), presents a system of representing the primitive constructs of the relational database directly without opinion, the ORM presents a high level and abstracted pattern of usage, which itself is an example of applied usage of the Expression Language.

While there is overlap among the usage patterns of the ORM and the Expression Language, the similarities are more superficial than they may at first appear. One approaches the structure and content of data from the perspective of a user-defined [domain model](https://docs.sqlalchemy.org/en/13/glossary.html#term-domain-model) which is transparently persisted and refreshed from its underlying storage model. The other approaches it from the perspective of literal schema and SQL expression representations which are explicitly composed into messages consumed individually by the database.

A successful application may be constructed using the Object Relational Mapper exclusively. In advanced situations, an application constructed with the ORM may make occasional usage of the Expression Language directly in certain areas where specific database interactions are required.

- [Version Check](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#version-check)
- [Connecting](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#connecting)
- [Declare a Mapping](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#declare-a-mapping)
- [Create a Schema](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#create-a-schema)
- [Create an Instance of the Mapped Class](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#create-an-instance-of-the-mapped-class)
- [Creating a Session](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#creating-a-session)

<https://docs.sqlalchemy.org/en/14/orm/session_basics.html>

- [Adding and Updating Objects](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#adding-and-updating-objects)
- [Rolling Back](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#rolling-back)
- [Querying](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#querying)
- [Common Filter Operators](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#common-filter-operators)
- [Returning Lists and Scalars](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#returning-lists-and-scalars)
- [Using Textual SQL](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#using-textual-sql)
- [Counting](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#counting)
- [Building a Relationship](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#building-a-relationship)
- [Working with Related Objects](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#working-with-related-objects)
- [Querying with Joins](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#querying-with-joins)
- [Using Aliases](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#using-aliases)
- [Using Subqueries](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#using-subqueries)
- [Selecting Entities from Subqueries](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#selecting-entities-from-subqueries)
- [Using EXISTS](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#using-exists)
- [Common Relationship Operators](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#common-relationship-operators)
- [Eager Loading](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#eager-loading)
- [Selectin Load](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#selectin-load)
- [Joined Load](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#joined-load)
- [Explicit Join + Eagerload](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#explicit-join-eagerload)
- [Deleting](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#deleting)
- [Configuring delete/delete-orphan Cascade](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#configuring-delete-delete-orphan-cascade)
- [Building a Many To Many Relationship](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#building-a-many-to-many-relationship)
- [Further Reference](https://docs.sqlalchemy.org/en/13/orm/tutorial.html#further-reference)
- [Mapper Configuration](https://docs.sqlalchemy.org/en/13/orm/mapper_config.html)
- [Relationship Configuration](https://docs.sqlalchemy.org/en/13/orm/relationships.html)
- [Loading Objects](https://docs.sqlalchemy.org/en/13/orm/loading_objects.html)
- [Using the Session](https://docs.sqlalchemy.org/en/13/orm/session.html)
- [Events and Internals](https://docs.sqlalchemy.org/en/13/orm/extending.html)
- [ORM Extensions](https://docs.sqlalchemy.org/en/13/orm/extensions/index.html)
- [ORM Examples](https://docs.sqlalchemy.org/en/13/orm/examples.html)

## SQLAlchemy Engines

Whenever we want to use SQLAlchemy to interact with a database, we need to create anEngine. Engines, on SQLAlchemy, are used to manage two crucial factors:PoolsandDialects.

The [Engine](https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Engine) is afactorythat can create new database connections for us, which also holds onto connections inside of a [Connection Pool](https://docs.sqlalchemy.org/en/14/core/pooling.html) for fast reuse.

## from sqlalchemy import create_engine

engine=create_engine("sqlite://",echo=**True**,future=**True**)

Theecho=Trueparameter indicates that SQL emitted by connections will be logged to standard out.future=Trueis to ensure we are using the latest SQLAlchemy [2.0-style](https://docs.sqlalchemy.org/en/14/glossary.html#term-1) APIs.

## SQLAlchemy Connection Pools

A pool of already established TCP connections to the databases should be available to avoid cold start problem.

Connection pooling is one of the most traditional implementations of the [object pool pattern](https://sourcemaking.com/design_patterns/object_pool). Object pools are used as caches of pre-initialized objects ready to use. That is, instead of spending time to create objects that are frequently needed (like connections to databases) the program fetches an existing object from the pool, uses it as desired, and puts back when done.

The main reason why programs take advantage of this design pattern is to improve performance. In the case of database connections, opening and maintaining new ones is expensive, time-consuming, and wastes resources. Besides that, this pattern allows easier management of the number of connections that an application might use simultaneously.

[There are various implementations of the connection pool pattern available on SQLAlchemy](http://docs.sqlalchemy.org/en/rel_1_1/core/pooling.html#api-documentation-available-pool-implementations). For example, creating anEnginethrough thecreate_engine() function usually generates a [QueuePool](http://docs.sqlalchemy.org/en/rel_1_1/core/pooling.html#sqlalchemy.pool.QueuePool). This kind of pool comes configured with some reasonable defaults, like a maximum pool size of 5 connections.

As usual production-ready programs need to override these defaults (to fine-tune pools to their needs), most of the different implementations of connection pools provide a similar set of configuration options. The following list shows the most common options with their descriptions:

- **pool_size:** Sets the number of connections that the pool will handle.
- **max_overflow:** Specifies how many exceeding connections (relative topool_size) the pool supports.
- **pool_recycle:** Configures the maximum age (in seconds) of connections in the pool.
- **pool_timeout:** Identifies how many seconds the program will wait before giving up on getting a connection from the pool.

<https://wiki.postgresql.org/wiki/Replication,_Clustering,_and_Connection_Pooling>

## SQLAlchemy Dialects

As SQLAlchemy is a facade that enables Python developers to create applications that communicate to different database engines through the same API, we need to make use ofDialects. Most of the popular relational databases available out there adhere to the SQL (Structured Query Language) standard, but they also introduce proprietary variations. These variations are the solely responsible for the existence of dialects.

For example, let's say that we want to fetch the first ten rows of a table calledpeople. If our data was being held by a Microsoft SQL Server database engine, SQLAlchemy would need to issue the following query:

SELECT TOP 10 * FROM people;

But, if our data was persisted on MySQL instance, then SQLAlchemy would need to issue:

SELECT * FROM people LIMIT 10;

Therefore, to know precisely what query to issue, SQLAlchemy needs to be aware of the type of the database that it is dealing with. This is exactly whatDialectsdo. They make SQLAlchemy aware of the dialect it needs to talk.

On its core, SQLAlchemy includes the following list of dialects:

- [Firebird](http://docs.sqlalchemy.org/en/latest/dialects/firebird.html)
- [Microsoft SQL Server](http://docs.sqlalchemy.org/en/latest/dialects/mssql.html)
- [MySQL](http://docs.sqlalchemy.org/en/latest/dialects/mysql.html)
- [Oracle](http://docs.sqlalchemy.org/en/latest/dialects/oracle.html)
- [PostgreSQL](http://docs.sqlalchemy.org/en/latest/dialects/postgresql.html)
- [SQLite](http://docs.sqlalchemy.org/en/latest/dialects/sqlite.html)
- [Sybase](http://docs.sqlalchemy.org/en/latest/dialects/sybase.html)

## SQLAlchemy ORM

ORM, which stands forObject Relational Mapper, is the specialization of the [Data Mapperdesign pattern](https://martinfowler.com/eaaCatalog/dataMapper.html) that addresses relational databases like MySQL, Oracle, and PostgreSQL. As explained by Martin Fowler in the article,Mappersare responsible for moving data between objects and a database while keeping them independent of each other. As object-oriented programming languages and relational databases structure data on different ways, we need specific code to translate from one schema to the other.

<https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers>

<https://www.infoq.com/articles/optimizing-orm-performance>

<https://stackoverflow.com/questions/451845/orm-performance-cost>
