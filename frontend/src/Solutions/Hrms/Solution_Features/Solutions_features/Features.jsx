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
            <h2 className="why-main-heading">Why Choose MUN-C's Human Resource Management System</h2>

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
                    <h4>All-in-One HR System</h4>
                    <p>
                   Manage employees and attendance and payroll and HR tasks from one platform.
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>Real-Time Tracking</h4>
                    <p>
                      Track attendance and performance instantly with live data and reports.
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>Easy Payroll Management</h4>
                    <p>
                     Automate salary processing and reduce errors with simple payroll tools.
                    </p>
                  </div>
                </div>

                <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>User-Friendly Interface</h4>
                    <p>Simple and clean design makes it easy for teams to use daily.</p>
                  </div>
                </div>

                 <div className="why-feature">
                  <img src={tick}></img>
                  <div>
                    <h4>Accurate Reports</h4>
                    <p>Get detailed insights into employee performance and HR metrics with our comprehensive reporting tools.</p>
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
              Simplify Your Workforce and Manage Your Team with Ease
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
                  An HR Management System is a software solution that helps businesses manage employee data and attendance and payroll and recruitment and performance in one platform. It reduces manual work and improves accuracy and gives better control over all HR operations.
                </p>
                <a href="">Know More</a>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <p>Q2. Does it support remote team tracking?</p>
                <span className="faq-arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                 Yes, it supports remote team tracking by allowing employees to mark attendance and update work from anywhere. Managers can monitor activity and working hours and productivity in real time without location limits.
                </p>
                <a href="">Know More</a>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <p>Q3. Can it handle complex payroll structures?</p>
                <span className="faq-arrow">
                  {" "}
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="faq-answer">
                <p>
                  {" "}
                  Yes, the system can manage complex payroll structures including different salary components and deductions and bonuses and compliance requirements. It ensures accurate salary calculations and timely payments.
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
                  Yes, employees can access the system through a mobile-friendly platform or app. They can check attendance and apply for leave and view payslips and update their information easily.
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
                 Yes, the system includes built-in KPI and OKR tracking to simplify performance reviews and the annual appraisal process. It helps managers evaluate employee progress and set goals and improve overall productivity.
                </p>

                <a href="">Know More</a>
              </div>
            </div>

            
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
