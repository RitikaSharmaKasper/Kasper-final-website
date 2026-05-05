import React, { useRef,useEffect ,useState} from "react";
import Demopopup from "@/Demo/Demopopup";
import "./Hero_Services.css";
import { GoArrowDown } from "react-icons/go";
import heroBg from "/src/assets/images2/CRM Software.jpg.jpeg";
import { Helmet } from "react-helmet-async";
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
    <><Helmet>
        <title>Best CRM Development Service By Kasper Infotech</title>
        <meta name="discription" content="Our company offers powerful CRM solutions that simplify customer interactions, automate sales processes, and improve overall customer satisfaction" />
        <meta name="keywords" content="CRM Development Service" />

        <link rel="canonical" href="https://kasperinfotech.com/crm-development-service" />

        <meta property="og:title" content="Best CRM Development Service By Kasper Infotech" />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/crm-development-service" />
        <meta property="og:description" Content="Kasper InfoTech offers development services in India's top CRM (Customer Relationship Management). We specialize in developing customized CRM solutions that assign businesses to simplify customer interactions, enhance productivity." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kasperinfotech.com/static/media/CRMMigration.c30b479028a90c971cf38a10328ecf98.svg" />
               
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="kasperinfotech.com" />
        <meta name="twitter:url" content="https://kasperinfotech.com/cms-development-services" />
        <meta name="twitter:title" content="Best CRM Development Service By Kasper Infotech" />
        <meta name="twitter:description" content="Our company offers powerful CRM solutions that simplify customer interactions, automate sales processes, and improve overall customer satisfaction." /> 
        <meta name="twitter:image" content="https://kasperinfotech.com/static/media/CRMMigration.c30b479028a90c971cf38a10328ecf98.svg" />
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
            Smart CRM Solutions for Better Customer Management
          </h1>

          <div className="max-w-3xl mt-4">
            <p className="text-base text-white leading-relaxed tracking-wide">
             Kasper Infotech builds CRM software that helps businesses manage Leads, Customer Communication, and Sales activities from one platform. Our solutions help teams track Opportunities, Organize customer data, and improve sales performance.
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
