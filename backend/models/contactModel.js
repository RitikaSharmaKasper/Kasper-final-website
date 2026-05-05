const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    designation: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    queryType: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
