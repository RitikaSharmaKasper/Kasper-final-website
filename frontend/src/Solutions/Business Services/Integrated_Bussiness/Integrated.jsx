import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
 <div style={{background:"white"}}>

    <section className="why-choose" >
           <div className="why_choose-content">
             <h2 className="why-main-heading">Efficiency in Expertise. Precision in Service.</h2>
   
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
                     <h4>High-Precision Resource Management</h4>
                     <p>Stop guessing who is free. Our resource heatmaps ensure that your best talent is always working on your highest-priority projects without burning out.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Elimination of Billable Leakage</h4>
                     <p>If it isn't tracked, it isn't billed. Our integrated time-tracking ensures that every meeting, consultation, and revision is accounted for and invoiced accurately.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Accelerated Contract Closures</h4>
                     <p>Don't let paperwork slow down your growth. Our integrated e-signature and template engine turn days of legal back-and-forth into minutes of automated workflow.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Absolute Financial Transparency</h4>
                     <p>Know exactly which services are your "Cash Cows" and which are draining resources. Drill down into real-time profitability reports by project, team, or client.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Seamless Client Experiences</h4>
                     <p>Professionalism is built on transparency. Provide your clients with a dedicated portal where they feel involved and informed at every stage of the service delivery.</p>
                   </div>
                 </div>

                 
              
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;