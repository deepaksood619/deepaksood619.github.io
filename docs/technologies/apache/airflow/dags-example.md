# Dags Example

<https://airflow.apache.org/docs/apache-airflow/1.10.12/_api/airflow/contrib/operators/kubernetes_pod_operator/index.html>

- execution_timeout(datetime.timedelta) -- max time allowed for the execution of this task instance, if it goes beyond it will raise and fail (used of instance)

- dagrun_timeout(datetime.timedelta) -- specify how long a Dag Run should be up before timing out / failing, so that new DagRuns can be created (used for whole dag)

- Weekly cron - days_ago(1) start date can't keep in the memory the actual start date and we need to actually have more than one week difference from start date to trigger job

schedule_interval="@daily"

```python
# Example 1
from datetime import datetime, timedelta

from airflow.models import DAG
from airflow.operators.bash_operator import BashOperator

args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(year=2019, month=9, day=11),
    'email': ['username@example.com'],
    'email_on_failure': True,
    'email_on_retry': True,
    'retries': 1,
    'retry_delay': timedelta(minutes=15),
    'catchup': False,
}

dag = DAG(
    dag_id='cache_metrics_readings_dag',
    default_args=args,
    schedule_interval='0 */3 * * *',
 max_active_runs=1,
)

cache_metrics_readings = BashOperator(
    task_id='cache_metrics_readings',
    bash_command='python /root/example/manage.py cache_metrics_readings',
    dag=dag,
)

if __name__ == '__main__':
    dag.cli()

# Example 2 Kubernetes Pod Operator
from airflow import DAG
from datetime import datetime, timedelta
from airflow.contrib.operators.kubernetes_pod_operator import KubernetesPodOperator
from airflow.operators.dummy_operator import DummyOperator

default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(year=2019, month=9, day=11),
    'email': ['username@example.com'],
    'email_on_failure': True,
    'email_on_retry': True,
    'retries': 1,
    'retry_delay': timedelta(minutes=1)
}

dag = DAG(
    'kubernetes_sample',
    default_args=default_args,
    schedule_interval="*/1 * * * *",
 max_active_runs=1,)

start = DummyOperator(task_id='run_this_first', dag=dag)

passing = KubernetesPodOperator(namespace='default',
                                image="Python:3.6",
                                cmds=["Python", "-c"],
                                arguments=["print('hello world')"],
                                labels={"foo": "bar"},
                                name="passing-test",
                                task_id="passing-task",
                                get_logs=True,
                                dag=dag
                                )

failing = KubernetesPodOperator(namespace='default',
                                image="ubuntu:1604",
                                cmds=["Python", "-c"],
                                arguments=["print('hello world')"],
                                labels={"foo": "bar"},
                                name="fail",
                                task_id="failing-task",
                                get_logs=True,
                                dag=dag
                                )

passing.set_upstream(start)
failing.set_upstream(start)

```

## Maintainance Dags

- clear-missing-dags
  - A maintenance workflow that you can deploy into Airflow to periodically clean out entries in the DAG table of which there is no longer a corresponding Python File for it. This ensures that the DAG table doesn't have needless items in it and that the Airflow Web Server displays only those available DAGs.
- db-cleanup
  - A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.
- kill-halted-tasks
  - A maintenance workflow that you can deploy into Airflow to periodically kill off tasks that are running in the background that don't correspond to a running task in the DB.
  - This is useful because when you kill off a DAG Run or Task through the Airflow Web Server, the task still runs in the background on one of the executors until the task is complete.
- log-cleanup
  - A maintenance workflow that you can deploy into Airflow to periodically clean out the task logs to avoid those getting too big.
- delete-broken-dags
  - A maintenance workflow that you can deploy into Airflow to periodically delete DAG files and clean out entries in the ImportError table for DAGs which Airflow cannot parse or import properly. This ensures that the ImportError table is cleaned every day.

[https://github.com/teamclairvoyant/airflow-maintenance-dags](https://github.com/teamclairvoyant/airflow-maintenance-dags)

<https://github.com/teamclairvoyant/airflow-maintenance-dags/tree/master/log-cleanup>

<https://github.com/teamclairvoyant/airflow-maintenance-dags/tree/master/db-cleanup>

## DAG for stress testing

```python
import datetime
import multiprocessing
import requests
 url = 'http://airflow.localhost:8080/api/experimental/dags/tutorial/dag_runs'
headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
}
 def test(instance, runs):
    for x in range(runs):
        payload = {
            'replace_microseconds': False,
        }
 response = requests.post(url, headers=headers, json=payload)
        print(response.text)
        if not response.ok:
            return
 def run_tests(threads):
    thread_pool = []
    start_batch = datetime.datetime.now()
    print('Test: Calling Airflow example_trigger_controller_dag')
    print('Running test with {} threads'.format(threads))
 for thread in range(threads):
        thread_pool.append(multiprocessing.Process(target=test, args=(thread, 20)))
        thread_pool [thread].start()
 for thread in range(threads):
        thread_pool [thread].join()
 end_batch = datetime.datetime.now()
    return "total duration: {:7.5f}s".format(
        end_batch.timestamp() - start_batch.timestamp()
    )
 if __name__ == '__main__':
    result = run_tests(threads=2)
    print(result)

```

## example Standard DAG

```python
from airflow import DAG
from airflow.contrib.kubernetes.volume import Volume
from airflow.contrib.kubernetes.volume_mount import VolumeMount
from airflow.contrib.operators.kubernetes_pod_operator import KubernetesPodOperator
from airflow.contrib.operators.slack_webhook_operator import SlackWebhookOperator
from airflow.hooks.base_hook import BaseHook
from airflow.utils.dates import days_ago

cron_path = "curl https://lms.stasheasy.com/cronjobEasy/Elev8AutomateMessageScript?stage_code=ELVKYC"
cron_name = "lms_elev8_elvkyc"
image_name = "331916247734.dkr.ecr.ap-south-1.amazonaws.com/lms/prod:latest"

schedule_interval = "0 4 * * *" / "@once" / "0 * * * Tue"
labels = {"project": "lms"}

SLACK_CONN_ID = "monitoring"
volume_mount1 = VolumeMount(
    "system",
    mount_path="/var/www/html/application/config/system.php",
    sub_path="system.php",
    read_only=True,
)
volume_mount2 = VolumeMount(
    "database",
    mount_path="/var/www/html/application/config/database.php",
    sub_path="database.php",
    read_only=True,
)
volume_mount3 = VolumeMount(
    "config",
    mount_path="/var/www/html/application/config/config.php",
    sub_path="config.php",
    read_only=True,
)
volume_mount4 = VolumeMount(
    "index",
    mount_path="/var/www/html/index.php",
    sub_path="index.php",
    read_only=True,
)
volume1 = Volume(name="system", configs={"configMap": {"name": "lms-system-configmap"}})
volume2 = Volume(
    name="database", configs={"configMap": {"name": "lms-database-configmap"}}
)
volume3 = Volume(name="config", configs={"configMap": {"name": "lms-config-configmap"}})
volume4 = Volume(name="index", configs={"configMap": {"name": "lms-index-configmap"}})
 annotations = {
     "vault.hashicorp.com/agent-inject": "true",
     "vault.hashicorp.com/agent-pre-populate-only": "true",
     "vault.hashicorp.com/agent-inject-secret-credentials.json": "crons/maintenance-crons",
     "vault.hashicorp.com/role": "crons",
     "vault.hashicorp.com/agent-inject-template-credentials.json": """{{ with secret "crons/maintenance-crons" }}
     {
     {{ range $k, $v := .Data.data }} "{{ $k }}": "{{ $v }}",
     {{ end }} "dummy": "yes"
     }
     {{ end }}""",
 }

env_vars = {
    "AWS_ACCESS_KEY_ID": "xxx",
    "AWS_SECRET_ACCESS_KEY": "xxx",
    "AWS_REGION_NAME": "ap-south-1",
    "config": "{{ dag_run.conf }}",
}

def task_fail_slack_alert(context):
slack_hook = BaseHook.get_connection(SLACK_CONN_ID).password
slack_msg = f"""
        :red_circle: Task Failed.
        *Task*: {context.get("task_instance").task_id}
        *Dag*: {context.get("task_instance").dag_id}
        *Execution Time*: {context.get("execution_date")}
        *Owner*: <@U012YUW8QJK>
        *Log Url*: {context.get("task_instance").log_url}
        """
failed_alert = SlackWebhookOperator(
    task_id="alerting",
    http_conn_id=SLACK_CONN_ID,
    webhook_token=slack_hook,
    message=slack_msg,
    channel="#cron",
    username="airflow",
)
return failed_alert.execute(context=context)
default_args = {
"owner": "airflow",
"depends_on_past": False,
"start_date": days_ago(1),/"start_date": datetime(2021, 1, 19),(for weekly/monthly)
"on_failure_callback": task_fail_slack_alert,
}

dag = DAG(
cron_name,
default_args=default_args,
catchup=False,
schedule_interval=schedule_interval,
max_active_runs=1,
)

passing = KubernetesPodOperator(
namespace="crons",
image=image_name,
startup_timeout_seconds=240,
    cmds=["/bin/bash", "-c", cron_path],
labels=labels,
name=cron_name,
image_pull_policy="Always",
task_id=cron_name,
annotations=annotations,
    env_vars=env_vars,
    get_logs=True,
dag=dag,
volumes=[volume1, volume2, volume3, volume4],
volume_mounts=[volume_mount1, volume_mount2, volume_mount3, volume_mount4],
is_delete_operator_pod=True,
)

passing

```

## Python Operator

```python
 # utils.py
  import requests
  from airflow.contrib.operators.slack_webhook_operator import SlackWebhookOperator
  from airflow.hooks.base_hook import BaseHook

  SLACK_GROUP = "monitoring"

  def call_api(url, method, body):
      """
      call an api
      :param url: url of the api
      :param method: get/post method to use
      :param body: url args in case of get and request body in case of post
      :return: api response
      """

      if method == "GET":
          response = requests.get(url, body)

      elif method == "POST":
          response = requests.post(url, body)

      else:
          raise NotImplementedError

      if response.status_code == 200:
          print(response.text)

      else:
          raise Exception(
              f"API returned error :{response.status_code} \ndetails: {response.text}"
          )

  def task_fail_slack_alert(owner, context):
      slack_hook = BaseHook.get_connection(SLACK_GROUP).password
      slack_msg = f"""
              :red_circle: Task Failed.
              *Task*: {context.get("task_instance").task_id}
              *Dag*: {context.get("task_instance").dag_id}
              *Execution Time*: {context.get("execution_date")}
              *Owner*: {owner}
              *Log Url*: {context.get("task_instance").log_url}
              """

      failed_alert = SlackWebhookOperator(
          task_id="alerting",
          http_conn_id=SLACK_GROUP,
          webhook_token=slack_hook,
          message=slack_msg,
          channel="#cron",
          username="airflow",
      )

      return failed_alert.execute(context=context)

 # dag.py
  from functools import partial

  from airflow import DAG
  from airflow.operators.python_operator import PythonOperator
  from airflow.utils.dates import days_ago

  import utils

  cron_name = "api-v1_softcell_pull_mode_0"
  schedule_interval = "0 * * * *"

  method = "GET"
  url = "http://api-v1.prod/softcellCron/softcellPull?limit=50&mode=10&mode_value=0"
  body = {}

  owner = "<@U013CA4QJR3>"

  default_args = {
      "owner": "airflow",
      "depends_on_past": False,
      "start_date": days_ago(1),
      "on_failure_callback": partial(utils.task_fail_slack_alert, owner),
  }

  dag = DAG(
      cron_name,
      default_args=default_args,
      catchup=False,
      schedule_interval=schedule_interval,
   max_active_runs=1,
  )

  PythonOperator(
      task_id=cron_name,
      python_callable=utils.call_api,
      op_kwargs={"url": url, "method": method, "body": body},
      dag=dag,
)
```
