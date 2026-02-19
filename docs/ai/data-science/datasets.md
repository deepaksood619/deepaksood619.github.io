# Datasets

[Home - Data Commons](https://datacommons.org/)

https://www.kaggle.com/dalpozz/creditcardfraud

[20+ Amazing (And Free) Data Sources Anyone Can Use To Build AIs](https://www.forbes.com/sites/bernardmarr/2023/05/17/20-amazing-and-free-data-sources-anyone-can-use-to-build-ais/?sh=17c13eec617f)

## MNIST database

The **MNIST database** (Modified [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology) database) is a large [database](https://en.wikipedia.org/wiki/Database) of handwritten digits that is commonly used for [training](https://en.wikipedia.org/wiki/Training_set) various [image processing](https://en.wikipedia.org/wiki/Image_processing) systems.

EMNIST Dataset - handwritten character digits

## ARC Corpus - AI2 Reasoning Challenge (ARC)

The ARC Corpus contains 14M unordered, science-related sentences including knowledge relevant to ARC, and is provided to as a starting point for addressing the challenge. The Corpus contains sentences from: science-related documents downloaded from the Web; dictionary definitions from Wiktionary, and articles from Simple Wikipedia that were tagged as science.

## LLM Datasets

[WikiText-103 Dataset | Papers With Code](https://paperswithcode.com/dataset/wikitext-103)

### BBH - [OpenCompass](https://opencompass.org.cn/dataset-detail/BBH)

A suite of 23 challenging BIG-Bench tasks which we call BIG-Bench Hard (BBH). These are the task for which prior language model evaluations did not outperform the average human-rater.

### BIG-Bench

The Beyond the Imitation Game Benchmark (BIG-bench) is a _collaborative_ benchmark intended to probe large language models and extrapolate their future capabilities.

[GitHub - google/BIG-bench: Beyond the Imitation Game collaborative benchmark for measuring and extrapolating the capabilities of language models](https://github.com/google/BIG-bench)

[Common Crawl - Blog - October 2024 Crawl Archive Now Available](https://www.commoncrawl.org/blog/october-2024-crawl-archive-now-available)

### LAION (Large-scale Artificial Intelligence Open Network)

[LAION-5B: A NEW ERA OF OPEN LARGE-SCALE MULTI-MODAL DATASETS | LAION](https://laion.ai/blog/laion-5b/)

[LAION - Wikipedia](https://en.wikipedia.org/wiki/LAION)

## YCSB Workloads

YCSB includes a set of core workloads that define a basic benchmark for cloud systems.

The **Yahoo! Cloud Serving Benchmark** (YCSB) is an open-source specification and program suite for evaluating retrieval and maintenance capabilities of computer programs. It is often used to compare relative performance of [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database management systems.

https://en.wikipedia.org/wiki/YCSB

https://github.com/brianfrankcooper/YCSB/wiki/Core-Workloads

## TPC (Transaction Processing Performance Council)

TPC stands for Transaction Processing Performance Council. It is a non-profit organization that was founded in 1988. The TPC's goal is to define benchmarks for transaction processing and databases. They also distribute objective and verifiable performance data to the industry.

Here are some TPC benchmarks:

- TPC-C: Compares the performance of online transaction processing
- TPC-E: Measures the performance of online transaction processing systems
- TPC-H: A benchmark for transaction processing and databases specific to decision support
	- TPC-H dataset with a scale factor (SF) of 50. It consists of 8 tables of different sizes. With SF=50, the largest table (lineitem) has 300M rows, the second-largest (orders) has 75M rows, and so forth.

Other TPC benchmarks include: TPC-DS, TPCI.

TPC-DS has more difficult SQL like SQL queries with different types of JOINS compared to TPC-H.

DS - Decision Support

- [TPC-DS Homepage](https://www.tpc.org/tpcds/)

H and DS use similar datasets, and DS is basically the next-gen version of H. While H generates relatively straightforward queries (22 queries) and is generally shard-friendly, DS (99 queries) gets its kicks from using advanced SQL features and functions, and it loves lopsided filters. Running DS is notoriously, intentionally difficult

[TPC Benchmarks Overview](https://www.tpc.org/information/benchmarks5.asp)

[What is the difference between TPC-H and TPC-DS benchmarks? | by Albert Wong | Oct, 2023 | Medium](https://atwong.medium.com/what-is-the-difference-between-tpc-h-and-tpc-ds-benchmarks-cb92fc104c32)

[GitHub - gregrahn/tpcds-kit: TPC-DS benchmark kit with some modifications/fixes](https://github.com/gregrahn/tpcds-kit)

## Others

- [TICKIT - Sample database - Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/dg/c_sampledb.html)
	- This small database consists of seven tables: two fact tables and five dimensions
- [miriad/miriad-4.4M · Datasets at Hugging Face](https://huggingface.co/datasets/miriad/miriad-4.4M)
- [Stock Market Dataset \| Kaggle](https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset)
- [GitHub - lorint/AdventureWorks-for-Postgres: Set up the AdventureWorks sample database for use with Postgres](https://github.com/lorint/AdventureWorks-for-Postgres)
	- [AdventureWorks Sample Databases - SQL Server \| Microsoft Learn](https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure)

## Tools

- Croissant
    - [Croissant: a metadata format for ML-ready datasets](https://research.google/blog/croissant-a-metadata-format-for-ml-ready-datasets/)
    - [GitHub - mlcommons/croissant: Croissant is a high-level format for machine learning datasets that brings together four rich layers.](https://github.com/mlcommons/croissant)
- Cat / Dog - https://bit.ly/ImgClsKeras

## Links

- [5 Free Datasets to Kickstart Your Machine Learning Projects Today - MachineLearningMastery.com](https://machinelearningmastery.com/5-free-datasets-to-kickstart-your-machine-learning-projects-today/)
- [GitHub - zhukovyuri/VIINA: VIINA: Violent Incident Information from News Articles on the 2022 Russian Invasion of Ukraine](https://github.com/zhukovyuri/VIINA)
