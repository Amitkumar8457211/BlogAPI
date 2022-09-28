const { GraphQLID, GraphQLString, GraphQLEnumType ,GraphQLNonNull} = require("graphql");
const { AuthorType } = require("./../../types/authors");
const { AddNewAuthor , deleteAuthor, updateAuthor} = require("./../../resolver/getAuthor");

const authorMutation = {
    // Add a Author
    addAuthor: {
        type: AuthorType,
        args: {
            username:  { type: new GraphQLNonNull(GraphQLString) },
            mail: { type: new GraphQLNonNull(GraphQLString) },
            profilePic: { type: new GraphQLNonNull(GraphQLString) },
            role: { type: new GraphQLEnumType({
                name: 'UserRole',
                values: {
                    Admin: { value: 'Admin' },
                },
            }),
            defaultValue: 'Admin',
            },
        },
        resolve(parent, args, cxt, info) {
            return AddNewAuthor(args);;
        },
    },
    // update single author
    updateAuthor: {
        type: AuthorType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            username:  { type: GraphQLString },
            mail: { type: GraphQLString },
            profilePic: { type: GraphQLString },
            role: { type: new GraphQLEnumType({
                name: 'UserRoleType',
                values: {
                    Admin: { value: 'Admin' },
                },
            })}
        },
        resolve(parent, args, cxt, info) {
            return updateAuthor(args);
        }
    },
    // delete single Author
    deleteAuthor: {
        type: AuthorType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args, cxt, info) {
            return deleteAuthor(args);
        }
    }

};

module.exports = {
    authorMutation,
};
  