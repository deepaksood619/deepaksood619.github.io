# Queries

## Commands

```bash
docker pull clickhouse/clickhouse-server

docker run -d -p 8123:8123 -p 9000:9000 --network=test-net --name some-clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server

docker run -d --name some-clickhouse-server -p 8123:8123 -p 9000:9000 --network=test-net -e CLICKHOUSE_DB=my_database -e CLICKHOUSE_USER=username -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 -e CLICKHOUSE_PASSWORD=password --ulimit nofile=262144:262144 clickhouse/clickhouse-server

# https://hub.docker.com/r/clickhouse/clickhouse-server/

echo 'SELECT version()' | curl 'http://localhost:8123/' --data-binary @-
```

[Visual Interfaces from Third-party Developers | ClickHouse Docs](https://clickhouse.com/docs/en/interfaces/third-party/gui)

[GitHub - ClickHouse/metabase-clickhouse-driver: ClickHouse database driver for the Metabase business intelligence front-end](https://github.com/ClickHouse/metabase-clickhouse-driver)

```sql
-- https://clickhouse.com/docs/en/getting-started/quick-start

clickhouse client

CREATE TABLE my_first_table
(
    user_id UInt32,
    message String,
    timestamp DateTime,
    metric Float32
)
ENGINE = MergeTree
PRIMARY KEY (user_id, timestamp)

INSERT INTO my_first_table (user_id, message, timestamp, metric) VALUES
    (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),
    (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),
    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),
    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 )

 SELECT *
 FROM my_first_table
 ORDER BY timestamp

SELECT
   passenger_count,
   avg(toFloat32(total_amount))
FROM s3(
    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_0.gz',
    'TabSeparatedWithNames'
)
GROUP BY passenger_count
ORDER BY passenger_count;
```

[New York Taxi Data | ClickHouse Docs](https://clickhouse.com/docs/en/getting-started/example-datasets/nyc-taxi)
