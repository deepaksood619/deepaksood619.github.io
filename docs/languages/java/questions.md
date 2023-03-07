# Questions

## Topics

### Java

- Java Collections Framework
- Difference between HashSet and HashMap
- Dependency Injection
- Inversion of Control
- Concurrency vs Parallelism
- Interface

### View Patterns

- MVC
- MVVM

### SOLID Principles

### OOP Concepts (AEIP)

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

### Design Patterns

- Singleton
- Factory

### Android

- Contexts
- Layouts
    1. Drawer layout
    2. Linear layout
    3. Relative layout
    4. Constraint layout
    5. Coordinator layout
- Serializable vs Parcelable
- Jetpack

## Features

1. Object Oriented Programming
2. Platform Independent
3. Robust
4. Interpreted
5. Multi-threaded

**Why is Java Architectural Neutral?**

It's compiler generates an architecture-neutral object file format, which makes the compiled code to be executable on many processors, with the presence of Java runtime system.

**How Java enabled High Performance?**

Java uses Just-In-Time compiler to enable high performance. Just-In-Time compiler is a program that turns Java bytecode, which is a program that contains instructions that must be interpreted into instructions that can be sent directly to the processor.

**Why Java is considered dynamic?**

It is designed to adapt to an evolving environment. Java programs can carry extensive amount of run-time information that can be used to verify and resolve accesses to objects on run-time.

**What is Java Virtual Machine and how it is considered in context of Java's platform independent feature?**

When Java is compiled, it is not compiled into platform specific machine, rather into platform independent byte code. This byte code is distributed over the web and interpreted by virtual Machine (JVM) on whichever platform it is being run.

**What do you mean by Object?**

Object is a runtime entity and it's state is stored in fields and behavior is shown via methods. Methods operate on an object's internal state and serve as the primary mechanism for object-to-object communication.

**Define class?**

A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.

**What kind of variables a class can consist of?**

A class consist of Local variable, instance variables and class variables.

**What is a Local Variable?**

Variables defined inside methods, constructors or blocks are called local variables. The variable will be declared and initialized within the method and it will be destroyed when the method has completed.

**What is a Instance Variable?**

Instance variables are variables within a class but outside any method. These variables are instantiated when the class is loaded.

**What is a Class Variable?**

These are variables declared with in a class, outside any method, with the static keyword.

**What is Singleton class?**

Singleton class control object creation, limiting the number to one but allowing the flexibility to create more objects if the situation changes.

**What do you mean by Constructor?**

Constructor gets invoked when a new object is created. Every class has a constructor. If we do not explicitly write a constructor for a class the java compiler builds a default constructor for that class.

**List the three steps for creating an Object for a class?**

An Object is first declared, then instantiated and then it is initialized.

**What is the default value of byte datatype in Java?**

Default value of byte datatype is 0.

**What is the default value of float and double datatype in Java?**

Default value of float and double datatype in different as compared to C/C++. For float its 0.0f and for double it's 0.0d

**When a byte datatype is used?**

This data type is used to save space in large arrays, mainly in place of integers, since a byte is four times smaller than an int.

**What is a static variable?**

Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block.

**What do you mean by Access Modifier?**

Java provides access modifiers to set access levels for classes, variables, methods and constructors. A member has package or default accessibility when no accessibility modifier is specified.

**What is protected access modifier?**

Variables, methods and constructors which are declared protected in a superclass can be accessed only by the subclasses in other package or any class within the package of the protected members' class.

**What do you mean by synchronized Non Access Modifier?**

Java provides these modifiers for providing functionalities other than Access Modifiers, synchronized used to indicate that a method can be accessed by only one thread at a time.

**According to Java Operator precedence, which operator is considered to be with highest precedence?**

Postfix operators i.e () [] . is at the highest precedence.

**Variables used in a switch statement can be used with which datatypes?**

Variables used in a switch statement can only be a string, enum, byte, short, int, or char.

**When parseInt() method can be used?**

This method is used to get the primitive data type of a certain String.

**Why is String class considered immutable?**

The String class is immutable, so that once it is created a String object cannot be changed. Since String is immutable it can safely be shared between many threads , which is considered very important for multithreaded programming.

**Why is StringBuffer called mutable?**

The String class is considered as immutable, so that once it is created a String object cannot be changed. If there is a necessity to make alot of modifications to Strings of characters then StringBuffer should be used.

**What is the difference between StringBuffer and StringBuilder class?**

Use StringBuilder whenever possible because it is faster than StringBuffer. But, if thread safety is necessary then use StringBuffer objects.

**Which package is used for pattern matching with regular expressions?**

java.util.regex package is used for this purpose.

**java.util.regex consists of which classes?**

java.util.regex consists of three classes − Pattern class, Matcher class and PatternSyntaxException class.

**What is finalize() method?**

It is possible to define a method that will be called just before an object's final destruction by the garbage collector. This method is called finalize( ), and it can be used to ensure that an object terminates cleanly.

**What is an Exception?**

An exception is a problem that arises during the execution of a program. Exceptions are caught by handlers positioned along the thread's method invocation stack.

**What do you mean by Checked Exceptions?**

It is an exception that is typically a user error or a problem that cannot be foreseen by the programmer. For example, if a file is to be opened, but the file cannot be found, an exception occurs. These exceptions cannot simply be ignored at the time of compilation.

**Explain Runtime Exceptions?**

It is an exception that occurs that probably could have been avoided by the programmer. As opposed to checked exceptions, runtime exceptions are ignored at the time of compliation.

**Which are the two subclasses under Exception class?**

The Exception class has two main subclasses : IOException class and RuntimeException Class.

**When throws keyword is used?**

If a method does not handle a checked exception, the method must declare it using the throwskeyword. The throws keyword appears at the end of a method's signature.

**When throw keyword is used?**

An exception can be thrown, either a newly instantiated one or an exception that you just caught, by using throw keyword.

**How finally used under Exception Handling?**

The finally keyword is used to create a block of code that follows a try block. A finally block of code always executes, whether or not an exception has occurred.

**What things should be kept in mind while creating your own exceptions in Java?**

While creating your own exception −

- All exceptions must be a child of Throwable.
- If you want to write a checked exception that is automatically enforced by the Handle or Declare Rule, you need to extend the Exception class.
- You want to write a runtime exception, you need to extend the RuntimeException class.

**Define Inheritance?**

It is the process where one object acquires the properties of another. With the use of inheritance the information is made manageable in a hierarchical order.

**When super keyword is used?**

If the method overrides one of its superclass's methods, overridden method can be invoked through the use of the keyword super. It can be also used to refer to a hidden field.

**What is Polymorphism?**

Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

**What is Abstraction?**

It refers to the ability to make a class abstract in OOP. It helps to reduce the complexity and also improves the maintainability of the system.

**What is Abstract class?**

These classes cannot be instantiated and are either partially implemented or not at all implemented. This class contains one or more abstract methods which are simply method declarations without a body.

**When Abstract methods are used?**

If you want a class to contain a particular method but you want the actual implementation of that method to be determined by child classes, you can declare the method in the parent class as abstract.

**What is Encapsulation?**

It is the technique of making the fields in a class private and providing access to the fields via public methods. If a field is declared private, it cannot be accessed by anyone outside the class, thereby hiding the fields within the class. Therefore encapsulation is also referred to as data hiding.

**What is the primary benefit of Encapsulation?**

The main benefit of encapsulation is the ability to modify our implemented code without breaking the code of others who use our code. With this Encapsulation gives maintainability, flexibility and extensibility to our code.

**What is an Interface?**

An interface is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.

**Give some features of Interface?**

It includes −

1. Interface cannot be instantiated

2. An interface does not contain any constructors.

3. All of the methods in an interface are abstract.

**Define Packages in Java?**

A Package can be defined as a grouping of related types(classes, interfaces, enumerations and annotations ) providing access protection and name space management.

**Why Packages are used?**

Packages are used in Java in-order to prevent naming conflicts, to control access, to make searching/locating and usage of classes, interfaces, enumerations and annotations, etc., easier.

**What do you mean by Multithreaded program?**

A multithreaded program contains two or more parts that can run concurrently. Each part of such a program is called a thread, and each thread defines a separate path of execution.

**What are the two ways in which Thread can be created?**

Thread can be created by: implementing Runnable interface, extending the Thread class.

**What is an applet?**

An applet is a Java program that runs in a Web browser. An applet can be a fully functional Java application because it has the entire Java API at its disposal.

**An applet extend which class?**

An applet extends java.applet.Applet class.

**Explain garbage collection in Java?**

It uses garbage collection to free the memory. By cleaning those objects that is no longer reference by any of the program.

**Define immutable object?**

An immutable object can't be changed once it is created.

**Explain the usage of this() with constructors?**

It is used with variables or methods and used to call constructer of same class.

**Explain Set Interface?**

It is a collection of element which cannot contain duplicate elements. The Set interface contains only methods inherited from Collection and adds the restriction that duplicate elements are prohibited.

**Explain TreeSet?**

It is a Set implemented when we want elements in a sorted order.

**What is Comparable Interface?**

It is used to sort collections and arrays of objects using the collections.sort() and java.utils. The objects of the class implementing the Comparable interface can be ordered.

**Difference between throw and throws?**

It includes:

- Throw is used to trigger an exception where as throws is used in declaration of exception.
- Without throws, Checked exception cannot be handled where as checked exception can be propagated with throws.

**Explain the following line used under Java Program?**

`public static void main (String args [ ])`

The following shows the explanation individually −

1. public − it is the access specifier.

2. static − it allows main() to be called without instantiating a particular instance of a class.

3. void − it affirns the compiler that no value is returned by main().

4. main() − this method is called at the beginning of a Java program.

5. String args [ ] − args parameter is an instance array of class String

**Define JRE i.e. Java Runtime Environment?**

Java Runtime Environment is an implementation of the Java Virtual Machine which executes Java programs. It provides the minimum requirements for executing a Java application;

**What is JAR file?**

JAR files is Java Archive fles and it aggregates many files into one. It holds Java classes in a library. JAR files are built on ZIP file format and have .jar file extension.

**What is a WAR file?**

This is Web Archive File and used to store XML, java classes, and JavaServer pages. which is used to distribute a collection of JavaServer Pages, Java Servlets, Java classes, XML files, static Web pages etc.

**Define JIT compiler?**

It improves the runtime performance of computer programs based on bytecode.

**What is the difference between object oriented programming language and object based programming language?**

Object based programming languages follow all the features of OOPs except Inheritance. JavaScript is an example of object based programming languages.

**What is the purpose of default constructor?**

The java compiler creates a default constructor only if there is no constructor in the class.

**Can a constructor be made final?**

No, this is not possible.

**What is static block?**

It is used to initialize the static data member, It is excuted before main method at the time of classloading.

**Define composition?**

Holding the reference of the other class within some other class is known as composition.

**What is function overloading?**

If a class has multiple functions by same name but different parameters, it is known as Method Overloading.

**What is function overriding?**

If a subclass provides a specific implementation of a method that is already provided by its parent class, it is known as Method Overriding.

**Difference between Overloading and Overriding?**

Method overloading increases the readability of the program. Method overriding provides the specific implementation of the method that is already provided by its super class parameter must be different in case of overloading, parameter must be same in case of overriding.

**What is final class?**

Final classes are created so the methods implemented by that class cannot be overridden. It can't be inherited.

**What is NullPointerException?**

A NullPointerException is thrown when calling the instance method of a null object, accessing or modifying the field of a null object etc.

**What are the ways in which a thread can enter the waiting state?**

A thread can enter the waiting state by invoking its sleep() method, by blocking on IO, by unsuccessfully attempting to acquire an object's lock, or by invoking an object's wait() method. It can also enter the waiting state by invoking its (deprecated) suspend() method.

**How does multi-threading take place on a computer with a single CPU?**

The operating system's task scheduler allocates execution time to multiple tasks. By quickly switching between executing tasks, it creates the impression that tasks execute sequentially.

**What invokes a thread's run() method?**

After a thread is started, via its start() method of the Thread class, the JVM invokes the thread's run() method when the thread is initially executed.

**Does it matter in what order catch statements for FileNotFoundException and IOException are written?**

Yes, it does. The FileNoFoundException is inherited from the IOException. Exception's subclasses have to be caught first.

**What is the difference between yielding and sleeping?**

When a task invokes its yield() method, it returns to the ready state. When a task invokes its sleep() method, it returns to the waiting state.

**Why Vector class is used?**

The Vector class provides the capability to implement a growable array of objects. Vector proves to be very useful if you don't know the size of the array in advance, or you just need one that can change sizes over the lifetime of a program.

**How many bits are used to represent Unicode, ASCII, UTF-16, and UTF-8 characters?**

Unicode requires 16 bits and ASCII require 7 bits. Although the ASCII character set uses only 7 bits, it is usually represented as 8 bits. UTF-8 represents characters using 8, 16, and 18 bit patterns. UTF-16 uses 16-bit and larger bit patterns.

**What are Wrapper classes?**

These are classes that allow primitive types to be accessed as objects. Example: Integer, Character, Double, Boolean etc.

**What is the difference between a Window and a Frame?**

The Frame class extends Window to define a main application window that can have a menu bar.

**Which package has light weight components?**

javax.Swing package. All components in Swing, except JApplet, JDialog, JFrame and JWindow are lightweight components.

**What is the difference between the paint() and repaint() methods?**

The paint() method supports painting via a Graphics object. The repaint() method is used to cause paint() to be invoked by the AWT painting thread.

**What is the purpose of File class?**

It is used to create objects that provide access to the files and directories of a local file system.

**What is the difference between the Reader/Writer class hierarchy and the InputStream/OutputStream class hierarchy?**

The Reader/Writer class hierarchy is character-oriented, and the InputStream/OutputStream class hierarchy is byte-oriented.

**Which class should you use to obtain design information about an object?**

The Class class is used to obtain information about an object's design and java.lang.Class class instance represent classes, interfaces in a running Java application.

**What is the difference between static and non-static variables?**

A static variable is associated with the class as a whole rather than with specific instances of a class. Non-static variables take on unique values with each object instance.

**What is Serialization and deserialization?**

Serialization is the process of writing the state of an object to a byte stream. Deserialization is the process of restoring these objects.

**What are use cases?**

It is part of the analysis of a program and describes a situation that a program might encounter and what behavior the program should exhibit in that circumstance.

**Explain the use of sublass in a Java program?**

Sub class inherits all the public and protected methods and the implementation. It also inherits all the default modifier methods and their implementation.

**How to add menushortcut to menu item?**

If there is a button instance called b1, you may add menu short cut by calling b1.setMnemonic('F'), so the user may be able to use Alt+F to click the button.

**Can you write a Java class that could be used both as an applet as well as an application?**

Yes, just add a main() method to the applet.

**What is the difference between Swing and AWT components?**

AWT components are heavy-weight, whereas Swing components are lightweight. Heavy weight components depend on the local windowing toolkit. For example, java.awt.Button is a heavy weight component, when it is running on the Java platform for Unix platform, it maps to a real Motif button.

**What's the difference between constructors and other methods?**

Constructors must have the same name as the class and can not return a value. They are only called once while regular methods could be called many times.

**Is there any limitation of using Inheritance?**

Yes, since inheritance inherits everything from the super class and interface, it may make the subclass too clustering and sometimes error-prone when dynamic overriding or dynamic overloading in some situation.

**When is the ArrayStoreException thrown?**

When copying elements between different arrays, if the source or destination arguments are not arrays or their types are not compatible, an ArrayStoreException will be thrown.

**Can you call one constructor from another if a class has multiple constructors?**

Yes, use this() syntax.

**What's the difference between the methods sleep() and wait()?**

The code sleep(2000); puts thread aside for exactly two seconds. The code wait(2000), causes a wait of up to two second. A thread could stop waiting earlier if it receives the notify() or notifyAll() call. The method wait() is defined in the class Object and the method sleep() is defined in the class Thread.

**When ArithmeticException is thrown?**

The ArithmeticException is thrown when integer is divided by zero or taking the remainder of a number by zero. It is never thrown in floating-point operations.

**What is a transient variable?**

A transient variable is a variable that may not be serialized during Serialization and which is initialized by its default value during de-serialization,

**What is synchronization?**

Synchronization is the capability to control the access of multiple threads to shared resources. synchronized keyword in java provides locking which ensures mutual exclusive access of shared resource and prevent data race.

**What is the Collections API?**

The Collections API is a set of classes and interfaces that support operations on collections of objects.

**Does garbage collection guarantee that a program will not run out of memory?**

Garbage collection does not guarantee that a program will not run out of memory. It is possible for programs to use up memory resources faster than they are garbage collected. It is also possible for programs to create objects that are not subject to garbage collection.

**The immediate superclass of the Applet class?**

Panel is the immediate superclass. A panel provides space in which an application can attach any other component, including other panels.

**Which Java operator is right associative?**

The = operator is right associative.

**What is the difference between a break statement and a continue statement?**

A break statement results in the termination of the statement to which it applies (switch, for, do, or while). A continue statement is used to end the current loop iteration and return control to the loop statement.

**If a variable is declared as private, where may the variable be accessed?**

A private variable may only be accessed within the class in which it is declared.

**What is the purpose of the System class?**

The purpose of the System class is to provide access to system resources.

**List primitive Java types?**

The eight primitive types are byte, char, short, int, long, float, double, and boolean.

**What is the relationship between clipping and repainting under AWT?**

When a window is repainted by the AWT painting thread, it sets the clipping regions to the area of the window that requires repainting.

**Which class is the immediate superclass of the Container class?**

Component class is the immediate super class.

**What class of exceptions are generated by the Java run-time system?**

The Java runtime system generates RuntimeException and Error exceptions.

**Under what conditions is an object's finalize() method invoked by the garbage collector?**

The garbage collector invokes an object's finalize() method when it detects that the object has become unreachable.

**How can a dead thread be restarted?**

A dead thread cannot be restarted.

**Which arithmetic operations can result in the throwing of an ArithmeticException?**

Integer / and % can result in the throwing of an ArithmeticException.

**Variable of the boolean type is automatically initialized as?**

The default value of the boolean type is false.

**Can try statements be nested?**

Yes

**What are ClassLoaders?**

A class loader is an object that is responsible for loading classes. The class ClassLoader is an abstract class.

**What is the difference between an Interface and an Abstract class?**

An abstract class can have instance methods that implement a default behavior. An Interface can only declare constants and instance methods, but cannot implement default behavior and all methods are implicitly abstract. An interface has all public members and no implementation.

**What will happen if static modifier is removed from the signature of the main method?**

Program throws "NoSuchMethodError" error at runtime.

**What is the default value of an object reference declared as an instance variable?**

Null, unless it is defined explicitly.

**Can a top level class be private or protected?**

No, a top level class can not be private or protected. It can have either "public" or no modifier.

**Why do we need wrapper classes?**

We can pass them around as method parameters where a method expects an object. It also provides utility methods.

**What is the difference between error and an exception?**

An error is an irrecoverable condition occurring at runtime. Such as OutOfMemory error. Exceptions are conditions that occur because of bad input etc. e.g. FileNotFoundException will be thrown if the specified file does not exist.

**Is it necessary that each try block must be followed by a catch block?**

It is not necessary that each try block must be followed by a catch block. It should be followed by either a catch block or a finally block.

**When a thread is created and started, what is its initial state?**

A thread is in the ready state as initial state after it has been created and started.

**What is the Locale class?**

The Locale class is used to tailor program output to the conventions of a particular geographic, political, or cultural region.

**What are synchronized methods and synchronized statements?**

Synchronized methods are methods that are used to control access to an object. A synchronized statement can only be executed after a thread has acquired the lock for the object or class referenced in the synchronized statement.

**What is runtime polymorphism or dynamic method dispatch?**

Runtime polymorphism or dynamic method dispatch is a process in which a call to an overridden method is resolved at runtime rather than at compile-time. In this process, an overridden method is called through the reference variable of a superclass.

**Can constructor be inherited?**

No, constructor cannot be inherited.

**What are the advantages of ArrayList over arrays?**

ArrayList can grow dynamically and provides more powerful insertion and search mechanisms than arrays.

**Why deletion in LinkedList is fast than ArrayList?**

Deletion in linked list is fast because it involves only updating the next pointer in the node before the deleted node and updating the previous pointer in the node after the deleted node.

**How do you decide when to use ArrayList and LinkedList?**

If you need to frequently add and remove elements from the middle of the list and only access the list elements sequentially, then LinkedList should be used. If you need to support random access, without inserting or removing elements from any place other than the end, then ArrayList should be used.

**What is a Values Collection View ?**

It is a collection returned by the values() method of the Map Interface, It contains all the objects present as values in the map.

**What is dot operator?**

The dot operator(.) is used to access the instance variables and methods of class objects.It is also used to access classes and sub-packages from a package.

**Where and how can you use a private constructor?**

Private constructor is used if you do not want other classes to instantiate the object and to prevent subclassing.T

**What is type casting?**

Type casting means treating a variable of one type as though it is another type.

**Describe life cycle of thread?**

A thread is a execution in a program. The life cycle of a thread include −

1. Newborn state
2. Runnable state
3. Running state
4. Blocked state
5. Dead state

**What is the difference between the `>>` and `>>>` operators?**

The `>>` operator carries the sign bit when shifting right. The `>>>` zero-fills bits that have been shifted out.

**Which method of the Component class is used to set the position and size of a component?**

setBounds() method is used for this purpose.

**What is the range of the short type?**

The range of the short type is -(2^15) to 2^15 - 1.

**What is the immediate superclass of Menu?**

MenuItem class

**Does Java allow Default Arguments?**

No, Java does not allow Default Arguments.

**Which number is denoted by leading zero in java?**

Octal Numbers are denoted by leading zero in java, example: 06

**Which number is denoted by leading 0x or 0X in java?**

Hexadecimal Numbers are denoted by leading 0x or 0X in java, example − 0XF

**Break statement can be used as labels in Java?**

Yes, an example can be break one;

**Where import statement is used in a Java program?**

Import statement is allowed at the beginning of the program file after package statement.

**Explain `suspend()` method under Thread class**

It is used to pause or temporarily stop the execution of the thread.

**Explain `isAlive()` method under Thread class?**

It is used to find out whether a thread is still running or not.

**What is currentThread()?**

It is a public static method used to obtain a reference to the current thread.

**Explain main thread under Thread class execution?**

The main thread is created automatically and it begins to execute immediately when a program starts. It ia thread from which all other child threads originate.

**Life cycle of an applet includes which steps?**

Life cycle involves the following steps −

1. Initialization
2. Starting
3. Stopping
4. Destroying
5. Painting

**Why is the role of init() method under applets?**

It initializes the applet and is the first method to be called.

**Which method is called by Applet class to load an image?**

getImage(URL object, filename) is used for this purpose.

**Define code as an attribute of Applet?**

It is used to specify the name of the applet class.

**Define canvas?**

It is a simple drawing surface which are used for painting images or to perform other graphical operations.

**Define Network Programming?**

It refers to writing programs that execute across multiple devices (computers), in which the devices are all connected to each other using a network.

**What is a Socket?**

Sockets provide the communication mechanism between two computers using TCP. A client program creates a socket on its end of the communication and attempts to connect that socket to a server.

**Advantages of Java Sockets?**

Sockets are flexible and sufficient. Efficient socket based programming can be easily implemented for general communications. It cause low network traffic.

**Disadvantages of Java Sockets?**

Socket based communications allows only to send packets of raw data between applications. Both the client-side and server-side have to provide mechanisms to make the data useful in any way.

**Which class is used by server applications to obtain a port and listen for client requests?**

java.net.ServerSocket class is used by server applications to obtain a port and listen for client requests

**Which class represents the socket that both the client and server use to communicate with each other?**

java.net.Socket class represents the socket that both the client and server use to communicate with each other.

**Why Generics are used in Java?**

Generics provide compile-time type safety that allows programmers to catch invalid types at compile time. Java Generic methods and generic classes enable programmers to specify, with a single method declaration, a set of related methods or, with a single class declaration, a set of related types.

**What environment variables do I need to set on my machine in order to be able to run Java programs?**

CLASSPATH and PATH are the two variables.

**Is there any need to import java.lang package?**

No, there is no need to import this package. It is by default loaded internally by the JVM.

**What is Nested top-level class?**

If a class is declared within a class and specify the static modifier, the compiler treats the class just like any other top-level class. Nested top-level class is an Inner class.

**What is Externalizable interface?**

Externalizable is an interface which contains two methods readExternal and writeExternal. These methods give you a control over the serialization mechanism.

**If System.exit (0); is written at the end of the try block, will the finally block still execute?**

No in this case the finally block will not execute because when you say System.exit (0); the control immediately goes out of the program, and thus finally never executes.

**What is daemon thread?**

Daemon thread is a low priority thread, which runs intermittently in the back ground doing the garbage collection operation for the java runtime system.

**Which method is used to create the daemon thread?**

setDaemon method is used to create a daemon thread.

**Which method must be implemented by all threads?**

All tasks must implement the run() method

**What is the GregorianCalendar class?**

The GregorianCalendar provides support for traditional Western calendars

**What is the SimpleTimeZone class?**

The SimpleTimeZone class provides support for a Gregorian calendar .

**What is the difference between the size and capacity of a Vector?**

The size is the number of elements actually stored in the vector, while capacity is the maximum number of elements it can store at a given instance of time.

**Can a vector contain heterogenous objects?**

Yes a Vector can contain heterogenous objects. Because a Vector stores everything in terms of Object.

**What is an enumeration?**

An enumeration is an interface containing methods for accessing the underlying data structure from which the enumeration is obtained. It allows sequential access to all the elements stored in the collection.

**What is difference between Path and Classpath?**

Path and Classpath are operating system level environment variales. Path is defines where the system can find the executables(.exe) files and classpath is used to specify the location of .class files.

**Can a class declared as private be accessed outside it's package?**

No, it's not possible to accessed outside it's package.

**What are the restriction imposed on a static method or a static block of code?**

A static method should not refer to instance variables without creating an instance and cannot use "this" operator to refer the instance.

**Can an Interface extend another Interface?**

Yes an Interface can inherit another Interface, for that matter an Interface can extend more than one Interface.

**Which object oriented Concept is achieved by using overloading and overriding?**

Polymorphism

**What is an object's lock and which object's have locks?**

An object's lock is a mechanism that is used by multiple threads to obtain synchronized access to the object. A thread may execute a synchronized method of an object only after it has acquired the object's lock.

**What is Downcasting?**

It is the casting from a general to a more specific type, i.e. casting down the hierarchy.

**What are order of precedence and associativity and how are they used?**

Order of precedence determines the order in which operators are evaluated in expressions. Associatity determines whether an expression is evaluated left-to-right or right-to-left.

**If a method is declared as protected, where may the method be accessed?**

A protected method may only be accessed by classes or interfaces of the same package or by subclasses of the class in which it is declared.

**What is the difference between inner class and nested class?**

When a class is defined within a scope of another class, then it becomes inner class. If the access modifier of the inner class is static, then it becomes nested class.

**What restrictions are placed on method overriding?**

Overridden methods must have the same name, argument list, and return type. The overriding method may not limit the access of the method it overrides.

**What is constructor chaining and how is it achieved in Java?**

A child object constructor always first needs to construct its parent. In Java it is done via an implicit call to the no-args constructor as the first statement.

**Can a double value be cast to a byte?**

Yes, a double value can be cast to a byte.

**How does a try statement determine which catch clause should be used to handle an exception?**

When an exception is thrown within the body of a try statement, the catch clauses of the try statement are examined in the order in which they appear. The first catch clause that is capable of handling the exception is executed. The remaining catch clauses are ignored.

**What will be the default values of all the elements of an array defined as an instance variable?**

If the array is an array of primitive types, then all the elements of the array will be initialized to the default value corresponding to that primitive type.

<https://www.toptal.com/core-java/interview-questions>
