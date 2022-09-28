const { GraphQLObjectType,GraphQLList, GraphQLID, GraphQLString } = require("graphql");
const Category = require("./../models/categorys");

// Category Type
const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    childCategory: {
      type:  new GraphQLList(CategoryType),
      resolve(parent) {
        return Category.find({parentCategoryId:parent._id});
      },
    },
    parentCategoryId: {
      type: CategoryType,
      resolve(parent) {
        return Category.findById(parent.parentCategoryId);
      },
    },
    createdAt: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  CategoryType,
};
