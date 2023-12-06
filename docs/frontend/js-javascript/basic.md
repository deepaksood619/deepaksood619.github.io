# Basic

https://medium.freecodecamp.org/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e

## Datatypes

1. Numbers (primitive)
2. Strings (primitive)
3. Boolean (primitive)
4. Null (trivial)

   null is the absence of a value. It is an assignment value that can be assigned to a variable as a representation of 'no-value'.

5. Undefined (trivial)

   Undefined is the absence of a definition. It is used as the default value for uninitialized variables, function arguments that were not provided and missing properties of objects. Functions returnundefined when nothing has been explicitly returned.

6. Object (composite) (Non-primitive)
7. Symbol (ES6)

**Falsy values:** `"",0, null, undefined, NaN, false`

**Truthy values:** `'hello', '0', ' ', ([]), (function() {})`

## Comments

`// and /**/`

## Variables

- Not starting with number
- Can start with underscore and characters
- Declared using var keyword
- Untyped language ( var foo ) can hold value of any data type
- Scope - Global and Local

### var

The variable statement declares a variable, optionally initializing it to a value.

### let

The let statement declares a block scope local variable, optionally initializing it to a value.

let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the [var](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/var) keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

### const

Constants are block-scoped, much like variables defined using the [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.

This declaration creates a constant whose scopecan be either global or local to the blockin which it is declared. Global constants do not become properties of the window object, unlike [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) variables. An initializer for a constant is required; that is, you must specify its value in the same statement in which it's declared (which makes sense, given that it can't be changed later).

Theconstdeclarationcreates a read-only reference to a value. It doesnotmean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its parameters) can be altered.

All the considerations about the "[temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)" apply to both [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) andconst.

A constant cannot share its name with a function or a variable in the same scope.

| Keyword | Scope          | Hoisting | Can Be Reassigned | Can Be Redeclared |
|---------|----------------|----------|-------------------|-------------------|
| var     | Function scope | Yes      | Yes               | Yes               |
| let     | Block scope    | No       | Yes               | No                |
| const   | Block scope    | No       | No                | No                |

## Keywords

| | | | |
|----------|------------|------------|--------------|
| abstract | else       | instanceof | switch       |
| boolean  | enum       | int        | synchronized |
| break    | export     | interface  | this         |
| byte     | extends    | long       | throw        |
| case     | false      | native     | throws       |
| catch    | final      | new        | transient    |
| char     | finally    | null       | true         |
| class    | float      | package    | try          |
| const    | for        | private    | typeof       |
| continue | function   | protected  | var          |
| debugger | goto       | public     | void         |
| default  | if         | return     | volatile     |
| delete   | implements | short      | while        |
| do       | import     | static     | with         |
| double   | in         | super      |             |

## Operators

### Arithmetic Operators

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus / Remainder (%)
- Exponentiation (**)
- Increment (++)
- Decrement (--)
- Unary Negation (-)
- Unary Plus (+)

### Comparison Operators

- Equal ( == )
- Not Equal ( != )

 Inequality operator will convert data types of values while comparing

 1. 3 != '3' // true
 2. 3 != 3 // false
 3. 3 != "3" // true

- Greater than ( `>` )
- Less than ( `<` )
- Greater than or Equal to ( `>=` )
- Less than or Equal to ( `<=` )
- ===
- !== (Strict inequality operator)

 It means "Strictly Not Equal". Strict inequality will not convert data types.

 1. 3 !== 3 // false
 2. 3 !== '3' // true
 3. 4 !== 3 // true

### Logical or Relational Operators

- Logical AND (&&)
- Logical OR ( || )
- Logical NOT ( ! )

### Bitwise Operators

- Bitwise AND ( & )
- Bitwise OR ( | )
- Bitwise XOR ( ^ )
- Bitwise Not ( ~ )
- Left Shift ( `>>` )
- Right Shift ( `<<` )
- Right Shift with Zero ( `>>>` )

### Assignment Operators

- Simple assignment ( = )
- Add and assignment ( += )
- Subtract and assignment ( -= )
- Multiply and assignment ( *= )
- Divide and assignment ( /= )
- Modulus and assignment ( %= )

### Conditional (or ternary) Operator ( (condition ) ? True : False )

### Typeof Operator

Unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand.

### in

The in operator returns true if the specified property is in the specified object or its prototype chain.

```js
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees // returns true
3 in trees // returns true
6 in trees // returns false
'bay' in trees // returns false (you must specify the
// index number, not the value at that index)
'length' in trees // returns true (length is an Array property)
Symbol.iterator in trees // returns true (arrays are iterable, works only in ES2015+)

// Predefined objects
'PI' in Math // returns true

// Custom objects
var mycar = {make: 'Honda', model: 'Accord', year: 1998};
'make' in mycar // returns true
'model' in mycar // returns true
```

## Control Statements

1. If statement
2. If-else statement
3. If - else - if statement
4. switch

The switch statement evaluates an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators), matching the expression's value to acaseclause, and executes [statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements) associated with that case, as well as statements incases that follow the matching case.

## Hoisting

The behavior of "moving"varandfunctiondeclarations to the top of their respective scopes during the compilation phase is calledhoisting.

Function declarations are completely hoisted. This means that a declared function can be called before it is defined.

Variables are partially hoisted.vardeclarations are hoisted but not its assignments.

let and const are not hoisted.

all variables (var) are declared at top of any function scope (includes function declaration)

### var hoisting

Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.

## Closure

A closure is the combination of a function and the lexical environment from which it was declared. Closure allows a function to access variables from an enclosing scope-environment - even after it leaves the scope in which it was declared.

## Immediate Invoked Function Expression (IIFE)

A JS programming language idiom which produces a lexical scope using JS's function scoping. It can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

An IIFE is a function expression that is called immediately after you define it. It is usually used when you want to create a new variable scope.

Contextis most often determined by how a function is invoked. It always refers to the value ofthisin a particular part of your code.

Scope refers to the visibility of variables.

`( function foo() { } )();`

## When would you use an IIFE

When we want to control the scope of variables of a function. This function will not be available globally to be called from.

## Naming Conventions

JSON Key must be used as camelCase or snake_case.

Google follows camelCase

## Boolean

Any object of which the value is not [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null), including aBooleanobject whose value isfalse, evaluates totruewhen passed to a conditional statement. For example, the condition in the following [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement evaluates to true:

```js
var x = new Boolean(false);
if (x) {
// this code is executed
}

if (false) {
   // this code is not executed
}

if (1) {
   // this code is executed
}

if (0) {
   // this code is not executed
}
```

## String functions

### String.length

### String.prototype.split()

### String.prototype.replace()

- Ex - **str = str.replace(/[^a-z]*/g, "");**
- Ex - str = str.replace(/[^a-z0-9]*/g, "")

### String.prototype.toLowerCase()

### String.prototype.toUpperCase()

### String.prototype.slice()

   ```js
   var str ="Hello world!";
   var res = str.slice(1,5); // ello
   ```

### String.prototype.substr()

   The **substr()** method returns the characters in a string beginning at the specified location through the specified number of characters.

### String.prototype.substring()

   The **substring()** method returns a subset of astringbetween one index and another, or through the end of the string.

### String.prototype.indexOf()

   The **indexOf()** method returns the index within the calling [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object of the first occurrence of the specified value, starting the search atfromIndex. Returns -1 if the value is not found.

### String.prototype.charCodeAt()

   The **charCodeAt()** method returns an integer between 0 and 65535 representingthe UTF-16 code unit at the given index

### String.fromCharCode()

   The static **String.fromCharCode()** method returns a string created from the specified sequence of UTF-16 code units.

### String.prototype.match()

   The **match()** method retrieves the matches when matching a *string* against a *regular expression*.

Bracket notation for getting string characters

Strings are immutable

```js
Var myStr = "Bob";
myStr [0] = "J"; // error
```

## Arrays

### Array.prototype.push()

### Array.prototype.pop()

### Array.prototype.shift()

The **shift()** method removes the **first** element from an array and returns that removed element. This method changes the length of the array.

### Array.prototype.unshift()

### Array.prototype.slice()

### Array.prototype.splice()

The **splice()** method changes the contents of an array by removing existing elements and/or adding new elements.

*Syntax - array*.splice(*start [*, *deleteCount [*, *item1 [*, *item2 [*, *...]]]]*)

### Array.prototype.reverse()

### Array.prototype.join()

### Array.prototype.find()

The **find()** method returns the **value** of the first element in the array that satisfies the provided testing function. Otherwise [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) is returned.

```js
function isBigEnough(element) {
   return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130
```

### Array.prototype.indexOf()

The**indexOf()** method returns the first index at which a given element can be found in the array, or -1 if it is not present.

### Array.prototype.includes()

The **includes()** method determines whether an array includes a certain element, returningtrueorfalseas appropriate.

### Array.prototype.sort()

The **sort()** method sorts the elements of an array [*in place*](https://en.wikipedia.org/wiki/In-place_algorithm) and returns the array. The sort is not necessarily [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability). The default sort order is according to string Unicode code points.

```js
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2];
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' is mix of two characters '1' and '0' so '10' is before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
return a - b;
});
console.log(numbers);
```

### Array isArray()

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar'); // false
Array.isArray(undefined); // false
```

## Loops

### For

- **foreach**

foreachis an method that is available only in Array objects. It allows you to iterate through elements of an array. When invoked it takes a callback function and invokes the callback once for every array element. The callback can access both index and value of the array elements.foreachis available only for looping arrays.

### for in

for inis used to loop through properties of an object. It can be any object.for inallows you to access the keys of the object but doesn't provide reference to the values. In JavaScript object properties themselves have internal properties. One of the internal properties is Enumerable for in will only walkthrough a property if it has Enumerbale set to true. It not used to iterate elements of an collection rather used to iterate properties of objects.

### for....of

The **for...ofstatement** creates a loop iterating over [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)(including the built-in [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), e.g. theArray-like [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/arguments) or [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) objects, [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), and user-defined iterables), invoking a custom iteration hook with statements to be executed for the value of each distinct property of the object.

### While

## Objects (JSON - JavaScript Object Notation)

## Accessing Objects Properties with the

1. **Dot Operator**
2. **Bracket Notation**

### Arguments Object

It can be converted to a realArray:

```js
var args = Array.prototype.slice.call(arguments); // preferred
var args = [].slice.call(arguments);

// ES2015, does not work sometimes
const args = Array.from(arguments);
```

### Object.prototype.hasOwnProperty() // true or false

### Object.keys()

```js
Ex - {'foo':'bar'}

// For getting the key from an object's 1st value
Object.keys [foo](0); // foo

// For getting the value from an object
foo [Object.keys [foo](0)); // bar
```

### Delete object key-value

`delete collection [key];`

## Adding properties to objects

```js
obj.bark = "bow-wow" // dot notation
obj ["bark"] = "bow-wow" // bracket notation
```

## Deleting properties from objects

```js
delete obj.bark; // dot notation
delete obj ["bark"] // bracked notation
```

## Random function

```js
Math.random(); // from 0(inclusive) to 1(exclusive)
Whole Number - Math.floor(Math.random() * 20); // from 0 to 19
Range - Math.floor(Math.random() * (max - min + 1)) + min
// from range min to max
```

## Regular Expressions

Used to find certain words or patterns inside of strings.

- Ex - /the/gi
- / is the start of the regular expression
- "the" is the pattern we want to match
- / is the end of the regular expression
- "g" means global, which causes the pattern to return all matches in the string, not just the first one
- "i" means that we want to ignore the case when searching for the pattern

## Special selectors

d - retreive digits
s - white spaces (" "(space), r(carriage return), n(newline), t(tab), f(form feed))
S - non-whitespace characters

Ex

```js
var re = /^(1s?)?((d{3})|d{3})[s-]?d{3}[s-]?d{4}$/;
return re.test(str);
```

## String.prototype.match()

`str.match(re)`

## Object Oriented and Functional Programming

### Constructor

```js
var Car = function() {
   this.wheels = 4;
   this.engines = 1;
   this.seats = 5;
};

// this variable refers to the new object being created by the constructor

```

So when we write,

`this.wheels = 4;`

inside of the constructor we are giving the new object it creates a property called wheels with a value of 4.

### Instances of objects

`var myCar = new Car()`

### Parametrized Constructor

```js
var myCar = new Car(6, 3, 1)
var Car = function(wheels, seats, engines) {
this.wheels = wheels;
this.seats = seats;
this.engines = engines;
};
```

### Map

The map method is a convenient way to iterate through arrays. Here's an example usage:

```js
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
return val * 4;
});

console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray); // returns [1, 2, 3]
```

The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. Note that it does not modify the original array.

### Reduce

The array method reduce is used to iterate through an array and condense it into one value.

To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).

The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.

reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.

Here is an example of reduce being used to subtract all the values of an array:

```js
var singleVal = array.reduce(function(previousVal, currentVal) {
return previousVal - currentVal;
}, 0);
```

### Filter

The filter method is used to iterate through an array and filter out elements where a given condition is not true.

filter is passed a callback function which takes the current value (we've called that val) as an argument.

Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

The following code is an example of using filter to remove array elements that are equal to five:

Note: We omit the second and third arguments since we only need the value

```js
array = array.filter(function(val) {
return val !== 5;
});
```

### Sort

You can use the method sort to easily sort the values in an array alphabetically or numerically.

Unlike the previous array methods we have been looking at, sort actually alters the array in place. However, it also returns this sorted array.

sort can be passed a compare function as a callback. The compare function should return a negative number if ashould be before b, a positive number if a should be after b, or 0 if they are equal.

If no compare (callback) function is passed in, it will convert the values to strings and sort alphabetically.

Here is an example of using sort with a compare function that will sort the elements from smallest to largest number:

```js
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
return a - b;
});
```

Use sort to sort array from largest to smallest.

### Reverse

You can use the reverse method to reverse the elements of an array.

reverse is another array method that alters the array in place, but it also returns the reversed array.

```js
var myArray = [1, 2, 3];
myArray.reverse();
// returns [3, 2, 1]
```

### Concat

concat can be used to merge the contents of two arrays into one.

concat takes an array as an argument and returns a new array with the elements of this array concatenated onto the end.

Here is an example of concat being used to concatenate otherArray onto the end of oldArray:

`newArray = oldArray.concat(otherArray);`

### Split

You can use the split method to split a string into an array.

split uses the argument you pass in as a delimiter to determine which points the string should be split at.

Here is an example of split being used to split a string at every s character:

`var array = string.split('s');`

### Join

We can use the join method to join each element of an array into a string separated by whatever delimiter you provide as an argument.

The following is an example of using join to join all of the elements of an array into a string with all the elements separated by word and:

```js
var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"
```

## Built-in functions

### Conversion

```js
parseFloat('43.1')
parseInt('45') // always use the floor value if float is passed
```

## Destructuring assignment / Spread operator

The destructuring assignmentsyntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// expected output: Array [30,40,50]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript

## Spread Syntax

Spread syntax(...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter

- Object destructuring is new syntax introduced in ES6. It helps create variables by extracting the object's properties in a much simpler way.
- If you are working with (or planning to use) a framework/library likeangular, react, orvue, you will be using a lot of object destructuring syntax.
- Object destructuring and Spread syntax are not the same thing.
- Spreadsyntax (also known as the Spread Operator) is used to copy the enumerable properties of an object to create a clone of it. We can also update an object or merge with another object using the spread syntax.
- TheRestparameter is kind of the opposite of theSpreadsyntax. It helps to consolidate (or collect) the remaining object properties into a new object while destructuring is done.

## Others

https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea
