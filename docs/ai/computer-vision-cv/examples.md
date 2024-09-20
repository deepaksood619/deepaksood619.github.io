# Examples

- Image Classifier

## Import Libraries

```python
import numpy as np
import random
import matplotlib.pyplot as plt
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Dense, Flatten
```

## Download Dataset

1000 images of cat and 1000 images of dog

```bash
pip install gdown
```

```python
import gdown

files = {'labels.csv': 'https://drive.google.com/uc?id=1Zy3y6wBLZTI67BZhXzwQtgWJ8m50Oggl',
        'labels_test.csv': 'https://drive.google.com/uc?id=1cGDczlanBC59TbpNIe8_s0-yUtIrmnwm',
        'input.csv': 'https://drive.google.com/uc?id=1jQ16W4DJG1ZfJ_R7V_9cQIALwN3lruE5',
        'input_test.csv': 'https://drive.google.com/uc?id=1JHblwM88w4g70lZwiLDf6qPz8t0wZnd6',}


for output, url in files.items():
    print(url, output)
    gdown.download(url, output, quiet=False)
```

## Load Dataset

```python
X_train = np.loadtxt('input.csv', delimiter = ',')
Y_train = np.loadtxt('labels.csv', delimiter = ',')

X_test = np.loadtxt('input_test.csv', delimiter = ',')
Y_test = np.loadtxt('labels_test.csv', delimiter = ',')

# reshape
X_train = X_train.reshape(len(X_train), 100, 100, 3)
Y_train = Y_train.reshape(len(Y_train), 1)

X_test = X_test.reshape(len(X_test), 100, 100, 3)
Y_test = Y_test.reshape(len(Y_test), 1)

# normalize
X_train = X_train/255.0
X_test = X_test/255.0

print("Shape of X_train: ", X_train.shape)
print("Shape of Y_train: ", Y_train.shape)
print("Shape of X_test: ", X_test.shape)
print("Shape of Y_test: ", Y_test.shape)
```

## Print Random Samples

```python
idx = random.randint(0, len(X_test))
plt.imshow(X_test[idx, :])
plt.show()

idx = random.randint(0, len(X_train))
plt.imshow(X_train[idx, :])
plt.show()
```

## Create model

```python
model = Sequential([
    Conv2D(32, (3,3), activation = 'relu', input_shape = (100, 100, 3)),
    MaxPooling2D((2,2)),

    Conv2D(32, (3,3), activation = 'relu'),
    MaxPooling2D((2,2)),

    Flatten(),
    Dense(64, activation = 'relu'),
    Dense(1, activation = 'sigmoid')
])
```

or

```python
model = Sequential()

model.add(Conv2D(32, (3,3), activation = 'relu', input_shape = (100, 100, 3)))
model.add(MaxPooling2D((2,2)))

model.add(Conv2D(32, (3,3), activation = 'relu'))
model.add(MaxPooling2D((2,2)))

model.add(Flatten())
model.add(Dense(64, activation = 'relu'))
model.add(Dense(1, activation = 'sigmoid'))
```

## Compile model so that model can resume

Adding cost function, and backpropogation

```python
model.compile(loss = 'binary_crossentropy', optimizer = 'adam', metrics = ['accuracy'])
```

if need to use stochastic gradient descent instead of adam, this is used if we want to change the learning rate

```python
opt = keras.optimizers.SGD(learning_rate = 0.001)
model.compile(loss = 'binary_crossentropy', optimizer = opt, metrics = ['accuracy'])
```

## Train

```python
model.fit(X_train, Y_train, epochs = 5, batch_size = 64)
```

## Evaluate

```python
model.evaluate(X_test, Y_test)
```

## Inference / Making predictions

```python
idx2 = random.randint(0, len(Y_test))
plt.imshow(X_test[idx2, :])
plt.show()

y_pred = model.predict(X_test[idx2, :].reshape(1, 100, 100, 3))
cat_dog_pred = y_pred > 0.5

if(cat_dog_pred == 0):
    pred = 'dog'
else:
    pred = 'cat'

print("Our model says it is a :", pred, y_pred)
```

value `y_pred` gives a probabilistic value, close to 0 means it's 1st class i.e. dog, and close to 1 means it's 2nd class i.e. cat.

## Cat vs Dog Classifier

- [Convolutional Neural Networks (CNN) — Architecture Explained | by Dharmaraj | Medium](https://medium.com/@draj0718/convolutional-neural-networks-cnn-architectures-explained-716fb197b243)
- [GitHub - girishkuniyal/Cat-Dog-CNN-Classifier: This classifier use Convolution Neural Network approch for kaggle problem to classify Cat vs Dog images.](https://github.com/girishkuniyal/Cat-Dog-CNN-Classifier)
- [GitHub - mohamedamine99/Keras-CNN-cats-vs-dogs-image-classification: This project is an image classification project using a deep-learning based on Convolutional Neural Networks (CNNs) with Keras. The Dogs vs. Cats is a classic problem for anyone who wants to dive deeper into deep-learning.](https://github.com/mohamedamine99/Keras-CNN-cats-vs-dogs-image-classification)
- [How to Classify Photos of Dogs and Cats (with 97% accuracy) - MachineLearningMastery.com](https://machinelearningmastery.com/how-to-develop-a-convolutional-neural-network-to-classify-photos-of-dogs-and-cats/)
- [Dog Cat Classification | Kaggle](https://www.kaggle.com/code/williamkempson/dog-cat-classification)

## Links

- [Image Classification using CNN Keras | Kaggle](https://www.kaggle.com/code/deepaksood619/image-classification-using-cnn-keras)
- [Image Classification using CNN Keras | Full implementation - YouTube](https://www.youtube.com/watch?v=J1jhfAw5Uvo)
- [Cats vs Dogs : Image Classification using CNN(95%) | Kaggle](https://www.kaggle.com/code/sachinpatil1280/cats-vs-dogs-image-classification-using-cnn-95)
- [AWS Innovate | Intro to Deep Learning: Building an Image Classifier on Amazon SageMaker - YouTube](https://www.youtube.com/watch?v=KCzgR7eQ3PY&ab_channel=AmazonWebServices)
