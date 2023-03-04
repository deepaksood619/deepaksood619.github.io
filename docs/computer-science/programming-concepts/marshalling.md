# Marshalling

## Marshallingis the process of transforming the memory representation of an [object](https://en.wikipedia.org/wiki/Object_(computer_science)) to a data format suitable for storage or transmission, and it is typically used when data must be moved between different parts of a computer program or from one program to another. Marshalling is similar to [serialization](https://en.wikipedia.org/wiki/Serialization) and is used to communicate to remote objects with an object, in this case a serialized object. It simplifies complex communication, using composite objects in order to communicate instead of *primitives*. The inverse, of marshalling is called [*unmarshallin*](https://en.wikipedia.org/wiki/Unmarshalling) g (or *demarshalling*, similar to *deserialization*)

## Difference between Marshalling and Serialization

Serialization puts objects in a binary form without regard to data-types. Marshalling will transform the data-type into a predetermined naming convention so that it can be reconstructed with respect to the initial data-type.
Serialization is almost like a stupid memory-dump of the memory used by the object(s). There could be some transient data in there, and serialization would not be able to pick that up and make some sense out of this without further effort on your part.
Typically, marshalling touches primitive and known data-types as a freebie, but the most complex data-types (such as your classes) requires that you hint the interpreter on how to marshall and unmarshall.
I could also add that serialization may have some issues related to big-endian, small-endian if the stream is going from one OS to another if the different OS have different means of representing the same data. On the other hand, marshalling is perfectly fine to migrate between OS because the result is a higher-level representation.
In regards to commonality between marshalling and serialization, they both have in common to allow streaming of a representation of an object or a hierarchy of objects to typically be put in a medium (file, memory) for the reverse process to restore the initial object or object hierarchy.
