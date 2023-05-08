# ML Process

ML Process

1. Acquire data
2. Prepare data
    - Explore
        - Describe
        - Visualize
    - Pre-process
        - Data cleaning
        - Feature selection
        - Feature transformation

3. Analyze data
4. Report/Communicate results
5. Act/Apply the results

- It should be kept in mind that all of these steps need to be carried out with a clear purpose in mind. That is, the problem or opportunity that is being addressed must be defined with clearly stated goals and objectives
- For example, the purpose of a project may be to study customer purchasing behavior to come up with a more effective marketing strategy in order to increase sales revenue. The purpose behind the project will drive the machine learning process.

## Iterative Process

- Machine Learning process is a very iterative one. Findings from one step may require a previous step to be repeated with new information
- For example, during the prepare step, we may find some data quality issues that may require us to go back to the acquire step to address some issues with data collection or to get additional data that we didn't include in the first go around

## Data Cleaning

- A very important part of data preparation is to clean the data to address quality issues. Real world data is nothing. There are many examples of quality issues with data from real applications including missing values, such as income in a survey, duplicate data, such as two different records for the same customer with different addresses
- Inconsistent or invalid data, such as a six digit zip code. Noise in the collection of data that distorts the true values. Outliers, such as a number much larger than 100 for someone's age. It is essential to detech and address these issues that can negatively affect the quality of the data

## Step 1: Feature Selection

- Feature selection refers to choosing the set of features to use that is appropriate for the application. Feature selection can involve removing redundant or irrelant features, combining features, or creating new features
- During the exploring data step, you may have discovered that two features are very correlated. In that case, one of these features can be removed without negatively effecting the analysis results
- For example, the purchase price of a product and the amount of sales tax pain are very likely to be correlated. Eliminating the sales tax amount then will be beneficial. Removing redundant or irrelevant features will make the subsequent analysis simpler
- You may also want to combine features or create new ones. For example, adding the applicants education level as a feature to a loan approval application would make sense. There are also algorithms to automatically determine the most relevant features based on various mathematical properties

## Step 2: Feature Transformation

- Feature transformation maps the data from one format to another. Various transformation operations exist. For example, scaling maps the data values to a specified range to prevent any one feature from dominating the analysis results
- Filtering or aggregation can be used to reduce noise and variability in the data
- Dimensionality reduction maps the data to a smaller subset of dimensions to simplify the subsequent analysis. We will discuss techniques to prepare data in more detail later in this course

## Step 3: Analyze

- After preparing the data to address data quality issues and preprocess it to get it in the appropriate format, the next step in the machine learning process is to analyze the data. The goals of the staff are to build a machine learning model, to analyze the data and to evaluate the results that you get from the model
- The analyze steps starts with this determining the type of problem you have. You begin by selecting appropriate machine learning techniques to analyze the data
- Then you construct the model using the data that you've prepared. Once the model is built, you will want to apply it to new data samples to evaluate how well the model performs. Thus data analysis involves selecting the appropriate technique for your problem, building the model, then evaluating the results

## Step-4: Report

- The next step in the machine learning process is reporting results from your analysis. In reporting your results, it is important to communicate your insights and make a case for what actions should follow
- In reporting your results, you will want to think about what to present, as well as how to present. In deciding what to present, you should consider what the main results are, what insights were gained from your analysis, and what added value do these insights bring to the application
- Keep in mind that even negative results are valuable lessons learned, and suggest further avenues for additional analysis. Remember that all findings must be presented so that informs decisions can be made for next steps
- In deciding how to present, remember that visualization is an important tool in presenting your results
- Plots and summary statistics discussing the explore step can be used effectively here as well. You should also have tables with details from your analysis as backup, if someone wants to take a deeper dive into the results
- In summary, you want to report your findings by presenting your results and the value added with graphs using visualization tools

## Step-5: Act

- The final step in the machine loading process is to determine what action should be taken based on the insights gained
- What action should be taken based on the results of your analysis? Should you market certain products to a specific customer segment to increase sales? What inefficiency is can be removed from your process? What incentives would be effective in attracting new customers?
- Once a specific action has been determined, the next stp is to implement the action. Things to consider here include, how can the action be added to your application? How will end users be affected?
- Assessing the impact of the implemented action is then necessary to evaluate the benefits gained. The results of this assessment determine next steps, which could suggest additional analysis or further opportunities, which would begin another cycle of the machine learning process

## ML Lifecycle

Essential elements of the lifecycle are identifying and formulating -

- Problem Statement & Objective
- Dataset
- Feature Engineering
- Data Preprocessing
- Exploratory Data Analysis (Descriptive, Prescriptive, Shaping, Dataviz)
- Data Splitting
- Modelling
- Hyperparameter Tuning
- Results (Output)
- Feedback for improvements

[Data Engineering Vs Machine Learning Pipelines - What Is The Difference - YouTube](https://www.youtube.com/watch?v=g90ukIx1mhs&ab_channel=SeattleDataGuy)
