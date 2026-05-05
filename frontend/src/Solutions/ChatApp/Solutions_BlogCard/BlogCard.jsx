import React from "react";
import { useState, useRef, useEffect } from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../Pages/Config/Config"

const BlogCard = () => {
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

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 324, 
        behavior: "smooth",
      });
    }
  };
 const scrollLeft = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({
      left: -324, // Negative value moves it to the left
      behavior: "smooth",
    });
  }
};
  // 3. CONDITIONAL RETURN AFTER HOOKS
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading blogs...</p>;
  }

  return (
    <div style={{background:"white"}}>
    <div className="Blog-main-div" style={{background:"white"}}>
      <p className="blog-heading">Latest Blogs</p>
      <div className="slider-wrapper">
        <button className="arrow-left" onClick={scrollLeft}>
    ❮
  </button>
        {/* 4. WRAP YOUR MAP IN A SCROLLABLE DIV WITH THE REF */}
        <div className="blog-scroll-container" ref={scrollRef} style={{ display: 'flex', overflowX: 'auto' }}>
          {currentBlogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <Link to={`/blog/${blog.slug}`} className="blog-img-link">
              <div className="blog-img">
                <img src={blog.thumbnail} alt={blog.title} />
              </div></Link>
              
              <div className="blog-content">
                <span className="blog-tag">{blog.user?.username}</span>
                <p className="title-blog">{blog.title}</p>
                <div className="date-content">
                  <p className="blog-meta">
                    {new Date(blog.createdAt).toLocaleDateString()} /   {"     "}                 

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
    </div></div>
  );
};
export default BlogCard;