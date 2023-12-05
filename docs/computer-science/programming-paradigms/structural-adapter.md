# Structural - Adapter

If there are 3 languages that need to be typed and you know a 4th language than you will not write the same thing 3 times everytime you have to write something, what we do it to create an adapter for the three languages that sit infront of 3 classes that will translate from 4th language to their specific language. All the translations will be handled by the adapter.

But in this design pattern also we have to make 3 calls to the 3 adapters everytime. So to solve this we use facade design pattern. When using interfaces we follow facade design pattern. We will make one call to function and this function will call all other functions in the adapter.

![image](../../media/Structural-Adapter-image1.jpg)

So, as you can see in the picture, the purpose of the adapter is to take one interface and make it compatible with another. In programming, its purpose is the same - you'll want to use this pattern when you have some type/class and you want to make it compatible with another.

## How to do the trick?

In Java, this is done bycreating an Adapter class, whichextends the type we target (our desired interface)andstores a reference to Adaptee (object that needs to be adapted).

## Elements of the pattern

- Target - our desired type
- Adaptee - type that needs to be adapted
- Adapter - class that makes Adaptee compatible with Target

## Relations between components

The client of our code (i.e. any place where our classes are used) use Adapters methods, which are compatible with Targets interface, butthe work underneath is delegated to Adaptee object.

## Code example

If you have any difficulties understanding the purpose of this pattern, looking at some code should definitely help.

First, let's declare the interface that we target (the one we want to adapt to)

```java
interface Target {
    String getFirstName();
    String getLastName();
}
```

Now, we add a class that will be adapted (it is now incompatible with Target interface)

```java
class Adaptee {
    String getFullName() {
    return "Patryk Jeziorowski";
    }
}
```

As you can see, interfaces of Target and Adaptee differs.Target has two methods - the first method returns a first name and the second returns a last name. In Adaptee, there's only one method that returns first name + last name at once.We can adjust Adaptee to fit Target interface with an Adapter, though!

```java
public class Adapter implements Target {

    private final Adaptee adaptee = new Adaptee();
    @Override
    public String getFirstName() {
        return adaptee.getFullName().split(" ")[0]; // just a dumb example impl
    }

    @Override
    public String getLastName() {
        return adaptee.getFullName().split(" ")[1]; // just a dumb example impl
    }
}
```

The Adapter is compatible with Target by simply implementing it, and under the hood, it delegates the work to the Adaptee object.This allows us to reuse Adaptee implementation anywhere we need object of Target type.

At the end, let's take a look at our code in action:

```java
public class ClientCode {
    public static void main(String[] args) {
        final Target target = new Adapter(); // We need Target type, we can use Adapter!
        System.out.println(target.getFirstName()); // Work delegated to Adaptee under the hood
        System.out.println(target.getLastName()); // Work delegated to Adaptee under the hood
        // output:
        // Patryk
        // Jeziorowski
    }
}
```

Anywhere the Target type is needed, we can use Adapter instead, which delegates the hard work to Adaptee.

```java
final Target target = new Adapter();

// Adapter impl
    @Override
    public String getFirstName() {
    // use adaptee
    return adaptee.getFullName().split(" ")[0];
    }
```

https://talkoverflow.com/adapter
