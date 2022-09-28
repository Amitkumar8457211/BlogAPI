const { GraphQLID, GraphQLString ,GraphQLNonNull} = require("graphql");
const { CategoryType } = require("./../../types/categorys");
const { AddNewCategory , deleteCategory, updateCategory} = require("./../../resolver/getCategory");

const categoryMutation = {
    // Add a Category
    addCategory: {
        type: CategoryType,
        args: {
            title:  { type: new GraphQLNonNull(GraphQLString) },
            description: { type: GraphQLString },
            parentCategoryId: { type: GraphQLID },
        },
        resolve(parent, args, cxt, info) {
            return AddNewCategory(args);;
        },
    },
    // update single Category
    updateCategory: {
        type: CategoryType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            title:  { type: GraphQLString },
            description: { type: GraphQLString },
            parentCategoryId: { type: GraphQLID },
        },
        resolve(parent, args, cxt, info) {
            return updateCategory(args);
        }
    },
    // delete single Category
    deleteCategory: {
        type: CategoryType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args, cxt, info) {
            return deleteCategory(args);
        }
    }

};

module.exports = {
    categoryMutation,
};
  