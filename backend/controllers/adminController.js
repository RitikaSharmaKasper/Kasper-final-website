const mongoose= require('mongoose');
const blogModel = require('../models/blogModel');

// PUT /admin/blog/:id/approve
exports.approvedBlog=async(req,res) =>{
    try{
        const blog = await blogModel.findByIdAndUpdate(
            req.params.id,
            {isApproved:true},
            {new:true}

        );
        if(!blog)return res.status(404).json({message:"Blog not found"});
        res.json({message: "Blog approved successfully",blog});
    } catch(err){
        res.status(500).json({error:"server error"});
    }
}