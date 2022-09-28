const { GraphQLID, GraphQLString ,GraphQLNonNull} = require("graphql");
const { TagType } = require("./../../types/tags");
const { AddNewTag , deleteTag, updateTag} = require("./../../resolver/getTag");

const tagsMutation = {
    // Add a New Tag
    addTag: {
        type: TagType,
        args: {
            name:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args, cxt, info) {
            return AddNewTag(args);
        },
    },
    // update Tags
    updateTag: {
        type: TagType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            name:  { type: GraphQLString },
        },
        resolve(parent, args, cxt, info) {
            return updateTag(args);
        }
    },
    // delete single Tag
    deleteTag: {
        type: TagType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args, cxt, info) {
            return deleteTag(args);
        }
    }

};

module.exports = {
    tagsMutation,
};
  