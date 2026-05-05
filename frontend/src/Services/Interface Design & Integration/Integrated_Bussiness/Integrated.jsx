import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
<div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Integration Improves Business Operations</h2>
   
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
                     <h4>Better Connectivity</h4>
                     <p>Systems work together smoothly, allowing data to flow easily between applications.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Efficiency</h4>
                     <p>Automation and integration reduce manual work and speed up business processes.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Data Accuracy</h4>
                     <p>Real-time synchronization ensures consistent and accurate data across systems.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>User Experience</h4>
                     <p>Simple interfaces make it easier for users to manage and operate systems.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Operations</h4>
                     <p>Integrated workflows help complete tasks quickly and improve productivity.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Business Flexibility</h4>
                     <p>Businesses can add new tools and systems without disrupting existing operations.</p>
                   </div>
                 </div>
                 
                  <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Scalable Systems</h4>
                     <p>Integration solutions grow with your business and support future expansion.</p>
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