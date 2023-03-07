# Template FastIO

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

class test {
static class FastReader {
BufferedReader br;
StringTokenizer st;
public FastReader() {
br = new BufferedReader(new InputStreamReader(System.in));
}
String next() {
while(st == null || !st.hasMoreElements()) {
try {
st = new StringTokenizer(br.readLine());
} catch(IOException e) {
e.printStackTrace();
}
}
return st.nextToken();
}
int nextInt() {
return Integer.parseInt(next());
}
long nextLong() {
return Long.parseLong(next());
}
double nextDouble() {
return Double.parseDouble(next());
}
String nextLine() {
String str = "";
try {
str = br.readLine();
} catch(IOException e){
e.printStackTrace();
}
return str;
}
}
public static void main(String[] args) {
FastReader s = new FastReader();
int t = s.nextInt();
while(t-- > 0) {
int n = s.nextInt();
s.nextInt();
String one = s.nextLine();
String two = s.nextLine();
Double doub = s.nextDouble();
System.out.println(n + " " + one + " " + two + " " + doub);
}
}
}
```
