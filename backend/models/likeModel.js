//Anyone (guest or logged-in user) can like a blog

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    blog_id: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Like', LikeSchema);