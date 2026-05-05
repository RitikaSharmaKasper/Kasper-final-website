const mongoose = require('mongoose');

const categorySchema= new mongoose.Schema({
    title:{
        type:String,
         unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
      },
  
});

// Pre-save hook to automatically generate slug if missing
categorySchema.pre('save', function(next) {
    if (!this.slug) {
      this.slug = slugify(this.title, { lower: true });
    }
    next();
  });
const categoryModel = mongoose.model("Categories",categorySchema);
module.exports =categoryModel;