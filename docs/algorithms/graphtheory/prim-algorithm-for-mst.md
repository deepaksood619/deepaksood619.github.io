# Prim's Algorithm for MST

## Properties

- For Undirected graph

![image](../../media/Prim's-Algorithm-for-MST-image1.jpg)

## Implementation

1. Lazy Implementation -

An edge that is absolute (i.e. cannot be added because it will create a cycle in the MST) is left in the priority queue.

2. Eager Implementation -

Only min weight edge with exactly one endpoint is added

Data Structure Used - Indexed Priority Queue, with decreaseKey API to decrease priority

![image](../../media/Prim's-Algorithm-for-MST-image1.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image2.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image3.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image4.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image5.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image6.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image7.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image8.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image9.jpg)

![image](../../media/Prim's-Algorithm-for-MST-image10.jpg)

## Applications

1. Euclidean MST

2. Clustering (single-link clustering algorithm)

3. Dendograms of cancers in humans
