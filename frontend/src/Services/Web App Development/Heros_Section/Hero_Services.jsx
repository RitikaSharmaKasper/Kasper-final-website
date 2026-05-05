import React, { useRef,useEffect ,useState} from "react";
import Demopopup from "@/Demo/Demopopup";
import "./Hero_Services.css";
import { GoArrowDown } from "react-icons/go";
import { Helmet } from "react-helmet-async";
import heroBg from "/src/assets/images2/Web App Development.jpg.jpeg";
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
        <title>No.1 Web Application Development Service- Kasper Infotech</title>
        <meta name="discription" content="Looking for professional web application development service? Our skilled team is your secret weapon for creating robust and user-friendly web applications." />
        <meta name="keywords" content="Web Application Development" />
        
        <link rel="canonical" href="https://kasperinfotech.com/web-application-development" />

        <meta property="og:title" content="No.1 Web Application Development Service- Kasper Infotech" />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/web-application-development" />
        <meta property="og:description" content="If you are looking web application development services to increase the effectiveness and online visibility of your company. Get in touch with us right now." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kasperinfotech.com/static/media/Development.b282d3c96a6244a2a263170186e4594b.svg" />
      
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="kasperinfotech.com" />
        <meta name="twitter:url" content="https://kasperinfotech.com/web-application-development" />
        <meta name="twitter:title" content="No.1 Web Application Development Service- Kasper Infotech" />
        <meta name="twitter:description" content="If you are looking web application development services to increase the effectiveness and online visibility of your company. Get in touch with us right now." /> 
        <meta name="twitter:image" content="https://kasperinfotech.com/static/media/Development.b282d3c96a6244a2a263170186e4594b.svg" />
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
           
           PROFESSIONAL WEB DEVELOPEMENT SERVICES FOR MODERN BUSINESSES
           
           
          
          </h1>

          <div className="max-w-3xl mt-4">
            <p className="text-base text-white leading-relaxed tracking-wide">
              Kasper Infotech creates powerful and reliable websites that help businesses grow online. Our
              web development services focus on performance, security, and smooth user experience.           </p>
          </div>

          <div className="mt-7 flex justify-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium rounded cursor-pointer transition duration-300"
              style={{ width: "148px", height: "60px", fontSize: "16px" }}
            >
              Book  a Demo
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
