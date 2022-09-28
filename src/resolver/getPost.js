const Post = require("../models/posts");

const getAllPostList = () => {
    return Post.find();
}

const getPostByID = (args) => {
    return Post.findById(args.id);
}

const getPostListByFilter = (args) => {

    Object.keys(args).forEach(function(key) {
        if(key == 'createdAt'){
            args[key] = { $gte: args[key]+"-01", $lte: args[key]+"-31" };
        }
        if(key == 'tagsIds'){
            args[key] =   { $in : args[key] }
        }
    })

    return Post.find(args);
}

const AddNewPost = (args) => {
    const newPost = new Post(args);
    return newPost.save();
}

const updatePost = (args) => {

    Object.keys(args).forEach(function(key) {   
        if(key == 'id'){
            args._id = args.id;
            delete args.id;
        }  
        if(!args[key]){
            delete args[key]
        }
    })
    
    return Post.findByIdAndUpdate(args._id,args,{new: true});
}

const deletePost = (args) => {
    return Post.findByIdAndRemove(args.id);
}

module.exports = { 
    getAllPostList,
    getPostByID,
    getPostListByFilter,
    AddNewPost,
    updatePost,
    deletePost
}