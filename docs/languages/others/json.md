# JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the [JavaScript Programming Language](http://javascript.crockford.com/), [Standard ECMA-262 3rd Edition - December 1999](http://www.ecma-international.org/publications/files/ecma-st/ECMA-262.pdf). JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

JSON is built on two structures:

- A collection of name/value pairs. In various languages, this is realized as anobject, record, struct, dictionary, hash table, keyed list, or associative array.
- An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

These are universal data structures. Virtually all modern programming languages support them in one form or another. It makes sense that a data format that is interchangeable with programming languages also be based on these structures.

Plain text formats, especially JSON, have some problems with number precision.

In JSON, they take on these forms:

1. **Object**

    An object is an unordered set of name/value pairs. An object begins with `{` (left brace)and ends with `}` (right brace). Each name is followed by `:` (colon)and the name/value pairs are separated by,(comma).

    ![image](../../media/JSON-image1.gif)

2. **Array**

    An array is an ordered collection of values. An array begins with `[` (left bracket)and ends with `]` (right bracket). Values are separated by `,` (comma).

    ![image](../../media/JSON-image2.gif)

3. **Value**

    A value can be a string in double quotes, or a number, or true or false or null, or an object or an array. These structures can be nested.

4. **String**

    A string is a sequence of zero or more Unicode characters, wrapped in double quotes, using backslash escapes. A character is represented as a single character string. A string is very much like a C or Java string.

5. **Number**

    A number is very much like a C or Java number, except that the octal and hexadecimal formats are not used.

6. **Boolean**

    true/false

    `{"sale":true}`

7. **Null**

    null

    `{"middlename":null}`

    Whitespace can be inserted between any pair of tokens. Excepting a few encoding details, that completely describes the language.

## Control Characters

The following characters are reserved in JSON and must be properly escaped to be used in strings:

- Backspace is replaced withb
- Form feed is replaced withf
- Newline is replaced withn
- Carriage return is replaced withr
- Tab is replaced witht
- Double quote is replaced with"
- Backslash is replaced with

## JSONP

JSONP([JSON](https://en.wikipedia.org/wiki/JSON) with Paddingor JSON-P) is a javascript pattern to request data by loading a `<script>` tag. It was proposed by Bob Ippolito in 2005.JSONP enables sharing of data bypassing [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy). The policy disallows running [JavaScript](https://en.wikipedia.org/wiki/JavaScript) to read media [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) elements or [XHR](https://en.wikipedia.org/wiki/XMLHttpRequest) data fetched from outside the page's origin. The aggregation of the site's scheme, port number and host name identifies as its origin.

## jsonnet

https://jsonnet.org

## qp (query-pipe)

query-pipe: command-line (ND)JSON querying

A tool for filtering and transforming JSON from the command-line. Automatically interprets Newline Delimited JSON (NDJSON) fromstdin, including pretty-printed NDJSON, and can optionally query top-level array input.

- a familiar and approachable SQL-like query language
- ~600kbbinary, withzeroruntime dependencies (compiled with [QuickJS](https://bellard.org/quickjs/))

https://github.com/paybase/qp

## JMESPath

JMESPath is a query language for JSON.

## Example

az network public-ip list --resource-group MC_Technology_dev-kubernetes-cluster_southindia -o json --query "[*].name"

http://jmespath.org

http://jmespath.org/tutorial.html

## JSON_SR

`JSON_SR` is a format used for serializing and deserializing JSON data with a schema registered in a Schema Registry, typically in a Kafka environment. The key distinction between regular `JSON` and `JSON_SR` is that `JSON_SR` also handles the registration of the schema in a schema registry, ensuring that both the structure of the data and the data itself are stored. This is particularly useful in systems like Kafka Streams and ksqlDB, where managing schema evolution and data validation is critical.

Using `JSON_SR` allows for both reading and writing schemas while working with Kafka topics, ensuring data consistency and compatibility across different systems. In contrast, standard `JSON` serialization does not include schema metadata, which can lead to deserialization errors if the data structure is modified without proper schema management.

In essence, `JSON_SR` is beneficial in scenarios where you need strict schema control for JSON data in Kafka systems

[Why JSON isn’t the same as JSON Schema in Kafka Connect converters and ksqlDB (Viewing Kafka messages bytes as hex)](https://rmoff.net/2020/07/03/why-json-isnt-the-same-as-json-schema-in-kafka-connect-converters-and-ksqldb-viewing-kafka-messages-bytes-as-hex/)

[ksqlDB Serialization Formats](https://docs.ksqldb.io/en/0.10.0-ksqldb/developer-guide/serialization/)

## JSON-LD

Javascript Object Notation for Linking Data

JSON-LD is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale. JSON-LD is an ideal data format for programming environments, REST Web services, and unstructured databases such as Apache CouchDB and MongoDB.

[JSON-LD - JSON for Linking Data](https://json-ld.org/)

Usage in structured data markup in Google Search - [Intro to How Structured Data Markup Works | Google Search Central  |  Documentation  |  Google for Developers](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

## References

http://json.org

JSON Schema Definition - http://json-schema.org/draft-04/json-schema-core.html

https://www.jsonschema.net
