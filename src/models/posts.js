const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    body: {
      type: String,
    },
    featureImage: {
      type: String,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auther",
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    tagsIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags",
    }],
    status: {
      type: String,
      enum: ["draft", "published"],
      default : "draft"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
