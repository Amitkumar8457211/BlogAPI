const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

// Author Type
const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This is Author Response type",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
    },
    mail: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
    profilePic: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  AuthorType,
};
