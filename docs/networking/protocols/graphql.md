# GraphQL

GraphQL will do to REST what JSON did to XML.

## A Data Query Language

GraphQL is strongly typed, self-documenting, and embraces declarative data fetching, which allows clients to query for the exact data they need as well making it possible to build powerful and in-depth developer tools.
GraphQL server - A server which implements the GraphQL Specifications and exposes an API endpoint for clients to query.
GraphQL is typically used in scenarios where related data needs to be queried or in environments where multiple round trips to the server can negatively impact the customer experience.

## Problems that GraphQL solves

1. The need to do multiple round trips to fetch data required by a view

2. Clients dependency on servers

3. The bad front-end developer experience

4. No Versioning of APIs

5. Get only what you asked

## Problems with GraphQL

1. Resource Exhaustion Attacks (DOS) using overly complex queries

2. N+1 queries

Solution - <https://github.com/facebook/dataloader>

<https://xuorig.medium.com/the-graphql-dataloader-pattern-visualized-3064a00f319f>

## GraphQL Core Concepts

- Schema Definition Language (Used to define the schema of an API)
- Defining Types (Type system allows us to check if query is valid or not before resolving the query)
- Sending Queries and Mutations
  - Queries with Arguments (extra information sent with query and mutation)
- Mutations
  - Creating new data
  - Updating existing data
  - Deleting existing data
- Subscriptions
- Resolvers
- Variables
- Inspection
  - This allows us to know the schema using introspection and see documentation of all the endpoints with autocomplete in clients like Graphiql

## Security

- Timeout
- Maximum Query Depth
- Query Complexity
- Throttling

## How to GraphQL

In GraphQL, aTypeis an object that may contain multiplefields. Each field is calculated throughresolvers, that returns a value. A collection of types is called aschema. Every schema has a special type calledqueryfor getting data from the server andmutationfor sending data to the server.

- Type
- Query
- Mutation
- Resolver
Tutorial
- Queries
- Mutations
- Authentications
- Links and Voting
- Error Handling
- Filtering
- Pagination

<https://hasura.io/blog/cursor-offset-pagination-with-hasura-graphql>

- Relay

## Queries

mutation {

createLink (

url: "<https://www.google.com>",

description: "Google"

) {

id

url

description

}

}
query {

links {

id

url

description

}

}
mutation {

tokenAuth(username: "deepak", password: "deepaksood") {

token

}

}
! - bang at the end of a type represents required

In graphene-python it is written as required=True

## Client

1. Apollo

2. Relay

3. Graphiql

4. Insomnia

5. Postman

## Schema stitching

Schema stitching is the process of creating a single GraphQL schema from multiple underlying GraphQL APIs.
One of the main benefits of GraphQL is that we can query all of our data as part of one schema, and get everything we need in one request. But as the schema grows, it might become cumbersome to manage it all as one codebase, and it starts to make sense to split it into different modules. We may also want to decompose your schema into separate microservices, which can be developed and deployed independently.
In both cases, we usemergeSchemasto combine multiple GraphQL schemas together and produce a merged schema that knows how to delegate parts of the query to the relevant subschemas. These subschemas can be either local to the server, or running on a remote server. They can even be services offered by 3rd parties, allowing us to connect to external data and create mashups.
<https://www.apollographql.com/docs/graphql-tools/schema-stitching>

## Apollo Federation

Apollo Federation is an architecture for composing multiple GraphQL services into a single graph that addresses this need. Unlike other approaches such as schema stitching, it is based on a declarative composition programming model that allowsproper separation of concerns. This design allows teams to implement an enterprise-scale shared data graph as a set of loosely coupled, separately maintained GraphQL services.
<https://principledgraphql.com/integrity#1-one-graph>

<https://www.apollographql.com/docs/apollo-server/federation/introduction>

<https://blog.apollographql.com/apollo-federation-f260cf525d21>

<https://github.com/apollographql/federation-demo>

## Tools

## Hasura - <https://hasura.io>

<https://github.com/hasura/graphql-engine>

Quiver - <https://medium.com/@syrusakbary/quiver-graphql-on-steroids-13612ea1ea77>

## GraphQL Voyager - <https://github.com/APIs-guru/graphql-voyager>

## GraphQL Mesh

<https://the-guild.dev/blog/graphql-mesh>

<https://www.youtube.com/watch?v=T0zpPO7Ub_s&ab_channel=GOTOConferences>

## Monitoring GraphQL APIs

<https://www.moesif.com/blog/technical/monitoring/How-to-Best-Monitor-GraphQL-APIs>

<https://xuorig.medium.com/why-graphql-performance-monitoring-is-hard-41381bc7c44d>

## Persisted Queries

<https://www.apollographql.com/blog/apollo-client/persisted-graphql-queries>

## References

<https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4>

<https://www.quora.com/Is-GraphQL-a-REST-killer>

<http://docs.graphene-python.org/projects/django/en/latest>

<https://www.howtographql.com>

<https://building.buildkite.com/tutorial-getting-started-with-graphql-queries-and-mutations-11211dfe5d64>

<https://www.toptal.com/graphql/creating-your-first-graphql-api>
