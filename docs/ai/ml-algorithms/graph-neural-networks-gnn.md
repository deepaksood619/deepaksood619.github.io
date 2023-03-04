# Graph Neural Networks (GNN)

## Why Is a Graph Difficult To Analyze?

1. A graph does not exist in a Euclidean space, which means it cannot be represented by any coordinate systems that we are familiar with. This makes the interpretation of graph data much harder as compared to other types of data such as waves, images, or time-series signals("text" can also be treated as time-series), which can be easily mapped to a 2-D or 3-D Euclidean space.

2. A graph does not have a fixed form. Why? Graph (A) and Graph (B) have a completely different structure and visually different. But when we convert it to adjacency matrix representation, the two graphs have the same adjacency matrix (if we don't consider the weight of edges). So should we consider these two graphs are the same or different?

3. A graph is in general hard to visualize for human interpretation.. I'm talking about giant graphs that involve hundreds or thousands of nodes. The dimension is very high and nodes are densely grouped, making it even difficult for a human to understand the graph. Therefore, it is challenging to train a machine for this task.

## Why Use Graphs?

1. Graphs provide a better way of dealing with abstract concepts like relationships and interactions. They also offer an intuitively visual way of thinking about these concepts. Graphs also form a natural basis for analyzing relationships in a social context.

2. Graphs can solve more complex problems by simplifying the problems into simpler representations or transform the problems into representations from different perspectives.

3. Graph Theories and concepts are used to study and model Social Networks, Fraud patterns, Power consumption patterns, Virality and Influence in Social Media. Social Network Analysis (SNA) is probably the best-known application of Graph Theory for [Data Science](https://courses.analyticsvidhya.com/courses/introduction-to-data-science-2?utm_source=blog&utm_medium=IntroductionGraphTheoryarticle).

## Traditional Graph Analysis Methods

Traditional methods are mostly algorithm-based, such as :

- searching algorithms, e.g. BFS, DFS

- shortest path algorithms, e.g. Dijkstra's algorithm, Nearest Neighbour

- spanning-tree algorithms, e.g. Prim's algorithm

- clustering methods, e.g. Highly Connected Components, k-mean

The limitation of such algorithms is that we need to gain prior knowledge of the graph at certain confidence before we can apply the algorithm. In other words, it provides no mean for us to study the graph itself. And most importantly, there is no way to perform graph level classification.

## Graph Neural Network

Graph Neural Network, as how it is called, is a neural network that can directly be applied to graphs. It provides a convenient way for node level, edge level, and graph level prediction task.

There are mainly three types of graph neural networks in the literature:

- **Recurrent Graph Neural Network (RecGNN)**

- **Spatial Convolutional Network**

- **Spectral Convolutional Network**

The intuition of GNN is that nodes are naturally defined by their neighbors and connections. To understand this we can simply imagine that if we remove the neighbors and connections around a node, then the node will lose all its information. Therefore, the neighbors of a node and connections to neighbors define the concept of the node.

Having this in mind, we then give every node a state(x)to represent its concept. We can use the node state(x)to produce an output(o), i.e. decision about the concept. The final state(x_n)of the node is normally called "node embedding". The task of all GNN is to determine the "node embedding" of each node, by looking at the information on its neighboring nodes.

## What Can GNN do?

The problems that GNN solve can be broadly classified into three categories:

- Node Classification

- Link Prediction

- Graph Classification

## Innode classification, the task is to predict the node embedding for every node in a graph. This type of problem is usually trained in a semi-supervised way, where only part of the graph is labeled. Typical applications for node classification include citation networks, Reddit posts, Youtube videos, and Facebook friends relationships

## Inlink prediction, the task is to understand the relationship between entities in graphs and predict if two entities have a connection in between. For example, a recommender system can be treated as link prediction problem where the model is given a set of users' reviews of different products, the task is to predict the users' preferences and tune the recommender system to push more relevant products according to users' interest

## Ingraph classification, the task is to classify the whole graph into different categories. It is similar to image classification but the target changes into graph domain. There is a wide range of industrial problems where graph classification can be applied, for example, in chemistry, biomedical, physics, where the model is given a molecular structure and asked to classify the target into meaningful categories. It accelerates the analysis of atom, molecule or any other structured data types

## Some Real Applications

## GNN in Natural Language Processing

GNN is widely used in Natural Language Processing (NLP). Actually, this is also where GNN initially gets started. If some of you have experience in NLP, you must be thinking that text should be a type of sequential or temporal data which can be best described by an RNN or an LTSM. Well, GNN approaches the problem from a completely different angle. GNN utilized the inner relations of words or documents to predict the categories. For example, the citation network is trying to predict the label of each paper in the network given by the paper citation relationship and the words that are cited in other papers. It can also build a syntactic model by looking at different parts of a sentence instead of purely sequential as in RNN or LTSM.

## GNN in Computer Vision

Many CNN based methods have achieved state-of-the-art performance in object detections in images, but yet we do not know the relationships of the objects. One successful employment of GNN in CV is using graphs to model the relationships between objects detected by a CNN based detector. After objects are detected from the images, they are then fed into a GNN inference for relationship prediction. The outcome of the GNN inference is a generated graph that models the relationships between different objects.

Another interesting application in CV is image generation from graph descriptions. This can be interpreted as almost the reverse of the application mentioned above. The traditional way of image generation is text-to-image generation using GAN or autoencoder. Instead of using text for image description, graph to image generation provides more information on the semantic structures of the images.

The most interesting application I would like to share is zero-shot learning (ZSL). You can find [this post](https://towardsdatascience.com/applications-of-zero-shot-learning-f65bb232963f) for a comprehensive introduction to ZSL. In short, ZSL is trying to learn to classify a class givenNOtraining samples (of the target classes) at all. It was quite challenging because if no training samples were given, we need to let the model "think" logically to recognize a target. For example, if we were given three images (as shown in the figure below) and told to find "okapi" among them. We may not have seen an "okapi" before. But if we were also given the information that an "okapi" is a deer-face animal with four legs and has zebra-striped skin, then it is not hard for us to figure out which one is "okapi". Typical methods are simulating this "thinking process" by converting the detected features into text. However, text encodings are independent among each other. It is hard to model the relationships between the text descriptions. In other hard, graph representations well model these relationships, making the machine to think in a more "human-like" manner.

## GNN in Other Domains

More practical applications of GNN include *human behavior detection, traffic control, molecular structure study, recommender system, program verification, logical reasoning, social influence prediction, and adversarial attack prevention.* Below shows a graph that models the relationships of people in a social network. GNN can be applied to cluster people into different community groups.

<https://towardsdatascience.com/an-introduction-to-graph-neural-network-gnn-for-analysing-structured-data-afce79f4cfdc>
