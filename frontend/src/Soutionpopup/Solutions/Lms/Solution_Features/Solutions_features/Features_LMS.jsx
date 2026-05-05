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


const Features_LMS = () => {
  const featuresList = [
    {
      title: "Omnichannel Lead Capture",
      description:
        "Automatically pull leads from your website, social media, Google ads, and offline inquiries into one centralized database.",
      image: icon,
    },
    {
      title: "Automated Lead Scoring & Distribution",
      description:
        "Identify hot leads based on engagement and automatically assign them to the right sales representative for immediate action.",
      image: icon,
    },
    {
      title: "Intelligent Follow-Up Reminders",
      description: "Never miss a deal with automated SMS/email triggers and push notifications for scheduled calls or meetings..",
      image: icon,
    },
    {
      title: "Pipeline Visualization & Stages",
      description:
        "Track every prospect’s journey from New Inquiry to Closed-Won with a visual drag-and-drop sales pipeline.",
      image: icon,
    },
    {
      title: "Performance Analytics & ROI Tracking",
      description:
    "Monitor team productivity and marketing ROI with detailed reports on lead sources, conversion times, and sales targets",
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
                  <h4>Unified Sales Control</h4>
                  <p>Manage your entire sales force and customer interactions from one central command center.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Faster Response Times</h4>
                  <p>Automated distribution ensures that leads are contacted within minutes, significantly increasing conversion odds</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Zero Lead Leakage</h4>
                  <p>Robust tracking ensures that every inquiry is accounted for, categorized, and followed up on systematically.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Data-Driven Decisions</h4>
                  <p>Gain deep insights into which marketing channels are providing the best quality leads to optimize your budget.</p>
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

           Turn Every Lead into a Customer with Smart Lead Management
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
              <p>Q1. What is a Lead Management System (LMS)?</p>
              <span className="faq-arrow">
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                It is a digital tool designed to capture, track, and manage potential customers (leads) throughout the sales process until they become paying clients.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q2. Can I integrate it with my website and Facebook Ads?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
              Yes, MUN-C LMS features seamless API integrations to fetch leads instantly from your landing pages, social media forms, and third-party portals.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q3. How does lead scoring work?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                The system assigns points to leads based on their actions (like opening an email or visiting a pricing page), helping your team focus on the most interested buyers first.
              </p>
              <a href="">Know More</a>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <p>Q4. Can I track my sales team’s daily activity?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
               Absolutely. The dashboard provides a clear view of calls made, emails sent, and meetings booked by each team member to ensure high productivity.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q5.. Is it suitable for B2B and B2C businesses? </p>
              <span className="faq-arrow ">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                Yes, the flexible pipeline and custom fields allow you to tailor the lead management process to any industry, from real estate to software services.
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

export default Features_LMS;
