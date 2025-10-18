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

## Others

- [GitHub - sinaptik-ai/pandas-ai: Chat with your database or your datalake (SQL, CSV, parquet). PandasAI makes data analysis conversational using LLMs and RAG.](https://github.com/sinaptik-ai/pandas-ai)
- [PandasAI - Dev Tools for AI Builders](https://pandas-ai.com/)
- [GitHub - ibis-project/ibis: the portable Python dataframe library](https://github.com/ibis-project/ibis)
- [7 Pandas Tricks to Handle Large Datasets - MachineLearningMastery.com](https://machinelearningmastery.com/7-pandas-tricks-to-handle-large-datasets/)
