# Run Length Encoding

![image](../../media/Run-Length-Encoding-image1.jpg)

Que: How many bits to store the counts?

Ans: We'll use 8 (but 4 in the example above)

Que: What to do when run length exceeds max count?

Ans: If longer than 255, intersperse runs of length 0

Applications: JPEG, ITU-T T4 Group 3 Fax

## Java implementation

![image](../../media/Run-Length-Encoding-image2.jpg)

## Application: compress a bitmap

![image](../../media/Run-Length-Encoding-image3.jpg)
