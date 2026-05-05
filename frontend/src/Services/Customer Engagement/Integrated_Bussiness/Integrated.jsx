import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Microsoft Dynamics CRM Improves Customer Management</h2>
   
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
                     <h4>Better Relationships</h4>
                     <p>Centralized customer information helps teams understand clients better and deliver more personalized experiences.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Sales Growth</h4>
                     <p>Sales teams can manage leads effectively and identify opportunities to close deals faster.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Responses</h4>
                     <p>Customer service teams can resolve issues quickly with complete visibility of customer history.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Marketing</h4>
                     <p>Marketing campaigns become more targeted with better customer data and lead insights.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Business Visibility</h4>
                     <p>Managers get clear insights into sales activities, customer engagement, and business performance.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Team Collaboration</h4>
                     <p>Sales, marketing, and service teams work together using shared customer information.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;