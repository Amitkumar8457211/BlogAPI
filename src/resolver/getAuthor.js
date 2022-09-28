const Author = require("../models/authors");
const Post = require("../models/posts");

const getAllAuthorList = () => {
    return Author.find();
}

const getAuthorByID = (args) => {
    return Author.findById(args.id);
}

const AddNewAuthor = (args) => {
    const newAuthor = new Author(args);
    return newAuthor.save();
}

const updateAuthor = (args) => {

    Object.keys(args).forEach(function(key) {   
        if(key == 'id'){
            args._id = args.id;
            delete args.id;
        }  
        if(!args[key]){
            delete args[key]
        }
    })
    
    return Author.findByIdAndUpdate(args._id,args,{new: true});
}

const deleteAuthor = async (args) => {
    const author =  await Author.findByIdAndRemove(args.id);
    await Post.deleteMany({authorId: author.id  });
    return author;
}

module.exports = { 
    getAllAuthorList,
    getAuthorByID,
    AddNewAuthor,
    updateAuthor,
    deleteAuthor
}