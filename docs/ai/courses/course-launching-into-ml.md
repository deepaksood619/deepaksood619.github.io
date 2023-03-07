# Course - Launching into ML

## Objectives

1. Identify why deep learning is currently popular

2. Optimize and evaluate models using loss functions and performance metrics

3. Mitigate common problems that arise in Machine Learning

   - Lack of generalization

4. Create repeatable training, evaluation and test datasets

5. Optimization - Set up a supervised learning problem and find solution using gradient descent

6. Performance metrics and how to choose between different models

7. Intuitive understanding of neural networks

8. Tensor flow playground

9. Generalization and sampling

## Prediction Problem

- **Supervised Learning**
  - Classification problem

Classification models usually use cross entropy as their loss function (the penalty for cross entropy is almost linear and the predicted probability is close to actual label, but as it gets further away it becomes exponential, when it gets close to predicting the opposite class of the label)

- Regression problem

Regression models usually use mean squared error as their loss function (Quadratic penalty for mean squared error, so it is essentially trying to minimize the euclidean distance between the actual label and the predicted label)

Description Problem

- Unsupervised learning

<https://www.coursera.org/learn/launching-machine-learning>

## Practical ML

In this module, we will introduce some of the main types of machine learning and review the history of ML leading up to the state of the art so that you can accelerate your growth as an ML practitioner.

1. [Video:Introduction](https://www.coursera.org/learn/launching-machine-learning/lecture/j4Rbd/introduction)

2. Video:Supervised Learning

3. Video:Regression and Classification

4. Video:Short History of ML: Linear Regression

5. Video:Short History of ML: Perceptron

6. Video:Short History of ML: Neural Networks

7. Video:Short History of ML: Decision Trees

8. Video:Short History of ML: Kernel Methods

9. Video:Short History of ML: Random Forests

10. Video:Short History of ML: Modern Neural Networks

11. Discussion Prompt:Modern Neural Networks

## Optimization

In this module we will walk you through how to optimize your ML models.

1. [Video:Introduction](https://www.coursera.org/learn/launching-machine-learning/lecture/ebCZS/introduction)

2. Video:Defining ML Models

3. Video:Introducing the Natality Dataset

4. Video:Introducing Loss Functions

5. Video:Gradient Descent

6. Video:Troubleshooting a Loss Curve

7. Video:ML Model Pitfalls

8. Video:Lab: Introducing the TensorFlow Playground

9. Video:Lab: TensorFlow Playground - Advanced

10. Video:Lab: Practicing with Neural Networks

11. Video:Loss Curve Troubleshooting

12. Video:Performance Metrics

## Generalization and Sampling

Now it's time to answer a rather weird question: when is the most accurate ML model not the right one to pick? As we hinted at in the last module on Optimization -- simply because a model has a loss metric of 0 for your training dataset does not mean it will perform well on new data in the real world.

<https://github.com/GoogleCloudPlatform/training-data-analyst>
