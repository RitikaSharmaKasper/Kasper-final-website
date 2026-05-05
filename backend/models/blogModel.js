const mongoose = require('mongoose');
const slugify = require('slugify'); 

const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
      },
    description:{
        type:String,
        required:[true,'description is required'],
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'category is required'],
        ref:"Categories",
     },
     createdByAdmin:{
        type:Boolean,
        default:false,
     },
     isApproved:{
        type:Boolean,
        default:false, // all blogs start unapproved
     },
    //  comments: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Comment'
    //     }
    // ],
    image:{
        type:String,//url
        default:"",
        // required:[true,'image is required'],
    },
    thumbnail:{
        type:[String],
        required:[true,'thumbnail is required'],
    default:[],
    },
    // postimages:{
    //     type:[String],// Array of post image file paths
    //     default:[],
    // },
    user:{ 
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'user id is required'],
    },
},{timestamps:true});


//Automatically create slug before saving
// Automatically generate a unique slug before saving
blogSchema.pre('save', function(next) {
    this.slug = this.slug || slugify(this.title, { lower: true });
    next();
  });
const blogModel = mongoose.model("Blog",blogSchema);
module.exports=blogModel;