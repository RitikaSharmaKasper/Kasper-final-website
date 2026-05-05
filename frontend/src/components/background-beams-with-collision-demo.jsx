import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./background-beams-with-collision-demo.css";
import { useState,useEffect,useRef,Suspense,lazy } from "react";
import google from "../assets/images2/google.png";

import Badgeimg from "../assets/images2/Badgeimg.svg";
import { ArrowDown, ChevronDown } from "lucide-react";

// 1. Lazy load the popups so they don't slow down the initial hero section load
const Solutionspopup = lazy(() => import("@/Soutionpopup/Solutionspopup"));
const Contactspopup = lazy(() => import("@/Contactspopup/Contactspopup"));
export default function BackgroundBeamsWithCollisionDemo() {
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
   
   

  const openGoogleReviews = () => {
  window.open(
    "https://maps.app.goo.gl/Fctod6ZHUeGgWGyp6",
    "_blank"
  );
};




const scrollToServices = () => {
    // We look for the section with the class 'service-section'
    const nextSection = document.querySelector(".service-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <BackgroundBeamsWithCollision>
  
{/* Parent Container to hold both Text and Image side-by-side */}
{/* Parent: flex-row with items-start to keep text at top */}
<div className="flex flex-row md:flex-row flex-col items-start justify-between w-full max-w-[1922px] mx-auto px-4 md:px-8 lg:px-20 pt-2 overflow-visible">
  
  {/* LEFT SIDE: Text Content */}
  {/* Changed w-full to w-fit so it only takes the space it needs for the single line */}
  <div className="Badge-container">
    
    {/* Badge Section */}
    <div className="badge-wrapper">
      <span className="badge-yrs">
        9+ Years
      </span>
      <span className="expertise-text">
        of expertise in delivering digital solutions
        <img src="./k.png" alt="crown" className="expertise-icon" />
      </span>
    </div>

    {/* Heading - whitespace-nowrap keeps it in one line */}
    <h1 className="Badge-title">
      Crafting Powerful Digital Experiences
    </h1>

    {/* Subtext */}
    <p className="Badge-subtitle">
      Modern web & software designing, development, and digital marketing for growing businesses.
    </p>

    {/* Actions */}
    <div className="Badge-actions">
      <button className="btn-outline Badge-buttons"    onClick={() => handleOpenPopup("solutions")}>
        Our Products
      </button>
      <button className="btn-primary Badge-buttons" onClick={() => handleOpenPopup("contact")}>
        Contact Us
      </button>
      
      <div className="google-reviews flex items-center gap-2 px-2 py-2 border border-green-100 bg-white Badge-buttons">
        <img src="./star.png" alt="G" className="w-5 h-5" />
        <span className="font-bold text-gray-800">4.3</span>
        <span onClick={openGoogleReviews}
 className="text-blue-600 cursor-pointer text-sm ">(Google reviews)</span>
         <img src={google} alt="G" className="w-5 h-5" />
      </div>
    </div>
  </div>

  {/* RIGHT SIDE: Diamond Shape Image */}
  {/* We keep this relative to handle the absolute positioning of the large diamond */}
  <div className="badge-image-container">
    <div className=" image-wrapper">
        <img 
            src={Badgeimg}
            alt="Dashboard" 
           
            className=" diamond-half-clip z-0 rounded-3xl" 
        />
    </div>
</div>
<div className="scroll-down-arrow" onClick={scrollToServices}>
 <span>< ArrowDown  size={24} strokeWidth={1} /></span>
</div>
</div>

    </BackgroundBeamsWithCollision>
    {/* {isPopupOpen && activeTab === "contact" && (
        <Contactspopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
          type={activeTab}
         
        />
      )}

      {isPopupOpen && activeTab === "solutions" && (
        <Solutionspopup 
          isOpen={true} 
          onClose={() => setIsPopupOpen(false)} 
        />
      )}  */}
      
      <Suspense fallback={null}>
        {isPopupOpen && activeTab === "contact" && (
          <Contactspopup 
            isOpen={isPopupOpen} 
            onClose={() => setIsPopupOpen(false)} 
            type={activeTab}
          />
        )}

        {isPopupOpen && activeTab === "solutions" && (
          <Solutionspopup 
            isOpen={true} 
            onClose={() => setIsPopupOpen(false)} 
          />
        )}
      </Suspense>
      
      </>
  );
}
