# STL Iterators Algorithms

## C++ Iterators

Iterators are used to access members of the container classes, and can be used in a similar manner to pointers. For example, one might use an iterator to step through the elements of a vector. There are several different types of iterators:

| **Iterator**                | **Description**                                                                                                                                                                                            |
|----------------|--------------------------------------------------------|
| **input_iterator**          | Read values with forward movement. These can be incremented, compared, and dereferenced.                                                                                                                   |
| **output_iterator**         | Write values with forward movement. These can be incremented and dereferenced.                                                                                                                             |
| **forward_iterator**        | Read or write values with forward movement. These combine the functionality of input and output iterators with the ability to store the iterators value.                                                   |
| **bidirectional_ite rator** | Read and write values with forward and backward movement. These are like the forward iterators, but you can increment and decrement them.                                                                  |
| **random_iterator**         | Read and write values with random access. These are the most powerful iterators, combining the functionality of bidirectional iterators with the ability to do pointer arithmetic and pointer comparisons. |
| **reverse_iterator**        | Either a random iterator or a bidirectional iterator that moves in reverse direction.                                                                                                                      |

## C++ Algorithms

accumulate

sum up a range of elements

adjacent_difference

compute the differences between adjacent elements in a range

adjacent_find

finds two items that are adjacent to each other

binary_search

determine if an element exists in a certain range

copy

copy some range of elements to a new location

copy_backward

copy a range of elements in backwards order

copy_n

copy N elements

count

return the number of elements matching a given value

count_if

return the number of elements for which a predicate is true

equal

determine if two sets of elements are the same

equal_range

search for a range of elements that are all equal to a certain element

fill

assign a range of elements a certain value

fill_n

assign a value to some number of elements

find

find a value in a given range

find_end

find the last sequence of elements in a certain range

find_first_of

search for any one of a set of elements

find_if

find the first element for which a certain predicate is true

for_each

apply a function to a range of elements

generate

saves the result of a function in a range

generate_n

saves the result of N applications of a function

includes

returns true if one set is a subset of another

inner_product

compute the inner product of two ranges of elements

inplace_merge

merge two ordered ranges in-place

is_heap

returns true if a given range is a heap

is_sorted

returns true if a range is sorted in ascending order

iter_swap

swaps the elements pointed to by two iterators

lexicographical_compare

returns true if one range is lexicographically less than another

lexicographical_compare_3way

determines if one range is lexicographically less than or greater than another

lower_bound

search for the first place that a value can be inserted while preserving order

make_heap

creates a heap out of a range of elements

max

returns the larger of two elements

max_element

returns the largest element in a range

merge

merge two sorted ranges

min

returns the smaller of two elements

min_element

returns the smallest element in a range

mismatch

finds the first position where two ranges differ

next_permutation

generates the next greater lexicographic permutation of a range of elements

nth_element

put one element in its sorted location and make sure that no elements to its left are greater than any elements to its right

put

one element in its sorted location and make sure that no elements to its left are greater than any elements to its right

partial_sort

sort the first N elements of a range

partial_sort_copy

copy and partially sort a range of elements

partial_sum

compute the partial sum of a range of elements

partition

divide a range of elements into two groups

pop_heap

remove the largest element from a heap

prev_permutation

generates the next smaller lexicographic permutation of a range of elements

push_heap

add an element to a heap

random_sample

randomly copy elements from one range to another

random_sample_n

sample N random elements from a range

random_shuffle

randomly re-order elements in some range

remove

remove elements equal to certain value

remove_copy

copy a range of elements omitting those that match a certian value

remove_copy_if

create a copy of a range of elements, omitting any for which a predicate is true

remove_if

remove all elements for which a predicate is true

replace

replace every occurrence of some value in a range with another value

replace_copy

copy a range, replacing certain elements with new ones

replace_copy_if

copy a range of elements, replacing those for which a predicate is true

replace_if

change the values of elements for which a predicate is true

reverse

reverse elements in some range

reverse_copy

create a copy of a range that is reversed

rotate

move the elements in some range to the left by some amount

rotate_copy

copy and rotate a range of elements

search

search for a range of elements

search_n

search for N consecutive copies of an element in some range

set_difference

computes the difference between two sets

set_intersection

computes the intersection of two sets

set_symmetric_difference

computes the symmetric difference between two sets

set_union

computes the union of two sets

sort

sort a range into ascending order

sort_heap

turns a heap into a sorted range of elements

stable_partition

divide elements into two groups while preserving their relative order

stable_sort

sort a range of elements while preserving order between equal elements

swap

swap the values of two objects

swap_ranges

swaps two ranges of elements

transform

applies a function to a range of elements

unique

remove consecutive duplicate elements in a range

unique_copy

create a copy of some range of elements that contains no consecutive duplicates

upper_bound

searches for the last possible location to insert an element into an ordered range

## References

<https://www.cppreference.com/Cpp_STL_ReferenceManual.pdf>

<https://www.youtube.com/watch?v=bFSnXNIsK4A>
