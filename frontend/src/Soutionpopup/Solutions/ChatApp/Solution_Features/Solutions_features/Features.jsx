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
      title: "Structured Channels & Topics",
      description:
        "Organize conversations by department, project, or location. Keep your Marketing ideas separate from Technical bugs to ensure focus and clarity.",
      image: icon,
    },
    {
      title: "Message-to-Task Conversion",
      description:
        "Never let a decision get buried. Convert any chat message into a tracked task with an owner and due date with just one tap.",
      image: icon,
    },
    {
      title: "Secure File & Media Sharing",
      description: "Speed up stock entry and checkout with barcode scanning.",
      image: icon,
    },
    {
      title: "Smart Quiet Hours & Scheduling",
      description:
        "Protect your team's mental health. Schedule messages to send during business hours and set automated Do Not Disturb rules for evenings and weekends",
      image: icon,
    },
    {
      title: "Universal Search & Pinned Clip",
      description:
        "Find any detail instantly with advanced filters. Pin critical announcements or standard procedures to the top of channels for easy onboarding.",
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
                  <h4>Unified Team Alignmentl</h4>
                  <p>Connect on-field staff with office management instantly, ensuring everyone has the same "source of truth".</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Professional Boundaries</h4>
                  <p>Move away from insecure personal messengers. MUN-C Chat gives you a dedicated corporate space that you control.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Calm Communication</h4>
                  <p>Designed to reduce "notification fatigue" with smart alerts that only ping the people who actually need to know.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Enterprise-Grade Security</h4>
                  <p>Your data belongs to you. Benefit from end-to-end encryption and administrative controls over who can join or see files.</p>
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
              <p>Q1. How is this different from WhatsApp or Telegram?</p>
              <span className="faq-arrow">
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
              Unlike personal apps, MUN-C Chat is built for business. It offers structured channels, task integration, professional data ownership, and a clear separation between work and private life.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q2. Can I use it on my phone and my computer?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
               Yes, MUN-C Chat syncs seamlessly across all devices. Start a conversation on your desktop and continue it on your mobile while you're on the move.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q3. . Is it possible to search for old messages?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
               Absolutely. Our powerful search engine allows you to find messages, files, or tasks from months ago using keywords, dates, or sender names.
              </p>
              <a href="">Know More</a>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <p>Q4. Can I invite external clients or vendors?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
               Yes, you can create "Guest Access" channels, allowing you to collaborate securely with partners without giving them access to your internal company data.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q5.How do "Scheduled Messages" work?</p>
              <span className="faq-arrow ">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                If you have a brilliant idea at midnight, you can type it and schedule it to arrive in your team's inbox at 9:00 AM the next morning, respecting their time off.
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
