import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">Integrated Socal Media Networking  Applications for End-to-End Connectivity</h2>
   
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
                     <h4>Total Data Ownership</h4>
                     <p>Unlike public social platforms, you own every byte of data. MUN-C provides a private, branded environment where your community’s information is never sold to third-party advertisers.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Algorithmic Freedom</h4>
                     <p>Take control of how content is seen. Customize your feed's logic—prioritize chronological updates, high-engagement posts, or professional announcements based on your goals.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Professional vs. Personal Balance</h4>
                     <p>Designed for high-utility networking. Our system separates "social noise" from "valuable connections," making it perfect for corporate intranets or professional alumni networks.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Viral Growth Loops</h4>
                     <p>Built-in invite systems, easy content sharing, and "trending" tags ensure your community grows organically through user-driven engagement.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Secure Collaboration</h4>
                     <p>With enterprise-grade encryption and role-based access, you can discuss sensitive projects or private community matters with complete peace of mind.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Seamless Third-Party Integration</h4>
                     <p>Connect your social hub with your existing CRM, LMS, or HRMS. Let a "New Hire" in your ERP automatically become a "New Member" in your networking app.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Global Content Delivery (CDN)</h4>
                     <p>No matter where your users are, our optimized architecture ensures that videos load instantly and images stay crisp, even on slower connections.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;