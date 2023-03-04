# Intro

C++ is a **compiled language**. For a program to run, its source text has to be processed by a compiler, producing object files, which are combined by a linker yielding an executable program. A C++ program typically consists of many source code files (usually simply called source files).

C++ is a **statically typed language**. That is, the type of every entity (e.g., object, value, name, and expression) must be known to the compiler at its point of use. The type of an object determines the set of operations applicable to it.

## Operators

## << - put to

The operator << (''put to'') writes its second argument onto its first.

std::cout << "Hello, World!n";

In this case, the string literal "Hello, World!n" is written onto the standard output stream std::cout.

## >> - get from

The type of the right-hand operand of >> determines what input is accepted, and its right-hand operand is the target of the input operation.

&, *, [] - When used in declarations, operators (such as &, ∗, and []) are called declarator operators

When we don't have an object to point to or if we need to represent the notion of "no object available" (e.g., for an end of a list), we give the pointer the value nullptr (''the null pointer''). There is only one nullptr shared by all pointer types

## C++ Member (dot [.] and arrow [->]) operator

The . (dot) operator and the -> (arrow) operator are used to reference individual members of classes, structures, and unions.

The dot operator is applied to the actual object. The arrow operator is used with a pointer to an object.

<https://www.tutorialspoint.com/cplusplus/cpp_member_operators>

## Constants

C++ supports two notions of immutability

- **const:** meaning roughly ''I promise not to change this value'' (§7.5). This is used primarily to specify interfaces, so that data can be passed to functions without fear of it being modified. The compiler enforces the promise made by const.
- **constexpr:** meaning roughly ''to be evaluated at compile time'' (§10.4). This is used primarily to specify constants, to allow placement of data in memory where it is unlikely to be corrupted, and for performance.

## Example

const int dmv = 17; // dmv is a named constant

int var = 17; // var is not a constant

constexpr double max1 = 1.4∗square(dmv); // OK if square(17) is a constant expression

constexpr double max2 = 1.4∗square(var); // error : var is not a constant expression

const double max3 = 1.4∗square(var); // OK, may be evaluated at run time

## Data Types

- Int ("%d"):32 Bit integer
- Long ("%ld"):64 bit integer
- Char ("%c"):Character type
- Float ("%f"):32 bit real value
- Double ("%lf"):64 bit real value

printf("%.9lf", double_val);

printf("%.3f", float_val);

## This Pointer

Every object in C++ has access to its own address through an important pointer calledthispointer. Thethispointer is an implicit parameter to all member functions. Therefore, inside a member function, this may be used to refer to the invoking object.

## C

<https://www.freecodecamp.org/news/the-c-beginners-handbook>

## Pointers in C

<https://www.freecodecamp.org/news/pointers-in-c-are-not-as-difficult-as-you-think>
