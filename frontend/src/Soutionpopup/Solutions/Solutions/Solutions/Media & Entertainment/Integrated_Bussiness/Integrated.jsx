import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">Where Creativity Meets Connectivity.</h2>
   
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
                     <h4>Unified Creative Workflow</h4>
                     <p>Stop losing files in emails and cloud drives. Manage the entire production pipeline—from scriptwriting and casting to editing and distribution—in one synchronized environment.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Safeguard Your Intellectual Property</h4>
                     <p>Protect your most valuable assets. Our enterprise-grade security and watermarking features ensure that your content is never leaked or used without a valid license.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Data-Driven Storytelling</h4>
                     <p>Take the guesswork out of production. Use real-time audience sentiment analysis to decide which storylines resonate and which formats drive the most engagement.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Monetization Without Borders</h4>
                     <p>Scale your revenue globally. The system handles multi-currency subscriptions, pay-per-view transactions, and ad-revenue sharing across different international markets.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Seamless Talent Management</h4>
                     <p>From scheduling rehearsals to processing final payments, MUN-C treats your talent like the stars they are, ensuring every contract is honored and every artist is paid on time.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Optimized Resource Allocation</h4>
                     <p>Track your production budget in real-time. Know exactly how much is being spent on equipment, locations, and post-production to keep your projects profitable.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Instant Global Reach</h4>
                     <p>Our CDN-integrated distribution ensures your content reaches viewers in New York or New Delhi with the same lightning-fast loading speeds and crystal-clear quality.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;