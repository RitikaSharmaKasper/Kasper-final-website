import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from "../../Pages/Config/Config.js";
import "./Read_More_Blog.css";

const Read_More_Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const resolveBlogImage = (blogData) => {
    if (!blogData) return "";

    if (blogData.image?.trim()) {
      return blogData.image;
    }

    if (Array.isArray(blogData.thumbnail) && blogData.thumbnail.length > 0) {
      return blogData.thumbnail[0];
    }

    if (typeof blogData.thumbnail === "string" && blogData.thumbnail.trim()) {
      return blogData.thumbnail;
    }

    return "";
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/api/v1/blog/get-blog/${slug}`,
        );
        setBlog(data.blog);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [slug]);

  // console.log(blog);

  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
  };

  const processedContent = useMemo(() => {
    if (!blog?.description) {
      return { updatedHtml: "", headings: [] };
    }

    let headings = [];
    let count = 0;

    const updatedHtml = blog.description.replace(
      /<(h2|h3)[^>]*>(.*?)<\/\1>/gi,
      (match, tag, text) => {
        const cleanText = stripHtmlTags(text).trim();
        const id = `heading-${count}`;

        headings.push({
          id,
          text: cleanText,
          tag: tag.toLowerCase(),
        });

        count++;
        return `<${tag} id="${id}">${text}</${tag}>`;
      },
    );

    return { updatedHtml, headings };
  }, [blog]);

  const handleHeadingClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!blog) return <h2>Blog not found</h2>;

  const imageSrc = resolveBlogImage(blog);
  const introText = stripHtmlTags(blog.description).trim();

  return (
    <div className="Blog_section">
      {/* Table of Contents */}
      <div className="Blog_Table_of_content">
        <h2 className="table-heading">Table of Contents</h2>

        <div className="table_data">
          {processedContent.headings.length > 0 ? (
            processedContent.headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={
                  heading.tag === "h3"
                    ? "content-item sub-item"
                    : "content-item"
                }
                onClick={(e) => handleHeadingClick(heading.id, e)}
              >
                {heading.text}
              </a>
            ))
          ) : (
            <p>No headings found</p>
          )}
        </div>
      </div>

      {/* Blog Content */}
      <div className="Blog_Content_details">
        <div className="content-wrapper">
          {introText && (
            <p className="blog-paragraph">{introText.substring(0, 200)}</p>
          )}

          {imageSrc && (
            <div className="image_section">
              <img
                src={imageSrc}
                alt={blog.title || "Blog image"}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          <div className="blog-description">
            {processedContent.updatedHtml && (
              <div
                dangerouslySetInnerHTML={{
                  __html: processedContent.updatedHtml,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read_More_Blog;
