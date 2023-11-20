# Questions

## Data Science

1. What are the assumptions of a linear regression?
2. What is the difference between factor analysis and cluster analysis?
3. What is an iterator generator?
4. Write down a SQL script to return data from two tables.
5. Draw graphs relevant to pay-per-click adverts and ticket purchases.
6. How would you explain Random Forest to a non-technical person
7. How can you prove an improvement you introduced to a model is actually working?
8. What is root cause analysis?
9. Explain K-means
10. What kind of RDBMS software do you have experience with? What about non-relational databases?
11. Supervised learning vs unsupervised learning
12. What is overfitting and how to fix it?
13. How would you start cleaning a big dataset?
14. Give examples where a false negative is more important than a false positive, and vice versa
15. State some biases that you are likely to encounter when cleaning a database
16. What is a logistic regression?

## Data analyst

<https://www.toptal.com/product-managers/business-analyst/interview-questions>

<https://www.toptal.com/machine-learning/interview-questions>

[**https://www.toptal.com/data-analysis/interview-questions**](https://www.toptal.com/data-analysis/interview-questions)

### 1. Of which steps is the data analysis process typically composed?

1. **Finding a relevant business problem to solve:** Often neglected, this is the most important step of the process, since generating business value is the end goal of any data analyst. Having a clear objective and restricting the data space to be explored is paramount to avoiding wasting resources. Since it requires deep knowledge of the problem domain, this step may be executed by a domain expert other than the data analyst.

2. **Data extraction:** The next step is to collect data for analysis. It could be as simple as loading a CSV file, but more often than not it involves gathering data from multiple sources and formats.

3. **Data cleansing:** After gathering the data, the dataset needs to be prepared for processing. Likely the most time-consuming step, data cleansing can include handling missing fields, corrupt data, outliers, and duplicate entries.

4. **Data exploration:** This is often what comes to mind when thinking of data analysis. Data exploration involves generating statistics, features, and visualizations from the data to better understand its underlying patterns. This then leads to insights that might generate business value.

5. **Data modeling and model validation (optional):** Training a statistical or [machine learning](https://www.toptal.com/machine-learning/interview-questions)model is not always required, as a data analyst usually generates value through insights found in the data exploration step, but it may uncover additional information. Easily interpretable models, like linear or tree-based models, and clustering techniques often expose patterns that would be otherwise difficult to detect with data visualization alone.

6. **Storytelling:** This last step encompasses every bit of information uncovered previously to finally present a solution to - or at least a path to continue exploring - the business problem proposed in the first step. It's all about being able to clearly communicate findings to stakeholders and convincing them to take a course of action that will lead to creating business value.

### 2. What techniques can be used to handle missing data?

- Dropping incomplete rows: Simplest of all, it can be used if the amount of missing data is small and seemingly random.
- Dropping variables: This can be used if the proportion of missing data in a feature is too big and the feature is of little significance to the analysis. In general, it should be avoided, as it usually throws away too much information.
- Considering "not available" (NA) to be a value: Sometimes missing information is information in itself. Depending on the problem domain, missing values are sometimes non-random: Instead, they're a byproduct of some underlying pattern.
- Value imputation: This is the process of estimating the value of a missing field given other information from the sample. There are various viable kinds of imputation. Some examples are mean/mode/median imputation, KNN, regression models, and multiple imputations.

### 3. What is data validation?

In any data-oriented process the "garbage in, garbage out" issue is always a possibility. To mitigate it, we make use of data validation, a process composed of a set of rules to ensure that the data reaches a minimum quality standard. A couple of examples of validation checks are:

- Data type validation:Checks whether the data is of the expected type (eg. integer, string) and conforms to the expected format.
- Range and constraint validation:Checks if the observed values fall within a valid range. For example, temperature values must be above absolute zero (or likely a higher minimum depending on the operating range of the equipment being used to record them.)

### 4. How can we visualize more than three dimensions of data in a single chart?

Usually, data is visually represented through a chart using locations in the image (height, width, and depth). Going beyond three dimensions, we need to make use of other visual cues to add more information. Some of the most common are:

- **Color:** A visually appealing and intuitive way to depict both continuous and categorical data.
- **Size:** Marker size is also used to represent continuous data. Could be applied for categorical data as well, but since size differences are more difficult to detect than color, it is not the most appropriate choice for this type of data.
- **Shape:** Lastly, we have shapes, which are an effective way to represent different classes.

Another possibility is to make ananimatedchart, which is quite useful to depict changes through time

### 5. What is the difference between correlation and causation? How can we infer the latter?

Correlation is a statistic that measures the strength and direction of the associations between two or more variables.

Causation, on the other hand, is a relationship that describes cause and effect.

"Correlation does not imply causation" is a famous quote that warns us about the dangers of the very common practice of looking at a strong correlation and assuming causality. A strong correlation may manifest without causation in the following cases:

- **Lurking variable:** An unobserved variable that affects both variables of interest, causing them to exhibit a strong correlation, even when there is no direct relationship between them.
- **Confounding variable:** A confounding variable is one that cannot be isolated from one or more of the variables of interest. Therefore we cannot explain if the result observed is caused by the variation of the variable of interest or of the confounding variable.
- **Spurious correlation:** Sometimes due to coincidence, variables can be correlated even though there is no reasonably logical relationship.

Causation is tricky to be inferred. The most usual solution is to set up a randomized experiment, where the variable that's a candidate to be the cause is isolated and tested. Unfortunately, in many fields running such an experiment is impractical or not viable, so using logic and domain knowledge becomes crucial to formulating reasonable conclusions.

### 6. What are the differences between linear and logistic regression?

Linear regression is a statistical model that, given a set of input features, attempts to fit the best possible straight line (or hyperplane, in the general case) between the independent and the dependent variable. Since its output is continuous and its cost function measures the distance from the observed to the predicted values, it is an appropriate choice to solve regression problems (e.g. to predict sales numbers).

Logistic regression, on the other hand, outputs a probability, which by definition is a bounded value between zero and one, due to the sigmoid activation function. Therefore, it is most appropriate to solve classification problems (e.g. to predict whether a given transaction is fraudulent or not).

### 7. What is model extrapolation? What are its pitfalls?

Model extrapolation is defined as estimating beyond a previously observed data range to establish the relationships between variables.

The main issue with extrapolation is that it is, at best, an educated guess. Since it has no data to support it, it's generally not possible to claim that the observed relationships still hold. A relationship that looks linear in a given range might actually be non-linear when outside of range.

### 8. What is data leakage in the context of data analysis? What problems may arise from it? Which strategies can be applied to avoid it?

Data leakage is the process of training a statistical model with information that would be actually unavailable when using the model to make predictions.

Data leakage makes the results during model training and validation much better than what is observed when the model is deployed, generating too optimistic estimates, possibly leading to an entirely invalid predictive model.

There is no single recipe to eliminate data leakage, but some practices are helpful to avoid them:

- **Don't use future data to make predictions of the past.** Although obvious, it's a very common mistake when validating models, especially when using cross-validation. When training on time-series data, always make sure to use an appropriate validation strategy.
- **Prepare the data within cross-validation folds.** Another common mistake is to make data preparations, like normalization or outlier removal on the whole dataset, prior to splitting the dataset to validate the model, which is a leak of information.
- **Investigate IDs.** It's easy to dismiss IDs as randomly generated values, but sometimes they encode information about the target variable. If they are leaky, it's best to remove them from any sort of model.

### 9. What are precision and recall? In which cases are they used?

Precision and recall are metrics that measure classification performance, each using its own criteria, given by the formulas below:

Precision=TP / TP+FP

Recall=TP / TP+FN

Where:

TP = True Positive
FP = False Positive
FN = False Negative

In other words, precision is the ratio of correctly classified positive cases over all cases predicted as positive, while recall is the ratio of correctly classified positive cases over all positive cases.

Precision is an appropriate measure when the cost of a false positive is high (e.g. email spam classification), while recall is appropriate when the cost of a false negative is high (e.g. fraud detection).

Both are also frequently used together in the form of the F1-score, which is defined as:

F1=2 ∗ ( (Precision∗Recall) / (Precision+Recall) )

The F1-score balances both precision and recall, so it's a good measure of classification performance for highly imbalanced datasets.

## SQL

- Write a SQL query to **Find the name of the student getting second highest marks in his class**

SELECT name, MAX(marks) AS max_marks
FROM student
WHERE marks < (SELECT MAX(marks)
FROM student) LIMIT 1;

SELECT marksFROM (SELECT marksFROM student ORDER BYmarksDESC LIMIT 2) AS Std ORDER BYmarksLIMIT 1;

select max(marks) from student where marks < select max(marks) from student;

- Difference between procedures and functions in mysql
- What are different types of indexes in relational database
  - Clustered
  - Un clustered
- What is materialized view

## Big Data

- How do you create data archival service (Data governance, data flow)
- Difference between ORC and Parquet
- Kafka
  - Different components in Kafka
  - How to add a new kafka broker in an existing cluster
  - What is the role of Leader
  - Topic log compaction
  - What are the guarantees
- Database - Indexing
- Row-based vs column based file formats (examples of each)
- Data modeling - ML/AI (L1 & L2 regularization)
- CAP Theorem
  - Consistency levels
- Storing 4 billion people newsletter preference (if they want it or not?)
  - Amount of memory/space required
  - Time complexity of getting the data for a specific customer
  - Ans - BitMap
  - Optimization - Compressed BitMap for sparse data

## Other questions

- SQL - Find the name of the student getting second highest marks in his class
- Joins
- Normalization
- Index
- Materialized views
- Confusion matrix
- Precision & recall
- Powerbi - dimensions and fact tables
