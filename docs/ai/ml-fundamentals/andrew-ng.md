# Andrew NG

## Model and cost function

1. Model representation - Linear regression using Training set

m - number of training examples

x's - input variables / features

y's - output variable / "target" variable

(x,y) - one training example

![image](../../media/Andrew-NG-image1.jpg)

## 2. Cost function

![image](../../media/Andrew-NG-image2.jpg)

Cost function intuition -

![image](../../media/Andrew-NG-image3.jpg)

![image](../../media/Andrew-NG-image4.jpg)

![image](../../media/Andrew-NG-image5.jpg)

![image](../../media/Andrew-NG-image6.jpg)

Octave

- **Singular Value Decomposition (SVD)**

Every nxm matrix can be written as a product of three smaller matrices.

![image](../../media/Andrew-NG-image7.jpg)

- SVD appreas in lots of places
    - Statistics (PCA)
    - Chemical physics
    - Image processing
    - Genomics
    - Robotics
    - Quantum physics (entanglement)
    - Data embeddings / vector embeddings

## Gradient Descent for Linear regression with one variable

![image](../../media/Andrew-NG-image8.jpg)

![image](../../media/Andrew-NG-image9.jpg)

Gradient descent intuition

![image](../../media/Andrew-NG-image10.jpg)

## Derivative term

![image](../../media/Andrew-NG-image11.jpg)

## Alpha

![image](../../media/Andrew-NG-image12.jpg)

![image](../../media/Andrew-NG-image13.jpg)

![image](../../media/Andrew-NG-image14.jpg)

## Gradient Descent for Linear Regression

![image](../../media/Andrew-NG-image15.jpg)

![image](../../media/Andrew-NG-image16.jpg)

![image](../../media/Andrew-NG-image17.jpg)

Gradient descent is a convex function (Global minimum)

Also called (Batch gradient descent) becauses look at all training sample.

![image](../../media/Andrew-NG-image18.jpg)

Linear Algebra Review

Matrix - Rectangular array of numbers.

Dimension of matrix : number of rows * number of columns

![image](../../media/Andrew-NG-image19.jpg)

Vector - is a matrix with one column (n*1 matrix)

Uppercase for matrices

Lower case for others variables, vectors, etc.

![image](../../media/Andrew-NG-image20.jpg)

Addition and Scalar Multiplication

Scalar multiplication is 3*matrix (n*matrix).

Scalar division is ⅓ * matrix

Matrix Vector Multiplication

![image](../../media/Andrew-NG-image21.jpg)

Calculating hypothesis using matrix-vector multiplication in octave its easy

![image](../../media/Andrew-NG-image22.jpg)

Matrix - Matrix multiplication

![image](../../media/Andrew-NG-image23.jpg)

If we have 3 hypothesis with 4 houses then,

![image](../../media/Andrew-NG-image24.jpg)

Multiplication Properties

- Multiplication is not commutative ( A*B not equal to B*A)
- Multiplication is Associative ( a*(b*c) = (a*b)*c)
- Identity matrix (A.I = I.A = A)

Matrix Inverse and Transpose

Matrix Inverse:

- 0 does not have an inverse.
- 3 inverse is 3-1
- Matrix inverse ( A * A-1 = Identity)
- Matrix that don't have an inverse are singular or degenerate matrix
- Ex- 0 matrix doesn't have inverse.

Matrix Transpose:

![image](../../media/Andrew-NG-image25.jpg)
