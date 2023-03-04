# Examples

1. Check if a number is power of two

    `bool isPowerOfTwo = x && !(x & (x - 1))`

2. Count number of one in a number

    ```python
    int count = 0;

    while(x) {
        x = x & (x-1);
        count++;
    }

    return count;
    ```

3. Check if ith bit is set

    ```python
    void isSet(int n) {
        return (n & (1 << i))
    }
    ```

4. Generate all possible subsets of a set

    There are 2^N subsets of a set with n elements

    ```python
    possibleSubsets(A, N):
        for i = 0 to 2^N:
            for j = 0 to N:
                if jth bit is set in i:
                    print A[j]
            print ‘\n’
    ```

5. Find the largest power of 2 which is less than or equal to the given number N

    Set all the bits in the number to 1. then the number will be (P + 1)/2.

    Ex - N = 10 (1010)~2~
    P - (1111)~2~ = 15
    Ans - (P + 1)/2 = 8

    So to change all the bits to 1.

    N = N | (N >> 1)
    N = N | (N >> 2)
    N = N | (N >> 4)
    N = N | (N >> 8)

    // this will return (N+1)/2
    return (N+1) >> 1;

6. Given a number N. Flip all bits in its binary representation.

    Solution 1:N^((1<<32)-1), considering N is a 32 bit integer
    Explanation - Since XORing with 1 works as a toggle switch.

7. Given two numbersAandB. Swapandwithout using arithmetic operator and without using third variable.

    ```python
    A=A^B
    B=A^B
    A=A^B
    ```

8. Problem - The problem asks to find the logical XOR of all the sub-sequences of an array and then print the logical OR of these XOR's.

    Ok, so lets try to do as the problem says. We find all subsequences (using maybe a recursive method) and find the xor of all the numbers. There are 2Nof those.

    Once done, we can find the OR of all the xor's. Clearly this method will fail even for as small a number as N = 30.

    This is where a little experience and observation helps. Sometimes look at the world upside down, and things will be more clear. What I want to say is that - Finally we are computing the OR of 2Nnumbers. And we know (from the above definition), that even if one of the 2Nnumbers has a 1 in a particular bit, then the resultant at that bit will also be 1. That means instead of taking out the OR of so many numbers, lets just take out the OR of the N given numbers. If any of those N numbers has a 1 at a bit p, then the result at bit p is a 1, and we dont need to check the other 2Nor so, numbers for that bit p. And what about the bit positions that have a 0 for all the N numbers? Shouldn't I take out the XOR's now? No, you dont have to, the resultant bit will be 0 at that position. Why? Because for a particular subsequence to have XOR of 1 at that position, there has to be odd number of 1's in that subsequence. But there are no 1's at all. So there is no chance of a 1 in any of the subsequence XOR's.

    Therefore, the answer in one line is the OR of all N Numbers.
