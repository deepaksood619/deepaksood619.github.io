# GenAI ChatBot using Bedrock

Case Study: Building a High-Performance GenAI Chatbot for Higher Education Institutions with AWS Bedrock

## Client Overview: NoPaperForms

[NoPaperForms](https://www.nopaperforms.com/) is a leading unified technology platform for education, enabling universities and institutions to manage admissions, student engagement, and marketing automation. Their chatbot, built on OpenAI APIs, was facing latency issues, prompting them to explore a more efficient solution using AWS Bedrock.

## Problem Statement

The existing chatbot struggled with:

- **High Latency**: OpenAI API responses were slow, affecting user experience.
- **Limited Knowledge Base**: The chatbot relied on predefined data sources, lacking real-time information updates.
- **Scalability Concerns**: The system needed to handle a growing number of queries from students, faculty, and parents.
- **Inability to Crawl University Data**: The chatbot couldn’t dynamically fetch university details from public websites.

## Opstree's Solution

Opstree implemented a **GenAI chatbot** using **AWS Bedrock**, **Anthropic Claude/Sonnet**, and **AWS Web Crawler** to ensure fast, accurate, and scalable knowledge retrieval.

## Architecture Overview

![Development of AI-Powered Knowledge Retrieval System](../../media/Screenshot%202025-03-27%20at%206.58.23%20PM.jpg)

![Architecture Overview](../../media/Screenshot%202025-03-27%20at%206.59.13%20PM.jpg)

### Key Components

1. **AWS Bedrock**: Hosts and runs the Claude/Sonnet LLM model for generating responses.
2. **Web Crawling Layer**: Utilizes **AWS Web Crawler** to fetch and update knowledge from university websites dynamically.
3. **Amazon S3**: Stores processed knowledge base documents.
4. **Semantic Parsing & Chunking**: Breaks raw text into meaningful sections for better comprehension.
5. **Streamlit** – Provides an interactive UI for querying the knowledge base.
6. **LiteLLM (LLM Gateway)**: Optimizes API latency and reduces costs.
7. **Session Memory & Caching**: Tracks conversation history and minimizes redundant API calls.
8. **Caching Mechanism:** Reduces redundant API calls and speeds up responses.

## Implementation Breakdown

### Phase 1: Setting Up the Knowledge Base

1. **Web Crawler Deployment**
    1. Configured **AWS Bedrock Web Crawler** to fetch university data.
    2. Respected **robots.txt** in accordance with **RFC 9309**.
    3. Limited by **AWS Bedrock’s internal constraints** on pages crawled and content size.
2. **Data Processing & Storage**
    4. Filtered **irrelevant content** (ads, navigation links).
    5. Stored structured data in **Amazon S3**.
3. **Semantic Parsing & Chunking**
    1. Applied NLP techniques to **segment text into digestible chunks**.
    2. Indexed data for faster retrieval.

### Phase 2: AI Model Integration

1. **Claude/Sonnet Model Deployment**
    1. Integrated **AWS Bedrock's Claude & Sonnet models** for high-speed response generation.
    2. Tuned prompt engineering for **context-aware replies**.
2. **Latency Reduction Techniques**
    1. Implemented **LiteLLM** as a gateway to reduce API response time.
    2. **Added caching & session memory** to optimize repeat queries.

### Phase 3: Performance Optimization & Testing

1. **Load & Stress Testing**
    1. Simulated **high query volume** to test scalability.
    2. Optimized response times from **~7s to ~1.2s**.
2. **Accuracy & Relevance Testing**
    1. Benchmarked Claude/Sonnet responses against OpenAI GPT models.
    2. Increased **query relevance by 35%** through **synonym expansion & acronym resolution**.
3. **Security & Compliance**
    1. Ensured **data privacy** with **access-controlled S3 storage**.
    2. **Encrypted knowledge base** to prevent unauthorized access.

![ChatBot Interface](../../media/Screenshot%202025-03-27%20at%207.01.16%20PM.jpg)

## Challenges & Solutions

| Challenge                               | Solution                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| **High response time with OpenAI**      | Moved to **Claude/Sonnet on AWS Bedrock** with **LiteLLM** for optimization. |
| **Data retrieval gaps**                 | Used **AWS Web Crawler** to **dynamically fetch university website data**.   |
| **Inconsistent knowledge base updates** | Implemented **automated crawl scheduling** with **AWS Lambda triggers**.     |
| **Scalability concerns**                | Leveraged **serverless AWS infrastructure** for auto-scaling.                |

## Results & Impact

- **Latency reduced from ~7s to ~1.2s** (80% improvement).
- **Expanded chatbot knowledge base dynamically** using **web crawling**.
- **Increased response accuracy by 35%** with NLP-based semantic search.
- **Reduced API cost by 40%** using caching & LiteLLM optimizations.
- **Enhanced user engagement** with **context-aware, real-time responses**.

![Enhancing Search and User Engagement](../../media/Screenshot%202025-03-27%20at%207.02.00%20PM.jpg)

## Conclusion & Future Roadmap

By migrating NoPaperForms’ chatbot to **AWS Bedrock with Claude/Sonnet**, Opstree successfully **overachieved the project goals** in just **2 weeks**. Future improvements include:

- **Expanding university coverage** through broader web crawling.
- **Real-time data updates** to keep information current.
- **Multilingual support** for international students.

With this **scalable, AI-driven solution**, NoPaperForms can now **deliver high-speed, knowledge-rich responses** to thousands of education queries, transforming the student experience. 🚀
