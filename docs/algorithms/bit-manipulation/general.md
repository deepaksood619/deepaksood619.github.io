# General

Bitwise Operators ( a = 60, b = 13)

- a = 0011 1100
- b = 0000 1101

| **Operator** | **Description** | **Example** |
|---|---|---|
| `& Binary AND` | Operator copies a bit to the result if it exists in both operands | (a & b) (means 0000 1100) |
| `\| Binary OR` | It copies a bit if it exists in either operand. | (a \| b) = 61 (means 0011 1101) |
| `^ Binary XOR` | It copies the bit if it is set in one operand but not both. | (a ^ b) = 49 (means 0011 0001) |
| `~ Binary Ones Complement` | It is unary and has the effect of 'flipping' bits. | (~a ) = -61 (means 1100 0011 in 2's complement form due to a signed binary number. |
| `<< Binary Left Shift` | The left operands value is moved left by the number of bits specified by the right operand. | a << 2 = 240 (means 1111 0000) |
| `>> Binary Right Shift` | The left operands value is moved right by the number of bits specified by the right operand. | a >> 2 = 15 (means 0000 1111) |

## Tricks

- x & (x-1)will clear the lowest set bit of x
- (x & (1 << i)) != 0, Get the i^th^ bit
- x & ~(x-1)extracts the lowest set bit of x (all others are clear). Pretty patterns when applied to a linear sequence.
- x & (x + (1 << n))= x, with the run of set bits (possibly length 0) starting at bit n cleared.
- x & ~(x + (1 << n))= the run of set bits (possibly length 0) in x, starting at bit n.
- (x & (~(1 << i))), clear i^th^ bit
- x | (x + 1)= x with the lowest cleared bit set.
- (x | (1 << i)), Set the i^th^ bit
- x | ~(x + 1)= extracts the lowest cleared bit of x (all others are set).
- x | (x - (1 << n))= x, with the run of cleared bits (possibly length 0) starting at bit n set.
- x | ~(x - (1 << n))= the lowest run of cleared bits (possibly length 0) in x, starting at bit n are the only clear bits.

## Bit Shift

1. Arithmetic Shift

    In an *arithmetic shift*, the bits that are shifted out of either end are discarded. In a left arithmetic shift, zeros are shifted in on the right; in a right arithmetic shift, the [sign bit](https://en.wikipedia.org/wiki/Sign_bit)(the MSB in two's complement) is shifted in on the left, thus preserving the sign of the operand.

2. Logical Shift

    In a *logical shift*, zeros are shifted in to replace the discarded bits. Therefore, the logical and arithmetic left-shifts are exactly the same.

    However, as the logical right-shift inserts value 0 bits into the most significant bit, instead of copying the sign bit, it is ideal for unsigned binary numbers, while the arithmetic right-shift is ideal for signed [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement) binary numbers.

## XOR

XOR by 1 can work like a toggle switch that turns 1 to 0 or 0 to 1.

- `0 ^ 1 = 1`
- `1 ^ 1 = 0`

Another interesting thing to note is

- `x^0 = x`
- `x^x = 0`

XOR - Bitwise XOR of N numbers can be calculated as follows : For each bit position (lets say p), if the number of 1's in the binary representation of the involved numbers at position p is odd then the result is 1 else 0. For example, bitwise XOR of three numbers (3, 4, 5) is (011, 100, 101) => (010) = 2. The LSB and MSB has two 1's so result is 0 for those bits. In most languages, [^] operator can be used to find Xor

### Method 2 (Efficient method)

1. Find the remainder of n by moduling it with 4.
2. If rem = 0, then xor will be same as n.
3. If rem = 1, then xor will be 1.
4. If rem = 2, then xor will be n+1.
5. If rem = 3 , then xor will be 0.

https://www.geeksforgeeks.org/calculate-xor-1-n

OR - Bitwise OR of N numbers can be calculated as follows : Unlike Xor, if any of the N Number has a 1 in that position (lets say p), then the result at p is 1 else 0. Bitwise OR of (3, 4, 5) is (011, 100, 101) => (111) = 7. All bit positions have atleast 1 number with a 1. In most programming languages [|] operator can be used to find Or

## Caching or Indexing

Caching or Indexing is a technique used to store counts of values which lie in a small range.

## 1s 2s Complement

[Binary: Plusses & Minuses (Why We Use Two's Complement) - Computerphile](https://www.youtube.com/watch?v=lKTsv6iVxV4)
