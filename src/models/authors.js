const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    mail: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Admin"],
      default: "Admin",
    },
    profilePic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Author", AuthorSchema);
