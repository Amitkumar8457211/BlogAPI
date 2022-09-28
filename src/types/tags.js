const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

// Tag Type
const TagType = new GraphQLObjectType({
  name: "Tag",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  TagType,
};
