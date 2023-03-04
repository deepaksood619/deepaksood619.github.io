# Others

<https://github.com/pallets/flask/tree/1.1.2/examples/tutorial>

<https://flask.palletsprojects.com/en/1.1.x/tutorial/database>

The first thing to do when working with a SQLite database (and most other Python database libraries) is to create a connection to it. Any queries and operations are performed using the connection, which is closed after the work is finished.

In web applications this connection is typically tied to the request. It is created at some point when handling a request, and closed before the response is sent.

## flaskr/db.py

from flask import current_app, g
from flask.cli import with_appcontext

def get_db():
if 'db' not in g:
g.db = sqlite3.connect(
current_app.config ['DATABASE'],
detect_types=sqlite3.PARSE_DECLTYPES
)
g.db.row_factory = sqlite3.Row

return g.db

def close_db(e=None):
db = g.pop('db', None)

if db is not None:
db.close()

Flask provides two contexts: the*application context*and the*request context*. For instance, the [**request**](https://flask.palletsprojects.com/en/0.12.x/api/#flask.request) variable is the request object associated with the current request, whereas [**g**](https://flask.palletsprojects.com/en/0.12.x/api/#flask.g) is a general purpose variable associated with the current application context.

[g](https://flask.palletsprojects.com/en/1.1.x/api/#flask.g) is a special object that is unique for each request. It is used to store data that might be accessed by multiple functions during the request. The connection is stored and reused instead of creating a new connection ifget_dbis called a second time in the same request.

[current_app](https://flask.palletsprojects.com/en/1.1.x/api/#flask.current_app) is another special object that points to the Flask application handling the request. Since you used an application factory, there is no application object when writing the rest of your code.get_dbwill be called when the application has been created and is handling a request, so [current_app](https://flask.palletsprojects.com/en/1.1.x/api/#flask.current_app) can be used.

[sqlite3.connect()](https://docs.python.org/3/library/sqlite3.html#sqlite3.connect) establishes a connection to the file pointed at by theDATABASEconfiguration key. This file doesn't have to exist yet, and won't until you initialize the database later.

[sqlite3.Row](https://docs.python.org/3/library/sqlite3.html#sqlite3.Row) tells the connection to return rows that behave like dicts. This allows accessing the columns by name.

close_dbchecks if a connection was created by checking ifg.dbwas set. If the connection exists, it is closed. Further down you will tell your application about theclose_dbfunction in the application factory so that it is called after each request.

## In a web application, each request should have its own db connection. So yourget_driverfunction should create a connection and close that connection when it is finished (in a finally clause)
