# Others

https://docs.mongodb.com/manual/core/index-ttl

TTL indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time or at a specific clock time. Data expiration is useful for certain types of information like machine generated event data, logs, and session information that only need to persist in a database for a finite amount of time.

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
