# Grafana

The open platform for beautiful analytics and monitoring (open source software for time series analytics) (Expression browser)

- 40 data sources
    - Graphite
    - Cloud watch
    - Prometheus
    - Elastic search
    - InfluxDB (TICK Stack)
    - Hosted Metrics
- 28 panels
- 17 apps
- 776 dashboards

```bash
docker run --rm --name=grafana --net=influxdb -p 3000:3000 grafana/grafana
docker run --rm --name=grafana -p 3000:3000 grafana/grafana
```

## Dashboards

- Telegraf System dashboard - https://grafana.com/dashboards/928
- Docker Overview - 5763
- Telegraf sysstats - 4823
- Kafka Overview - 721 prometheus
- Kafka Overview - 5484 kafka-exporter
- Prometheus 2.0 Overview - 3662
- Grafana Dashboard Exporter/Importer - 5837 - https://grafana.com/grafana/dashboards/5837
- Blackbox Exporter status page dashboard - 5345
- HTTP - https://grafana.com/grafana/dashboards/10138
    - HTTP Metrics - https://grafana.com/grafana/dashboards/73
- Redis - https://grafana.com/grafana/dashboards/763
- AWS Dashboards - https://github.com/monitoringartist/grafana-aws-cloudwatch-dashboards
- https://grafana.com/docs/grafana/latest/datasources/cloudwatch
- https://grafana.com/blog/2021/11/09/announcing-grafana-oncall

## Env

```bash
GF_AUTH_ANONYMOUS_ENABLED: true
GF_AUTH_ANONYMOUS_ORG_ROLE: Editor
GF_AUTH_BASIC_ENABLED: false
GF_SERVER_ENABLE_GZIP: true
GF_SERVER_ROOT_URL: ""
GF_EXTERNAL_IMAGE_STORAGE_PROVIDER: "s3"
GF_EXTERNAL_IMAGE_STORAGE_S3_ACCESS_KEY: "XXX"
GF_EXTERNAL_IMAGE_STORAGE_S3_BUCKET: "bucket"
GF_EXTERNAL_IMAGE_STORAGE_S3_REGION: "region"
GF_EXTERNAL_IMAGE_STORAGE_S3_SECRET_KEY: "XXX"
GF_PANELS_DISABLE_SANITIZE_HTML: true
```

## Concepts

### Data Source

Grafana supports many different storage backends for your time series data (Data Source). Each Data Source has a specific Query Editor that is customized for the features and capabilities that the particular Data Source exposes.

The following datasources are officially supported: [Graphite](http://docs.grafana.org/features/datasources/graphite/), [InfluxDB](http://docs.grafana.org/features/datasources/influxdb/), [OpenTSDB](http://docs.grafana.org/features/datasources/opentsdb/), [Prometheus](http://docs.grafana.org/features/datasources/prometheus/), [Elasticsearch](http://docs.grafana.org/features/datasources/elasticsearch/), [CloudWatch](http://docs.grafana.org/features/datasources/cloudwatch/).

The query language and capabilities of each Data Source are obviously very different. You can combine data from multiple Data Sources onto a single Dashboard, but each Panel is tied to a specific Data Source that belongs to a particular Organization.

- **Organization**
- **User**

### Row

A Row is a logical divider within a Dashboard, and is used to group Panels together.

Utilize the [Repeating Rows functionality](http://docs.grafana.org/reference/templating/#repeating-rows) to dynamically create or remove entire Rows (that can be filled with Panels), based on the Template variables selected.

Rows can be collapsed by clicking on the Row Title. If you save a Dashboard with a Row collapsed, it will save in that state and will not preload those graphs until the row is expanded.

### Panel

The Panel is the basic visualization building block in Grafana. Each Panel provides a Query Editor (dependent on the Data Source selected in the panel) that allows you to extract the perfect visualization to display on the Panel by utilizing the Query Editor

Types of Panel -

- Graph
- Singlestat
- Table
- Heatmap
- Alert list
- Dashboard list
- Text

Utilize the [Repeating Panel](http://docs.grafana.org/reference/templating/#repeating-panels) functionality to dynamically create or remove Panels based on the [Templating Variables](http://docs.grafana.org/reference/templating/#repeating-panels) selected.

### Query Editor

The Query Editor exposes capabilities of your Data Source and allows you to query the metrics that it contains.

Use the Query Editor to build one or more queries (for one or more series) in your time series database. The panel will instantly update allowing you to effectively explore your data in real time and build a perfect query for that particular Panel.

You can utilize [Template variables](http://docs.grafana.org/reference/templating/) in the Query Editor within the queries themselves. This provides a powerful way to explore data dynamically based on the Templating variables selected on the Dashboard.

Grafana allows you to reference queries in the Query Editor by the row that they're on. If you add a second query to graph, you can reference the first query simply by typing in `#A`. This provides an easy and convenient way to build compounded queries.

### Dashboard

The Dashboard is where it all comes together. Dashboards can be thought of as of a set of one or more Panels organized and arranged into one or more Rows.

The time period for the Dashboard can be controlled by the [Dashboard time picker](http://docs.grafana.org/reference/timerange/) in the upper right of the Dashboard.

Dashboards can utilize [Templating](http://docs.grafana.org/reference/templating/) to make them more dynamic and interactive.

Dashboards can utilize [Annotations](http://docs.grafana.org/reference/annotations/) to display event data across Panels. This can help correlate the time series data in the Panel with other events.

Dashboards (or a specific Panel) can be [Shared](http://docs.grafana.org/reference/sharing/) easily in a variety of ways. You can send a link to someone who has a login to your Grafana. You can use the [Snapshot](http://docs.grafana.org/reference/sharing/#snapshots) feature to encode all the data currently being viewed into a static and interactive JSON document; it's so much better than emailing a screenshot!

Dashboards can be tagged, and the Dashboard picker provides quick, searchable access to all Dashboards in a particular Organization.

## Advanced

- Variables
- Repeating Rows
- Repeating Panels

## Shortcuts

| **Global** |                                |
|------------|---------------------------------|
| gh         | Go to Home Dashboard            |
| gp         | Go to Profile                   |
| so         | Open search                     |
| ss         | Open search with starred filter |
| st         | Open search in tags view        |
| esc        | Exit edit/setting views         |

| **Dashboard** |  |
|---|---|
| mod+s | Save dashboard |
| dr | Refresh all panels |
| ds | Dashboard settings |
| dv | Toggle in-active / view mode |
| dk | Toggle kiosk mode (hides top nav) |
| dE | Expand all rows |
| dC | Collapse all rows |
| da | Toggle auto fit panels (experimental feature) |
| mod+o | Toggle shared graph crosshair |

| **Focused Panel** |                             |
|-------------------|------------------------------|
| e                 | Toggle panel edit view       |
| v                 | Toggle panel fullscreen view |
| ps                | Open Panel Share Modal       |
| pd                | Duplicate Panel              |
| pr                | Remove Panel                 |
| pl                | Toggle panel legend          |

| **Time Range** |                        |
|----------------|-------------------------|
| tz             | Zoom out time range     |
| t              | Move time range back    |
| t              | Move time range forward |

## Plugins

```bash
grafana-cli plugins list-remote
grafana-cli plugins install <plugin-id>
grafana-cli plugins install <plugin-id> <version>
grafana-cli plugins ls
```

http://docs.grafana.org/guides/basic_concepts

https://play.grafana.org/d/ZvPm55mWk/new-features-in-v6-2?orgId=1

https://github.com/grafana/grafana

## LGTM Stack

The LGTM stack is ==a set of open-source tools that help monitor, visualize, and troubleshoot applications and infrastructure==. It's developed by Grafana Labs and stands for Loki, Grafana, Tempo, and Mimir.

### Components

- **Loki**: A log aggregation system that stores and queries logs from multiple sources
- **Grafana**: An open-source platform for monitoring and observability that allows users to query, visualize, and alert on metrics, logs, and traces
- **Tempo**: A distributed tracing backend that stores and queries traces
- **Mimir**: A tool for long-term metric storage and advanced analytics

### Benefits

- The LGTM stack can help users connect data from multiple tools to Grafana
- It can help users create dashboards, correlate observability data, and set up monitoring
- It can help users troubleshoot systems by analyzing metrics, logs, and traces
- It can help users understand how requests flow through an application

[Getting started with managing your metrics, logs, and traces using Grafana](https://grafana.com/go/webinar/getting-started-with-grafana-lgtm-stack/)
