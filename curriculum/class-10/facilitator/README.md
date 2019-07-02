# Facilitators Guide: GraphQL

## Learning Objectives
* Stacks and Queues
  * Theory/History
  * How JS Uses this in the Event Loop
  * Implementation
* GraphQL, Apollo, Graphiql, Queries


## Preparation

* Get the Book App from 301 up and running
* Get Book App v2 (this class solution) up and running

## Lecture Main Topics & Overall Flow

### DS&A - Stacks and Queues
* DS&A Lecture on Stacks and Queues
* We have previously talked about the JS Event Loop in Class 03 (Async).
  * Now, we can see how that process uses an actual Stack and Queue to function.
  * There's a demo called `event-loop.js` that uses a stack and a queue to simlate this (poorly, but the point gets made...)
  
### GraphQL

GraphQL is a query language used to allow clients to shape the query response according to their needs, and allowing the server to do the work of aggegating data from potentially multiple sources to fulfill client queries.

Unlike REST, GraphQL servers expose only a single endpoint. Rather than codifying every possible permutation and endpoint, a GraphQL developer configures Schemas, Queries, and Mutations holistically, and allows the client to determine the end use.

In and of itself, GraphQL does not optimize your system or make querying databases faster. It provides for a client driven interface, based on a structured rule set from your server configuration. Optimization and scale are still handled server side.

* GraphQL Clients
  * The magic of graphQL is it's inherent ability and mission to put the client in control of both the filtering/query and the shape of the output.
  * Show the Github v3 (REST) API and look at the enormous amounts of data that come back.
  * Then, go to their v4 (GraphQL) API and get the same resources, but shaped as you please.  
  * Examples below.
  * **Fetch One Item, By ID**
    ```javascript

    ```

**Fetch All Items**
```javascript
```

**Fetch all items assigned to "John"**
```javascript
```

**Add a new item**
```javascript
```

### Server Notes 

#### Schemas
A Schema is the collection of all query and mutation rules, aggregated into a rule set.

```javascript
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:Mutation,
});
```

#### Queries & Mutations
These entities describe the various ways in which a client can ask for and write to your data stores through the GraphQL server

In this example, we declare a query called "todos" that'll return a list of items, based on the search result of any of the arguments the client specifies. Here, the fields id, category, complete, assignee, and text are all valid query items for the client to use to filter their results.

This isn't magic ... your resolver needs to be setup to use any of the args your query supports, and your data store needs to also be optimized to retrieve that information.

```javascript
    todos:{
      type: new GraphQLList(TodoType),
      args: {
        id: { type: GraphQLID },
        category: { type: GraphQLString },
        complete: { type: GraphQLBoolean },
        assignee: { type: GraphQLString },
        text: { type: GraphQLString },
      },
    },
```

#### Resolvers
The resolvers job is to describe how to fetch or mutate data ... in other words, how to "Resolve" the user's request

For example, in a simple query that only supports one field (id), the resolver in this case uses the mongoose `findById()` method, sending the id argument along.  The resolver simply returns the result of that operation

```javascript
    todo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Todo.findById(args.id);
      },
    },
```



## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
