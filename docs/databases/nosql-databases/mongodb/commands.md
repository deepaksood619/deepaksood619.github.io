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
brew install mongosh

mongosh "mongodb+srv://cluster0.xxx.mongodb.net/" --apiVersion 1 --username deepaksood619
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

db.collection.createIndex( { name: -1 } )
db.sms_collection.getIndexes()

db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
```

[Window Functions & Time Series Collections | MongoDB](https://www.mongodb.com/developer/products/mongodb/window-functions-and-time-series/)

## RDBMS Where Clause Equivalents in MongoDB

To query the document on the basis of some condition, you can use following operations.

| **Operation** | **Syntax** | **Example** | **RDBMS Equivalent** |
|:---:|:---:|:---:|:---:|
| Equality | {key:value} | db.mycol.find({"by":"tutorials point"}).pretty() | where by = 'tutorials point' |
| Less Than | {key:{$lt:value}} | db.mycol.find({"likes":{$lt:50}}).pretty() | where likes < 50 |
| Less Than Equals | {key:{$lte:value}} | db.mycol.find({"likes":{$lte:50}}).pretty() | where likes <= 50 |
| Greater Than | {key:{$gt:value}} | db.mycol.find({"likes":{$gt:50}}).pretty() | where likes > 50 |
| Greater Than Equals | {key:{$gte:value}} | db.mycol.find({"likes":{$gte:50}}).pretty() | where likes >= 50 |
| Not Equals | {key:{$ne:value}} | db.mycol.find({"likes":{$ne:50}}).pretty() | where likes != 50 |

## Others

- VS Code extension for mongodb
