const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blog: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timeStamps: true }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
