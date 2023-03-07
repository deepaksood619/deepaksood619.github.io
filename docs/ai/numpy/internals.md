# Internals

## Why is NumPy Faster?

1. **Fixed type**

![image](../../media/Internals-image1.jpg)

- Faster to read less bytes of memory
- No type checking when iterating through objects

2. **Contiguous Memory**

![image](../../media/Internals-image2.jpg)

- Benefits
  - SIMD (Single Instruction Multiple Data) Vector Processing
  - Effective Cache Utilization
