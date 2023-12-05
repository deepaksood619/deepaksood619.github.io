# Commands / Influx Query Language (InfluxQL)

1. [Sample data](https://docs.influxdata.com/influxdb/v1.7/query_language/data_download/)
2. [Data exploration](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/)
3. [Schema exploration](https://docs.influxdata.com/influxdb/v1.7/query_language/schema_exploration/)
4. [Data management](https://docs.influxdata.com/influxdb/v1.7/query_language/database_management/)
5. [Continuous Queries](https://docs.influxdata.com/influxdb/v1.7/query_language/continuous_queries/)
6. [Functions](https://docs.influxdata.com/influxdb/v1.7/query_language/functions/)
7. [Mathematical operators](https://docs.influxdata.com/influxdb/v1.7/query_language/math_operators/)
8. [InfluxQL reference](https://docs.influxdata.com/influxdb/v1.7/query_language/spec/)

Getting into database (login to influx cli)

```bash
influx
influx -precision rfc3339
```

## INFLUXQL

InfluxQL is an SQL-like query language for interacting with data in InfluxDB.

```bash
# SHOW Commands
SHOW [DATABASES, DIAGNOSTICS, MEASUREMENTS, QUERIES, SERIES, SHARDS, STATS, SUBSCRIPTIONS, TAG, USERS]

# Schema Exploration
CREATE DATABASE parameter_series;

SHOW DATABASES;

SHOW MEASUREMENTS;

# SHOW FIELD KEYS
SHOW FIELD KEYS ON "telegraf"

SHOW FIELD KEYS ON "telegraf" FROM "apache_access_log"

SHOW RETENTION POLICIES

SHOW RETENTION POLICIES ON "telegraf"

SHOW TAG KEYS

SHOW SERIES

SHOW SERIES ON telegraf (huge amount of data)

SHOW TAG VALUES

SHOW TAG VALUES ON "telegraf" WITH KEY = "topic";

INSERT temp,tag1='tag1',tag2='tag2' value=22.2

https://docs.influxdata.com/influxdb/v1.7/query_language/schema_exploration

# Examples
SELECT client_ip FROM "apache_access_log" (huge amount of data)

SELECT client_ip FROM "apache_access_log" ORDER BY time DESC LIMIT 10
CREATE RETENTION POLICY "device_ret" ON "telegraf" DURATION 4w SHARD DURATION 2d REPLICATION 1 DEFAULT

ALTER RETENTION POLICY "device_ret" ON "telegraf" DURATION 4w SHARD DURATION 2d DEFAULT

DROP RETENTION POLICY "autogen" ON "hawkbit"
select id,max(writePointsOk) from "shard" where "database"='telegraf' group by id;

select "database",diskBytes,fieldsCreate,id,writePointsOk from "shard" where "database"='telegraf' and time > now() -10s

# InfluxDB
docker run --rm -d --name influxdb --net=influxdb -p 8083:8083 -p 8086:8086 influxdb

# Curl queries
curl -G http://localhost:8086/query -u todd:influxdb4ever --data-urlencode "q=SHOW DATABASES"

# Chronograf
docker run --rm -d --name chronograf -p 8888:8888 --net=influxdb chronograf
```

## Continuous Queries

Continuous Queries (CQ) are InfluxQL queries that run automatically and periodically on realtime data and store query results in a specified measurement.

CQs were designed to aggregate the data you want to keep in a new measurement (referred to as downsampling). Your time series data comes in thousands or millions of points; you don't want to store them all forever unless absolutely necessary because the disk requirements quickly get out of hand. CQs offer a way for you to keep the summaries of your data without keeping all of the individual points.With CQs, you can have the full resolution data expire with a retention policy (or you can drop it manually) and you keep only what you need.

https://docs.influxdata.com/influxdb/v1.7/query_language/continuous_queries
