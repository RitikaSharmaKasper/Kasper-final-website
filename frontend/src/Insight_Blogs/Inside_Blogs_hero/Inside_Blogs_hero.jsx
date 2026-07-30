import React, { useEffect, useState } from "react";
import "./Inside_blogs_hero.css";
import BASE_URL from "../../Pages/Config/Config.js";
import axios from "axios";
import { Link } from "react-router-dom";
import Heros_section from "../Insight_Hero_Section/Heros_section";
const Inside_blogs_hero = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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

  // console.log(blogs);

  // Pagination
  const reversedBlogs = [...blogs].reverse();

  const latestBlog = reversedBlogs.length > 0 ? reversedBlogs[0] : null;
  // console.log(latestBlog);
  // 2. Use the reversed array for pagination calculations
  const totalPages = Math.ceil(reversedBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // 3. Slice from the reversed array
  const currentBlogs = reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
 
 if (loading || blogs.length === 0) {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Heros_section latestBlog={null} />
        <div className="all-Insightsblog-sections">
          <div
            style={{ backgroundColor: "white" }}
            className="InsightsInsightsblog-main-div"
          >
            <h1
              style={{
                marginBottom: "20px",
                fontSize: "25px",
                color: "rgba(0, 6, 61, 1)",
              }}
            >
              Latest Blogs
            </h1>

            <div className="Insightsblog-scroll">
              {/* ✅ Skeleton cards - matching your blog card structure */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div className="Insightsblog-card Insightsblog-card-skeleton" key={i}>
                  <div className="Insightsblog-img">
                    <div className="skeleton skeleton-image" />
                  </div>

                  <div className="Insightsblog-content">
                    <div className="skeleton skeleton-tag" />
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-title skeleton-title-short" />
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "10px"
                    }}>
                      <div className="skeleton skeleton-meta" />
                      <div className="skeleton skeleton-readmore" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Skeleton pagination */}
          <div className="pagination">
            <button disabled>◀</button>
            {[1, 2, 3].map((i) => (
              <button key={i} className="skeleton-pagination" disabled>
                {i}
              </button>
            ))}
            <button disabled>▶</button>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Main return with actual data
  return (
    <div style={{ backgroundColor: "white" }}>
      <Heros_section latestBlog={latestBlog} />
      <div className="all-Insightsblog-sections">
        <div
          style={{ backgroundColor: "white" }}
          className="InsightsInsightsblog-main-div"
        >
          <h1
            style={{
              marginBottom: "20px",
              fontSize: "25px",
              color: "rgba(0, 6, 61, 1)",
            }}
          >
            Latest Blogs
          </h1>

          <div className="Insightsblog-scroll">
            {currentBlogs.map((blog) => (
              <div className="Insightsblog-card" key={blog._id}>
                <div className="Insightsblog-img">
          <img 
  src={blog.thumbnail} 
  alt={blog.title} 
  className="Insightsblog-image"
  onError={(e) => {
    // Hide the broken image and show alt text centered
    e.target.style.display = 'flex';
    e.target.style.alignItems = 'center';
    e.target.style.justifyContent = 'center';
    e.target.style.textAlign = 'center';
    e.target.style.background = '#f5f5f5';
    e.target.style.color = '#666';
    e.target.style.fontFamily = 'Sora';
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
                </div>

                <div className="Insightsblog-content">
                 {blog.user?.username ? (
  <span className="Insightsblog-tag">
    {blog.user.username}
  </span>
) : null}

                  <p className="mt-3 text-[#00063D] text-[16px] font-[400]">{blog.title}</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>

                    <Link to={`/blog/${blog.slug}`}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
 
          );
  // ✅ Main return with actual data
  
};

export default Inside_blogs_hero;
