const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReplySchema = new Schema ({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required: false,
    },
    guest:{
        name:String,
        email:String
    },
    content:{
        type:String,
        required:true
    },
    approved:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default: Date.now
    },
    likes:[{
        user:{
        type: Schema.Types.ObjectId,
    ref:'User'},
    guestEmail:String
    }]
});

const CommentSchema = new Schema({
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    content: {
        type: String,
        required: true
    },
    // likes: [{
    //     type:Schema.Types.ObjectId,
    //     ref: 'Like',
    //     default:null
    // }],
    likes: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        guestEmail: String
      }],
    guest:{
        name:String,
        email: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    approved: {
        type: Boolean,
        default: false
    },
    replies:[ReplySchema]
});

module.exports = mongoose.model('Comment', CommentSchema);
