# Levenshtein distance or Edit Distance

The Levenshtein Distance, or Edit Distance, is the amount by which two strings differ.

There are 3 possible actions that can be applied on a character:

1. Addition (Insert)
2. Deletion (Remove)
3. Modification (Replace)

```python
# A Naive recursive Python program to find minimum number
# operations to convert str1 to str2

def editDistance(str1, str2, m, n):

    # If first string is empty, the only option is to
    # insert all characters of second string into first
    if m == 0:
        return n

    # If second string is empty, the only option is to
    # remove all characters of first string
    if n == 0:
        return m

    # If last characters of two strings are same, nothing
    # much to do. Ignore last characters and get count for
    # remaining strings.
    if str1[m-1] == str2[n-1]:
        return editDistance(str1, str2, m-1, n-1)

    # If last characters are not same, consider all three
    # operations on last character of first string, recursively
    # compute minimum cost for all three operations and take
    # minimum of three values.
    return 1 + min(editDistance(str1, str2, m, n-1),    # Insert
                   editDistance(str1, str2, m-1, n),    # Remove
                   editDistance(str1, str2, m-1, n-1)    # Replace
                   )

# Driver code
str1 = "sunday"
str2 = "saturday"
print (editDistance(str1, str2, len(str1), len(str2)))
```

**Time Complexity** of above solution is exponential. In worst case, we may end up doing O(3^m) operations. The worst case happens when none of characters of two strings match.

**Auxiliary Space:** O(1), because no extra space is utilized.

## References

<https://www.geeksforgeeks.org/edit-distance-dp-5/>
