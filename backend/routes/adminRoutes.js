const express = require('express');
const router = express.Router();
const checkIsUserAuthenticated = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/roleMiddleware');
const {approvedBlog} =require('../controllers/adminController');


 router.put('/blog/:id/approve'
,checkIsUserAuthenticated,isAdmin,approvedBlog);

 module.exports = router; 