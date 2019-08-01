'use strict';

const graphql = require('graphql');
var expressGraphQL = require('express-graphql');
const Todo = require('../models/todo/todo-schema.js');

const {
  GraphQLObjectType, GraphQLString,
  GraphQLID, GraphQLInt,GraphQLSchema,
  GraphQLList,GraphQLNonNull,GraphQLBoolean,
} = graphql;

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLID  },
    text: { type: GraphQLString },
    category: { type: GraphQLString },
    assignee: { type: GraphQLString },
    difficulty: { type: GraphQLInt },
    complete: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Todo.findById(args.id);
      },
    },
    todos:{
      type: new GraphQLList(TodoType),
      args: {
        id: { type: GraphQLID },
        category: { type: GraphQLString },
        complete: { type: GraphQLBoolean },
        assignee: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Todo.find(args);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        assignee: { type: new GraphQLNonNull(GraphQLString) },
        difficulty: { type: new GraphQLNonNull(GraphQLInt) },
        complete: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        let todo = new Todo({
          text: args.text,
          category: args.category,
          assignee: args.assignee,
          difficulty: args.difficulty,
          complete: args.complete,
        });
        return todo.save();
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:Mutation,
});

module.exports = expressGraphQL({
  schema: schema,
  graphiql: true,
});


/*

Examples ...

{
	todo (id:"5d183a0960ef482f24e18860") {
    id,
    text,
    complete
  }
}

{
	todos {
    id,
    text,
    complete
  }
}

{
	todos(assignee:"John") {
    id,
    text,
    category,
    complete
  }
}

mutation {
  addTodo(
    text:"This is a new thing",
    category:"Home",
    complete:false,
    assignee:"Fred",
    difficulty:1
  ), {
    id,text
  }
}

 */
