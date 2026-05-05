import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import JoditEditor from "jodit-react";
import BASE_URL from "../Pages/Config/Config.js";
import { Helmet } from "react-helmet-async";
import "./AddBlog.css";

const AddBlog = () => {
  const editor = useRef(null);
  const navigate = useNavigate();
  const { slugOrId } = useParams();
  const id = localStorage.getItem("userId");
  const isEditMode = Boolean(slugOrId);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imageURL: "",
    imageFiles: [],
  });

  const [categories, setCategories] = useState([]);
  const [imageSource, setImageSource] = useState("file");
  const [isLoadingBlog, setIsLoadingBlog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [existingPreviewImage, setExistingPreviewImage] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: 400,
      placeholder: "Description of your blog.....",
      toolbarAdaptive: false,
      uploader: {
        url: `${BASE_URL}/api/v1/blog/upload-image`,
        format: 'json',
        filesFieldName: 'image',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        isHTML7: true,
        withCredentials: true,
        process: function (resp) {
          return {
            files: [resp.link],
            error: resp.success ? false : resp.message,
            msg: resp.message
          };
        },
        defaultHandlerSuccess: function (data) {
          const url = data.files[0];
          if (url.match(/\.(mp4|webm|ogg|mov)$/i)) {
            this.selection.insertHTML(`<video controls src="${url}" style="width: 100%; height: auto; max-height: 400px; display: block; margin: 10px auto;"></video>`);
          } else {
            this.selection.insertHTML(`<img src="${url}" style="width: 100%; height: auto; display: block; margin: 10px auto;" />`);
          }
        },
        error: function (e) {
          toast.error("Upload failed: " + e.message);
        }
      },
      buttons: [
        "source", "|", "bold", "italic", "underline", "strikethrough", "|",
        "ul", "ol", "|", "outdent", "indent", "|",
        "fontsize", "brush", "paragraph", "font", "|",
        "link", "image", "video", "table", "|", "align", "undo", "redo",
      ],
    }),
    []
  );

  useEffect(() => {
    const fetchAllcategories = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/category/all-categories`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (data?.success) setCategories(data?.category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchAllcategories();
  }, []);

  useEffect(() => {
    if (!isEditMode) return;
    const fetchBlogDetails = async () => {
      try {
        setIsLoadingBlog(true);
        const { data } = await axios.get(`${BASE_URL}/api/v1/blog/get-blog/${slugOrId}`);
        if (data?.blog) {
          const blog = data.blog;
          setFormData({
            title: blog.title || "",
            category: blog.category?._id || blog.category || "",
            imageURL: blog.image || "",
            imageFiles: [],
          });
          setEditorContent(blog.description || "");
          setExistingPreviewImage(blog.image || (blog.thumbnail?.[0]) || "");
          setImageSource(blog.image ? "url" : "file");
        }
      } catch (error) {
        toast.error("Failed to load blog details.");
      } finally {
        setIsLoadingBlog(false);
      }
    };
    fetchBlogDetails();
  }, [isEditMode, slugOrId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, imageFiles: [file], imageURL: "" }));
    setExistingPreviewImage(URL.createObjectURL(file));
    setImageSource("file");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !editorContent) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    try {
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("category", formData.category);
      submitData.append("description", editorContent);
      
      if (imageSource === "file" && formData.imageFiles.length > 0) {
        submitData.append("thumbnail", formData.imageFiles[0]);
      } else if (formData.imageURL) {
        submitData.append("image", formData.imageURL);
      } else if (isEditMode && existingPreviewImage) {
        submitData.append("image", existingPreviewImage);
      }

      const url = isEditMode 
        ? `${BASE_URL}/api/v1/blog/update-blog/${slugOrId}` 
        : `${BASE_URL}/api/v1/blog/create-blog`;
      
      const method = isEditMode ? "put" : "post";

      const response = await axios[method](url, submitData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}` 
        },
      });

      if (response.data?.success) {
        toast.success(isEditMode ? "Blog updated!" : "Blog created successfully!");
        setTimeout(() => navigate("/adminsidebar/my-blogs"), 500);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingBlog) return <Container className="py-5 text-center"><Spinner animation="border" /></Container>;

  return (
    <Container className="py-5">
      <Helmet><title>{isEditMode ? "Edit" : "Add"} Blog | Kasper Infotech</title></Helmet>
      <Row className="justify-content-center">
        <Col lg={9}>
          <div className="p-4 shadow-sm bg-white rounded border">
            <h2 className="mb-4 text-center">{isEditMode ? "Update Blog" : "Create Blog"}</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" value={formData.category} onChange={handleChange} required>
                  <option value="">Choose...</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>{cat.title}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <JoditEditor
                  ref={editor}
                  value={editorContent}
                  config={editorConfig}
                  onBlur={(newContent) => setEditorContent(newContent)} 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Featured Image</Form.Label>
                <div className="mb-2">
                  <Form.Check inline label="Upload File" type="radio" checked={imageSource === "file"} onChange={() => setImageSource("file")} />
                  <Form.Check inline label="Image URL" type="radio" checked={imageSource === "url"} onChange={() => setImageSource("url")} />
                </div>
                {imageSource === "file" ? (
                  <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
                ) : (
                  <Form.Control type="text" name="imageURL" placeholder="http://..." value={formData.imageURL} onChange={handleChange} />
                )}
                {existingPreviewImage && <img src={existingPreviewImage} alt="Preview" className="mt-3 rounded w-100" style={{ maxHeight: "250px", objectFit: "cover" }} />}
              </Form.Group>

              <div className="text-center mt-3 pt-2"> 
                <Button variant="primary" type="submit" size="lg" disabled={isSubmitting} className="px-2 py-2 shadow-sm" style={{ minWidth: "200px" }}>
                  {isSubmitting ? <><Spinner size="sm" className="me-2" /> Saving...</> : (isEditMode ? "Update Blog" : "Create Blog")}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBlog;