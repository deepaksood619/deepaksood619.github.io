# Data Structures

`*class* pandas. **DataFrame** (*data=None*,*index=None*, *columns=None*, *dtype=None*, *copy=False*)`

Two-dimensional size-mutable, potentially heterogeneous tabular data structure with labeled axes (rows and columns). Arithmetic operations align on both row and column labels. Can be thought of as a dict-like container for Series objects. The primary pandas data structure.

### Parameters

- **data :** numpy ndarray (structured or homogeneous), dict, or DataFrame

    Dict can contain Series, arrays, constants, or list-like objects

    Changed in version 0.23.0: If data is a dict, argument order is maintained for Python 3.6 and later.

- **index :** Index or array-like

    Index to use for resulting frame. Will default to RangeIndex if no indexing information part of input data and no index provided

- **columns :** Index or array-like

    Column labels to use for resulting frame. Will default to RangeIndex (0, 1, 2, …, n) if no column labels are provided

- **dtype :** dtype, default None

    Data type to force. Only a single dtype is allowed. If None, infer

- **copy :** boolean, default False

    Copy data from inputs. Only affects DataFrame / 2d ndarray input

Note: All the manipulation operation creates a new dataframe and doesn't change the original dataframe, so either instantiate the dataframe back to the same variable, or explicitely pass inplace=True, if available.

## Examples

```python
d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)
df
col1  col2
0     1     3
1     2     4

df = pandas.read_csv("http://pythonhow.com/supermarkets.csv")
df = pandas.read_json('supermarkets.json')
df.set_index('ID')
df.shape # returns a tuple with (num_of_rows, num_of_columns)

loan_data_backup = df.copy()
df.columns.values
df.info()
df_columns['col_name'].unique()

# Extract row, column from the dataframe
df.loc[:,"Country"])
df.iloc[3,1:4]
df.ix[3,4]

# Delete row, column from the dataframe
df.drop("332 Hill St", 0)
df.drop(df.columns[0:3],1)
df.columns # returns list of all the column of the dataframe

# Add row column into the dataframe
df["Continent"] = df.shape[0]*[North America"] # creates a new column Continent and set all the values of the rows to "North America"

df["Continent"] = df["Country"] + "," + "North America"
df["Address"] = df["Address"] + ", " + df["City"] + ", " + df["State"] + ", " + df["Country"] #update the column Continent, with all addition of all the values specified in the Column.

df.T # Transpose of the dataframe
```
