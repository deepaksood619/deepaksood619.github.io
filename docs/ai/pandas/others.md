# Others

<https://en.wikipedia.org/wiki/Math_Kernel_Library>

## pandas_profiling

```python
import pandas as pd

import pandas_profiling

pd.read_csv('<https://raw.githubusercontent.com/mwaskom/seaborn-data/master/planets.csv').profile_report()>
```

<https://towardsdatascience.com/exploring-your-data-with-just-1-line-of-python-4b35ce21a82d>

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

<https://towardsdatascience.com/introducing-bamboolib-a-gui-for-pandas-4f6c091089e3>
