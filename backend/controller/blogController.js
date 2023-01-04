const Blog = require("../model/blogModel");

const createBlog = async (req, res) => {
  // console.log(req.body)
  try {
    const blog = await Blog.create(
      req.body
     
    );

    blog.save();
    return res.status(200).send({message:"Successfully Created",blog});
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});

    return res.status(200).send(allBlogs);
  } catch (err) {
    response.status(500).send(err.message);
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogUpdated = await Blog.findByIdAndUpdate(id, {
      $set: req.body,
    });

    return res
      .status(200)
      .send({ message: "Blog Updated Successfully", blogUpdated });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
   return res.status(200).send({
      message: "Blog Deleted Successfully",
      deletedBlog,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteAllBlogs = async (req, res) => {
  try {
    const deletedAllBlog = await Blog.deleteMany({});
   return res.status(200).send({
      message: "All Blogs Deleted Successfully",
      deletedAllBlog,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = {createBlog,getAllBlogs,updateBlog,deleteBlog,deleteAllBlogs};
