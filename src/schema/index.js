const { GraphQLSchema , GraphQLObjectType} = require("graphql");
//Query import
const { postQuery } = require("./query/posts");
const { authorQuery } = require("./query/author");
const { categoryQuery } = require("./query/category");

//Mutation import
const { postMutation } = require("./mutation/posts");
const { authorMutation } = require("./mutation/author");
const { categoryMutation } = require("./mutation/category");
const { tagsMutation } = require("./mutation/tags");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...postQuery,
      ...authorQuery,
      ...categoryQuery,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...postMutation,
      ...authorMutation,
      ...categoryMutation,
      ...tagsMutation
    }),
  }),
});

module.exports = schema;
