const { GraphQLID, GraphQLString, GraphQLEnumType ,GraphQLNonNull,GraphQLList} = require("graphql");
const { PostType } = require("./../../types/posts");
const { AddNewPost , updatePost , deletePost} = require("./../../resolver/getPost");

const postMutation = {
    // Add a Post
    addPost: {
        type: PostType,
        args: {
            title:  { type: new GraphQLNonNull(GraphQLString) },
            subTitle: { type: new GraphQLNonNull(GraphQLString) },
            body: { type: new GraphQLNonNull(GraphQLString) },
            featureImage: { type: new GraphQLNonNull(GraphQLString) },
            authorId: { type: new GraphQLNonNull(GraphQLID) },
            categoryId: { type: new GraphQLNonNull(GraphQLID) },
            tagsIds: { type: new GraphQLList(GraphQLID) },
            status: { type: new GraphQLEnumType({
                name: 'PostStatus',
                values: {
                    draft: { value: 'draft' },
                    published: { value: 'published' },
                },
            }),
            defaultValue: 'draft',
            },
        },
        resolve(parent, args, cxt, info) {
            return AddNewPost(args);;
        },
    },
    // update single post
    updatePost: {
        type: PostType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            title:  { type: GraphQLString },
            subTitle: { type: GraphQLString },
            body: { type: GraphQLString },
            featureImage: { type: GraphQLString },
            authorId: { type: GraphQLID },
            categoryId: { type: GraphQLID },
            tagsIds: { type: new GraphQLList(GraphQLID) },
            status: { type: new GraphQLEnumType({
                name: 'PostStatusUpdate',
                values: {
                    draft: { value: 'draft' },
                    published: { value: 'published' },
                },
            })}
        },
        resolve(parent, args, cxt, info) {
            return updatePost(args);;
        }
    },
    // delete single post
    deletePost: {
        type: PostType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args, cxt, info) {
            return deletePost(args);;
        }
    }

};

module.exports = {
    postMutation,
};
  