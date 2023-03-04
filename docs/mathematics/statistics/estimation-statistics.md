# Estimation Statistics

Estimation statistics may be used as an alternative to statistical hypothesis tests. Statistical hypothesis tests can be used to indicate whether the difference between two samples is due to random chance, but cannot comment on the size of the difference. A group of methods referred to as new statistics are seeing increased use instead of or in addition to p-values in order to quantify the magnitude of effects and the amount of uncertainty for estimated values. This group of statistical methods is referred to as estimation statistics. Estimation statistics is a term to describe three main classes of methods. The three main classes of methods include:

1. Effect Size. Methods for quantifying the size of an effect given a treatment or intervention.

2. Interval Estimation. Methods for quantifying the amount of uncertainty in a value.

3. Meta-Analysis. Methods for quantifying the findings across multiple similar studies.
Of the three, perhaps the most useful methods in applied machine learning are interval estimation. There are three main types of intervals. They are:

1. Tolerance Interval: The bounds or coverage of a proportion of a distribution with a specific level of confidence.

2. Confidence Interval: The bounds on the estimate of a population parameter.

3. Prediction Interval: The bounds on a single observation.
A simple way to calculate a confidence interval for a classification algorithm is to calculate the binomial proportion confidence interval, which can provide an interval around a model's estimated accuracy or error. This can be implemented in Python using the confint() Statsmodels function. The function takes the count of successes (or failures), the total number of trials, and the significance level as arguments and returns the lower and upper bound of the confidence interval. The example below demonstrates this function in a hypothetical case where a model made 88 correct predictions out of a dataset with 100 instances and we are interested in the 95% confidence interval (provided to the function as a significance of 0.05).

## calculate the confidence interval

```python
from statsmodels.stats.proportion import proportion_confint
```

## calculate the interval

```python
lower, upper = proportion_confint(88, 100, 0.05) print('lower=%.3f, upper=%.3f' % (lower, upper))
```
