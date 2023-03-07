# 6. Text Processing Services

6.1. string - Common string operations

6.2. re - Regular expression operations

6.3. difflib - Helpers for computing deltas

6.4. textwrap - Text wrapping and filling

6.5. unicodedata - Unicode Database

6.6. stringprep - Internet String Preparation

6.7. readline - GNU readline interface

6.8. rlcompleter - Completion function for GNU readline

## 6.3 difflib

Helper for computing deltas

- class.difflib.SequenceMatcher

SequenceMatcher(isjunk=None,a='',b='',autojunk=True)

- class.difflib.Differ
- class.difflib.HtmlDiff
- difflib.get_close_matches(word, possibilities, n=3. cutoff=0.6)

## 6.5. unicodedata

Using theunicodedataPython module it's easy to normalize anyunicodedata strings (remove accents etc):

```python
import unicodedata

data = u'ïnvéntìvé'
normal = unicodedata.normalize
('NFKD', data).
encode('ASCII', 'ignore')
print(normal)

The output will be:

b'inventive'
```

The NFKD stands for Normalization Form Compatibility Decomposition, and this is where characters are decomposed by compatibility, also multiple combining characters are arranged in a specific order.
