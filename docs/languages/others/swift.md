# Swift

Basic Syntax -

var str = "Hello world!"

var x = 10

Data Types -

- Int
- Float
- Double
- Bool
- String
- Character
- Optional
- Tuples

| **Type** | **Typical Bit Width** | **Typical Range**                           |
|---------|-------------------|--------------------------------------------|
| Int8     | 1byte                 | -127 to 127                                 |
| UInt8    | 1byte                 | 0 to 255                                    |
| Int32    | 4bytes                | -2147483648 to 2147483647                   |
| UInt32   | 4bytes                | 0 to 4294967295                             |
| Int64    | 8bytes                | -9223372036854775808 to 9223372036854775807 |
| UInt64   | 8bytes                | 0 to 18446744073709551615                   |
| Float    | 4bytes                | 1.2E-38 to 3.4E+38 (~6 digits)             |
| Double   | 8bytes                | 2.3E-308 to 1.7E+308 (~15 digits)          |

Type Aliases

typealias Feet = Int

typealias Feet = Int
var distance: Feet = 100
print(distance)

// 100

Type Safety

Type Inference

Variable Declaration

- var
- let

Type Annotations

We can provide atype annotationwhen we declare a variable, to be clear about the kind of values the variable can store.

Printing Variables

var varA = "Godzilla"
var varB = 1000.00

print("Value of (varA) is more than (varB) millions")

## Resources

<https://github.com/raywenderlich/swift-algorithm-club>

<https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/TheBasics.html#//apple_ref/doc/uid/TP40014097-CH5-ID309>

<https://www.tutorialspoint.com/swift>
