# Others

## Relationships

inheritance (is-a relationship)

aggregation (has-a relationship)

## Loitering

Holding the reference to an object, when it is no longer needed.

## Reentrency

In computing, a computer program or subroutine is called reentrant if it can be interrupted in the middle of its execution and then safely be called again before its previous invocations complete execution. The interruption could be caused by an internal action such as a jump or call, or by an external action such as an interrupt or signal. Once the reentered invocation completes, the previous invocations will resume correct execution.

## Fuzzing

Fuzzing is a technique for amplifying race conditions.

In this technique Thread.sleep is added before and after every statement.

## Conway's Law

Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.

Any piece of software reflects the organizational structure that produced it.

If you have four teams working on a compiler you will end up with a four pass compiler

## Semantic Versioning (SemVer)

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes,

- MINOR version when you add functionality in a backwards-compatible manner, and

- PATCH version when you make backwards-compatible bug fixes.

<https://semver.org>

## Calendar Versioning (CalVer)

CalVer is a versioning convention based on your project's release calendar, instead of arbitrary numbers.

## YYYY.MINOR.MICRO - 2020.1.1

<https://calver.org>
<https://www.wikiwand.com/en/Software_versioning>

## What is Dynamic Binding (late binding)?

Binding refers to the linking of a procedure call to the code to be executed in response to the call. Dynamic binding means that the code associated with a given procedure call is not known until the time of the call at run-time.
Late binding, dynamic binding, ordynamic linkageis a computer programming mechanism in which the method being called upon an object or the function being called with arguments is looked up by name at [runtime](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)).
With [early binding](https://en.wikipedia.org/wiki/Early_binding), or [static binding](https://en.wikipedia.org/wiki/Static_binding), in an [object-oriented language](https://en.wikipedia.org/wiki/Object-oriented_programming), the compilation phase fixes all types of variables and expressions. This is usually stored in the compiled program as an offset in a [virtual method table](https://en.wikipedia.org/wiki/Virtual_method_table)("v-table") and is very efficient. With late binding the compiler does not read enough information to verify the method exists or bind its slot on the v-table. Instead the method is looked up by name at runtime.
The primary advantage of using late binding in [Component Object Model](https://en.wikipedia.org/wiki/Component_Object_Model)(COM) programming is that it does not require the compiler to reference the libraries that contain the object at [compile time](https://en.wikipedia.org/wiki/Compile_time). This makes the compilation process more resistant to version conflicts, in which the class's v-table may be accidentally modified. (This is not a concern in [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation)-compiled platforms such as .NET or Java, because the v-table is created at runtime by the [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) against the libraries as they are being loaded into the running application.)
<https://en.wikipedia.org/wiki/Late_binding>

## Virtual Method Table

Avirtual method table(VMT), virtual function table, virtual call table, [dispatch table](https://en.wikipedia.org/wiki/Dispatch_table), vtable, orvftableis a mechanism used in a [programming language](https://en.wikipedia.org/wiki/Programming_language) to support [dynamic dispatch](https://en.wikipedia.org/wiki/Dynamic_dispatch)(or [run-time](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase))[method](https://en.wikipedia.org/wiki/Method_(computer_programming))[binding](https://en.wikipedia.org/wiki/Name_binding)).
Whenever a class defines a [virtual function](https://en.wikipedia.org/wiki/Virtual_function)(or method), most compilers add a hidden member variable to the class that points to an array of pointers to (virtual) functions called the virtual method table. These pointers are used at runtime to invoke the appropriate function implementations, because at compile time it may not yet be known if the base function is to be called or a derived one implemented by a class that inherits from the base class.
There are many different ways to implement such dynamic dispatch, but use of virtual method tables is especially common among [C++](https://en.wikipedia.org/wiki/C%2B%2B) and related languages (such as [D](https://en.wikipedia.org/wiki/D_(programming_language)) and [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language))). Languages that separate the programmatic interface of objects from the implementation, like [Visual Basic](https://en.wikipedia.org/wiki/Visual_Basic) and [Delphi](https://en.wikipedia.org/wiki/Object_Pascal), also tend to use this approach, because it allows objects to use a different implementation simply by using a different set of method pointers.
Suppose a program contains three [classes](https://en.wikipedia.org/wiki/Class_(computer_programming)) in an [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) hierarchy: a [superclass](https://en.wikipedia.org/wiki/Superclass_(computer_science)), Cat, and two [subclasses](https://en.wikipedia.org/wiki/Subclass_(computer_science)), HouseCatandLion. ClassCatdefines a [virtual function](https://en.wikipedia.org/wiki/Virtual_function) namedspeak, so its subclasses may provide an appropriate implementation (e.g. eithermeoworroar). When the program calls thespeakfunction on aCatreference (which can refer to an instance ofCat, or an instance ofHouseCatorLion), the code must be able to determine which implementation of the function the call should bedispatchedto. This depends on the actual class of the object, not the class of the reference to it (Cat). The class cannot generally be determinedstatically(that is, at [compile time](https://en.wikipedia.org/wiki/Compile_time)), so neither can the compiler decide which function to call at that time. The call must be dispatched to the right functiondynamically(that is, at [run time](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase))) instead.
<https://en.wikipedia.org/wiki/Virtual_method_table>

## Dynamic Dispatch

In [computer science](https://en.wikipedia.org/wiki/Computer_science), dynamic dispatchis the process of selecting which implementation of a [polymorphic](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) operation ([method](https://en.wikipedia.org/wiki/Method_(computer_programming)) or function) to call at [run time](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)). It is commonly employed in, and considered a prime characteristic of, [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)(OOP) languages and systems.
Object-oriented systems model a problem as a set of interacting objects that enact operations referred to by name. Polymorphism is the phenomenon wherein somewhat interchangeable objects each expose an operation of the same name but possibly differing in behavior. As an example, aFileobject and aDatabaseobject both have aStoreRecordmethod that can be used to write a personnel record to storage. Their implementations differ. A program holds a reference to an object which may be either aFileobject or aDatabaseobject. Which it is may have been determined by a run-time setting, and at this stage, the program may not know or care which. When the program callsStoreRecordon the object, something needs to choose which behavior gets enacted. If one thinks of OOP as [sending messages](https://en.wikipedia.org/wiki/Message_passing) to objects, then in this example the program sends aStoreRecordmessage to an object of unknown type, leaving it to the run-time support system to dispatch the message to the right object. The object enacts whichever behavior it implements.
Dynamic dispatch contrasts withstatic dispatch, in which the implementation of a polymorphic operation is selected at [compile time](https://en.wikipedia.org/wiki/Compile_time). The purpose of dynamic dispatch is to defer the selection of an appropriate implementation until the run time type of a parameter (or multiple parameters) is known.
Dynamic dispatch is different from [late binding](https://en.wikipedia.org/wiki/Late_binding)(also known as dynamic binding).[Name binding](https://en.wikipedia.org/wiki/Name_binding) associates a name with an operation. A polymorphic operation has several implementations, all associated with the same name. Bindings can be made at compile time or (with late binding) at run time. With dynamic dispatch, one particular implementation of an operation is chosen at run time. While dynamic dispatch does not imply late binding, late binding does imply dynamic dispatch, since the implementation of a late-bound operation is not known until run time.
<https://en.wikipedia.org/wiki/Dynamic_dispatch>

## Guard Clauses Technique

[Nesting "If Statements" Is Bad. Do This Instead.](https://www.youtube.com/shorts/Zmx0Ou5TNJs)
