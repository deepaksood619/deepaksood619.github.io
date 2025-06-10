# Commands

```yaml
services:
  mongo:
    stdin_open: true
    tty: true
    restart: "no"
    image: mongo
    container_name: mongo
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo_express:
    stdin_open: true
    tty: true
    restart: "no"
    image: mongo-express
    container_name: mongo_express
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
```

```bash
brew install mongodb

# start mongodb server
brew services start mongo

# start mongo client
mongo
mongo -u root -p example
```

```bash
# mongodb shell
brew install mongosh

mongosh "mongodb+srv://cluster0.xxx.mongodb.net/" --apiVersion 1 --username deepaksood619
```

```bash
# database tools
brew tap mongodb/brew
brew install mongodb-database-tools

# backup mongodb database
mongodump --uri="mongodb://mongodb0.example.com:27017"
```

### Mongo Dump Job

`0 */6 * * * python3 /home/ubuntu/db_backups/db_snapshot.py`

```python title="db_snapshot.py"
import datetime
import os
import shutil

import boto3

s3 = boto3.client(
    "s3",
    aws_access_key_id="xxx",
    aws_secret_access_key="xxx",
)


def make_dump():
    os.system("mongodump --uri='mongodb://root:example@localhost:27017/db_name?authSource=admin'")
    shutil.make_archive(file_name, "zip", "dump")


def upload_to_s3():
    s3.upload_file(
        f"{file_name}.zip", "s3-storage-bucket", f"db_backup/{file_name}.zip"
    )


if __name__ == "__main__":
    script_directory = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_directory)
    file_name = f"dump_{datetime.datetime.now().strftime('%Y_%m_%d_%H:%M')}"
    make_dump()
    upload_to_s3()
    os.system("rm -r dump*")
```

## Mongo DB Queries

```python
db.stats()
use <db_name>
use user_device_sms #create db user_device_sms
db #show current db
show dbs #show databases, only shows database with atleast one document
db.movie.insert({'name':'End game'}) #automatically creates a collection movie if not present
db.dropDatabase()

db.createUser({user:"deepak", pwd:"12345", roles:["readWrite", "dbAdmin"]})

db.createCollection(name, options)
show collections
db.createCollection("customers")
db.createCollection("mycol", { capped : true, autoIndexId : true, size :
6142800, max : 10000 } )
db.customers.insert({"first_name":"Deepak","last_name":"Sood"});
db.COLLECTION_NAME.drop()

db.COLLECTION_NAME.find()
db.COLLECTION_NAME.find().pretty()
db.sms_collection.find({device_id: "009906bcc9ed9d86"})
db.sms_collection.find({device_id: "009906bcc9ed9d86"}, {device_id: 1})
db.sms_collection.find({}, {device_id: 1})

db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA) #updates the values in the existing document.
db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA}) #replaces the existing document with the new document passed in the save() method.
db.COLLECTION_NAME.remove(DELLETION_CRITTERIA) #remove a document from the collection
db.COLLECTION_NAME.remove(DELETION_CRITERIA,1) #If there are multiple records and you want to delete only the first record, then set justOne parameter in remove() method.
db.COLLECTION_NAME.find().limit(NUMBER)
db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER) #accepts number type argument and is used to skip the number of documents.
db.COLLECTION_NAME.find().sort({KEY:1}) #1 is used for ascending order while -1 is used for descending order.

db.customers.find().forEach(function(doc){print("Cust Name: "+doc.first_name)}); # looping through all data

# count + search
db.collection_name.count({ "created_at": {$gt: new ISODate('2024-01-06T17:00:00.000Z')}, "template": ObjectId('654e026678a908f1ce241df1') })

# deleteMany
db.collection_name.deleteMany({ "created_at": {$gt: new ISODate('2024-01-06T17:00:00.000Z')}, "template": ObjectId('654e026678a908f1ce241df1') })

db.collection.createIndex( { name: -1 } )
db.sms_collection.getIndexes()

db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)

# using full text search index
{$text: { $search: "action adventure", $caseSensitive: false } }
```

[Window Functions & Time Series Collections | MongoDB](https://www.mongodb.com/developer/products/mongodb/window-functions-and-time-series/)

## RDBMS Where Clause Equivalents in MongoDB

To query the document on the basis of some condition, you can use following operations.

| **Operation** | **Syntax** | **Example** | **RDBMS Equivalent** |
|:---:|:---:|:---:|:---:|
| Equality | `{key:value}` | `db.mycol.find({"by":"tutorials point"}).pretty()` | `where by = 'tutorials point'` |
| Less Than | `{key:{$lt:value}}` | `db.mycol.find({"likes":{$lt:50}}).pretty()` | `where likes < 50` |
| Less Than Equals | `{key:{$lte:value}}` | `db.mycol.find({"likes":{$lte:50}}).pretty()` | `where likes <= 50` |
| Greater Than | `{key:{$gt:value}}` | `db.mycol.find({"likes":{$gt:50}}).pretty()` | `where likes > 50` |
| Greater Than Equals | `{key:{$gte:value}}` | `db.mycol.find({"likes":{$gte:50}}).pretty()` | `where likes >= 50` |
| Not Equals | `{key:{$ne:value}}` | `db.mycol.find({"likes":{$ne:50}}).pretty()` | `where likes != 50` |

## Others

- VS Code extension for mongodb
