# Convolutional Neural Network (CNN)

## Neural Networks

Among [deep neural networks (DNN)](https://viso.ai/deep-learning/deep-neural-network-three-popular-types/), the [convolutional neural network (CNN)](https://viso.ai/deep-learning/convolutional-neural-networks/) has demonstrated excellent results in computer vision tasks, especially in image classification. Convolutional Neural Networks (CNNs) are a special type of multi-layer neural network inspired by the mechanism of human optical and neural systems.

In 2012, a large deep convolutional neural network called [AlexNet](https://viso.ai/deep-learning/alexnet/) showed excellent performance on the ImageNet Large Scale Visual Recognition Challenge (ILSVRC). This marked the start of the broad use and development of convolutional neural network models (CNN) such as [VGGNet](https://viso.ai/deep-learning/vgg-very-deep-convolutional-networks/), [GoogleNet](https://viso.ai/deep-learning/googlenet-explained-the-inception-model-that-won-imagenet/), [ResNet](https://viso.ai/deep-learning/resnet-residual-neural-network/), DenseNet, and many more.

## Convolutional Neural Network (CNN)

A CNN is a framework developed using machine learning concepts. CNNs can learn and train from data on their own without the need for human intervention.

There is only some pre-processing needed when using CNNs. They develop and adapt their image filters, which have to be carefully coded for most algorithms and models. CNN frameworks have a set of layers that perform particular functions to enable CNN to perform these functions.

## CNN Architecture

The basic unit of a CNN framework is a neuron. The concept of neurons is based on human neurons, where synapses occur due to [neuron activation](https://viso.ai/deep-learning/neuron-activation/). These are statistical functions that calculate the weighted average of inputs and apply an activation function to the result generated. Layers are a cluster of neurons, with each layer having a particular function.

![Concept of a neural network](../../media/Pasted%20image%2020240917123040.png)

## CNN Layers

A CNN system may have somewhere between 3 to 150 or even more layers: The “deep” of Deep neural networks refers to the number of layers. One layer’s output acts as another layer’s input. Deep multi-layer neural networks include [Resnet50 (50 layers) or ResNet101 (101 layers)](https://viso.ai/deep-learning/resnet-residual-neural-network/).

![Concept of a Convolutional Neural Network (CNN)](../../media/Pasted%20image%2020240917123109.png)

![CNN Architecture](../../media/Screenshot%202024-09-18%20at%2011.12.53%20PM.jpg)

CNN layers can be of four main types: Convolution Layer, ReLu Layer, Pooling Layer, and Fully-Connected Layer.

- **Convolution Layer:** A convolution is the simple application of a filter to an input that results in an activation. The convolution layer has a set of trainable filters that have a small receptive range but can be used to the full depth of data provided. Convolution layers are the major building blocks used in convolutional neural networks.
- **ReLu Layer:** ReLu layers, or Rectified linear unit layers, are activation functions for lowering [overfitting](https://viso.ai/computer-vision/what-is-overfitting/) and building CNN accuracy and effectiveness. Models that have these layers are easier to train and produce more accurate results.
- **Pooling Layer:** This layer collects the result of all neurons in the layer preceding it and processes this data. The primary task of a pooling layer is to lower the number of considered factors and give streamlined output.
- **Fully-Connected Layer:** This layer is the final output layer for CNN models that flattens the input data received from layers before it and gives the result.

## [Convolutional Neural Network - YouTube](https://www.youtube.com/playlist?list=PLuhqtP7jdD8CD6rOWy20INGM44kULvrHu)

- Artificial Neural Network (ANN) vs CNN
- Convolution Operation
   	- Vertical edge features
   	- Horizontal edge features
- Padding
   	- Valid Convolution
   	- Same Convolution
- Stride
- Max Pooling
   	- Reduce image size, thus reduce computational cost
   	- Enhances features of the image
- Flatten array input to Fully connected layers
   	- Fully connected layers are dense networks of neurons
   	- Applied after convolutional and max pooling layers
   	- Classifies the output
   	- Associate features to a particular label
- CNN Architecture
- Backpropagation

## Links

- [Examples](ai/computer-vision-cv/examples.md)
- [A Complete Guide to Image Classification in 2024 - viso.ai](https://viso.ai/computer-vision/image-classification/)
- [Introduction to Convolution Neural Network - GeeksforGeeks](https://www.geeksforgeeks.org/introduction-convolution-neural-network/)
