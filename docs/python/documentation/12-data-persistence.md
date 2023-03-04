# 12. Data Persistence

- [**12.1.pickle - Python object serialization**](https://docs.python.org/3/library/pickle.html)
  - [12.1.1. Relationship to other Python modules](https://docs.python.org/3/library/pickle.html#relationship-to-other-python-modules)
    - [12.1.1.1. Comparison withmarshal](https://docs.python.org/3/library/pickle.html#comparison-with-marshal)
    - [12.1.1.2. Comparison withjson](https://docs.python.org/3/library/pickle.html#comparison-with-json)
  - [12.1.2. Data stream format](https://docs.python.org/3/library/pickle.html#data-stream-format)
  - [12.1.3. Module Interface](https://docs.python.org/3/library/pickle.html#module-interface)
  - [12.1.4. What can be pickled and unpickled?](https://docs.python.org/3/library/pickle.html#what-can-be-pickled-and-unpickled)
  - [12.1.5. Pickling Class Instances](https://docs.python.org/3/library/pickle.html#pickling-class-instances)
    - [12.1.5.1. Persistence of External Objects](https://docs.python.org/3/library/pickle.html#persistence-of-external-objects)
    - [12.1.5.2. Dispatch Tables](https://docs.python.org/3/library/pickle.html#dispatch-tables)
    - [12.1.5.3. Handling Stateful Objects](https://docs.python.org/3/library/pickle.html#handling-stateful-objects)
  - [12.1.6. Restricting Globals](https://docs.python.org/3/library/pickle.html#restricting-globals)
  - [12.1.7. Performance](https://docs.python.org/3/library/pickle.html#performance)
  - [12.1.8. Examples](https://docs.python.org/3/library/pickle.html#examples)
- [12.2.copyreg - Registerpicklesupport functions](https://docs.python.org/3/library/copyreg.html)
  - [12.2.1. Example](https://docs.python.org/3/library/copyreg.html#example)
- [12.3.shelve - Python object persistence](https://docs.python.org/3/library/shelve.html)
  - [12.3.1. Restrictions](https://docs.python.org/3/library/shelve.html#restrictions)
  - [12.3.2. Example](https://docs.python.org/3/library/shelve.html#example)
- [12.4.marshal - Internal Python object serialization](https://docs.python.org/3/library/marshal.html)
- [12.5.dbm - Interfaces to Unix "databases"](https://docs.python.org/3/library/dbm.html)
  - [12.5.1.dbm.gnu - GNU's reinterpretation of dbm](https://docs.python.org/3/library/dbm.html#module-dbm.gnu)
  - [12.5.2.dbm.ndbm - Interface based on ndbm](https://docs.python.org/3/library/dbm.html#module-dbm.ndbm)
  - [12.5.3.dbm.dumb - Portable DBM implementation](https://docs.python.org/3/library/dbm.html#module-dbm.dumb)
- [12.6.sqlite3 - DB-API 2.0 interface for SQLite databases](https://docs.python.org/3/library/sqlite3.html)
  - [12.6.1. Module functions and constants](https://docs.python.org/3/library/sqlite3.html#module-functions-and-constants)
  - [12.6.2. Connection Objects](https://docs.python.org/3/library/sqlite3.html#connection-objects)
  - [12.6.3. Cursor Objects](https://docs.python.org/3/library/sqlite3.html#cursor-objects)
  - [12.6.4. Row Objects](https://docs.python.org/3/library/sqlite3.html#row-objects)
  - [12.6.5. Exceptions](https://docs.python.org/3/library/sqlite3.html#exceptions)
  - [12.6.6. SQLite and Python types](https://docs.python.org/3/library/sqlite3.html#sqlite-and-python-types)
    - [12.6.6.1. Introduction](https://docs.python.org/3/library/sqlite3.html#introduction)
    - [12.6.6.2. Using adapters to store additional Python types in SQLite databases](https://docs.python.org/3/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases)
      - [12.6.6.2.1. Letting your object adapt itself](https://docs.python.org/3/library/sqlite3.html#letting-your-object-adapt-itself)
      - [12.6.6.2.2. Registering an adapter callable](https://docs.python.org/3/library/sqlite3.html#registering-an-adapter-callable)
    - [12.6.6.3. Converting SQLite values to custom Python types](https://docs.python.org/3/library/sqlite3.html#converting-sqlite-values-to-custom-python-types)
    - [12.6.6.4. Default adapters and converters](https://docs.python.org/3/library/sqlite3.html#default-adapters-and-converters)
  - [12.6.7. Controlling Transactions](https://docs.python.org/3/library/sqlite3.html#controlling-transactions)
  - [12.6.8. Usingsqlite3efficiently](https://docs.python.org/3/library/sqlite3.html#using-sqlite3-efficiently)
    - [12.6.8.1. Using shortcut methods](https://docs.python.org/3/library/sqlite3.html#using-shortcut-methods)
    - [12.6.8.2. Accessing columns by name instead of by index](https://docs.python.org/3/library/sqlite3.html#accessing-columns-by-name-instead-of-by-index)
    - [12.6.8.3. Using the connection as a context manager](https://docs.python.org/3/library/sqlite3.html#using-the-connection-as-a-context-manager)
  - [12.6.9. Common issues](https://docs.python.org/3/library/sqlite3.html#common-issues)
    - [12.6.9.1. Multithreading](https://docs.python.org/3/library/sqlite3.html#multithreading)

## SQLite3

SQLite is a C library that provides a lightweight disk-based database that doesn't require a separate server process and allows accessing the database using a nonstandard variant of the SQL query language. Some applications can use SQLite for internal data storage. It's also possible to prototype an application using SQLite and then port the code to a larger database such as PostgreSQL or Oracle.

con = sqlite3.connect('mydatabase.db')

c.execute("DROP TABLE ratings")

c.execute("CREATE TABLE IF NOT EXISTS ratings(userId int, movieId int, rating float, timestamp int)")

c.execute("INSERT INTO ratings(userId, movieId, rating, timestamp) VALUES (?,?,?,?)", row)

for row in c.execute("SELECT * FROM ratings"):

print(row)

con.commit()

This method commits the current transaction. If you don't call this method, anything you did since the last call tocommit()is not visible from other database connections.

<https://docs.python.org/3/library/sqlite3.html>
