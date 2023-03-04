# Commands

| **Service**             | **Port** |
|-------------------------|----------|
| **druid-zookeeper**     | 2181     |
| **druid-coordinator**   | 8081     |
| **druid-overlord**      | 8090     |
| **druid-middlemanager** | 8091     |
| **druid-historical**    | 8083     |
| **druid-broker**        | 8082     |
| **druid-router**        | 8888     |
| **druid-postgresql**    | 5432     |

```python
DRUID_ZOOKEEPER_IP=172.18.3.2
DRUID_POSTGRESQL_IP=172.18.3.3
DRUID_COORDINATOR_IP=172.18.3.4
DRUID_HISTORICAL_IP=172.18.3.5
DRUID_BROKER_IP=172.18.3.6
DRUID_INIT_IP=172.18.3.6
DRUID_OVERLORD_IP=172.18.3.7
DRUID_MIDDLEMANAGER_IP=172.18.3.8
DRUID_ROUTER_IP=172.18.3.15
```

## Hack

```python
docker exec -it druid-historical bash
mkdir /var/druid/tmp
```

## APIs

Historical

<http://localhost:8083/druid/historical/v1/readiness>

[http://localhost:8083/druid/historical/v1/loadstatus](http://localhost:8083/druid/historical/v1/loadstatus)

[http://localhost:8083/status](http://localhost:8083/status)

## Druid segment cleanup

```python
docker exec -it druid-historical bash

## # first remove segment-cache and then segments

cd /var/druid/segment-cache and cd /var/druid/segments
remove last 20 days of segments
```

## Druid Commands

```bash
#query top pages from wikipedia dataset
curl -X 'POST' -H 'Content-Type:application/json' -d @wikipedia-top-pages.json [http://localhost:8082/druid/v2?pretty](http://localhost:8082/druid/v2/?pretty)

#submit supervisor spec to kafka-indexing-service
curl -XPOST -H'Content-Type: application/json' -d @wikipedia-kafka-supervisor.json <http://localhost:8090/druid/indexer/v1/supervisor>

curl -XPOST -H'Content-Type: application/json' -d @smap-kafka-supervisor-spec.json <http://localhost:8090/druid/indexer/v1/supervisor>
```

### Dashboards

- 8081: coordinator (for seeing clusters and datasources
- 8090: overlord (for managing supervisor spec and tasks)
- Others
  - 8082: broker
  - 8083: historical
  - 8091: middlemanager
  - 2181: zookeeper

### Debugging

```bash
stop druid-historical
cd /var/lib/docker/volumes/druid-volume/_data/segment-cache
remove docker segment-cache
rm -rf *
start druid-historical
```

## SQL Commands

```sql
# find duplicate count
SELECT controller_name, site_name, count(reading) as DuplicateCount FROM (SELECT controller_name, stream_path, site_name, reading, __time, count(reading) as readingCount FROM "live-Samhi"
  WHERE __time BETWEEN TIMESTAMP '2019-11-18 08:00:00' AND TIMESTAMP '2019-11-19 08:00:00'
  AND stream_path LIKE '/Samhi-41%'
  GROUP BY __time, stream_path, reading, site_name, controller_name
  HAVING readingCount > 1
  ORDER BY __time DESC)
  GROUP BY site_name, controller_name

# find duplicate values
SELECT controller_name, stream_path, site_name, reading, __time, count(reading) as readingCount FROM "live-Samhi"
  WHERE __time BETWEEN TIMESTAMP '2019-11-18 08:00:00' AND TIMESTAMP '2019-11-19 09:00:00'
  AND stream_path LIKE '/Samhi-41%'
  GROUP BY __time, stream_path, reading, site_name, controller_name
  HAVING readingCount > 1
ORDER BY __time DESC
```

## Dashboard

<http://10.9.1.21:8888/unified-console.html>

## Ingestion Spec

```json
{
  "type": "kafka",
  "dataSchema": {
    "dataSource": "live-Samhi",
    "parser": {
      "type": "string",
      "parseSpec": {
        "format": "json",
        "timestampSpec": {
          "column": "time",
          "format": "auto"
        },
        "dimensionsSpec": {
          "spatialDimensions": [
            {
              "dimName": "coordinates",
              "dims": [
                "site_latitude",
                "site_longitude"
              ]
            }
          ],
          "dimensions": [
            "uuid",
            "path",
            {
              "name": "reading",
              "type": "float"
            },
            "stream_path",
            "stream_uuid",
            "device_tags",
            "device_is_virtual",
            "device_id",
            "device_display_name",
            "device_path",
            "device_type",
            "device_category",
            "physical_parameter_display",
            "physical_parameter_unit",
            "physical_parameter_type",
            "physical_parameter_name",
            "site_longitude",
            "site_latitude",
            "site_name",
            "customer_name",
            "client_name",
            "controller_name",
            "site_Size",
            "site_Floors",
            "site_site_code",
            "site_Hotel_Type",
            "site_Display_Name",
            "metric_tod_metadata",
            "metric_operational_metadata",
            "live_parent",
            "live_region",
            "live_purpose",
            "live_pie_breakup",
            "live_room_number",
            "live_room_direction"
          ]
        }
      }
    },
    "metricsSpec": [
      {
        "type": "count",
        "name": "count"
      }
    ],
    "granularitySpec": {
      "type": "uniform",
      "segmentGranularity": "HOUR",
      "rollup": false
    }
  },
  "tuningConfig": {
    "type": "kafka",
    "maxSavedParseExceptions": 1000,
    "forceExtendableShardSpecs": true
  },
  "ioConfig": {
    "topic": "druid_telemetry_data_Samhi",
    "taskCount": 1,
    "replicas": 1,
    "taskDuration": "PT120S",
    "completionTimeout": "PT5M",
    "useEarliestOffset": true,
    "consumerProperties": {
      "bootstrap.servers": "kafka0.zenatix.com:31090,kafka1.zenatix.com:31091,kafka2.zenatix.com:31092"
    }
  }
}
```

## Important Points

- Compression - 1:10
- Number of hyper threads
- Concurrency of queries
  - 4 gb/s per hyperthread - how much data you are consuming
- Servers
  - I3.extra large - 3 data server
  - 1 middlemaanger
  - 2 query server - m5 large
  - Master - m5 large
  - m4.xlarge
