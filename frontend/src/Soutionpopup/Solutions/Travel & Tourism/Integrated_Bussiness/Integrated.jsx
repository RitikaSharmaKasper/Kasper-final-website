import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">Smarter automation. Safer travelers. Stronger margins.</h2>
   
             <div className="why-container">
               <div className="why-left">
                 <div className="why-image-wrapperr">
                   <img src={integrate} alt="choose" />
                 </div>
               </div>
   
               <div className="why-right">
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Zero-Touch Automation:</h4>
                     <p>Reduce manual data entry by 80% with automated booking confirmations and digital voucher generation.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Unified Sales Pipeline</h4>
                     <p>Track every lead from the first "dreaming" stage to the final "returning" stage without losing a single inquiry.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Enterprise-Grade Security</h4>
                     <p>Your client and payment data is protected with end-to-end encryption and global compliance standards (GDPR/PCI-DSS).</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Multi-Currency & Global Scaling</h4>
                     <p>Whether you are booking a trek. MUN-C handles multi-currency conversions and localized tax compliance automatically, protecting your profit margins from exchange rate fluctuations.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Dynamic Packaging & Pricing</h4>
                     <p>Create "Custom Bundles" (Flight + Hotel + Tour) with a few clicks. The system dynamically updates the total price based on real-time availability, allowing you to secure bookings faster than traditional agents.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Secure Document Vault</h4>
                     <p>Never lose a passport copy again. Our encrypted Document Vault allows travelers to upload sensitive documents directly. The system then tracks visa expiry dates and sends automated alerts for renewals.</p>
                   </div>
                 </div>
               
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;