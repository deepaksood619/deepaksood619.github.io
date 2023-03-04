# Yaml

YAML Ain't Markup Language is a data serialization language that matches user's expectations about data. It designed to be human friendly and works perfectly with other programming languages. It is useful to manage data and includes Unicode printable characters. This chapter will give you an introduction to YAML and gives you an idea about its features.

## Features

YAML includes a markup language with important construct, to distinguish data-oriented language with the document markup. The design goals and features of YAML are given below −

- Matches native data structures of agile methodology and its languages such as Perl, Python, PHP, Ruby and JavaScript
- YAML data is portable between programming languages
- Includes data consistent data model
- Easily readable by humans
- Supports one-direction processing
- Ease of implementation and usage

## Basic Rules

- YAML is case sensitive
- The files should have.yamlas the extension
- YAML does not allow the use of tabs while creating YAML files; spaces are allowed instead

1. Collections and Structures
2. Scalars and Tags

There are only two types of structures you need to know about in YAML:

- Lists
- Maps

## YAML Maps

Let's start by looking at YAML maps. Maps let you associate name-value pairs, which of course is convenient when you're trying to set up configuration information. For example, you might have a config file that starts like this:

```yaml
---
apiVersion: v1
kind: Pod
```

The first line is a separator, and is optional unless you're trying to define multiple structures in a single file. From there, as you can see, we have two values, v1andPod, mapped to two keys, apiVersionandkind.

## YAML lists

YAML lists are literally a sequence of objects. For example:

```python
args:
  - sleep
  - "1000"
  - message
  - "Bring back Firefly!"
```

As you can see here, you can have virtually any number of items in a list, which is defined as items that start with a dash (-) indented from the parent.

YAML Front Matter, which can be parsed using a library called [gray-matter](https://github.com/jonschlinkert/gray-matter).

```yaml
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---
```

### npm install gray-matter

<https://github.com/jonschlinkert/gray-matter>

### References

<https://www.tutorialspoint.com/yaml/yaml_basics.htm>
