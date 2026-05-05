const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const DemoRequest = require("../models/DemoRequest");

// Demo credentials per product
const demoCredentials = {
  HRMS: [
    { role: "Admin", username: "admin@munc.com", password: "Admin@1234" },
    { role: "HR", username: "hr@munc.com", password: "Hr@1234" },
    { role: "Manager", username: "manager@munc.com", password: "Manager@1234" },
    { role: "Employee", username: "employee@munc.com", password: "Emp@1234" },
  ],
  LMS: [
    { role: "Admin", username: "admin@munc.com", password: "admin" },
  ],
  IMS: [
    { role: "Admin", username: "admin@munc.com", password: "Admin@1234" },
    { role: "Manager", username: "manager@munc.com", password: "Manager@1234" },
    { role: "Seller", username: "seller@munc.com", password: "Seller@1234" },

  ],
  
};

// Domain per product
const productDomains = {
  HRMS: "https://hrms.mymunc.com",
  LMS: "https://munc.app",
  IMS: "https://ims.mymunc.com",
};

// -------------------- CREATE Demo Request --------------------
router.post("/", async (req, res) => {
  try {
  const { name, companyName, email, phone, designation, product } = req.body;
    // Validation
    if (!name || !companyName || !email || !phone || !product) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingReq = await DemoRequest.findOne({
      $or: [
        { email: { $regex: new RegExp(`^${email}$`, "i") } },
        { phone }
      ]
    });

    if (existingReq) {
      return res.json({ success: true, duplicate: true, message: "Please take our services", product });
    }

    // Save request in DB
    const newRequest = new DemoRequest({
      name,
      companyName,
      email,
      phone,
      designation,
      product,
    });

    await newRequest.save();

    // Validate product
    const credentials = demoCredentials[product];
    const domain = productDomains[product];

    if (!credentials || !domain) {
      return res.status(400).json({ error: "Invalid product selected" });
    }

    // Build email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:#007AFF;">Hello,  ${name}</h2>
        <p>Thank you for requesting a demo of <strong>${product}</strong>!</p>
       
        <p>Below are your login credentials for different roles:</p>
        <table style="width:100%; border-collapse:collapse; margin-top:10px;">
          <thead>
            <tr>
              <th style="border:1px solid #ddd; padding:8px; background:#f3f3f3;">Role</th>
              <th style="border:1px solid #ddd; padding:8px; background:#f3f3f3;">Username</th>
              <th style="border:1px solid #ddd; padding:8px; background:#f3f3f3;">Password</th>
            </tr>
          </thead>
          <tbody>
            ${credentials
              .map(
                (r) => `
              <tr>
                <td style="border:1px solid #ddd; padding:8px;">${r.role}</td>
                <td style="border:1px solid #ddd; padding:8px;">${r.username}</td>
                <td style="border:1px solid #ddd; padding:8px;">${r.password}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
        <p style="margin-top:20px; text-align:center;">
  Click below to access your demo:
  <br /><br />
  <a href="${domain}" 
     style="color:#fff; background:#007AFF; padding:12px 28px; 
            text-decoration:none; border-radius:6px; 
            display:inline-block; font-weight:600;">
    Go to ${product}
  </a>
</p>

<!-- Footer Section -->
<div style="margin-top:50px; padding:10px; background:#f9f9fb; border-top:1px solid #e0e0e0; text-align:center; border-radius:8px;">
  <img 
    src="cid:logoImage"
    alt="Munc Logo" 
    style="width:200px; height:auto; margin-bottom:5px;"
  />
  <p style="margin:0; font-size:15px; color:#333; font-weight:500;">The Munc Team</p>
  <a href="https://mymunc.com" 
     style="color:#007AFF; text-decoration:none; font-size:14px;">
    www.mymunc.com
  </a>
  <p style="margin-top:8px; font-size:12px; color:#888;">
    © ${new Date().getFullYear()} MyMunc. All rights reserved.
  </p>
</div>

      </div>
    `;

    // Send email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });


    await transporter.sendMail({
  from: `"MyMunc Support" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: `Your Demo Credentials for ${product}`,
  html: htmlContent,
  attachments: [
    {
      filename: "logo.png",
      path: __dirname + "/../assest/logo/logotm.png", // ✅ path to logo file
      cid: "logoImage", // ✅ must match src="cid:logoImage" above
    },
  ],
});

    res.json({
      success: true,
      message: "Demo credentials sent & saved successfully!",
    });
  } catch (error) {
    console.error("❌ Error saving demo request:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message, stack: error.stack });
  }
});

// -------------------- GET All Demo Requests --------------------
router.get("/", async (req, res) => {
  try {
    const requests = await DemoRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch demo requests" });
  }
});

// -------------------- UPDATE Demo Request --------------------
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedRequest = await DemoRequest.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedRequest) {
      return res.status(404).json({ error: "Demo request not found" });
    }

    res.json({ success: true, message: "Demo request updated successfully", data: updatedRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update demo request" });
  }
});

// -------------------- DELETE Demo Request --------------------
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRequest = await DemoRequest.findByIdAndDelete(id);

    if (!deletedRequest) {
      return res.status(404).json({ error: "Demo request not found" });
    }

    res.json({ success: true, message: "Demo request deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete demo request" });
  }
});

module.exports = router;