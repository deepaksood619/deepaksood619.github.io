# ML Monitoring

[A Guide to Monitoring Machine Learning Models in Production | NVIDIA Technical Blog](https://developer.nvidia.com/blog/a-guide-to-monitoring-machine-learning-models-in-production/)

### Machine learning system behavior

When building machine learning systems, practitioners are mainly keen on tracking the system’s behavior. Three components determine the system’s behavior:

1. **The data (ML specific)**: A machine learning system’s behavior depends on the dataset on which the model was trained, as well as the data streaming into the system while in production.
2. **The model (ML specific)**: The model is the output of a machine learning algorithm trained on data. It represents what was learned by the algorithm. It is better to think of the model as a pipeline as it would typically consist of all steps to orchestrate the flow of data into and output from the model.
3. **The code**: Code is required to build the machine learning pipeline and define the model configurations to train, test, and evaluate models.

### Challenges in machine learning systems

It is not as simple as saying, “we have two additional dimensions” to consider when building a machine learning system. Code and configuration introduce more complexity and sensitivity into a machine learning system due to the following challenges:

#### Entanglements

Any change in the input data distributions will influence the approximation of the target function, which may affect the predictions made by the model. In other words, changing anything changes everything. Therefore, any feature engineering and selection code must be carefully tested.  

#### Configurations

A flaw in the configuration of a model (for example, hyperparameters, versions, and features) can radically alter the system’s behavior and will not be caught with traditional software tests. In other words, a machine learning system can predict an incorrect but valid output without raising an exception.

These factors combine to make monitoring machine learning systems extremely difficult compared to traditional software systems, which are governed by the rules specified in the code. Another factor to consider is the number of stakeholders involved in developing a machine learning system. This is known as the **responsibility challenge**.

## The responsibility challenge

Often, having multiple stakeholders on a project may be extremely beneficial. Each stakeholder can provide insight into requirements and constraints based on their expertise, enabling the team to reduce and uncover risks on the project.

However, each stakeholder may have a completely different understanding of the meaning of “monitoring” based on business areas and responsibilities. An example distinction could be made between data scientists and engineers.

### A data scientist’s perspective

Data scientists are most concerned with achieving functional objectives, such as changes in the input data, the model, and the predictions made by the model. Monitoring functional objectives requires visibility into the data passing into the model, metrics from the model itself, and an understanding of the predictions made by the model.

A data scientist may be more concerned with the model’s accuracy in the production environment. To achieve such insight, it would be ideal if true labels were available in real time, which is only sometimes the case. Thus, data scientists often use proxy values to gain visibility into their models.

### An engineer’s perspective

On the other hand, engineers are often responsible for achieving operational objectives that ensure the resources for the machine learning system are healthy. This requires monitoring traditional software application metrics, which is typical in traditional software development. Examples include:

- Latency
- IO/memory/disk use
- System reliability (uptime)
- Auditability

Despite the discrepancies in stakeholder goals and responsibilities, adequate monitoring of machine learning systems takes both perspectives into account. However, a good level of understanding is still required across the board. To achieve such a feat, it is still vital that all stakeholders come together to ensure terms are well-defined so all team members speak the same language.

## What needs to be monitored in production?

Monitoring is divided into two levels: functional and operational.

### Functional level monitoring

At the functional level, the data scientist (or/and machine learning engineer) will monitor three distinct categories: the input data, the model, and the output predictions. Monitoring each category provides data scientists with better insight into the model’s performance.

#### Input data

Models depend on the data received as input. If a model receives an input it does not expect, the model may break. Monitoring the input data is the first step to detecting functional performance problems and extinguishing them before they impact the performance of the machine learning system. Items to monitor from an input data perspective include:

**Data quality**: To maintain data integrity, you must validate production data before it sees the machine learning model, using metrics based on data properties. In other words, ensure that data types are equivalent. Several factors may compromise your data integrity; for example, a change in the source data schema or data being lost. Such issues change the data pipeline so that the model no longer receives the expected inputs.

**Data drift**: Changes in distribution between the training data and production data can be monitored to check for drift: this is done by detecting changes in the statistical properties of feature values over time. Data comes from a never-ending, ever-changing source called the real world. As people’s behavior changes, the landscape and context around the business case you’re solving may change. At that point, it is time to update your machine learning model.

#### The model

At the heart of your machine learning system lies your machine learning model. For the system to drive business value, the model must maintain a performance level above a threshold. The various aspects that could deter the model’s performance must be monitored to achieve this goal, such as model drift and versions.

**Model drift**: Model drift is the decay of a model’s predictive power due to alterations in the real-world environment. Statistical tests should be used to detect drift, and predictive performance should be monitored to evaluate the model’s performance over time.

**Versions**: Always ensure the correct model is running in production. Version history and predictions should be tracked.  

#### The output

To understand how the model performs, you must also understand the predictions the model outputs in the production environment. A machine learning model is put into production to solve a problem. Thus, monitoring the model’s output is a valuable way to ensure it performs according to the metrics used as KPIs. For example:

**Ground truth:** For some problems, you can acquire ground truth labels. For example, if a model is used to recommend personalized ads to users (you are predicting if a user will click the ad or not), and a user clicks to imply the ad is relevant, you can almost immediately acquire the ground truth. In such scenarios, an aggregation of a model’s predictions can be evaluated against the actual solution to determine how well the model performs. However, evaluating model predictions against ground truth labels is difficult in most machine learning use cases, and an alternative method is required.  

**Prediction drift:** When it is not possible to acquire ground truth labels, predictions must be monitored. If there is a drastic change in the distribution of predictions, something has potentially gone wrong. For example, if you are using a model to predict fraudulent credit card transactions and suddenly the proportion of transactions identified as fraud shoots up, then something has changed. Perhaps input data structure has been altered, some other microservice in the system is misbehaving, or maybe there is just more fraud in the world.

### Operational level monitoring

At the operational level, the operations engineers are concerned with ensuring the resources for the machine learning system are healthy. The engineers are responsible for acting when the resources are not healthy. They will also monitor the machine learning application across three categories: the system, the pipelines, and the costs.

#### The ML system performance

The idea is to be informed constantly about how the machine learning model performs in line with the entire application stack. Issues in this arena will impact the entire system. System performance metrics that would provide insight into the model performance include:

- Memory use
- Latency
- CPU/GPU use

#### The pipelines

Two crucial pipelines should be monitored: the data pipeline and the model pipeline. Failure to monitor the data pipeline may raise data quality issues that cause the system to break. Regarding the model, you want to track and monitor the factors that may lead to the model failing in production, such as the model dependencies.

#### Costs

From data storage to model training and more, there are financial costs involved in machine learning. While machine learning systems can generate lots of value for a business, it is also possible for leveraging machine learning to become excruciatingly expensive. Constantly monitoring how much your machine learning application costs your organization is a responsible step to ensuring costs are maintained.

For example, you can set budgets using a cloud vendor such as AWS or GCP since their services track your bills and spending. The cloud provider will send alerts to inform the team when budgets are maxed.

If you are hosting the machine learning application on-premises, monitoring the system usage and cost could provide greater insight into what component of the application is the most costly and whether or not you can make certain compromises to cut costs.

## Tools for monitoring machine learning models

- Prometheus and Grafana
- Evidently AI
- Amazon SageMaker Model Monitor
