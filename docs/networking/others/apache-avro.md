# Apache Avro

*Apache Avro is a **language-neutral fast data serialization system**.* It was developed by Doug Cutting, the father of Hadoop. Since Hadoop writable classes lack language portability, Avro becomes quite helpful, as it deals with data formats that can be processed by multiple languages. Avro is a preferred tool to serialize data in Hadoop.
Avro has a schema-based system. A language-independent schema is associated with its read and write operations. Avro serializes the data which has a built-in schema. Avro serializes the data into a compact binary format, which can be deserialized by any application.

Avro uses JSON format to declare the data structures. Presently, it supports languages such as Java, C, C++, C#, Python, and Ruby.

*One of the most interesting features of Avro, and what makes it a good fit for use in a messaging system like Kafka, is that when the application that is writing messages switches to a new schema, the application reading the data can continue processing messages without requiring any change or update.*

Avro provides:

- Rich data structures.
- A compact, fast, binary data format.
- A container file, to store persistent data.
- Remote procedure call (RPC).
- Simple integration with dynamic languages. Code generation is not required to read or write data files nor to use or implement RPC protocols. Code generation as an optional optimization, only worth implementing for statically typed languages.

## Avro Schemas

Avro depends heavily on itsschema. It allows every data to be written with no prior knowledge of the schema. It serializes fast and the resulting serialized data is lesser in size. Schema is stored along with the Avro data in a file for any further processing.

In RPC, the client and the server exchange schemas during the connection. (This can be optimized so that, for most calls, no schemas are actually transmitted.) Since both client and server both have the other's full schema, correspondence between same named fields, missing fields, extra fields, etc. can all be easily resolved.

Avro schemas are defined with JSON that simplifies its implementation in languages with JSON libraries.

Like Avro, there are other serialization mechanisms in Hadoop such asSequence Files, Protocol Buffers, andThrift.

## Schemas

Avro relies on schemas. When Avro data is read, the schema used when writing it is always present. This permits each datum to be written with no per-value overheads, making serialization both fast and small. This also facilitates use with dynamic, scripting languages, since data, together with its schema, is fully self-describing.

When Avro data is stored in a file, its schema is stored with it, so that files may be processed later by any program. If the program reading the data expects a different schema this can be easily resolved, since both schemas are present.

When Avro is used in RPC, the client and server exchange schemas in the connection handshake. (This can be optimized so that, for most calls, no schemas are actually transmitted.) Since both client and server both have the other's full schema, correspondence between same named fields, missing fields, extra fields, etc. can all be easily resolved.

Avro schemas are defined with [JSON](https://www.json.org/). This facilitates implementation in languages that already have JSON libraries.

## Comparison with other systems

Avro provides functionality similar to systems such as [Thrift](https://thrift.apache.org/), [Protocol Buffers](https://code.google.com/p/protobuf/), etc. Avro differs from these systems in the following fundamental aspects.

- **Dynamic typing:** Avro does not require that code be generated. Data is always accompanied by a schema that permits full processing of that data without code generation, static datatypes, etc. This facilitates construction of generic data-processing systems and languages.
- **Untagged data:** Since the schema is present when data is read, considerably less type information need be encoded with data, resulting in smaller serialization size.
- **No manually-assigned field IDs:** When a schema changes, both the old and new schema are always present when processing data, so differences may be resolved symbolically, using field names.

## Features of Avro

- Avro is a language-neutraldata serialization system.
- It can be processed by many languages (currently C, C++, C#, Java, Python, and Ruby).
- Avro creates binary structured format that is both compressible and split table. Hence it can be efficiently used as the input to Hadoop MapReduce jobs.
- Avro provides rich data structures. For example, you can create a record that contains an array, an enumerated type, and a sub record. These datatypes can be created in any language, can be processed in Hadoop, and the results can be fed to a third language.
- Avro schemas defined inJSON, facilitate implementation in the languages that already have JSON libraries.
- Avro creates a self-describing file namedAvro Data File, in which it stores data along with its schema in the metadata section.
- Avro is also used in Remote Procedure Calls (RPCs). During RPC, client and server exchange schemas in the connection handshake.
- It has a direct mapping to and from JSON
- It has a very compact format. The bulk of JSON, repeating every field name with every single record, is what makes JSON inefficient for high-volume usage.
- It is very fast.
- It has great bindings for a wide variety of programming languages so you can generate Java objects that make working with event data easier, but it does not require code generation so tools can be written generically for any data stream.
- It has a rich, extensible schema language defined in pure JSON
- It has the best notion of compatibility for evolving your data over time.

## Effective Avro

Here are some recommendations specific to Avro:

- Use enumerated values whenever possible instead of magic strings. Avro allows specifying the set of values that can be used in the schema as an enumeration. This avoids typos in data producer code making its way into the production data set that will be recorded for all time.
- Require documentation for all fields. Even seemingly obvious fields often have non-obvious details. Try to get them all written down in the schema so that anyone who needs to really understand the meaning of the field need not go any further.
- Avoid non-trivial union types and recursive types. These are Avro features that map poorly to most other systems. Since our goal is an intermediate format that maps well to other systems we want to avoid any overly advanced features.
- Enforce reasonable schema and field naming conventions. Since these schemas will map into Hadoop having common fields like customer_id named the same across events will be very helpful in making sure that joins between these are easy to do. A reasonable scheme might be something like PageViewEvent, OrderEvent, ApplicationBounceEvent, etc.- Avro Support Athena as Deser for querying

<https://docs.aws.amazon.com/athena/latest/ug/avro.html>

#### Disadvantage

Can't directly see files in S3, only csv, json and parquet supported in s3

## Tools

<https://github.com/sksamuel/avro4s>

## References

<https://www.tutorialspoint.com/avro/avro_overview.htm>

<http://cloudurable.com/blog/avro/index.html>

<http://avro.apache.org/docs/current>

<https://docs.oracle.com/database/nosql-12.1.3.0/GettingStartedGuide/avroschemas.html>

<https://www.sderosiaux.com/articles/2017/03/02/serializing-data-efficiently-with-apache-avro-and-dealing-with-a-schema-registry>
