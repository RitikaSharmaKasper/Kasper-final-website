import React, { useRef,useEffect ,useState} from "react";
import Demopopup from "@/Demo/Demopopup";
import "./Hero_Services.css";
import { GoArrowDown } from "react-icons/go";
import heroBg from "/src/assets/images2/software design licensing.jpg";
const Hero_Services = () => {
   const heroRef = useRef(null);

  const scrollDown = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };


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

  return (<>
    <section 
        className="hero relative" 
        ref={heroRef}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
  <div className="hero-overlay"></div>

  <div className="hero-inner">
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-semibold text-white">
      MICROSOFT SOFTWARE LICENSING  SERVICES FOR BUSINESS EFFICIENCY 
      </h1>

      <div className="max-w-3xl mt-4">
        <p className="text-base text-white leading-relaxed tracking-wide">
       Kasper Infotech helps businesses manage Microsoft software
              licensing with the right plans, compliance, and cost optimization.
              Our services ensure proper licensing for users, devices, and
              systems, helping organizations reduce costs, stay compliant, and
              use Microsoft solutions effectively.

        </p>
      </div>

      <div className="mt-7 flex justify-center">
        <button className="btnn-outline"  onClick={() => handleOpenPopup("demo")}>
              Book a Demo
            </button>
      </div>
    </div>
  </div>

  {/* Arrow — outside hero-inner, sticks to bottom of section */}
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
       /></>
  );
};

export default Hero_Services;
