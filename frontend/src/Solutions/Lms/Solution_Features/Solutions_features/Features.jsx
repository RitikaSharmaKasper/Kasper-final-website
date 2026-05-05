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
          <h2 className="why-main-heading">Why Choose MUN-C's Lead Management System</h2>

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
                  <h4>Easy Course Management</h4>
                  <p>Create and manage courses and lessons and content in one place to make learning simple and organized.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>User-Friendly Platform</h4>
                  <p>Simple interface helps students and trainers use the system easily without technical knowledge.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Track Learning Progress</h4>
                  <p>Monitor student progress and performance in real time to improve learning outcomes.</p>
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
             Turn Every Lead into a Customer with Smart Lead Management.
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
                A Lead Management System is a software that helps businesses capture and organize and track leads from different sources in one place. It helps sales teams manage inquiries and follow-ups and conversions efficiently to improve sales performance.
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
              Yes, the system can be integrated with your website and Facebook Ads to automatically capture leads. This ensures that every inquiry is stored in the system instantly so your team can respond faster and never miss an opportunity.
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
                Lead scoring assigns values to leads based on their behavior and interest level such as website visits and responses and interactions. This helps sales teams prioritize high-quality leads and focus on those most likely to convert.
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
               Yes, you can track daily activities like calls and meetings and follow-ups. This helps managers monitor team performance and ensure that all leads are being handled properly.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q5. Is it suitable for B2B and B2C businesses? </p>
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

          {/*  */}
        </div>
      </section>
      </div>
 <div style={{background:"white"}}>
      <BlogCard/>
     </div>
    </>
  );
};

export default Features;
