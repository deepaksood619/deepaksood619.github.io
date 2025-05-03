# Cheatsheet

## 1. Core Concepts & Learning Types

This category covers foundational ideas and different paradigms of machine learning learning.

- **Unsupervised learning:** A type of machine learning where the algorithm learns from unlabelled data, often used for tasks such as clustering or anomaly detection.
- **Reinforcement learning:** In this type of machine learning, an agent learns to make decisions by interacting with an environment to achieve a specific goal.
- **Outlier:** Defined as a data point that significantly deviates from the rest of the data set and is often considered noise or an anomaly.
- **Overfitting:** This is a modeling error that occurs when a machine learning algorithm captures noise present in the training data, leading to poor performance on new data.
- **Model selection:** Refers to the process of choosing the most appropriate machine learning algorithm for a particular task.
- **Model evaluation:** This process involves assessing the performance of a machine learning model using specific metrics to understand how well it works.
- **Inference:** The process of making predictions using a trained machine learning model on new, unseen data.
- **Generalization:** Describes the ability of a machine learning model to perform well on unseen data, indicating that it has learned the underlying patterns rather than just memorising the training data.
- **Ensemble methods:** These are techniques that combine predictions from multiple machine learning models to improve overall performance and often provide more robust results.
- **Multiclass classification:** A classification task where each data sample can belong to one of three or more distinct classes.
- **Anomaly detection:** The identification of rare items, events, or observations that significantly deviate from the normal behaviour of the majority of the data. This is distinct from the norm and does not conform to a well-defined normal behaviour.
- **Inductive bias:** Represents the set of assumptions a machine learning algorithm makes to generalize from the specific training data it sees to make predictions or decisions on unseen data.

## 2. Algorithms & Models

This section lists specific machine learning algorithms and model architectures discussed in the sources.

- **Regression:** A statistical method used to model the relationship between a dependent variable (the one being predicted) and one or more independent variables.
- **Logistic regression:** A statistical method primarily used for binary classification problems. It models the probability that a particular data point belongs to a specific class.
- **Linear regression:** A statistical method used for modeling and analyzing linear relationships between a dependent variable and one or more independent variables.
- **Decision trees:** A type of supervised learning algorithm applicable to both classification and regression tasks. Decisions are made by splitting data along specific feature values in a tree-like structure.
- **Random forest:** An ensemble learning method that builds multiple decision trees during training and outputs the average prediction (for regression) or the class with the most votes (for classification) from the individual trees.
- **Principal component analysis (PCA):** A dimensionality reduction technique used to transform the original variables in a data set into a new set of uncorrelated variables called principal components.
- **Generative adversarial networks (GANs):** A class of machine learning frameworks consisting of two neural networks, a generator and a discriminator, that are trained together in competition. They are commonly used for tasks like image generation.
- **Evolutionary algorithms:** These are optimization algorithms inspired by the process of natural selection. In machine learning, they are used for tasks such as parameter tuning.
- **Language models:** Statistical models that predict the likelihood of a sequence of words occurring together. They are commonly used in various natural language processing applications.
- **Support vector machines (SVMs):** Supervised learning algorithms used for both classification and regression tasks. For classification, SVMs find the hyperplane that best separates different classes in the feature space.
- **Naive Bayes classifier:** A probabilistic classifier based on applying Bayes theorem. It assumes that all features are independent of each other given the category of the object being classified.
- **K means clustering:** A method used in machine learning and data science to partition a set of observations into K clusters. Each observation is assigned to the cluster with the nearest mean, aiming to minimize within-cluster variances.
- **Hierarchical clustering:** A clustering method in which objects are grouped into a hierarchical structure, allowing exploration of data at different levels of granularity.

## 3. Neural Network Specifics

This section covers concepts, components, and architectures specifically related to neural networks.

- **Artificial neural network (ANN):** A system inspired by the structure and functioning of biological neural networks. ANNs are capable of learning, adapting, and recognizing complex patterns using layers of artificial neurons.
- **Activation function:** Determines the output value of a neural network node based on its input values and weights. Nonlinear activation functions are crucial as they enable the model to approximate complex, non-linear relationships in the data.
- **Sigmoid function:** An activation function commonly used in logistic regression and neural networks that outputs values scaled between zero and one.
- **Tan function (Tanh):** An activation function used in neural networks that scales the output to be in the range between negative one and positive one.
- **ReLU function (Rectified Linear Unit):** A non-linear activation function used in neural networks that outputs the input value if it is positive and zero otherwise.
- **Softmax function:** An activation function that converts a vector of raw scores into probabilities, often used in the output layer of a classification neural network to provide class probabilities.
- **Perceptron:** An algorithm for the supervised learning of binary classifiers. It is a type of linear classifier that decides class membership based on a linear combination of input features and weights.
- **Convolutional neural network (CNN):** A type of artificial neural network specifically designed for processing, recognizing, and classifying images. CNNs utilise convolution to automatically extract features from input data, making them efficient for handling visual information.
- **Recurrent neural network (RNN):** A type of neural network well-suited for processing sequences of inputs. RNNs are characterised by their ability to maintain an internal state (memory) to process arbitrary sequences, applicable to tasks like handwriting or speech recognition.
- **Long short-term memory (LSTM):** A specific type of recurrent neural network designed to address the vanishing gradient problem often encountered in traditional RNNs. LSTMs can learn long-term dependencies in sequence data, useful in fields like speech recognition and time series prediction.
- **Transformer model:** A deep learning architecture introduced in the paper "Attention Is All You Need". It relies on self-attention mechanisms and is known for parallel processing capabilities, often requiring less training time compared to previous recurrent architectures like LSTMs. It is widely adopted for large language models.
- **Backpropagation:** An optimization algorithm used to minimize the loss function during the training of artificial neural networks by iteratively adjusting the model's weights. It is fundamental to NN training.
- **Vanishing gradient:** A problem that can occur when training neural networks, where the gradients (used for weight updates) become too small for effective learning, particularly in deep networks.
- **Padding:** A technique used in processing input data for CNNs where extra data points or placeholders are added. This helps ensure that convolution kernels fit properly over the input data and helps maintain the spatial dimensions of the input.
- **Pooling:** A dimensionality reduction method typically used in CNNs. It serves to decrease the number of parameters and computations in the network, helps control overfitting, and progressively reduces the spatial size of the representation (known as downsampling).
- **Variational autoencoder:** A generative model that leverages variational Bayesian methods to encode and decode input data. It aims to generate new data that is similar to the input, particularly useful in unsupervised learning scenarios.

## 4. Data Handling & Preparation Techniques

This section covers techniques used to prepare and manipulate data before or during the machine learning process.

- **Truncation:** The process of limiting the number of elements in a data set or the number of nodes in a neural network.
- **Oversampling:** A technique used to balance class distribution, especially in imbalanced data sets, by randomly duplicating instances of the minority class.
- **One hot encoding:** A representation of categorical variables where each category is converted into a binary vector (a vector of zeros and ones), commonly used in machine learning algorithms.
- **Normalization:** The process of scaling features (input variables) to a standard range. This is commonly used in machine learning to improve algorithm performance.
- **Data pre-processing:** An umbrella term encompassing the initial steps involved in preparing and cleaning raw data before it is fed into a machine learning model for training.
- **Dense vector:** A type of vector in which most of the elements are non-zero. They are commonly used in machine learning and data science for feature representation and various computations.
- **Feature engineering:** The process of transforming raw data into a format that makes it easier and more effective for machine learning algorithms to interpret and learn from.
- **Imbalanced data:** Refers to a data set where the distribution of classes is significantly unequal. Such data sets often require special handling techniques to prevent the model from being biased towards the majority class.
- **Regularization:** A technique used to prevent overfitting in machine learning models by adding a penalty term to the loss function during training.
- **L1 and L2 regularization:** Specific regularization techniques that add penalty terms to the loss function to prevent overfitting. L1 regularization tends to lead to sparse solutions (many weights become zero), while L2 regularization primarily shrinks the magnitude of the weights.

## 5. Evaluation Metrics & Statistical Tools

This category includes measures and tests used to evaluate model performance or compare data.

- **Variance:** A statistical measure of the dispersion or spread of a set of values.
- **Precision:** The fraction of relevant instances among the instances that were retrieved or classified as positive by the model. It reflects the accuracy of the model in classifying positive instances.
- **Recall (Sensitivity):** The fraction of relevant instances that were successfully retrieved or identified by the model. It indicates the model's ability to find all the relevant instances. Both Precision and Recall are crucial for evaluating classification models, particularly with imbalanced data.
- **Mean squared error (MSE):** A loss function commonly used in regression problems. It measures the average of the squares of the errors between the predicted and actual values.
- **Root mean square error (RMSE):** The square root of the mean squared error, providing a measure of the average magnitude of the errors between predicted and actual observations.
- **R squared (Coefficient of determination):** A statistical measure indicating the proportion of the dependent variable's variance that is explained by the independent variable or variables in a regression model.

## 6. Optimization Methods

These are techniques used to improve a model's performance, typically by adjusting its parameters or structure.

- **Gradient descent:** An optimization algorithm used to find the local minimum of a function (such as a loss function) by iteratively adjusting the model's parameters in the opposite direction of the gradient.
- **Stochastic gradient descent:** A variant of gradient descent that updates the model's parameters using only a single data point (or a small batch) at each iteration, making it computationally less expensive per step.
- **Learning rate:** A tuning parameter within an optimization algorithm that determines the step size taken at each iteration while moving towards a minimum of the loss function. Metaphorically, it represents the speed at which a machine learning model learns.
- **Grid search (Parameter sweep):** A traditional technique used for hyperparameter optimization in machine learning. It involves exhaustively searching through a manually specified subset of the hyperparameter space of a learning algorithm. Grid search evaluates different combinations of hyperparameter values, typically guided by a performance metric measured via cross validation or evaluation on a validation set.
- **Bagging:** An ensemble learning technique used to improve the stability and accuracy of machine learning algorithms. It works by training multiple instances of the same model on different subsets of the training data.

## 7. Applications & Advanced Approaches

This category covers specific domains where ML is applied and more complex approaches involving multiple models or data domains.

- **Time series analysis:** The study of ordered, often temporal data. It is used for understanding trends, patterns, and for forecasting future values.
- **Transfer learning:** The practice of applying knowledge gained from training a model on one task to a different but related task. This is often used to improve model performance, especially when data for the new task is limited.
- **Sentiment analysis:** The use of natural language processing techniques to identify and categorise opinions or emotions expressed in text data.
- **Object detection:** A computer vision task that involves not only identifying but also locating objects within images or video data.
- **Pre-training:** The practice of training a machine learning model on a large data set, typically for a general task, before fine-tuning it on a more specific, often smaller, task. This is a key component of transfer learning.
- **Knowledge transfer:** The process of applying knowledge gained from one domain to another. This concept is often used in machine learning contexts to improve model performance by leveraging insights from related areas. (This seems closely related to Transfer learning).
- **Knowledge graphs:** A structured representation of facts and the relationships between them. They are commonly used in applications such as semantic search and recommendation systems.
- **Information extraction:** The process of automatically extracting useful, structured information from unstructured data sources, such as text documents.
- **Human in the loop:** A machine learning approach that explicitly involves human interaction in the learning process. This is commonly used to improve model accuracy or handle cases where automation is difficult.
- **Natural language processing (NLP):** A field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.

## 8. Underlying Mathematical & Statistical Concepts

This section includes mathematical and statistical concepts that form the basis for many machine learning techniques.

- **Markov chain:** A stochastic model that represents a sequence of possible events where the probability of each event depends solely on the state attained in the previous event. They are often used in machine learning and data science for simulating processes and studying systems over time.
- **Joint probability:** The probability of multiple events occurring together simultaneously. It is often used in probabilistic models.
- **P value:** In hypothesis testing, the p-value is a measure used to indicate the probability of observing a test statistic as extreme as the one computed, assuming that the null hypothesis is true.
- **T test:** A statistical test used to compare the means of two groups of data and determine if they are significantly different from each other.
- **Bayes theorem:** A fundamental principle in probability theory and statistics that describes the probability of an event based on prior knowledge of conditions that might be related to the event.
- **Euclidean distance:** The length of the straight line segment between two points in Euclidean space. It is calculated using the Pythagorean theorem and is often used to measure the similarity or dissimilarity between objects or data points.
- **Manhattan distance (Taxi cab or L1 distance):** A metric where the distance between two points is calculated as the sum of the absolute differences of their Cartesian coordinates. It is named after the grid layout of Manhattan streets.
- **Hamming distance:** A metric used to measure the difference between two strings of equal length by counting the number of positions at which the corresponding symbols are different. It is particularly useful in error detection and error correction in coding theory.
- **Jaccard similarity:** A metric that quantifies the degree of similarity between two sets by computing the ratio of the size of their intersection to the size of their union.
- **Bootstrapping:** A form of hypothesis testing that involves resampling a single data set multiple times to create a multitude of simulated samples. These samples are used to calculate standard errors, confidence intervals, and for hypothesis testing.
- **Matrix multiplication:** A fundamental algebraic operation where two matrices are combined to produce a new matrix. It is crucial in machine learning for performing transformations, solving linear equations, and optimizing models.
- **Jacobian matrix:** A matrix composed of all the first partial derivatives of a multivariable function. In machine learning, it is often used for optimization algorithms and gradient computation.
- **Hessian matrix:** A square matrix of second-order partial derivatives. It is often used in machine learning for optimization purposes, specifically allowing for the assessment of the convexity or concavity of a loss function.
- **Measures of central tendency (Mean, Median, Mode):** These refer to a central or typical value for a probability distribution, often called averages. The most common measures are the arithmetic mean, the median, and the mode. They are used to understand the central position around which data values are distributed.

## 9. Tools & Hardware

This category lists specific tools and hardware mentioned that are used in machine learning.

- **Jupyter Notebook:** An open-source web application that allows for the creation and sharing of documents containing live code, equations, visualizations, and narrative text.
- **Graphics processing unit (GPU):** A specialized hardware component used for rapid computation, particularly well-suited for parallel processing tasks. GPUs are commonly used to accelerate the training of machine learning algorithms, especially deep neural networks.
- **Quantum machine learning:** This represents the intersection of quantum computing and machine learning, aiming to leverage quantum principles to solve complex problems more efficiently than classical methods.

[Essential Machine Learning and AI Concepts Animated - YouTube](https://www.youtube.com/watch?v=PcbuKRNtCUc)
