# Examples

```python
## Loading a csv in pandas

import pandas as pd
import numpy as np

df = pd.read_csv('pandas_dataframe_importing_csv/example.csv')
print(df)

## When file doesn't have any header

df = pd.read_csv('synsets15.txt', header=None)

print(df)

## Pass headers to the dataset

df = pd.read_csv('synsets15.txt', names=['id', 'synset', 'gloss'])

print(df)

df = pd.read_csv('userDeviceSms_100000001_100500000.csv', header=None,

error_bad_lines=False,

names=['id', 'customer_id', 'sender', 'message', 'message_type', 'sms_time', 'create_date', 'device_id', 'hash_key', 'isMoved', 'sub_sender'])
```
