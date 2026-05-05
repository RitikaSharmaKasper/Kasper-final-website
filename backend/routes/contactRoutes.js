// backend/routes/contactRoutes.js
const  express = require ("express");
const Contact= require ("../models/contactModel.js");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, company, designation, email, phone, queryType } = req.body;
    console.log(req.body)

    if (!name || !email || !queryType) {
      return res.status(400).json({ success: false, message: "Name, Email, and Product are required" });
    }

    const newContact = new Contact({ name, company, designation, email, phone, queryType });
    await newContact.save();

    res.status(201).json({ success: true, message: "Thank you! Our team will connect with you soon." });
  } catch (err) {
    console.error("Error in /api/contact POST:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET /api/contact
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, contacts });
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, company, designation, email, phone, queryType } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { name, company, designation, email, phone, queryType },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.status(200).json({ success: true, message: "Contact updated successfully", contact: updatedContact });
  } catch (err) {
    console.error("Error updating contact:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE: DELETE /api/contact/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.status(200).json({ success: true, message: "Contact deleted successfully" });
  } catch (err) {
    console.error("Error deleting contact:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


module.exports = router;