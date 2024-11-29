# ElastAlert

ElastAlert is a simple framework for alerting on anomalies, spikes, or other patterns of interest from data in Elasticsearch.

It works by combining Elasticsearch with two types of components, rule types and alerts. Elasticsearch is periodically queried and the data is passed to the rule type, which determines when a match is found. When a match occurs, it is given to one or more alerts, which take action based on the match.

This is configured by a set of rules, each of which defines a query, a rule type, and a set of alerts.

Several rule types with common monitoring paradigms are included with ElastAlert:

- "Match where there are X events in Y time" (frequencytype)
- "Match when the rate of events increases or decreases" (spiketype)
- "Match when there are less than X events in Y time" (flatlinetype)
- "Match when a certain field matches a blacklist/whitelist" (blacklistandwhitelisttype)
- "Match on any event matching a given filter" (anytype)
- "Match when a field has two different values within some time" (changetype)

In addition to this basic usage, there are many other features that make alerts more useful:

- Alerts link to Kibana dashboards
- Aggregate counts for arbitrary fields
- Combine alerts into periodic reports
- Separate alerts by using a unique key field
- Intercept and enhance match data

## Rule Types

- 'flatline' -- when there are less than X events in Y time
- 'blacklist/whitelist' -- when a certain field matches 'blacklist' or 'whitelist'
- 'any' -- when an event that matches a given filter happens
- 'change' -- when a field has two different values within a specified period of time

## Types

1. spike
2. frequency
3. flatline
4. new_term
5. change

## Common Configuration Example

### 1. Required settings

   - es_host
   - es_port
   - index
   - name
   - type
   - alert

### 2. Optional settings

   - import
   - use_ssl
   - verify_certs
   - client_cert
   - client_key
   - ca_certs
   - es_username
   - es_password
   - es_url_prefix
   - es_send_get_body_as
   - use_strftime_index
   - search_extra_index
   - **aggregation**

      aggregation:
      schedule: '2 4 ** mon, fri'

      aggregation:
      hours: 2

   - aggregate_by_match_time
   - **realert**
   - **exponential_realert**
   - buffer_time
   - query_delay
   - owner
   - priority
   - category
   - max_query_size
   - filter
   - include
   - top_count_keys
   - top_count_number
   - raw_count_keys
   - description
   - generate_kibana_link
   - kibana_url
   - use_kibana_dashboard
   - use_kibana4_dashboard
   - kibana4_start_timedelta
   - kibana4_end_timedelta
   - use_local_time
   - match_enhancements
   - run_enhancements_first
   - query_key
   - aggregation_key
   - summary_table_fields
   - timestamp_type
   - timestamp_format
   - timestamp_format_expr
   - _source_enabled
   - scan_entire_timeframe

https://elastalert.readthedocs.io/en/latest/ruletypes.html#common-configuration-options

https://elastalert.readthedocs.io/en/latest/ruletypes.html

https://elastalert.readthedocs.io/en/latest/ruletypes.html#rule-types

## Example

```yaml
deadman_slack: |-
  ---
  name: Deadman Switch Slack
  type: frequency
  index: containers-*
  num_events: 3
  timeframe:
    minutes: 3
  filter:
  - term:
      message: "deadmanslack"
  alert:
  - "slack"
  slack:
  slack_webhook_url: dummy

deadman_pagerduty: |-
  ---
  name: Deadman Switch PagerDuty
  type: frequency
  index: containers-*
  num_events: 3
  timeframe:
    minutes: 3
  filter:
  - term:
      message: "deadmanpd"
  alert:
  - "pagerduty"
  pagerduty:
  pagerduty_service_key: dummy
  pagerduty_client_name: Elastalert Deadman Switch
```

## References

https://elastalert.readthedocs.io/en/latest/index.html

https://engineeringblog.yelp.com/2015/10/elastalert-alerting-at-scale-with-elasticsearch.html

https://github.com/bitsensor/elastalert

## Other Plugins

https://github.com/sivasamyk/logtrail
