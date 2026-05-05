import React from "react";
import "./Features.css";



import iMAGE from "../../../../assets/images/iMAGE.svg";


import ball from "../../../../assets/images/ball.svg";




import img from "../../../../assets/images/img.svg";

import Lottie from "lottie-react";

import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

import card11 from "../../../../assets/images/card11.svg";

import card2 from "../../../../assets/images/Card2.svg";

import card3 from "../../../../assets/images/Card3.svg";

import card4 from "../../../../assets/images/Card4.svg";

import BlogCard from "../../Solutions_BlogCard/BlogCard";

import { HiRefresh } from "react-icons/hi";

import tick from "../../../../assets/images/tick.svg";

import icon from "../../../../assets/images/FEATURES_ICON.svg";

import FeatureCard from "./FeatureCard";

import { IoIosArrowDown } from "react-icons/io";

import flag from "../../../../assets/images/flag.svg";


const Features = () => {
  const featuresList = [
    {
      title: "Real-Time Stock Tracking",
      description:
        "Monitor stock levels, incoming shipments, and outgoing sales instantly.",
      image: icon,
    },
    {
      title: "Purchase & Sales Management",
      description:
        "Simplify vendor and customer transactions with integrated sales and purchase modules.",
      image: icon,
    },
    {
      title: "Barcode & Scanner Support",
      description: "Speed up stock entry and checkout with barcode scanning.",
      image: icon,
    },
    {
      title: "Smart Reports & Analytics",
      description:
        "Understand your business better through visual dashboards and performance analytics.",
      image: icon,
    },
    {
      title: "GST & Invoice Management",
      description:
        "Generate tax-ready invoices in seconds with built-in GST compliance.",
      image: icon,
    },
  ];

  return (
    <>
      <section className="features-section" id="demo">
        <div className="features_content">
          <h2 className="features-heading">Key Features</h2>

          <div className="features-wrapper">
            {featuresList.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>


<div style={{background:"white"}}>
      {/* ================= WHY CHOOSE ================= */}
      <section className="why-choose">

        <div className="why_choose-content">
          <h2 className="why-main-heading">Why Choose MUN-C IMS</h2>

          <div className="why-container">
            <div className="why-left">
              <div className="why-image-wrapperr">
                <img src={iMAGE} alt="choose" />
              </div>
            </div>

            <div className="why-right">
              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Unified Control</h4>
                  <p>Manage purchases, sales, and stock from one dashboard.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Real Time Updates</h4>
                  <p>Always know what is in stock with no surprises.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Built In Automation</h4>
                  <p>From billing to reporting, everything runs smoothly.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>GST Compliant Invoicing</h4>
                  <p>Stay tax ready and audit safe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
     {/* ================= VISIBILITY ================= */}
      <section className="visibility">
        <div className="visibility-container">
          <div className="visibility-text">
            <h2>
             Our IMS gives you real-time visibility 
              <br />into Stock, Sales, and Purchases.
            </h2>
          </div>

          <div className="why-left">
            <div className="why-image-wrapper">

              <img src={ball}>
              </img>
             
            </div>
          </div>
        </div>
      </section>
<div style={{background:"white"}}>
      <section className="faq-container">
        <div className="faq-content">
          <div className="FAQ">
            <h3>FAQs</h3>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q1. What is an Inventory Management System?</p>
              <span className="faq-arrow">
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                Inventory Management System helps businesses track stock, manage
                purchases & sales, handle warehouses, and generate reports in
                real time.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q2. Can it manage multiple warehouses?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                Yes, it supports multi-location and multi-warehouse inventory
                tracking
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q3. Does it support barcode scanning?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                Yes, barcode and scanner integration make stock entry and biling
                much faster.
              </p>
              <a href="">Know More</a>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <p>Q4. Can I generate invoices and GST reports?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                Yes, the system creates GST-compliant invoices and financial
                reports.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q5. Is it suitable for small businesses?</p>
              <span className="faq-arrow ">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                Yes, it is built for retailers, wholesalers, and SMEs of all
                sizes.
              </p>

              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q6. will I get alerts for low stocks?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                Yes, the syste sends automatic notification for low or
                out-of-stock-items.{" "}
              </p>

              <a href="">Know More</a>
            </div>
          </div>
        </div>
      </section>
      </div>
<div style={{background:"white"}}>


      <section className="blogs">
        <div className="blog_content">
          <h3 className="blogs-title">Latest Blogs</h3>

          <div className="blogs-grid">
            <BlogCard
              image={card11}
              tag="IMS"
              title="Building Scalable Business Solutions Through Mobile App Development"
              date="Feb 9, 2025"
              author="Aditi Singh"
            />

            <BlogCard
              image={card2}
              tag="IMS"
              title="How Smart Inventory Improves Business Growth"
              date="Feb 10, 2025"
              author="Rahul Sharma"
            />

            <BlogCard
              image={card3}
              tag="IMS"
              title="Why Every Retailer Needs Real-Time Stock Tracking"
              date="Feb 12, 2025"
              author="Neha Verma"
            />

            <BlogCard
              image={card4}
              tag="IMS"
              title="Future of GST-Based Billing Systems"
              date="Feb 14, 2025"
              author="Amit Kapoor"
            />
          </div>
        </div>
      </section>
     </div>
    </>
  );
};

export default Features;
