import React, { useRef,useEffect ,useState} from "react";
import Demopopup from "@/Demo/Demopopup";
import "./Hero_Services_ecommerce.css";
import { GoArrowDown } from "react-icons/go";

// ✅ IMPORT IMAGE
import bgImage from "../../../assets/images/e-commerce.jpg";

const Hero_Services = () => {
  const heroRef = useRef(null);

  const scrollDown = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero relative"
      ref={heroRef}
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ FIXED
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-semibold text-white uppercase">
           E-Commerce & Retail
          </h1>

          <div className="max-w-3xl mt-4">
            <p className="text-base text-white leading-relaxed tracking-wide">
             In the digital-first economy, your storefront is global.  E-Commerce & Retail ERP centralizes your sales channels, inventory logistics, and customer data into one high-velocity platform. From AI-driven upselling to seamless last-mile delivery, empower your brand to deliver a "Prime" experience while managing your entire retail empire from a single dashboard.
            </p>
          </div>

          <div className="mt-7 flex justify-center">
            
   <button className="btnn-outline"  onClick={() => handleOpenPopup("demo")}>
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-5xl cursor-pointer animate-bounce"
        onClick={scrollDown}
      >
         <GoArrowDown />
      </div>
    </section>
     <Demopopup isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
       />
  );
};

export default Hero_Services;