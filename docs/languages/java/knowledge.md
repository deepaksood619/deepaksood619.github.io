# Knowledge

- Parent class can hold child class reference but not vice-versa

```java
Person person = new Docter("deepak", 1, "medicine");

// Docter docter = new Person("deepak", 1);

// This cannot be done
// error: incompatible types: Person cannot be converted to Docter
```

- Parent class cannot be typecasted to Child class

```java
Person person = new Person("pooja", 2);

Docter docter = (Docter) person;

// java.lang.ClassCastException: Person cannot be cast to Docter
```
