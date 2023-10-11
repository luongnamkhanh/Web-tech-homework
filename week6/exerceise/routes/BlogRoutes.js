const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  searchBlogByTitleKeyword,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
router.route("/search/:keyword").get(searchBlogByTitleKeyword);


module.exports = router;
