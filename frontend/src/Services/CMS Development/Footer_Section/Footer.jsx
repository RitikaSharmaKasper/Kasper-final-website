import React from "react";
import "./Footer.css";
import kasper from "../../../assets/images/kasper.svg";
import insta from "../../../assets/images/instaa.SVG";
import  facebook from "../../../assets/images/faceb.svg";
import link from "../../../assets/images/linke.svg";
import twit from "../../../assets/images/twitter.svg";
import phone from "../../../assets/images/phone.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Heading */}
        <div className="footer-top">
          <h2 className="footer-top-text">
            We create technology that <br />
            <span>simplifies and optimizes</span> operations.
          </h2>

       <button className="footer-btn">
  <span className="footer-btn-content">
    Let’s Build Together
    <img src={phone} alt="phone" className="phone-icon" />
  </span>
</button>
        </div>

        {/* Main Grid */}
        <div className="footer-grid">

          {/* Useful Links */}
          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Career <span className="hiring-tag">HIRING!</span></li>
              <li>Insights & Blogs</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li>HR Management System</li>
              <li>Lead Management System</li>
              <li>Inventory Management System</li>
              <li>School Management System <span className="soon-tag">SOON</span></li>
              <li>Hotel Management System <span className="soon-tag">SOON</span></li>
              <li>Chat App <span className="soon-tag">SOON</span></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>ERP Development</li>
              <li>CRM Development</li>
              <li>Web App Development</li>
              <li>CMS Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
              <li>Microsoft Dynamics 365 Implementation Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">

          <div className="footer-brand">
            <img src={kasper} alt="Kasper Logo" />
            <p>© Copyright 2016–2026. <br />All Rights Reserved.</p>
          </div>

          <div className="footer-address">
            <h4>Address</h4>
            <p>
              Office Number 503, TOWER-C, The iThum Towers,
              Sector 62, Noida, Uttar Pradesh 201301
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
      <a href="#"><img src={twit}></img></a>
      <a href="#"><img src={ insta}></img></a>
      <a href="#"><img src={link}></img></a>
      <a href="#"><img src={facebook}></img></a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;