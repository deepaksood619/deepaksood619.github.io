# Lambda Expressions

A lambda expression is an unnamed function with parameters and a body.

The lambda expression body can be a block statement or an expression.

->separates the parameters and the body.

(int x) -> x + 1takes an int parameter and returns the parameter value incremented by 1.

(int x, int y) -> x + ytakes two int parameters and returns the sum.

(String msg)->{System.out.println(msg);}takes a String parameter and prints it on the standard output.

msg->System.out.println(msg)takes a parameter and prints it on the standard output. It is identical to the code above.

() -> "hi"takes no parameters and returns a string.

(String str) -> str.length()takes a String parameter and returns its length.

The following lambda takes two int parameters and returns the maximum of the two.

(int x, int y) -> {
int max = x > y ? x : y;
return max;
}

## References

<http://www.java2s.com/Tutorials/Java/Java_Lambda/index.htm>
