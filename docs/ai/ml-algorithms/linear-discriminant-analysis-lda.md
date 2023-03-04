# Linear Discriminant Analysis (LDA)

Hi, Logistic Regression is a classification algorithm traditionally limited to only two-class classification problems.

If you have more than two classes then the Linear Discriminant Analysis algorithm is the preferred linear classification technique.

The representation of LDA is pretty straight forward. It consists of statistical properties of your data, calculated for each class. For a single input variable this includes:

1. The mean value for each class.

2. The variance calculated across all classes.

Predictions are made by calculating a discriminate value for each class and making a prediction for the class with the largest value.

The technique assumes that the data has a Gaussian distribution (bell curve), so it is a good idea to remove outliers from your data before hand.

It's a simple and powerful method for classification predictive modeling problems.
