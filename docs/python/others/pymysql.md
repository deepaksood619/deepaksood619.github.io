# PyMySQL

<https://github.com/PyMySQL/PyMySQL>

<https://pymysql.readthedocs.io/en/latest>

<https://pypi.org/project/PyMySQL>

pip install PyMySQL==0.9.3

## Connections Object

<https://pymysql.readthedocs.io/en/latest/modules/connections.html>

## Cursors Object

<https://pymysql.readthedocs.io/en/latest/modules/cursors.html>

## Getting Started

```python
 import pymysql.cursors

 # Connect to the database
    connection = pymysql.connect(host='localhost',
                             user='user',
                             password='passwd',
                             db='db',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

 try:
    with connection.cursor() as cursor:
  # Create a new record
  sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
  cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

  # connection is not autocommit by default. So you must commit to save your changes.
   connection.commit()

  with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
        cursor.execute(sql, ('webmaster@python.org',))
        result = cursor.fetchone()
        print(result)
 finally:
    connection.close()
```

## Connection Pooling

<https://pythontic.com/database/mysql/connection%20pooling>

## # Singleton Class

```python
 import pymysql.cursors
 import logging

 from constants import (
     AURORA_DB_DBNAME,
     AURORA_DB_HOST,
     AURORA_DB_PASSWORD,
     AURORA_DB_USER,
     AWS_ACCESS_KEY_ID,
     AWS_SECRET_ACCESS_KEY,
     DEBUG,
 )

 mysql_conn = None

 def getdb():
     global mysql_conn
     if not mysql_conn:
         try:
             mysql_conn = pymysql.connect(
                 host=AURORA_DB_HOST,
                 user=AURORA_DB_USER,
                 password=AURORA_DB_PASSWORD,
                 db=AURORA_DB_DBNAME,
                 charset="utf8mb4",
                 cursorclass=pymysql.cursors.DictCursor,
             )
         except Exception as e:
             logging.exception(f"Some error in establishing mysql connection.")
             raise e

     return mysql_conn
```

## DBClass

```python
 import sys
import pymysql
import logging

 class Database:

  def __init__(self, config):
        self.host = config.db_host
        self.username = config.db_user
        self.password = config.db_password
        self.port = config.db_port
        self.dbname = config.db_name
        self.conn = None

  def open_connection(self):
        """Connect to MySQL Database."""
        try:
            if self.conn is None:
                self.conn = pymysql.connect(self.host,
                                            user=self.username,
                                            passwd=self.password,
                                            db=self.dbname,
                                            connect_timeout=5)
        except pymysql.MySQLError as e:
            logging.error(e)
            sys.exit()
        finally:
            logging.info('Connection opened successfully.')

  def run_query(self, query):
        """Execute SQL query."""
        try:
            self.open_connection()
            with self.conn.cursor() as cur:
                if 'SELECT' in query:
                    records = []
                    cur.execute(query)
                    result = cur.fetchall()
                    for row in result:
                        records.append(row)
                    cur.close()
                    return records
                else:
                    result = cur.execute(query)
                    self.conn.commit()
                    affected = f"{cur.rowcount} rows affected."
                    cur.close()
                    return affected
        except pymysql.MySQLError as e:
            print(e)
        finally:
            if self.conn:
                self.conn.close()
                self.conn = None
                logging.info('Database connection closed.')

 class PostgresClient:
     host: str
     database_name: str
     table_name: str
     port: int
     username: str
     password: str
     conn = None

     def __init__(self, host, database_name, port, username,
                  password):
         self.host = host
         self.database_name = database_name
         self.port = port
         self.username = username
         self.password = password

     def connect(self):
         try:
             logger.info(f"connecting to {self.host}")
             self.conn = pg8000.connect(
                 host=self.host, port=self.port, database=self.database_name,
                 user=self.username, password=self.password
             )
             return True
         except Exception as e:
             logger.error(f"Couldn't connect to the db {self.host}- {e}")

         return False

     def insert(self, insert_strings: list, record_to_insert: tuple):
         if not self.conn:
             logger.error("No able to connect to the database")
             return None
         cur = self.conn.cursor()
         for insert_string in insert_strings:
             cur.execute(f"{insert_string}", record_to_insert)
         self.conn.commit()
         cur.close()

     def close(self):
         if self.conn:
             self.conn.close()
             self.conn = None
```

<https://hackersandslackers.com/python-mysql-pymysql>

<https://medium.com/@vipinc.007/python-a-database-interaction-class-using-pymysql-3338fb90f38c>

## Others

<https://pypi.org/project/mysql-connector-python>

## psycopg2

Psycopg is the most popular PostgreSQL database adapter for the Python programming language. Its main features are the complete implementation of the Python DB API 2.0 specification and the thread safety (several threads can share the same connection). It was designed for heavily multi-threaded applications that create and destroy lots of cursors and make a large number of concurrent "INSERT"s or "UPDATE"s.

Psycopg 2 is mostly implemented in C as a libpq wrapper, resulting in being both efficient and secure. It features client-side and server-side cursors, asynchronous communication and notifications, "COPY TO/COPY FROM" support. Many Python types are supported out-of-the-box and adapted to matching PostgreSQL data types; adaptation can be extended and customized thanks to a flexible objects adaptation system.

Psycopg 2 is both Unicode and Python 3 friendly.

<https://pypi.org/project/psycopg2-binary>

<https://www.psycopg.org/docs>

<https://www.psycopg.org/docs/usage.html>

<https://www.psycopg.org/docs/cursor.html>
