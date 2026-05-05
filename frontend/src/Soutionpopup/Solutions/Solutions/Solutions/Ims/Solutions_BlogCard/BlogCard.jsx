import React from "react";
import "./BlogCard.css";

const BlogCard = ({ image, title, date, author, tag }) => {
  return (
    <div className="blog-card">
      
      <div className="blog-image">
        <img src={image} alt="blog" />
      </div>

      <div className="blog-content">
        <span className="blog-tag">{tag}</span>

        <h4>{title}</h4>

        <p className="blog-meta">
          {date} <span>/ {author}</span>
        </p>
      </div>

    </div>
  );
};

export default BlogCard;