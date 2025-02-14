# Others

## Mongodb Oplog

The oplog (operation log) is a capped collection that records all write operations in a MongoDB replica set. It allows secondary nodes to replicate the changes from the primary node, ensuring consistency among the nodes.

## Mongo Change Streams

Change streams allow applications to access real-time data changes without the complexity and risk of tailing the [oplog](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-oplog). Applications can use change streams to subscribe to all data changes on a single collection, a database, or an entire deployment, and immediately react to them. Because change streams use the aggregation framework, applications can also filter for specific changes or transform the notifications at will.

Starting in MongoDB 5.1, change streams are optimized, providing more efficient resource utilization and faster execution of some aggregation pipeline stages.

[Change Streams - MongoDB Manual](https://www.mongodb.com/docs/manual/changeStreams/)

## Tailable Cursors

By default, MongoDB will automatically close a cursor when the client has exhausted all results in the cursor. However, for [capped collections](https://www.mongodb.com/docs/manual/core/capped-collections/) you may use a _Tailable Cursor_ that remains open after the client exhausts the results in the initial cursor. Tailable cursors are conceptually equivalent to the `tail` Unix command with the `-f` option (i.e. with "follow" mode). After clients insert new additional documents into a capped collection, the tailable cursor will continue to retrieve documents.

[Tailable Cursors - MongoDB Manual](https://www.mongodb.com/docs/manual/core/tailable-cursors/)

## UI / Tools

- [MongoDB Ops Manager | MongoDB](https://www.mongodb.com/products/self-managed/enterprise-advanced/ops-manager)
- https://studio3t.com
- Metabase
- [**NoSQLBooster - The Smartest GUI Tool and IDE for MongoDB**](https://nosqlbooster.com/)

### Compass

```json
{username: 'abc'}

{ "start_date": {$gt: new Date('2017-05-01')} }

{ "created_at": {$gt: new ISODate('2024-01-06T17:00:00.000Z')}, "template": ObjectId('654e026678a908f1ce241df1') }

{ author : { $eq : "Joe Bloggs" } }

{ dateCreated: { $gt: Date('2000-06-22') } }

{ scores: { $elemMatch: { $gt: 80, $lt: 90 } } }

-- search - like abc
{"email": /abc/}

{ "title": { "$regex": "(?i)The Village" } }

{"user": ObjectId("64591b347266058256f16f43")}

{"user": ObjectId("64591b347266058256f16f43"), "type": "DR"}
```

[Query Your Data - MongoDB Compass](https://www.mongodb.com/docs/compass/current/query/filter/

[MongoDB Compass | MongoDB](https://www.mongodb.com/products/compass)

### mongo-express

Web-based MongoDB admin interface written with Node.js, Express and Bootstrap3

#### Features

- Connect to multiple databases
- View/add/delete databases
- View/add/rename/delete collections
- View/add/update/delete documents
- Preview audio/video/image assets inline in collection view
- Nested and/or large objects are collapsible for easy overview
- Async on-demand loading of big document properties (>100KB default) to keep collection view fast
- GridFS support - add/get/delete incredibly large files
- Use BSON data types in documents
- Mobile / Responsive - Bootstrap 3 works passably on small screens when you're in a bind
- Connect and authenticate to individual databases
- Authenticate as admin to view all databases
- Database blacklist/whitelist
- Custom CA and CA validation disabling
- Supports replica sets

https://github.com/mongo-express/mongo-express

### MongoSync

```bash
./mongosync --cluster0 mongodb://username:password@1.1.1.1:27018/ --cluster1 mongodb+srv://username:password@cluster0.abc.mongodb.net/
```

[mongosync - MongoDB Cluster-to-Cluster Sync](https://www.mongodb.com/docs/cluster-to-cluster-sync/current/reference/mongosync/)

[Frequently Asked Questions - MongoDB Cluster-to-Cluster Sync](https://www.mongodb.com/docs/cluster-to-cluster-sync/current/faq/)

## Others

- [mongomirror - MongoDB Atlas](https://www.mongodb.com/docs/atlas/reference/mongomirror/) - `mongomirror` is a tool for manually migrating data from an existing MongoDB replica set to a MongoDB Atlas replica set.
