# Nonparametric Statistics

Nonparametric statisticsis the branch of [statistics](https://en.wikipedia.org/wiki/Statistics) that is not based solely on [parametrized](https://en.wikipedia.org/wiki/Statistical_parameter) families of [probability distributions](https://en.wikipedia.org/wiki/Probability_distribution)(common examples of parameters are the mean and variance). Nonparametric statistics is based on either being distribution-free or having a specified distribution but with the distribution's parameters unspecified. Nonparametric statistics includes both [descriptive statistics](https://en.wikipedia.org/wiki/Descriptive_statistics) and [statistical inference](https://en.wikipedia.org/wiki/Statistical_inference).

## Non-parametric models

Non-parametric modelsdiffer from [parametric](https://en.wikipedia.org/wiki/Parametric_statistics) models in that the model structure is not specifieda prioribut is instead determined from data. The termnon-parametricis not meant to imply that such models completely lack parameters but that the number and nature of the parameters are flexible and not fixed in advance.

- A [histogram](https://en.wikipedia.org/wiki/Histogram) is a simple nonparametric estimate of a probability distribution.
- **[Kernel density estimation](https://en.wikipedia.org/wiki/Kernel_density_estimation)(KDE)** provides better estimates of the density than histograms.

In [statistics](https://en.wikipedia.org/wiki/Statistics), kernel density estimation(KDE) is a [non-parametric](https://en.wikipedia.org/wiki/Non-parametric_statistics) way to [estimate](https://en.wikipedia.org/wiki/Density_estimation) the [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) of a [random variable](https://en.wikipedia.org/wiki/Random_variable). Kernel density estimation is a fundamental data smoothing problem where inferences about the [population](https://en.wikipedia.org/wiki/Statistical_population) are made, based on a finite data [sample](https://en.wikipedia.org/wiki/Statistical_sample). In some fields such as [signal processing](https://en.wikipedia.org/wiki/Signal_processing) and [econometrics](https://en.wikipedia.org/wiki/Econometrics) it is also termed the **Parzen--Rosenblatt window** method, after [Emanuel Parzen](https://en.wikipedia.org/wiki/Emanuel_Parzen) and [Murray Rosenblatt](https://en.wikipedia.org/wiki/Murray_Rosenblatt), who are usually credited with independently creating it in its current form.One of the famous applications of kernel density estimation is in estimating the class-conditional marginal densities of data when using a [naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier), which can improve its prediction accuracy.- [Nonparametric regression](https://en.wikipedia.org/wiki/Nonparametric_regression) and [semiparametric regression](https://en.wikipedia.org/wiki/Semiparametric_regression) methods have been developed based on [kernels](https://en.wikipedia.org/wiki/Kernel_(statistics)), [splines](https://en.wikipedia.org/wiki/Spline_(mathematics)), and [wavelets](https://en.wikipedia.org/wiki/Wavelet).

- [Data envelopment analysis](https://en.wikipedia.org/wiki/Data_envelopment_analysis) provides efficiency coefficients similar to those obtained by [multivariate analysis](https://en.wikipedia.org/wiki/Multivariate_analysis) without any distributional assumption.
- [KNNs](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) classify the unseen instance based on the K points in the training set which are nearest to it.
- A [support vector machine](https://en.wikipedia.org/wiki/Support_vector_machine)(with a Gaussian kernel) is a nonparametric large-margin classifier.
- [Method of moments (statistics)](https://en.wikipedia.org/wiki/Method_of_moments_(statistics)) with polynomial probability distributions.

## Methods

Non-parametric(ordistribution-free)inferential statistical methodsare mathematical procedures for statistical hypothesis testing which, unlike [parametric statistics](https://en.wikipedia.org/wiki/Parametric_statistics), make no assumptions about the [probability distributions](https://en.wikipedia.org/wiki/Probability_distribution) of the variables being assessed. The most frequently used tests include

- [Analysis of similarities](https://en.wikipedia.org/wiki/Analysis_of_similarities)
- [Anderson--Darling test](https://en.wikipedia.org/wiki/Anderson%E2%80%93Darling_test): tests whether a sample is drawn from a given distribution
- [Statistical bootstrap methods](https://en.wikipedia.org/wiki/Bootstrapping_(statistics)): estimates the accuracy/sampling distribution of a statistic
- [Cochran's Q](https://en.wikipedia.org/wiki/Cochran%27s_Q_test): tests whetherktreatments in randomized block designs with 0/1 outcomes have identical effects
- [Cohen's kappa](https://en.wikipedia.org/wiki/Cohen%27s_kappa): measures inter-rater agreement for categorical items
- [Friedman two-way analysis of variance](https://en.wikipedia.org/wiki/Friedman_test) by ranks: tests whetherktreatments in randomized block designs have identical effects
- [Kaplan--Meier](https://en.wikipedia.org/wiki/Kaplan%E2%80%93Meier_estimator): estimates the survival function from lifetime data, modeling censoring
- [Kendall's tau](https://en.wikipedia.org/wiki/Kendall_tau_rank_correlation_coefficient): measures statistical dependence between two variables
- [Kendall's W](https://en.wikipedia.org/wiki/Kendall%27s_W): a measure between 0 and 1 of inter-rater agreement
- [Kolmogorov--Smirnov test](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test): tests whether a sample is drawn from a given distribution, or whether two samples are drawn from the same distribution
- [Kruskal--Wallis one-way analysis of variance](https://en.wikipedia.org/wiki/Kruskal%E2%80%93Wallis_one-way_analysis_of_variance) by ranks: tests whether >2 independent samples are drawn from the same distribution
- [Kuiper's test](https://en.wikipedia.org/wiki/Kuiper%27s_test): tests whether a sample is drawn from a given distribution, sensitive to cyclic variations such as day of the week
- [Logrank test](https://en.wikipedia.org/wiki/Logrank_test): compares survival distributions of two right-skewed, censored samples
- [Mann--Whitney U](https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U) or Wilcoxon rank sum test: tests whether two samples are drawn from the same distribution, as compared to a given alternative hypothesis.
- [McNemar's test](https://en.wikipedia.org/wiki/McNemar%27s_test): tests whether, in 2 × 2 contingency tables with a dichotomous trait and matched pairs of subjects, row and column marginal frequencies are equal
- [Median test](https://en.wikipedia.org/wiki/Median_test): tests whether two samples are drawn from distributions with equal medians
- [Pitman's permutation test](https://en.wikipedia.org/wiki/Pitman_permutation_test): a statistical significance test that yields exactpvalues by examining all possible rearrangements of labels
- [Rank products](https://en.wikipedia.org/wiki/Rank_product): detects differentially expressed genes in replicated microarray experiments
- [Siegel--Tukey test](https://en.wikipedia.org/wiki/Siegel%E2%80%93Tukey_test): tests for differences in scale between two groups
- [Sign test](https://en.wikipedia.org/wiki/Sign_test): tests whether matched pair samples are drawn from distributions with equal medians
- [Spearman's rank correlation coefficient](https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient): measures statistical dependence between two variables using a monotonic function
- [Squared ranks test](https://en.wikipedia.org/wiki/Squared_ranks_test): tests equality of variances in two or more samples
- [Tukey--Duckworth test](https://en.wikipedia.org/wiki/Tukey%E2%80%93Duckworth_test): tests equality of two distributions by using ranks
- [Wald--Wolfowitz runs test](https://en.wikipedia.org/wiki/Wald%E2%80%93Wolfowitz_runs_test): tests whether the elements of a sequence are mutually independent/random
- [Wilcoxon signed-rank test](https://en.wikipedia.org/wiki/Wilcoxon_signed-rank_test): tests whether matched pair samples are drawn from populations with different mean ranks

<https://en.wikipedia.org/wiki/Nonparametric_statistics>
