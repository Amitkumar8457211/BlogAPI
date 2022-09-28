const Tag = require("../models/tags");
const Post = require("../models/posts");

const AddNewTag = (args) => {
    const newTag = new Tag(args);
    return newTag.save();
}

const updateTag = (args) => {

    Object.keys(args).forEach(function(key) {   
        if(key == 'id'){
            args._id = args.id;
            delete args.id;
        }  
        if(!args[key]){
            delete args[key]
        }
    })
    
    return Tag.findByIdAndUpdate(args._id,args,{new: true});
}

const deleteTag = async (args) => {

    const tag =  await Tag.findByIdAndRemove(args.id);
   
    await Post.updateMany({ tagsIds: { $in : tag._id } }, {
        $pullAll: {
            tagsIds: [tag._id],
        },
    } , { safe: true, multi:true });

    return tag;
}

module.exports = { 
    AddNewTag,
    updateTag,
    deleteTag,
}