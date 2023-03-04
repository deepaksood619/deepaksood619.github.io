# K-Nearest Neighbor (KNN)

The model representation for KNN is the entire training dataset. Simple right?

Predictions are made for a new data point by searching through the entire training set for the K most similar instances (the neighbors) and summarizing the output variable for those K instances. For regression problems, this might be the mean output variable, for classification problems this might be the mode (or most common) class value.

The trick is in how to determine the similarity between the data instances. The simplest technique if your attributes are all of the same scale (all in inches for example) is to use the Euclidean distance, a number you can calculate directly based on the differences between each input variable.

KNN can require a lot of memory or space to store all of the data, but only performs a calculation (or learn) when a prediction is needed, just in time. You can also update and curate your training instances over time to keep predictions accurate.

The idea of distance or closeness can break down in very high dimensions (lots of input variables) which can negatively affect the performance of the algorithm on your problem. This is called the curse of dimensionality. It suggests you only use those input variables that are most relevant to predicting the output variable.

<https://machinelearningmastery.com/k-nearest-neighbors-for-machine-learning>

![image](../../media/K-Nearest-Neighbor-(KNN)-image1.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image2.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image3.jpg)

## Basic Idea

- k-NN classification rule is to assign to a test sample the majority category label of its k nearest training samples
- In practice, k is usually chosen to be odd, so as to avoid ties
- The k = 1 rule is generally called the nearest-neighbor classification rule

![image](../../media/K-Nearest-Neighbor-(KNN)-image4.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image5.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image6.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image7.jpg)

## Nearest-Neighbor classifiers: Issues

- The value of k, the number of nearest neighbors to retrieve
- Choice of distance metric to compute distance between records
- Computational complexity
  - Size of training set
  - Dimension of data

![image](../../media/K-Nearest-Neighbor-(KNN)-image8.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image9.jpg)

## Distance Measure: Scale Effects

- Different features may have different measurement scales
  - E.g., patient weight in kg (range [50,200]) vs blood protein values in ng/dL (range [-3,3])
- Consequences
  - Patient weight will have a much greater influence on the distance between samples
  - May bias the performance of the classifier

![image](../../media/K-Nearest-Neighbor-(KNN)-image10.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image11.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image12.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image13.jpg)

## Nearest Neighbour: Computational Complexity

- Expensive
  - To determine the nearest neighbour of a query point q, must compute the distance to all N training examples
    - Pre-sort training examples into fast data structures (kd-trees)
    - Compute only an approximate distance (LSH - Locality Sensitive Hashing)
    - Remove redundant data (condensing)
- Storage requirements
  - Must store all training data P
    - Remove redundant data (condensing)
    - Pre-sorting often increases the storage requirements
- High dimensional data
  - Curse of Dimensionality
    - Required amount of training data increases exponentially with dimension
    - Computational cost also increases dramatically
    - Partitioning techniques degrade to linear search in high dimension

## Reduction in Computational Complexity

- Reduce size of training set
  - Condensation, editing
- Use geometric data structure for high dimensional search

## Condensation: Decision Regions

- Each cell contains one sample, and every location within the cell is closer to that sample than to any other sample
- A Voronoi diagram divides the space into such cells
- Every query point will be assigned the classification of the sample within that cell. The *decision boundary* separates the class regions based on the 1-NN decision rule
- Knowledge of this boundary is sufficient to classify new points
- The boundary itself is rarely computed; many algorithms seek to retain only those points necessary to generate an identical boundary

![image](../../media/K-Nearest-Neighbor-(KNN)-image14.jpg)

## Condensing

- Aim is to reduce the number of training samples
- Retain only the samples that are needed to define the decision boundary
- **Decision Boundary Consistent -** a subset whose nearest neighbour decision boundary is identical to the boundary of the entire training set
- **Minimum Consistent Set -** the smallest subset of the training data that correctly classifies all of the original training data

![image](../../media/K-Nearest-Neighbor-(KNN)-image15.jpg)

## Condensed Nearest Neighbor (CNN)

1. Initialize subset with a single (or K) training example

2. Classify all remaining samples using the subset, and transfer any incorrectly classified samples to the subset

3. Return to 2 until no transfers occurred or the subset is full

- Incremental
- Order dependent
- Neither minimal nor decision boundary consistent
- O(n^3) for brute-force method

## High dimensional search

- Given a point set and a nearest neighbor query point
- Find the points enclosed in a rectangle (range) around the query
- Perform linear search for nearest neighbor only in the rectangle

![image](../../media/K-Nearest-Neighbor-(KNN)-image16.jpg)

## kd-tree: data structure for range search

- Index data into a tree
- Search on the tree
- Tree construction: At each level we use a different dimension to split

![image](../../media/K-Nearest-Neighbor-(KNN)-image17.jpg)

## KNN: Alternate Terminologies

- Instance based learning
- Lazy learning
- Case based reasoning
- Exemplar based learning

## Text search: Documents as vectors

- We have a |V| - dimensional vector space
- Terms are axes of the space
- Documents are points or vectors in this space
- Very high-dimensional: tens of millions of dimensions when you apply this to a web search engine
- These are very sparse vectors - most entries are zero

## Queries as vectors

- Key idea 1: Do the same for queries: represent them as vectors in the space
- Key idea 2: Rank documents according to their proximity to the query in this space
- proximity = similarity of vectors
- proximity ~= inverse of distance
- Recall: we do this because we want to get away from the you're-either-in-or-out Boolean model
- Instead: rank more relevant documents higher than less relevant documents

## Formalizing vector space proximity

- First cut: distance between two points
  - ( = distance between the end points of the two vectors)
- Euclidean distance?
- Euclidean distance is a bad idea...
- ... because Euclidean distance is large for vectors of different lenghts

## Use angle instead of distance

- Thought experiment: take a document d and append it to itself. Call this document d'
- Sematically d and d' have the same content
- The Euclidena distance between the two documents can be quite large
- The angle between the two documents is 0, corresponding to maximal similarity
- Key idea: Rank documents according to angle with query

## From angles to cosines

- The following two notions are equivalent
  - Rank documents in decreasing order of the angle between query and document
  - Rank documents in increasing order of cosine (query, document)
- Cosine is a monotonically decreasing function for the interval [0, 180]

![image](../../media/K-Nearest-Neighbor-(KNN)-image18.jpg)

## End of K-Nearest Neighbor

## Classifier Evaluation

- Metrics for Performance Evaluation
  - How to evaluate the performance of a model
- Methods for Performance Evaluation
  - How to obtain reliable estimates?
- Methods for Model Comparision
  - How to compare the relative performance among competing models?

## Limitation of Accuracy

- Consider a 2-class problem
  - Number of class 0 examples = 9990
  - Number of class 1 examples = 10
- If model predicts everything to be class 0, accuracy is 9990/10000 = 99.9%
  - Accuracy is misleading because model does not detect any class 1 example

![image](../../media/K-Nearest-Neighbor-(KNN)-image19.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image20.jpg)

## Model Evaluation

- Metrics for Performance Evaluation
  - How to evaluate the performance of a model
- Methods for Performance Evaluation
  - How to obtain reliable estimates of performance?
  - Performance of a model may depend on other factors besides the learning algorithm:
    - Class distribution
    - Cost of misclassification
    - Size of training and test sets
- Methods for Model Comparision
  - How to compare the relative performance among competing models?

![image](../../media/K-Nearest-Neighbor-(KNN)-image21.jpg)

## Methods of Estimation

- Holdout
  - Reserve 2/3 for training and 1/3 for testing
- Random subsampling
  - Repeated holdout
- Cross validation
  - Partition data into k disjoint subsets
  - k-fold: train on k-1 partitions, test on the remaining one
  - Leave-one-out: k=n
- Stratified sampling
  - Oversampling vs undersampling
- Bootstrap
  - Sampling with replacement

## ROC (Receiver Operating Characteristic)

- Developed in 1950s for signal detection theory to analyze noisy signals
  - Characterize the trade-off between positive hits and false alarms
- ROC Curve plots TP (on the y-axis) against FP (on the x-axis)
- Performance of each classifier represented as a point on the ROC curve
  - changing the threshold of algorithm, sample distribution or cost matrix changes the location of the point

![image](../../media/K-Nearest-Neighbor-(KNN)-image22.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image23.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image24.jpg)

## Test of Significance

- Given two models:
  - Model M1: accuracy = 85%, tested on 30 instances
  - Model M2: accuracy = 75%, tested on 5000 instances
- Can we say M1 is better than M2?
  - How much confidence can we place on accuracy of M1 and M2?
  - Can the difference in performance measure be explained as a result of random fluctuations in the test set?

![image](../../media/K-Nearest-Neighbor-(KNN)-image25.jpg)

![image](../../media/K-Nearest-Neighbor-(KNN)-image26.jpg)
