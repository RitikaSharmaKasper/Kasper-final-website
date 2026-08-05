import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Pages/Config/Config.js"; // adjust to your actual path
import Inside_Blogs_hero from "./Inside_Blogs_hero/Inside_Blogs_hero";
import Heros_section from "./Insight_Hero_Section/Heros_section";

const Inside_Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/blog/all-blogs`); // confirm this matches your actual "get all blogs" endpoint
        if (data?.success && Array.isArray(data.blogs)) {
          setAllBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs =
    selectedCategory === "all"
      ? allBlogs
      : allBlogs.filter(
          (blog) =>
            blog.category === selectedCategory ||
            blog.category?._id === selectedCategory
        );

  return (
    <div>
      <Heros_section
        latestBlog={allBlogs[0]}
        activeCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <Inside_Blogs_hero blogs={filteredBlogs} />
    </div>
  );
};

export default Inside_Blogs;