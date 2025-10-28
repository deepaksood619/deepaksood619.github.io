# AWS AI Services

## LLM + GenAI

- Amazon Q + Quicksight Implementation on top of existing data sources in AWS like S3 / RDS, etc
- Amazon Bedrock for end to end GenAI capabilities
- ⁠Amazon Bedrock - RAG Implementation for internal knowledge bases
- ChatGPT Wrapper for logging all things -> integrate it in buildpiper

## Machine Learning

1. [Amazon Sagemaker](cloud/aws/ai/sagemaker.md) - Build, Train, and Deploy Machine Learning Models at Scale
	1. [sagemaker-unified-studio](cloud/aws/ai/sagemaker-unified-studio.md)
	2. [sagemaker-lakehouse](cloud/aws/ai/sagemaker-lakehouse.md)
2. Amazon Comprehend - Discover Insights and Relationships in Text
3. Amazon Lex - Build Voice and Text Chatbots
4. Amazon Polly - Turn Text into Lifelike Speech
5. [Amazon Rekognition](cloud/aws/ai/amazon-rekognition.md) - Analyze Image and Video. Extract information and insights from your images and videos (ex - objects or persons in an image)
6. Amazon Machine Learning - Machine Learning for Developers
7. Amazon Translate - Natural and Fluent Language Translation
8. [Amazon Transcribe](cloud/aws/ai/amazon-transcribe.md) - Automatic Speech Recognition (Speech to text)
9. Amazon Personalize - recommendations and intelligent user segmentation at scale
10. Amazon Augmented AI - Human review of ML models
11. AWS DeepLens - Deep Learning Enabled Video Camera
12. AWS Deep Learning AMIs - Quickly Start Deep Learning on EC2
13. Apache MXNet on AWS - Scalable, High-performance Deep Learning
14. TensorFlow on AWS - Open-source Machine Intelligence Library
15. Amazon Textract - Easily extract printed text, handwriting, and data from virtually any document
	1. https://github.com/aws-samples/amazon-textract-code-samples/tree/master/python
16. Amazon Kendra - Enterprise search service
17. [AWS Fraud Detector](https://aws.amazon.com/fraud-detector/) - Fraud detection in payments or loyalty services
18. [Genomic Data Analysis – AWS HealthOmics – Amazon Web Services](https://aws.amazon.com/healthomics/) - Accelerate scientific breakthroughs at scale with fully managed bioinformatics workflows
	1. AWS HealthOmics is a HIPAA-eligible service that accelerates clinical diagnostic testing, drug discovery, and agriculture research by fully managing the complex infrastructure behind your bioinformatics workflows. HealthOmics supports industry-standard workflow languages (WDL, Nextflow, CWL) and seamlessly scales bioinformatics infrastructure to support data from tens of thousands of tests per day—all with predictable cost per-sample. HealthOmics handles the technical complexities like managing compute resources and maintaining workflow engines so you can focus entirely on scientific breakthroughs.
	2. [What is AWS HealthOmics? - AWS HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/what-is-healthomics.html)
	3. HealthOmics consists of three main components.
		- [HealthOmics workflows](https://docs.aws.amazon.com/omics/latest/dev/private-workflows.html) — Run bioinformatics computations on automatically provisioned and scaled infrastructure.
		- [HealthOmics storage](https://docs.aws.amazon.com/omics/latest/dev/sequence-stores.html) — Store and share petabytes of genomics data efficiently at a low cost per gigabase.
		- [HealthOmics analytics](https://docs.aws.amazon.com/omics/latest/dev/omics-analytics.html) — Prepare genomics data for multiomics and multimodal analyses.

### Amazon Kendra

Find answers faster with intelligent enterprise search powered by machine learning

Amazon Kendra GenAI Index is a new index in Kendra designed for retrieval-augmented generation (RAG) and intelligent search to help enterprises build digital assistants and intelligent search experiences more efficiently and effectively. This index offers high retrieval accuracy, leveraging advanced semantic models and the latest information retrieval technologies. It can be integrated with Bedrock Knowledge Bases and other Bedrock tools to create RAG-powered digital assistants, or used with Q Business for a fully managed digital assistant solution. Kendra GenAI Index addresses common challenges in building retrievers for GenAI assistants, including data ingestion, model selection, and integration with various GenAI tools. Its features include a managed retriever with high semantic accuracy, a hybrid index combining vector and keyword search, pre-optimized parameters, connectors to a variety of enterprise data sources, and metadata-based user permissions filtering.

### Amazon Comprehend

Highly accurate intelligent search service powered by machine learning

- Quickly implement a unified search experience across multiple structured and unstructured content repositories.
- Use natural language processing (NLP) to get highly accurate answers without the need for machine learning (ML) expertise.
- Fine-tune your search results based on content attributes, freshness, user behavior, and more.
- Deliver ML-powered instant answers, FAQs, and document ranking as a fully managed service.

### Amazon Comprehend vs Amazon Kendra

| Dimension                      | Comprehend                                                                                             | Kendra                                                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Goal**                       | Insight extraction, analysis, classification of text. Useful in pipelines, decision making, analytics. | Information retrieval / search: enabling users to ask questions and get relevant documents/snippets.                                                                                                |
| **Input vs output**            | Raw text → labels/entities/topics/sentiment etc. You feed text; it processes it.                       | A collection of documents, indexed ahead of time → searchable. You query.                                                                                                                           |
| **Custom vs general**          | Supports custom: entity recognition, classification, topic modeling etc. tailored to domain.           | The search index can be enriched/customized (metadata, synonyms, domain optimization) but the core is about retrieving relevant content, not deeply analyzing every new document unless configured. |
| **Latency / usage pattern**    | Often used in pipelines (batch or real-time for individual documents). E.g. as documents arrive.       | Often used in applications with interactive queries by users.                                                                                                                                       |
| **Scalability considerations** | Scales for analyzing large volumes of text. Costs based on text processed, custom model training, etc. | Costs depend on size/number of indices, connectors, frequency of queries, updates. Also, keeping indices up to date.                                                                                |
| **Integration**                | Can feed Comprehend outputs into other services (e.g. metadata for search).                            | Can integrate with Comprehend for enriching the search index. For example, extract entities via Comprehend, attach them as metadata in Kendra to filter or better rank.                             |

#### When to use each

- Use **Comprehend** when you need to _analyze_ text: extract insights, perform sentiment, detect entities, classify documents, discover topics. Good for analytics, monitoring, compliance, content understanding.
- Use **Kendra** when you want _users_ to search documents (intranet, knowledge base, FAQs etc.) with good precision — retrieving relevant docs or passages, handling varied data sources, enabling filters/facets, making search “smart.”

#### How they can be used together

They aren’t mutually exclusive. In fact there are patterns where you use Comprehend to enhance Kendra’s search effectiveness:

- **Metadata enrichment**: Use Comprehend to extract entities, key phrases, classify documents etc., then attach those as metadata to docs before indexing into Kendra. Then Kendra’s filters/facets/relevance boosting can use that metadata.
- **Search tuning**: Enriched metadata lets Kendra return better results (e.g. filter by entity extracted by Comprehend).
- **Complex pipelines**: For example, process scanned PDFs via Textract → extract entities/classify with Comprehend → feed into Kendra for search and retrieval.

## Links

- [Artificial Intelligence](https://aws.amazon.com/ai/)
- [AI Services](https://aws.amazon.com/ai/services/)
- [Generative AI partner solutions](https://aws.amazon.com/ai/partners/?aws-marketplace-cards.sort-by=item.additionalFields.sortOrder&aws-marketplace-cards.sort-order=asc&awsf.aws-marketplace-aws-marketplace-aim=*all&awsf.aws-marketplace-aim=*all)
- [Generative AI Competency Partners](https://aws.amazon.com/ai/generative-ai/partners/?aws-marketplace-cards.sort-by=item.additionalFields.sortOrder&aws-marketplace-cards.sort-order=asc&awsf.aws-marketplace-aws-marketplace-aim=*all&awsf.aws-marketplace-aim=aws-marketplace-aim%23gen-ai-software-competency-partner)
- [Generative AI | AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/category/artificial-intelligence/generative-ai/)
- AWS Generative AI Competency Partners
    - [Introducing the AWS Generative AI Competency Partners](https://aws.amazon.com/about-aws/whats-new/2024/03/aws-generative-ai-competency-partners/)
    - [Revolutionize Your Business with AWS Generative AI Competency Partners | AWS Partner Network (APN) Blog](https://aws.amazon.com/blogs/apn/revolutionize-your-business-with-aws-generative-ai-competency-partners/)
    - [AWS Partner Network - Checklist](https://apn-checklists.s3.amazonaws.com/competency/generative-ai/consulting/Cks9Pu3tv.html)
    - [AWS Partner Central Login](https://partnercentral.awspartner.com/partnercentral2/s/resources?Id=0698W00000yRVqMQAW)
    - [PartyRock](https://partyrock.aws/u/vicrojo/LRS5o82Hg/AWS-GenAI-Case-Study-Generator)
    - [Generative AI Competency Partners](https://aws.amazon.com/ai/generative-ai/partners/?aws-marketplace-cards.sort-by=item.additionalFields.sortOrder&aws-marketplace-cards.sort-order=asc&awsf.aws-marketplace-aws-marketplace-aim=*all&awsf.aws-marketplace-aim=aws-marketplace-aim%23gen-ai-software-competency-partner)
- [AWS Machine Learning Competency Partners](https://aws.amazon.com/machine-learning/partner-solutions/)
- [AWS Data and Analytics Competency Partners](https://aws.amazon.com/big-data/datalakes-and-analytics/partner-solutions/)
