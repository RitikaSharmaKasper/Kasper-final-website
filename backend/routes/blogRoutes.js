const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogsByIdController,
  deleteBlogController,
  userBlogController,
  getBlogsByCategory,
  uploadImageController,
} = require("../controllers/blogController");
const upload = require("../middlewares/multer");
const checkIsUserAuthenticated = require("../middlewares/authMiddleware");
const { commenttoblogcontroller } = require("../controllers/commentController");

//router object,protected route
const router = express.Router();

//define all routes,protected routes
//GET || all blogs
router.get("/all-blog",getAllBlogsController);

//POST || CREATE BLOG
router.post(
  "/create-blog",
  checkIsUserAuthenticated,
  upload.array("thumbnail", 1),
  createBlogController
);

//PUT || update blog
router.put(
  "/update-blog/:slugOrId",
  checkIsUserAuthenticated,
  upload.array("thumbnail", 1),
  updateBlogController
);

//GET || SINGLE blog details
router.get("/get-blog/:slugOrId", getBlogsByIdController);

//DELETE || DELETE BLOG
router.delete(
  "/delete-blog/:id",
  checkIsUserAuthenticated,
  deleteBlogController
);

//GET || USER BLOG(SINGLE BLOG)
router.get("/user-blog/:id", userBlogController);

//get blogs by category
router.get("/category/:slug", getBlogsByCategory);

// POST || upload image for editor
router.post("/upload-image", checkIsUserAuthenticated, upload.single("image"), uploadImageController);

module.exports = router;
