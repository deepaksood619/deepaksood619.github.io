# STL Containers

1. Sequences
   - C++ Vectors
   - C++ Lists
   - C++ Double-Ended Queues
2. Container Adapters
   - C++ Stacks
   - C++ Queues
   - C++ Priority Queues
3. Associative Containers
   - C++ Bitsets
   - C++ Maps
   - C++ Multimaps
   - C++ Sets
   - C++ Multisets

## C++ Vector

Vectors are sequence containers representing arrays that can change in size.

Just like arrays, vectors use contiguous storage locations for their elements, which means that their elements can also be accessed using offsets on regular pointers to its elements, and just as efficiently as in arrays. But unlike arrays, their size can change dynamically, with their storage being handled automatically by the container.

Internally, vectors use a dynamically allocated array to store their elements. This array may need to be reallocated in order to grow in size when new elements are inserted, which implies allocating a new array and moving all elements to it. This is a relatively expensive task in terms of processing time, and thus, vectors do not reallocate each time an element is added to the container.

Instead, vector containers may allocate some extra storage to accommodate for possible growth, and thus the container may have an actual [capacity](http://www.cplusplus.com/vector::capacity) greater than the storage strictly needed to contain its elements (i.e., its [size](http://www.cplusplus.com/vector::size)). Libraries can implement different strategies for growth to balance between memory usage and reallocations, but in any case, reallocations should only happen at logarithmically growing intervals of [size](http://www.cplusplus.com/vector::size) so that the insertion of individual elements at the end of the vector can be provided withamortized constant timecomplexity (see [push_back](http://www.cplusplus.com/vector::push_back)).

Therefore, compared to arrays, vectors consume more memory in exchange for the ability to manage storage and grow dynamically in an efficient way.

Compared to the other dynamic sequence containers ([deques](http://www.cplusplus.com/deque), [lists](http://www.cplusplus.com/list) and [forward_lists](http://www.cplusplus.com/forward_list)), vectors are very efficient accessing its elements (just like arrays) and relatively efficient adding or removing elements from its [end](http://www.cplusplus.com/vector::end). For operations that involve inserting or removing elements at positions other than the end, they perform worse than the others, and have less consistent iterators and references than [lists](http://www.cplusplus.com/list) and [forward_lists](http://www.cplusplus.com/forward_list).

Vector constructors
Vector operators
    assign
    at
    back
    begin
    capacity
    clear
    empty
    end
    erase
    front
    insert
    max_size
    pop_back
    push_back
    rbegin
    rend
    reserve
    resize
    size
    swap

<http://www.cplusplus.com/reference/vector/vector>

## C++ Lists

List constructors
List operators
Container constructors & destructors
    assign
    back
    begin
    clear
    empty
    end
    erase
    front
    insert
    max_size
    merge
    pop_back
    pop_front
    push_back
    push_front
    rbegin
    remove
    remove_if
    rend
    resize
    reverse
    size
    sort
    splice
    swap
    unique

## C++ Double-ended Queues

Container constructors
Container operators
Container [] operator
Container constructors & destructors
    assign
    at
    back
    begin
    clear
    empty
    end
    erase
    front
    insert
    max_size
    pop_back
    pop_front
    push_back
    push_front
    rbegin
    rend
    resize
    size
    swap

## C++ Priority Queues

Priority queue constructors
    empty
    pop
    push
    size
    top

## C++ Queues

Queue constructor
    back
    empty
    front
    pop
    push
    size

## C++ Stacks

Stack constructors
    empty
    pop
    push
    size
    top

## C++ Sets

Sets are a part of the C++ STL. Sets are containers that store unique elements following a specific order. Here are some of the frequently used member functions of sets:

```c++
Declaration
    set<int>s; //Creates a set of integers

Size
    int length=s.size(); //Gives the size of the set

Insert
    s.insert(x); //Inserts an integer x into the set s

Erasing an element
    s.erase(val); //Erases an integer val from the set s

Finding an element
    set<int>::iterator itr=s.find(val); //Gives the iterator to the element val if it is found otherwise returns s.end()
Ex: set<int>::iterator itr=s.find(100); //If 100 is not present then it==s.end()
```

<https://www.geeksforgeeks.org/set-in-cpp-stl>

Set constructors & destructors

Set operators

begin

clear

count

empty

end

equal_range

erase

find

insert

key_comp

lower_bound

max_size

rbegin

rend

size

swap

upper_bound

value_comp

## C++ Multisets

Container constructors & destructors

Container operators

begin

clear

count

empty

end

equal_range

erase

find

insert

key_comp

lower_bound

max_size

rbegin

rend

swap

upper_bound

value_comp

## C++ Maps

Maps are a part of the C++ STL.Maps are associative containers that store elements formed by a combination of a key value and a mapped value, following a specific order.The mainly used member functions of maps are:

- Map Template:
    `std::map <key_type, data_type>`

- Declaration:
    `map<string,int>m; //Creates a map m where key_type is of type string and data_type is of type int.`

- Size:
    `int length=m.size(); //Gives the size of the map.`

- Insert:
    `m.insert(make_pair("hello",9)); //Here the pair is inserted into the map where the key is "hello" and the value associated with it is 9.`

- Erasing an element:
    `m.erase(val); //Erases the pair from the map where the key_type is val.`

- Finding an element:

    ```c++
    map<string,int>::iterator itr=m.find(val); //Gives the iterator to the element val if it is found otherwise returns m.end()
    Ex: map<string,int>::iterator itr=m.find("Maps"); //If Maps is not present as the key value then itr==m.end().
    ```

- Accessing the value stored in the key:
    To get the value stored of the key "MAPS" we can do m ["MAPS"] or we can get the iterator using the find function and then by itr->second we can access the value.

- Updating an element

```c++
map<string,int>::iterator find_itr = students.find(name);
if (find_itr == students.end()) {
    students.insert(make_pair(name, marks));
} else {
    find_itr->second = find_itr->second + marks;
}
```

<https://www.geeksforgeeks.org/map-associative-containers-the-c-standard-template-library-stl>

Map Constructors & Destructors

Map operators

begin

clear

count

empty

end

equal_range

erase

find

insert

key_comp

lower_bound

max_size

rbegin

rend

size

swap

upper_bound

value_comp

## C++ Multimaps

Multimap constructors & destructors

Multimap operators

begin

clear

count

empty

end

find

equal_range

erase

insert

key_comp

lower_bound

max_size

rbegin

rend

size

swap

upper_bound

value_comp

## C++ Bitsets

Bitset Operators

Bitset Constructors

any

count

flip

none

reset

set

size

test

to_string

to_ulong

<https://www.cppreference.com/Cpp_STL_ReferenceManual.pdf>
