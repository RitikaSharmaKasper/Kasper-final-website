// middlewares/uploadProfilePic.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/Cloudinary');

const profileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile-pics',  // 👈 alag folder for profile pics
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

const uploadProfilePic = multer({ storage: profileStorage });

module.exports = uploadProfilePic;
