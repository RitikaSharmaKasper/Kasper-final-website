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
          <h2 className="why-main-heading">Why Choose MUN-C's Inventory Management System</h2>

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
                  <h4>Complete Inventory Control</h4>
                  <p>Manage stock levels and products and categories in one system to avoid confusion and stock issues.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Real-Time Stock Tracking</h4>
                  <p>Track inventory movement instantly and always know what is available and what needs restocking.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Easy Billing and POS</h4>
                  <p>Create invoices and manage billing quickly with a simple POS system for faster sales.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Smart Reports and Insights</h4>
                  <p>Get clear reports on sales and stock and performance to make better business decisions.</p>
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
               An Inventory Management System is a software that helps businesses manage stock and products and orders in one place. It tracks inventory levels and movements and helps reduce stock errors and improves overall business efficiency.
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
               Yes, it can manage multiple warehouses from a single system. You can track stock across different locations and transfer items between warehouses easily while maintaining accurate records.
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
               Yes, the system supports barcode scanning to speed up billing and stock updates. It helps reduce manual errors and makes inventory handling faster and more accurate.
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
                Yes, you can create invoices and generate GST reports directly from the system. It helps maintain compliance and simplifies billing and tax management.
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
               Yes, the system is designed for businesses of all sizes. Small businesses can easily manage their stock and sales without needing complex setups or technical knowledge.
              </p>

              <a href="">Know More</a>
            </div>
          </div>

         
        </div>
      </section>
      </div>

      <BlogCard/>
    
    </>
  );
};

export default Features;
