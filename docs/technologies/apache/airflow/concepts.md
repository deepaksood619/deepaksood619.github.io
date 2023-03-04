# Concepts

## DAGs

In Airflow, aDAG-- or a Directed Acyclic Graph -- is a collection of all the tasks you want to run, organized in a way that reflects their relationships and dependencies.

Scope

Airflow will load anyDAGobject it can import from a DAGfile. Critically, that means the DAG must appear inglobals()

Default Arguments

If a dictionary ofdefault_argsis passed to a DAG, it will apply them to any of its operators. This makes it easy to apply a common parameter to many operators without having to type it many times.

Context Manager

DAGs can be used as context managers to automatically assign new operators to that DAG.

<https://medium.com/datareply/airflow-lesser-known-tips-tricks-and-best-practises-cf4d4a90f8f>

## Operators

While DAGs describehowto run a workflow, Operatorsdetermine what actually gets done.

An operator describes a single task in a workflow. Operators are usually (but not always) atomic, meaning they can stand on their own and don't need to share resources with any other operators. The DAG will make sure that operators run in the correct certain order; other than those dependencies, operators generally run independently. In fact, they may run on two completely different machines.

Airflow provides operators for many common tasks, including:

- [BashOperator](https://airflow.apache.org/_api/airflow/operators/bash_operator/index.html#airflow.operators.bash_operator.BashOperator)- executes a bash command
- [PythonOperator](https://airflow.apache.org/_api/airflow/operators/python_operator/index.html#airflow.operators.python_operator.PythonOperator)- calls an arbitrary Python function
- [EmailOperator](https://airflow.apache.org/_api/airflow/operators/email_operator/index.html#airflow.operators.email_operator.EmailOperator)- sends an email
- [SimpleHttpOperator](https://airflow.apache.org/_api/airflow/operators/http_operator/index.html#airflow.operators.http_operator.SimpleHttpOperator)- sends an HTTP request
- [MySqlOperator](https://airflow.apache.org/_api/airflow/operators/mysql_operator/index.html#airflow.operators.mysql_operator.MySqlOperator), [SqliteOperator](https://airflow.apache.org/_api/airflow/operators/sqlite_operator/index.html#airflow.operators.sqlite_operator.SqliteOperator), [PostgresOperator](https://airflow.apache.org/_api/airflow/operators/postgres_operator/index.html#airflow.operators.postgres_operator.PostgresOperator), [MsSqlOperator](https://airflow.apache.org/_api/airflow/operators/mssql_operator/index.html#airflow.operators.mssql_operator.MsSqlOperator), [OracleOperator](https://airflow.apache.org/_api/airflow/operators/oracle_operator/index.html#airflow.operators.oracle_operator.OracleOperator), [JdbcOperator](https://airflow.apache.org/_api/airflow/operators/jdbc_operator/index.html#airflow.operators.jdbc_operator.JdbcOperator), etc. - executes a SQL command
- Sensor- waits for a certain time, file, database row, S3 key, etc...

## DAG Assignment

Operators do not have to be assigned to DAGs immediately (previouslydagwas a required argument). However, once an operator is assigned to a DAG, it can not be transferred or unassigned. DAG assignment can be done explicitly when the operator is created, through deferred assignment, or even inferred from other operators.

## Bitshift Composition

Traditionally, operator relationships are set with theset_upstream()andset_downstream()methods. In Airflow 1.8, this can be done with the Python bitshift operators>>and<<. The following four statements are all functionally equivalent:

op1 >> op2
op1.set_downstream(op2)

op2 << op1
op2.set_upstream(op1)

## Tasks

Once an operator is instantiated, it is referred to as a "task". The instantiation defines specific values when calling the abstract operator, and the parameterized task becomes a node in a DAG.

## Task Instances

A task instance represents a specific run of a task and is characterized as the combination of a dag, a task, and a point in time. Task instances also have an indicative state, which could be "running", "success", "failed", "skipped", "up for retry", etc.

## Workflows

- **DAG:** a description of the order in which work should take place
- **Operator:** a class that acts as a template for carrying out some work
- **Task:** a parameterized instance of an operator
- **Task Instance:** a task that 1) has been assigned to a DAG and 2) has a state associated with a specific run of the DAG

By combiningDAGsandOperatorsto createTaskInstances, you can build complex workflows.

## Additional Functionality

- Hooks
- Pools
- Connections
- Queues
- XComs
- Variables
- Branching
- SubDAGs
- SLAs
- Trigger Rules
- Latest Run Only
- Zombies and Undeads
- Cluster Policy
- Documentation and Notes
- Jinja Templating
