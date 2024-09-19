# Keras

Keras 3 is a multi-backend deep learning framework, with support for JAX, TensorFlow, and PyTorch. Effortlessly build and train models for computer vision, natural language processing, audio processing, timeseries forecasting, recommender systems, etc.

- **Accelerated model development**: Ship deep learning solutions faster thanks to the high-level UX of Keras and the availability of easy-to-debug runtimes like PyTorch or JAX eager execution.
- **State-of-the-art performance**: By picking the backend that is the fastest for your model architecture (often JAX!), leverage speedups ranging from 20% to 350% compared to other frameworks. [Benchmark here](https://keras.io/getting_started/benchmarks/).
- **Datacenter-scale training**: Scale confidently from your laptop to large clusters of GPUs or TPUs.

```bash
pip install keras
```

## Docs

### Optimizers

- [SGD](https://keras.io/api/optimizers/sgd/)
- [RMSprop](https://keras.io/api/optimizers/rmsprop/)
- [Adam](https://keras.io/api/optimizers/adam/)
- [AdamW](https://keras.io/api/optimizers/adamw/)
- [Adadelta](https://keras.io/api/optimizers/adadelta/)
- [Adagrad](https://keras.io/api/optimizers/adagrad/)
- [Adamax](https://keras.io/api/optimizers/adamax/)
- [Adafactor](https://keras.io/api/optimizers/adafactor/)
- [Nadam](https://keras.io/api/optimizers/Nadam/)
- [Ftrl](https://keras.io/api/optimizers/ftrl/)
- [Lion](https://keras.io/api/optimizers/lion/)
- [Loss Scale Optimizer](https://keras.io/api/optimizers/loss_scale_optimizer/)

[Optimizers](https://keras.io/api/optimizers/)

### Loss Functions

The purpose of loss functions is to compute the quantity that a model should seek to minimize during training.

Note that all losses are available both via a class handle and via a function handle. The class handles enable you to pass configuration arguments to the constructor (e.g. `loss_fn = CategoricalCrossentropy(from_logits=True)`), and they perform reduction by default when used in a standalone way (see details below).

#### [Probabilistic losses](https://keras.io/api/losses/probabilistic_losses/)

- [BinaryCrossentropy class](https://keras.io/api/losses/probabilistic_losses/#binarycrossentropy-class)
- [BinaryFocalCrossentropy class](https://keras.io/api/losses/probabilistic_losses/#binaryfocalcrossentropy-class)
- [CategoricalCrossentropy class](https://keras.io/api/losses/probabilistic_losses/#categoricalcrossentropy-class)
- [CategoricalFocalCrossentropy class](https://keras.io/api/losses/probabilistic_losses/#categoricalfocalcrossentropy-class)
- [SparseCategoricalCrossentropy class](https://keras.io/api/losses/probabilistic_losses/#sparsecategoricalcrossentropy-class)
- [Poisson class](https://keras.io/api/losses/probabilistic_losses/#poisson-class)
- [binary_crossentropy function](https://keras.io/api/losses/probabilistic_losses/#binary_crossentropy-function)
- [categorical_crossentropy function](https://keras.io/api/losses/probabilistic_losses/#categorical_crossentropy-function)
- [sparse_categorical_crossentropy function](https://keras.io/api/losses/probabilistic_losses/#sparse_categorical_crossentropy-function)
- [poisson function](https://keras.io/api/losses/probabilistic_losses/#poisson-function)
- [KLDivergence class](https://keras.io/api/losses/probabilistic_losses/#kldivergence-class)
- [kl_divergence function](https://keras.io/api/losses/probabilistic_losses/#kl_divergence-function)
- [CTC class](https://keras.io/api/losses/probabilistic_losses/#ctc-class)

#### [Regression losses](https://keras.io/api/losses/regression_losses/)

- [MeanSquaredError class](https://keras.io/api/losses/regression_losses/#meansquarederror-class)
- [MeanAbsoluteError class](https://keras.io/api/losses/regression_losses/#meanabsoluteerror-class)
- [MeanAbsolutePercentageError class](https://keras.io/api/losses/regression_losses/#meanabsolutepercentageerror-class)
- [MeanSquaredLogarithmicError class](https://keras.io/api/losses/regression_losses/#meansquaredlogarithmicerror-class)
- [CosineSimilarity class](https://keras.io/api/losses/regression_losses/#cosinesimilarity-class)
- [mean_squared_error function](https://keras.io/api/losses/regression_losses/#mean_squared_error-function)
- [mean_absolute_error function](https://keras.io/api/losses/regression_losses/#mean_absolute_error-function)
- [mean_absolute_percentage_error function](https://keras.io/api/losses/regression_losses/#mean_absolute_percentage_error-function)
- [mean_squared_logarithmic_error function](https://keras.io/api/losses/regression_losses/#mean_squared_logarithmic_error-function)
- [cosine_similarity function](https://keras.io/api/losses/regression_losses/#cosine_similarity-function)
- [Huber class](https://keras.io/api/losses/regression_losses/#huber-class)
- [huber function](https://keras.io/api/losses/regression_losses/#huber-function)
- [LogCosh class](https://keras.io/api/losses/regression_losses/#logcosh-class)
- [log_cosh function](https://keras.io/api/losses/regression_losses/#log_cosh-function)

#### [Hinge losses for "maximum-margin" classification](https://keras.io/api/losses/hinge_losses/)

- [Hinge class](https://keras.io/api/losses/hinge_losses/#hinge-class)
- [SquaredHinge class](https://keras.io/api/losses/hinge_losses/#squaredhinge-class)
- [CategoricalHinge class](https://keras.io/api/losses/hinge_losses/#categoricalhinge-class)
- [hinge function](https://keras.io/api/losses/hinge_losses/#hinge-function)
- [squared_hinge function](https://keras.io/api/losses/hinge_losses/#squared_hinge-function)
- [categorical_hinge function](https://keras.io/api/losses/hinge_losses/#categorical_hinge-function)

## Links

- [GitHub - keras-team/keras: Deep Learning for humans](https://github.com/keras-team/keras)
- [Keras: The high-level API for TensorFlow  |  TensorFlow Core](https://www.tensorflow.org/guide/keras)
- [Keras: Deep Learning for humans](https://keras.io/)
- [Keras 3 Release](https://keras.io/keras_3/)
