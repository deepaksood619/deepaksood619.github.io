# Data Masking

## What is data masking?

Data masking is the process of hiding data by modifying its original letters and numbers. Due to regulatory and privacy requirements, organizations must protect the sensitive data they collect about their customers and operations. Data masking creates fake versions of an organization's data by changing confidential information. Various techniques are used to create realistic and structurally similar changes. Once data is masked, you can’t reverse engineer or track back to the original data values without access to the original dataset.

## What are the use cases of data masking?

Data masking techniques support an organization's efforts to meet data privacy regulations like the General Data Protection Regulation (GDPR). You can protect many data types such as personally identifiable information (PII), financial data, protected health information (PHI), and intellectual property.

Next, we explore some data masking use cases.

### Secure development

Software development and testing environments require real-world datasets for testing purposes. However, using real data raises security concerns. Data masking allows developers and testers to work with realistic test data that resembles the original, but without exposing sensitive information. It reduces security risks in development and testing cycles.

### Analytics and research

Data masking allows data scientists and analysts to work with large datasets without compromising individual privacy. Researchers derive valuable insights and trends from the data and ensure privacy protection. For example, scientists can use anonymized datasets to study the effectiveness of new medicines, analyze treatment outcomes, or investigate potential side effects.

### External collaboration

Organizations often need to share data with external partners, vendors, or consultants. By masking certain fields or attributes, organizations can collaborate with external parties and still protect sensitive data.

### Employee training

You can use data masking for employee training sessions or software demonstrations. By masking sensitive data, organizations can provide realistic examples without exposing genuine customer or business data. Employees can learn and practice skills without the need to access data that they don’t have authorization for.

## What are the types of data masking?

Next, we give some common data masking types.

### Static data masking

Static data masking is the process of applying a fixed set of masking rules to sensitive data before it’s stored or shared. It’s commonly used for data that does not change frequently or remains static over time. You predefine the rules and consistently apply them to the data, which ensures consistent masking across multiple environments.

While the details are complex, here’s an overview of the static data masking process:

1. Identify and understand sensitive data
2. Design and develop masking rules
3. Choose appropriate data masking algorithms
4. Apply masking rules to the actual data

You can then share the masked data as required.

### Dynamic data masking

Dynamic data masking applies masking techniques in real time. It dynamically alters existing sensitive data as users access or query it. It’s primarily used for implementing role-based data security in applications like customer support or medical record handling.

Dynamic data masking works as follows:

1. All users communicate with the database via a proxy server
2. When users request to read data, the database proxy applies masking rules based on user roles, privileges, or access permissions
3. Authorized users receive the original data, while unauthorized users receive masked data

Although the process does not require advance preparation, it may impact performance.

### Deterministic data masking

Deterministic data masking ensures that the same input value is consistently masked to the same output value. For instance, if a particular name is masked as "John" in one instance, it will always be masked as "John" throughout the system.

Deterministic masking techniques often involve data substitution or tokenization, where a consistent mapping is maintained between the original data column and masked values.

### On-the-fly data masking

On-the-fly data masking masks sensitive data in memory, so there’s no requirement to store the altered data in the database. It’s useful in continuous deployment pipelines or in complex integration scenarios, where data moves frequently between production and non-production environments. At the required stage in the pipeline, the application masks the data then passes it to the next stage in the pipeline.

### Statistical obfuscation

Statistical data obfuscation involves altering the values of sensitive data in a way that preserves the statistical properties and relationships within the data. It ensures that the masked data maintains the overall distribution, patterns, and correlations of the original data for accurate statistical analysis. Statistical data obfuscation techniques include applying mathematical functions or perturbation algorithms to the data.

## What are some common data masking techniques?

There are several algorithms you can use for data protection. Here are some common data masking methods.

### Randomization

With randomization, you replace sensitive data with randomly generated values that have no correlation to the original data. For example, you can replace names, addresses, or other personally identifiable information with fictional or randomly selected values.

### Substitution

Substitution masking involves replacing sensitive data with similar but fictitious data. For example, you can replace actual names with names from a predefined list. You can also use algorithms to generate similar but fake credit card numbers.

### Shuffling

With shuffling, you reorder the values within a dataset to preserve statistical properties and make individual records unidentifiable. This technique is commonly used for preserving the relationships within data.

For instance, in a data table, you can randomly shuffle column data so row values change. Practically, you could preserve the association between a customer and their transactions while switching names and contact details.

### Encryption

With encryption masking, you encrypt sensitive data by using cryptographic algorithms. You transform the data into an unreadable format, and only authorized users with the decryption keys can access the original data. This technique provides a higher level of data security, but it affects query performance since decryption is required for data analysis.

### Hashing

Hashing is a transformation technique that converts data into a fixed-length string of characters. It’s commonly used for masking passwords or other sensitive information where the original value isn’t needed and you just need to verify the data.

### Tokenization

With tokenization, you replace production data with a randomly generated token or reference value. You store the original data in a separate secure location and use the token as a substitute during processing or analysis. Tokenization helps maintain data integrity while minimizing the risk of exposing sensitive information.

### Nulling

Nulling (or blanking) is a data masking solution that replaces sensitive data with null values or blank spaces. This effectively removes the data from the dataset. This approach is suitable when you want to retain the format or structure of the data, but the specific information must be concealed.

## What are the challenges in data masking?

Next, we discuss some common challenges in data masking.

### Attribute preservation

It's important for research and analytics that data masking preserves the original data attributes for certain data types. You want to make sure your data masking tools preserve original data types or preserve the frequency of any associated data categories.

For example, if a tool alters the demographic representation of customer data or card category statistics when it obfuscates credit card details, this could impact analytics. Attribute preservation can become challenging in certain data masking processes like randomization or tokenization.

### Semantic integrity

The generated fake values must adhere to the business rules and constraints associated with different data types. For example, salaries should fall within a specific range, and national identification numbers should follow a predetermined format. It’s challenging to preserve semantic integrity, but it ensures that the masked data remains meaningful and realistic.

### Data uniqueness

In cases where the original data requires uniqueness, such as employee ID numbers, the data masking technique must provide unique values to replace the original data. Absence of uniqueness in key fields may create potential conflicts or inconsistencies.

### Integration with existing workflows

It can be challenging to integrate data masking into existing workflows, especially during the initial stages of implementation. Employees may experience inconveniences as they adjust to the new processes and technologies. To ensure a smooth integration and minimal disruption, your organization should focus on careful planning, stakeholder collaboration, and addressing user concerns.

[What is Data Masking?](https://aws.amazon.com/what-is/data-masking/)
