# 6. Variance; Conditioning of an event; Multiple r.v.'s

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image1.jpg)

## Variance - Is a quantity that measures the amount of spread, of a dispersion of a probability mass function. It is defined as the expected value of the squared distance from the mean. Always non negative

## Intuition - How far away the outcome of the random variable happens to be from the mean of that random variable

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image2.jpg)

One way to calculate the distance from the mean is E [X-u] = E [X] - u (Using linearity of expressions), u-u = 0.

Therefore we want the average absolute value of the distance from the mean. Therefore we have created variance which is defined as the expected value of the squared distance from the mean.
Variance is a bit hard to interpret, because it is in wrong units. If capital X corresponds to meters, then the variance has units of meters squared. A more intuitive quantity is the square root of the variance, which is called **standard deviation.** It has the same units as the random variable and captures the width of the distribution.
![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image3.jpg)

If we add a constant to a random variable, the variance remains unchanged (Since constant just moves the entire PMF right or left by some amount, without changing its shape)

If we multiply a random variable by a, the variance gets multiplied by a squared
![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image4.jpg)

## Intuition - The variance is a measure of the amount of randomness. A coin is most random if it is fair, i.e. when p is equal to 1/2. The variance of a coin flip is biggest if that coin is fair. (as it is seen by the variance vs probability plot)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image5.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image6.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image7.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image8.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image9.jpg)

Total Expectation Theorem tells us that the expected value of a random variable can be calculated by considering different scenarios, finding the expected value under each of the possible scenarios and weigh the scenarios according to their respective probabilities.
![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image10.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image11.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image12.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image13.jpg)
![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image14.jpg)

## Intuition - If p is small, this means that the odds of seeing heads is small. Then in that case, we need to wait longer and longer until we see heads for the first time

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image15.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image16.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image17.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image18.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image19.jpg)

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image20.jpg)

## nu

![image](../../../media/Intro-Syllabus_6.-Variance;-Conditioning-of-an-event;-Multiple-r.v.'s-image21.jpg)
Because X is a bernoulli, for X=0, X^2^ = 0 and for X = 1, X^2^ = 1
conditional mean or conditional expectation
Expected value rule, remain true in the conditional model
Same as Total Probability Theorem but translated in PMF notation

pX(x) = PMF at that particular x
By Symmetry, the expected value will be in the middle, so the expected value is 1 for conditional universe {0,1,2} and 7 for conditional universe {6,7,8}
by linearity of expectations
Interpretation of the above formula - With p X,Y a specific (x,y) pair will occur. And when that occurs, the value of our random variable is a certain number g(x,y). And the combination of these two terms gives us a contribution to the expected value. Now we consider all possible (x,y) pairs that may occur, and we sum over all these (x,y) pairs.
The expected value of the sum of two random variables is equal to the sum of their expectations.
