# Cheatsheet

```python
# Creating arrays
 np.array([1,2,3])
 np.array([(1.5,2,3), (4,5,6)], dtype=float)
 np.array([[(1.5,2,3), (4,5,6), [(3,2,1), (4,5,6)]], dtype=float)

 Initial placeholders
  np.zeros((3,4))  #create an array of zeros
  np.ones((2,3,4), dtype=np.int16)  #create an array of ones
  d = np.arange(10,25,5)  #create an array of evenly spaced values (step value)
  np.linspace(0,2,9)  #create an array of evenly spaced values (number of samples)
  e = np.full((2,2), 7)  #create a constant array
  f = np.eye(2)  #create a 2x2 identity matrix
  np.random.random((2,2))  #create an array with random values
  np.empty((3,2))  #create an empty array

# I/O
 Saving & Loading on Disk
  np.save('my_array', a)
  np.savez('array.npz', a, b)
  np.load('my_array.npy')

 Saving & Loading Text Files
  np.loadtxt("myfile.txt")
  np.genfromtxt("my_file.csv", delimiter=',')
  np.savetxt("myarray.txt", a, delimiter=" ")

# Inspecting your array
 a.shape   #array dimensions
 len(a)     #length of array
 b.ndim    #number of array dimensions
 e.size    #number of array elements
 b.dtype   #data type of array elements
 b.dtype.name    #name of data type
 b.astype(int)     #convert an array to a different type

# Array Mathematics
- Arithmetic Operations
    g = a-b
    np.subtract(a,b)
    b+a
    np.add(b,a)
    a/b
    np.divide(a,b)
    a*b
    np.multiply(a,b)
    np.exp(b)   #exponentiation
    np.sqrt(b)
    np.sin(a)    #print sines of an array
    np.cos(b)   #element-wise cosine
    np.log(a)    #element-wise natural logarithm
    e.dot(f)       # dot product
- Comparison
    a == b     #element-wise comparison
    a < 2       # element-wise comparison
    np.array_equal(a,b)      #array-wise comparison
- Aggregate Functions
    a.sum()                 #array-wise sum
    a.min()                  #array-wise mimimum value
    b.max(axis=0)      #maximum value of an array row
    b.cumsum(axis=1)       #cumulative sum of the elements
    a.mean()         #mean
    b.median()     #median
    a.corrcoef()    #correlation coefficient
    np.std(b)        #standard deviation

Copying Arrays
 h = a.view()       #create a view of the array with the same data
 np.copy(a)         #create a copy of the array
 h = a.copy()       #create a deep copy of the array

Sorting Arrays
 a.sort()                 #sort an array
 c.sort(axis=0)      #sort the elements of an array's axis

Subsetting
 a[2]         #select the element at the 2nd index
 b[1,2]      #select the element at row 1 column 2 (equivalent to b[1][2])

Slicing
 a[0:2]        #select items at index 0 and 1
 b[0:2, 1]    #select items at rows 0 and 1 in column 1
 b[:1]           #select all items at row 0 (equivalent to b[0:1, :])
 c[1,...]        #same as [1, :, :]
 a[ : : -1]     #reversed array a

Indexing
 Boolean Indexing
  a[a<2]        #select elements from a less than 2
 Fancy Indexing
  b[[1,0,1,0], [0,1,2,0]]      #select elements (1,0),(0,1),(1,2) and (0,0)
  b[[1,0,1,0]][:,[0,1,2,0]]   #select a subset of the matrix's rows and columns

Array Manipulation
 Transposing Array
  i = np.transpose(b)        #permute array dimensions
  i.T                                     #permute array dimensions

 Changing Array Shape
  b.ravel()                         #flatten the array
  g.reshape(3,-2)            #reshape, but don't change data

 adding/removing elements
  h.resize((2,6))       #return a new array with shape (2,6)
  np.append(h,g)     #append items to an array
  np.insert(a,1,5)     #insert items in an array
  np.delete(a,[1])     #delete items from an array

 Combining arrays
  np.concatenate((a,d), axis=0)    #concatenate arrays
  np.vstack((a,b))                            #stack arrays vertically (row-wise)
  np.r_[e,f]                                       #stack arrays vertically (row-wise)
  np.hstack((e,f))                             #stack arrays horizontally (column-wise)
  np.column_stack((a,d))              #create stacked column-wise arrays
  np.c_[a,d]                                     #create stacked column-wise arrays

 Splitting arrays
  np.hsplit(a,3)               #split the array horizontally at the 3rd index
  np.vsplit(c,2)               #split the array vertically at the 2nd index

# Others
np.info(np.ndarray.dtype)    #Help

# inf is infinity - a value that is greater than any other value. -inf is therefore smaller than any other value.

# nan stands for Not A Number, and this is not equal to 0.

a = range(3,dtype=float)
a[0] = np.nan
a[1] = np.inf
a[2] = -np.inf
a # is now [nan,inf,-inf]
np.isnan(a[0]) # True
np.isinf(a[1]) # True
np.isinf(a[2]) # True
```

## References

<https://towardsdatascience.com/the-ultimate-beginners-guide-to-numpy-f5a2f99aef54>
