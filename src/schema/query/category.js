const { GraphQLID, GraphQLList  } = require("graphql");
const { CategoryType } = require("./../../types/categorys");
const { getAllcategoriesList, getAllcategoriesTreeById ,getAllcategoriesTree } = require("./../../resolver/getCategory");

const categoryQuery = {

    //get all Category
    categories : {
        type: new GraphQLList(CategoryType),
        resolve(parent, args, cxt, info) {
            return getAllcategoriesList();
        },
    },

    //get single Category tree by child to parent
    categoriesTreeById : {
        type: new GraphQLList(CategoryType),
        args: {
            id: {
                type: GraphQLID,
            },
        },
        resolve(parent, args, cxt, info) {
            return getAllcategoriesTreeById(args);
        },
    },

    //get all Category tree by parent to child
    categoriesTree : {
        type: new GraphQLList(CategoryType),
        args: {
            id: {
                type: GraphQLID,
            },
        },
        resolve(parent, args, cxt, info) {
            return getAllcategoriesTree(args);
        },
    },
    
};

module.exports = {
    categoryQuery,
};
