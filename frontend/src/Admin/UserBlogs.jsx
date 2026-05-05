import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./UserBlogs.css";
import { useBlogDelete } from "../Admin/BlogContext/BlogDeleteContext"
import BASE_URL from "../Pages/Config/Config.js"
import BlogCard from "../Admin/BlogCard.jsx"

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { deletedBlogId } = useBlogDelete();

  const getUserBlogs = async () => {
    const id = localStorage.getItem("userId");

    if (!id) {
      //console.log("User ID not found. Please log in.");
      return;
    }

    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/blog/user-blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (data?.success) {
        setBlogs(data?.userBlog.blogs.reverse());
        console.log(blogs);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  useEffect(() => {
    if (deletedBlogId) {
      setBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== deletedBlogId)
      );
    }
  }, [deletedBlogId]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/api/v1/blog/delete-blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data?.success) {
      
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      }
    } catch (error) {
      //console.log("Error deleting blog:", error);
    }
  };

  return (
    <div className="userblogs-wrapper">
      <div className="title-bar" style={{textAlign: "center"}}><strong style={{fontSize: "20px", textAlign: "center"}}>My Blogs</strong></div>

      <div className="userblogs-container">
        {blogs && blogs.length > 0 ? (
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog._id}
                slug={blog.slug}
                isUser={true}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                thumbnail={blog?.thumbnail}
                username={blog?.user?.username || "unknown"}
                handleDelete={() => handleDelete(blog._id)}
                time={moment(blog.createdAt).format("ll")}
                 previewOnly={true}
              />
            ))}
          </div>
        ) : (
          <div className="no-blogs-text">
            You haven't created a blog yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
