# Others

https://en.wikipedia.org/wiki/Math_Kernel_Library

## pandas_profiling

```python
import pandas as pd

import pandas_profiling

pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/planets.csv').profile_report()
```

https://towardsdatascience.com/exploring-your-data-with-just-1-line-of-python-4b35ce21a82d

## Reading sql

```python
mydb1 = pymysql.connect(host=hosts,

user=user,

password=password,

database=dbname)

chunks = pd.read_sql(query, mydb1, chunksize=50000)

next(chunks).to_csv(file_path, index=False)

for chunk in chunks:

chunk.to_csv(file_path, index=False, header=False, mode='a')

mydb1.close()
```

## bamboolib

https://towardsdatascience.com/introducing-bamboolib-a-gui-for-pandas-4f6c091089e3

## Python Version

[Pandas 2.0 : Everything You Need to Know - YouTube](https://www.youtube.com/watch?v=cSLPyRI_ZD8)

## Faster Pandas

1. Dask
    - Parallel Computation
    - Task Graph
    - https://www.kdnuggets.com/2020/04/dask-big-data.html
2. https://rapids.ai  https://github.com/rapidsai
3. [Vaex: A Fast DataFrame for Python 🚀](https://vaex.io/)
4. [GitHub - pola-rs/polars: Fast multi-threaded, hybrid-out-of-core DataFrame library in Rust | Python | Node.js](https://github.com/pola-rs/polars)
5. [Querying 1TB on a laptop with Python dataframes – Ibis](https://ibis-project.org/posts/1tbc/)
	1. [GitHub - ibis-project/ibis: the portable Python dataframe library](https://github.com/ibis-project/ibis)
6. DuckDB
7. [GitHub - modin-project/modin: Modin: Scale your Pandas workflows by changing a single line of code](https://github.com/modin-project/modin)
	1. `import modin.pandas as pd`

### Tricks

#### Chunked Dataset Loading

```python
import pandas as pd

def process(chunk):

  """Placeholder function that you may replace with your actual code for cleaning and processing each data chunk."""

  print(f"Processing chunk of shape: {chunk.shape}")

chunk_iter = pd.read_csv("https://raw.githubusercontent.com/frictionlessdata/datasets/main/files/csv/10mb.csv", chunksize=100000)

for chunk in chunk_iter:

    process(chunk)
```

#### Others

1. Downcasting Data Types for Memory Efficiency Optimization
2. Using Categorical Data for Frequently Occurring Strings
3. Saving Data in Efficient Format: Parquet
4. GroupBy Aggregation
5. query() and eval() for Efficient Filtering and Computation
6. Vectorized String Operations for Efficient Column Transformations

[7 Pandas Tricks to Handle Large Datasets - MachineLearningMastery.com](https://machinelearningmastery.com/7-pandas-tricks-to-handle-large-datasets/)

[faster-python](python/advanced/faster-python.md)

## Others

- [GitHub - sinaptik-ai/pandas-ai: Chat with your database or your datalake (SQL, CSV, parquet). PandasAI makes data analysis conversational using LLMs and RAG.](https://github.com/sinaptik-ai/pandas-ai)
- [PandasAI - Dev Tools for AI Builders](https://pandas-ai.com/)
- [GitHub - ibis-project/ibis: the portable Python dataframe library](https://github.com/ibis-project/ibis)
