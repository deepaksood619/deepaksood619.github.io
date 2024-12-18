# Coding Guidelines / Code Reviews / Clean Code

![10 Good Coding Principles](../../media/Pasted%20image%2020240207000423.jpg)

Code reviews are fundamental to the software development process, even when there's only one engineer.

https://www.chakshunyu.com/blog/this-is-my-10-questions-react-code-reviewing-routine

"I first look for security, functionality, and readability. Is the code simple, or cluttered, bloated, and inefficient? How many lines of unnecessary code will I need to re-write or remove? I check for any weaknesses that could cause vulnerabilities and confirm that regulatory requirements have been met."

Everyone has their own coding style and every developer or team will have requirements that are specific to their codebase. Effective code reviews often have checklists. Below is a limited list of general suggestions you could consider including:

- The software passes automated and manual testing
- Code follows applicable conventions and is easy to understand
- Code is not duplicated
- No negatively named boolean variables
- Scrutinize [methods with boolean parameters](https://medium.com/@amlcurran/clean-code-the-curse-of-a-boolean-parameter-c237a830b7a3)
- Blocks of code inside loops are as small as possible
- No memory leaks

But more important than which exact points a candidate brings up is their reasoning for doing so. Be wary of candidates who get stuck on tabs-versus-spaces bike shedding at the expense of more crucial engineering elements.

Write deterministic code - Given an input, code always produces the same output

- Code should be consistent
- Code should be self-descriptive
- Code should be well documented
- Code should utilize stable modern features
- Code shouldn't be unnecessarily complex
- Code shouldn't be un-performant (don't write intentionally slow code)

https://www.freecodecamp.org/news/clean-coding-for-beginners

### [https://www.toptal.com/software/six-commandments-of-good-code](https://www.toptal.com/software/six-commandments-of-good-code)

- Treat Your Code the Way You Want Other's Code to Treat You
- Good Code Is Easily Read and Understood, in Part and in Whole
- Good Code Has a Well Thought-out Layout and Architecture to Make Managing State Obvious
- Good Code Doesn't Reinvent the Wheel, It Stands on the Shoulders of Giants
- Don't Cross the Streams
- When Possible, Let the Computer Do the Work

## Error Handling

- Bugs
- Error Handling
    - Corner Cases
    - Disk full, etc
- Input Validation both client side and server side

## NIH Syndrome (Not Invented Here)

In programming, it is also common to refer to the "NIH syndrome" as the tendency towards [reinventing the wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel)(reimplementing something that is already available) based on the belief that in-house developments are inherently better suited, more secure, more controlled, quicker to develop, and incur lower overall cost (including maintenance cost) than using existing implementations.

https://en.wikipedia.org/wiki/Not_invented_here

## [Enterprise Programming Tricks for clean code](https://www.youtube.com/watch?v=dC9vdQkU-xI)

- Singleton configuration
- Singletons
- Verbose naming
- Noisy logging
- Log and throw
- Repetition and duplication
- Unnecessary code
- Mixed levels of abstraction
- Legacy coding habits
- Programming by coincidence
- Programming by superstition

## [Naming Things in Code](https://www.youtube.com/watch?v=-J3wNP6u5YU)

- Don't abbreviate names
- Don't put types in variable names
- Add units to variables unless the type tells you
- Don't put types in your types (e.g. AbstractX, BaseX)
- Refactor if you find yourself naming code "Utils"

## Others

https://www.fluentcpp.com/2019/08/27/extract-function-should-i-extract-the-condition-too

https://www.fluentcpp.com/2016/12/15/respect-levels-of-abstraction

[Reasons & Ways to Improve Code Quality - Venkat Subramaniam - GOTO 2021](https://www.youtube.com/watch?v=znZlF4uQBN0)

[Writing Code You Won't Hate Tomorrow](https://www.youtube.com/watch?v=qjtMs7jQxEo)

[What should a software developer not do? - YouTube](https://www.youtube.com/watch?v=rBUVdZRkd0A)

[Why You Shouldn't Nest Your Code](https://www.youtube.com/watch?v=CFRhGnuXG-4)

- Never Nester
- If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program

[Code Sexy Or Don’t Code At All!. Appearance matters a lot to everyone… | by Upnishad Deo | Medium](https://medium.com/@upanishaddeo/code-sexy-or-dont-code-at-all-53aa1488b92)

## Links

[GitHub - google/git-appraise: Distributed code review system for Git repos](https://github.com/google/git-appraise)
