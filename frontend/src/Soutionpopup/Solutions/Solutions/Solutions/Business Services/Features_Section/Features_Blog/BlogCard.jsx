import React from "react";
import "./BlogCard.css";
import card11 from "../../../../assets/images/card11.svg";
import Card2 from "../../.././../assets/images/Card2.svg";
import Card3 from "../../.././../assets/images/Card3.svg";
import Card4 from "../../.././../assets/images/Card4.svg";
import { useState, useRef, useEffect } from "react";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const dummyBlogs = [
      {
        id: 1,
        image: card11,
        tag: "IMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Adit",
      },
      {
        id: 2,
        image: Card2,
        tag: "IMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
      {
        id: 3,
        image: Card3,
        tag: "IMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
      {
        id: 4,
        image: Card4,
        tag: "IMS",
        title: "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
    ];
    setBlogs(dummyBlogs);
  }, []);

  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 324,
      behavior: "smooth",
    });
  };

  return (
    <div className="ServicesBlog-main-div">
      <p className="ServicesBlog-heading">Latest Blogs</p>
      <div className="ServicesBlog-slider-wrapper">
        <div className="ServicesBlog-scroll" ref={scrollRef}>
          {blogs.map((blogs) => (
            <div className="ServicesBlog-card" key={blogs.id}>
              <div className="ServicesBlog-img">
                <img src={blogs.image} alt="" />
              </div>
              <div className="ServicesBlog-content">
                <span className="ServicesBlog-tag">{blogs.tag}</span>
                <p className="ServicesBlog-title">{blogs.title}</p>
                <div className="ServicesBlog-date-content">
                  <p className="ServicesBlog-meta">
                    {blogs.date} /{" "}
                    <span className="ServicesBlog-author">{blogs.author}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;