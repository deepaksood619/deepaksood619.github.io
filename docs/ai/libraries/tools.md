# Tools

## AutoML (Automated Machine Learning)

[AutoML](https://www.smarten.com/autoInsights.html) is, quite simply, the automated process of features and algorithm selection that supports planning, and allows users to fine tune, perform iterative modeling, and allows for the application and evolution of machine learning models.

## MLflow

MLflow is a platform to streamline machine learning development, including tracking experiments, packaging code into reproducible runs, and sharing and deploying models. MLflow offers a set of lightweight APIs that can be used with any existing machine learning application or library (TensorFlow, PyTorch, XGBoost, etc), wherever you currently run ML code (e.g. in notebooks, standalone applications or the cloud). MLflow's current components are:

- [MLflow Tracking](https://mlflow.org/docs/latest/tracking.html): An API to log parameters, code, and results in machine learning experiments and compare them using an interactive UI.
- [MLflow Projects](https://mlflow.org/docs/latest/projects.html): A code packaging format for reproducible runs using Conda and Docker, so you can share your ML code with others.
- [MLflow Models](https://mlflow.org/docs/latest/models.html): A model packaging format and tools that let you easily deploy the same model (from any ML library) to batch and real-time scoring on platforms such as Docker, Apache Spark, Azure ML and AWS SageMaker.
- [MLflow Model Registry](https://mlflow.org/docs/latest/model-registry.html): A centralized model store, set of APIs, and UI, to collaboratively manage the full lifecycle of MLflow Models.

[GitHub - mlflow/mlflow: Open source platform for the machine learning lifecycle](https://github.com/mlflow/mlflow)

[MLflow | MLflow](https://mlflow.org/)

[MLflow: A Tool for Managing the Machine Learning Lifecycle — MLflow 2.11.0 documentation](https://mlflow.org/docs/latest/index.html)

## LIME

Explaining the predictions of any machine learning classifier

LIME is model-agnostic, meaning that it can be applied to any machine learning model. The technique attempts to understand the model by perturbing the input of data samples and understanding how the predictions change.

https://github.com/marcotcr/lime

## LSTM (Long Short Term Memory)

https://blog.floydhub.com/long-short-term-memory-from-zero-to-hero-with-pytorch

## Facets

Open Source Visualization Tool

- Facets Overview

Facets Overview automatically gives users a quick understanding of the distribution of values across the features of their datasets. Multiple datasets, such as a training set and a test set, can be compared on the same visualization. Common data issues that can hamper machine learning are pushed to the forefront, such as: unexpected feature values, features with high percentages of missing values, features with unbalanced distributions, and feature distribution skew between datasets.

- Facets Dive

Facets Dive provides an easy-to-customize, intuitive interface for exploring the relationship between the data points across the different features of a dataset. With Facets Dive, you control the position, color and visual representation of each data point based on its feature values. If the data points have images associated with them, the images can be used as the visual representations.

https://ai.googleblog.com/2017/07/facets-open-source-visualization-tool.html

https://pair-code.github.io/facets

## HOPS

Hops(HadoopOpenPlatform-as-a-Service) is a next generation distribution of [Apache Hadoop](http://hadoop.apache.org/core/) with scalable, highly available, customizable metadata. Hops consists internally of two main sub projects, HopsFs and HopsYarn.HopsFSis a new implementation of the Hadoop Filesystem (HDFS), that supports multiple stateless NameNodes, where the metadata is stored in [MySQL Cluster](https://www.mysql.com/products/cluster/), an in-memory distributed database. HopsFS enables more scalable clusters than Apache HDFS (up to ten times larger clusters), and enables NameNode metadata to be both customized and analyzed, because it can now be easily accessed via a SQL API.HopsYARNintroduces a distributed stateless Resource Manager, whose state is migrated to MySQL Cluster. This enables our YARN architecture to have no down-time, with failover of a ResourceManager happening in a few seconds. Together, HopsFS and HopsYARN enable Hadoop clusters to scale to larger volumes and higher throughput.

https://github.com/hopshadoop/hops

## Horovod

Distributed training framework for TensorFlow, Keras, PyTorch, and Apache MXNet. The goal of Horovod is to make distributed Deep Learning fast and easy to use.

https://eng.uber.com/horovod

https://github.com/horovod/horovod

## Streamlit

The fastest way to build custom ML tools

https://towardsdatascience.com/coding-ml-tools-like-you-code-ml-models-ddba3357eace

https://github.com/streamlit/streamlit

https://www.freecodecamp.org/news/build-12-data-science-apps-with-python-and-streamlit

[Generative AI and Streamlit: A perfect match](https://blog.streamlit.io/generative-ai-and-streamlit-a-perfect-match/)

## Metaflow

Metaflow is a human-friendly Python library that helps scientists and engineers build and manage real-life data science projects. Metaflow was originally developed at Netflix to boost productivity of data scientists who work on a wide variety of projects from classical statistics to state-of-the-art deep learning

https://github.com/Netflix/metaflow

https://medium.com/netflix-techblog/open-sourcing-metaflow-a-human-centric-framework-for-data-science-fa72e04a5d9

## Trains

Auto-Magical Experiment Manager & Version Control for AI

https://github.com/allegroai/trains

## TVM

TVM is a compiler stack for deep learning systems. It is designed to close the gap between the productivity-focused deep learning frameworks, and the performance- and efficiency-focused hardware backends. TVM works with deep learning frameworks to provide end to end compilation to different backends.

TVM provides the following main features:

- Compilation of deep learning models in Keras, MXNet, PyTorch, Tensorflow, CoreML, DarkNet into minimum deployable modules on diverse hardware backends.
- Infrastructure to automatic generate and optimize tensor operators on more backend with better performance.

https://tvm.ai

https://github.com/dmlc/tvm

## Polyaxon

An open source platform for reproducible machine learning at scale.

Polyaxon deploys into any data center, cloud provider, or can be hosted and managed by Polyaxon, and it supports all the major deep learning frameworks such as Tensorflow, MXNet, Caffe, Torch, etc.

Polyaxon makes it faster, easier, and more efficient to develop deep learning applications by managing workloads with smart container and node management. And it turns GPU servers into shared, self-service resources for your team or organization.

https://polyaxon.com

## Cortex

Cortex is an open source platform for deploying machine learning models as production web services.

https://github.com/cortexlabs/cortex

https://www.cortex.dev

## Others

Octave

Torch (framework)

Lua (Programming languague)

Magenta

https://explosion.ai/software

https://web.superquery.io

[Announcing New Tools for Building with Generative AI on AWS | AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/announcing-new-tools-for-building-with-generative-ai-on-aws/)

## Tools

#### Paperspace

Hybrid-cloud, end-to-end, ML pipelines from training to inference.

Build real-time predictive intelligence in to your business

#### Google Colab

#### Saturncloud

#### matrixds

https://cloud.google.com/notebooks

https://mybinder.org

https://aws.amazon.com/sagemaker

https://deepbluegpu.com

#### Free notebooks

- https://freenotebooks.io
- Google Colab - https://colab.research.google.com
- Kaggle
- https://notebooks.ai
- [**https://teachablemachine.withgoogle.com/**](https://teachablemachine.withgoogle.com/)
- https://www.mage.ai
