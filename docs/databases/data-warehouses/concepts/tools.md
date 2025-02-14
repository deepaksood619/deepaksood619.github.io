# Tools

## Informatica PowerCenter / IICS

Informatica PowerCenter is a tool for extracting, transforming, and loading data from sources. It's used to create data warehouses for industries. Informatica PowerCenter can connect to:

- Enterprise database systems
- Mainframe systems
- Middleware
- Midrange systems
- Analytics tools like Tableau
- Cloud-based systems like Microsoft Azure and AWS

Informatica Intelligent Cloud Services (IICS) is a cloud-based platform for integrating and synchronizing data and applications. IICS offers similar functionality to PowerCenter, but it can be accessed via the internet. IICS allows users to run ETL (Extract, Transform and Load) codes in the cloud.

Some transformations in IICS include:

- Lookup Transformation
- Joiner Transformation
- Union Transformation
- Normalizer Transformation
- Hierarchy Parser Transformation
- Hierarchy Builder Transformation
- Transaction Control Transformation
- WebServices Transformation

### Components

- [Secure Agents](https://docs.informatica.com/cloud-common-services/administrator/current-version/runtime-environments/secure-agents.html)
- [Cloud Data Governance and Data Catalog (CDGC) – Predictive Data Intelligence | Informatica India](https://www.informatica.com/in/products/data-governance/cloud-data-governance-and-catalog.html)
    - [Best Practices for Implementing Cloud Data Governance and Catalog - YouTube](https://www.youtube.com/watch?v=E5Bo1AUYLS8)
- Informatica IDMC - Intelligent Data Management Cloud
    - [What is API Management? | Informatica India](https://www.informatica.com/in/resources/articles/api-management-and-informatica-intelligent-cloud-services.html)
    - [API Lifecycle Management Tools and Solutions | Informatica India](https://www.informatica.com/in/products/cloud-integration/integration-cloud/api-management.html)

### Links

- [Master Data Management (MDM)](databases/data-warehouses/concepts/master-data-management-mdm.md)
- [How Informatica Cloud Data Governance and Catalog uses Amazon Neptune for knowledge graphs | AWS Database Blog](https://aws.amazon.com/blogs/database/how-informatica-cloud-data-governance-and-catalog-uses-amazon-neptune-for-knowledge-graphs/)

## DVC

[DVC](https://dvc.org/) stands for "data version control". This project invites data scientists and engineers to a Git-inspired world, where all workflow versions are tracked, along with all the data artifacts and models, as well as associated metrics.

**Data Version Control** or **DVC** is a command line tool and [VS Code Extension](https://github.com/iterative/dvc#vs-code-extension) to help you develop reproducible machine learning projects:

1. **Version** your data and models. Store them in your cloud storage but keep their version info in your Git repo.
2. **Iterate** fast with lightweight pipelines. When you make changes, only run the steps impacted by those changes.
3. **Track** experiments in your local Git repo (no servers needed).
4. **Compare** any data, code, parameters, model, or performance plots.
5. **Share** experiments and automatically reproduce anyone's experiment.

[Data Version Control · DVC](https://dvc.org)

[GitHub - iterative/dvc: 🦉 ML Experiments Management with Git](https://github.com/iterative/dvc)

[Tracking ML Experiments With Data Version Control](https://www.analyticsvidhya.com/blog/2021/06/mlops-tracking-ml-experiments-with-data-version-control/)

## DBT

Analytics engineering is the data transformation work that happens between loading data into your warehouse and analyzing it. dbt allows anyone comfortable with SQL to own that workflow.

With dbt, data teams work directly within the warehouse to produce trusted datasets for reporting, ML modeling, and operational workflows.

![DBT Platform](../../../media/Pasted%20image%2020230308224022.jpg)

dbt is a SQL-first transformation workflow that lets teams quickly and collaboratively deploy analytics code following software engineering best practices like modularity, portability, CI/CD, and documentation. Now anyone on the data team can safely contribute to production-grade data pipelines.

![image](../../../media/Pasted%20image%2020230308224127.jpg)

- https://www.getdbt.com
- [What is dbt?](https://www.getdbt.com/product/what-is-dbt/)
- [What is Analytics Engineering?](https://www.getdbt.com/what-is-analytics-engineering/)
- [Getting Started with dbt (Data Build Tool): A Beginner’s Guide to Building Data Transformations | by Suffyan Asad | Medium](https://medium.com/@suffyan.asad1/getting-started-with-dbt-data-build-tool-a-beginners-guide-to-building-data-transformations-28e335be5f7e)
- [GitHub - dbt-labs/dbt-core: dbt enables data analysts and engineers to transform their data using the same practices that software engineers use to build applications.](https://github.com/dbt-labs/dbt-core)
- [Setting Up dbt and Connecting to Snowflake](https://vivekbattul.notion.site/Setting-Up-dbt-and-Connecting-to-Snowflake-0c8dc5fae7df4d71aca1fabdad38b3f7)
- [dbt vs Airflow vs Keboola](https://www.keboola.com/blog/dbt-vs-airflow-vs-keboola)
- [dbt vs Airflow: Which data tool is best for your organization?](https://datacoves.com/post/dbt-vs-airflow)

## Airbyte

The leading data integration platform for ETL / ELT data pipelines from APIs, databases & files to data warehouses, data lakes & data lakehouses. Both self-hosted and Cloud-hosted.

Ultimate vision is to help you move data from any source to any destination. Airbyte already provides the largest [catalog](https://docs.airbyte.com/integrations/) of 300+ connectors for APIs, databases, data warehouses, and data lakes.

[GitHub - airbytehq/airbyte: The leading data integration platform for ETL / ELT data pipelines from APIs, databases & files to data warehouses, data lakes & data lakehouses. Both self-hosted and Cloud-hosted.](https://github.com/airbytehq/airbyte)

[Airbyte | Open-Source Data Integration Platform | ELT tool](https://airbyte.com/)

[Getting Started | Airbyte Documentation](https://docs.airbyte.com/using-airbyte/getting-started)

### CDC

To support CDC, Airbyte uses [Debezium](https://debezium.io/) internally.

[Airbyte's incremental Change Data Capture (CDC) replication](https://airbyte.com/tutorials/incremental-change-data-capture-cdc-replication)

[How useful is Airbytes in production pipelines? : r/dataengineering](https://www.reddit.com/r/dataengineering/comments/13me0t9/how_useful_is_airbytes_in_production_pipelines/)

#### Airbyte’s replication modes

- What is Airbyte’s ELT approach to data integration?
- Why is ELT preferred over ETL?
- What is a cursor?
- What is a primary key used for?
- What is the difference between full refresh replication and incremental sync replication?
- What does it mean to append data rather than overwrite it in the destination?
- How is incremental sync with deduped history different from incremental sync with append?
- What are the advantages of log-based change data capture (CDC) replication versus standard replication?
- Which replication mode should you choose?

| Full refresh replication | Incremental sync replication |
| ---- | ---- |
| The **entire data set** will be retrieved from the source and sent to the destination on each sync run. | Only records that have been **inserted or updated** in the source system since the previous sync run are sent to the destination. |

[An overview of Airbyte’s replication modes | Airbyte](https://airbyte.com/blog/understanding-data-replication-modes)

## Others

- [The Data Platform for Cloud & AI | WEKA - WEKA](https://www.weka.io/)
- [Tinybird · The Way to build Real-time Data Products](https://www.tinybird.co/)
