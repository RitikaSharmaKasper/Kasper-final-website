const Like = require("../models/likeModel");

//post:like a blog
exports.likeBlogController = async (req, res) => {
    try {
        const blogId = req.params.id;

         // Optional: prevent duplicate likes using IP
         const ip= req.ip;
         const alreadyLiked = await Like.findOne({blog_id:blogId,ip});

         if (alreadyLiked) {
            return res.status(400).json({ message: 'You already liked this blog.' });
         }

         const like = new Like({
            blog_id:blogId,
            ip,
         });
         await like.save();
         return res.status(201).json({ message: 'Blog liked!' });
       } catch (err) {
         console.error('Like error:', err);
         return res.status(500).json({ error: 'Server error' });
       }
     };
     
     // GET: Total likes for a blog
     exports.getLikesCount = async(req,res) => {
        try{
            const blogId = req.params.id;
            const count = await Like.countDocuments({blog_id:blogId});
            res.status(200).json({blogId,likes:count});
        }catch(err){
            console.error('Get likes error:', err);
            res.status(500).json({ error: 'Server error' });
          }
        }; 
       