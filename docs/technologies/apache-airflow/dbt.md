# DBT (Data Build Tool)

Analytics engineering is the data transformation work that happens between loading data into your warehouse and analyzing it. dbt allows anyone comfortable with SQL to own that workflow.

With dbt, data teams work directly within the warehouse to produce trusted datasets for reporting, ML modeling, and operational workflows.

![DBT Platform](../../media/Pasted%20image%2020230308224022.jpg)

dbt is a SQL-first transformation workflow that lets teams quickly and collaboratively deploy analytics code following software engineering best practices like modularity, portability, CI/CD, and documentation. Now anyone on the data team can safely contribute to production-grade data pipelines.

![image](../../media/Pasted%20image%2020230308224127.jpg)

- https://www.getdbt.com
- [What is dbt?](https://www.getdbt.com/product/what-is-dbt/)
- [What is Analytics Engineering?](https://www.getdbt.com/what-is-analytics-engineering/)
- [Getting Started with dbt (Data Build Tool): A Beginner’s Guide to Building Data Transformations | by Suffyan Asad | Medium](https://medium.com/@suffyan.asad1/getting-started-with-dbt-data-build-tool-a-beginners-guide-to-building-data-transformations-28e335be5f7e)
- [GitHub - dbt-labs/dbt-core: dbt enables data analysts and engineers to transform their data using the same practices that software engineers use to build applications.](https://github.com/dbt-labs/dbt-core)
- [Setting Up dbt and Connecting to Snowflake](https://vivekbattul.notion.site/Setting-Up-dbt-and-Connecting-to-Snowflake-0c8dc5fae7df4d71aca1fabdad38b3f7)
- [dbt vs Airflow vs Keboola](https://www.keboola.com/blog/dbt-vs-airflow-vs-keboola)
- [dbt vs Airflow: Which data tool is best for your organization?](https://datacoves.com/post/dbt-vs-airflow)

### DBT Models

dbt models are files, typically in SQL or Python, that contain the logic to transform data in a data warehouse. They are written as SELECT statements in SQL and can be compiled into tables or views using different materialization strategies. dbt models enable modularity by breaking down complex transformations into logical, reusable steps and help build analytical data infrastructure by organizing transformation logic.

#### Key Characteristics

- **Format:** Most models are .sql files containing SELECT statements. Starting with dbt version 1.3, models can also be written in Python using return statements.
- **Logic:** Models define how raw source data is transformed, cleaned, and structured for analysis.
- **Dependencies:** Models are organized into a dependency graph, allowing dbt to run them in the correct order.
- **Execution:** When you run a dbt model, dbt wraps the SQL in the necessary Data Definition Language (DDL) to create a table or view in your data warehouse.

#### How They Work

- **Write the Model:** A developer writes a .sql or .py file in the /models/ directory of a dbt project.
- **Compilation:** dbt reads the model file and compiles it into a series of SQL statements.
- **Materialization:** dbt then executes these SQL statements against the data warehouse to create the defined database object (a table, view, or other materialization).

#### Types of Materializations

dbt provides different ways to persist your model's results:

- **View:** A query that runs every time the view is accessed.
- **Table:** A physical table stored in the data warehouse.
- **Incremental:** Appends or updates only new or changed data, rather than reprocessing the entire dataset, for efficiency.
- **Ephemeral:** A temporary object that doesn't persist in the warehouse.

#### Why Use dbt Models?

- **Modularity:** Break down complex transformations into smaller, manageable, and reusable units.
- **Version Control:** Manage transformation logic with other code, making it easier to collaborate and track changes.
- **Documentation:** Models serve as documentation, making the transformation logic clear to other team members.
- **Efficiency:** Use features like incremental models to significantly reduce processing time and costs.
