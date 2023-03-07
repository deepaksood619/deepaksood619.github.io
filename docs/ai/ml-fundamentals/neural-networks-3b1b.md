# Neural Networks 3B1B

Mnemonic - Input, times Weight, add a Bias, Activate

## What is neural network

- Convolutional neural network - Good for image recognition
- Long short term memory network - Good for speech recognition
- Multilayer perceptron (Plain vanila neural network)

Sigmoid squisification function

![image](../../media/Neural-Networks-3B1B-image1.jpg)

Sigmoid function squishes the numbers into a range between 0 and 1.

Very negative inputs end up close to 0

Very positive inputs end up close to 1

And others steadily increase around input 0

![image](../../media/Neural-Networks-3B1B-image2.jpg)

- Weights
- Bias

![image](../../media/Neural-Networks-3B1B-image3.jpg)

![image](../../media/Neural-Networks-3B1B-image4.jpg)

ReLU - Rectified Linear Unit used instead of Sigmoid because it's easier to train.

Sigmoid is a slow learner

ReLU (a) = max(0,a)

<https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks>

![image](../../media/Neural-Networks-3B1B-image5.jpg)

## Gradient Descent

- Cost of a training example (Add all the squares of the differences between output - correct output)
- Cost is large when the output is far from the correct values and vice-versa
- For finding the local minima we can find slope of the function

![image](../../media/Neural-Networks-3B1B-image6.jpg)

![image](../../media/Neural-Networks-3B1B-image7.jpg)

![image](../../media/Neural-Networks-3B1B-image8.jpg)

![image](../../media/Neural-Networks-3B1B-image9.jpg)

![image](../../media/Neural-Networks-3B1B-image10.jpg)

- Multivariable Calculus - The Gradient of a function gives you the direction of steepest ascent. Basically, which direction should you step to increase the function most quickly

![image](../../media/Neural-Networks-3B1B-image11.jpg)

![image](../../media/Neural-Networks-3B1B-image12.jpg)

## Backpropagation

![image](../../media/Neural-Networks-3B1B-image13.jpg)

![image](../../media/Neural-Networks-3B1B-image14.jpg)

![image](../../media/Neural-Networks-3B1B-image15.jpg)

![image](../../media/Neural-Networks-3B1B-image16.jpg)

![image](../../media/Neural-Networks-3B1B-image17.jpg)

Randomly subdivide the data into mini batches and compute each step with respect to a mini batch (for faster training)

Stochastic Gradient Descent

![image](../../media/Neural-Networks-3B1B-image18.jpg)

## Backpropogation Calculus

![image](../../media/Neural-Networks-3B1B-image19.jpg)

![image](../../media/Neural-Networks-3B1B-image20.jpg)

![image](../../media/Neural-Networks-3B1B-image21.jpg)

![image](../../media/Neural-Networks-3B1B-image22.jpg)

![image](../../media/Neural-Networks-3B1B-image23.jpg)

![image](../../media/Neural-Networks-3B1B-image24.jpg)

![image](../../media/Neural-Networks-3B1B-image25.jpg)

![image](../../media/Neural-Networks-3B1B-image26.jpg)

![image](../../media/Neural-Networks-3B1B-image27.jpg)

![image](../../media/Neural-Networks-3B1B-image28.jpg)

![image](../../media/Neural-Networks-3B1B-image29.jpg)

![image](../../media/Neural-Networks-3B1B-image30.jpg)

![image](../../media/Neural-Networks-3B1B-image31.jpg)

[Neural Networks from Scratch in Python](https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3)
