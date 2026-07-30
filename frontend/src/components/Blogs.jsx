import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from  "../Pages/Config/Config.js"
import Blog1 from "../assets/images2/Blog1.svg";
import Blog2 from "../assets/images2/Blog2.svg";
import Blog3 from "../assets/images2/Blog3.svg";

import Blog4 from "../assets/images2/Blog4.svg";
const Blogs = () => {
  // 1. ALL HOOKS MUST BE AT THE TOP
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null); // Define the ref here!

  const blogsPerPage = 8;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`);
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // 2. DATA LOGIC
  const reversedBlogs = [...blogs].reverse();
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const getScrollAmount = () => {
    if (!scrollRef.current) return 450;
    const card = scrollRef.current.querySelector(".blog-card");
    return card ? card.offsetWidth + 20 : 450;
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    }
  };

  // 3. CONDITIONAL RETURN AFTER HOOKS
if(loading || blogs.length === 0) {
    return (
      <div className="Blog-main-div">
        <p className="blog-heading">Insights & Blogs</p>
        <div className="slider-wrapper">
          <div className="blog-scroll-container">
            {[1, 2, 3, 4].map((i) => (
              <div className="blog-card blog-card-skeleton" key={i}>
                <div className="skeleton skeleton-image" />
                <div className="blog-content">
                  <div className="skeleton skeleton-tag" />
                  <div className="skeleton skeleton-title" />
                  <div className="skeleton skeleton-title skeleton-title-short" />
                  <div className="skeleton skeleton-meta" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Blog-main-div">
      <p className="blog-heading">Insights & Blogs</p>
      <div className="slider-wrapper">
        <button className="arrow-left" onClick={scrollLeft}>
    ❮
  </button>
        {/* 4. WRAP YOUR MAP IN A SCROLLABLE DIV WITH THE REF */}
        <div className="blog-scroll-container" ref={scrollRef}>
          {currentBlogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <Link to={`/blog/${blog.slug}`} className="blog-img-link">
              <div className="blog-img">
           <img 
  src={blog.thumbnail} 
  alt={blog.title} 
  className="blog-image"
  onError={(e) => {
    // Hide the broken image and show alt text centered
    e.target.style.display = 'flex';
    e.target.style.alignItems = 'center';
    e.target.style.justifyContent = 'center';
    e.target.style.textAlign = 'center';
    e.target.style.background = '#f5f5f5';
    e.target.style.color = '#666';
    e.target.style.fontFamily = "Sora";
    e.target.style.fontSize = '14px';
     e.target.style.padding = '16px';
    e.target.style.minHeight = '200px';
    e.target.style.width = '100%';
    e.target.style.objectFit = 'none';
    // Set the alt text as content
    e.target.innerText = e.target.alt;
    // Remove the src to prevent broken image icon
    e.target.src = '';
  }}
/>
              </div></Link>
              
              <div className="blog-content">
               {blog.user?.username && (
    <span className="blog-tag">{blog.user.username}</span>
  )}
                <p className="title-blog">{blog.title}</p>
                <div className="date-content">
                  <p className="blog-meta">
                    {new Date(blog.createdAt).toLocaleDateString()}               

                     <Link to={`/blog/${blog.slug}`} className="blog-read-more">
                    Read More
                  </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </div>
  );
};
export default Blogs;