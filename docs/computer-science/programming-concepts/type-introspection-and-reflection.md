# Type Introspection and Reflection

## Type Introspection

The ability of a program to examine the type or properties of an object at runtime.

Some languages even allow us to traverse the inheritance hierarchy to see if our object is derived from an inherited base class.

Ex - Java

if(obj instanceof Person){

Person p = (Person)obj;

p.walk();

}

## Reflection

The ability to modify object attributes at runtime.

Reflection is the ability of a computer program to examine and modify the structure and behavior (specifically the values, meta-data, properties and functions) of a program at runtime.

In layman'sterms, what this allows you to dois invoke a method on an object, instantiate a new object, or modify an attribute of an object -- all without knowing the names of the interfaces, fields, methods at compile time.

Because of the runtime-specificnature of reflection, it's more difficult to implement reflection in a statically-typed language compared to a dynamically-typed language because type checking occurs at compile time in a statically-typed language instead of at runtime.

However it is by no means impossible, as Java, C#, and other modern statically-typed languages allow for both type introspection and reflection (but not C++, which allows only type introspection and not reflection).
