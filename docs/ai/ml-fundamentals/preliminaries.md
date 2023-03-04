# Preliminaries

[2. Preliminaries](https://d2l.ai/chapter_preliminaries/index.html)

[2.1. Data Manipulation](https://d2l.ai/chapter_preliminaries/ndarray.html)

[2.2. Data Preprocessing](https://d2l.ai/chapter_preliminaries/pandas.html)

[2.3. Linear Algebra](https://d2l.ai/chapter_preliminaries/linear-algebra.html)

[2.4. Calculus](https://d2l.ai/chapter_preliminaries/calculus.html)

[2.5. Automatic Differentiation](https://d2l.ai/chapter_preliminaries/autograd.html)

[2.6. Probability](https://d2l.ai/chapter_preliminaries/probability.html)

[2.7. Documentation](https://d2l.ai/chapter_preliminaries/lookup-api.html)

## Tensor

No matter which framework you use, itstensor class**(ndarrayin MXNet, Tensorin both PyTorch and TensorFlow)** is similar to NumPy'sndarraywith a few killer features. First, GPU is well-supported to accelerate the computation whereas NumPy only supports CPU computation. Second, the tensor class supports automatic differentiation. These properties make the tensor class suitable for deep learning.

A tensor represents a (possibly multi-dimensional) array of numerical values. With one axis, a tensor corresponds (in math) to a **vector**. With two axes, a tensor corresponds to a **matrix**. Tensors with more than two axes do not have special mathematical names.

It provides a variety of functionalities including basic mathematics operations, **broadcasting, indexing, slicing, memory saving, and conversion** to other Python objects
