# Deep Learning Frameworks

## Apache MXNet

A scalable deep learning framework. Extremely fast and efficient. Capable of scaling across multiple GPUs and multiple machines.

Apache MXNet is an open-source deep learning software framework that trains and deploys deep neural networks. It aims to be scalable, allows fast model training, and supports a flexible programming model and multiple programming languages (including C++, Python, Java, Julia, MATLAB, JavaScript, Go, R, Scala, Perl, and Wolfram Language). The MXNet library is portable and can scale to multiple GPUs and machines. It was co-developed by Carlos Guestrin at the University of Washington, along with GraphLab.

As of September 2023, **it is no longer actively developed**. Apache MXNet was effectively abandoned due to a combination of factors including lack of significant contributions, outdated builds, and a shift in focus by its major backer, Amazon, towards other frameworks like PyTorch. The project saw no new releases for over a year, and there were very few pull requests or updates from contributors, leading to its move to the Apache Attic in 2023. Additionally, the community began migrating to other frameworks that offered more robust support and development activity.

https://en.wikipedia.org/wiki/Apache_MXNet

### MXNet Model Server

Model Server for Apache MXNet is a tool for serving neural net models for inference

Model Server for Apache MXNet (MMS) is a flexible and easy to use tool for serving deep learning models exported from [MXNet](http://mxnet.io/) or the Open Neural Network Exchange ([ONNX](http://onnx.ai/)).

https://github.com/awslabs/mxnet-model-server

## Pytorch

PyTorch ( Tensors and Dynamic neural networks in Python with strong GPU acceleration)

**PyTorch** is TensorFlow’s direct competitor developed by Facebook, and is widely used in research projects. It allows almost unlimited customization and is well adapted to running tensor operations on GPUs (actually, so is TensorFlow).

## [Keras](ai/libraries/keras.md)

- High-level neural networks API. Makes coding, training, and deploying neural networks incredibly easy with its scikit-learn style API.

**Keras** is built on top of TensorFlow, which makes it a wrapper for deep learning purposes. It is incredibly user-friendly and easy to pick up. A solid asset is its neural network block modularity and the fact that it is written in Python, which makes it easy to debug.

Keras is a high-level neural networks API, written in Python and capable of running on top of [TensorFlow](https://github.com/tensorflow/tensorflow), [CNTK](https://github.com/Microsoft/cntk), or [Theano](https://github.com/Theano/Theano). It was developed with a focus on enabling fast experimentation.Being able to go from idea to result with the least possible delay is key to doing good research.

Use Keras if you need a deep learning library that:

- Allows for easy and fast prototyping (through user friendliness, modularity, and extensibility).
- Supports both convolutional networks and recurrent networks, as well as combinations of the two.
- Runs seamlessly on CPU and GPU.

https://keras.io

## [TensorFlow](ai/libraries/tensorflow/readme.md)

Open source machine learning library. Often used for neural networks, deep learning, and as a computational backend for Keras.

**TensorFlow** (TF) is an end-to-end machine learning framework from Google that allows you to perform an extremely wide range of downstream tasks. With [TF2.0](https://blog.tensorflow.org/2019/09/tensorflow-20-is-now-available.html) and newer versions, more efficiency and convenience was brought to the game.

## Differences

- **Keras** is not for beginners, its for rapid deployment and production. And meant to be used by the people who already understand the technology
- **Pytorch** is great for research implementations, but it's very unnecessarily hard to deploy your model into production
- **Tensorfow** is another great framework for deep learning. But is slow and memory hungry
- After using Pytorch/Keras/Tensorflow 2.0, I finally decided that MXNet would be my frameworks of choice for Deep Learning.

### 1. PyTorch

#### Best For

- Research and quick prototyping
- Complex custom architectures

#### Pros

- **Dynamic Computational Graphs**: PyTorch uses dynamic graphs (define-by-run), which makes it more intuitive for building models where the architecture changes during runtime.
- **Ease of Debugging**: With dynamic graphs, debugging is easier since you can use standard Python debugging tools.
- **Strong Community Support in Research**: PyTorch is widely used in academia, making it suitable if you're implementing cutting-edge research or need flexibility in modifying architectures.
- **Good for Custom Architectures**: If you plan to build non-standard architectures, PyTorch’s flexibility makes it a good choice.

#### Cons

- **Deployment**: PyTorch has fewer deployment tools compared to TensorFlow (though **TorchServe** has been improving this).

### 2. TensorFlow (Including Keras)

#### Best For

- Production models, large-scale training, and deployment
- Projects requiring extensive model optimization and deployment on mobile devices or cloud services

#### Pros

- **Scalability**: TensorFlow is well-suited for both small and large projects due to its ability to handle complex tasks at scale.
- **Production-Ready**: TensorFlow has great support for production deployments, with tools like **TensorFlow Serving** and **TensorFlow Lite** for mobile and embedded devices.
- **Keras Integration**: Keras, now a part of TensorFlow, offers a high-level API that’s easier to use for beginners or for rapid prototyping.
- **Optimization**: TensorFlow includes powerful optimization features like **XLA compiler** and **TPU support** for faster training on large models.

#### Cons

- **Steeper Learning Curve**: TensorFlow, particularly the low-level API, can be complex and harder to debug compared to PyTorch.
- **Static Graphs**: Older versions of TensorFlow use static graphs, making it harder to work with dynamic architectures (although **eager execution** in TensorFlow 2.x has addressed this to some extent).

### 3. Keras (Standalone or Integrated into TensorFlow)

#### Best For

- Beginners or rapid prototyping
- Simple to moderately complex neural networks

#### Pros

- **Simplicity**: Keras is designed to be easy to use and offers a high-level API, making it accessible to beginners. It allows for rapid prototyping without worrying about the underlying complexity.
- **Integration with TensorFlow**: Since it’s integrated with TensorFlow, you get the benefits of TensorFlow’s scalability and optimization while keeping the simplicity of Keras.
- **Pre-trained Models**: Keras provides easy access to many pre-trained models like ResNet, Inception, MobileNet, which are useful for transfer learning.

#### Cons

- **Limited Flexibility for Custom Architectures**: Keras is not as flexible as PyTorch or TensorFlow low-level API if you need complex, non-standard layers or architectures.

### 4. scikit-learn

#### Best For

- Traditional machine learning algorithms (e.g., decision trees, SVMs)
- Small to medium datasets and simpler models

#### Pros

- **Best for Classical ML Models**: scikit-learn is the go-to library for traditional machine learning tasks like regression, classification, clustering, etc. It’s efficient for models that don’t require deep learning.
- **Easy to Use**: The API is clean and simple, with many built-in functions for preprocessing, model selection, and evaluation.
- **Good for Prototyping**: scikit-learn is excellent for quickly experimenting with traditional machine learning models.

#### Cons

- **Not for Deep Learning**: scikit-learn is not designed for deep learning or handling large datasets. For complex models like CNNs, RNNs, or NLP, you need PyTorch or TensorFlow.

### When to Choose Which?

- **Use PyTorch**:
    - When you need flexibility for research or custom model architectures.
    - For easier debugging during model development.
- **Use TensorFlow (with Keras)**:
    - For large-scale production projects, mobile, or edge device deployments.
    - When you need a balance between ease of use (Keras) and scalability (TensorFlow).
- **Use Keras (Standalone)**:
    - For rapid prototyping or simpler deep learning models when you don’t need full TensorFlow capabilities.
- **Use scikit-learn**:
    - For traditional machine learning models and small to medium-sized datasets.

| Keras                      | Tensorflow                                  |
| -------------------------- | ------------------------------------------- |
| Easy to code               | Not so easy to code                         |
| Training the model is slow | Training the model is fast                  |
| Used for rapid prototyping | Used for bigger and high level applications |
| Lesser need to debug       | Bit difficult to debug                      |
| Used for small dataset     | Used for large dataset                      |
| Smaller community support  | bigger community support                    |

### Conclusion

If you are building a **deep learning computer vision model**, **PyTorch** or **TensorFlow (Keras)** are the primary options. Use **PyTorch** for flexibility and ease of debugging, and **TensorFlow** if you need scalability, optimization, and deployment tools.

For traditional machine learning tasks (e.g., using support vector machines or decision trees), **scikit-learn** is a better fit.

## Links

- https://www.kaggle.com/learn-forum/90594
- https://www.freecodecamp.org/news/deep-learning-frameworks-compared-mxnet-vs-tensorflow-vs-dl4j-vs-pytorch
- https://wiki.pathmind.com/comparison-frameworks-dl4j-tensorflow-pytorch
- [ML Frameworks Compared: Scikit-Learn, Tensorflow, PyTorch and More \[Updated\]](https://www.netguru.com/blog/top-machine-learning-frameworks-compared)
- Good - [Scikit-learn vs. TensorFlow vs. PyTorch vs. Keras - Ritza Articles](https://ritza.co/articles/scikit-learn-vs-tensorflow-vs-pytorch-vs-keras/)
- [Scikit-learn, TensorFlow, PyTorch, Keras… but where to begin? | by Ugo Loobuyck | Towards Data Science](https://towardsdatascience.com/scikit-learn-tensorflow-pytorch-keras-but-where-to-begin-9b499e2547d0)
- [Pytorch Vs Tensorflow Vs Keras: The Differences You Should Know](https://www.simplilearn.com/keras-vs-tensorflow-vs-pytorch-article)
- [Choosing Your Battle: TensorFlow vs. PyTorch vs. Scikit-learn | by Anusha Narthu | Medium](https://medium.com/@anushanarthu/choosing-your-battle-tensorflow-vs-pytorch-vs-scikit-learn-b46462b1d3bc)
