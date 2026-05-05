import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import ThumbnailPlaceholder from "../assets/images2/thumb.jpg";
import "./AdminBlogCard.css";

const BlogCard = ({
  title,
  description,
  image,
  thumbnail,
  username,
  time,
  id,
  isUser,
  handleDelete,
  slug,
  previewOnly = false,
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${slug || id}`);
  };

  const handleView = () => {
    navigate(`/blog/${slug || id}`);
  };

  const cleanHTML = DOMPurify.sanitize(description || "", {
    FORBID_ATTR: ["style", "width", "height", "float"],
  });

  const getMainImage = () => {
    if (thumbnail && Array.isArray(thumbnail) && thumbnail.length > 0) {
      return thumbnail[0];
    }

    return image && image.trim() ? image : ThumbnailPlaceholder;
  };

  const shortDescription =
    cleanHTML.length > 150 ? `${cleanHTML.slice(0, 150)}...` : cleanHTML;

  return (
    <div className="simple-blog-card">
      <div className="blog-header">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              backgroundColor: "#f44336",
              color: "white",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {username ? username.charAt(0).toUpperCase() : ""}
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>{username}</div>
            <div style={{ fontSize: "12px", color: "gray" }}>
              {time ? new Date(time).toLocaleDateString() : ""}
            </div>
          </div>
        </div>

        {isUser && (
          <div className="actions">
            <MdEdit onClick={handleEdit} title="Edit Blog" className="icon edit" />
            <MdDelete onClick={handleDelete} title="Delete Blog" className="icon delete" />
          </div>
        )}
      </div>

      <img src={getMainImage()} alt={title} className="blog-thumbnail" />

      <div className="blogpreview-title">{title}</div>

      <div className="blog-preview-description">
        {previewOnly ? parse(shortDescription) : parse(cleanHTML)}
      </div>

      {previewOnly && (
        <div className="read-more-wrapper">
          <div className="read-more-btn" onClick={handleView} title="Read Full Blog">
            Read More
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
