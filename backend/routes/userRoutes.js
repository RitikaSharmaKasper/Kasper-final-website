const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
  updateProfileController,
  getProfileController,
} = require("../controllers/userController");
const upload = require("../middlewares/multer");
const profileMulter = require("../middlewares/profileMulter")

//router object
const router = express.Router(); //call router from express only we get

//create all routes

//get all users || GET
router.get("/all-users", getAllUsers);

//create user || POST
router.post("/register", upload.single("profile"), registerController);

//Login || POST
router.post("/login", loginController);

//update||put
router.put(
  "/update-profile/:id",
  profileMulter.single("profile"),
  updateProfileController
);

//Get specific users|| GET
router.get("/get-profile/:id", getProfileController);

module.exports = router;
