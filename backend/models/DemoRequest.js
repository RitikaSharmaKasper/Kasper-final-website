const mongoose = require("mongoose");

const demoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  designation: { type: String }, // ✅ Added properly
  product: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DemoRequest", demoRequestSchema);
