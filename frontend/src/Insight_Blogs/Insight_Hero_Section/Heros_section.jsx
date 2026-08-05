import React from "react";
import "./HeroSections.css";
import axios from "axios";
import BASE_URL from "../../Pages/Config/Config.js"; 
import {useState, useEffect} from "react";
const Heros_section = ({ latestBlog, onCategorySelect, activeCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/category/all-categories`
        );
        if (data?.success && Array.isArray(data.category)) {
          setCategories(data.category);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  if (!latestBlog) {
    return null;
  }

  const handleCategoryClick = (categoryId) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId); // null/"all" for "All Blogs"
    }
  };
  return (
    <section className="Heros_section">
      <div className="hero-top">
        <h1 className="hero-headinginside">Insights & Blogs</h1>

        <p className="hero-paragraph">
          Latest updates, strategies, and insights from tech and digital
          business.
        </p>

        {/* Category Buttons */}
        {/* <div className="hero-buttons">
          {[
            "All Blogs",
            "Accounts",
            "User Management",
            "Payroll",
            "Room Management",
            "Payments",
            "Inventory",
            "Lead",
            "SAAS",
          ].map((item, index) => (
            <button key={index} className="hero-btn">
              {item}
            </button>
          ))}
        </div> */}

           <div className="hero-buttons">
          <button
            className={`hero-btn ${!activeCategory || activeCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategoryClick("all")}
          >
            All Blogs
          </button>

          {categories.map((cat) => (
            <button
              key={cat._id}
              className={`hero-btn ${activeCategory === cat._id ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat._id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

      </div>

      {/* Featured Blog */}
      <div className="hero-featured">
        {/* Image */}
        <div>
          <img
            // height={"300px"}
            // width={"600px"}
            // className="rounded"
            className="featured-image"
            src={latestBlog?.thumbnail?.[0]}
            alt="blog"
          />
        </div>

        {/* Content */}
        <div className="featured-content">
          <span className="blog-tag">
            {latestBlog?.user?.username || "Latest"}
          </span>

          <h2 className="featured-title">{latestBlog?.title}</h2>

          <p className="featured-text">
            {latestBlog?.description
              ? latestBlog.description.replace(/<[^>]*>/g, "").slice(0, 180) +
                "..."
              : "Click to read our latest insights and strategies."}
          </p>

          <p className="blog-date">
            {latestBlog?.createdAt
              ? new Date(latestBlog.createdAt).toDateString()
              : "Loading..."}
          </p>

          {/* <button className="read-btn">Read More →</button> */}
        </div>
      </div>
    </section>
  );
};

export default Heros_section;
