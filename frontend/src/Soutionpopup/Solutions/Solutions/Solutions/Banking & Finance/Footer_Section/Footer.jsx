import React from "react";
import "./Footer.css";
import kasper from "../../../assets/images/kasper.svg";
import instaa from "../../../assets/images/instaa.SVG";
import facebook from "../../../assets/images/faceb.svg";
import link from "../../../assets/images/linke.svg";
import twit from "../../../assets/images/twitter.svg";
import phone from "../../../assets/images/phone.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">
          <h2 className="footer-top-text">
            We create technology that <br />
            <span>simplifies and optimizes</span> operations.
          </h2>

          <button
            className="footer-btn"
            onClick={() => {
              const section = document.getElementById("contact-section");

              if (!section) return;

              section.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
          >
            <span className="footer-btn-content">
              Let’s Build Together
              <img src={phone} alt="phone" className="phone-icon" />
            </span>
          </button>
        </div>

        {/* Grid */}
        <div className="footer-grid">

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

        {/* Bottom */}
        <div className="footer-bottom">

          <div className="footer-brand">
            <img src={kasper} alt="Kasper Logo" />
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

        {/* Follow */}
        <div className="footer-follow">
          <div className="follow-wrapper">
            <span className="follow-label">Follow Us</span>

            <div className="follow-icons">
              <div className="follow-icons">

  {/* Twitter */}
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://twitter.com/kasperInfotech3"
  >
    <img src={twit} alt="Twitter" />
  </a>

  {/* Instagram */}
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://www.instagram.com/kasperinfo/"
  >
    <img src={instaa} alt="Instagram" />
  </a>

  {/* LinkedIn */}
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://in.linkedin.com/company/kasper-infotech"
  >
    <img src={link} alt="LinkedIn" />
  </a>

  {/* Facebook */}
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://www.facebook.com/kasperinfotech/"
  >
    <img src={facebook} alt="Facebook" />
  </a>

</div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;