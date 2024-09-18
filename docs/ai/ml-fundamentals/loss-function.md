# Loss Function

In a Convolutional Neural Network (CNN), the **loss function** is a key component used to measure the difference between the predicted output of the network and the actual target labels (ground truth). It essentially quantifies how well or poorly the model is performing. The goal of training a CNN is to minimize this loss, meaning the model's predictions get closer to the actual targets.

## 1. Categorical Cross-Entropy Loss

- Used in classification tasks with multiple classes.
- Measures the difference between the predicted probability distribution and the true one-hot encoded label distribution.
- Commonly used in multi-class classification problems.

## 2. Binary Cross-Entropy Loss

- Used in binary classification tasks.
- Measures the error in binary predictions (e.g., cat vs. dog classification).

## 3. Mean Squared Error (MSE) Loss

- Used for regression tasks.
- Calculates the average of the squared differences between the predicted and actual values.

MSE is the average squared loss per example over the whole dataset. To calculate MSE, sum up all the squared losses for individual examples and then divide by the number of examples

`MSE=1N∑(x,y)∈D(y−prediction(x))2`

where:

- (x,y) is an example in which
- x is the set of features (for example, chirps/minute, age, gender) that the model uses to make predictions.
- y is the example's label (for example, temperature).
- prediction(x) is a function of the weights and bias in combination with the set of features x.
- D is a data set containing many labeled examples, which are (x,y) pairs.
- N is the number of examples in D.

Although MSE is commonly-used in machine learning, it is neither the only practical loss function nor the best loss function for all circumstances.

## 4. Hinge Loss

- Often used in support vector machines (SVMs) but can also be applied to CNNs in tasks where margin-based classification is required.

## Others

### Squared loss: a popular loss function

The linear regression models we'll examine here use a loss function called **squared loss** (also known as **L2loss**). The squared loss for a single example is as follows:

= the square of the difference between the label and the prediction
= (observation - prediction(x))2
= (y - y')2

## How It Works in CNN Training

During training, after each forward pass through the CNN (i.e., feeding input images and getting predictions), the loss function calculates the error. Then, backpropagation is used to adjust the weights of the network in such a way that the loss is minimized in future predictions. The optimization process typically uses algorithms like **Stochastic Gradient Descent (SGD)** or **Adam** to update the weights based on the loss.
