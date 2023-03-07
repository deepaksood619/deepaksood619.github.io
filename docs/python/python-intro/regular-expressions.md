# Regular Expressions

## Pythons Metacharacters

`. ^ $ * + ? { } [ ]  | ( )`

## Introduction

The [re](https://docs.python.org/3/library/re.html#module-re) module provides an interface to the regular expression engine, allowing us to compile REs into objects and then perform matches with them. (Perl like regular expression)

## Compiling

Regular expressions are compiled into pattern objects, which have methods for various operations such as searching for pattern matches or performing string substitutions.

re.compile() also accepts an optional *flags* argument, used to enable various special features and syntax variations.

```python
>>>import re

>>>p = re.compile('ab*', re.IGNORECASE)

>>>p

re.compile(r'ab*', re.IGNORECASE|re.UNICODE)

r'' represents that regular expression is in raw format
```

## Performing Matches

| **Method/Attribute** | **Purpose**                                                                                                                         |
|---------------------|---------------------------------------------------|
| match()              | Determine if the RE matches at the beginning of the string.                                                                         |
| search()             | Scan through a string, looking for any location where this RE matches.                                                              |
| findall()            | Find all substrings where the RE matches, and returns them as a list.                                                               |
| finditer()           | Find all substrings where the RE matches, and returns them as an [iterator](https://docs.python.org/3/glossary.html#term-iterator). |

match() and search() return None if no match can be found. If they're successful, a [match object](https://docs.python.org/3/library/re.html#match-objects) instance is returned, containing information about the match: where it starts and ends, the substring it matched, and more.

## re.match()

The [**re.match()**](https://docs.python.org/2/library/re.html#re.match) expression only matches at the *beginning*of the string.

It either returns a MatchObject instance or returns None if the string does not match the pattern.

```python
import re
bool(re.match(r'ly', 'similarly'))
>> False
bool(re.match(r'ly', 'ly how'))
>> True
```

We can query the [match object](https://docs.python.org/3/library/re.html#match-objects) for information about the matching string.

| **Method/Attribute** | **Purpose** |
|---|---|
| group() | Return the string matched by the RE |
| start() | Return the starting position of the match |
| end() | Return the ending position of the match |
| span() | Return a tuple containing the (start, end) positions of the match |

Since thematch()method only checks if the RE matches at the start of a string,start()will always be zero.

## group()

A group expression returns one or more subgroups of the match

```python
import re
m = re.match(r'(w+)@(w+).(w+)','username@hackerrank.com')
m.group(0) # The entire match
'username@hackerrank.com'
m.group(1) # The first parenthesized subgroup.
'username'
m.group(2) # The second parenthesized subgroup.
'hackerrank'
m.group(3) # The third parenthesized subgroup.
'com'
m.group(1,2,3) # Multiple arguments give us a tuple.
('username', 'hackerrank', 'com')
```

## groups()

A *groups()* expression returns a tuple containing all the subgroups of the match.

```python
import re
m = re.match(r'(w+)@(w+).(w+)','username@hackerrank.com')
m.groups()
('username', 'hackerrank', 'com')
```

## groupdict()

A *groupdict()* expression returns a dictionary containing all the named subgroups of the match, keyed by the subgroup name. (Used by named capture group)

```python
m = re.match(r'(?P<user>w+)@(?P<website>w+).(?P<extension>w+)','myname@hackerrank.com')
m.groupdict()
{'website': 'hackerrank', 'user': 'myname', 'extension': 'com'}
```

## re.search()

This function searches for first occurrence of RE *pattern*within *string*with optional *flags*.

Here is the syntax for this function
`re.search(pattern, string, flags = 0)`

The [re.search()](https://docs.python.org/2/library/re.html#re.search) expression scans through a string looking for the *first* location where the regex pattern produces a match.

It either returns a MatchObject instance or returns None if no position in the string matches the pattern.

```python
import re
bool(re.search(r'ly', 'similarly'))
>> True
```

| **S.No.** | **Parameter & Description** |
|---|---|
| 1 | `pattern` This is the regular expression to be matched. |
| 2 | `string` This is the string, which would be searched to match the pattern anywhere in the string. |
| 3 | `flags` You can specify different flags using `bitwise OR (\|)`. These are modifiers, which are listed in the table below. |

The *re.search* function returns amatchobject on success,none on failure. We use *group(num)* or *groups()* function ofmatchobject to get the matched expression.

### Named Capturing Groups

`(?P<name>group)` captures the match of group into the backreference "name"
name must be an alphanumeric sequence starting with a letter.
group can be any regular expression
We can reference the contents of the group with the named backreference `(?P=name)`

## re.findall()

The expression *re.findall()* returns all the non-overlapping matches of patterns in a string as a list of strings.

`re.findall(r'w+', '12 drummers drumming, 11 pipers piping, 10 lords a-leaping')`

We can use capture group to only capture the groups that we want to capture
Ex -

```python
>>>import re
>>>randStr = "My number is 412-555-1212"
>>>regex = re.compile(r"412-(.*)-(.*)")
>>>matches = re.findall(regex, randStr)
>>>print(matches)
[('555', '1212')]
>>>print(matches [0][0])
555
```

## re.finditer()

The expression *re.finditer()* returns an iterator yielding MatchObject instances over all non-overlapping matches for the *re* pattern in the string.

```python
iterator = re.finditer(r'w+', '12 drummers drumming, 11 pipers piping, 10 lords a-leaping')
for match in iterator:
 print(match.group())
```

## re.start() & re.end()

These expressions return the indices of the start and end of the substring matched by the group.

```python
import re
m = re.search(r'd+','1234')
m.end()
4
m.start()
0
re.start(1) # returns value for 1st capturing group
```

## re.sub() (Search and Replace)

The *re.sub()* tool (*sub* stands for *substitution*) evaluates a pattern and, for each valid match, it calls a *method* (or *lambda*).

The *method* is called for all matches and can be used to modify strings in different ways.

The *re.sub()* method returns the modified string as an output.

Syntax

```python
re.sub(pattern, replacement, string, max=0)
s = re.sub(r'(?<= )&&(?= )', 'and', s)
s = re.sub(r'(?<= )||(?= )', 'or', s)
```

This method replaces all occurrences of the RE *pattern* in *string* with *replacement*, substituting all occurrences unless *max* is provided. This method returns modified string.

## Backreference Substitution

Also we can use capturing group as a replacement

Ex1 - This code replaces the bold tag with the content inside the bold tag i.e. The Link

```python
>>>randStr = "<a href='#'><b>The Link</b></a>"
>>>regex = re.compile(r"<b>(.*?)</b>")
>>>randStr = re.sub(regex, r"1", randStr)
>>>print(randStr)
<a href='#'>The Link</a>
```

Ex2

```python
>>>randStr = '412-555-1212'
>>>regex = re.compile(r'([d]{3})-([d{3}-[d]{4})')
>>>randStr = re.sub(regex, r'(1)2', randStr)
>>>print(randStr)
(412)555-1212
```

## re.split(pattern, string, maxsplit=0, flags=0)

Split *string*by the occurrences of *pattern*. If capturing parentheses are used in *pattern*, then the text of all groups in the pattern are also returned as part of the resulting list. If *maxsplit*is nonzero, at most *maxsplit*splits occur, and the remainder of the string is returned as the final element of the list.

```python
re.split(r'W+', 'Words, words, words.')
['Words', 'words', 'words', '']

re.split(r'(W+)', 'Words, words, words.')
['Words', ', ', 'words', ', ', 'words', '.', '']

re.split(r'W+', 'Words, words, words.', 1)
['Words', 'words, words.']

re.split('[a-f]+', '0a3B9', flags=re.IGNORECASE)
['0', '3', '9']
```

## Compilation Flag

Compilation flags let you modify some aspects of how regular expressions work. Flags are available in the [re](https://docs.python.org/3/library/re.html#module-re) module under two names, a long name such asIGNORECASEand a short, one-letter form such asI.Multiple flags can be specified by bitwise OR-ing them;re.I|re.Msets both theI andMflags,

| **Flag**                    | **Meaning**                                                                                                   |
|-------------------|-----------------------------------------------------|
| ASCII,A                    | Makes several escapes likew,b,sanddmatch only on ASCII characters with the respective property. |
| DOTALL,S                   | Make.match any character, including newlines.                                                               |
| IGNORECASE,I               | Do case-insensitive matches.                                                                                  |
| LOCALE,L                   | Do a locale-aware match.                                                                                      |
| MULTILINE,M                | Multi-line matching, affecting^and$.                                                                     |
| VERBOSE,X(for 'extended') | Enable verbose REs, which can be organized more cleanly and understandably.                                   |

Also flags can be used in re.compile

Ex - re.compile(r"(?m)^.?s")
 Here ?m represents multiline flag

## Performance

When using a regular expression inside a loop, always use compile and then check for regular expression match inside a loop. CPU takes a lot of time to process the regular expression and using it inside a loop should not be done.

## References

<https://docs.python.org/3/howto/regex.html>

<https://www.tutorialspoint.com/python3/python_reg_expressions.htm>
