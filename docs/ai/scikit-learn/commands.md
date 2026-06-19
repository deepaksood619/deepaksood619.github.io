---
slug: /ai/scikit-learn/commands
title: Commands
description: Learn how to split your dataset for machine learning using the train_test_split function from sklearn in Python for effective model training.
created: 2023-03-05
last_update: 2023-12-05
---
```python
from sklearn.model_selection import train_test_split

df_inputs_train,df_trains_test,df_targets_train,df_targets_test = train_test_split(df.drop('good_bad',axis=1),df['good_bad'],test_size=0.2,random_state=42)
```

![image](../../media/sci-Commands-image1.jpg)

https://medium.com/analytics-vidhya/your-ultimate-data-mining-machine-learning-cheat-sheet-9fce3fa16
