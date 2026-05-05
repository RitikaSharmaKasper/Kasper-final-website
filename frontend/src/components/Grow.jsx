import React from "react";

import "./Grow.css";
import { useEffect,useRef,useState } from "react";
import ContactsPopup from "@/Contactspopup/Contactspopup";
const Grow = ({ service }) => {
  const cardRef = useRef(null);
 
  useEffect(() => {
    // Phones only (max 480px)
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (!isMobile) return;
 
    const card = cardRef.current;
    if (!card) return;
 
    let isAnimating = false;
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !isAnimating) {
            isAnimating = true;
 
            card.classList.add("mobile-active");
 
            setTimeout(() => {
              card.classList.remove("mobile-active");
 
              // Allow re-trigger on next scroll
              setTimeout(() => {
                isAnimating = false;
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
 
    const timer = setTimeout(() => {
      observer.observe(card);
    }, 300);
 
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
      <div ref={cardRef} className={`service-card group ${service.cardType}`}>
        <div className="content-wrapper">
          <span className="category font-semibold mb-2">
            {service.category}
          </span>
          <h3 className="title text-xl font-bold mb-4">{service.title}</h3>
          <p className="description text-sm mb-6 leading-relaxed">
            {service.desc}
          </p>
          <button className="button" onClick={() => handleOpenPopup("contact","Get in Touch")}>Contact Now</button>
        </div>

        <div className="image-container3">
          <div className="image-container-grow">
            {/* 3. Main Image Div (Image 1) */}
            <div className="front-main-div">
              <img
                src={service.img[0]}
                className="grow-img-front"
                alt="main-front"
              />
              <div className="messages-main-div">
                <div>
                  <img src={service.messages[0]} alt="" />
                </div>
                <div>
                  <img src={service.messages[1]} alt="" />
                </div>
                <div>
                  <img src={service.messages[2]} alt="" />
                </div>
                <div>
                  <img src={service.messages[3]} alt="" />
                </div>
              </div>
            </div>
            <div className="main-layers-div">
              <img
                src={service.img[1]}
                className="grow-img-main layer-left"
                alt="main-layer-1"
              />
              <img
                src={service.img[2]}
                className="grow-img-main layer-right"
                alt="main-layer-2"
              />
            </div>
          </div>
        </div>
      </div>
        <ContactsPopup isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
        title={title}/>
      
    </>
  );
};

export default Grow;
