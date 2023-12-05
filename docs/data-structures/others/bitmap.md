# Bitmap

## Bitmap / Bit Array / Bit Vector / Bitmap index / Bit set / Bit string

A **bit array** (also known as **bit map**, **bit set**, **bit string**, or **bit vector**) is an [array data structure](https://en.wikipedia.org/wiki/Array_data_structure) that compactly stores [bits](https://en.wikipedia.org/wiki/Bit). It can be used to implement a simple [set data structure](https://en.wikipedia.org/wiki/Set_data_structure). A bit array is effective at exploiting bit-level parallelism in hardware to perform operations quickly. A typical bit array stores *kw* bits, where *w* is the number of bits in the unit of storage, such as a [byte](https://en.wikipedia.org/wiki/Byte) or [word](https://en.wikipedia.org/wiki/Word_(computer_architecture)), and *k* is some nonnegative integer. If *w* does not divide the number of bits to be stored, some space is wasted due to [internal fragmentation](https://en.wikipedia.org/wiki/Fragmentation_(computing)).

In [computing](https://en.wikipedia.org/wiki/Computing), abitmapis a mapping from some domain (for example, a range of integers) to [bits](https://en.wikipedia.org/wiki/Bit). It is also called a [bit array](https://en.wikipedia.org/wiki/Bit_array) or [bitmap index](https://en.wikipedia.org/wiki/Bitmap_index).

The more general termpix-maprefers to a map of [pixels](https://en.wikipedia.org/wiki/Pixel), where each one may store more than two colors, thus using more than one bit per pixel. Oftenbitmapis used for this as well. In some contexts, the termbitmapimplies one bit per pixel, whilepixmapis used for images with multiple bits per pixel.

A bitmap is a type of [memory](https://en.wikipedia.org/wiki/Computer_storage) organization or [image file format](https://en.wikipedia.org/wiki/Image_file_format) used to store [digital images](https://en.wikipedia.org/wiki/Digital_image). The termbitmapcomes from the [computer programming](https://en.wikipedia.org/wiki/Computer_programming) terminology, meaning just amap of bits, a spatially mapped [array of bits](https://en.wikipedia.org/wiki/Bit_array). Now, along withpixmap, it commonly refers to the similar concept of a spatially mapped array of pixels.[Raster](https://en.wikipedia.org/wiki/Raster_graphics) images in general may be referred to as bitmaps or pixmaps, whether synthetic or photographic, in files or memory.

## When should you use a bitmap?

Sets are a fundamental abstraction in software. They can be implemented in various ways, as hash sets, as trees, and so forth. In databases and search engines, sets are often an integral part of indexes. For example, we may need to maintain a set of all documents or rows (represented by numerical identifier) that satisfy some property. Besides adding or removing elements from the set, we need fast functions to compute the intersection, the union, the difference between sets, and so on.

To implement a set of integers, a particularly appealing strategy is the bitmap (also called bitset or bit vector). Using n bits, we can represent any set made of the integers from the range [0, n): the ith bit is set to one if integer i is present in the set. Commodity processors use words of W=32 or W=64 bits. By combining many such words, we can support large values of n. Intersections, unions and differences can then be implemented as bitwise AND, OR and ANDNOT operations. More complicated set functions can also be implemented as bitwise operations.

When the bitset approach is applicable, it can be orders of magnitude faster than other possible implementation of a set (e.g., as a hash set) while using several times less memory.

However, a bitset, even a compressed one is not always applicable. For example, if the you have 1000 random-looking integers, then a simple array might be the best representation. We refer to this case as the "sparse" scenario.

## When should you use compressed bitmaps?

An uncompressed BitSet can use a lot of memory. For example, if you take a BitSet and set the bit at position 1,000,000 to true and you have just over 100kB. That's over 100kB to store the position of one bit. This is wasteful even if you do not care about memory: suppose that you need to compute the intersection between this BitSet and another one that has a bit at position 1,000,001 to true, then you need to go through all these zeroes, whether you like it or not. That can become very wasteful.

This being said, there are definitively cases where attempting to use compressed bitmaps is wasteful. For example, if you have a small universe size. E.g., your bitmaps represent sets of integers from [0, n) where n is small (e.g., n=64 or n=128). If you are able to uncompressed BitSet and it does not blow up your memory usage, then compressed bitmaps are probably not useful to you. In fact, if you do not need compression, then a BitSet offers remarkable speed.

The sparse scenario is another use case where compressed bitmaps should not be used. Keep in mind that random-looking data is usually not compressible. E.g., if you have a small set of 32-bit random integers, it is not mathematically possible to use far less than 32 bits per integer, and attempts at compression can be counterproductive.

## References

https://en.wikipedia.org/wiki/Bitmap

https://en.wikipedia.org/wiki/Bit_array

https://github.com/RoaringBitmap/RoaringBitmap

http://paulbourke.net/dataformats/bitmaps
