# Code Smell

In [computer programming](https://www.wikiwand.com/en/Computer_programming), acode smellis any characteristic in the [source code](https://www.wikiwand.com/en/Source_code) of a [program](https://www.wikiwand.com/en/Computer_program) that possibly indicates a deeper problem.Determining what is and is not a code smell is subjective, and varies by language, developer, and development methodology.
One way to look at smells is with respect to principles and quality: "Smells are certain structures in the code that indicate violation of fundamental design principles and negatively impact design quality".Code smells are usually not [bugs](https://www.wikiwand.com/en/Software_bug); they are not technically incorrect and do not prevent the program from functioning. Instead, they indicate weaknesses in design that may slow down development or increase the risk of bugs or failures in the future. Bad code smells can be an indicator of factors that contribute to [technical debt](https://www.wikiwand.com/en/Technical_debt).[Robert C. Martin](https://www.wikiwand.com/en/Robert_C._Martin) calls a list of code smells a "value system" for software craftsmanship.

## Common code smells

## Application-level smells

- [Duplicated code](https://www.wikiwand.com/en/Duplicate_code): identical or very similar code exists in more than one location.
- Contrived complexity: forced usage of overcomplicated [design patterns](https://www.wikiwand.com/en/Design_pattern_(computer_science)) where simpler design would suffice.
- [Shotgun surgery](https://www.wikiwand.com/en/Shotgun_surgery): a single change needs to be applied to multiple classes at the same time.
- Uncontrolled side effects: very easy to cause runtime exceptions and unit tests can't capture it.
- Variable mutations: very hard to refactor code since the actual value is unpredictable and hard to reason about.
- Boolean blindness: easy to assert on the opposite value and still type checks.

## Class-level smells

- Large class: a [class](https://www.wikiwand.com/en/Class_(computer_science)) that has grown too large. See [God object](https://www.wikiwand.com/en/God_object).
- Feature envy: a class that uses methods of another class excessively.
- Inappropriate intimacy: a class that has dependencies on implementation details of another class. See [Object orgy](https://www.wikiwand.com/en/Object_orgy).
- Refused bequest: a class that [overrides](https://www.wikiwand.com/en/Method_overriding_(programming)) a method of a base class in such a way that the [contract](https://www.wikiwand.com/en/Contract_(software)) of the [base class](https://www.wikiwand.com/en/Base_class) is not honored by the [derived class](https://www.wikiwand.com/en/Derived_class). See [Liskov substitution principle](https://www.wikiwand.com/en/Liskov_substitution_principle).
- Lazy class / freeloader: a class that does too little.
- Excessive use of literals: these should be coded as named constants, to improve readability and to avoid programming errors. Additionally, [literals](https://www.wikiwand.com/en/Literal_(computer_programming)) can and should be externalized into resource files/scripts, or other data stores such as databases where possible, to facilitate localization of software if it is intended to be deployed in different regions.
- [Cyclomatic complexity](https://www.wikiwand.com/en/Cyclomatic_complexity): too many branches or loops; this may indicate a function needs to be broken up into smaller functions, or that it has potential for simplification.
- [Downcasting](https://www.wikiwand.com/en/Downcasting): a type cast which breaks the abstraction model; the abstraction may have to be refactored or eliminated.
- Orphan variable or constant class: a [class](https://www.wikiwand.com/en/Class_(computer_science)) that typically has a collection of constants which belong elsewhere where those constants should be owned by one of the other member classes.
- [Data clump](https://www.wikiwand.com/en/Data_Clump_(Code_Smell)): Occurs when a group of variables are passed around together in various parts of the program. In general, this suggests that it would be more appropriate to formally group the different variables together into a single object, and pass around only this object instead.

## Method-level smells

- Too many parameters: a long list of parameters is hard to read, and makes calling and testing the function complicated. It may indicate that the purpose of the function is ill-conceived and that the code should be refactored so responsibility is assigned in a more clean-cut way.
- Long method: a [method](https://www.wikiwand.com/en/Method_(computer_science)), function, or procedure that has grown too large.
- Excessively long identifiers: in particular, the use of [naming conventions](https://www.wikiwand.com/en/Naming_convention_(programming)) to provide disambiguation that should be implicit in the [software architecture](https://www.wikiwand.com/en/Software_architecture).
- Excessively short identifiers: the name of a variable should reflect its function unless the function is obvious.
- Excessive return of data: a function or method that returns more than what each of its callers needs.
- Excessively long line of code(or God Line): A line of code which is too long, making the code difficult to read, understand, debug, refactor, or even identify possibilities of software reuse. Example:

`new XYZ(s).doSomething(buildParam1(x), buildParam2(x), buildParam3(x), a + Math.sin(x)*Math.tan(x*y + z)).doAnythingElse().build().sendRequest();`

<https://www.wikiwand.com/en/Code_smell>
