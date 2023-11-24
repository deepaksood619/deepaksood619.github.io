# Workflow

[Create, run, and manage Databricks Jobs | Databricks on AWS](https://docs.databricks.com/workflows/jobs/jobs.html)

```bash
Type - Notebook
Source - Github
Git - https://github.com/cakedefi/cake-data-eng
Git reference - main
Path - silver_layer/product_revenue_bifurcation
Cluster - PROD Data Team Cluster
-> Save
Add Schedules & Triggers
Add Notification
```

[Question Detail](https://community.databricks.com/s/question/0D58Y00009dAEFCSA4/schedule-job-to-run-sequentially-after-another-job)

[Orchestrate Databricks jobs with Apache Airflow | Databricks on AWS](https://docs.databricks.com/workflows/jobs/how-to/use-airflow-with-jobs.html)

[Trigger jobs when new files arrive | Databricks on AWS](https://docs.databricks.com/workflows/jobs/file-arrival-triggers.html)

[Run a Databricks notebook from another notebook | Databricks on AWS](https://docs.databricks.com/notebooks/notebook-workflows.html)

```python
dbutils.notebook.run("notebook-name", 60, {"argument": "data", "argument2": "data2", ...})

dbutils.notebook.run(i['nb_path'], i['timeout'], i['args']).split(';')
```

[Share code between Databricks notebooks | Databricks on AWS](https://docs.databricks.com/notebooks/share-code.html)

[Share information between tasks in a Databricks job | Databricks on AWS](https://docs.databricks.com/workflows/jobs/share-task-context.html)

```python
dbutils.jobs.taskValues.set(key = 'name', value = 'Some User')
dbutils.jobs.taskValues.set(key = "age", value = 30)

dbutils.jobs.taskValues.get(taskKey = "Get_user_data", key = "age", default = 42, debugValue = 0)
dbutils.jobs.taskValues.get(taskKey = "Get_user_data", key = "name", default = "Jane Doe")
```

## Others

### DBX

Databricks CLI eXtensions - aka `dbx` is a CLI tool for development and advanced Databricks workflows management.

[GitHub - databrickslabs/dbx: 🧱 Databricks CLI eXtensions - aka dbx is a CLI tool for development and advanced Databricks workflows management.](https://github.com/databrickslabs/dbx)

[dbx | github](https://dbx.readthedocs.io/en/latest/)

```bash
pip install dbx

dbx init -p "cicd_tool=GitHub Actions" -p "cloud=AWS" -p "project_name=charming-aurora" -p "profile=DEFAULT" --no-input

cd charming-aurora

pip install -e ".[local,test]"

pytest tests/unit --cov
```

### pyjaws

**PyJaws** enables declaring [Databricks Jobs and Workflows](https://docs.databricks.com/workflows/index.html) as Python code, allowing for:

- Code Linting
- Formatting
- Parameter Validation
- Modularity and reusability

```bash
pip install pyjaws

export DATABRICKS_HOST="https://dbc-1ae8e7ed-1d80.cloud.databricks.com"
export DATABRICKS_TOKEN="<token>"
echo $DATABRICKS_HOST
echo $DATABRICKS_TOKEN

pyjaws create <folder_name>
pyjaws create .

display(simple_workflow)
```

```python
from pyjaws.api.base import (
    Cluster,
    Runtime,
    Workflow
)
from pyjaws.api.tasks import PythonWheelTask, NotebookTask

cluster = Cluster(
    job_cluster_key = "ai_cluster",
    spark_version = Runtime.DBR_13_ML,
    num_workers = 2,
    node_type_id = "r3.xlarge",
    cluster_log_conf = {
        "dbfs": {
            "destination": "dbfs:/home/cluster_log"
        }
    }
)

# Create a Task object.
ingest_task = PythonWheelTask(
    key = "ingest",
    cluster = cluster,
    entrypoint = "iot",
    task_name = "ingest",
    parameters = [
        f"my_parameter_value",
        "--output-table", "my_table"
    ],
    package_name = 'abc'
)

transform_task = PythonWheelTask(
    key = "transform",
    cluster = cluster,
    entrypoint = "iot",
    task_name = "ingest",
    dependencies = [ingest_task],
    parameters = [
        f"my_parameter_value2",
        "--input-table", "my_table"
        "--output-table", "output_table"
    ],
    package_name = 'abc'
)

next_task = NotebookTask(
    key = "next",
    cluster = cluster,
    entrypoint = "iot",
    task_name = "next",
    dependencies = [ingest_task],
    source = "GIT",
    notebook_path = "/test_repo_pipeline",
    parameters = [
        f"my_parameter_value2",
        "--input-table", "my_table"
        "--output-table", "output_table"
    ],
    package_name = 'abc'
)


# Create a Workflow object to define dependencies
# between previously defined tasks.

workflow = Workflow(
    name = "my_workflow",
    tasks = [ingest_task, transform_task, next_task]
```

- Make sure to add the package_name, otherwise getting `pydantic.error_wrappers.ValidationError`
- Change node_type_id since example node_type_id not present
- Add NotebookTask for running notebooks
- Add source to GIT

[GitHub - rafaelpierre/pyjaws: PyJaws: A Pythonic Way to Define Databricks Jobs and Workflows](https://github.com/rafaelpierre/pyjaws)

[pyjaws/pyjaws/pyjaws/api/tasks.py at main · rafaelpierre/pyjaws · GitHub](https://github.com/rafaelpierre/pyjaws/blob/main/pyjaws/pyjaws/api/tasks.py)
