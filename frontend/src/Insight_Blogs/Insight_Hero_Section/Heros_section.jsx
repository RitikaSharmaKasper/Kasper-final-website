import React from "react";
import "./HeroSections.css";

const Heros_section = ({ latestBlog }) => {
  if (!latestBlog) {
    return null;
  }
  return (
    <section className="Heros_section">
      <div className="hero-top">
        <h1 className="hero-heading">Insights & Blogs</h1>

        <p className="hero-paragraph">
          Latest updates, strategies, and insights from tech and digital
          business.
        </p>

        {/* Category Buttons */}
        <div className="hero-buttons">
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
