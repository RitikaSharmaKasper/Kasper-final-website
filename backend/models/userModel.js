const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  
    {
        username:{
            type:String,
            required:[true,"username is required"],
        },
        email:{
            type:String,
            required:[true,"email is required"],
        },
        password:{
            type:String,
            required:[true,"password is required"],
        },
        profile:{
            type:String,
            //required:[true,"profile is required"],
        },
        bio:{
            type:String,
            default:""
        },
        role:{
            type:String,
            enum:['user','admin'],
            default: "user",
        },
        blogs:[
            {
                type:mongoose.Types.ObjectId,
                ref:'Blog',
            },
        ],
    },
    {timestamps:true}
);

const userModel= mongoose.model("User",userSchema);
module.exports = userModel;