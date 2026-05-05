import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BASE_URL from "../Pages/Config/Config.js"
import "./AddCategory.css"
import { Helmet } from "react-helmet-async";

const id = localStorage.getItem("userId");

const Addcategory = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ title: "" });
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingCategoryId, setDeletingCategoryId] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/category/all-categories`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data?.success && Array.isArray(data.category)) {
        setCategories([...data.category].reverse());
      } else {
        toast.error("No categories found");
        setCategories([]);
      }
    } catch {
      toast.error("Failed to fetch categories");
      setCategories([]);
    }
  };

  const handleChange = (e) => {
    // const value = e.target.value;
    // const regex = /^[A-Za-z\s]{0,50}$/;

    // if (regex.test(value)) {
    //   setInput(value); 
    // }
    setInput({ title: e.target.value });
  };

  const handleCategory = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No authentication token found. Please log in.");
      navigate("/login");
      return;
    }
    if (!input.title.trim()) {
      toast.error("Category title is required");
      return;
    }
    if (!/^[A-Za-z\s]{1,50}$/.test(input.title)) {
      toast.error("Category should use only letters and spaces, max 50 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/category/add-categories`,
        { title: input.title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success("Category added successfully");
        setInput({ title: "" });
        if (data.newcategory) {
          setCategories((prev) => [
            data.newcategory,
            ...prev.filter((cat) => cat._id !== data.newcategory._id),
          ]);
        } else {
          fetchCategories();
        }
      } else {
        toast.error("Failed to add category");
      }
    } catch (error) {
      console.log("Error Response:", error.response);

  if (error.response?.status === 409) {
    toast.error("Category already exists");
  } else {
    toast.error("Error adding category");
    console.error("Add Category Error:", error);
  }
} finally {
  setIsSubmitting(false);
}

  };

  const handleDeleteCategory = async (categoryId) => {
    const token = localStorage.getItem("token");
    if (!token || !categoryId || deletingCategoryId) return;

    try {
      setDeletingCategoryId(categoryId);
      await axios.delete(
        `${BASE_URL}/api/v1/category/delete-categories/${categoryId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCategories((prev) => prev.filter((cat) => cat._id !== categoryId));
      toast.success("Category deleted successfully");
      if (input.title && categories.find((cat) => cat._id === categoryId)?.title === input.title) {
        setInput({ title: "" });
      }
    } catch (error) {
      toast.error("Failed to delete category");
      console.error("Delete Category Error:", error);
    } finally {
      setDeletingCategoryId("");
    }
  };

  if (!id) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h4>Please login to add a category.</h4>
      </div>
    );
  }

  return (
    <>
    <Helmet
    
    
    >
        <title>Know More About Us| Kasper Infotech</title>
        <meta
          name="discription"
          content="Learn about us our expert team and comprehensive services in digital marketing and web development."
        />
        <meta name="keywords" content="About us" />

        <link rel="canonical" href="https://kasperinfotech.com/About-us" />
        <meta
          property="og:title"
          content="Know More About us | Kasper Infotech"
        />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/About-us" />
        <meta
          property="og:description"
          Content="Learn about us our expert team and comprehensive services in digital marketing and web development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kasperinfotech.com/static/media/CRMMigration.c30b479028a90c971cf38a10328ecf98.svg"
        />
      </Helmet>
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          backgroundColor: "#659ee8",
          padding: "12px",
          color: "white",
          borderRadius: "4px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Add a New Category
      </h2>

      <form onSubmit={handleCategory}>
        <label
          htmlFor="categoryTitle" className="cat-title"  
        >
          Category Title
        </label>
        <input
          id="categoryTitle"
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
          placeholder="Enter category title"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#659ee8",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "6px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.8 : 1,
            }}
          >
            {isSubmitting ? "Adding..." : "Add Category"}
          </button>
        </div>
      </form>

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "#f1f1f1",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>Available Categories</h3>
        {categories.length === 0 ? (
          <p style={{ color: "#555" }}>No categories found.</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat._id}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  flex: "0 1 calc(33% - 10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setInput({ title: cat.title })}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    flex: 1,
                    color: "inherit",
                  }}
                >
                  {cat.title}
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(cat._id)}
                  disabled={deletingCategoryId === cat._id}
                  aria-label={`Delete ${cat.title}`}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#d9534f",
                    cursor:
                      deletingCategoryId === cat._id ? "not-allowed" : "pointer",
                    fontSize: "16px",
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default Addcategory;
