# Alert Manager

The [Alertmanager](https://github.com/prometheus/alertmanager) handles alerts sent by client applications such as the Prometheus server. It takes care of deduplicating, grouping, and routing them to the correct receiver integration such as email, PagerDuty, or OpsGenie. It also takes care of silencing and inhibition of alerts.

Flapping - when an alert has changed states more than 4 times in a one-hour time window

## Grouping

Grouping categorizes alerts of similar nature into a single notification. This is especially useful during larger outages when many systems fail at once and hundreds to thousands of alerts may be firing simultaneously.

## Inhibition

Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing.

## Silences

Silences are a straightforward way to simply mute alerts for a given time. A silence is configured based on matchers, just like the routing tree. Incoming alerts are checked whether they match all the equality or regular expression matchers of an active silence. If they do, no notifications will be sent out for that alert.

## Templates

The notifications sent to receivers are constructed via templates.

```yaml
config:
global:
    resolve_timeout: 5m
    slack_api_url: https://hooks.slack.com/services/xxx/org_id/api_key
route:
    group_by: ['job']
    group_wait: 30s
    group_interval: 5m
    repeat_interval: 12h
    receiver: slack
    routes:
    - match_re:
        alertname: ^.*$
    receiver: slack
receivers:
- name: "slack"
    slack_configs:
    - send_resolved: true
    channel: "#monitor"
    title: "{{ range .Alerts }}{{ .Labels.alertname }}\n{{ end }}"
    text: "{{ range .Alerts }}*Alert:* `{{ .Labels.severity }}` - {{ .Labels.alertname }} - {{ .Annotations.message }}\n*Details:* {{ range .Labels.SortedPairs }} - *{{ .Name }}:* `{{ .Value }}`{{ end }}\n{{ end }}"
```

## References

https://prometheus.io/docs/alerting/alertmanager

https://prometheus.io/docs/alerting/configuration

[https://github.com/prometheus/alertmanager/blob/master/doc/examples/simple.yml](https://github.com/prometheus/alertmanager/blob/master/doc/examples/simple.yml)

[GitHub - robusta-dev/robusta: Better Prometheus alerts for Kubernetes - smart grouping, AI enrichment, and automatic remediation](https://github.com/robusta-dev/robusta)
