import React from 'react' 

import { useEffect,useRef,useState } from 'react';
import "./Design.css"
import ContactsPopup from '@/Contactspopup/Contactspopup';
const Design = ({service}) => {
    const cardRef = useRef(null);
 
  useEffect(() => {
    // Phones only (max 480px)
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

    <div  ref={cardRef} className={`service-card group ${service.cardType}`}>
            
            <div className="content-wrapper">
              <span className="category font-semibold mb-2">{service.category}</span>
              <h3 className="title text-xl font-bold mb-4">{service.title}</h3>
              <p className="description text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button className="button" onClick={() => handleOpenPopup("contact","Get in Touch")}>
                Contact Now
              </button>
            </div>

            <div className="image-container">
              
              
          
<div className='main-second-div'>
   {/* <div className="main-second-arrow">
    <img src={service.img[1]} alt="" />

  </div>
  <div className='main-second-img'>
    <img src={service.img[0]} alt="" />

  </div>
  <div className='main-second-sketch'>
    <img src={service.img[2]} alt="" />
  </div> */}
 

<div className="messages-second-div">
 <div clasName="arrow-wrapper">
   <div className="main-coloured-arrow">
      <img src={service.messages[0]} alt=""/>
   </div>
</div> 
 
<div className="main-coloured-img">
  <img src={service.messages[1]} alt="" />
</div>
<div className="main-coloured-design">
  <img src={service.messages[2]} alt="" />
</div>
<div className="messages-coloured-sketch">
  <img src={service.messages[3]} alt="" />
</div>

</div>




</div>

              
          
            </div>

          </div>
            <ContactsPopup isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        type={activeTab}
        title={title}/>
      
          
          </>
  )
}

export default Design