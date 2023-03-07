# Querying

## Functions

- [abs()](https://prometheus.io/docs/prometheus/latest/querying/functions/#abs)
- [absent()](https://prometheus.io/docs/prometheus/latest/querying/functions/#absent)
- [ceil()](https://prometheus.io/docs/prometheus/latest/querying/functions/#ceil)
- [changes()](https://prometheus.io/docs/prometheus/latest/querying/functions/#changes)
- [clamp_max()](https://prometheus.io/docs/prometheus/latest/querying/functions/#clamp_max)
- [clamp_min()](https://prometheus.io/docs/prometheus/latest/querying/functions/#clamp_min)
- [day_of_month()](https://prometheus.io/docs/prometheus/latest/querying/functions/#day_of_month)
- [day_of_week()](https://prometheus.io/docs/prometheus/latest/querying/functions/#day_of_week)
- [days_in_month()](https://prometheus.io/docs/prometheus/latest/querying/functions/#days_in_month)
- [delta()](https://prometheus.io/docs/prometheus/latest/querying/functions/#delta)
- [deriv()](https://prometheus.io/docs/prometheus/latest/querying/functions/#deriv)
- [exp()](https://prometheus.io/docs/prometheus/latest/querying/functions/#exp)
- [floor()](https://prometheus.io/docs/prometheus/latest/querying/functions/#floor)
- [histogram_quantile()](https://prometheus.io/docs/prometheus/latest/querying/functions/#histogram_quantile)
- [holt_winters()](https://prometheus.io/docs/prometheus/latest/querying/functions/#holt_winters)

holt_winters(v range-vector, sf scalar, tf scalar)produces a smoothed value for time series based on the range inv. The lower the smoothing factorsf, the more importance is given to old data. The higher the trend factortf, the more trends in the data is considered. Bothsfandtfmust be between 0 and 1.

- [`hour()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#hour)
- [`idelta()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#idelta)
- [`increase()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#increase)
- [`irate()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#irate)
- [`label_join()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#label_join)
- [`label_replace()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#label_replace)
- [`ln()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#ln)
- [`log2()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#log2)
- [`log10()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#log10)
- [`minute()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#minute)
- [`month()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#month)
- [`predict_linear()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#predict_linear)
- [`rate()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#rate)
- [`resets()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#resets)
- [`round()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#round)
- [`scalar()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#scalar)
- [`sort()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#sort)
- [`sort_desc()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#sort_desc)
- [`sqrt()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#sqrt)
- [`time()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#time)
- [`timestamp()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#timestamp)
- [`vector()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#vector)
- [`year()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#year)
- [`<aggregation>_over_time()`](https://prometheus.io/docs/prometheus/latest/querying/functions/#aggregation_over_time)

## PromQL

```bash
sum by (instance) (
    irate(
        container_cpu_usage_seconds_total{
            pod_name=~"worker.*"
        }[5m]
    )
)
```

To subtract two metrics use **`on ()`**

celery_tasks_total{instance="celery-exporter.airflow.svc.cluster.local:8888", job="celery-monitoring", name="airflow.executors.celery_executor.execute_command", namespace="airflow", queue="undefined", state="RECEIVED"} - on ()

(celery_tasks_total{instance="celery-exporter.airflow.svc.cluster.local:8888", job="celery-monitoring", name="airflow.executors.celery_executor.execute_command", namespace="airflow", queue="undefined", state="SUCCESS"} + on () celery_tasks_total{instance="celery-exporter.airflow.svc.cluster.local:8888", job="celery-monitoring", name="airflow.executors.celery_executor.execute_command", namespace="airflow", queue="undefined", state="FAILURE"})
