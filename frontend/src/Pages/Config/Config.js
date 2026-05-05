// src/Pages/Config/config.js

// Local Development URLs (use when running backend locally)
// const BASE_URL = "http://localhost:8080";
// const BASE_URL = "http://192.168.1.14:8080"; // for testing on local network

// Production URL (deployed backend)
const BASE_URL =
    // import.meta.env.MODE === "development"
    // ? "http://localhost:8080"
    // : "https://kasperblognew.onrender.com";
    "https://kasperbackendrender-3.onrender.com";
export default BASE_URL;
