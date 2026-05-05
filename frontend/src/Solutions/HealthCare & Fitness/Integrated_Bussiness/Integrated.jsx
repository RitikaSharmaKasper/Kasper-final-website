import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
  <div style={{background:"white"}}>
    <section className="why-choose" > 
           <div className="why_choose-content">
             <h2 className="why-main-heading">Precision Care. Personalized Wellness.</h2>
   
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
                     <h4>Unified Patient Journey</h4>
                     <p>Eliminate fragmented data. Track a patient from their first fitness assessment to their clinical consultations and long-term recovery, ensuring every provider has the full picture.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Clinical Accuracy via AI</h4>
                     <p>Reduce human error. Our system cross-references medical history with global clinical databases to provide doctors with "Smart Suggestions" for diagnosis and treatment plans.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>. Reduced Administrative Burnout</h4>
                     <p>Let your medical staff focus on healing. Automate the heavy lifting of billing, insurance paperwork, and inventory management for surgical supplies and medicine.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Patient Trust & Transparency</h4>
                     <p>Build lasting relationships by giving patients full access to their health data, transparent billing, and an easy way to communicate with their doctors.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>. Data Privacy & Compliance</h4>
                     <p>Rest easy knowing your facility is fully compliant with global standards like HIPAA and GDPR. All sensitive medical data is encrypted at rest and in transit.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Optimized Resource Utilization</h4>
                     <p>Maximize the ROI of your expensive equipment. Our scheduling engine ensures that MRIs, OTs, and specialized diagnostic tools are never sitting idle during peak hours.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Seamless Telehealth Integration</h4>
                     <p>Expand your reach beyond your physical walls. Offer high-quality virtual care that feels as personal as an in-person visit, complete with integrated digital record-keeping.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;