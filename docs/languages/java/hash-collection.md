# Hash Collection

SparseArray

## HashSet

1. HashSet class implements the Set interface

2. In HashSet, we store objects(elements or values) e.g. If we have a HashSet of string elements then it could depict a set of HashSet elements: {"Hello", "Hi", "Bye", "Run"}

3. HashSet **does not allow duplicate elements** that mean you can not store duplicate values in HashSet.

4. HashSet permits to have a single null value.

5. HashSet is not synchronized which means they are not suitable for thread-safe operations until unless synchronized explicitly.[similarity]
    add contains next notes
    HashSet O(1) O(1) O(h/n) h is the table

## HashMap

1. HashMap class implements the Map interface.

2. HashMap is used for storing key & value pairs. In short, it maintains the mapping of key & value (The HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls.) This is how you could represent HashMap elements if it has integer key and value of String type: e.g. {1->"Hello", 2->"Hi", 3->"Bye", 4->"Run"}

3. HashMap does not allow duplicate keys however it allows having duplicate values.

4. HashMap permits single null key and any number of null values.

5. HashMap is not synchronized which means they are not suitable for thread-safe operations until unless synchronized explicitly.[similarity]
    get containsKey next Notes
    HashMap O(1) O(1) O(h/n) h is the table
