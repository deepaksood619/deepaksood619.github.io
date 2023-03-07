# TensorFlow

## Tools

- Torch
- Caffe
- Theano
- TensorFlow

## TensorFlow

High-level neural network library for deep learning

## TensorBoard: Visualizing Learning

Can be used to visualize TensorFlow graph, plot quantitative metrics about the execution of the graph, and show additional data like images that pass through it.

<http://projector.tensorflow.org>

<https://www.i-programmer.info/news/105/13559.html>

## MNIST Architecture

[Hands-on TensorBoard (TensorFlow Dev Summit 2017)](https://www.youtube.com/watch?v=eBbEDRsCmv4)

## Installation

<https://www.tensorflow.org/install/install_mac>

## Getting Started

<https://www.tensorflow.org/get_started/get_started>

## API

1. **TensorFlow Core (Lowest level API for complete programming control)**

2. **Higher level APIs (Ex - tf.estimator helps manage data sets, estimators, training and inference)**

## TensorFlow Core

1. **Tensors**

The central unit of data in TensorFlow is the **tensor**. A tensor consists of a set of primitive values shaped into an array of any number of dimensions. A tensor's **rank** is its number of dimensions. Here are some examples of tensors:

```bash
3 # a rank 0 tensor; a scalar with shape []
[1., 2., 3.] # a rank 1 tensor; a vector with shape [3]
[[1., 2., 3.], [4., 5., 6.]] # a rank 2 tensor; a matrix with shape [2, 3]
[[[1., 2., 3.]], [[7., 8., 9.]]] # a rank 3 tensor with shape [2, 1, 3]
```

## 1.1. The Computational Graph

A **computational graph** is a series of TensorFlow operations arranged into a graph of nodes.

## TensorFlow Model Serving

- Contains gRPC and HTTP endpoints
- Performs model versioning without changing any client code
- Schedules grouping individual inference requests into batches for joint execution
- Optimizes inference time for minimal latency
- Supports many servables (a servable is either a model or a task for serving the data that goes along with your model):
  - TensorFlow models
  - Embeddings
  - Vocabulary lookup tables
  - Feature transformations
  - Non-TensorFlow-based models
- Is capable of canarying and A/B testing

<https://dzone.com/articles/machine-learning-and-real-time-analytics-in-apache>

## Tensorflow Extended

TensorFlow Extended (TFX) is an end-to-end platform for deploying production ML pipelines

<https://www.tensorflow.org/tfx>

## Commands

tensorboard --logdir=path/to/log-directory

## Others

<https://www.toptal.com/python/gradient-descent-in-tensorflow>

<https://www.youtube.com/watch?v=6g4O5UOH304>

<https://www.freecodecamp.org/news/how-to-use-tensorflow-for-computer-vision>

[Intro to Tensorflow](https://www.youtube.com/playlist?list=PL2-dafEMk2A7EEME489DsI468AB0wQsMV)

<https://github.com/tensorflow/models>
