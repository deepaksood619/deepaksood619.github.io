# SE Radio

## 346: Streaming Architecture

- Apache Flink

## 333: Software Design Decoded: 66 Ways Experts Think

## 331: Architecture and Organizational Design

- Correspondence between organizational design and software architecture.
- Conway's Law
  - If you have a 4 person team building a compiler, you will build a 4-pass compiler
  - Organizations which design systems ... are constrained to produce designs which are copies of the communication [structures](https://en.wikipedia.org/wiki/Organizational_structure) of these organizations.
  - The law is based on the reasoning that in order for a [software module](https://en.wikipedia.org/wiki/Modular_programming) to function, multiple authors must communicate frequently with each other. Therefore, the [software interface](https://en.wikipedia.org/wiki/Software_interface) structure of a system will reflect the social boundaries of the organization(s) that produced it, across which communication is more difficult.
- Inverse Conway Maneuver
  - 'Inverse Conway Maneuver' recommends evolving your team and organizational structure to promote your desired architecture. Ideally your technology architecture will display isomorphism with your business architecture.

## 330: Attack Surface Reduction

- Theattack surfaceof a [software](https://en.wikipedia.org/wiki/Software) environment is the sum of the different points (the "attack [vectors](https://en.wikipedia.org/wiki/Vector_(malware))") where an unauthorized user (the "attacker") can try to enter data to or extract data from an environment.Keeping the attack surface as small as possible is a basic security measure.
- The basic strategies of attack surface reduction include the following: reduce the amount of [code](https://en.wikipedia.org/wiki/Software) running, reduce entry points available to untrusted users, and eliminate services requested by relatively few users. One approach to improving [information security](https://en.wikipedia.org/wiki/Information_security) is to reduce the attack surface of a system or software. By turning off unnecessary functionality, there are fewer [security risks](https://en.wikipedia.org/wiki/Security_risk). By having less code available to unauthorized actors, there will tend to be fewer failures. Although attack surface reduction helps prevent security failures, it does not mitigate the amount of damage an attacker could inflict once a vulnerability is found.

## 327: Developer Productivity with Open Source

- Package management and Distribution
- Semantic versioning

## 322: Property Based Test

In property based tests we specify what is the condition that needs to be tested. And we write a concrete different implementation of that to check both for equality.
Example -

- If we wrote a function that given an integer return square root of that, we can check this function using the built in function Math.sqrt and compare both values together.

## 294: Machine Learning in Log Analysis

Clusterization

Classifiers

Using classifiers and clusterization, find different problems in logs and also solutions to those using stackoverflow and other discussion forums.
<http://www.se-radio.net>

## Cloud Search with Liam Cavanagh, 17 Oct 2018

Search is part of almost every application. Users search for movies to watch. Engineers search through terabytes of log messages to find exceptions. Drivers search through maps to find a destination. Search remains an unsolved problem, with lots of room for optimization.
Many search applications have been built [Elasticsearch, an open source distributed search engine](https://softwareengineeringdaily.com/2017/04/12/elasticsearch-with-philipp-krenn/). Elasticsearch is the code that powers some search-as-a-service products offered by major cloud providers. After eight years of open source development, Elasticsearch is excellent at core search functionalities, such as indexing data, sharding, and serving queries.
With improved access to machine learning tools, search applications can advance in new and interesting ways. For example, an incoming search query can be sent to an API for natural language processing before being served by the search engine. A natural language processing API can derive additional meaning from the query, adding metadata to a search query. Machine learning can also be applied to better understand how people are searching across your search index, and to optimize the search index to incorporate those user preferences.
Liam Cavanagh is the principal program manager on Azure Search. He joins the show to talk about the architecture of a search index, how search queries are served by an index, and how machine learning APIs can be used to improve queries.

- tf-idf
- word2vec
- ElasticSearch

## Druid Analytical Database with Fangjin Yang, 14 Sep 2018

Modern applications produce large numbers of events. These events can be users clicking, IoT sensors accumulating data, or log messages.

The cost of cloud storage and compute continues to drop, so engineers can afford to build applications around these high volumes of events, and a variety of tools have been developed to process them. Apache Kafka is widely used to store and queue these streams of data, and Apache Spark and Apache Flink are stream processing systems that are used to perform general purpose computations across this event stream data.

Kafka, Spark, and Flink are great general purpose tools, but there is also room for a more narrow set of distributed systems tools to support high volume event data. Apache Druid is an open source database built for high performance, read only analytic workloads. Druid has a useful combination of features for event data workloads, including a column-oriented storage system, automatic search indexing, and a horizontally scalable architecture.

Druid's feature set allows for new types of analytics applications to be built on top of it, including search applications, dashboards, and ad-hoc analytics.
<https://softwareengineeringdaily.com/category/data>
