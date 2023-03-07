# System Sort

Java System Sort - Arrays.sort()

- Has different method for each primitive type
- Has a method for data types that implement Comparable
- Has a method that uses a Comparator
- Uses tuned quicksort for primitive types; tuned mergesort for objects

Quicksort

- Cutoff to insertion sort for small subarrays
- Partitioning scheme: Bentley-Mcllroy 3-way partitioning
- Partitioning item
  - Small arrays: middle entry
  - Medium arrays: median of 3
  - Large arrays: Tukey's ninther (median of the median of 3 samples, each of 3 entries)
    - Approximate the median of 9
    - Uses at most 12 compares
    - Better partitioning than random shuffle and less costly
