# Input Output Template

```python
#Input Template
def func(lst, n):
    res = 0

    return res

# t = int(input())

# for _ in range(t):
#     n = int(input())
#     lst = list(map(int, input().split()))
#     print(func(lst, n))

def test(st, n):
    return func(list(map(int, st.split())), n)

assert test('1 4 45 6 10 8', 4) == 0

# Input multiple lines of integers in a single line -

 1. input("\nPress the enter key to exit\n")
 name = input('What's your name?')
 print('Hello', + name)

 2. Using a list comprehension (for single line)
 a, b, c, d = [int(x) for x in input().split()]
 arr = [int(x) for x in input().split()]

 3. For multiple lines of input
 a, b, c, d = [int(input()) for _ in range(4)]

 3. Using the map funtion
 a, b, c, d = map(int, input().split())
 lst = list(map(int, input().split()))

 4. Input string (hello 2 3)
 Test = input()
 Val = Test.split(' ')
 #['hello', '2', '3']

 5. Split Line -
 Line = 'hello how are you'
 a, *b = line.split()
 # a = 'hello'
 # b = ['how', 'are', 'you']

 6. For single assignment
 Line = 'hello how are you'
 *a, = Line.split()

 7. Input and recurse
 for _ in range(int(input)):
  print(input())

 8. Read from a file
 fo = open('test.txt', 'r')
 print(fo.readline())

# Fast Input
 import sys

 t = int(sys.stdin.readline().strip())

 for _ in range(t):
     n, m = map(int, sys.stdin.readline().strip().split())
     sys.stdout.write('0')
     sys.stdout.write('\n')

 FAST IO Example
 # import inbuilt standard input output
 from sys import stdin, stdout

 # suppose a function called main() and
 # all the operations are performed
 def main():

     # input via readline method
     n = stdin.readline()

     # array input similar method
     arr = [int(x) for x in stdin.readline().split()]

     #initialize variable
     summation = 0

     # calculate sum
     for x in arr:
         summation += x

     # could use inbuilt summation = sum(arr)

     # print answer via write, write method writes only string operations so we need to convert any data into string for input
     stdout.write(str(summation))

 # call the main method
 if __name__ == "__main__":
     main()

# Output
 end is used to define the end statement. default is \n (newline)
 lst = [1, 2, 3]
 for x in lst:
  print(x, end=' ')
```
