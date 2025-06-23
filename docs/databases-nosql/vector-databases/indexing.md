# Indexing

HNSW, IVF, and PQ are all Indexing techniques used in approximate nearest neighbor (ANN) search, often within vector databases like Milvus. HNSW (Hierarchical Navigable Small World graph) excels at speed and recall but uses more memory. **IVF (Inverted File)** is efficient for clustered data and faster queries but can be less precise. **PQ (Product Quantization)** is memory-efficient and fast but may reduce accuracy due to compression. Combining these techniques, like IVF-PQ and HNSW-PQ, is common to balance speed, memory, and accuracy.

### HNSW (Hierarchical Navigable Small World graph)

- Uses a multi-layered graph structure for efficient traversal and search. 
- Each layer is a graph, with the top layer being sparse and the bottom layer dense. 
- Offers high recall and speed but requires more memory to store the graph structure. 

### IVF (Inverted File)

- Partitions the dataset into "buckets" or "lists". 
- During a query, only a subset of these lists are searched. 
- Efficient for clustered data and faster than brute-force search. 
- Can be less accurate than HNSW. 

### PQ (Product Quantization)

- Compresses vectors by dividing them into subvectors and quantizing each subvector. 
- Reduces memory usage and speeds up distance calculations. 
- Reduces recall due to compression. 

### Hybrid Approaches

- **IVF-PQ:** Combines IVF for efficient search space reduction and PQ for memory efficiency. 
- **HNSW-PQ:** Combines HNSW for speed and recall with PQ for memory optimization. 
    

Choosing the right index depends on your priorities:

- **High accuracy and recall:** HNSW or HNSW-PQ.
- **Memory efficiency:** PQ or IVF-PQ.
- **Speed and clustered data:** IVF.

## HSNW (Hierarchical Navigable Small Worlds)

- [System Design of ChatGPT | Mock interview @gkcs - YouTube](https://www.youtube.com/watch?v=H9Qdm8_JBAs)
- [Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/)
- [Similarity Search, Part 4: Hierarchical Navigable Small World (HNSW) | by Vyacheslav Efimov | Towards Data Science](https://towardsdatascience.com/similarity-search-part-4-hierarchical-navigable-small-world-hnsw-2aad4fe87d37)
- [HSNW Intuitively Explained: The Best Algorithm for Billion Scale Vector Search | by Vansh Kharidia | Medium](https://medium.com/@vanshkharidia7/hsnw-intuitively-explained-the-best-algorithm-for-billion-scale-vector-search-540527e5278e)

## FAISS (Facebook AI Similarity Search)

Faiss is a library for efficient similarity search and clustering of dense vectors. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed primarily at Meta's [Fundamental AI Research](https://ai.facebook.com/) group.

- [GitHub - facebookresearch/faiss: A library for efficient similarity search and clustering of dense vectors.](https://github.com/facebookresearch/faiss)
- [What Is Faiss (Facebook AI Similarity Search)?](https://www.datacamp.com/blog/faiss-facebook-ai-similarity-search)
- [FAISS](https://ai.meta.com/tools/faiss/)
- [Faiss: A library for efficient similarity search - Engineering at Meta](https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/)
- [Welcome to Faiss Documentation — Faiss documentation](https://faiss.ai/index.html)
- [Faiss | 🦜️🔗 LangChain](https://python.langchain.com/docs/integrations/vectorstores/faiss/)

## Links

- [Powerful Comparison: HNSW vs IVF Indexing Methods](https://myscale.com/blog/hnsw-vs-ivf-explained-powerful-comparison/)
