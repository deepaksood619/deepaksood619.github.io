# Model Validation / Monitoring

1. **Poor model performance on unseen data**

If the model has not been validated properly then it would not be able to perform well on the unseen data which is the ultimate purpose of a predictive model. There are various model validation techniques, the most important categories would be In time validation and Out of time validation.

A part of the development dataset is kept aside and the model is then tested on it to see how it is performing on the unseen data from the similar time segment using which it was built in the first place**(i.e. In Time validation).**

A dataset is pulled from a different time segment and the model is tested on this unseen chunk of data too to judge its response to unseen data**(i.e. Out of time validation).**

These validations ensure that the developers can be confident of the model performance.

2. **Questionable robustness**

As explained in the above point, if a model has been validated properly, the developers have confidence in its performance. A model which has completed the validation process is deemed fit to act robustly in the future scenarios. There are **sensitivity analysis tests** incorporated in the validation processes which ensure that by varying the independent model variables to a certain degree to account for economic ups and downs, the dependent variable is not affected to an extreme degree which might render the model unusable.

3. **Failure to adapt to stress scenarios**

In extreme scenarios like recession or this current pandemic situation, the predictive models have difficulty in adapting and predicting still-good-enough predictions despite the volatility. But if the model validation process included the stress testing measures as well then it helps in putting a version of a model into production that's already been well tested for stress scenarios and will not suddenly fail when any calamity strikes.

## Model Validation VS Model Monitoring

## The Time period

Model validation is carried out in tandem with the model development process. Many times, it's an iterative process. If a model fails to perform in the validation stage, it goes back to the development stage. This is immediately after the model development. It's a one-time process.

Model Monitoring comes into effect after a model has gone into the PROD (production) stage. It's an ongoing process. A specific monitoring frequency is decided for every model and it's evaluated then to make sure that the model is performing up to the mark and its results are reliable. Also, we check that the population distribution should not be significantly different as compared to the development time period to ensure that the model is still relevant and okay to be used.

## The Purpose

The purpose of model validation is to check the accuracy and performance of the model basis on the past data for which we already have actuals.

Once the model is deployed, the model monitoring processes ensure the relevance of the model by judging the population distribution and also recording back-dated error % comparisons between the model predictions and actuals data as soon as that starts coming in to make sure that the model performance is in the acceptable range.

## The Metrics

This is the most important distinction between the two stages. In the model validation stage, we focus majorly on the statistical metrics that can decode the model performance and response for us. Whereas in the model monitoring stage, we focus both on the statistical as well the business metrics to derive our conclusion of being confident in the relevance and the reliability of a particular model.

<https://towardsdatascience.com/why-is-model-validation-so-darn-important-and-how-is-it-different-from-model-monitoring-61dc7565b0c>
