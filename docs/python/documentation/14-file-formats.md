# 14. File Formats

- [14.1.csv - CSV File Reading and Writing](https://docs.python.org/3.4/library/csv.html)
  - [14.1.1. Module Contents](https://docs.python.org/3.4/library/csv.html#module-contents)
  - [14.1.2. Dialects and Formatting Parameters](https://docs.python.org/3.4/library/csv.html#dialects-and-formatting-parameters)
  - [14.1.3. Reader Objects](https://docs.python.org/3.4/library/csv.html#reader-objects)
  - [14.1.4. Writer Objects](https://docs.python.org/3.4/library/csv.html#writer-objects)
  - [14.1.5. Examples](https://docs.python.org/3.4/library/csv.html#examples)
- [14.2.configparser - Configuration file parser](https://docs.python.org/3.4/library/configparser.html)
  - [14.2.1. Quick Start](https://docs.python.org/3.4/library/configparser.html#quick-start)
  - [14.2.2. Supported Datatypes](https://docs.python.org/3.4/library/configparser.html#supported-datatypes)
  - [14.2.3. Fallback Values](https://docs.python.org/3.4/library/configparser.html#fallback-values)
  - [14.2.4. Supported INI File Structure](https://docs.python.org/3.4/library/configparser.html#supported-ini-file-structure)
  - [14.2.5. Interpolation of values](https://docs.python.org/3.4/library/configparser.html#interpolation-of-values)
  - [14.2.6. Mapping Protocol Access](https://docs.python.org/3.4/library/configparser.html#mapping-protocol-access)
  - [14.2.7. Customizing Parser Behaviour](https://docs.python.org/3.4/library/configparser.html#customizing-parser-behaviour)
  - [14.2.8. Legacy API Examples](https://docs.python.org/3.4/library/configparser.html#legacy-api-examples)
  - [14.2.9. ConfigParser Objects](https://docs.python.org/3.4/library/configparser.html#configparser-objects)
  - [14.2.10. RawConfigParser Objects](https://docs.python.org/3.4/library/configparser.html#rawconfigparser-objects)
  - [14.2.11. Exceptions](https://docs.python.org/3.4/library/configparser.html#exceptions)
- [14.3.netrc - netrc file processing](https://docs.python.org/3.4/library/netrc.html)
  - [14.3.1. netrc Objects](https://docs.python.org/3.4/library/netrc.html#netrc-objects)
- [14.4.xdrlib - Encode and decode XDR data](https://docs.python.org/3.4/library/xdrlib.html)
  - [14.4.1. Packer Objects](https://docs.python.org/3.4/library/xdrlib.html#packer-objects)
  - [14.4.2. Unpacker Objects](https://docs.python.org/3.4/library/xdrlib.html#unpacker-objects)
  - [14.4.3. Exceptions](https://docs.python.org/3.4/library/xdrlib.html#exceptions)
- [14.5.plistlib - Generate and parse Mac OS X.plistfiles](https://docs.python.org/3.4/library/plistlib.html)
  - [14.5.1. Examples](https://docs.python.org/3.4/library/plistlib.html#examples)

14.2.[configparser](https://docs.python.org/3.4/library/configparser.html#module-configparser) - Configuration file parser

This module provides the [ConfigParser](https://docs.python.org/3.4/library/configparser.html#configparser.ConfigParser) class which implements a basic configuration language which provides a structure similar to what's found in Microsoft Windows INI files. You can use this to write Python programs which can be customized by end users easily.

## config.ini

[mysqlDB]
host = '0.0.0.0'
db = 'test'
user = 'root'
pass = 'pswd'

## test.py

```python
import configparser
import MySQLdb.cursors
config = configparser.ConfigParser()
config.read('config.ini')
def connect():
  return MySQLdb.connect(host = config['mysqlDB']['host'],
                          user = config['mysqlDB']['user'],
                          passwd = config['mysqlDB']['pass'],
                           db = config['mysqlDB']['db'])
```

## Using Python files

## config.py

username = "xy"
password = "abcd"

## main.py

```python
import config
login(config.username, config.password)
```

## Using built-in data structure

```python
# config.py
DATABASE_CONFIG = {
    'host': 'localhost',
    'dbname': 'company',
    'user': 'user',
    'password': 'password',
    'port': 3306
}

# main.py
import pymysql
import config

def connect_db(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                            user=config.DATABASE_CONFIG['user'],
                            password=config.DATABASE_CONFIG['password'],
                            db=config.DATABASE_CONFIG['dbname'])
    return conn

connect_db('company')
```

## Using json

```json
// credentials.json
{
  "DEFAULT": {
    "SECRET_KEY": "secret-key-of-myapp",
    "ADMIN_NAME": "administrator",
    "AWS_DEFAULT_REGION": "ap-northeast-2",
    "MAX_IMAGE_SIZE": 5242880
  },
  "TEST": {
    "TEST_TMP_DIR": "tests",
    "TEST_TIMEOUT": 20
  },
  "CI": {
    "SERVICE": "travis-ci",
    "HOOK_URL": "web-hooking-url-from-ci-service"
  }
}
```

```python
# main_with_json.py
import json

with open('credentials.json', 'r') as f:
    credentials= json.load(f)

secret_key = credentials['DEFAULT']['SECRET_KEY'] # 'secret-key-of-myapp'
ci_hook_url = credentials['CI']['HOOK_URL'] # 'web-hooking-url-from-ci-service'
```

## Using dynamicloading

```python
# /opt/settings/config.py
DATABASE_CONFIG = {
    'host': 'localhost',
    'dbname': 'company',
    'user': 'user',
    'password': 'password',
    'port': 3306
}

# main.py
import sys
import pymysql

sys.path.append('/opt/settings')
import config

def connect_db(dbname):
    if dbname != config.DATABASE_CONFIG['dbname']:
        raise ValueError("Couldn't not find DB with given name")
    conn = pymysql.connect(host=config.DATABASE_CONFIG['host'],
                            user=config.DATABASE_CONFIG['user'],
                            password=config.DATABASE_CONFIG['password'],
                            db=config.DATABASE_CONFIG['dbname'])
    return conn

connect_db('company')
```

<https://hackernoon.com/4-ways-to-manage-the-configuration-in-python-4623049e841b>

<https://docs.python.org/3/library/configparser.html>

<https://hackersandslackers.com/simplify-your-python-projects-configuration>
