# Intro

<https://www.tutorialspoint.com/numpy/index.htm>

NumPy, which stands for Numerical Python, is a library consisting of multidimensional array objects and a collection of routines for processing those arrays. Using NumPy, mathematical and logical operations on arrays can be performed.

## NumPy is a library for efficient array computations, modeled after Matlab. Arrays differ from plain Python lists in the way they are stored and handled. Array elements stay together in memory, so they can be quickly accessed. NumPy also supports quick subindexing, e.g., a[0, :, 2] gives you all array elements whose first index is 0 and third index is 2

Furthermore, NumPy provides vectorized mathematical functions. When, e.g., you call numpy.sin(a), the sine function is applied on every element of array a. This is done using compiled C code, so it works much faster than a Python for loop, even faster than list comprehensions.

## Features

- A powerful N-dimensional array object
- Sophisticated (broadcating) functions
- Tools for integrating C/C++ and Fortran code
- Useful linear algebra, Fourier transform, and random number capabilities

## Using NumPy, a developer can perform the following operations

- Mathematical and logical operations on arrays
- Fourier transforms and routines for shape manipulation
- Operations related to linear algebra. NumPy has in-built functions for linear algebra and random number generation

### Sum

The sum tool returns the sum of array elements over a given axis

```python
import numpy

my_array = numpy.array([ [1, 2], [3, 4] ])

print numpy.sum(my_array, axis = 0) #Output : [4 6]
print numpy.sum(my_array, axis = 1) #Output : [3 7]
print numpy.sum(my_array, axis = None) #Output : 10
print numpy.sum(my_array) #Output : 10
```

### Prod

The prod tool returns the product of array elements over a given axis.

```python
import numpy

my_array = numpy.array([ [1, 2], [3, 4] ])

print numpy.prod(my_array, axis = 0) #Output : [3 8]
print numpy.prod(my_array, axis = 1) #Output : [2 12]
print numpy.prod(my_array, axis = None) #Output : 24
print numpy.prod(my_array) #Output : 24
```

## Speeding up your code

<https://m.youtube.com/watch?v=EEUXKG97YRw>

1. Use NumPy's ufuncs
2. Use NumPy's aggregations
3. Use NumPy's broadcasting
4. Use Numpy's slicing, masking and fancy indexing

Goal: push repeated operations into compiled code and Get Rid of Slow Loops (removing python loop)

1. ufuncs (Universal functions)

They operate element-wise on arrays

## axis=0 and axis=1

axis = 0 is meant for reading rows, axis = 1 is meant for reading columns

## References

<https://www.tutorialspoint.com/numpy/index.htm>

<https://www.freecodecamp.org/news/numpy-python-tutorial>
