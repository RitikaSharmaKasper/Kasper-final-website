import React from "react";
import "./Hero.css";
import dashboard from "../../../assets/images/Dashboard.png";

import { useState,useEffect,useRef } from "react";
import ContactsPopup from "@/Contactspopup/Contactspopup";
import Demopopup from "@/Demo/Demopopup";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup Visibility
    const [activeTab, setActiveTab] = useState(""); // Track if "Solutions" or "Services" was clicked
  const[title,setTitle]=useState("");
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
          <span>Inventory Software</span>
          <span>Control Stock</span>
          <span>Stock System</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Smart Inventory Management System
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Modern businesses need speed, accuracy, and control. MUN-C Smart
          Inventory Management System centralizes inventory, sales, suppliers,
          and invoicing into one powerful platform. Track stock in real time,
          automate operations, manage warehouses, and streamline billing from
          a single dashboard.
        </p>

        <div className="hero-actions">


<button
  className="btn-outline"
 onClick={() => handleOpenPopup("contact")}
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
    
    section.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span className="btn-content">Contact Us</span>
</button>

</div>
        {/* Floating Dashboard */}
        <div className="hero-dashboard">
          <img src={dashboard} alt="Inventory Dashboard" />
        </div>

      </div>
    </section>
    <Demopopup  isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
     />
     </>
  )
};

export default Hero;