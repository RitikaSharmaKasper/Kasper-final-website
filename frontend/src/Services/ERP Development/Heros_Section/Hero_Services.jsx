import React, { useRef,useEffect ,useState} from "react";
import Demopopup from "@/Demo/Demopopup";
import "./ERPHero_Services.css";
import { GoArrowDown } from "react-icons/go";
import { Helmet } from "react-helmet-async";
import heroBg from "/src/assets/images2/ERP Development.jpg.jpeg";
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

  return (
    <>
     <Helmet>
        <title>Best ERP Software Solutions by Kasper Infotech</title>
        <meta name="discription" content="Explore the top ERP software solutions offered by Kasper InfoTech. With our top-rated systems you can increase efficiency and optimize processes." />
        <meta name="keywords" content="ERP software" />
        
        <link rel="canonical" href="https://kasperinfotech.com/erp-software-development" />

        <meta property="og:title" content="Best ERP Software Solutions by Kasper Infotech" />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/erp-software-development" />
        <meta property="og:description" content="Explore the top ERP software solutions offered by Kasper InfoTech. With our top-rated systems you can increase efficiency and optimize processes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kasperinfotech.com/static/media/SmoothProcesses(ERP).e9f7980be55cc360e96007e32fc75c74.svg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="kasperinfotech.com" />
        <meta name="twitter:url" content="https://kasperinfotech.com/erp-software-development" />
        <meta name="twitter:title" content="Best ERP Software Solutions by Kasper Infotech" />
        <meta name="twitter:description" content="Transform your business with our innovative digital marketing agency. We concentrate on methods that enhance your brand and provide outcomes." /> 
        <meta name="twitter:image" content="https://kasperinfotech.com/static/media/SmoothProcesses(ERP).e9f7980be55cc360e96007e32fc75c74.svg" />
      </Helmet>
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
          
            Custom ERP Solutions for Your Business
          </h1>

          <div className="max-w-3xl mt-4">
            <p className="text-base text-white leading-relaxed tracking-wide">
              Kasper Infotech offers custom ERP solutions to manage Operations, Inventory, Finance, and Employees on one platform—boosting productivity, Smooth Workflows, and Enabling Real-Time Decision-Making.
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
       />
      </>
  );
};

export default Hero_Services;
