# Syntax

## Compile-time constants

| **Name**              | **Description**                                                                                                                                                                                                                                 |
|----------------|--------------------------------------------------------|
| **LINE**      | The current line number of the file.                                                                                                                                                                                                            |
| **FILE**      | The full path and filename of the file with symlinks resolved. If used inside an include, the name of the included file is returned.                                                                                                            |
| **DIR**       | The directory of the file. If used inside an include, the directory of the included file is returned. This is equivalent todirname(**FILE**). This directory name does not have a trailing slash unless it is the root directory.          |
| **FUNCTION**  | The function name, or{closure}for anonymous functions.                                                                                                                                                                                        |
| **CLASS**     | The class name. The class name includes the namespace it was declared in (e.g.FooBar). Note that as of PHP 5.4 **CLASS** works also in traits. When used in a trait method, **CLASS** is the name of the class the trait is used in. |
| **TRAIT**     | The trait name. The trait name includes the namespace it was declared in (e.g.FooBar).                                                                                                                                                       |
| **METHOD**    | The class method name.                                                                                                                                                                                                                          |
| **NAMESPACE** | The name of the current namespace.                                                                                                                                                                                                              |
| **ClassName::class**  | The fully qualified class name. See also [::class](https://www.php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class).                                                                                                      |

<https://www.php.net/manual/en/language.constants.predefined.php>

All PHP code must be included inside one of the three special markup tags ATE are recognised by the PHP Parser.

```php
<?php PHP code goes here ?> #Canonical PHP tags
<?    PHP code goes here ?> #short-open (SGML-style) tags
<script language = "php"> PHP code goes here </script> #HTML script tags
<%...%> #ASP-style tags
```

- PHP is whitespace insensitive
- PHP is case sensitive
- Statements are expressions terminated by semicolons
- Braces make blocks

## Variables

The main way to store information in the middle of a PHP program is by using a variable.

- All variables in PHP are denoted with a leading dollar sign ($).
- The value of a variable is the value of its most recent assignment.
- Variables are assigned with the = operator, with the variable on the left-hand side and the expression to be evaluated on the right.
- Variables can, but do not need, to be declared before assignment.
- Variables in PHP do not have intrinsic types - a variable does not know in advance whether it will be used to store a number or a string of characters.
- Variables used before they are assigned have default values.
- PHP does a good job of automatically converting types from one to another when necessary.
- PHP variables are Perl-like.

## Predefined variables

- PHP Superglobals
- Server variables: $_SERVER

$_SERVER is an array containing information such as headers, paths, and script locations. The entries in this array are created by the web server. There is no guarantee that every web server will provide any of these.

<https://www.tutorialspoint.com/php/php_predefined_variables.htm>

## Data Types

PHP has a total of **eight data types** which we use to construct our variables

- **Integers**

are whole numbers, without a decimal point, like 4195

- **Doubles**

are floating-point numbers, like 3.14159 or 49.1

- **Booleans**

have only two possible values either true or false

Here are the rules for determine the "truth" of any value not already of the Boolean type

- If the value is a number, it is false if exactly equal to zero and true otherwise.
- If the value is a string, it is false if the string is empty (has zero characters) or is the string "0", and is true otherwise.
- Values of type NULL are always false.
- If the value is an array, it is false if it contains no other values, and it is true otherwise. For an object, containing a value means having a member variable that has been assigned a value.
- Valid resources are true (although some functions that return resources when they are successful will return FALSE when unsuccessful).
- Don't use double as Booleans.

- **NULL**

is a special type that only has one value: NULL

A variable that has been assigned NULL has the following properties −

- It evaluates to FALSE in a Boolean context.
- It returns FALSE when tested with IsSet() function.

- **Strings**

are sequences of characters, like 'PHP supports string operations.'

Singly quoted strings are treated almost literally, whereas doubly quoted strings replace variables with their values as well as specially interpreting certain character sequences.

## Concatenation

To concatenate two string variables together, use the dot (.) operator −

`echo $string1 . " " . $string2;`

The strlen() function is used to find the length of a string.

The strpos() function is used to search for a string or character within a string.

`echo strpos("Hello world!","world");`

6

- **Arrays**

Are named and indexed collections of other values

## An array in PHP is actually an ordered map

There are three different kind of arrays and each array value is accessed using an ID c which is called array index.

- **Numeric array**

An array with a numeric index. Values are stored and accessed in linear fashion.

`$numbers = array( 1, 2, 3, 4, 5);`

- **Associative array**

An array with strings as index. This stores element values in association with key values rather than in a strict linear index order

$salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500);

- **Multidimensional array−** An array containing one or more arrays and values are accessed using multiple indices

<https://www.tutorialspoint.com/php/php_arrays.htm>

- **Objects**

are instances of programmer-defined classes, which can package up both other kinds of values and functions that are specific to the class.

- **Resources**

are special variables that hold references to resources external to PHP (such as database connections).

The first five aresimple types, and the next two (arrays and objects) are compound - the compound types can package up other arbitrary values of arbitrary type, whereas the simple types cannot.

## Scope

Scope can be defined as the range of availability a variable has to the program in which it is declared. PHP variables can be one of four scope types

- [Local variables](https://www.tutorialspoint.com/php/php_local_variables.htm)
- [Function parameters](https://www.tutorialspoint.com/php/php_function_parameters.htm)
- [Global variables](https://www.tutorialspoint.com/php/php_global_variables.htm)

Use GLOBAL keyword

- [Static variables](https://www.tutorialspoint.com/php/php_static_variables.htm)

In contrast to the variables declared as function parameters, which are destroyed on the function's exit, a static variable will not lose its value when the function exits and will still hold that value should the function be called again.

Use STATIC keyword

## Constant

A constant is a name or an identifier for a simple value. A constant value cannot change during the execution of the script. By default, a constant is case-sensitive. By convention, constant identifiers are always uppercase. A constant name starts with a letter or underscore, followed by any number of letters, numbers, or underscores. If you have defined a constant, it can never be changed or undefined.

To define a constant you have to use define() function and to retrieve the value of a constant, you have to simply specifying its name. Unlike with variables, you do not need to have a constant with a $. You can also use the function constant() to read a constant's value if you wish to obtain the constant's name dynamically.

Only scalar data (boolean, integer, float and string) can be contained in constants.

## Differences between constants and variables are

- There is no need to write a dollar sign ($) before a constant, where as in Variable one has to write a dollar sign.
- Constants cannot be defined by simple assignment, they may only be defined using the define() function.
- Constants may be defined and accessed anywhere without regard to variable scoping rules.
- Once the Constants have been set, may not be redefined or undefined.

## PHP Magic constants

PHP provides a large number of predefined constants to any script which it runs.

There are five magical constants that change depending on where they are used. For example, the value of **LINE** depends on the line that it's used on in your script. These special constants are case-insensitive and are as follows −

A few "magical" PHP constants are given below −

| **Name** | **Description** |
|---|---|
| `__LINE__` | The current line number of the file. |
| `__FILE__` | The full path and filename of the file. If used inside an include, the name of the included file is returned. Since PHP 4.0.2, `__FILE__` always contains an absolute path whereas in older versions it contained relative path under some circumstances. |
| `__FUNCTION__` | The function name. (Added in PHP 4.3.0) As of PHP 5 this constant returns the function name as it was declared (case-sensitive). In PHP 4 its value is always lowercased. |
| `__CLASS__` | The class name. (Added in PHP 4.3.0) As of PHP 5 this constant returns the class name as it was declared (case-sensitive). In PHP 4 its value is always lowercased. |
| `__METHOD__` | The class method name. (Added in PHP 5.0.0) The method name is returned as it was declared (case-sensitive). |

## Decision Making

PHP supports following three decision making statements

- **if...else statement−** use this statement if you want to execute a set of code when a condition is true and another if the condition is not true
- **elseif statement−** is used with the if...else statement to execute a set of code ifoneof the several condition is true
- **switch statement−** is used if you want to select one of many blocks of code to be executed, use the Switch statement. The switch statement is used to avoid long blocks of if..elseif..else code.

<https://www.tutorialspoint.com/php/php_decision_making.htm>

## Loops

PHP supports following four loop types.

- **for−** loops through a block of code a specified number of times.
- **while−** loops through a block of code if and as long as a specified condition is true.
- **do...while−** loops through a block of code once, and then repeats the loop as long as a special condition is true.
- **foreach−** loops through a block of code for each element in an array.

## break

The PHPbreakkeyword is used to terminate the execution of a loop prematurely.

## continue

The PHPcontinuekeyword is used to halt the current iteration of a loop but it does not terminate the loop.

## Functions

## Pass by value

```php
<?php
    function addFunction($num1, $num2) {
    $sum = $num1 + $num2;
    echo "Sum of the two numbers is : $sum";
    }

    addFunction(10, 20);
?>
```

## Pass by Reference

It is possible to pass arguments to functions by reference. This means that a reference to the variable is manipulated by the function rather than a copy of the variable's value.

Any changes made to an argument in these cases will change the value of the original variable. You can pass an argument by reference by adding an ampersand to the variable name in either the function call or the function definition.

```php
<?php
    function addFive($num) {
    $num += 5;
    }

    function addSix(&$num) {
    $num += 6;
    }

    $orignum = 10;
    addFive( $orignum );

    echo "Original Value is $orignum<br />";

    addSix( $orignum );
    echo "Original Value is $orignum<br />";
?>
```

## Return value

A function can return a value using thereturnstatement in conjunction with a value or object. return stops the execution of the function and sends the value back to the calling code.

You can return more than one value from a function usingreturn array(1,2,3,4).

## Default values for function parameters

```php
<?php
    function printMe($param = NULL) {
    print $param;
    }

    printMe("This is test");
    printMe();
?>
```

## Dynamic function calls

```php
<?php
    function sayHello() {
    echo "Hello<br />";
    }

    $function_holder = "sayHello";
    $function_holder();
?>
```

<https://www.tutorialspoint.com/php/php_functions.htm>

<https://www.tutorialspoint.com/php/php_function_reference.htm>

## PHP Regular Expressions

PHP offers functions specific to two sets of regular expression functions, each corresponding to a certain type of regular expression

- POSIX Regular Expressions
- PERL Style Regular Expressions

<https://www.tutorialspoint.com/php/php_regular_expression.htm>

## Files IO

## Opening a file

The PHPfopen()function is used to open a file. It requires two arguments stating first the file name and then mode in which to operate.

## Reading a file

Once a file is opened usingfopen()function it can be read with a function calledfread(). This function requires two arguments. These must be the file pointer and the length of the file expressed in bytes.

The files length can be found using thefilesize()function which takes the file name as its argument and returns the size of the file expressed in bytes.

So here are the steps required to read a file with PHP.

- Open a file usingfopen()function.
- Get the file's length usingfilesize()function.
- Read the file's content usingfread()function.
- Close the file withfclose()function.

## Writing a file

A new file can be written or text can be appended to an existing file using the PHPfwrite()function. This function requires two arguments specifying afile pointerand the string of data that is to be written. Optionally a third integer argument can be included to specify the length of the data to write. If the third argument is included, writing would will stop after the specified length has been reached.

<https://www.tutorialspoint.com/php/php_files.htm>
