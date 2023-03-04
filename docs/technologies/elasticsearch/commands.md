# Commands

```json
// List indices
GET /_cat/indices?v

PUT /megacorp/_doc/1
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}

GET /megacorp/employee/1

// Retrieving part of a document
GET /website/blog/123?_source=title,text

DELETE /index_name

DELETE /megacorp/employee/1

GET /megacorp/_search

GET /megacorp/_search?q=last_name:Smith

// QueryDSL
GET /megacorp/_search
{
    "query" : {
        "match" : {
            "last_name" : "Smith"
        }
    }
}

GET /megacorp/_search
{
    "query" : {
        "bool" : {
            "must" : {
                "match" : {
                    "last_name" : "smith"
                 }
            },
            "filter" : {
                "range" : {
                    "age" : { "gt" : 30 }
                 }
            }
        }
    }
}

// Highlights
GET /megacorp/_search
{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    },
    "highlight": {
        "fields" : {
            "about" : {}
        }
    }
}

// Analytics - most popular interests enjoyed by employees
GET /megacorp/_search
{
  "aggs": {
    "all_interests": {
      "terms": { "field": "interests" }
    }
  }
}

// Analytics - Popular interests of people called Smith
GET /megacorp/_search
{
  "query": {
    "match": {
      "last_name": "smith"
    }
  },
  "aggs": {
    "all_interests": {
      "terms": {
        "field": "interests"
      }
    }
  }
}

// Analytics - average age of employees who share a particular interest
GET /megacorp/employee/_search
{
    "aggs" : {
        "all_interests" : {
            "terms" : { "field" : "interests" },
            "aggs" : {
                "avg_age" : {
                    "avg" : { "field" : "age" }
                }
            }
        }
    }
}

// Creating an Index
PUT /blogs
{
   "settings" : {
      "number_of_shards" : 3,
      "number_of_replicas" : 1
   }
}

// Testing Analyzers
GET /_analyze
{
  "analyzer": "standard",
  "text": "Text to analyze"
}

// Viewing the Mapping
GET /gb/_mapping/tweet

// Aggregations
GET /server_log-2019.09.25/_search
{
    "aggs" : {
        "hosts" : {
            "terms" : {
                "field" : "tag.host"
            },
            "aggs" : {
                "containers" : {
                    "terms" : { "field" : "tag.container_name" }
                }
            }
        }
    }
}
```

## Monitoring

`GET /_cluster/health`

The status field provides an overall indication of how the cluster is functioning. The meanings of the three colors are provided here for reference:

- green: All primary and replica shards are active.
- yellow: All primary shards are active, but not all replica shards are active.
- red: Not all primary shards are active.
