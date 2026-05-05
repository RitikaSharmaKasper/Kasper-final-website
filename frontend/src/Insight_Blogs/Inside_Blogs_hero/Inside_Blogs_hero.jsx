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
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading blogs...</p>;
  }

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
                  <img src={blog.thumbnail} alt={blog.title} />
                </div>

                <div className="Insightsblog-content">
                  <span className="Insightsblog-tag">
                    {blog.user?.username}
                  </span>

                  <p className="mt-3">{blog.title}</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      // marginTop: "10px",
                      //  border:"2px solid black"
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
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inside_blogs_hero;
