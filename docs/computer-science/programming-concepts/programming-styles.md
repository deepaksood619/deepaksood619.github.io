# Programming Styles

## duck-typing

A programming style which does not look at an object's type to determine if it has the right interface; instead, the method or attribute is simply called or used ("If it looks like a duck and quacks like a duck, it must be a duck.") By emphasizing interfaces rather than specific types, well-designed code improves its flexibility by allowing polymorphic substitution. Duck-typing avoids tests using [type()](http://library/functions.html) or [isinstance()](http://library/functions.html). (Note, however, that duck-typing can be complemented with abstract base classes) Instead, it typically employs [hasattr()](http://library/functions.html) tests or EAFP programming.

"When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck"

## EAFP

Easier to ask for forgiveness than permission. This common Python coding style assumes the existence of valid keys or attributes and catches exceptions if the assumption proves false. This clean and fast style is characterized by the presence of many [try](http://reference/compound_stmts.html) and [except](http://reference/compound_stmts.html) statements. The technique contrasts with the LBYL style common to many other languages such as C.

## LBYL

Look before you leap. This coding style explicitly tests for pre-conditions before making calls or lookups. This style contrasts with the EAFP approach and is characterized by the presence of many [if](http://reference/compound_stmts.html) statements.

In a multi-threaded environment, the LBYL approach can risk introducing a race condition between "the looking" and "the leaping". For example, the code, ifkeyinmapping:returnmapping [key]can fail if another thread removeskeyfrommappingafter the test, but before the lookup. This issue can be solved with locks or by using the EAFP approach.

## homoiconicity (noun)

The property of a programming language whereby there is no distinction between code and the data on which a program is operating.

https://www.toptal.com/julia/code-writing-code-modern-metaprogamming
