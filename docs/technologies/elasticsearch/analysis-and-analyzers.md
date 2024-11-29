# Analysis and Analyzers

Analysis is a process that consists of the following:

- First, tokenizing a block of text into individualtermssuitable for use in an inverted index,
- Then normalizing these terms into a standard form to improve their "searchability," orrecall

This job is performed by analyzers. Ananalyzer is really just a wrapper that combines three functions into a single package:

## Character filters

First, the string is passed through any character filters in turn. Their job is to tidy up the string before tokenization. A character filter could be used to strip out HTML, or to convert & characters to the word and.

## Tokenizer

Next, the string is tokenized into individual terms by a tokenizer. A simple tokenizer might split the text into terms whenever it encounters whitespace or punctuation.

## Token filters

Last, each term is passed through any token filters in turn, which can change terms (for example, lowercasing Quick), remove terms (for example, stop words such as a, and, the) or add terms (for example, synonyms like jump and leap).

## Standard analyzer

The standard analyzer is the default analyzer that Elasticsearch uses. It is the best general choice for analyzing text that may be in any language. It splits the text on word boundaries, as defined by the [Unicode Consortium](http://www.unicode.org/reports/tr29/), and removes most punctuation. Finally, it lowercases all terms. It would produce

`set, the, shape, to, semi, transparent, by, calling, set_trans, 5`

## Simple analyzer

The simple analyzer splits the text on anything that isn't a letter, and lowercases the terms. It would produce

`set, the, shape, to, semi, transparent, by, calling, set, trans`

## Whitespace analyzer

The whitespace analyzer splitsthe text on whitespace. It doesn't lowercase. It would produce

`Set, the, shape, to, semi-transparent, by, calling, set_trans(5)`

## Language analyzers

Language-specific analyzers are available for [many languages](https://www.elastic.co/guide/en/elasticsearch/reference/2.4/analysis-lang-analyzer.html). They are able to take the peculiarities of the specified language into account. For instance, the english analyzer comes with a set of English stop words (common words like and or the that don't have much impact on relevance), which it removes. This analyzer also is able to stem English words because it understands the rules of English grammar.

The english analyzer would produce the following:

`set, shape, semi, transpar, call, set_tran, 5`

Note how transparent, calling, and set_trans have been stemmed to their root form.

https://www.elastic.co/guide/en/elasticsearch/guide/current/analysis-intro.html

## Text Embeddings

Encodes words and sentences as numeric vectors. These vector representations are designed to capture the linguistic content of the text, and can be used to assess similarity between a query and a document.

### Word Embeddings

A word embedding model represents a word as a dense numeric vector. These vectors aim to capture semantic properties of the word - words whose vectors are close together should be similar in terms of semantic meaning. In a good embedding, directions in the vector space are tied to different aspects of the word's meaning. As an example, the vector for "Canada" might be close to "France" in one direction, and close to "Toronto" in another.

[Word Embeddings - EXPLAINED! - YouTube](https://www.youtube.com/watch?v=GmXkCCa4eVA)

The NLP and search communities have been interested in vector representations of words for quite some time. There was a resurgence of interest in word embeddings in the past few years, when many traditional tasks were being revisited using neural networks. Some successful word embedding algorithms were developed, including [word2vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) and [GloVe](https://nlp.stanford.edu/pubs/glove.pdf). These approaches make use of large text collections, and examine the context each word appears in to determine its vector representation:

- The word2vec Skip-gram model trains a neural network to predict the context words around a word in a sentence. The internal weights of the network give the word embeddings.
- In GloVe, the similarity of words depends on how frequently they appear with other context words. The algorithm trains a simple linear model on word co-occurrence counts.

### Sentence Embeddings

Researchers have started to focus on embedding techniques that represent not only words, but longer sections of text. Most current approaches are based on complex neural network architectures, and sometimes incorporate labelled data during training to aid in capturing semantic information.

Once trained, the models are able to take a sentence and produce a vector for each word in context, as well as a vector for the entire sentence. Similarly to word embedding, pre-trained versions of many models are available, allowing users to skip the expensive training process. While the training process can be very resource-intensive, invoking the model is much more lightweight - sentence embedding models are typically fast enough to be used as part of real-time applications.

Some common sentence embedding techniques include [InferSent](https://arxiv.org/abs/1705.02364), [Universal Sentence Encoder](https://arxiv.org/abs/1803.11175), [ELMo](https://arxiv.org/abs/1802.05365), and [BERT](https://arxiv.org/abs/1810.04805). Improving word and sentence embeddings is an active area of research, and it's likely that additional strong models will be introduced.

https://www.elastic.co/blog/text-similarity-search-with-vectors-in-elasticsearch
