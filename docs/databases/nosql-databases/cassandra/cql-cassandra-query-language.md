# CQL (Cassandra Query Language)

## CQL

- CQL mapping to cassandra's internal data structure
- Use SQL like query language
- **CQL is a reintroduction of schema**
- **CQL creates a common language** so that details of the data model can be easily communicated
- **CQL is a best-practices Cassandra interface** and hides the messy details
- CQL let's you take advantage of the C* Data structure
- CQL protocol is binary and therefore interoperable with any language
- CQL is asynchronous and fast (Thrift transport layer is synchronous)
- CQL allows the possibility for prepared statements

## Commands

```sql
DESCRIBE KEYSPACES;

DESCRIBE TABLES;
CREATE KEYSPACE killrvideo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE killrvideo;
CREATE TABLE raw_data_by_day ( sensor text, day text, ts timeuuid, reading int, primary key((sensor, day), ts) ) WITH CLUSTERING ORDER BY (ts DESC) AND COMPACTION = {'class': 'TimeWindowCompactionStrategy', 'compaction_window_unit': 'DAYS', 'compaction_window_size': 1};
CREATE TABLE stuff ( a int, b int, myset set<int>, mylist list<int>, mymap map<int, int>, PRIMARY KEY (a,b));

CREATE TABLE videos ( video_id timeuuid, added_date timestamp, Title text, PRIMARY KEY (video_id));

CREATE TABLE videos_by_tag ( tag text, video_id timeuuid, added_date timestamp, Title text, PRIMARY KEY (tag, video_id));
CREATE TABLE videos_by_tag ( tag text, video_id timeuuid, added_date timestamp, Title text, PRIMARY KEY (tag, added_date, video_id)) WITH CLUSTERING ORDER BY(added_date ASC, video_id ASC);
INSERT INTO killrvideo.videos(video_id, added_date, Title) VALUES (1645ea59-14bd-11e5-a993-8138354b7e31, '2014-01-29', 'Cassandra History');
BEGIN BATCH

INSERT into users(username,name,age) VALUES('raziz12','Rashid Aziz',34);

INSERT INTO users_by_cities(username,name,city, age) VALUES ('raziz12','Rashid Aziz','Karachi',30);

APPLY BATCH;UPDATE stuff SET myset = {1,2}, mylist = [3,4,5], mymap = {6:7, 8:9} WHERE a = 0 AND b = 1;
SELECT * FROM stuff; (in cassandra-cli)

SELECT * FROM killrvideo.videos;

SELECT count(*) FROM killrvideo.videos;

SELECT * FROM videos_by_tag WHERE tag='cassandra';

SELECT * FROM videos_by_tag WHERE tag = 'cassandra' AND title='Cassandra Intro';

SELECT * FROM videos_by_tag WHERE tag='cassandra' ORDER BY added_date DESC;
LIST stuff;
SELECT key_aliases, column_aliases FROM system.schema_columnfamilies WHERE keyspace_name = 'test' AND columnfamily_name = 'stuff'; (in cqlsh)
TRUNCATE videos;

DROP TABLE videos_by_tag;
COPY videos(video_id, added_date, title) FROM '/Users/deepaksood/Downloads/ds201-6.0-labwork/labwork/data-files/videos.csv' WITH HEADER=TRUE;
COPY videos_by_tag (tag, video_id, added_date, title) FROM '/Users/deepaksood/Downloads/ds201-6.0-labwork/labwork/data-files/videos-by-tag.csv' WITH HEADER=TRUE;
QUIT
## DESCRIBE TABLE videos;

SELECT token(video_id), video_id FROM videos;
```

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image1.jpg)

### Remember this

- Cassandra finds rows fast
- Cassandra scans columns fast
- Cassandra does not scan rows

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image4.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image5.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image6.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image7.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image8.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image9.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image10.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image11.jpg)

![image](../../../media/Cassandra_CQL-(Cassandra-Query-Language)-image12.jpg)
