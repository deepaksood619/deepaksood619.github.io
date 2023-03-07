# Inverted Index

In [computer science](https://en.wikipedia.org/wiki/Computer_science), aninverted index(also referred to aspostings fileorinverted file) is an [index data structure](https://en.wikipedia.org/wiki/Index_(database)) storing a mapping from content, such as words or numbers, to its locations in a [database file](https://en.wikipedia.org/wiki/Table_(database)), or in a document or a set of documents (named in contrast to a [forward index](https://en.wikipedia.org/wiki/Forward_index), which maps from documents to content). The purpose of an inverted index is to allow fast [full text searches](https://en.wikipedia.org/wiki/Full_text_search), at a cost of increased processing when a document is added to the database. The inverted file may be the database file itself, rather than its [index](https://en.wikipedia.org/wiki/Index_(database)). It is the most popular data structure used in [document retrieval](https://en.wikipedia.org/wiki/Document_retrieval) systems, used on a large scale for example in [search engines](https://en.wikipedia.org/wiki/Search_engine).
There are two main variants of inverted indexes: A **record-level inverted index** (orinverted file indexor justinverted file) contains a list of references to documents for each word. A **word-level inverted index** (or full inverted indexorinverted list) additionally contains the positions of each word within a document. The latter form offers more functionality (like [phrase searches](https://en.wikipedia.org/wiki/Phrase_search)), but needs more processing power and space to be created.

## Applications

The inverted index [data structure](https://en.wikipedia.org/wiki/Data_structure) is a central component of a typical [search engine indexing algorithm](https://en.wikipedia.org/wiki/Index_(search_engine)). A goal of a search engine implementation is to optimize the speed of the query: find the documents where word X occurs. Once a [forward index](https://en.wikipedia.org/wiki/Search_engine_indexing#The_forward_index) is developed, which stores lists of words per document, it is next inverted to develop an inverted index. Querying the forward index would require sequential iteration through each document and to each word to verify a matching document. The time, memory, and processing resources to perform such a query are not always technically realistic. Instead of listing the words per document in the forward index, the inverted index data structure is developed which lists the documents per word.
<https://en.wikipedia.org/wiki/Inverted_index>

## Inverted Index in Elasticsearch

Elasticsearch uses a structure calledaninverted index, which is designed to allow very fast full-text searches. An inverted index consists of a list of all the unique words that appear in any document, and for each word, a list of the documents in which it appears.
For example, let's say we have two documents, each with acontentfield containing the following:

- The quick brown fox jumped over the lazy dog

- Quick brown foxes leap over lazy dogs in summer
To create an inverted index, we first split thecontentfield of each document into separatewords (which we callterms, ortokens), create a sorted list of all the unique terms, and then list in which document each term appears. The result looks something like this:

| **Term**                 | **Doc_1** | **Doc_2** |
|--------------------------|-----------|-----------|
| Quick                    |           | X         |
| The                      | X         |           |
| brown                    | X         | X         |
| dog                      | X         |           |
| dogs                     |           | X         |
| fox                      | X         |           |
| foxes                    |           | X         |
| in                       |           | X         |
| jumped                   | X         |           |
| lazy                     | X         | X         |
| leap                     |           | X         |
| over                     | X         | X         |
| quick                    | X         |           |
| summer                   |           | X         |
| the                      | X         |           |

Now, if we want to search forquick brown, we just need to find the documents in which each term appears:

| **Term** | **Doc_1** | **Doc_2** |
|----------|-----------|-----------|
| brown    | X         | X         |
| quick    | X         |           |
| Total    | 2         | 1         |

Both documents match, but the first document has more matches than the second. If we apply a naive **similarity algorithm** thatjust counts the number of matching terms, then we can say that the first document is a better match - ismore relevantto our query - than the second document.
But there are a few problems with our current inverted index:

- Quickandquickappear as separate terms, while the user probably thinks of them as the same word.
- foxandfoxesare pretty similar, as aredoganddogs; They share the same root word.
- jumpedandleap, while not from the same root word, are similar in meaning. They are synonyms.
With the preceding index, a search for+Quick +foxwouldn't match any documents. (Remember, a preceding+means that the word must be present.) Both the termQuickand the termfoxhave to be in the same document in order to satisfy the query, but the first doc containsquick foxand the second doc containsQuick foxes.
Our user could reasonably expect both documents to match the query. We can do better.
If we normalize the terms into a standardformat, then we can find documents that contain terms that are not exactly the same as the user requested, but are similar enough to still be relevant. For instance:
- Quickcan be lowercased to becomequick.
- foxescan be **stemmed**--reduced to its root form - to becomefox. Similarly, dogscould be stemmed todog.
- jumpedandleapare synonyms and can be indexed as just the single termjump.
Now the index looks like this:

| **Term** | **Doc_1** | **Doc_2** |
|----------|-----------|-----------|
| brown    | X         | X         |
| dog      | X         | X         |
| fox      | X         | X         |
| in       |           | X         |
| jump     | X         | X         |
| lazy     | X         | X         |
| over     | X         | X         |
| quick    | X         | X         |
| summer   |           | X         |
| the      | X         | X         |

But we're not there yet. Our search for+Quick +foxwouldstillfail, because we no longer have the exact termQuickin our index. However, if we apply the same normalization rules that we used on the content field to our query string, it would become a query for+quick +fox, which would match both documents!

*This is very important. You can find only terms that exist in your index, soboth the indexed text and the query string must be normalized into the same form.*

This process of **tokenization** and **normalization** is called **analysis**

<https://www.elastic.co/guide/en/elasticsearch/guide/current/inverted-index.html>
