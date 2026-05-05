import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">Build Better. Sell Faster. Manage Smarter.</h2>
   
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
                     <h4>100% Inventory Accuracy</h4>
                     <p>Eliminate the risk of "Double Booking." Our live inventory sync ensures that as soon as a token is received, that specific unit is locked across all sales channels instantly.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Accelerated Sales Velocity</h4>
                     <p>Equip your sales team with mobile-ready brochures, instant price quotes, and real-time availability. Closing a deal becomes a matter of minutes, not days.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Builder-Buyer Transparency</h4>
                     <p>Build trust with your customers. Provide them with a portal where they can track their payment history, download receipts, and see real-time construction photos.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Optimized Cash Flow</h4>
                     <p>Never miss a payment milestone. Automated "Demand Letters" and "Overdue Reminders" ensure your project maintains a healthy cash flow throughout the construction lifecycle.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Empowered Broker Networks</h4>
                     <p>Your channel partners are your biggest asset. Give them the tools to see what’s for sale and track their earnings, making you their preferred developer to work with.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Paperless Documentation</h4>
                     <p>Generate complex legal documents like Allotment Letters and Sale Agreements using pre-filled templates, reducing legal errors and administrative time by 90%.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Geo-Fenced Sales Tracking</h4>
                     <p>Know exactly where your field force is. Site visit tracking with GPS ensures that every lead is being attended to with professional accountability..</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;