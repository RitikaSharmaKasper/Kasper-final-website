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
      title: "End-to-End Admission & Enrollment",
      description:
        "Simplify the student lifecycle from online inquiry and document verification to final enrollment and ID card generation.",
      image: icon,
    },
    {
      title: "Smart Attendance & GPS Tracking",
      description:
        "Automate daily attendance for students and staff with biometric integration and track school buses in real-time for student safety.",
      image: icon,
    },
    {
      title: "Examination & Digital Report Cards",
      description: "Manage internal assessments, generate automated GPA/grade calculations, and publish digital report cards instantly to parents.",
      image: icon,
    },
    {
      title: "Fee Management & Online Payments",
      description:
        "Set up custom fee structures, automate late-fee alerts, and provide parents with a secure portal for online payments and digital receipts",
      image: icon,
    },
    {
      title: "Parent-Teacher Communication Portal",
      description:
        "Foster collaboration with instant SMS/email alerts for homework, events, emergencies, and monthly progress updates.",
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
                  <h4>Unified Academic Control</h4>
                  <p>Manage classes, subjects, and timetables for the entire academic year from one dashboard.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Enhanced Student Safety</h4>
                  <p>Real-time tracking of transport and automated entry/exit logs keep parents informed and students safe.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Paperless Administration</h4>
                  <p>Reduce manual paperwork by 90% with digital records for library, laboratory, and staff management.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Real-Time Academic Insights:</h4>
                  <p>Use visual analytics to identify learning gaps and track the overall performance of each grade level.</p>
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
              <p>Q1. What is a School Management System (SMS)?</p>
              <span className="faq-arrow">
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                It is a comprehensive digital platform designed to automate all academic and administrative tasks, from student records to fee collection
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q2.Can parents track their child's daily progress?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                Yes, the dedicated Parent Portal allows parents to view attendance, homework, grades, and fee status in real-time from any device.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q3. Does it support online exams and assignments?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
             Absolutely. The system includes modules for uploading study materials, setting online quizzes, and grading assignments digitally.
              </p>
              <a href="">Know More</a>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <p>Q4. Can I manage staff payroll and leave through this?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
              Yes, MUN-C SMS includes a complete HR and Payroll module specifically designed for the unique requirements of educational staff.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q5. Is the data of our students and staff secure?</p>
              <span className="faq-arrow ">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                Security is our priority. We use high-level encryption and role-based access control to ensure only authorized personnel can view sensitive data.
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
