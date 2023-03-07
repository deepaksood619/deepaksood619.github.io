# Data Types

MongoDB supports many datatypes. Some of them are −

- **String−** This is the most commonly used datatype to store the data. String in MongoDB must be UTF-8 valid.
- **Integer−** This type is used to store a numerical value. Integer can be 32 bit or 64 bit depending upon your server.
- **Boolean−** This type is used to store a boolean (true/ false) value.
- **Double−** This type is used to store floating point values.
- **Min/ Max keys−** This type is used to compare a value against the lowest and highest BSON (Binary JSON) elements.
- **Arrays−** This type is used to store arrays or list or multiple values into one key.
- **Timestamp−** ctimestamp. This can be handy for recording when a document has been modified or added.
- **Object−** This datatype is used for embedded documents.
- **Null−** This type is used to store a Null value.
- **Symbol−** This datatype is used identically to a string; however, it's generally reserved for languages that use a specific symbol type.
- **Date−** This datatype is used to store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it.
- **Object ID−** This datatype is used to store the document's ID.
- **Binary data−** This datatype is used to store binary data.
- **Code−** This datatype is used to store JavaScript code into the document.
- **Regular expression−** This datatype is used to store regular expression.

## BSON (Binary JSON)

BSON [/ˈbiːsən/](https://en.wikipedia.org/wiki/Help:IPA/English) is a [computer](https://en.wikipedia.org/wiki/Computer) data interchange format. The name "BSON" is based on the term [JSON](https://en.wikipedia.org/wiki/JSON) and stands for "Binary JSON". It is a binary form for representing simple or complex [data structures](https://en.wikipedia.org/wiki/Data_structure) including [associative arrays](https://en.wikipedia.org/wiki/Associative_array)(also known as name-value pairs), integer indexed arrays, and a suite of fundamental scalar types. BSON originated in 2009 at [MongoDB](https://en.wikipedia.org/wiki/MongoDB). Several scalar data types are of specific interest to MongoDB and the format is used both as a data storage and network transfer format for the MongoDB database, but it can be used independently outside of MongoDB. Implementations are available in a variety of languages such as [C](https://en.wikipedia.org/wiki/C_(programming_language)), [C++](https://en.wikipedia.org/wiki/C%2B%2B), [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)), [D](https://en.wikipedia.org/wiki/D_(programming_language)), [Delphi](https://en.wikipedia.org/wiki/Delphi_(IDE)), [Erlang](https://en.wikipedia.org/wiki/Erlang_(programming_language)), [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), [Haskell](https://en.wikipedia.org/wiki/Haskell_(programming_language)), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)), [OCaml](https://en.wikipedia.org/wiki/OCaml), [Perl](https://en.wikipedia.org/wiki/Perl), [PHP](https://en.wikipedia.org/wiki/PHP), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)), [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)), [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), and [Swift](https://en.wikipedia.org/wiki/Swift_(programming_language)).

## JSON vs BSON

JSON (JavaScript Object Notation)-like XML, for example - is a human-readable standard used for data exchange. JSON has become the most widely used standard for data exchange on the web. JSON supports data types like booleans, numbers, strings, and arrays.
BSON, however, is the binary encoding that MongoDB uses to store its documents. It is similar to JSON, but it extends JSON to support more data types, likeDate. BSON documents, unlike JSON documents, are ordered. BSON usually takes less space than JSON and is faster to traverse. BSON, since it is binary, is also quicker to encode and decode.

## Capped Collections

[Capped collections](https://docs.mongodb.com/manual/reference/glossary/#term-capped-collection) are fixed-size collections that support high-throughput operations that insert and retrieve documents based on insertion order. Capped collections work in a way similar to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.
<https://docs.mongodb.com/manual/core/capped-collections>
