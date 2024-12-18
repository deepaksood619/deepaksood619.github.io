# Vector Embeddings

**Vector embeddings are a way to convert words and sentences and other data into numbers that capture their meaning and relationships.** They represent different data types as points in a multidimensional space, where similar data points are clustered closer together. These numerical representations help machines understand and process this data more effectively.

[Word](https://www.elastic.co/what-is/word-embedding) and sentence embeddings are two of the most common subtypes of vector embeddings, but there are others. Some vector embeddings can represent entire documents, as well as image vectors designed to match up visual content, user profile vectors to determine a user’s preferences, product vectors that help identify similar products and many others. Vector embeddings help [machine learning](https://www.elastic.co/what-is/machine-learning) algorithms find patterns in data and perform tasks such as [sentiment analysis](https://www.elastic.co/what-is/sentiment-analysis), language translation, recommendation systems, and many more.

![vector-embeddings](../../media/Pasted%20image%2020231216192551.jpg)

### Types of vector embeddings

#### [Word embeddings](https://www.elastic.co/what-is/word-embedding)

Represent individual words as vectors. Techniques like Word2Vec, GloVe, and FastText learn word embeddings by capturing semantic relationships and contextual information from large text corpora.

#### Sentence embeddings

Represent entire sentences as vectors. Models like Universal Sentence Encoder (USE) and SkipThought generate embeddings that capture the overall meaning and context of the sentences.

#### Document embeddings

Represent documents (anything from newspaper articles and academic papers to books) as vectors. They capture the semantic information and context of the entire document. Techniques like Doc2Vec and Paragraph Vectors are designed to learn document embeddings.

#### Image embeddings

Represent images as vectors by capturing different visual features. Techniques like convolutional neural networks (CNNs) and pre-trained models like ResNet and VGG generate image embeddings for tasks like image classification, object detection, and image similarity.

#### User embeddings

Represent users in a system or platform as vectors. They capture user preferences, [behaviors](https://www.elastic.co/what-is/user-behavior-analytics), and characteristics. User embeddings can be used in everything from recommendation systems to personalized marketing as well as user segmentation.

#### Product embeddings

Represent products in ecommerce or recommendation systems as vectors. They capture a product’s attributes, features, and any other semantic information available. Algorithms can then use these embeddings to compare, recommend, and analyze products based on their vector representations.

### Are embeddings and vectors the same thing?

In the context of vector embeddings, yes, embeddings and vectors are the same thing. Both refer to numerical representations of data, where each data point is represented by a vector in a high-dimensional space.

### Use Cases

1. Recommendation systems (i.e. Netflix-style if-you-like-these-movies-you’ll-like-this-one-too)
2. All kinds of search
1. Text search (like Google Search)
2. Image search (like Google Reverse Image Search)
3. Chatbots and question-answering systems
4. Data preprocessing (preparing data to be fed into a machine learning model)
5. One-shot/zero-shot learning (i.e. machine learning models that learn from almost no training data)
6. Fraud detection/outlier detection
7. Typo detection and all manners of “fuzzy matching”
8. Detecting when ML models go stale (drift)

[What are vector embeddings? | A Comprehensive Vector Embeddings Guide | Elastic](https://www.elastic.co/what-is/vector-embedding)

[Meet AI’s multitool: Vector embeddings | Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/meet-ais-multitool-vector-embeddings)

[What are Vector Embeddings | Pinecone](https://www.pinecone.io/learn/vector-embeddings/)

## Text Embeddings / Transformers

- [GitHub - SeanLee97/AnglE: Angle-optimized Text Embeddings | 🔥 SOTA on STS and MTEB Leaderboard](https://github.com/SeanLee97/AnglE)
- [MTEB Leaderboard - a Hugging Face Space by mteb](https://huggingface.co/spaces/mteb/leaderboard)
    - MTEB - Massive Text Embeddings Benchmark
- [OpenAI Platform](https://platform.openai.com/tokenizer)
- [sentence-transformers/all-MiniLM-L6-v2 · Hugging Face](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
- [Pretrained Models - Sentence-Transformers documentation](https://www.sbert.net/docs/pretrained_models.html)
- [sentence-transformers (Sentence Transformers)](https://huggingface.co/sentence-transformers)

## Links

- [word-embedding-to-transformers](ai/nlp/word-embedding-to-transformers.md)
- [**Vector Embeddings Tutorial - Code Your Own AI Assistant with GPT-4 API + LangChain + NLP - YouTube**](https://www.youtube.com/watch?v=yfHHvmaMkcA&ab_channel=freeCodeCamp.org)
- [$0 Embeddings (OpenAI vs. free & open source) - YouTube](https://www.youtube.com/watch?v=QdDoFfkVkcw&ab_channel=RabbitHoleSyndrome)
- [The ABCs of AI Transformers, Tokens, and Embeddings: A LEGO Story - Code with Dan Blog](https://blog.codewithdan.com/the-abcs-of-ai-transformers-tokens-and-embeddings-a-lego-story/#:~:text=The%20embeddings%20serve%20as%20the,an%20encoder%20and%20a%20decoder.)
