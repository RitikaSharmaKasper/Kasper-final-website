import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Box, Typography, Paper, Grid, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBlogDelete } from "../Admin/BlogContext/BlogDeleteContext.jsx"
import toast from "react-hot-toast";
import BASE_URL from "../Pages/Config/Config.js"
import BlogCard from "../Admin/BlogCard.jsx"
import "./AdminBlogs.css" 
const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const { deletedBlogId, deleteBlog } = useBlogDelete();

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blog`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (data?.success) {
        setBlogs(data?.blogs.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
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
      const { data } = await axios.delete(`${BASE_URL}/api/v1/blog/delete-blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data?.success) {
        deleteBlog(id); // Update the context with the deleted blog ID
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        toast.success("Blog deleted successfully");
      }
    } catch (error) {
      console.log("Error deleting blog:", error);
      toast.error("Failed to delete blog. Please try again.");
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            All Blogs
          </Typography>

          <div className="blogs-wrapper">
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog?._id}
                  id={blog?._id}
                  isUser={localStorage.getItem("userId") === blog?.user?._id}
                  title={blog?.title}
                  description={blog?.description}
                  image={blog?.image}
                  thumbnail={blog?.thumbnail}
                  slug={blog?.slug || blog?._id}
                  username={blog?.user?.username}
                  time={moment(blog?.createdAt).format("ll")}
                  handleDelete={() => handleDelete(blog._id || blog.slug)}
                  previewOnly={true}
                />
              ))}
            </div>
          </div>

        </Box>
      </Box>
    </div>
  );
};

export default Blogs;
