# Bitmap Compression Algorithms

1. Byte-aligned Bitmap Code

2. Word-Aligned Hybrid (WAH) code

3. Partitioned Word-Aligned Hybrid (PWAH) compression.

4. Enhanced Word-Aligned Hybrid (EWAH)

## Concise Bitmap Compression Algorithm

## Abstract

Bit arrays, or bitmaps, are used to significantly speed up set operations in several areas, such as data warehousing, information retrieval, and data mining, to cite a few. However, bitmaps usually use a large storage space, thus requiring compression. Nevertheless, there is a space-time tradeoff among compression schemes. TheWord Aligned Hybrid(WAH) bitmap compression trades some space to allow for bitwise operations without first decompressing bitmaps. WAH has been recognized as the most efficient scheme in terms of computation time. In this paper we present CONCISE(Compressed 'n' ComposableIntegerSet), a new scheme that enjoys significatively better performances than those of WAH. In particular, when compared to WAH, our algorithm is able to reduce the required memory up to 50%, by having similar or better performance in terms of computation time. Further, we show that CONCISE can be efficiently used to manipulate bitmaps representing sets of integral numbers in lieu of well-known data structures such as arrays, lists, hashtables, and self-balancing binary search trees. Extensive experiments over synthetic data show the effectiveness of our approach.

## Conclusion

Because of their property of leveraging bit-level parallelism, computations over bitmaps often outperform computations over many other data structures such as self-balancing binary searchtrees, hash tables, or simple arrays. We demonstrated, throughexperiment on synthetic datasets, that bitmaps can be very effi-cient when data are dense.However, when data become sparse, uncompressed bitmapsperform poorly due to the waste of memory. In this paper we in-troduced a new compression scheme for bitmaps, referred to as CONCISE, that is a good trade-offbetween the speed of uncom-pressed bitmaps and the required memory. Indeed, CONCISE outperformed all analyzed data structures in terms of memory occupation, as well as WAH, the best known compression algo-rithm that allows for set operations directly on the compressedform. As for computation time, CONCISEalso outperformedclassical data structures for set operations.However, accessing individual elements can be expensivefor both CONCISE and WAH. If random access is more commonthan sequential access, and the integer set is relatively small, classical data structures may be preferable

<https://arxiv.org/pdf/1004.0403.pdf>

Most word-aligned run-length encoding algorithms represent long sequences of ones and zeros in a single word. The word contains the length of the sequence and some information about whether it is a one fill or a zero fill. Sequences that contain a mixture of 0 and 1 bits are stored in 32 bit blocks known as literals. An example of word-aligned hybrid compression is shown below:

Given a bitstream: `[10110...1][000...010][010...011]`

There are three separate 32 bit sequences in the bitstream.

```python
1. [1]0110...1- 31 "dirty" bits (a literal)
2. [00]0...010- 31 x 2 zeros (a sequence of zeros)
3. [01]0...011- 31 x 3 ones (a sequences of ones)
```

[Concise](http://ricerca.mat.uniroma3.it/users/colanton/docs/concise.pdf) bitmap compression introduces the concept of a mixed fill, where fills and literals can be represented in a single word. The author of the original Concise paper claims that Concise outperforms WAH by reducing the size of the compressed bitmaps by up to 50%. For mixed fill sequences, the first 2 bits indicate the type of fill (0 or 1). The next 5 bits can be used to indicate the position where bits flip from 0 to 1 or vice versa. An example of the Concise representation for the integer set {3, 5, 31-93, 1,024, 1,028, 1,040,187,422} is shown below:

```python
1. [1]0...101000
2. [01][00000]0...01
3. [00][00001]0...11101
4. [1]0...100010
5. [00][00000]1...1011101
6. [1]10...0
```

Concisesets share a very important property with other bitmap compression schemes: they can be operated on in their compressed form.

<https://druid.apache.org/blog/2012/09/21/druid-bitmap-compression.html>

## Roaring BitMap

Compressed bitmap indexes are used in databases and search engines. Many bitmap compression techniques have been proposed, almost all relying primarily on run-length encoding (RLE). However, on unsorted data, we can get superior performance with a hybrid compression technique that uses both uncompressed bitmaps and packed arrays inside a two-level tree. An instance of this technique, Roaring, has recently been proposed.Due to its good performance, it has been adopted by several production platforms (e.g., Apache Lucene, Apache Spark, Apache Kylin and Druid).Yet there are cases where run-length encoded bitmaps are smaller than the original Roaring bitmaps - typically when the data is sorted so that the bitmaps containlong compressible runs. To better handlethese cases, we build a new Roaring hybrid that combines uncompressed bitmaps, packed arrays and RLEcompressed segments. The result is a new Roaring format thatcompresses better.Overall, our new implementation of Roaring can be several times faster (up to two orders of magnitude)than the implementations of traditional RLE-based alternatives (WAH, Concise, EWAH) while compressing better. We review the design choices and optimizations thatmake these good results possible.

<https://arxiv.org/pdf/1603.06549.pdf>
