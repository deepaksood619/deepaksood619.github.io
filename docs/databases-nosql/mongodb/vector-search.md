# Vector Search

Build intelligent applications powered by semantic search and generative AI over any type of data.

### Vector search

Vector search is a capability that allows you to do semantic search where you are searching data based on meaning. This technique employs machine learning models, often called encoders, to transform text, audio, images, or other types of data into high-dimensional vectors. These vectors capture the semantic meaning of the data, which can then be searched through to find similar content based on vectors being "near" one another in a high-dimensional space. This can be a great compliment to traditional keyword-based search techniques but is also seeing an explosion of excitement because of its relevance to augment the capabilities of large language models (LLMs) by providing ground truth outside of what the LLMs "know." In search use cases, this allows you to find relevant results even when the exact wording isn't known. This technique can be useful in a variety of contexts, such as natural language processing and recommendation systems.

### What is Atlas Vector Search?

Integrate your operational database and vector search in a single, unified, and fully managed platform with a MongoDB native interface that can leverage large language models (LLMs) through popular frameworks.

### Benefits of vector search

- **Semantic understanding:** Rather than searching for exact matches, vector search enables semantic searching. This means that even if the query words aren't present in the index, but the meanings of the phrases are similar, they will still be considered a match.
- **Scalable:** Vector search can be done on large datasets, making it perfect for use cases where you have a lot of data.
- **Flexible:** Different types of data, including text but also unstructured data like audio and images, can be semantically searched.

### What is semantic search?

Semantic search is the practice of searching on the meaning of data rather than the data itself.

### What is a vector?

A vector is a numeric representation of data and associated context that can be efficiently searched for using advanced algorithms.

### How does Atlas Vector Search differ from Atlas Search?

Atlas Vector Search allows searching through data based on semantic meaning captured in vectors, whereas Atlas Search allows for keyword search (i.e., based on the actual text and any defined synonym mappings).

### What is KNN?

KNN stands for "K Nearest Neighbors," which is the algorithm frequently used to find vectors near one another.

### What is $vector Search and how does it differ from the knn Beta operator in $search?

`$vector` Search is a new aggregation stage in MongoDB Atlas that lets you execute an Approximate Nearest Neighbor query with MongoDB Query Language filtering `(e.g., "$eq" or "$gte")`. This stage will be supported on Atlas clusters version 6.0 and higher. The knn Beta operator in $search will continue to be supported as well.

### What is ANN?

ANN stands for "Approximate Nearest Neighbors" and it is an approach to finding similar vectors that trades accuracy in favor of performance. This is one of the core algorithms used to power Atlas Vector Search. Our algorithm for Approximate Nearest Neighbor search uses the Hierarchical Navigable Small World (HNSW) graphs.

### Which Vector embeddings does Atlas Search support?

Atlas Vector Search Supports embeddings from any provider that is under the 2048-dimension limit on the service.

### Does Vector Search work with images, media files, and other types of data?

Yes, Atlas Vector Search can query any kind of data that can be turned into an embedding. One of the benefits of the document model is that you can store your embeddings right alongside your rich data in your documents.

[MongoDB Atlas Vector Search | MongoDB](https://www.mongodb.com/products/platform/atlas-vector-search)

[google-research/scann at master · google-research/google-research · GitHub](https://github.com/google-research/google-research/tree/master/scann)

- ScaNN (Scalable Nearest Neighbors) is a method for efficient vector similarity search at scale.
