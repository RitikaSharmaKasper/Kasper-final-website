const blogModel = require("../models/blogModel");
const slugify = require("slugify");
const categoryModel = require("../models/categoryModel");

//GET ALL category
exports.getAllCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    return res.status(200).send({
      success: true,
      categoryCount: category.length,
      message: "all categories",
      category,
    });
  } catch (error) {
    //console.log(error);
    return res.status(500).send({
      success: false,
      message: "Not find category",
      error,
    });
  }
};

//add category
exports.addCategory = async (req, res) => {
  const { title } = req.body;
  try {
    if (title) {

        const existingCategory = await categoryModel.findOne({ title });
    if (existingCategory) {
      return res.status(409).json({ success: false, message: "Category already exists" });
    }
      const slug = slugify(title.toLowerCase());
      const newcategory = new categoryModel({
        title,
        slug,
      });
      await newcategory.save();
      return res.status(201).send({
        success: true,
        message: "New category added",
        newcategory,
      });
    } else {
      return res
        .status(400)
        .json({ success: true, message: "all fields arev required" });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).send({
      success: false,
      message: "Cant add category",
      error,
    });
  }
};

//delete category
exports.deleteCategory = async (req, res) => {
  try {
    const {id} = req.params;
    const categoriesdelete = await categoryModel.findOneAndDelete({_id: id});
    if (!categoriesdelete) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Categoried deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Categories Server Error ", error});
}
};



