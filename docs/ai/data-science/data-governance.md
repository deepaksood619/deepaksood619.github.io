# Data Governance

Data governance (DG) is the process of managing the availability, usability, integrity and security of the [data](https://searchdatamanagement.techtarget.com/definition/data) in enterprise systems, based on internal data standards and policies that also control data usage. Effective data governance ensures that data is consistent and trustworthy and doesn't get misused. It's increasingly critical as organizations face new data privacy regulations and rely more and more on data analytics to help optimize operations and drive business decision-making.

Ethical Principles around Data

1. Autonomy - The right to control your data, possibly via surrogates
2. Informed consent - You should explicitly appove use of your data based on understanding
3. Beneficence - People using your data should do it for your benefit
4. Non-maleficence - Do no harm

## Data Lineage

### Cross Reference Tables

Cross-reference tables, sometimes referred to as XREF tables, are used for tracking the lineage of data, which systems and which records from those systems contributed to consolidated records, and also for tracking versions of data.

- [Cross-Reference (XREF) Tables](https://docs.informatica.com/master-data-management/multidomain-mdm/10-3/overview-guide/key-concepts/content-metadata/cross-reference--xref--tables.html)
- [Mapping Data with Cross-References](https://docs.oracle.com/middleware/1221/osb/develop/GUID-F1DED2BC-B513-4637-9FAF-63F07FAB52A5.htm#OSBDV88275)

## ODPi

ODPi creates open source standards to help you use and understand data across all platforms.

https://www.odpi.org

https://searchdatamanagement.techtarget.com/definition/data-governance

https://en.wikipedia.org/wiki/Data_governance

https://www.oreilly.com/content/data-governance-and-the-death-of-schema-on-read

## Data governance frameworks

1. [DGI](https://atlan.com/data-governance-framework/#1-dgi) - Data Governance Institute
2. [DAMA DMBOK](https://atlan.com/data-governance-framework/#2-dama-dmbok) - Data Management Body of Knowledge (DMBOK)
3. [McKinsey](https://atlan.com/data-governance-framework/#3-mckinsey)
4. [Eckerson](https://atlan.com/data-governance-framework/#4-eckerson)
5. [PwC](https://atlan.com/data-governance-framework/#5-pwc)
6. [Deloitte](https://atlan.com/data-governance-framework/#6-deloitte)
7. Control Objectives for Information and Related Technology (COBIT)
8. SAS Data Governance Framework
9. BCG Data Governance Framework

[Data Governance Framework: Guide, Examples, Template](https://atlan.com/data-governance-framework/)

[Top Data Governance Frameworks in 2024](https://www.kellton.com/kellton-tech-blog/popular-data-governance-frameworks)

## Cheat Sheet

### What is Sensitive Data?

Personally Identifiable Information (PII), Protected health information (PHI), intellectual property, financial information, education and legal records are all sensitive data.

Most countries have laws and regulations that require the protection of sensitive data. For example, the General Data Protection Regulation (GDPR) in the European Union sets stringent rules for data protection and privacy. Non-compliance with such regulations can result in hefty fines, legal actions, and sanctions against the violating entity.

When we design systems, we need to design for data protection.

### Encryption & Key Management

The data transmission needs to be encrypted using SSL. Passwords shouldn’t be stored in plain text.

For key storage, we design different roles including password applicant, password manager and auditor, all holding one piece of the key. We will need all three keys to open a lock.

### Data Desensitization

Data desensitization, also known as data anonymization or data sanitization, refers to the process of removing or modifying personal information from a dataset so that individuals cannot be readily identified. This practice is crucial in protecting individuals' privacy and ensuring compliance with data protection laws and regulations. Data desensitization is often used when sharing data externally, such as for research or statistical analysis, or even internally within an organization, to limit access to sensitive information.
Algorithms like GCM store cipher data and keys separately so that hackers are not able to decipher the user data.

### Minimal Data Permissions

To protect sensitive data, we should grant minimal permissions to the users. Often we design Role-Based Access Control (RBAC) to restrict access to authorized users based on their roles within an organization. It is a widely used access control mechanism that simplifies the management of user permissions, ensuring that users have access to only the information and resources necessary for their roles.

### Data Lifecycle Management

When we develop data products like reports or data feeds, we need to design a process to maintain data quality. Data developers should be granted with necessary permissions during development. After the data is online, they should be revoked from the data access.

![managing sensitive data](../../media/Pasted%20image%2020240228190110.jpg)

![Data Governance](../../media/Pasted%20image%2020240213122425.jpg)

## Tools

### Data Hub

The No. 1 open source metadata platform

Data Discovery and Lineage for Big Data Ecosystem

DataHub is a modern data catalog designed to streamline metadata management, data discovery, and data governance. It enables users to efficiently explore and understand their data, track data lineage, profile datasets, and establish data contracts. This extensible metadata management platform is built for developers to tame the complexity of their rapidly evolving data ecosystems and for data practitioners to leverage the total value of data within their organization.

[DataHub: A generalized metadata search & discovery tool](https://www.linkedin.com/blog/engineering/archive/data-hub)

[DataHub Quickstart Guide \| DataHub](https://datahubproject.io/docs/quickstart/)

[docker-compose-without-neo4j-m1.quickstart.yml](https://raw.githubusercontent.com/datahub-project/datahub/master/docker/quickstart/docker-compose-without-neo4j-m1.quickstart.yml)

[GitHub - datahub-project/datahub: The Metadata Platform for your Data and AI Stack](https://github.com/datahub-project/datahub) - 10.5k stars

```bash
# use python 3.11

python3 -m pip install --upgrade pip wheel setuptools
python3 -m pip install --upgrade acryl-datahub
datahub version

datahub docker quickstart

# http://localhost:9002
username: datahub
password: datahub

# ingest sample data
datahub docker ingest-sample-data
```

```yaml
source:
  type: bigquery
  config:
    project_id: your-gcp-project-id
    credentials:
      # If using a service account key file
      filename: /path/to/service_account.json
    include_tables: true
    include_views: true
    include_usage_stats: true
    usage_stats:
      top_n_queries: 25
sink:
  type: datahub-rest
  config:
    server: http://localhost:8080

# datahub ingest -c ingestion/bigquery.yml
```

### DataHub vs Apache Atlas

Both Apache Atlas and DataHub are open-source data catalog platforms designed to manage metadata, but they differ in their architecture, focus, and features.

- Apache Atlas, originally developed for the Hadoop ecosystem, emphasizes traditional governance with a strong integration within Hadoop.
- DataHub, on the other hand, takes a schema-first, real-time, and stream-based approach, focusing on comprehensive metadata management and governance.

### Others

- [Unified governance for data and AI \| Collibra](https://www.collibra.com/)
- Talend
- Informatica
- Apache Atlas
- [The Data Catalog Platform \| data.world](https://data.world/)

## Links

- [Designing Data Governance from the Ground Up • Lauren Maffeo & Samia Rahman • GOTO 2023 - YouTube](https://www.youtube.com/watch?v=A8dVHjRENBQ)
- [Data governance in the age of generative AI | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/data-governance-in-the-age-of-generative-ai/)
