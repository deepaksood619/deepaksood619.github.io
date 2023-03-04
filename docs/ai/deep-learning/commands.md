# Commands

## Libraries

- [numpy](https://idrgfain.labs.coursera.org/notebooks/Week%202/Logistic%20Regression%20as%20a%20Neural%20Network/www.numpy.org) is the fundamental package for scientific computing with Python.
- [h5py](http://www.h5py.org/) is a common package to interact with a dataset that is stored on an H5 file.
- [matplotlib](http://matplotlib.org/) is a famous library to plot graphs in Python.
- [PIL](http://www.pythonware.com/products/pil/) and [scipy](https://www.scipy.org/) are used here to test your model with your own picture at the end.

## Python- Numpy Vectors

```python
import numpy as np

a = np.random.randn(5)
print(a.shape)

(5, )

print(a.T)
[ ]

print(np.dot(a, a.T))

# use (5,1) instead of (5) i.e rank 1 array (nor a row vector nor a column vector)

# don't use rank 1 array

a = np.random.randn(5,1) # a.shape = (5,1), column vector

a = np.random.randn(1,5) # a.shape = (1,5), row vector

print(a.T)

[[ ]]

assert (a.shape == (5,1))

a = a.reshape((5,1)) # to change from rank 1 array to column vector

def sigmoid(x):
    s = 1/(1+np.exp(-x))

def sigmoid_derivative(x):
    s = 1/(1+np.exp(-x))
    ds = s*(1-s)

def image2vector(image):
    v = image.reshape(image.shape [0]*image.shape [1]*image.shape [2], 1)

def normalizeRows(x):
    x_norm = np.linalg.norm(x, ord = 2, axis=1, keepdims=True)
    x = x/x_norm

def softmax(x):
    x_exp = np.exp(x)
    x_sum = np.sum(x_exp, axis=1, keepdims=True)
    s = x_exp / x_sum

def L1(yhat, y):
    loss = np.sum(abs(y-yhat))

def L2(yhat, y):
    loss = np.sum(np.dot((y-yhat),(y-yhat)))

A trick when you want to flatten a matrix X of shape (a, b, c, d) to a matrix X_flatten of shape (b∗∗c∗∗d, a) is to use:

X_flatten = X.reshape(X.shape [0], -1).T
```
