// POST: Submit a comment to a blog
const Comment = require("../models/commentModel");
const User = require("../models/userModel");
const Blog = require("../models/blogModel");

// GET: View all comments for blogs created by logged-in user
exports.getAllCommentController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).send("User not found");

    const blogs = await Blog.find({ user: user._id }).populate("user");
    const comments = await Comment.find({
      blog: { $in: blogs.map((blog) => blog._id) },
      approved: true,
    }) //Comment documents where the blog field is in the array of blog IDs, all comments that are on any of these blogs
      .populate("blog")
      .populate("user");

    //Send data to frontend as JSON
    res.status(200).json({ user, blogs, comments });
  } catch (error) {
    console.log("Error fetching comments", error);
    res.status(500).json({ error: "comment not found" });
  }
};


// Everyone to See All Approved Comments:
exports.getAllCommentController = async(req,res) => {
    try{
        const comments = await Comment.find({approved: true})
        .populate("blog" , "title slug")
        .populate("user" , "username");
       
        res.status(200).json({success:true,comments});
    }catch(error){
        console.error("error fetching comments" , error);
        res.status(500).json({error:"server error"});
    }

    }




//GET Controller – Show the Edit Form

exports.getEditComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId)
      .populate("user")
      .populate("blog");
    if (!comment) {
      return res.status(404).json({ error: "comment not found" });
    }

    res.json({ comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};
//POST/PUT Controller – Handle the Form Submission
exports.updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const { content } = req.body;

    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { content, approved: false },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ error: "update failed" });
    }

    // Send updated comment and blog ID (frontend can redirect)
    res.status(200).json({
      message: "comment updated successfully",
      comment,
      blogId: comment.blog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"server error"});
  }
};

// POST: Submit a comment to a blog
// exports.commentToBlogController = async (req, res) => {
//   try {
//     const { message } = req.body;
//     const userId = req.user.id;
//     const blogId = req.params.id;

//     const user = await User.findById(userId);
//     if (!user) return res.status(400).send("User not found");

//     const newComment = new Comment({
//       blog: blogId,
//       user: userId,
//       content: message,
//       approved: false,
//     });

//     await newComment.save();

//     //Send JSON response so frontend can handle redirect
//     res.status(201).json({
//         success:true,
//         message:"comment submitted but pending approval",
//         blogId,
//     });
// }catch(error){
//     console.error("Error saving comment:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

//Allow for either guest or user:
exports.commentToBlogController = async (req, res) => {
    try {
      const { content, name, email } = req.body;
      const blogId = req.params.id;
  
      if (!content) {
        return res.status(400).json({ error: "Content is required" });
      }
      const commentData = {
        blog: blogId,
        content,
        approved:false,
      };
      if(req.user){
        commentData.user = req.user.id; // from auth middleware if logged in
      } else {
        if (!name || !email){
        return res.status(400).json({error:"Name and email are required for guest"})
        }
        commentData.guest = {name,email};
    }
    const newComment = new Comment(commentData);
    await newComment.save();

    res.status(201).json({
        success:true,
        message:"Comment submitted, pending approval",
    })
} catch (error) {
    console.error("Error saving comment:", error);
    res.status(500).json({ error: "Server error" });
  }
};
      

  


// POST: Approve a comment

exports.approveCommentController = async (req, res) => {
  try {
    const { commentId } = req.body;
    const userId = req.user.id;

    const comment = await Comment.findById(commentId
      
      
    ).populate("blog");;
    if(!comment){
        return res.status(404).json({error:"Comment not found"});
    }
    const blogOwner = comment.blog.user.toString();
    if (blogOwner !== userId && req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied: Not authorized" });
    }

    comment.approved = true;
    await comment.save();
    res.status(200).json({
        success:true,
        message:"comment approved",
        comment,
    });
   
  } catch (error) {
    console.log("Error approving comment:", error);
    res.status(500).json({error:"server error"});
};
};


//POST: Disapprove a comment
exports.disapproveCommentController = async (req, res) => {
  try {
    const { commentId } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(commentId,
         { approved: false },
         {new:true}
        );

        if(!updatedComment){
            return res.status(404).json({error:"comment not found"});
        }
        res.status(200).json({
            success:true,
            message:"comment disapproved",
            comment:updatedComment,
        });
    
  } catch (error) {
    console.log("Error disapproving comment", error);
    res.status(500).json({error:"server error"});
  }
};

//by user
exports.deleteCommentController = async (req, res) => {
  try {
    const userId = req.user.id; //user from middleware
    const commentId = req.params.id;
     
    //get the comment
    const comment = await Comment.findById(commentId);
    if(!comment){
      return res.status(404).json({error:"comment not found"});
    }

      // 2. Get the blog from the comment
    const blog = await Blog.findById(comment.blog);
    if(!blog){
      return res.status(404).json({error:"Blog not found"});
    }

    // 3. Only the blog owner can delete the comment
    // Admin check
    if (blog.user.toString()!==userId && req.user.role !== "admin" ) {
      return res.status(403).json({ error: "Access denied: You must be the blog owner or an admin" });
    }

    // Try to delete the comment
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.log("Error deleting comment:", error);
    res.status(500).json({ error: "server error" });
  }
};

//reply to Comment
 
exports.addReplyToComment = async(req,res)=> {
  try{
    const commentId = req.params.id;
    const { content , name , email } =req.body;
 // Ensure content is provided
    if(!content){
      return res.status(400).json({error:"please comment"});
    }
    // Create the reply object
    const reply = {
      content,
      approved:false,
      date: new Date(),
    };
     // Check if the user is authenticated (logged in)
    if (req.user){
           // If user is authenticated, attach their user ID
        reply.user = req.user.id;
    }else{
       // If user is not authenticated (i.e., guest), check for name and email
      if (!name || !email){
        return res.status(400).json({error:"Guest name and email required"});
      }
      reply.guest = {name , email};
    }
      // Update the comment by adding the new reply

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { $push: { replies: reply } },
      { new: true } // return the updated document
    ).populate("replies.user", "username email");
    // await Comment.findByIdAndUpdate(
    //   commentId,
    //   { $push :{replies:reply}}
    // );
    // const updatedComment = await Comment.findById
    // (commentId).populate("replies.user", "username email");
     // Check if the comment was found and updated
    if(!updatedComment){
      return res.status(404).json({error:"Comment not found"});

    }
    res.status(201).json({success:true,message:"Reply added and pending approval",
      updatedComment
    })
  }
   catch (error){
    console.error("Error adding reply" , error);
    res.status(500).json({error:"server error"});
  }
};


//delete comment
exports.deleteReplyFromComment = async (req, res) => {
  try {
    const { commentId, replyId } = req.params;
    const userId = req.user?.id || req.user?._id;
    if(!userId){
  return res.status(401).json({message:"unauthorized to delete the comment"});
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    const reply = comment.replies.id(replyId);
    if (!reply) {
      return res.status(404).json({ error: "Reply not found" });
    }

    if(reply.user.toString() !== req.user._id.toString()){
      return res.status(403).json({message:"unauthorized to delete the reply"});
    }

    // Permission check: user is reply owner OR is admin
    const isOwner = reply.user?.toString() === userId;
    const isAdmin = req.user.role === "admin";
    if (!isOwner && !isAdmin) {
      return res.status(403).json({ error: "Access denied" });
    }
    comment.replies.pull(replyId);
    //reply.remove(); // Remove reply fro m replies array
    await comment.save();

    res.status(200).json({ success: true, message: "Reply deleted successfully" });
  } catch (error) {
    console.error("Error deleting reply:", error);
    res.status(500).json({ error: "Server error" });
  }
};


//liketoggle
exports.toggleCommentLike = async(req,res)=>{
  const commentId = req.params.id;
  const userId = req.user?.id;
 const guestEmail = req.body.guestEmail;

 if(!userId && !guestEmail) {
  return res.status(400).json({error:"user or guest email is required"});
 }

try{
  const comment = await Comment.findById(commentId);
  if  (!comment) return res.status(404).json({error:"comment not found"});

    //check if user/guest already liked
    const alreadyLikedIndex = comment.likes.findIndex((like) => userId ? like.user?.toString() === userId : like.guestEmail === guestEmail
    );

    if(alreadyLikedIndex > -1) {
      //unlike
      comment.likes.splice(alreadyLikedIndex ,1);

      } else {
        //like
        comment.likes.push(userId ? {user :userId} : {guestEmail});
      }

      await comment.save();
      res.status(200).json({success:true, likes:comment.likes});
    } catch(error) {
      console.log("like error", error);
      res.status(500).json({error :"server error"});
    }

};

//toggle-replylike
exports.toggleReplyLike = async (req,res) => {
  try {
    const {commentId , replyId} = req.parmas;
    const {guestEmail} = req.body;
    const user = req.user;

    //fetch the comment
    const comment = await Comment.findById(commentId);
    if(!comment) return res.status(404).json({error: "comment not found"});


    //find the reply inside comment
    const reply = comment.replies.id(replyId);
    if(!reply) return res.status(404).json({error:"Reply not found"});


    //determine if the user or guest has already liked the reply
    let existingLikeIndex = -1;

    if(user){
      existingLikeIndex = reply.likes.findIndex(
        (like) => like.user?.toString() === user._id.toString()
      );

    } else if (guestEmail) {
      existingLikeIndex =  reply.likes.findIndex(
        (like) => like.guestEmail === guestEmail
      );
    } else {
      return res.status(400).json({error:"Guest email or user auth required"})
    }

    //Toggle like
    if(existingLikeIndex !== -1){
      // already liked- remove like(unlike)
      reply.likes.splice(existingLikeIndex,1)

      } else{
        //not likied yet- add like
        const newLike = user ? {user: user._id} :{ guestEmail}
        reply.likes.push(newLike);
      }
      await comment.save();
    
 return res.status(200).json({
  success:true,
 message:existingLikeIndex !== -1? 
 "reply unliked":"reply liked",
 likes:reply.likes,
 });

 }catch (error) {
  console.error("Error toggling reply like:", error);
  res.status(500).json({ error: "Server error" });
  }
} 
