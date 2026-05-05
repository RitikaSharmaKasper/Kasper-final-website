import React, { useState } from "react";
import "./Footer.css";
import kasper from "../assets/images/kasper.svg";
import insta from "../assets/images/INSTA.svg";
import facebook from "../assets/images/facebook.svg";
import link from "../assets/images/linke.svg";
import twit from "../assets/images/twitter.svg";
import phone from "../assets/images/phone.png.png";

import { useNavigate } from "react-router-dom";
import ContactsPopup from "@/Contactspopup/Contactspopup";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup Visibility
  const [activeTab, setActiveTab] = useState(""); // Track if "Solutions" or "Services" was clicked
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0); // Optional: Scroll to top on navigation
    }
  };

  const handleOpenPopup = (type, title = "Get in Touch.") => {
    setActiveTab(type);
    setIsPopupOpen(true);
    setIsOpen(false);
    setTitle(title);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Heading */}
        <div className="footer-top">
          <h2 className="footer-top-text">
            We create technology that <br />
            <span>simplifies and optimizes</span> operations.
          </h2>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=918006448800&text&type=phone_number&app_absent=0"
          >
            {" "}
            <button className="footer-btn">
              <span className="footer-btn-content">
                Let’s Build Together
                <img src={phone} alt="phone" className="phone-icon" />
              </span>
            </button>
          </a>
        </div>

        {/* Main Grid */}
        <div className="footer-grid">
          {/* Useful Links */}
          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li onClick={() => handleNavigation("/")}>Home</li>
              <li onClick={() => handleNavigation("/about")}>About Us</li>
              <li onClick={() => handleNavigation("/career")}>
                Career <span className="hiring-tag">HIRING!</span>
              </li>
              <li onClick={() => handleNavigation("/insightsblogs")}>
                Insights & Blogs
              </li>
              <li onClick={() => handleOpenPopup("contact", "Get in Touch")}>
                Contact Us
              </li>
              <li  onClick={() => handleNavigation("/termsandconditions")}>Terms & Conditions</li>
              <li  onClick={() => handleNavigation("/privacypolicy")}>Privacy Policy</li>
             
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li onClick={() => handleNavigation("/solutions/hrms")}>
                HR Management System
              </li>
              <li onClick={() => handleNavigation("/solutions/lms")}>
                Lead Management System
              </li>
              <li onClick={() => handleNavigation("/solutions/ims")}>
                Inventory Management System
              </li>
              <li onClick={() => handleNavigation("/solutions/sms")}>
                School Management System <span className="soon-tag">SOON</span>
              </li>
              <li onClick={() => handleNavigation("/solutions/hms")}>
                Hotel Management System <span className="soon-tag">SOON</span>
              </li>
              <li onClick={() => handleNavigation("/solutions/chatapp")}>
                Chat App <span className="soon-tag">SOON</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li onClick={() => handleNavigation("/ERPDevelopment")}>
                ERP Development
              </li>
              <li onClick={() => handleNavigation("/CRMDevelopment")}>
                CRM Development
              </li>
              <li onClick={() => handleNavigation("/WebApp")}>
                Web App Development
              </li>
              <li onClick={() => handleNavigation("CMSDevelopment")}>
                {" "}
                CMS Development
              </li>
              <li onClick={() => handleNavigation("/MobileApp")}>
                Mobile App Development
              </li>
              <li onClick={() => handleNavigation("/DigitalMarketing")}>
                Digital Marketing
              </li>
              <li onClick={() => handleNavigation("/Microsoft")}>
                MSD 365 Implementation Services
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <img src={kasper} alt="Kasper Logo" />
          </div>

          <div className="footer-address">
            <h4>Address</h4>
            <p>
              Office Number 503, TOWER-C, The iThum Towers, Sector 62, Noida,
              Uttar Pradesh 201301
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contact Details</h4>
            <p>info@kasperinfotech.com</p>
            <p>sales@kasperinfotech.com</p>
            <p>+91 800-644-8800</p>
          </div>
        </div>
        {/* Follow Us */}
        {/* Follow Section */}
        <div className="footer-follow">
          <div className="follow-wrapper">
            <span className="follow-label">Follow Us</span>

            <div className="follow-icons">
              <a className="twitter"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/kasperInfotech3"
              >
                <img src={twit}></img>
              </a>
              <a className="instagram"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/kasperinfo/"
              >
                <img src={insta}></img>
              </a>
              <a className="linkedin"
                rel="noopener noreferrer"
                target="_blank"
                href="https://in.linkedin.com/company/kasper-infotech"
              >
                <img src={link}></img>
              </a>
              <a  className="facebook"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/kasperinfotech/"
              >
                <img src={facebook}></img>
              </a>
            </div>
            <div
              style={{
                fontSize: "10px",
                textAlign: "center",
                marginTop: "14px",
              }}
            >
              <p>
                © Copyright 2016–2026. <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
       {isPopupOpen && activeTab === "contact" && (
        <ContactsPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
          type={activeTab}
          title={title}
        />
      )}
    </footer>
    
  );
};

export default Footer;
