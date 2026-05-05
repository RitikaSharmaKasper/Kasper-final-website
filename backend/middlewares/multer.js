// const multer = require('multer');
// const path =require('path'); 

// //multer,file upload
// const storage= multer.diskStorage({
//     destination:function (req,file ,cb){ 
//         cb(null,`public/upload/`);
//     },
//     filename:function(req,file,cb){
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });
// const upload = multer({storage:storage});
// module.exports =  upload;

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/Cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'blog-content',
      resource_type: 'auto',
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'mp4', 'mov', 'webm'],
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
