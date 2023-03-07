# Storage classes

<https://www.tutorialspoint.com/cplusplus/cpp_storage_classes.htm>

Storage classes defines the scope(visibility) and life-time of the variables and/or functions within a c++ program. These specifiers precede the type that they modify.

1. Auto

2. Register

3. Static

4. Extern

5. Mutable

6. Typedef (considered as storage class)

1. Auto

   - Can be used only within functions

   - Default storage class for all local variables declared

2. Register

   - Variable must be stored in register instead of ram

   - Maximum size equal to the size of the register

   - Can't apply unary & operator applied to it

   - Should be used for quick access like counters

   - Using register storage class doesn't guarantee that the variable will be stored in register.

3. Static

   - Instructs compiler to keep the local variable in existence during the life-time of the program instead of creating and destroying each time it comes into and goes out of the scope.

   - Making local variables static allows them to maintain their values between function calls.

   - The static modifier can also be applied to global variables. When this is done, it causes that variable's scope to be restricted to the file in which it is declared.

   - In C++ and java, when static is used on a class data member, it causes only one copy of that member to be shared between objects of its class.

Static is a keyword in C++ used to give special characteristics to an element. Static elements are allocated storage only once in a program lifetime in static storage area. And they have a scope till the program lifetime. Static Keyword can be used with following,

- Static variable in functions

- Static Class Objects

- Static member Variable in class

- Static Methods in class

<https://www.studytonight.com/cpp/static-keyword.php>

4. Extern

   - Extern storage class is only used to give a reference of a global variable that is visible to all the program files.

   - When we use extern the variable cannot be initialized as all it does is to point the variable name at a storage location that has previously been defined.

   - Extern is used to define a global variable or function in another file

   - The extern modifier is most used when there are two or more files that share the same global variables or functions.

5. Mutable (<http://www.geeksforgeeks.org/c-mutable-keyword>)

   - Applies only to class objects.

   - It allows a member of an object to override const member function. That is, a mutable member can be modified by a const member function.

   - Sometimes there is requirement to modify one or more data members of class struct through const function even though you don't want the function to update other members of class struct.

6. Typedef

Assign alternative names to existing types

```c++
#include <stdio.h>
int main()
{
    typedef int points;
    points x = 5;
    printf("%d ", x);
    return 0;
}
```
