# Static Code Analysis

Static code analysis looks at the code without executing it. It is usually extremely fast to execute, requires little effort to add to your workflow, and can uncover common mistakes. The only downside is that it is not tailored towards your code.

## Code Complexity

One way to measure code complexity is the [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity), also called McCabe complexity as defined in [A Complexity Measure](https://books.google.de/books?id=vtNWAAAAMAAJ&pg=PA3&redir_esc=y):

CC = E - N + 2*P

where N is the number of nodes in the control flow graph, E is the number of edges and P is the number of condition-nodes (if-statements, while/for loops).
Cyclomatic complexityis a [software metric](https://en.wikipedia.org/wiki/Software_metric) used to indicate the [complexity of a program](https://en.wikipedia.org/wiki/Programming_complexity). It is a quantitative measure of the number of linearly independent paths through a program's [source code](https://en.wikipedia.org/wiki/Source_code). It was developed by [Thomas J. McCabe, Sr.](https://en.wikipedia.org/w/index.php?title=Thomas_J._McCabe,_Sr.&action=edit&redlink=1) in 1976.
Cyclomatic complexity is computed using the [control flow graph](https://en.wikipedia.org/wiki/Control_flow_graph) of the program: the nodes of the [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) correspond to indivisible groups of commands of a program, and a [directed](https://en.wikipedia.org/wiki/Directed_graph) edge connects two nodes if the second command might be executed immediately after the first command. Cyclomatic complexity may also be applied to individual [functions](https://en.wikipedia.org/wiki/Function_(computer_science)), [modules](https://en.wikipedia.org/wiki/Modular_programming), [methods](https://en.wikipedia.org/wiki/Method_(computer_science)) or [classes](https://en.wikipedia.org/wiki/Class_(computer_science)) within a program.
One [testing](https://en.wikipedia.org/wiki/Software_testing) strategy, called [basis path testing](https://en.wikipedia.org/wiki/Basis_path_testing) by McCabe who first proposed it, is to test each linearly independent path through the program; in this case, the number of test cases will equal the cyclomatic complexity of the program.
<https://en.wikipedia.org/wiki/Cyclomatic_complexity>

## Test & Code Coverage

In [computer science](https://en.wikipedia.org/wiki/Computer_science), test coverageis a measure used to describe the degree to which the [source code](https://en.wikipedia.org/wiki/Source_code) of a [program](https://en.wikipedia.org/wiki/Computer_program) is executed when a particular [test suite](https://en.wikipedia.org/wiki/Test_suite) runs. A program with high test coverage, measured as a percentage, has had more of its source code executed during testing, which suggests it has a lower chance of containing undetected [software bugs](https://en.wikipedia.org/wiki/Software_bug) compared to a program with low test coverage.
Many different metrics can be used to calculate test coverage; some of the most basic are the percentage of program [subroutines](https://en.wikipedia.org/wiki/Subroutine) and the percentage of program [statements](https://en.wikipedia.org/wiki/Statement_(computer_science)) called during execution of the test suite.
Test coverage was among the first methods invented for systematic [software testing](https://en.wikipedia.org/wiki/Software_testing).
Code Coverage is a measurement of how many lines/blocks/arcs of your code are executed while the automated tests are running.
Code coverage is collected by using a specialized tool to instrument the binaries to add tracing calls and run a full set of automated tests against the instrumented product. A good tool will give you not only the percentage of the code that is executed, but also will allow you to drill into the data and see exactly which lines of code were executed during particular test.

Code Coverage = (Number of lines of code exercised)/(Total Number of lines of code) * 100%

## Following are the types of code coverage Analysis

- **Statement coverage and Block coverage (Line coverage)**
- Function coverage
- Function call coverage
- **Branch coverage**
- Modified condition/decision coverage
Knowing the percentage of code that is covered by tests, can help developers assess the quality of their test cases and help them add missing tests and thereby find and remove software faults
<https://codecov.io>

## Lint / Linting / Linter

Lint (In computer programming, lint is a Unix utility that flags some suspicious and non-portable constructs (likely to be bugs) in C language source code; generically, lint or a linter is any tool that flags suspicious usage in software written in any computer language.)
[Code linting](https://en.wikipedia.org/wiki/Lint_(software)) is the act of finding bugs, stylistic errors, and suspicious constructs from static code analysis.

## Used

- Flagging bugs in your code from syntax errors
- Giving you warnings when code may not be intuitive
- Providing suggestions for common best practices
- Keeping track of TODO's and FIXME's
- Keeping a consistent code style
<https://www.freecodecamp.org/news/dont-just-lint-your-code-fix-it-with-prettier>
Code Validator / Linter / Analysis - [https://deepsource.io](https://deepsource.io/)

## Application Inspector

Microsoft Application Inspector is a software source code analysis tool that helps identify and surface well-known features and other interesting characteristics of source code to aid in determiningwhat the software isorwhat it does. It has received attention on [ZDNet](https://www.zdnet.com/article/microsoft-application-inspector-is-now-open-source-so-use-it-to-test-code-security/), [SecurityWeek](https://www.securityweek.com/microsoft-introduces-free-source-code-analyzer), [CSOOnline](https://www.csoonline.com/article/3514732/microsoft-s-offers-application-inspector-to-probe-untrusted-open-source-code.html), [Linux.com/news](https://www.linux.com/news/microsoft-application-inspector-is-now-open-source-so-use-it-to-test-code-security/), [HelpNetSecurity](https://www.helpnetsecurity.com/2020/01/17/microsoft-application-inspector/), Twitter and more and was first featured on [Microsoft.com](https://www.microsoft.com/security/blog/2020/01/16/introducing-microsoft-application-inspector/).
Application Inspector is different from traditional static analysis tools in that it doesn't attempt to identify "good" or "bad" patterns; it simply reports what it finds against a set of over 400 rule patterns for feature detection including features that impact security such as the use of cryptography and more. This can be extremely helpful in reducing the time needed to determine what Open Source or other components do by examining the source directly rather than trusting to limited documentation or recommendations.
The tool supports scanning various programming languages including C, C++, C#, Java, JavaScript, HTML, Python, Objective-C, Go, Ruby, PowerShell and [more](https://github.com/microsoft/ApplicationInspector/wiki/2.1-Field:-applies_to-(languages-support)) and can scan projects with mixed langauge files. It also includes HTML, JSON and text output formats with the default being an HTML report similar to the one shown here.
<https://github.com/Microsoft/ApplicationInspector>

## SonarQube (Continuous Code Quality Inspector)

SonarQube(formerlySonar)is an [open-source](https://en.wikipedia.org/wiki/Open-source_software) platform developed by [SonarSource](https://en.wikipedia.org/wiki/SonarSource) for continuous inspection of [code quality](https://en.wikipedia.org/wiki/Software_quality) to perform automatic reviews with static [analysis of code](https://en.wikipedia.org/wiki/Static_program_analysis) to detect [bugs](https://en.wikipedia.org/wiki/Software_bug), [code smells](https://en.wikipedia.org/wiki/Code_smell), and security vulnerabilities on 20+[programming languages](https://en.wikipedia.org/wiki/Programming_language). SonarQube offers reports on [duplicated code](https://en.wikipedia.org/wiki/Duplicate_code), [coding standards](https://en.wikipedia.org/wiki/Programming_style), [unit tests](https://en.wikipedia.org/wiki/Unit_testing), [code coverage](https://en.wikipedia.org/wiki/Code_coverage), [code complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity), [comments](https://en.wikipedia.org/wiki/Comment_(computer_programming)), [bugs](https://en.wikipedia.org/wiki/Defensive_programming), and security vulnerabilities.
SonarQube can record metrics history and provides evolution graphs. SonarQube provides fully automated analysis and integration with [Maven](https://en.wikipedia.org/wiki/Apache_Maven), [Ant](https://en.wikipedia.org/wiki/Apache_Ant), [Gradle](https://en.wikipedia.org/wiki/Gradle), [MSBuild](https://en.wikipedia.org/wiki/MSBuild) and [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) tools ([Atlassian Bamboo](https://en.wikipedia.org/wiki/Bamboo_(software)), [Jenkins](https://en.wikipedia.org/wiki/Jenkins_(software)), [Hudson](https://en.wikipedia.org/wiki/Hudson_(software)), etc.).
<https://en.wikipedia.org/wiki/SonarQube>

<https://www.sonarqube.org>

## AI Autocomplete & Assistant

- Kite
- <https://www.tabnine.com>

## Other Tools

- CodeScene
- <https://github.com/adamtornhill/code-maat>
- CodeClimate

<https://github.com/codeclimate/codeclimate>

<https://codeclimate.com>

- Sourcegraph

<https://about.sourcegraph.com>

- <https://www.jetbrains.com/qodana>
