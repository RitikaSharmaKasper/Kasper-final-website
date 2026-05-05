const express = require("express");
const {
  getAllCategory,
  addCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const checkIsUserAuthenticated = require("../middlewares/authMiddleware");
const { getBlogsByCategory } = require("../controllers/blogController");

//router object,protected route
const router = express.Router();

//GET || all category
router.get("/all-categories", getAllCategory);

//post || add category
router.post("/add-categories", checkIsUserAuthenticated, addCategory);

router.delete("/delete-categories/:id", checkIsUserAuthenticated,deleteCategory);


module.exports = router;
