const { GraphQLID, GraphQLList, GraphQLString } = require("graphql");
const { PostType } = require("./../../types/posts");
const { getAllPostList, getPostByID, getPostListByFilter } = require("./../../resolver/getPost");

// post Query
const postQuery = {
  //get all post list
  posts: {
    type: new GraphQLList(PostType),
    resolve(parent, args, cxt, info) {
      return getAllPostList();
    },
  },
  //get single post
  post: {
    type: PostType,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve(parent, args) {
      return getPostByID(args);
    },
  },
  //get filter postlist
  filterPosts: {
    type: new GraphQLList(PostType),
    args: {
      categoryId: {
        type: GraphQLID,
      },
      authorId: {
        type: GraphQLID,
      },
      tagsIds:{
        type: GraphQLID,
      },
      createdAt:{
        type: GraphQLString,
      }
    },
    async resolve(parent, args) {
      return getPostListByFilter(args);
    },
  },

};

module.exports = {
  postQuery,
};

