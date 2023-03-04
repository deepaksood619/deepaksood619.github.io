# Erlang

Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.

## OTP

OTP is set of Erlang libraries and design principles providing middle-ware to develop these systems. It includes its own distributed database, applications to interface towards other languages, debugging and release handling tools.

## Sequential Programming

- [Numbers](https://www.erlang.org/course/sequential-programming#numbers).
  - [Integers](https://www.erlang.org/course/sequential-programming#integers)
  - [Floats](https://www.erlang.org/course/sequential-programming#floats)
- [Atoms](https://www.erlang.org/course/sequential-programming#atoms)
- [Tuples](https://www.erlang.org/course/sequential-programming#tuples)
- [Lists](https://www.erlang.org/course/sequential-programming#lists)
- [Variables](https://www.erlang.org/course/sequential-programming#variables)
- [Complex Data Structures](https://www.erlang.org/course/sequential-programming#complex)
- [Pattern Matching](https://www.erlang.org/course/sequential-programming#patterns)
- [Function Calls](https://www.erlang.org/course/sequential-programming#functions)
- [The Module Systems](https://www.erlang.org/course/sequential-programming#modules)
- [Starting the system](https://www.erlang.org/course/sequential-programming#starting)
- [Built in Functions (BIFs)](https://www.erlang.org/course/sequential-programming#bifs)
- [Function syntax](https://www.erlang.org/course/sequential-programming#funcsyntax)
- [An example of function evaluation](https://www.erlang.org/course/sequential-programming#evaluation)
- [Guarded function clauses](https://www.erlang.org/course/sequential-programming#guardedfuncs)
  - [Examples of Guards](https://www.erlang.org/course/sequential-programming#guardexample)
- [Traversing Lists](https://www.erlang.org/course/sequential-programming#listtrav)
- [Lists and Accumulators](https://www.erlang.org/course/sequential-programming#listacc)
- [Shell commands](https://www.erlang.org/course/sequential-programming#shell)
- [Special Functions](https://www.erlang.org/course/sequential-programming#specialfuncs)
- [Special Forms](https://www.erlang.org/course/sequential-programming#specialforms)

## Concurrent Programming

- [Definitions](https://www.erlang.org/course/concurrent-programming#defs)
- [Creating a new process](https://www.erlang.org/course/concurrent-programming#newproc)
- [Simple message passing](https://www.erlang.org/course/concurrent-programming#messages)
- [An Echo Process](https://www.erlang.org/course/concurrent-programming#echo)
- [Selective Message Reception](https://www.erlang.org/course/concurrent-programming#select)
- [Selection of Any Message](https://www.erlang.org/course/concurrent-programming#selectany)
- [A Telephony Example](https://www.erlang.org/course/concurrent-programming#telephone)
- [Pids can be sent in messages](https://www.erlang.org/course/concurrent-programming#pidmsg)
- [Registered Processes](https://www.erlang.org/course/concurrent-programming#registered)
- [The Client Server Model](https://www.erlang.org/course/concurrent-programming#clientserver)
- [Timeouts](https://www.erlang.org/course/concurrent-programming#timeouts)

## ETS (Erlang Term Storage)

Erlang Term Storage, commonly referred to as ETS, is a powerful storage engine built into OTP and available to use in Elixir.

ETS is a robust in-memory store for Elixir and Erlang objects that comes included. ETS is capable of storing large amounts of data and offers constant time data access.

Tables in ETS are created and owned by individual processes. When an owner process terminates, its tables are destroyed. By default ETS is limited to 1400 tables per node.

Tables are divided into four different types, set, ordered_set, bag, andduplicate_bag. Asetorordered_settable can only have one object associated with each key. Abagorduplicate_bagtable can have many objects associated with each key.

<https://elixirschool.com/en/lessons/specifics/ets>

<http://erlang.org/doc/man/ets.html>

## References

<https://www.erlang.org>

<https://www.erlang.org/course>
