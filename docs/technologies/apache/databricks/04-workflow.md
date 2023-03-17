# Workflow

[Question Detail](https://community.databricks.com/s/question/0D58Y00009dAEFCSA4/schedule-job-to-run-sequentially-after-another-job)

[Orchestrate Databricks jobs with Apache Airflow | Databricks on AWS](https://docs.databricks.com/workflows/jobs/how-to/use-airflow-with-jobs.html)

[Trigger jobs when new files arrive | Databricks on AWS](https://docs.databricks.com/workflows/jobs/file-arrival-triggers.html)

[Run a Databricks notebook from another notebook | Databricks on AWS](https://docs.databricks.com/notebooks/notebook-workflows.html)

```python
dbutils.notebook.run("notebook-name", 60, {"argument": "data", "argument2": "data2", ...})

dbutils.notebook.run(i['nb_path'], i['timeout'], i['args']).split(';')
```

[Share code between Databricks notebooks | Databricks on AWS](https://docs.databricks.com/notebooks/share-code.html)
