# Binary Search

Finding the index of first element in *A* which is not less than *x* is called lower_bound query in C++ STL. The answer of our first query isn-lower_bound(x)

Similarly, finding the index of first element in *A* which is greater than *x* is called upper_bound query in C++ STL. The answer of our second query isn-upper_bound(x).

```java
int lower_bound(int start,int end,int item)
{
    while(start<end)
    {
        int mid=(start+end)>>1;
        if(arr[mid]>=item)
            end=mid;
        else start=mid+1;
    }
    return start;
}
int upper_bound(int start,int end,int item)
{
    while(start<end)
    {
        int mid=(start+end)>>1;
        if(arr[mid]<=item)
            start=mid+1;
        else end=mid;
    }
    return start;
}
```

https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/monk-and-search-2/editorial

## get count of all elements that are smaller or equal to given key

```python
def binarySearchCount(arr, left, n, key):
    right = n
    mid = 0
    while (left < right):
        mid = (right + left)//2

        # Check if key is present in array
        if (arr[mid] == key):
            # If duplicates are present it returns the position of last element
            while (mid + 1<n and arr[mid + 1] == key):
                 mid+= 1
            break

        # If key is smaller, ignore right half
        elif (arr[mid] > key):
            right = mid

        # If key is greater, ignore left half
        else:
            left = mid + 1

    # If key is not found in array then it will be before mid
    while (mid > -1 and  arr[mid] > key):
        mid-= 1

    # Return mid + 1 because of 0-based indexing of array
    return mid + 1
```

https://www.geeksforgeeks.org/count-smaller-equal-elements-sorted-array
