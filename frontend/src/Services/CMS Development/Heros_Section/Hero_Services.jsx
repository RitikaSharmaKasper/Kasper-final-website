import React, { useRef,useEffect ,useState} from "react";
import Demopopup from "@/Demo/Demopopup";
import "./Hero_Services.css";
import { GoArrowDown } from "react-icons/go";
import { Helmet } from "react-helmet-async";
import heroBg from "/src/assets/images2/CMS Development.jpg.jpeg";
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
        <title>Custom CMS Software Development Services for Your business</title>
        <meta name="discription" content="Get our expert CMS software development services to improve your online presence. Construct an effective and accessible content management system." />
        <meta name="keywords" content="CMS Software, " />
        
        <link rel="canonical" href="https://kasperinfotech.com/cms-software-development" />
        
        <meta property="og:title" content="Custom CMS Software Development Services for Your business" />
        <meta property="og:site_name" content="Kasper Infotech" />
        <meta property="og:url" content="https://kasperinfotech.com/cms-software-development" />
        <meta property="og:description" content="Get our expert CMS development services to improve your online presence. Construct an effective and accessible content management system." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kasperinfotech.com/static/media/Plugins.39d9d44d43d8ba8c257b349ad8184470.svg" />
      
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="kasperinfotech.com" />
        <meta name="twitter:url" content="https://kasperinfotech.com/cms-software-development" />
        <meta name="twitter:title" content="Custom CMS Software Development Services for Your business" />
        <meta name="twitter:description" content="Get our expert CMS development services to improve your online presence. Construct an effective and accessible content management system." /> 
        <meta name="twitter:image" content="https://kasperinfotech.com/static/media/Plugins.39d9d44d43d8ba8c257b349ad8184470.svg" />

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
            
         Custom CMS for Easy Website Management
         
          </h1>

          <div className="max-w-3xl mt-4">
            <p className="text-base text-white leading-relaxed tracking-wide">
             Kasper Infotech offers CMS development services that simplify website management. Our solutions let businesses update pages, images, and content easily without technical skills, ensuring faster updates and always up-to-date information.
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
