import React from "react";
import "./Hero.css";
import chat_dash from "../../../assets/images2/chatapp.svg";
import { Link } from "react-router-dom";

import { useState,useEffect, useRef } from "react";
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
          <span>Manage Inventory</span>
          <span>Control Stock</span>
          <span>Boost Efficiency</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Chat Application
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Modern teams need speed without the noise of personal apps. MUN-C Smart Chat App centralizes internal communication, file sharing, and project updates into one secure, high-speed platform. Separate work from personal life, organize discussions by topic, and turn messages into actionable tasks—all from a single, intuitive dashboard.
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
          <img src={chat_dash} alt="Inventory Dashboard" />
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