import React from "react";
import "./Hero.css";
import lms_dash from "../../../assets/images2/lms_dash.svg";


import { useState,useEffect,useRef } from "react";
import ContactsPopup from "@/Contactspopup/Contactspopup";
import Demopopup from "@/Demo/Demopopup";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
      const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup Visibility
      const [activeTab, setActiveTab] = useState(""); // Track if "Solutions" or "Services" was clicked
   
      const navRef = useRef(null);
    
      // Close hamburger when clicking outside navbar
      useEffect(() => {
        const handleClickOutside = (e) => {
          if (navRef.current && !navRef.current.contains(e.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
    
      const handleOpenPopup = (type) => {
        setActiveTab(type);
        setIsPopupOpen(true);
        setIsOpen(false);
       
      };
  return (
    <>

    <section className="hero-solutions">
      <div className="hero-inner">

        {/* Tags */}
        <div className="hero-tags">
          <span>Lead Software</span>
          <span>Sales CRM</span>
          <span>Lead Tracker</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Lead Management System
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Modern businesses need agility, persistence, and clear insights. MUN-C Smart Lead Management System centralizes leads from multiple channels, automates follow-ups, and tracks the entire sales funnel in one powerful platform. Capture inquiries in real time, score high-value prospects, manage sales teams, and accelerate your conversion rates from a single dashboard.
        </p>

        <div className="hero-actions">
 <button
  className="btn-outline"
  onClick={() => handleOpenPopup("demo")}
>
  <span className="btn-content">Try Demo</span>
</button>

<button
  className="btn-primary"
  onClick={() => {
    const section = document.getElementById("contact-section");
    if (!section) { 
      console.log("contact section NOT found"); 
      return; 
    }
    console.log("contact section found:", section);
    section.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span className="btn-content">Contact Us</span>
</button>

</div>
        {/* Floating Dashboard */}
        <div className="hero-dashboard">
          <img src={lms_dash} alt="LMS Dashboard" />
        </div>

      </div>
    </section>
     <Demopopup isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
       />
     </>
  );
};

export default Hero;