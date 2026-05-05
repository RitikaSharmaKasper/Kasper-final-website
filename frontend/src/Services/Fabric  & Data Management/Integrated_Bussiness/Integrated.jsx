import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
      <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Microsoft Fabric Improves Data Management</h2>
   
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
                     <h4>Better Data Access</h4>
                     <p>Businesses can access and manage data from multiple systems in one unified platform.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Insights</h4>
                     <p>Real-time analytics helps organizations identify trends and respond quickly to changes.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Accuracy</h4>
                     <p>Centralized data management reduces errors and ensures reliable information.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Smart Decisions</h4>
                     <p>Data insights help managers make better strategic decisions for business growth.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Operational Efficiency</h4>
                     <p>Automated data processes reduce manual work and improve productivity.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Secure Environment</h4>
                     <p>Strong security features protect sensitive business information.</p>
                   </div>
                 </div>
                 
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Scalable Platform</h4>
                     <p>Microsoft Fabric supports growing data needs as businesses expand.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
         </div>
  );
};

export default Integrated;