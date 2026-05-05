import React from "react";
import "./Hero.css";
import dashboard from "../../../assets/images/Dashboard.png";
import { useState,useEffect,useRef } from "react";
import ContactsPopup from "@/Contactspopup/Contactspopup";


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
    
      const handleOpenPopup = (type,title = "Get in Touch.") => {
        setActiveTab(type);
        setIsPopupOpen(true);
        setIsOpen(false);
        setTitle(title);
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
        Hotel Management System
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Modern hospitality demands speed, guest satisfaction, and flawless coordination. MUN-C Smart Hotel Management System centralizes bookings, front-desk operations, housekeeping, and billing into one powerful platform. Track room availability in real time, automate check-ins, manage restaurant POS, and enhance the guest experience from a single dashboard.
        </p>

        <div className="hero-actions">

  
<button
  className="btn-outline"
   onClick={() => handleOpenPopup("contact", "Get A Demo")}
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
          <img src={dashboard} alt="Inventory Dashboard" />
        </div>

      </div>
    </section>
     <ContactsPopup isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
        title={title}/>
        </>
  );
};

export default Hero;