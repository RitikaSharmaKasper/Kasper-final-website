import React from "react";
import "./Build.css";

import { useEffect,useRef,useState } from "react";
import ContactsPopup from "@/Contactspopup/Contactspopup";
const Build = ({ service }) => {
   const cardRef = useRef(null);
 
  useEffect(() => {
    // ✅ Phones only — excludes tablets (480px and below)
      const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (!isMobile) return;
 
    const card = cardRef.current;
    if (!card) return;
 
    let isAnimating = false;
    let hasEnteredOnce = false; // ✅ tracks if card was already visible on load
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
 
          // ✅ First time observer fires (page load), just mark it and skip
          if (!hasEnteredOnce) {
            hasEnteredOnce = true;
            return; // skip the very first trigger — might be page load position
          }
 
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !isAnimating) {
            isAnimating = true;
 
            card.classList.add("mobile-active");
 
            setTimeout(() => {
              card.classList.remove("mobile-active");
 
              setTimeout(() => {
                isAnimating = false; // ✅ unlock for next scroll
              }, 500);
            }, 2500);
          }
        });
      },
      {
        threshold: [0, 0.5],
        rootMargin: "0px",
      }
    );
 
    // ✅ Increased delay so page is fully settled before observing
    const timer = setTimeout(() => {
      observer.observe(card);
    }, 800);
 
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
     const [isOpen, setIsOpen] = useState(false); // Mobile menu state
      const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup Visibility
      const [activeTab, setActiveTab] = useState(""); // Track if "Solutions" or "Services" was clicked
    const[title,setTitle]=useState("");
    
     
      const handleOpenPopup = (type,title = "Get in Touch.") => {
        setActiveTab(type);
        setIsPopupOpen(true);
        setIsOpen(false); 
        setTitle(title);
  
      };
  return (

    <>
      <div  ref={cardRef} className={`service-card group  ${service.cardType}`}>
        <div className="content-wrapper ">
          <span className="category font-semibold mb-2">
            {service.category}
          </span>
          <h3 className="title text-xl font-bold mb-4">{service.title}</h3>
          <p className="description text-sm mb-6 leading-relaxed">
            {service.desc}
          </p>
          <button className="button" onClick={() => handleOpenPopup("contact","Get in Touch")}>Contact Now</button>
        </div>

        <div className="image-container">
          <img
            src={service.bgImg}
            className="rounded-md bg-decor-img"
            alt="decoration"
          />

          {service.img ? (
            <div className="multi-image-wrapper">
              {service.img.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className={`main-service-img multi-img-${i + 1}`}
                  alt="main-content"
                />
              ))}
            </div>
          ) : (
            <img
              src={service.img}
              alt={service.title}
              className="main-service-img"
            />
          )}

          {/* Only render message-group if the service has messages */}
          {service.messages.length > 0 && (
            <div className="message-group">
              {service.messages.map((msg, i) => (
                <img
                  key={i}
                  src={msg}
                  className={`message-img message${i + 1}`}
                  alt={`msg${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>


          <ContactsPopup isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
        title={title}/>
      
    </>
  );
};

export default Build;
