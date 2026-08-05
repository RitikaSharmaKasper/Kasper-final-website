import React, { useEffect, useState } from "react";
import "./Inside_blogs_hero.css";
import BASE_URL from "../../Pages/Config/Config.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Heros_section from "../Insight_Hero_Section/Heros_section";

const Inside_blogs_hero = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();
  const blogsPerPage = 8;
  const maxVisiblePages = 5;

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

  const categoryFilteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category === selectedCategory ||
            blog.category?._id === selectedCategory
        );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const reversedBlogs = [...categoryFilteredBlogs].reverse();
  const latestBlog = reversedBlogs.length > 0 ? reversedBlogs[0] : null;
  const totalPages = Math.ceil(reversedBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = start + maxVisiblePages - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  if (loading || blogs.length === 0) {
    return (
      <div>
        <Heros_section latestBlog={null} />
        <div className="all-Insightsblog-sections">
          <div
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

  return (
    <div>
      <Heros_section
        latestBlog={latestBlog}
        activeCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div className="all-Insightsblog-sections">
        <div
          style={{ }}
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

          {/* ✅ ADDED: No Blogs Found Message */}
          {currentBlogs.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                fontFamily: "Sora, sans-serif",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "#00063D",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                📝 No Blogs Found
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  fontWeight: "400",
                }}
              >
                There are no blogs available in this category yet.
                <br />
                Please check back later or explore other categories.
              </p>
            </div>
          ) : (
            <div className="Insightsblog-scroll">
              {currentBlogs.map((blog) => (
                <Link
                  to={`/blog/${blog.slug}`}
                  className="Insightsblog-card"
                  key={blog._id}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                >
                  <div className="Insightsblog-img">
                    <img 
                      src={blog.thumbnail} 
                      alt={blog.title} 
                      className="Insightsblog-image"
                      onError={(e) => {
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
                        e.target.innerText = e.target.alt;
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

                    <p className="mt-3 text-[#00063D] text-[20px] font-[600]">{blog.title}</p>

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

                      {/* ✅ CHANGED: Removed nested Link, using span with style */}
                      <span style={{ color: '#2563eb', fontWeight: '500' }}>Read More</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ✅ CHANGED: Only show pagination if there are blogs */}
          {currentBlogs.length > 0 && totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                ◀
              </button>

              {getVisiblePages().map((page) => (
                <button
                  key={page}
                  className={currentPage === page ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inside_blogs_hero;