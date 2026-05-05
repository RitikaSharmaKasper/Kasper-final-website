import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
 <div style={{background:"white"}}>
    <section className="why-choose" >
           <div className="why_choose-content">
             <h2 className="why-main-heading">Secure Infrastructure for a Digital Economy.</h2>
   
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
                     <h4>Institutional-Grade Security</h4>
                     <p>Protect your capital and customer data with multi-layer encryption, biometric MFA, and hardware security module (HSM) integration, ensuring you stay ahead of cyber threats.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Radical Operational Efficiency</h4>
                     <p>Move from manual ledger entries to total automation. Reduce human error in interest calculations and transaction reconciliation by 99%, saving thousands of man-hours.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Loan Turnaround Time</h4>
                     <p>Don't let your customers wait. Our automated underwriting engine can process loan applications and provide preliminary offers in minutes instead of days.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Regulatory Readiness</h4>
                     <p>Stay audit-ready 24/7. The system automatically generates tax reports, regulatory filings, and compliance logs based on the latest central bank guidelines.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Data-Driven Risk Mitigation</h4>
                     <p>Identify non-performing assets (NPAs) before they happen. Our predictive AI alerts your recovery team to unusual behavior patterns, allowing for proactive intervention.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Regulatory Readiness</h4>
                     <p>Stay audit-ready 24/7. The system automatically generates tax reports, regulatory filings, and compliance logs based on the latest central bank guidelines.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Data-Driven Risk Mitigation</h4>
                     <p>Identify non-performing assets (NPAs) before they happen. Our predictive AI alerts your recovery team to unusual behavior patterns, allowing for proactive intervention.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;