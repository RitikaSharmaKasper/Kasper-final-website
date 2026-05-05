import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
      <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How D365QCS™ Improves Quality and Compliance</h2>
   
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
                     <h4>Better Compliance</h4>
                     <p>Ensure all processes follow industry regulations and maintain required standards.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Quality</h4>
                     <p>Monitor production and control deviations to maintain consistent product quality.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Full Traceability</h4>
                     <p>Track products from raw materials to final delivery with complete visibility.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Actions</h4>
                     <p>Quickly identify issues and take corrective actions to reduce risks.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Secure Processes</h4>
                     <p>eSignature and validation ensure secure and controlled operations.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Efficient Reporting</h4>
                     <p>Generate accurate reports for audits and regulatory requirements.</p>
                   </div>
                 </div>

                  <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Risk Reduction</h4>
                     <p>Early detection of issues helps reduce operational and compliance risks.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;