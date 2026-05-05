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
      title: "Booking & Reservation Engine",
      description:
        "Manage walk-ins, online travel agents (OTAs), and website bookings through a unified, real-time calendar.",
      image: icon,
    },
    {
      title: "Front Desk & Quick Check-In",
      description:
        "Streamline the guest arrival process with digital registration, room assignment, and automated key-card integration.",
      image: icon,
    },
    {
      title: "Housekeeping & Maintenance Tracking",
      description: "Assign cleaning tasks instantly and monitor room status (Clean, Dirty, Under Repair) to ensure rooms are ready for guests.",
      image: icon,
    },
    {
      title: "Integrated Restaurant POS",
      description:
        "Link dining bills directly to guest rooms for a one-bill checkout experience, managing menus and inventory simultaneously.",
      image: icon,
    },
    {
      title: "Automated Billing & Invoicing",
      description:
        "Generate professional, tax-compliant invoices including room service, laundry, and extra amenities in seconds.",
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
                  <h4>Unified Property Control</h4>
                  <p>Manage multiple properties or room types from one central command center.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Boost Occupancy Rates:</h4>
                  <p>Use data-driven insights to adjust pricing and maximize room sales during peak seasons.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Enhanced Guest Journey</h4>
                  <p>From pre-arrival notifications to instant checkout, keep your guests happy and returning.</p>
                </div>
              </div>

              <div className="why-feature">
                <img src={tick}></img>
                <div>
                  <h4>Real-Time Analytics</h4>
                  <p>Monitor RevPAR (Revenue Per Available Room) and daily ADR (Average Daily Rate) with visual reports.</p>
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
              <p>Q1. What is a Hotel Management System (HMS)?</p>
              <span className="faq-arrow">
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
              It is an all-in-one software designed to automate hotel operations, including reservations, front office tasks, housekeeping, and billing.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Can it sync with online booking sites like Booking.com or Expedia?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                Yes, MUN-C HMS integrates with channel managers to keep your inventory updated across all booking platforms instantly.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q3. Does it handle laundry and room service orders?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
              Absolutely. All additional services can be logged against the guest's room number and added to their final folio automatically.
              </p>
              <a href="">Know More</a>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <p>Q4. Can I manage multiple room categories (Deluxe, Suite, etc.)?</p>
              <span className="faq-arrow">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
              Yes, the system allows you to define unlimited room types, set different seasonal rates, and manage specific amenities for each.
              </p>
              <a href="">Know More</a>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Q5. Is the system secure for guest data?</p>
              <span className="faq-arrow ">
                {" "}
                <IoIosArrowDown />
              </span>
            </div>

            <div className="faq-answer">
              <p>
                {" "}
                Yes, we prioritize data privacy with encrypted storage for guest profiles and secure payment gateway integrations.
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
<BlogCard/>
    </>
  );
};

export default Features;
