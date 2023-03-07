# Template

```python
import sys
import logging

import numpy as np
import scipy as sp
import sklearn
import statsmodels.api as sm
from statsmodels.formula.api import ols

%load_ext autoreload
%autoreload 2

import matplotlib as mpl
import matplotlib.pyplot as plt

%matplotlib inline
%config InlineBackend.figure_format = 'retina'

import seaborn as sns

sns.set_context("poster")
sns.set(rc={'figure.figsize': (16, 9.)})
sns.set_style("whitegrid")

import pandas as pd
pd.set_option("display.max_rows", 120)
pd.set_option("display.max_columns", 120)

logging.basicConfig(level=logging.INFO, stream=sys.stdout)

## # file browse

from ipywidgets import FileUpload

def on_upload_change(change):

if change.new==0:

print ('cleared')

return

up = change.owner

print (type(up.value))

for filename, data in up.value.items():

print(filename)

for k, v in data ['metadata'].items():

print(f' -{k:13}:[{v}]')

print(f' -content len :[{len(data ["content"])}]')

up.value.clear()

up._counter = 0

upload_btn = FileUpload()

upload_btn.observe(on_upload_change, names='_counter')

upload_btn
```
