const { GraphQLID, GraphQLList  } = require("graphql");
const { AuthorType } = require("./../../types/authors");
const { getAllAuthorList,getAuthorByID  } = require("./../../resolver/getauthor");

const authorQuery = {

    //get all author
    authors : {
        type: new GraphQLList(AuthorType),
        resolve(parent, args, cxt, info) {
            return getAllAuthorList();
        },
    },
    //get single author
    author : {
        type: AuthorType,
        args: {
            id: {
                type: GraphQLID,
            },
        },
        resolve(parent, args, cxt, info) {
            return getAuthorByID(args);
        },
    },

};

module.exports = {
    authorQuery,
};
