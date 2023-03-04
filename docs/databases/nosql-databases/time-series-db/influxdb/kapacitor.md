# Kapacitor

Kapacitor is an open source data processing framework that makes it easy to create alerts, run ETL jobs and detect anomalies. Kapacitor is the final piece of the [TICK stack](https://influxdata.com/time-series-platform/).

## Key Features

- Process both streaming data and batch data.
- Query data from InfluxDB on a schedule, and receive data via the [line protocol](https://docs.influxdata.com/influxdb/v1.4/write_protocols/line/) and any other method InfluxDB supports.
- Perform any transformation currently possible in [InfluxQL](https://docs.influxdata.com/influxdb/v1.4/query_language/spec/).
- Store transformed data back in InfluxDB.
- Add custom user defined functions to detect anomalies.
- Integrate with HipChat, OpsGenie, Alerta, Sensu, PagerDuty, Slack, and more.

## Commands

helm install stable/kapacitor --name foo --namespace bar
Usage: kapacitor [options] [command] [args]

## record Record the result of a query or a snapshot of the current stream data

## define Create/update a task

## define-template Create/update a template

## define-topic-handler Create/update an alert handler for a topic

replay Replay a recording to a task.

replay-live Replay data against a task without recording it.

watch Watch logs for a task.

logs Follow arbitrary Kapacitor logs.

enable Enable and start running a task with live data.

disable Stop running a task.

reload Reload a running task with an updated task definition.

push Publish a task definition to another Kapacitor instance. Not implemented yet.

delete Delete tasks, templates, recordings, replays, topics or topic-handlers.

## list List information about tasks, templates, recordings, replays, topics, topic-handlers or service-tests

## show Display detailed information about a task

show-template Display detailed information about a template.

show-topic-handler Display detailed information about an alert handler for a topic.

show-topic Display detailed information about an alert topic.

backup Backup the Kapacitor database.

level Sets the logging level on the kapacitord server.

stats Display various stats about Kapacitor.

version Displays the Kapacitor version info.

vars Print debug vars in JSON format.

service-tests Test a service.
Examples

kapacitor list tasks

kapacitor show chronograf-v1-1370efff-9133-4cff-b94f-541a5e3d9dd0

## Creating Alerts

Alerts in Chronograf correspond to Kapacitor tasks designed specifically to trigger alerts whenever the data stream values rise above or fall below designated thresholds. Please note that only the most common alerting use cases are manageable through Chronograf. These include:

- Thresholds with static ceilings, floors and ranges.
- Relative thresholds based on unit or percentage changes.
- Deadman switches.

More refined alerts and other tasks need to be defined directly in Kapacitor.
Kapacitor's alert system allows a publish-and-subscribe design pattern to be used. Alerts are published to atopicandhandlerssubscribe to it.
