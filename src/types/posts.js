const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const { AuthorType } = require("./authors");
const Author = require("./../models/authors");
const { CategoryType } = require("./categorys");
const Category = require("./../models/categorys");
const { TagType } = require("./tags");
const Tag = require("./../models/tags");

// Post Type
const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    subTitle: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    featureImage: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Category.findById(parent.categoryId);
      },
    },
    tag: {
      type: new GraphQLList(TagType),
      resolve(parent, args) {
        return tagslist = parent.tagsIds.map((e) => {
          return Tag.findById(e);
        });
      },
    },
    status: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  PostType,
};
