edge ngrams tokenizer
=============

used for auto completion indexing

like: https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-edgengram-tokenizer.html

usage:
```
const tokenize = require('edge-ngrams')()
tokenize('Quick Fox')

// [ 'Q', 'Qu', 'Qui', 'Quic', 'Quick', 'F', 'Fo', 'Fox' ]
```

constructor:
```
Tokenizer(minGrams = 1, maxGrams = 8, separator = ' ')
```
