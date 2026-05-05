const express = require('express');
const router = express.Router();

const {
  likeBlogController,getLikesCount
}=require("../controllers/likeController");

//anyone can like
router.post("/blog/:id" , likeBlogController);

//get total likes for a blog
router.get("/blog/:id/likes" , getLikesCount);

module.exports = router;
