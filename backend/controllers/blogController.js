const mongoose = require('mongoose');
const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');
const slugify = require("slugify");
const categoryModel = require("../models/categoryModel");
const Comment = require('../models/commentModel');

const cloudinary = require("../config/Cloudinary");

//GET ALL BLOGS
// Fetch only approved blogs for normal users
// Fetch all blogs (including unapproved) for admin
// exports.getAllBlogsController = async (req, res) => {
//   try {
//     let blogs;
//     //console.log("Decoded User from Token:", req.user);
//     //console.log('User ID:', req.user?._id);
//     //console.log('User Role:', req.user?.role);


//     const user = req.user;
//     const userId = user?._id;
//     const isAdmin = user?.role === 'admin';


//     //console.log('Is Admin:', isAdmin);
//     //console.log('User ID:', userId);

//     if (isAdmin) {
//       //console.log('Fetching blogs for admin...');
//       blogs = await blogModel.find().populate('user', 'username email profile')
//         .populate("category", "title")
//         .sort({ createdAt: -1 });
//     } else if (userId) {
//       console.log('Fetching blogs for authenticated user...');
//       // Authenticated user sees approved blogs and their own unapproved blogs
//       blogs = await blogModel
//         .find({
//           $or: [
//             { isApproved: true },
//             { user: userId } // includes their unapproved blogs too
//           ],
//         })
//         .populate("user", "username email")
//         .populate("category", "title")
//         .sort({ createdAt: -1 });

//     } else {
//       //console.log('Fetching blogs for public user...');
//       // Public sees only approved blogs
//       blogs = await blogModel.find({ isApproved: true }).populate('user', 'username email')
//         .populate("category", "title")
//         .sort({ createdAt: -1 });
//       //console.log(`Blogs Retrieved (${isAdmin ? "Admin" : userId ? "Authenticated User" : "Public"}):`, blogs);

//     }

//     // Log the number of blogs retrieved
//     //console.log("Blogs Retrieved: ", blogs);
//     //console.log("Blogs Count: ", blogs.length);

//     if (!blogs || blogs.length === 0) {
//       return res.status(404).send({
//         success: false,
//         message: "No blogs found",
//       });
//     }

//     // Log success message and return the list of blogs
//     //console.log("Blogs fetched successfully");
//     return res.status(200).send({
//       success: true,
//       BlogCount: blogs.length,
//       message: "Blog list fetched successfully",
//       blogs,
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({
//       success: false,
//       message: "Error while getting blogs",
//       error,
//     });
//   }
// };
exports.getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).populate('user', 'username');
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No blogs Found",
      });
    }
    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "all blogs lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while getting blogs",
      error,
    });
  }
};

//create Blog amar sir
// exports.createBlogController = async (req, res) => {
//   //console.log(req.files); 
//   try {
//     const { title, description, category, image } = req.body;
//     //console.log("Received Title:", title); 
//     //validation
//     if (!title || !description || !category) {
//       return res.status(400).send({
//         success: false,
//         message: "please provide all fields",
//       });
//     }
//     const existingUser = await userModel.findById(req.user._id)
//     //validation
//     if (!existingUser) {
//       return res.status(404).send({
//         success: false,
//         message: 'unable to find user'
//       })
//     }


//     // const thumbnail = req.files ? req.files.map(file => `/upload/${file.filename}`) : [];
//     let thumbnail = [];

//     if (req.files && req.files.length > 0) {
//       const uploadPromises = req.files.map(file =>
//         cloudinary.uploader.upload(file.path, {
//           folder: "blog_thumbnails"
//         })
//       );
//       const uploadResults = await Promise.all(uploadPromises);
//       thumbnail = uploadResults.map(result => result.secure_url);
//     }

//     // Generate unique slug
//     const baseSlug = slugify(title, { lower: true, strict: true });
//     let uniqueSlug = baseSlug;
//     let counter = 1;

//     while (await blogModel.findOne({ slug: uniqueSlug })) {
//       uniqueSlug = `${baseSlug}-${counter++}`;
//     }
//     const newBlog = new blogModel({
//       title,
//       description,
//       image,
//       user: req.user._id,
//       category,
//       thumbnail,
//       slug: uniqueSlug,
//       createdByAdmin: req.user.role === 'admin',
//       isApproved: req.user.role === "admin" ? true : false,

//     });
//     const session = await mongoose.startSession();
//     session.startTransaction();
//     try {
//       await newBlog.save({ session });
//       existingUser.blogs.push(newBlog)
//       await existingUser.save({ session })
//       await session.commitTransaction();
//       return res.status(201).send({
//         success: true,
//         message: "Blog created",
//         newBlog,
//       });
//     } catch (error) {
//       await session.abortTransaction();

//       console.log(error, "error.message")
//       throw error;

//     } finally {
//       session.endSession();
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send({
//       success: false,
//       message: "Error while creating blog",
//       error,
//     });
//   };
// };

// Edit create blog by aman
exports.createBlogController = async (req, res) => {
  try {
    const { title, description, category, image } = req.body;

    // validation
    if (!title || !description || !category) {
      return res.status(400).send({
        success: false,
        message: "please provide all fields",
      });
    }

    const existingUser = await userModel.findById(req.user._id);
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }

    // ✅ FIX: NO cloudinary.uploader.upload()
    let thumbnail = [];
    if (req.files && req.files.length > 0) {
      thumbnail = req.files.map((file) => file.path); // already Cloudinary URL
    }

    // Generate unique slug
    const baseSlug = slugify(title, { lower: true, strict: true });
    let uniqueSlug = baseSlug;
    let counter = 1;

    while (await blogModel.findOne({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${counter++}`;
    }

    const newBlog = new blogModel({
      title,
      description,
      image,
      user: req.user._id,
      category,
      thumbnail,
      slug: uniqueSlug,
      createdByAdmin: req.user.role === "admin",
      isApproved: req.user.role === "admin",
    });

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      await newBlog.save({ session });
      existingUser.blogs.push(newBlog._id);
      await existingUser.save({ session });

      await session.commitTransaction();

      return res.status(201).send({
        success: true,
        message: "Blog created",
        newBlog,
      });
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error("Create blog error:", error);
    return res.status(500).send({
      success: false,
      message: "Error while creating blog",
      error: error.message,
    });
  }
};


//update a blog
exports.updateBlogController = async (req, res) => {
  try {
    const { slugOrId } = req.params;

    // Handle file upload for thumbnail
    let thumbnail = [];
    if (req.files && req.files.length > 0) {
      thumbnail = req.files.map((file) => file.path); // already Cloudinary URL
    }

    // Use mongoose's built-in ObjectId check
    const isObjectId = mongoose.Types.ObjectId.isValid(slugOrId);
    const filter = isObjectId ? { _id: slugOrId } : { slug: slugOrId };
    const blog = await blogModel.findOne(
      filter);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found with the given ID or slug",
      });
    }
    // Authorization check before update
    if (req.user.role !== 'admin' && blog.user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to modify this blog' });
    }

    // Prepare update data
    const updateData = { ...req.body };
    if (thumbnail.length > 0) {
      updateData.thumbnail = thumbnail;
      updateData.image = ""; // Clear URL if a file is uploaded to avoid priority issues
    } else if (req.body.image) {
      updateData.thumbnail = []; // Clear file if a URL is provided
    }

    // Proceed with update
    const updatedBlog = await blogModel.findOneAndUpdate(
      filter,
      updateData,
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "blog updated",
      blog: updatedBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while updating blog",
      error,
    });
  }
};

//single blog
exports.getBlogsByIdController = async (req, res) => {
  try {
    const { slugOrId } = req.params
    //console.log("SlugOrId from params:", req.params.slugOrId);
    //const blog = await blogModel.findById(id).populate('user','username');
    //Find blog by slug
    //const blog = await blogModel.findOne({slug}).populate("user", "username");
    // Check if slugOrId is a number or string, and decide if it's a slug or id
    //Check if it's a valid MongoDB ObjectId:
    const isValidObjectId = mongoose.Types.ObjectId.isValid(slugOrId);

    const blog = isValidObjectId
      //   const blog = isNaN(slugOrId) // If it's not a number, it's assumed to be a slug
      ? await blogModel.findById(slugOrId).populate('user', 'username') // Fetch by slug
      : await blogModel.findOne({ slug: slugOrId }).populate('user', 'username'); // Fetch by ID

    //   if (!slugOrId) {
    //     return res.status(400).send({
    //       success: false,
    //       message: "slugOrId is missing from URL",
    //     });
    //   }


    if (!blog) {
      return res.status(404).send({//page not found
        success: false,
        message: 'blog not found with this id or slug '
      })
    }

    // Restrict if blog is not approved
    // const currentUser = req.user;
    // const isOwner = currentUser && blog.user._id.toString() === currentUser._id.toString();
    // const isAdmin = currentUser && currentUser.role === 'admin';

    // console.log("blog.isApproved = ", blog.isApproved)
    // console.log("currentUser = ", currentUser);
    // if(!blog.isApproved && !isAdmin && !isOwner){
    //     return res.status(403).send({
    //         success: false,
    //         message: 'This blog is not approved yet',
    //       });
    //     }

    //Fetch only approved comments for this blog
    const comments = await Comment.find({ blog: blog._id, approved: true })
      .populate('user', 'username')
      .sort({ createdAt: -1 });

    // ✅ SAFE BRIDGE: Convert thumbnail array to string for frontend compatibility
    const blogObj = blog.toObject();
    if (Array.isArray(blogObj.thumbnail) && blogObj.thumbnail.length > 0) {
      blogObj.thumbnail = blogObj.thumbnail[0];
    } else if (Array.isArray(blogObj.thumbnail)) {
      blogObj.thumbnail = "";
    }

    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      blog: blogObj,
      comments,
    });

  } catch (error) {
    console.log(error)
    return res.status(400).send({
      success: false,
      message: 'error while getting single blog',
      error,
    })
  }
};

//Delete blog
exports.deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;

    //const blog = await blogModel.findOne({ slug }).populate("user");

    const blog = await blogModel.findById(id).populate("user")
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    //  Authorization check BEFORE deletion
    if (req.user.role !== 'admin' && blog.user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this blog' });
    }

    await blog.user.blogs.pull(blog._id);
    await blog.user.save();


    await blogModel.findByIdAndDelete(id)


    return res.status(200).send({
      success: true,
      message: "blog deleted"
    })
  } catch (error) {
    console.log(error)
    return res.status(400).send({
      success: false,
      message: "Error while deleting blog",
      error
    })
  }
};

//GET USER BLOG
exports.userBlogController = async (req, res) => {
  try {
    const userBlog = await userModel.findById(req.params.id).populate({
      path: 'blogs',
      populate: {
        path: 'user',
        select: 'username'
      }
    });
    if (!userBlog) {
      return res.status(404).send({
        success: false,
        message: 'blogs not found with this id'
      })
    }
    return res.status(200).send({
      success: true,
      message: "user blogs",
      userBlog,
    });
  } catch (error) {
    console.log(error)
    return res.status(400).send({
      success: false,
      message: 'error in user blog',
      error
    })
  }
};

//getbycategory

//    exports.getBlogsByCategory = async (req, res) => {
//     try {
//       const slug = req.params.slug.trim().toLowerCase();



//       const category = await categoryModel.findOne({ slug }); 
//       console.log("Category Slug from params:", slug);

// if (!category) {
// return res.status(404).json({ success: false, message: "Category not found" });
// }
// const categoryId = category._id;


//       if (!categoryId) {
//         return res.status(400).json({
//           success: false,
//           message:  `Blogs under category "${category.title}"`,
//           blogs
//         });
//       }



//       const blogs = await blogModel
//         .find({ category: categoryId })
//         .populate("user", "username") 
//         .populate("category", "title") 
//         .sort({ createdAt: -1 }); 

//       if (!blogs || blogs.length === 0) {
//         return res.status(200).json({
//           success: true,
//           message: "No blogs found for this category",
//           blogs: [],
//         });
//       }

//       res.status(200).json({
//         success: true,
//         blogs,
//       });
//     } catch (error) {
//       console.error("Error fetching blogs by category:", error);
//       res.status(500).json({
//         success: false,
//         message: "Server Error",
//         error: error.message,
//       });
//     }
//   };

exports.getBlogsByCategory = async (req, res) => {
  try {
    const param = req.params.slug;

    let category = null;
    // Try finding by slug (convert both to lowercase for match)
    const allCategories = await categoryModel.find();
    category = allCategories.find(cat => cat.slug?.toLowerCase() === param.toLowerCase());
    // If not found by slug, try by ID if it's valid
    if (!category && mongoose.Types.ObjectId.isValid(param)) {
      category = await categoryModel.findById(param);
    }

    // 3. If still not found, try match by title (case-insensitive)
    if (!category) {
      category = allCategories.find(
        (cat) => cat.title && param.toLowerCase() === param.toLowerCase()
      );
    }
    // If still not found, return error
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });

    }
    // Generate slug if missing and save
    if (!category.slug) {
      category.slug = slugify(category.title, { lower: true });
      await category.save();
    }

    const categoryId = category._id;


    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "Category ID is required",
      });
    }


    const currentUserId = req.user?._id?.toString();
    const isAdmin = req.user?.role === 'admin';

    let blogs;


    if (isAdmin) {
      blogs = await blogModel
        .find({ category: categoryId })
        .populate("user", "username")
        .populate("category", "title")
        .sort({ createdAt: -1 });
    } else if (currentUserId) {
      blogs = await blogModel
        .find({
          category: categoryId,
          $or: [
            { isApproved: true },
            { user: currentUserId }
          ]
        })
        .populate("user", "username")
        .populate("category", "title")
        .sort({ createdAt: -1 });
    } else {
      blogs = await blogModel
        .find({ category: categoryId, isApproved: true })
        .populate("user", "username")
        .populate("category", "title")
        .sort({ createdAt: -1 });
    }

    if (!blogs || blogs.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No blogs found for this category",
        blogs: [],
      });
    }

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs by category:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};


// Image upload for Jodit Editor
exports.uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      console.log("No file object in request");
      return res.status(400).json({ success: false, message: "No file uploaded. Make sure field name is 'image'" });
    }
    
    console.log("Image uploaded to Cloudinary:", req.file.path);
    
    return res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      link: req.file.path, 
    });
  } catch (error) {
    console.error("Editor Upload Error Details:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error during upload",
      debug: error.message 
    });
  }
};

