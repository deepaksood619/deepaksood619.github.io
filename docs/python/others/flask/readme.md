# Flask

Flask is a micro web framework written in Python and based on the Werkzeug toolkit and Jinja2 template engine.

Flask is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation. Flask supports extensions that can add application features as if they were implemented in Flask itself.

## Features

- Contains development server and debugger
- Integrated support for unit testing
- RESTful request dispatching
- Uses Jinja2 templating
- Support for secure cookies
- 100% WSGI 1.0 compliant
- Unicode-based
- Google App Engine compatibility

https://stxnext.com/blog/2018/09/27/beginners-introduction-python-frameworks

## Request

request.dataContains the incoming request data as string in case it came with a mimetype Flask does not handle.

- [request.args](https://flask.palletsprojects.com/api/#flask.Request.args): the key/value pairs in the URL query string
- [request.form](https://flask.palletsprojects.com/api/#flask.Request.form): the key/value pairs in the body, from a HTML post form, or JavaScript request that isn't JSON encoded
- [request.files](https://flask.palletsprojects.com/api/#flask.Request.files): the files in the body, which Flask keeps separate fromform. HTML forms must useenctype=multipart/form-dataor files will not be uploaded.
- [request.values](https://flask.palletsprojects.com/api/#flask.Request.values): combinedargsandform, preferringargsif keys overlap
- [request.json](https://flask.palletsprojects.com/api/#flask.Request.json): parsed JSON data. The request must have theapplication/jsoncontent type, or use[request.get_json(force=True)](https://flask.palletsprojects.com/api/#flask.Request.get_json) to ignore the content type.
- request.data
- request.__dict__ (type - dict)
- request.headers (type - dict)
- request.headers.get('device_id')

All of these are[MultiDict](https://werkzeug.palletsprojects.com/datastructures/#werkzeug.datastructures.MultiDict) instances (except forjson). You can access values using:

- request.form['name']: use indexing if you know the key exists
- request.form.get('name'): usegetif the key might not exist
- request.form.getlist('name'): usegetlistif the key is sent multiple times and you want a list of values.getonly returns the first value.

https://stackoverflow.com/questions/10434599/get-the-data-received-in-a-flask-request

## Examples

https://gist.github.com/deepaksood619/99e790959f5eba6ba0815e056a8067d7

```python
 import logging
 import os
 import traceback
 from logging.config import dictConfig

 import sentry_sdk
 from sentry_sdk.integrations.flask import FlaskIntegration
 sentry_sdk.init(
  dsn=SENTRY_DSN,
  integrations=[FlaskIntegration()],
  attach_stacktrace=True,
  environment=ENVIRONMENT,
 )

 from flask import Flask, make_response, request, abort, jsonify, redirect, url_for

 # logging settings
 debug = eval(os.environ.get('DEBUG', 'False'))

 # for sending error logs to slack
 class HTTPSlackHandler(logging.Handler):
     def emit(self, record):
         log_entry = self.format(record)
         json_text = json.dumps({"text": log_entry})
         url = 'https://hooks.slack.com/services/<org_id>/<api_key>'
         return requests.post(url, json_text, headers={"Content-type": "application/json"}).content

 dictConfig({
     "version": 1,
     "disable_existing_loggers": True,
     "formatters": {
         "default": {
             "format": "[%(asctime)s] %(levelname)s in %(module)s: %(message)s",
         },
         "access": {
             "format": "%(message)s",
         }
     },
     "handlers": {
         "console": {
             "level": "INFO",
             "class": "logging.StreamHandler",
             "formatter": "default",
             "stream": "ext://sys.stdout",
         },
         "email": {
             "class": "logging.handlers.SMTPHandler",
             "formatter": "default",
             "level": "ERROR",
             "mailhost": ("smtp.example.com", 587),
             "fromaddr": "devops@example.com",
             "toaddrs": ["receiver@example.com", "receiver2@example.com"],
             "subject": "Error Logs",
             "credentials": ("username", "password"),
         },
         "slack": {
             "class": "app.HTTPSlackHandler",
             "formatter": "default",
             "level": "ERROR",
         },
         "error_file": {
             "class": "logging.handlers.RotatingFileHandler",
             "formatter": "default",
             "filename": "/var/log/gunicorn.error.log",
             "maxBytes": 10000,
             "backupCount": 10,
             "delay": "True",
         },
         "access_file": {
             "class": "logging.handlers.RotatingFileHandler",
             "formatter": "access",
             "filename": "/var/log/gunicorn.access.log",
             "maxBytes": 10000,
             "backupCount": 10,
             "delay": "True",
         }
     },
     "loggers": {
         "gunicorn.error": {
             "handlers": ["console"] if debug else ["console", "slack", "error_file"],
             "level": "INFO",
             "propagate": False,
         },
         "gunicorn.access": {
             "handlers": ["console"] if debug else ["console", "access_file"],
             "level": "INFO",
             "propagate": False,
         }
     },
     "root": {
         "level": "DEBUG" if debug else "INFO",
         "handlers": ["console"] if debug else ["console", "slack"],
     }
 })

 app = Flask(__name__)

 logging.warning('application started')

 @app.errorhandler(404)
 def resource_not_found(exception):
 """Returns exceptions as part of a json."""
  return jsonify(error=str(exception)), 404

 @app.route("/get_result")
 def get_result():
     """Takes a job_id and returns the job's result."""
     job_id = request.args["job_id"]

     try:
         job = Job.fetch(job_id, connection=redis_conn)
     except Exception as exception:
         abort(404, description=exception)

     if not job.result:
         abort(
             404,
             description=f"No result found for job_id {job.id}. Try checking the job's status.",
         )
     return jsonify(job.result)

 @app.route('/add/<customer>', methods=["POST"])
 def save_data(customer):
     try:
   logging.info(f'request.data: {request.data}')
   logging.info(f'request.args: {request.args}')
   logging.info(f'request.form: {request.form}')
   logging.info(f'request.files: {request.files}')
   logging.info(f'request.values: {request.values}')
   logging.info(f'request.json: {request.json}')
   logging.info(f'request.headers: {request.headers}')
   logging.info(f'request.__dict__: {request.__dict__}')
   request.method # request type
   request.cookies.get('cookie_name') #cookies

         if payload:
             logging.info(f'payload: {payload}')

             return make_response('OK', 200)
         else:
             return make_response('Payload Empty', 400)
     except Exception as e:
      logging.error(traceback.format_exc())

     return make_response('FAIL', 500)

 @app.route('/status', methods=["GET"])
 def health_check():
     return jsonify(success="OK"), 200

 @app.route('/score', method=["GET"])
 def score():
     cust_id = request.args('cust_id')

     if not cust_id:
         return make_response('Pass cust_id', 400)

 @app.route('/redirect')
 def redirect_example():
  return redirect(url_for('home')) @ sends user to /home

 #set cookie
 @app.route('/')
 def index():
  resp = make_response(render_template('index.html'))
  resp.set_cookie('cookie_name', 'cookie_value')
  return resp

 #session handling
  import session
  app.config['SECRET_KEY'] = 'any random string' #must be set to use sessions

  #set session
  @app.route('/login_success')
  def login_success():
   session['key_name'] = 'key_value' #stores a secure cookie in browser
   return redirect(url_for('index'))

  #read session
  @app.route('/')
  def index():
   if 'key_name' in session: #session exists and has key
    session_var = session['key_value']
   else:
    #session does not exist

 @app.before_first_request
def _run_on_start(a_string):
    print "doing something important with %s" % a_string

 app.add_url_rule("/userdevicesms", "userdevicesms", user_device_sms, methods=["POST"])
 app.add_url_rule("/score", "score", score, methods=["GET"])

 if __name__ == '__main__':
     app.run(host='0.0.0.0', port='5000')
```

## Serving

```bash
gunicorn kafka_flask_republisher:app -b 0.0.0.0:5000 --workers 2 -k gevent --timeout 300 --worker-connections 1000 --max-requests 1000000 --log-level info --limit-request-line 8190 --access-logfile -

# running
python app.py
```

## Requirements.txt

```txt
Flask==1.1.1
gunicorn[gevent]==19.9.0
```

## Flask

Theurl_for()function is very useful for dynamically building a URL for a specific function. The function accepts the name of a function as first argument, and one or more keyword arguments, each corresponding to the variable part of URL.

'web templating system'refers to designing an HTML script in which the variable data can be inserted dynamically. A web template system comprises of a template engine, some kind of data source and a template processor.

to_python()is used to convert the path in the URL to a Python object that will be passed to the view andto_url()is used byurl_for()to convert arguments to their appropriate forms in the URL.

https://www.tutorialspoint.com/flask

## Debugging

https://blog.theodo.com/2020/05/debug-flask-vscode

## Flask Extensions / Libraries / Plugins

1. Flask-admin - https://flask-admin.readthedocs.io/en/latest
2. Flask-blueprint - [Modular Applications with Blueprints — Flask Documentation (3.1.x)](https://flask.palletsprojects.com/en/1.1.x/blueprints) [Use a Flask Blueprint to Architect Your Applications – Real Python](https://realpython.com/flask-blueprint)
3. Flask-mail - https://pythonhosted.org/Flask-Mail
4. Flask-principal - https://pythonhosted.org/Flask-Principal
5. Flask-sslify - https://github.com/kennethreitz-archive/flask-sslify
6. Flask-Uploads - https://github.com/maxcountryman/flask-uploads

### Rest Libraries

1. Flask-Restful - https://github.com/flask-restful/flask-restful
2. Flask-restplus (DEAD) - https://flask-restplus.readthedocs.io/en/stable
	1. https://medium.com/@preslavrachev/designing-well-structured-rest-apis-with-flask-restplus-part-1-7e96f2da8850
3. Flask-Marshmallow - https://flask-marshmallow.readthedocs.io/en/latest
	1. [Intro to Marshmallow: A Python Object Serialization Library - YouTube](https://www.youtube.com/watch?v=Gl-5m1_eVjI)
4. Flask-WTF - https://flask-wtf.readthedocs.io/en/stable

### Security / Auth

1. Flask-security - https://pythonhosted.org/Flask-Security
	1. Flask-Security allows you to quickly add common security mechanisms to your Flask application.
2. Flask-login - https://flask-login.readthedocs.io/en/latest
	2. https://github.com/maxcountryman/flask-login
3. Flask Praetorian - https://flask-praetorian.readthedocs.io/en/latest
	1. This extension offers a batteries-included approach to security for your API.
	2. [Flask-Praetorian Walkthrough: A Library for API Security With JSON Web Tokens (JWT) - YouTube](https://www.youtube.com/watch?v=WubG9iKXZ2g)
4. Flask-User - https://github.com/lingthio/Flask-User
	1. [https://flask-oidc.readthedocs.io/en/latest/](https://flask-oidc.readthedocs.io/en/latest/)

### Databases

1. Flask-SQLAlchemy - https://github.com/pallets/flask-sqlalchemy
	1. [https://towardsdatascience.com/use-flask-and-sqlalchemy-not-flask-sqlalchemy-5a64fafe22a4](https://towardsdatascience.com/use-flask-and-sqlalchemy-not-flask-sqlalchemy-5a64fafe22a4)
2. geo-alchemy2 - https://geoalchemy-2.readthedocs.io/en/latest
3. Flask-PyMongo - https://github.com/dcrosta/flask-pymongo
4. Flask-Caching - https://flask-caching.readthedocs.io/en/latest
	1. [Intro to Flask-Caching - YouTube](https://www.youtube.com/watch?v=iO0sL6Vyfps)
	2. [Pretty Printed - YouTube](https://www.youtube.com/c/PrettyPrintedTutorials/playlists)

### Flask Click

Click is a Python package for creating beautiful command line interfaces in a composable way with as little code as necessary. It's the "Command Line Interface Creation Kit". It's highly configurable but comes with sensible defaults out of the box.

https://click.palletsprojects.com/en/7.x

#### Commands

```bash
routes  Show the routes for the app
run       Run a development server
shell     Run a shell in the app context

export FLASK_APP=flaskr
export FLASK_ENV=development
flask init-db
flask run

flask shell
from app import db
db.create_all()

from app import db, Product, Order, Customer
johndoe = Customer(first_name='John', last_name='Doe')
db.session.add(johndoe)
db.session.commit()
order = Order(coupon_code='FREE', customer_id=1, products=[computer, phone])
johndoe = Customer.query.filter_by(id=1).first().first_name
Customer.query.all()
Customer.query.filter_by(id=1).one().first_name

# for updating a column
johndoe.address = '456 fake street'
db.session.commit()

# for deleting a row
db.session.delete(johndoe)
db.session.commit()

# migrations
# directly sql queries
```

## File structure

```bash
 k8s/
 src/
  app/
   main.py
   constants.py
  tests/
   data/
   tests.py
 .dockerignore
 .flake8
 .gitignore
 .isort.cfg
 .pre-commit-config.yaml
 config.yaml
 credentials.json
 credentials_sample.json
 dev.env
 docker-compose.yaml
 Dockerfile
 Jenkinsfile
 README
    requirements.txt
```

## Coding Snippets

```python
 @backoff.on_exception(
  backoff.expo, (requests.exceptions.Timeout, requests.exceptions.ConnectionError)
 )
 def populate(destination):
  url = f"{destination}/populate"
  requests.get(url)

 if __name__ == "__main__":
  destination = os.getenv("DESTINATION", "http://localhost:8000")
  populate(destination)
  while True:
   send_requests(destination)
   time.sleep(5)
```

[ww25.zabana.me/notes/flask-tutorial-upload-files-amazon-s3?subid1=20250409-0326-191e-8328-5f5958fc3a2c](https://www.zabana.me/notes/flask-tutorial-upload-files-amazon-s3)

## Resources

https://www.freecodecamp.org/news/learn-the-flask-python-web-framework-by-building-a-market-platform
