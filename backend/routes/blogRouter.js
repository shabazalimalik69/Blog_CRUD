const express = require("express");
const { createBlog, getAllBlogs, updateBlog, deleteBlog, deleteAllBlogs } = require("../controller/blogController");

const router = express.Router();

router.post("/createBlog", createBlog);
router.get("/getBlogs", getAllBlogs);
router.patch("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);
router.delete("/deleteAll", deleteAllBlogs);
module.exports = router;
