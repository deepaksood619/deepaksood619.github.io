# Problems

## Anagrams (ABC, CBA are anagrams of each other)

- Can sort both array and compare both
- Can count all characters of string1 and decrement count by second string2. Check if all values are 0. Use dictionary, defaultdict.

## Array Pair Sum

Problem - Given an integer array, output all the *unique* pairs that sum up to a specific value k

Solution - The O(N) algorithm uses the set data structure. We perform a linear pass from the beginning and for each element we check whether k-element is in the set of seen numbers. If it is, then we found a pair of sum k and add it to the output. If not, this element doesn't belong to a pair yet, and we add it to the set of seen elements

## Find the Missing Element

Problem - Consider an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array

Solution - O(N) - We can use a hashtable and store the number of times each element appears in the second array. Then for each element in the first array we decrement its counter. Once hit an element with zero count that's the missing element

we can achieve linear time and constant space complexity without any problems. Here it is: initialize a variable to 0, thenXOR every element in the first and second arrays with that variable. In the end, the value of the variable is the result, missing element in array2.

## Largest Continuous Sum

Problem - Given an array of integers (positive and negative) find the largest continuous sum

Solution - O(N) - Use current_sum and max_sum to track the values and update the values using current_sum = max(current_sum + num, num) and max_sum(current_sum, max_sum)

## Sentence Reversal

Problem - Given a string of words, reverse all the words

Solution - Use stack to push the words and then print the stack

## String Compression

Problem - Implement Run Length Encoding

Solution - Use while loop to check if current value is equal to previous value

## Unique Characters in a String

Solution - Use dictionary to store seen values

Can also use set

## Interview Problems (Array)

- Find the second minimum element of an array
- First non-repeating integers in an array
- Merge two sorted arrays
- Rearrange positive and negative values in an array

## Interview Problems (Linked List)

### Single Linked List Cycle Check

Solution - using two markers, in which marker2 will move two nodes ahead for every one node that marker1 moves, if both markers are equal means there is a cycle

Mysolution - add visited as a variable to node, use set to store seen nodes (not efficient)

### Linked List Reversal in-place

Solution - Use previous, current, next pointers (remember to save nextnode before updating the current.nextnode)

### Nth to last node

Solution - Use two pointers - last and nth_last, move last to given n steps away. Move both pointers one step until last becomes last node.

return nth_last

- Walk one pointer **n** nodes from the head, this will be the right_point
- Put the other pointer at the head, this will be the left_point
- Walk/traverse the block (both pointers) towards the tail, one node at a time, keeping a distance **n** between them.
- Once the right_point has hit the tail, we know that the left point is at the target.

## Interview Problems (Stacks and Queues)

1. Implement a stack
2. Implement a queue
3. Implement a deque
4. Balanced paranthesis

   Use stack to store the opening paranthesis. Pop when closing paranthesis found while checking for set. If equal than continue otherwise return False (since not balanced)

5. Implement a queue using two stacks
   - costly enqueue
   - costly dequeue

whenever dequeue is called pop element from second stack, if second stack is empty then push elements from second stack by popping from it. (transfer elements from first stack to second in reverse order)
