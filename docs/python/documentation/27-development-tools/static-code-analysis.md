# Static Code Analysis

## black / autopep8 / yapf (Auto formatters)

 https://www.kevinpeters.net/auto-formatters-for-python

## isort

```python
pip install isort
brew install isort

isort -rc .
isort **/*.py
isort -rc -sl **/*.py

Skipping
 # isort:skip
 # isort:skip_file

# isort.cfg
 [settings]
 line_length = 88
 multi_line_output = 3
 include_trailing_comma = True
 known_third_party = celery,django,environ,pyquery,pytz,redis,requests,rest_framework
```

## pylint

Pylint is a Python static code analysis tool which looks for programming errors, helps enforcing a coding standard, sniffs for code smells and offers simple refactoring suggestions.

[pylint](https://pypi.org/project/pylint/) is one of the most wide-spread linters in Python. The features of pylint for sure overlaps with Flake8, but there is one feature I love: Checking for code duplication

`pylint --disable=all --enable=duplicate-code .`

## pyflakes

## autoflake

autoflake removes unused imports and unused variables from Python code. It makes use of [pyflakes](http://pypi.python.org/pypi/pyflakes) to do this.

```bash
pip install autoflake
autoflake -r --in-place --remove-unused-variables .
autoflake -r --in-place --remove-unused-variables --remove-all-unused-imports **/*.py
```

## mypy (static types)

Mypy is an optional static type checker for Python. You can add type hints ([PEP 484](https://www.python.org/dev/peps/pep-0484/)) to your Python programs, and use mypy to type check them statically. Find bugs in your programs without even running them!

You can mix dynamic and static typing in your programs. You can always fall back to dynamic typing when static typing is not convenient, such as for legacy code.

https://github.com/python/mypy

http://mypy-lang.org

https://medium.com/analytics-vidhya/type-annotations-in-python-3-8-3b401384403d

https://sourcery.ai/blog/python-best-practices

## Black

Black is the uncompromising Python code formatter. By using it, you agree to cede control over minutiae of hand-formatting. In return,Blackgives you speed, determinism, and freedom frompycodestylenagging about formatting. You will save time and mental energy for more important matters.

Blackened code looks the same regardless of the project you're reading. Formatting becomes transparent after a while and you can focus on the content instead.

Blackmakes code review faster by producing the smallest diffs possible.

```bash
pip install black
black <file_path>
black .
```

https://github.com/psf/black

## Pyre type-checker

Pyre is a performant type checker for Python compliant with [PEP 484](https://www.python.org/dev/peps/pep-0484/). Pyre can analyze codebases with millions of lines of code incrementally -- providing instantaneous feedback to developers as they write code.

Pyre ships withPysa, a security focused static analysis tool we've built on top of Pyre that reasons about data flows in Python applications.

[https://pyre-check.org](https://pyre-check.org/)

https://github.com/facebook/pyre-check

## pre-commit / precommit

Git hook scripts are useful for identifying simple issues before submission to code review. We run our hooks on every commit to automatically point out issues in code such as missing semicolons, trailing whitespace, and debug statements. By pointing these issues out before code review, this allows a code reviewer to focus on the architecture of a change while not wasting time with trivial style nitpicks.

As we created more libraries and projects we recognized that sharing our pre-commit hooks across projects is painful. We copied and pasted unwieldy bash scripts from project to project and had to manually change the hooks to work for different project structures.

We believe that you should always use the best industry standard linters. Some of the best linters are written in languages that you do not use in your project or have installed on your machine. For example scss-lint is a linter for SCSS written in Ruby. If you're writing a project in node you should be able to use scss-lint as a pre-commit hook without adding a Gemfile to your project or understanding how to get scss-lint installed.

We built pre-commit to solve our hook issues. It is a multi-language package manager for pre-commit hooks. You specify a list of hooks you want and pre-commit manages the installation and execution of any hook written in any language before every commit. pre-commit is specifically designed to not require root access. If one of your developers doesn't have node installed but modifies a JavaScript file, pre-commit automatically handles downloading and building node to run eslint without root.

```yaml
# filename - .pre-commit-config.yaml

exclude: '^$'
fail_fast: false
exclude: '^(?!tests/)$' #run only test folder files
files: ^API/

 repos:
     - repo: https://github.com/timothycrosley/isort
       rev: 5.6.4
       hooks:
       - id: isort
     - repo: https://github.com/pre-commit/pre-commit-hooks
       rev: v3.2.0
       hooks:
         - id: check-ast
         - id: check-byte-order-marker
         - id: check-docstring-first
         - id: check-executables-have-shebangs
         - id: check-json
         - id: debug-statements
         - id: mixed-line-ending
         - id: check-added-large-files
         - id: trailing-whitespace
         - id: end-of-file-fixer
         - id: check-yaml
    args: [--allow-multiple-documents, --unsafe]
    exclude: /templates/
         - id: requirements-txt-fixer
         - id: check-merge-conflict
         - id: check-case-conflict
         - id: detect-aws-credentials
         - id: detect-private-key
         - id: no-commit-to-branch
     - repo: https://github.com/PyCQA/flake8
       rev: 6.0.0
       hooks:
       - id: flake8
         additional_dependencies: [
             'flake8-bandit',
             'pep8-naming',
             'flake8-sfs',
             'flake8-print',
             'flake8-bugbear',
             'flake8-comprehensions',
             'flake8-debugger',
             'flake8-deprecated',
             'flake8-docstrings',
             'flake8-quotes',
             'flake8-eradicate',
         ]
     - repo: https://github.com/pycqa/pylint
       rev: pylint-2.6.0
       hooks:
       - id: pylint
     - repo: https://github.com/psf/black
       rev: stable
       hooks:
         - id: black
           language_version: python3.8
    - repo: https://github.com/igorshubovych/markdownlint-cli
  rev: v0.32.2
  hooks:
   - id: markdownlint
   - id: markdownlint-fix
 - repo: https://github.com/asottile/pyupgrade
 rev: v2.7.2
 hooks:
 - id: pyupgrade
 args: [--py36-plus]
 - repo: https://github.com/asottile/blacken-docs
 rev: v1.8.0
 hooks:
 - id: blacken-docs
additional_dependencies: [black==20.8b1]>)
```

### Running pre-commit

```bash
# pip install pre-commit
brew install pre-commit

# to install pre-commit as git webhook locally
# pre-commit install

pre-commit run --all-files
pre-commit autoupdate

# run pre-commit on specific files in a folder
git ls-files -- Technologies/Technologies | xargs pre-commit run --files

# bypass installed webhooks
git commit --no-verify

# isort run
isort **/*.py

# autoflake run
autoflake -r --in-place --remove-unused-variables --remove-all-unused-imports **/*.py

black .
```

https://medium.com/staqu-dev-logs/keeping-python-code-clean-with-pre-commit-hooks-black-flake8-and-isort-cac8b01e0ea1

[https://pre-commit.com/hooks.html](https://pre-commit.com/hooks.html)
 [GitHub - igorshubovych/markdownlint-cli: MarkdownLint Command Line Interface](https://github.com/igorshubovych/markdownlint-cli)

[https://pre-commit.com/](https://pre-commit.com/)

[https://github.com/pre-commit/pre-commit-hooks](https://github.com/pre-commit/pre-commit-hooks)

## flake8

`flake8 --max-line-length=88 src`

- files that contain this line are skipped:
`flake8: noqa`
- lines that contain a `# noqa` comment at the end will not issue warnings.
- you can ignore specific errors on a line with `# noqa: <error>, e.g., # noqa: E234`. Multiple codes can be given, separated by comma. Thenoqatoken is case insensitive, the colon before the list of codes is required otherwise the part afternoqais ignored

- E***/W***:pep8 errors and warnings
- F***:PyFlakes codes (see below)
- C9**:McCabe complexity plugin mccabe
- N8**:Naming Conventions plugin pep8-naming

```yaml
# filename - .pre-commit-config.yaml
additional_dependencies: [
            'flake8-isort==2.7.0',
            'flake8-pep3101==1.2.1',
            'flake8-polyfill==1.0.2',
            'flake8-string-format==0.2.3',
        ]

# filename - .flake8
[flake8]
# ignore = E203, E266, E501, F403, F401, F541
ignore = E231, W503
max-line-length = 119
max-complexity = 18
select = B,C,E,F,W,T4,B9,N8
```

Here are some of the interesting flake8 plugins:

- [cohesion](https://github.com/mschwager/cohesion): Check if class cohesion is below a threshold. This indicates that functionality should be split out of a class.
- [flake8-assert-msg](https://pypi.org/project/flake8-assert-msg/): Make sure assert statements have messages
- [flake8-blind-except](https://pypi.org/project/flake8-blind-except/): Prevent Pokemon exception catching
- [flake8-builtins](https://pypi.org/project/flake8-builtins/): Check for python builtins being used as variables or parameters.
- [flake8-docstrings](https://pypi.org/project/flake8-docstrings/): Adds pydocstyle support
- [flake8-isort](https://pypi.org/project/flake8-isort/): Use [isort](https://pypi.python.org/pypi/isort) to check if the imports on your python files are sorted the way you expect
- [flake8-logging-format](https://github.com/globality-corp/flake8-logging-format): Validate (lack of) logging format strings
- [flake8-pytest-style](https://pypi.org/project/flake8-pytest-style/): Checking common style issues or inconsistencies with pytest-based tests
- [flake8-requirements](https://pypi.org/project/flake8-requirements/): Checks/validates package import requirements. It reports missing and/or not used project direct dependencies
- [flake8-graphql](https://pypi.org/project/flake8-graphql/): Lint GraphQL query strings
- [flake8_implicit_str_concat](https://pypi.org/project/flake8_implicit_str_concat/): Goes well with black 🎉
- [flake8-mock](https://pypi.org/project/flake8-mock/): Check for mistakes using mocks
- [flake8-nb](https://pypi.org/project/flake8-nb/): Check jupyter notebooks
- [flake8-pyi](https://pypi.org/project/flake8-pyi/): Lint stub files
- [flake8-variables-names](https://pypi.org/project/flake8-variables-names/): Find common "meaningless" variable names
- [pep8-naming](https://pypi.org/project/pep8-naming/): Check your code against PEP 8 naming conventions
- [pandas-vet](https://pypi.org/project/pandas-vet/): Opinionated linting for Pandas code
- [wemake-python-styleguide](https://pypi.org/project/wemake-python-styleguide/): An opinionated style guide/checker which seems to be pretty popular. I haven't seen that one before, though.

### Security

- [flake8-bandit](https://pypi.org/project/flake8-bandit/): Security Testing
- [flake8-bugbear](https://pypi.org/project/flake8-bugbear/): finding likely bugs and design problems in your program - usually it's silent, but when it's not you should have a look 🐻
- [flake8-requests](https://pypi.org/project/flake8-requests/): checks usage of the request framework

### Flake8: Remove Debugging Artifacts

- [flake8-breakpoint](https://pypi.org/project/flake8-breakpoint/) checks for forgotten breakpoints
- [flake8-print](https://pypi.org/project/flake8-print/) will complain about every print statement
- [flake8-debugger](https://pypi.org/project/flake8-debugger/), [flake8-fixme](https://pypi.org/project/flake8-fixme/), [flake8-todo](https://pypi.org/project/flake8-todo/) go in the same direction.

### Let Dead Code Die

- [flake8-eradicate](https://pypi.org/project/flake8-eradicate/): Find commented out (or so-called "dead") code.
- **[vulture](https://pypi.org/project/vulture/): Finds unused code in Python programs**

```bash
pip install vulture
vulture myscript.py
vulture . --exclude .history
```

https://github.com/jendrikseipp/vulture

### Flake8: Nudging Yourself to use Good Style

- [flake8-comprehensions](https://pypi.org/project/flake8-comprehensions/): Helps you write better list/set/dict comprehensions - I love this one 😍
- [flake8-executable](https://pypi.org/project/flake8-executable/): Check executable permissions and [shebangs](https://en.wikipedia.org/wiki/Shebang_(Unix)). Files should either executable and have a shebang, or not be executable and not have a shebang.
- [flake8-raise](https://pypi.org/project/flake8-raise/): Finds improvements for raise statements
- [flake8-pytest](https://pypi.org/project/flake8-pytest/): Use assert instead of assertEqual

### Modern style Python

- [flake8-pathlib](https://pypi.org/project/flake8-pathlib/):[Pathlib](https://docs.python.org/3.4/library/pathlib.html) was added in Python 3.4 and I'm still not quite used to it. This plugin might nudge me to use it when it's appropriate.
- [flake8-string-format](https://pypi.org/project/flake8-string-format/), [flake8-printf-formatting](https://pypi.org/project/flake8-printf-formatting/), [flake8-sts](https://pypi.org/project/flake8-sfs/): String formatting.

### Improve Flake8

- [flake8--colors](https://pypi.org/project/flake8-colors/): ANSI colors highlight for Flake8
- [flake8-csv](https://pypi.org/project/flake8-csv/): Generate error reports in CSV format
- [flake8-json](https://pypi.org/project/flake8-json/): Generate error reports in JSON format
- [flake8-dashboard](https://pypi.org/project/flake8-dashboard/) and [flake8-html](https://pypi.org/project/flake8-html/): Generate an HTML report ([dashboard demo](https://aperezhortal.github.io/flake8-dashboard/example_dashboard/index.html))
- [flake8-immediate](https://pypi.org/project/flake8-immediate/): Prints the errors directly without any delay
- [flake8-strftime](https://pypi.org/project/flake8-strftime/): Checks for use of platform-specific strftime codes
- [flake8-SQL](https://pypi.org/project/flake8-SQL/) and [py-find-injection](http://py-find-injection/): Looks for SQL queries and checks them against an opinionated style
- [flake8-tuple](https://pypi.org/project/flake8-tuple/): Checks for (probably) unintended one element tuples
- And some plugins people might need for legal reasons like flake8-author, flake8-copyright, and flake8-license.

### Autoformatters

- [Prettier](https://prettier.io/docs/en/precommit.html#option-3-pre-commithttpsgithubcompre-commitpre-commit): HTML, CSS, JavaScript, GraphQL, and many more.
- [Clang-format](https://github.com/andrewseidl/githook-clang-format): C, C++, Java, JavaScript, Objective-C, Protobuf, C#
- [Rustfmt](https://github.com/doublify/pre-commit-rust): Rust

## Bandit

Bandit is a tool designed to find common security issues in Python code. To do this Bandit processes each file, builds an AST from it, and runs appropriate plugins against the AST nodes. Once Bandit has finished scanning all the files it generates a report.

https://pypi.org/project/bandit

## mypy

Mypy is an optional static type checker for Python that aims to combine the benefits of dynamic (or "duck") typing and static typing. Mypy combines the expressive power and convenience of Python with a powerful type system and compile-time type checking. Mypy type checks standard Python programs; run them using any Python VM with basically no runtime overhead.

http://mypy-lang.org

## Code Complexity

### radon

```python
$ pip install radon
$ radon cc mpu/aws.py -s
mpu/aws.py
F 85:0 s3_download - B (6)
F 16:0 list_files - A (3)
F 165:0 _s3_path_split - A (2)
F 46:0 s3_read - A (1)
F 141:0 s3_upload - A (1)
C 77:0 ExistsStrategy - A (1)
```

The first letter shows thetype of block(F for function, C for class). Then radon gives theline number, thenameof the class/function, agrade(A, B, C, D, E, or F), and the actualcomplexity as a number. Typically, a complexity below 10 is ok.[The most complex part of scipy](https://github.com/scipy/scipy/blob/master/scipy/sparse/linalg/eigen/lobpcg/lobpcg.py#L127) has a complexity of 61.

Besides radon, there are various other packages and Flake8 plugins:

- [flake8-annotations-complexity](https://pypi.org/project/flake8-annotations-complexity/): Nudge you to name complex types
- [flake8-cognitive-complexity](https://pypi.org/project/flake8-cognitive-complexity/): Validates cognitive functions complexity
- [flake8-expression-complexity](https://pypi.org/project/flake8-expression-complexity/): Make sure that single expressions are not too complicated; similar to cyclomatic complexity for functions / classes.
- [flake8-functions](https://pypi.org/project/flake8-functions/): Report too long functions and functions with too many arguments
- [mccabe](https://pypi.org/project/mccabe/): This is used by a couple of other tools and projects
- [wily](https://pypi.org/project/wily/): A command-line application for tracking, reporting on the complexity of Python tests and applications.
- [xenon](https://pypi.org/project/xenon/): Relies on radon

https://towardsdatascience.com/static-code-analysis-for-python-bdce10b8d287

Linting & formatting - https://realpython.com/python-pep8

## Pep8 Naming Convention for files

- modules (filenames) should have*short, all-lowercase names*, and they can contain underscores;
- packages (directories) should have*short, all-lowercase names*, preferably without underscores;
- classes should use the CapWords convention.

https://www.youtube.com/watch?v=4klj8UYPZxY&ab_channel=freeCodeCampTalks

## Others

[GitHub - Instagram/Fixit: Advanced Python linting framework with auto-fixes and hierarchical configuration that makes it easy to write custom in-repo lint rules.](https://github.com/Instagram/Fixit)

[Fixit: linting framework with auto-fixes — Fixit documentation](https://fixit.readthedocs.io/en/latest/)
