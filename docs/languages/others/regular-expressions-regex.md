# Regular Expressions / Regex

Its different from wildcards (Wildcards have very few metacharacters than Regular Expressions)

## Standards

1. BRE (Basic Regular Expressions)
2. ERE (Extended Regular Expressions)

A **regex processor** translates a regular expression into an internal representation which can be executed and matched against a [string](https://en.wikipedia.org/wiki/String_(computing)) representing the text being searched in. One possible approach is the [Thompson's construction algorithm](https://en.wikipedia.org/wiki/Thompson%27s_construction_algorithm) to construct a [nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton)(NFA), which is then [made deterministic](https://en.wikipedia.org/wiki/Powerset_construction) and the resulting [deterministic finite automaton](https://en.wikipedia.org/wiki/Deterministic_finite_automaton)(DFA) is run on the target text string to recognize substrings that match the regular expression.

## Regex Engines

1. C#
2. Ruby
3. PHP
4. Perl (PCRE - Perl Compatible Regular Expressions)
5. Java
6. JavaScript
7. Python

## Regular Expression

At its core, a regular expression is a search pattern that is used to find substrings inside a string. We can use it to validate whether a string follows a specific pattern or not.

In the 1950s, the mathematician [Stephen Cole Kleene](https://en.wikipedia.org/wiki/Stephen_Cole_Kleene) created regular expressions as a way to describe [regular languages](https://en.wikipedia.org/wiki/Regular_language). That's a language that you can express as a regular expression. (So meta!) [So meta meaning self aware, self referencing]

## Syntax

### Delimiters

Delimiters are the boundaries of our regular expressions. The most common delimiter is forward slash ( / ).

It depends on the type of programming language. Other delimiters are -

```python
- Hashtags ( # )
- Percentage signs ( % )
- Plus signs ( + )
- Tildes ( ~ )
- Rarely `(), {}, [], <>` these brackets are also used as delimiters
```

Reason for using these many types of delimiters is readability. If we use one type of delimiters and that same delimiter is also used inside the regex then we have to escape all the other symbol using backslash. But using other delimiter instead of that is far easier.

### Pattern, atoms and metacharacters

Inside our delimiters, we have the pattern that we want our regular expression to look for. This pattern is made up of what we call atoms. An atom can be either a character literal or metacharacter or a character class.

Metacharacters have a special meaning when used in regular expressions and are by far the most important part of a regular expression. A regular expression without metacharacters is just a string literal.

Most regular expression processors support at least fourteen metacharacters. These are `{}[]()^$.|*+?`

Meaning of metacharacters fall under four broad groups - **escaping, grouping, matching literal characters and quantifiers.**

### Escaping ( `\` )

The backslash ( `\` ) is the escape character used by regular expressions.

#### Uses

- To escape a character if it is a delimiter.
- To convert literal characters into character classes. Ex- w is a character literal, but when we escape it using  it becomes ( w ). w is a shortcut character class which represents all the alphanumeric characters as well as _ (underscore)

## Matching character literals

`\w` for example that match character literals.

### Character Classes or character sets

A character class matches only one out of several characters. They are a way to represent multiple character literals. We use square brackets ( [] ) to contain these character literals. This tells the regular expression to look for one of these character literals when searching a string.

`Ex - [0-9], [a-z], [A-Z], [A-Za-z]`

### Shortcut character classes

```python
w = [A-Za-z0-9_]
d = [0-9]
s = [ trnvf] (Whitespace characters)
b = word boundary
```

`(r"bapeb")`, will only match ape and not apex since it's defined by word boundary

### Metacharacters inside character classes

Most metacharacters won't work inside a character class. The only one that works are backslash ( \ ), the closing square bracket ( ] ) and the caret ( ^ ).

### Negated character classes ( `[^`)

Define character classes that match anything but what's in them. Reverse.

Ex - `[0-9]` matches any number, `[^0-9]`matches anything but a number.

`( [^ )` is how we define the negated character class.

#### Negated shortcut character classes

1. \W = matches anything but an alphanumeric character literal
2. \D = matches anything but a number
3. \S = matches anything but a whitespace character

### Matching (almost) any character literal ( . )

We use the dot when we want to match a character literal without caring what that character literal is.

The only character literal that a dot won't match by default are line break characters. Because earlier regular expressions worked line by line.

Dot metacharacter is powerful but we should use it with caution as it can create unforeseen bugs. So we should use negated character class instead of dot metacharacter.

## Quantifiers

They are a way to tell the regular expression processor how many times we want to match an atom.

Three main quantifier metacharacters

1. Question mark ( ? )
    Preceding atom optional, means match the preceding atom 0 or 1 times.

2. Kleene star ( *)
    Match preceding atom 0 or more times
    Ex - ( .* ) = match anything for as long as possible

3. Kleene plus ( + )
    Match preceding atom 1 or more times

4. +? - lazy Kleene plus (match as few characters as possible)

5. *? - lazy Kleene star

6. ?? - lazy question mark

7. `{n}` - The preceding item is matched exactly *n* times.
8. `{min,}` - The preceding item is matched *min*or more times.
9. `{min, max}` - The preceding item is matched at least *min*times, but not more than *max*times.
10. `{min, max}?` - Lazy quantifier

## Greediness

A regular expression processor is always greedy. It'll always try to match a repeating atom as long as it can. It will only stop matching a repeating atom when continuing to do so would prevent the regular expression processor from finding a match.

Ex - `/<.*>/` because of greediness, this will match every character instead of html tag in an html document.

There are two ways to solve the greediness problem -

### Making quantifiers lazy

So how do you turn a greedy quantifier into a lazy one? It's simple! You just need to add a question mark at the end of it. This works for all three quantifier metacharacters that we've seen so far too!

Ex - ?? Is the lazy version of the ? quantifier metacharacter. It'll try to match an atom 0 times instead of once if it can. Meanwhile, `*?` and `+?` are the lazy versions of the `*` and `+` quantifier metacharacters respectively. They'll both try to match an atom as little as possible instead of as long as possible.

Ex - **`/<.*?>/`** this will solve the html tag problem

### Use negated character classes

Ex - `/<[^>]*>/` this will match all the HTML tags in our HTML block without the need for lazy quantifier.

## Custom quantifiers

```python
We use { } to define how many times we want to match an atom.
Format = {min, max}
Can be used instead of main quantifiers -
    Question mark ? = {0,1}
    Kleene star * = {0,}
    Kleene plus + = {1,}
```

### Grouping

We need to put them in parentheses `( )` . This tells the regex processor that we want to use these atoms as a single unit.

Ex - `/dish(es)?/` This regular expression would match either the word "dish" or its plural form "dishes". That's because(es)?tells the regular expression processor to match the "es" character literals 0 or 1 times.

## Alternation - ( | ) (logical disjunction)

The [vertical bar](https://en.wikipedia.org/wiki/Vertical_bar)(|) metacharacter is the "or" operator for regular expressions. It's how we represent this choice between multiple patterns.

There are no limits to how many pattern choices you can put inside your parentheses.

It will always stop when it reaches the first match.

Ex - let's say that we're looking for a [URL](https://en.wikipedia.org/wiki/URL) path like/pathand/path/value. If you write it as `/(\/path|\/path\/value)/` (`\/` is an escaped slash), the regular expression processor will never match/path/value. Instead, we want to write it as `/(\/path\/value|\/path)/`.

## Capturing

Capturing lets us store part of a matched string for reuse.

## Numbered capture group

`(A|B)1(abc)2`

## Named capture group

`/(?<full_path>/path(?<subdir>/[^/]+))/` is our updated regular expression with named capture groups. You'll notice that the way to define a named capture group is by using `(?<name>` at the beginning. You just need to replacename with whatever name you want to use for your capture group.

Python's re module was the first to offer the solution to numbered capture group: named capturing groups and named backreferences. `(?P<name>group)` captures the match ofgroupinto the backreference "name".namemust be an alphanumeric sequence starting with a letter.groupcan be any regular expression. You can reference the contents of the group with the named backreference(?P=name). The question mark, P, angle brackets, and equals signs are all part of the syntax. Though the syntax for the named backreference uses parentheses, it's just a backreference that doesn't do any capturing or grouping. The [HTML tags example](https://www.regular-expressions.info/backref.html) can be written as `<(?P<tag>[A-Z][A-Z0-9]*)\b[^>]*>.*?</(?P=tag)>`.

## Anchors

Used to match specific position inside a string

Types

1. Caret `( ^ )` - represents starting position of a string
2. Dollar sign `( $ )` - represents the ending position of a string

Ex -

We have this regular expression: `/^\/path$/`. This regular expression would only match the/pathstring. That's because we used both the starting and ending position anchors.

if we want to just match a string that starts with/path, we would just use the `/^\/path/`regular expression.

## Modifiers

There are a lot of different modifiers -

1. ( i ) - case insensitive

    Ex - we have /this/i as a regular expression. It would match any variation of "this" with lowercase and uppercase letters.

2. ( s ) - It makes the dot match all possible characters including line breaks.

3. ( m ) - This modifier makes the caret and dollar sign match the starting and ending position of a line instead of a string.

## Backreferences

Within the regular expression, you can use the backreference \1 to match the same text that was matched by the capturing group. `([abc])=\1` matches `a=a`, `b=b`, and `c=c`. It does not match anything else. If your regex has multiple capturing groups, they are numbered counting their opening parentheses from left to right.

Ex - `(a)(b)/1/2`

Here `/1` will have a as the value and `/2` will have b as the value. The number corresponds to that number of the character class.

`\0` - full matched text

`\1` - group 1

`\2` - group 2, and so on.

## Advanced Topics

- Conditionals
- Atomic Groups
- Named Capture
- Inline modifiers
- Subroutines
- Recursive expressions
- Predefined subroutines
- Branch reset
- Inline comments

## Lookarounds

Lookaround is a special kind of group. The tokens inside the group are matched normally, but then the regex engine makes the group give up its match and keeps only the result. Lookaround matches a position, just like anchors. It does not expand the regex match.

The main point for lookaround is that at the end of a lookahead or a lookbehind, the regex engine hasn't moved on the string. You can chain three more lookaheads after the first, and the regex engine still won't move. In fact, that's a useful technique.

You can use a full-fledged regular expression inside lookahead. Most applications only allow fixed-length expressions in lookbehind.

## Lookahead

### Lookahead or Positive lookahead `(?= … )`

`q(?=u)` matches the q in question, but not in Iraq. This is positive lookahead. The u is not part of the overall regex match. The lookahead matches at each position in the string before a u.

### Negative lookahead `(?! … )`

`q(?!u)` matches q in Iraq but not in question. This is negative lookahead. The tokens inside the lookahead are attempted, their match is discarded, and the result is inverted.

## Lookbehind

### Lookbehind or Positive lookbehind `(?<= … )`

To look backwards, use lookbehind.`(?<=a)b` matches the b in abc. This is positive lookbehind.

### Negative lookbehind `(?<! … )`

`(?<!a)b` fails to match abc.

Ex - This is just `\n` a simple sentence

#### Positive lookbehind

`(?<=This is)(.*)(?=sentence)`

#### Positive lookahead

`(?<=This is)(.*)(?=sentence)`

Output - just `\n` a simple

| **Lookaround** | **Name**            | **What it Does**                                                                       |
|---------------|----------------|------------------------------------------|
| `(?=foo)`        | Lookahead           | Asserts that what immediately follows the current position in the string is *foo*      |
| `(?<=foo)`      | Lookbehind          | Asserts that what immediately precedes the current position in the string is *foo*     |
| `(?!foo)`        | Negative Lookahead  | Asserts that what immediately follows the current position in the string is not *foo*  |
| `(?<!foo)`      | Negative Lookbehind | Asserts that what immediately precedes the current position in the string is not *foo* |

`\A(?=\w{6,10}\z)`

[lazy quantifier requires backtracking at each step](http://www.rexegg.com/regex-quantifiers.html#lazy_expensive). (therefore lazy quantifier is not too efficient)

`Non-Capturing group (?:regex)` - Non-capturing parentheses group the regex so you can apply regex operators, but do not capture anything

`(?:abc){3}` matches `abcabcabc`. No groups.

## Regex for Not Repeating Characters

`(?!.*(.).*1)[ABCD]*` - Gives Unique Characters

`(?!.*([^s]).*1)[ABCD]+` - Gives Unique Characters

## Confusing Couples

### Confusing Couple #1: `(?: … ) and (?= … )`

These false twins have very different jobs. `(?: ... )` contains a non-capturing group, while `(?= ... )` is a lookahead.

### Confusing Couple #2: `(?<= … ) and (?> … )`

`(?<= ... )` is a lookbehind, so `(?> ... )` must be a lookahead, right? Not so. `(?> ... )` contains an atomic group. The actual lookahead marker is `(?= ... )`.

### Confusing Couple #3: `(?(1) … ) and (?1)`

This pair is delightfully confusing. The first is a [conditional expression](http://www.rexegg.com/regex-disambiguation.html#conditionals) that tests whether Group 1 has been captured. The second is a [subroutine call](http://www.rexegg.com/regex-disambiguation.html#recursive) that matches the sub-pattern contained within the capturing parentheses of Group 1.

## Non-Capturing Groups

For instance `(?:Bob|Chloe)` matches *Bob* or *Chloe* - but the name is not captured.

http://www.rexegg.com/regex-disambiguation.html#lookarounds

## Points to remember

1. Regex - `(.){2}(.)\1\2`

    Solution - 11212 (`\1` only see the first capturing group once )

2. Use Lookarounds instead of direct matches and replacing with same letters, so that two consecutive matches can be found, i.e. overlapping patterns

    ```bash
    Ex
        s = re.sub(r'(?<= )&&(?= )', 'and', s)
        s = re.sub(r'(?<= )\|\|(?= )', 'or', s)
    Instead of
        s = re.sub(r' && ', ' and ', s)
        s = re.sub(r' \|\| ', ' or ', s)
    ```

    In above example space was directly used to match the pattern instead of lookarounds, by which two consecutive matches are skipped.

## Cheatsheet

### Quantifiers

| n*    | 0 or moren |
|--------|-------------|
| n+     | 1 or moren |
| n?     | 0 or 1n    |
| `n{2}`   | Exactly 2n |
| `n{2,}`  | 2 or moren |
| `n{2,4}` | 2, 3 or 4n |

`.*` means "match whatever"

`.*?` means "match the least of whatever"

### Ranges

|           |                                                          |
|------------|---------------------------------------------------------|
| .         | Any character except new line (`\n`)                     |
| `(A\|B)`  |  A or B                                                 |
| (...)     | Group                                                   |
| [ABC]    | Range (A, B or C)                                       |
| [^ABC]  | Not A, B or C                                           |
| [A-Z]    | Character between A and Z, upper case                   |
| [0-9]    | Number between 0 and 9                                  |
| [A-Z0-9] | Characters between A and Z, and numbers between 0 and 9 |
| `\n`     | nth group /sub pattern                                   |

### Anchors

|     |             |
|-----|---------------|
| ^  | Start of line |
| $  | End of line   |

### Character Classes

|     |                                                |
|-----|-------------------------------------------------|
| w | Word (a-z, A-Z, 0-9, including _ (underscore)) |
| W | Non-word                                        |
| d | Digit (0-9)                                     |
| D | Non-digit                                       |
| s | Whitespace                                      |
| S | Not whitespace                                  |
| b | Match at beginning or end (word boundary)       |
| B | Do not match at beginning or end                |
| 0 | NUL character                                   |
| n | New line                                        |

### Assertions

|  |  |
|---|---|
| `n(?=o)` | Positive Lookahead, n followed by o (not matching o) |
| `n(?!o)` | Negative lookahead, n not followed by o (not matching o) |

### Others

`\A` - Anchor asserts that the current position is the beginning of the string

`\z` - Anchor asserts that the current position is the end of the string

https://dzone.com/refcardz/regular-expressions

http://www.rexegg.com/regex-quickstart.html

## Glob patterns

In [computer programming](https://en.wikipedia.org/wiki/Computer_programming), **glob** patterns specify sets of filenames with [wildcard characters](https://en.wikipedia.org/wiki/Wildcard_characters). For example, the Unix [Bash shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) commandmv*.txt textfiles/moves (mv) all files with names ending in.txtfrom the current directory to the directorytextfiles. Here,*is a wildcard standing for "any [string](https://en.wikipedia.org/wiki/String_(computer_science)) of characters" and*.txtis a glob pattern. The other common wildcard is the question mark (?), which stands for one character.

https://en.wikipedia.org/wiki/Glob_(programming)

## Search and Replace using Variables

```python
(<col style="width: )(.*)
$1$2/>
```

[VS Code: Search-and-Replace Regex - DEV Community 👩‍💻👨‍💻](https://dev.to/rfornal/vs-code-search-and-replace-regex-mn2)

## Learn

https://en.wikipedia.org/wiki/Regular_expression

https://carlalexander.ca/beginners-guide-regular-expressions

http://www.regular-expressions.info/tutorial.html

## Tools

https://regex101.com

https://regexr.com

## Challenges

https://www.hackerrank.com/domains/regex/re-introduction

https://regex.sketchengine.co.uk

https://regexcrossword.com (Rank - https://regexcrossword.com/profile/38485)

https://regexone.com

http://play.inginf.units.it

## Others

https://github.com/google/re2/wiki/Syntax

## View non-printable unicode characters

https://www.soscisurvey.de/tools/view-chars.php
