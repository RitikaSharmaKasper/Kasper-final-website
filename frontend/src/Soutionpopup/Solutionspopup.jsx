import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Solutionpopup.css"
import soon from "../assets/images2/soon.png"
import solutionpopup2 from "../assets/images2/solution-popup-2.svg"
import solutionpopup1 from "../assets/images2/solution-popup-1.svg"
const Solutionspopup = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const industries = [
  { name: "Travel & Tourism", link: "/solutions/travel-tourism" },
  { name: "Healthcare & Fitness", link: "/solutions/healthcare-fitness" },
  { name: "Real Estate", link: "/solutions/real-estate" },
  { name: "Media & Entertainment", link: "/solutions/media-entertainment" },
  { name: "Social Media & Networking", link: "/solutions/social-media" },
  { name: "E-commerce", link: "/solutions/ecommerce" },
  { name: "Education & E-Learning", link: "/solutions/education" },
  { name: "Banking & Finance", link: "/solutions/banking-finance" },
  { name: "Sports & Wellness", link: "/solutions/sports-wellness" },
  { name: "IT & ITES", link: "/solutions/it-ites" },
  { name: "Business Services", link: "/solutions/business-services" }
];

  const products = [
    { id: 'ims', title: 'IMS', sub: 'Inventory Management System', desc: "Real-time inventory tracking for smarter operations. Control stock, orders, and warehouses with ease.",link:'/solutions/ims' },
    { id: 'hrms', title: 'HRMS', sub: 'Human Resources Management ', desc: 'Manage employees, attendance, payroll, and leaves digitally. Streamline HR operations with automated workflows.',link:'/solutions/hrms' },
       { id: 'lms', title: 'LMS', sub: 'Lead Management System', desc: 'Capture and manage leads from multiple sources in one place. Track follow-ups, pipelines, and conversions in real time..', soon: false,link:'/solutions/lms' },
    { id: 'sms', title: 'SMS', sub: 'School Management System', desc: 'Manage admissions, attendance, fees, and academics centrally. Give parents and staff real-time access to student updates.', soon: true,link:'/solutions/sms' },
    { id: 'hms', title: 'HMS', sub: 'Hotel Management System', desc: 'Handle reservations, front desk, billing, and housekeeping smoothly. Get real-time visibility into room status and hotel operations.', soon: true,link:'/solutions/hms' },
    { id: 'chatapp', title: 'ChatApp', sub: 'Team Communication Platform', desc: 'Real-time chat, voice, and video for seamless team collaboration. Stay connected with secure messaging and instant communication.', soon: true,link:'/solutions/chatapp' },
    
  ];

  return (
    <div className="fixed-overlay">
    
      <div className="modal-backdrop " onClick={onClose}></div>

      <div className="modal-content-box animate-in fade-in zoom-in duration-300 ">
        
       
        <div className="section-container">
         
          <div className="content-grid">
            
          
            <div  className="sp-left-column">
            
              <div className="sp-left-header">
                <h2 className="product-title m-0 p-0">Products</h2>
                <div className="overflow-hidden">
                  <p className="font-small text-[14px] font-sora text-[#00063D] whitespace-normal md:whitespace-nowrap mt-[-3]">
                    MUN-C ERP – Built by Kasper Infotech
                  </p>
                  <p className="text-slate-500 text-[12px] product-description-grey">
                    An integrated suite of business solutions for modern organizations.
                  </p>
                </div>
              </div>

           
              <div className="image-group-container">
               
                <img 
                  src={solutionpopup2} 
                  alt="Decorative Background"
                  className="img-decorative"
                />

               
                <img 
                  src={solutionpopup1} 
                  alt="MUN-C ERP Brochure"
                  className="img-brochure"
                />
              </div>
            </div>

            <div className="sp-products-grid">
  {products.map((item) => (
    <Link
      key={item.id}
      to={item.link || "#"}
      onClick={onClose}
      className="sp-product-card"
    >
      <div className="sp-product-card-header">
        <div className="sp-product-card-info">
          <h3 className="sp-product-title">
            {item.title}
            {item.soon && (
           <img 
        src={soon} 
        alt="Soon" 
        className="sp-title-icon" 
      />
            )}
          </h3>
          <span className="sp-product-sub">{item.sub}</span>
        </div>
        <svg className="sp-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="sp-product-desc">{item.desc}</p>
    </Link>
  ))}
</div>
          </div>

          <hr className="border-slate-100 my-4 md:my-10" />

       
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h2 className="text-[20px] font-bold font-sora text-[#00063D] sp-industries-title">Industries We serve</h2>
              <p className="text-slate-500 text-[12px] mt-2 sp-subtitle">
                We keep our technology stack up to date.
              </p>
            </div>
            
          
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 w-full !pt-0 -mt-2">
  {industries && industries.map((item, index) => {
    const name = typeof item === 'string' ? item : item?.name;
    if (!name) return null;
    const slug = name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');

    return (
      <Link 
        key={index} 
        to={`/solutions/${slug}`}
        onClick={() => onClose()}
        /* - !text-black: Forces text to stay black
           - !no-underline: Forces no underline even on hover
        */
        className="text-[16px] md:text-[15px] font-sora !text-black !no-underline hover:!no-underline cursor-pointer flex items-center justify-center md:justify-start gap-2 min-w-0 font-normal" 
      >
      
        
        {/* The Text */}
        <span className="truncate whitespace-nowrap">{name}</span>
      </Link>
    );
  })}
</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Solutionspopup;