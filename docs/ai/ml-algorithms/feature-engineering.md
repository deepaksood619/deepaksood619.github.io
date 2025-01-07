# Feature Engineering

## Intro

- Scale to large datasets
- Find good features
    - Synthetic features
- Preprocess with Cloud MLE
- Hyperparameter tuning

## Tools

[GitHub - feast-dev/feast: The Open Source Feature Store for Machine Learning](https://github.com/feast-dev/feast)

Feast (**Fea**ture **St**ore) is an open source feature store for machine learning. Feast is the fastest path to manage existing infrastructure to productionize analytic data for model training and online inference.

Feast allows ML platform teams to:

- **Make features consistently available for training and serving** by managing an _offline store_ (to process historical data for scale-out batch scoring or model training), a low-latency _online store_ (to power real-time prediction)_,_ and a battle-tested _feature server_ (to serve pre-computed features online).
- **Avoid data leakage** by generating point-in-time correct feature sets so data scientists can focus on feature engineering rather than debugging error-prone dataset joining logic. This ensure that future feature values do not leak to models during training.
- **Decouple ML from data infrastructure** by providing a single data access layer that abstracts feature storage from feature retrieval, ensuring models remain portable as you move from training models to serving models, from batch models to realtime models, and from one data infra system to another.

## Good vs Bad features

- **Good Feature**
    - Be related to objective
    - Be known at prediction-time
    - Be numeric with meaningful magnitude
        - Numeric features
        - Able to do mathematical operations
    - Have enough examples
    - Bring human insight to problem

![image](../../media/Feature-Engineering-image1.jpg)

![image](../../media/Feature-Engineering-image2.jpg)

- Sparse Columns
- If don't know the list of keys, Create a Vocabulary (This is what preprocessing is)

![image](../../media/Feature-Engineering-image3.jpg)

- The vocabulary and the mapping of the vocabulary needs to be identical at prediction time.

![image](../../media/Feature-Engineering-image4.jpg)

![image](../../media/Feature-Engineering-image5.jpg)

PS - Take care of cases where user doesn't provide a value, i.e. missing values.

![image](../../media/Feature-Engineering-image6.jpg)

ML - lot of data, keep outliers and build model for them

Statistics - I've got all the data I'll ever get, throw away outliers

![image](../../media/Feature-Engineering-image7.jpg)

![image](../../media/Feature-Engineering-image8.jpg)

![image](../../media/Feature-Engineering-image9.jpg)

## Preprocessing and Feature Creation

![image](../../media/Feature-Engineering-image10.jpg)

- Apache Beam
- BigQuery
- TensorFlow

![image](../../media/Feature-Engineering-image11.jpg)

![image](../../media/Feature-Engineering-image12.jpg)

![image](../../media/Feature-Engineering-image13.jpg)

![image](../../media/Feature-Engineering-image14.jpg)

![image](../../media/Feature-Engineering-image15.jpg)

![image](../../media/Feature-Engineering-image16.jpg)

![image](../../media/Feature-Engineering-image17.jpg)

![image](../../media/Feature-Engineering-image18.jpg)

## Apache Beam and Cloud Dataflow

![image](../../media/Feature-Engineering-image19.jpg)

![image](../../media/Feature-Engineering-image20.jpg)

![image](../../media/Feature-Engineering-image21.jpg)

![image](../../media/Feature-Engineering-image22.jpg)

![image](../../media/Feature-Engineering-image23.jpg)

![image](../../media/Feature-Engineering-image24.jpg)

![image](../../media/Feature-Engineering-image25.jpg)

![image](../../media/Feature-Engineering-image26.jpg)

![image](../../media/Feature-Engineering-image27.jpg)

![image](../../media/Feature-Engineering-image28.jpg)

![image](../../media/Feature-Engineering-image29.jpg)

![image](../../media/Feature-Engineering-image30.jpg)

## Preprocessing with Cloud Dataprep

![image](../../media/Feature-Engineering-image31.jpg)

![image](../../media/Feature-Engineering-image32.jpg)

![image](../../media/Feature-Engineering-image33.jpg)

![image](../../media/Feature-Engineering-image34.jpg)

- Ingesting, Transforming and Analyzing Taxi Data

## Feature Crosses

Way to bring non-linear inputs to a linear learner

![image](../../media/Feature-Engineering-image35.jpg)

![image](../../media/Feature-Engineering-image36.jpg)

![image](../../media/Feature-Engineering-image37.jpg)

![image](../../media/Feature-Engineering-image38.jpg)

A feature cross memorizes the input space

![image](../../media/Feature-Engineering-image39.jpg)

![image](../../media/Feature-Engineering-image40.jpg)

![image](../../media/Feature-Engineering-image41.jpg)

![image](../../media/Feature-Engineering-image42.jpg)

Beware - Feature cross are a temptation for a model to overfit

![image](../../media/Feature-Engineering-image43.jpg)

![image](../../media/Feature-Engineering-image44.jpg)

![image](../../media/Feature-Engineering-image45.jpg)

## Implementing Feature Crosses

![image](../../media/Feature-Engineering-image46.jpg)

![image](../../media/Feature-Engineering-image47.jpg)

![image](../../media/Feature-Engineering-image48.jpg)

![image](../../media/Feature-Engineering-image49.jpg)

![image](../../media/Feature-Engineering-image50.jpg)

![image](../../media/Feature-Engineering-image51.jpg)

![image](../../media/Feature-Engineering-image52.jpg)

![image](../../media/Feature-Engineering-image53.jpg)

![image](../../media/Feature-Engineering-image54.jpg)

![image](../../media/Feature-Engineering-image55.jpg)

![image](../../media/Feature-Engineering-image56.jpg)

![image](../../media/Feature-Engineering-image57.jpg)

![image](../../media/Feature-Engineering-image58.jpg)

![image](../../media/Feature-Engineering-image59.jpg)

![image](../../media/Feature-Engineering-image60.jpg)

By Feature Crossing the two grids.

Embeddings allow to generalize two grid cells, like all the grid cells that are on the ocean front should have a similar value.

![image](../../media/Feature-Engineering-image61.jpg)

## Feature Creation in TensorFlow

![image](../../media/Feature-Engineering-image62.jpg)

Data Type - Python Dictionary

Ex - Distance between house and metro station (public transport) is a key for house prices

![image](../../media/Feature-Engineering-image63.jpg)

Feature engineering can be done in 3 places

- Training
- Evaluation
- Serving

![image](../../media/Feature-Engineering-image64.jpg)

## Using DataFlow

tf.transform allows users to define preprocessing pipelines and run these using large scale data processing frameworks, while also exporting the pipeline in a way that can be run as part of a TensorFlow graph

![image](../../media/Feature-Engineering-image65.jpg)

![image](../../media/Feature-Engineering-image66.jpg)

![image](../../media/Feature-Engineering-image67.jpg)

- Feature cross is only useful when we have a large dataset since it's memorization so for each bucket there must be enough samples.

## TensorFlow Transform

![image](../../media/Feature-Engineering-image68.jpg)

![image](../../media/Feature-Engineering-image69.jpg)

![image](../../media/Feature-Engineering-image70.jpg)

![image](../../media/Feature-Engineering-image71.jpg)

## Analysis Phase

![image](../../media/Feature-Engineering-image72.jpg)

![image](../../media/Feature-Engineering-image73.jpg)

![image](../../media/Feature-Engineering-image74.jpg)

## Transform Phase

![image](../../media/Feature-Engineering-image75.jpg)

![image](../../media/Feature-Engineering-image76.jpg)

![image](../../media/Feature-Engineering-image77.jpg)

![image](../../media/Feature-Engineering-image78.jpg)

![image](../../media/Feature-Engineering-image79.jpg)

## Summary

- Convert raw data into features
- Preprocess data in such a way that the preprocessing is also done during serving
- Choose among the various feature columns in TensorFlow
- Memorize large datasets using feature crosses and simple models
- Simplify preprocessing pipelines using TensorFlow Transform

## Links

[Feature Engineering A-Z | Preface](https://feaz-book.com/)
