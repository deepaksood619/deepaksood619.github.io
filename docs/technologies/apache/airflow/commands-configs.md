# Commands / Configs

```python
'resetdb', 'render', 'variables', 'delete_user', 'connections', 'create_user', 'rotate_fernet_key', 'pause', 'sync_perm', 'task_failed_deps', 'version', 'trigger_dag', 'initdb', 'test', 'unpause', 'list_dag_runs', 'dag_state', 'run', 'list_tasks', 'backfill', 'list_dags', 'kerberos', 'worker', 'webserver', 'flower', 'scheduler', 'task_state', 'pool', 'serve_logs', 'clear', 'list_users', 'next_execution', 'upgradedb', 'delete_dag'

- airflow initdb
- airflow flower
- airflow webserver
- airflow scheduler

# Configurations
AIRFLOW_HOME: /root/example/Docker/airflow
AIRFLOW__CORE__AIRFLOW_HOME: /root/example/Docker/airflow
AIRFLOW__CORE__DAGS_FOLDER: /root/example/Docker/airflow/dags
AIRFLOW__CORE__BASE_LOG_FOLDER: /root/example/Docker/airflow/logs
AIRFLOW__CORE__EXECUTOR: CeleryExecutor
AIRFLOW__CORE__SQL_ALCHEMY_CONN: postgresql+psycopg2://postgres:airflow@apg-postgresql-headless.airflow:5432/airflow

AIRFLOW__CORE__FERNET_KEY: 3Hj3xtOHEkyFySDDJC1dMkHi5L3QyeJNBbLdgzbs4Dg=
AIRFLOW__CORE__TASK_RUNNER: StandardTaskRunner
AIRFLOW__CORE__LOAD_EXAMPLES: "False"
AIRFLOW__CORE__DEFAULT_TIMEZONE: Asia/Kolkata

AIRFLOW__WEBSERVER__BASE_URL: http://airweb.zenatix.com
AIRFLOW__WEBSERVER__EXPOSE_CONFIG: "True"
AIRFLOW__SCHEDULER__DAG_DIR_LIST_INTERVAL: "120"
GUNICORN_CMD_ARGS: "--log-level WARNING"
AIRFLOW__SCHEDULER__MIN_FILE_PROCESS_INTERVAL=60 (default 0)# Prevent airflow from reloading the dags all the time and set. This is the main setting that reduces CPU load in the scheduler
AIRFLOW__SCHEDULER__SCHEDULER_MAX_THREADS=1 # This should be set to (CPU Cores - 1)
AIRFLOW__WEBSERVER__WORKERS=2 # 2 * NUM_CPU_CORES + 1
AIRFLOW__WEBSERVER__WORKER_REFRESH_INTERVAL=1800 # Restart workers every 30min instead of 30seconds
AIRFLOW__WEBSERVER__WEB_SERVER_WORKER_TIMEOUT=300 #Kill workers if they don't start within 5min instead of 2min

AIRFLOW__SMTP__SMTP_HOST: email-smtp.us-east-1.amazonaws.com
AIRFLOW__SMTP__SMTP_PORT: "587"
AIRFLOW__SMTP__SMTP_USER: AKIAUNOK5YRX3AMH3ZEV
AIRFLOW__SMTP__SMTP_PASSWORD: BEvBirvENUT/mDTWCmnZLuiuaFqMnqeDwutK9VPLpKcI
AIRFLOW__SMTP__SMTP_MAIL_FROM: devops@wattman.io

AIRFLOW__CELERY__BROKER_URL: redis://:airflow@ars-redis-headless.airflow:6379/0
AIRFLOW__CELERY__CELERY_RESULT_BACKEND: db+postgresql://postgres:airflow@apg-postgresql-headless.airflow:5432/airflow

AIRFLOW__SCHEDULER__CATCHUP_BY_DEFAULT: "False"
```
