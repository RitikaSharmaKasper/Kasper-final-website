// const dns = require('node:dns');
// dns.setServers(['1.1.1.1', '1.0.0.1', '8.8.8.8', '8.8.4.4']);

// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const colors = require('colors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const path = require('path');

// //env config
// dotenv.config();

// //mongodb connection
// connectDB();

// //rest object
// const app = express();

// //middlewares
// const corsOptions = {
//     origin: [
//         "https://mymunc.com",],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(morgan('dev'));
// app.use('/upload', express.static(path.join(__dirname, 'public', 'upload')));

// //routes
// app.use("/api/v1/user", require('./routes/userRoutes'));
// app.use("/api/v1/blog", require('./routes/blogRoutes'));
// app.use("/api/v1/category", require('./routes/categoryRoutes'));
// app.use("/api/v1/comment", require('./routes/commentRoutes'));
// app.use("/api/v1/like", require('./routes/likeRoutes'));
// app.use("/api/v1/admin", require('./routes/adminRoutes'));
// app.use("/api/demo", require("./routes/demo.js"));
// app.use("/api/contact", require("./routes/contactRoutes.js"));

// const buildPath = path.join(__dirname, "../frontend/build");
// app.use(express.static(buildPath));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(buildPath, "index.html"));
// });

// //listen
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, "0.0.0.0", () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// /////////////////////////////
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// ✅ CORS: allow localhost in dev + domain in prod
const corsOptions = {
  origin: [
    "https://mymunc.com",
    "https://www.mymunc.com",
    "https://kasperinfotech.com/",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(morgan("dev"));

app.use("/upload", express.static(path.join(__dirname, "public", "upload")));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/blog", require("./routes/blogRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/comment", require("./routes/commentRoutes"));
app.use("/api/v1/like", require("./routes/likeRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/demo", require("./routes/demo.js"));
app.use("/api/contact", require("./routes/contactRoutes.js"));

// ✅ Serve React build ONLY in production
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../frontend/build");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
} else {
  // ✅ dev root endpoint (prevents ENOENT)
  app.get("/", (req, res) => {
    res.send("API running...");
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



