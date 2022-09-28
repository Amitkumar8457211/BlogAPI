const Category = require("./../models/categorys");
const Post = require("../models/posts");

const getAllcategoriesList = () => {
    return Category.find();
}

const getAllcategoriesTreeById = (args) => {
    return Category.find({_id:args.id});
}

const getAllcategoriesTree = async (args) => {
    return Category.find({parentCategoryId:args.id});
}

const AddNewCategory = (args) => {
    const newCategory = new Category(args);
    return newCategory.save();
}

const updateCategory = (args) => {

    Object.keys(args).forEach(function(key) {   
        if(key == 'id'){
            args._id = args.id;
            delete args.id;
        }  
        if(!args[key]){
            delete args[key]
        }
    })
    
    return Category.findByIdAndUpdate(args._id,args,{new: true});

}

const deleteCategory = async (args) => {
    const category =  await Category.findByIdAndRemove(args.id);
    await Post.deleteMany({categoryId: category.id  });
    return category;
}

module.exports = { 
    getAllcategoriesList,
    getAllcategoriesTreeById,
    getAllcategoriesTree,
    AddNewCategory,
    updateCategory,
    deleteCategory,
}