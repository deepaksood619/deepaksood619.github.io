# Data Types

1. Boolean types

    They are boolean types and consists of the two predefined constants: (a) true (b) false

2. Numeric types

    They are again arithmetic types and they represents a) integer types or b) floating point values throughout the program.

3. String types

    A string type represents the set of string values. Its value is a sequence of bytes. Strings are immutable types that is once created, it is not possible to change the contents of a string. The predeclared string type is string.

4. Derived types

   - Pointer types
   - Aggregate types
       - Array types
       - Structure types
   - Union types
   - Function types
   - Slice types
   - Interface types
   - Map types
   - Channel types
   - Enumeration

## Integer Types

The predefined architecture-independent integer types are

1. uint8 - Unsigned 8-bit integers (0 to 255)
2. uint16 - Unsigned 16-bit integers (0 to 65535)
3. uint32 - Unsigned 32-bit integers (0 to 4294967295)
4. uint64 - Unsigned 64-bit integers (0 to 18446744073709551615)
5. int8 - Signed 8-bit integers (-128 to 127)
6. int16 - Signed 16-bit integers (-32768 to 32767)
7. int32 - Signed 32-bit integers (-2147483648 to 2147483647)
8. int64 - Signed 64-bit integers (-9223372036854775808 to 9223372036854775807)

The value of an n-bit integer is n bits and is represented using two's complement arithmetic operations.

## Floating Types

1. float32 - IEEE-754 32-bit floating-point numbers (single-precision)
2. float64 - IEEE-754 64-bit floating-point numbers
3. complex64 - Complex numbers with float32 real and imaginary parts
4. complex128 - Complex numbers with float64 real and imaginary parts

## Other Numeric Types

1. byte - same as uint8
2. rune - same as int32

    Go introduces a concept of Runes. While strings are used to represent a sequence of characters, runes are used to represent a single character.

    If you want to use a Rune, you have to surround a character with single quotation marks like 'A'. Go uses the Unicode standard for storing runes, so they can store any character on the earth.

3. uint - 32 or 64 bits
4. int - same size as uint
5. uintptr - an unsigned integer to store the uninterpreted bits of a pointer value

## Variable definition

```go
var i, j, k, int;
d = 42;
```

## Static Type Declaration in Go

A static type variable declaration provides assurance to the compiler that there is one variable available with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail of the variable. A variable declaration has its meaning at the time of compilation only, the compiler needs the actual variable declaration at the time of linking of the program.

## Dynamic Type Declaration / Type Inference in Go

A dynamic type variable declaration requires the compiler to interpret the type of the variable based on the value passed to it. The compiler does not require a variable to have type statically as a necessary requirement.

```go
var x float64 = 20.0
y := 42
```

## The lvalues and the rvalues in Go

There are two kinds of expressions in Go −

- `lvalue` − Expressions that refer to a memory location is called "lvalue" expression. An lvalue may appear as either the left-hand or right-hand side of an assignment.
- `rvalue` − The term rvalue refers to a data value that is stored at some address in memory. An rvalue is an expression that cannot have a value assigned to it which means an rvalue may appear on the right- but not left-hand side of an assignment.

Variables are lvalues and so may appear on the left-hand side of an assignment. Numeric literals are rvalues and so may not be assigned and can not appear on the left-hand side.
