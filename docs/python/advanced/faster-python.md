# Faster Python

1. Line Profiling
2. Numpy Vectorization
3. Specilized data structures

   - scipy.spatial

    For spatial query like distances, nearest neighbor, kd trees etc.

    - pandas

    for SQL-like grouping or aggregation

    - xarray

    for grouping across multiple dimensions

    - scipy.sparse

    sparse matrices for 2-dimensional structured data

    - sparse package

    for N-dimensional structured data

    - scipy.sparse.csgraph

    for graph-like problems (e.g. finding shortest paths)

4. CPython
5. Numba

    https://www.youtube.com/watch?v=x58W9A2lnQc

6. Dask
    - Parallel Computation
    - Task Graph

    https://www.kdnuggets.com/2020/04/dask-big-data.html

7. https://rapids.ai> <https://github.com/rapidsai
8. [Vaex: A Fast DataFrame for Python 🚀](https://vaex.io/)
9. [GitHub - pola-rs/polars: Fast multi-threaded, hybrid-out-of-core DataFrame library in Rust | Python | Node.js](https://github.com/pola-rs/polars)

## Optimizing Python Memory Objects

https://habr.com/en/post/458518

https://towardsdatascience.com/memory-management-in-python-6bea0c8aecc9

## Performant Python (reducing memory usage)

- Tuples save a bit of memory when replacing lists
- **Tuples save lots of memory when replacing dictionaries**
- Generators save memory only for large tuples, but are faster to iterate
- **Slotted classes save a lot of memory**
- Namedtuples are better than classes but worse than slotted classes
- Map and filter are sometimes faster than comprehensions

https://strangemachines.io/articles/performant-python

https://blog.esciencecenter.nl/parallel-programming-in-python-7fd62c90217d
