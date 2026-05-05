import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import BASE_URL from "../../Pages/Config/Config.js";
import "./Read_MoreHero.css";

const Read_More_Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const resolveBlogImage = (blogData) => {
    if (!blogData) return "https://via.placeholder.com/800x600?text=Blog+Image";

    if (blogData.image?.trim()) {
      return blogData.image;
    }

    if (Array.isArray(blogData.thumbnail) && blogData.thumbnail.length > 0) {
      return blogData.thumbnail[0];
    }

    if (typeof blogData.thumbnail === "string" && blogData.thumbnail.trim()) {
      return blogData.thumbnail;
    }

    return "https://via.placeholder.com/800x600?text=Blog+Image";
  };

  // Helper function to strip HTML tags
  const stripHtmlTags = (html) => {
    if (!html) return "";
    // Remove HTML tags but keep the text content
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/blog/get-blog/${slug}`,
        );

        if (data?.blog) {
          setBlog(data.blog);
          setError(null);
        } else {
          setError("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getBlog();
    }
  }, [slug]);

  // Loading State
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading amazing content...</p>
      </div>
    );
  }

  // Error State
  if (error || !blog) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error || "Blog post not found"}</p>
        <Link to="/insightsblogs" className="back-btn">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  // Clean description by removing HTML tags
  const cleanDescription = stripHtmlTags(blog.description);

  return (
    <>
      {/* Hero Section */}
      <section className="Heros_section">
        <div className="hero-top">
          <h1 className="hero-heading">{blog.title}</h1>

          <p className="hero-paragraph">
            {cleanDescription.substring(0, 200)}
            {cleanDescription.length > 200 ? "..." : ""}
          </p>

          <div className="meta-info">
            <div className="author-info">
              <div className="author-avatar">
                {blog.user?.username?.charAt(0).toUpperCase()}
              </div>
              <div className="author-details">
                <span className="author-label">Written by</span>
                <span className="author-name">
                  {blog.user?.username || "Anonymous"}
                </span>
              </div>
            </div>

            <div className="date-info">
              <svg
                className="calendar-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="featured-blog">
          <div className="featured-image">
            <img
              src={resolveBlogImage(blog)}
              alt={blog.title}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x600?text=Blog+Image";
                  
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Read_More_Blog;
