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
- [Master Data Management (MDM) Solutions and Tools \| Informatica](https://www.informatica.com/products/master-data-management.html)

### MDM Processing

In Informatica, merging records typically refers to consolidating multiple records into a single, authoritative record, often referred to as a "**golden record.**" This process involves identifying duplicate or related records and combining their data to create a comprehensive, unified representation. Informatica's MDM (Master Data Management) solutions, such as MDM Hub and C360 SaaS, provide tools and workflows to facilitate this process, either automatically or through manual intervention.

#### 1. Identifying Duplicate or Related Records

- **Match and Merge:** Informatica uses match rules and algorithms to identify potential matches or duplicates based on specific fields or combinations of fields.
- **Manual Review:** In some cases, a manual review of potential matches may be necessary to ensure accurate merging, especially when dealing with complex relationships or ambiguous data.
- **Search and Query:** Users can use search functionalities within Informatica MDM to find and select records for merging.

#### 2. Merging Process

- **Automatic Merging:** In some scenarios, records can be automatically merged based on predefined rules and trust levels.
- **Manual Merging:** Users can manually select records to merge and review the merged data to ensure accuracy.
- **Surviving Records:** During the merge process, Informatica determines which fields from the original records will be retained in the merged record, often based on trust levels or recency.

#### 3. Tools and Workflows

- **Data Steward Workbench (MDM Hub):** This workbench provides tools like Merge Manager for reviewing and managing merging activities.
- **Merge Manager:** This component allows users to view records queued for merging, review potential matches, and manually merge records.
- **Data Director:** This component (part of C360 SaaS) provides a user interface for navigating and managing master data, including merging records.
- **REST APIs:** Informatica provides REST APIs for programmatic merging of records, enabling integration with other systems and workflows.

#### 4. Key Considerations

- **Match Rules:** Properly defining match rules is crucial for accurately identifying duplicate records.
- **Trust Levels:** Understanding and utilizing trust levels to prioritize data from different sources is essential for creating authoritative golden records.
- **Data Governance:** Establishing clear data governance policies and processes is necessary for ensuring the accuracy and consistency of merged data.

### Links

- [Master Data Management (MDM)](data-warehouses/concepts/master-data-management-mdm.md)
- [How Informatica Cloud Data Governance and Catalog uses Amazon Neptune for knowledge graphs | AWS Database Blog](https://aws.amazon.com/blogs/database/how-informatica-cloud-data-governance-and-catalog-uses-amazon-neptune-for-knowledge-graphs/)

## Others

- [The Data Platform for Cloud & AI | WEKA - WEKA](https://www.weka.io/)
- [Tinybird · The Way to build Real-time Data Products](https://www.tinybird.co/)
