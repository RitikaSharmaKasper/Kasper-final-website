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
      title: "Employee Management",
      description:
        "Manage employee profiles, roles, departments, and documents in a structured and centralized system.",
      image: icon,
    },
    {
      title: "Attendance & Time Tracking",
      description:
        "Track daily attendance, shifts, working hours, and late entries with automated tracking.",
      image: icon,
    },
    {
      title: "Payroll Management",
      description:
        "Automate salary calculations, deductions, bonuses, and payslip generation with accuracy.",
      image: icon,
    },
    {
      title: "Leave Management",
      description:
        "Handle leave requests, approvals, and balances with a smooth and transparent workflow.",
      image: icon,
    },
    {
      title: "Reports & Analytics",
      description:
        "Get insights into employee performance, attendance trends, and payroll data through smart reports.",
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

      <div style={{ background: "white" }}>
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
                    <h4>Unified People Operations</h4>
                    <p>
                     Manage the entire employee lifecycle—from hire to retire—on one dashboard.
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>Real-Time Data Access</h4>
                    <p>
                      Get instant insights into workforce productivity and labor costs.
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>Error-Free Automation:</h4>
                    <p>
                      Eliminate manual data entry in payroll and attendance to save hours every week.
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>Scalable & Secure</h4>
                    <p>Built to grow with your business while keeping sensitive employee data encrypted..</p>
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
              Get complete visibility into your workforce,attendance,
              payroll, and HR operations with MUN-C HRMS.
            </h2>
          </div>

          <div className="why-left">
            <div className="why-image-wrapper">
              <img src={ball}></img>
            </div>
          </div>
        </div>
      </section>
      <div style={{ background: "white" }}>
        <section className="faq-container">
          <div className="faq-content">
            <div className="FAQ">
              <h3>FAQs</h3>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <p>Q1. What is an HR Management System (HRMS)?</p>
                <span className="faq-arrow">
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                  It is a software suite that automates core HR processes like payroll, attendance, recruitment, and performance management to improve organizational efficiency.
                </p>
                <a href="">Know More</a>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <p>Q2.Does it support remote team tracking?</p>
                <span className="faq-arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                 Yes, it includes geo-tagging and mobile clock-ins, making it perfect for hybrid and remote work models.
                </p>
                <a href="">Know More</a>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <p>Q3.Can it handle complex payroll structures?</p>
                <span className="faq-arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                  {" "}
                  Absolutely. It supports customized salary components, bonuses, deductions, and statutory compliance like GST, PF, and TDS.
                </p>
                <a href="">Know More</a>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <p>Q4. Is there an app for employees?</p>
                <span className="faq-arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                  Yes, the ESS (Employee Self-Service) portal allows employees to manage their own data and requests on any device.
                </p>
                <a href="">Know More</a>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <p>Q5. Can I track employee performance reviews?</p>
                <span className="faq-arrow ">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                  {" "}
                 Yes, the system includes built-in KPI and OKR tracking to simplify the annual appraisal process.
                </p>

                <a href="">Know More</a>
              </div>
            </div>

            
          </div>
        </section>
      </div>
      <div style={{ background: "white" }}>
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
