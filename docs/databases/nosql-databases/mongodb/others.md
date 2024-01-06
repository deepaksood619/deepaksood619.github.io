# Others

## UI / Tools

- https://studio3t.com
- Metabase

### Compass

```json
{username: 'abc'}

{ "start_date": {$gt: new Date('2017-05-01')} }

{ author : { $eq : "Joe Bloggs" } }

{ dateCreated: { $gt: Date('2000-06-22') } }

{ scores: { $elemMatch: { $gt: 80, $lt: 90 } } }

-- search - like abc
{"email": /abc/}

{ "title": { "$regex": "(?i)The Village" } }

{"user": ObjectId("64591b347266058256f16f43")}

{"user": ObjectId("64591b347266058256f16f43"), "type": "DR"}
```

[Query Your Data — MongoDB Compass](https://www.mongodb.com/docs/compass/current/query/filter/

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

[mongosync — MongoDB Cluster-to-Cluster Sync](https://www.mongodb.com/docs/cluster-to-cluster-sync/current/reference/mongosync/)
