import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">The Architecture of Digital Excellencey</h2>
   
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
                     <h4>. Shift from Execution to Ownership</h4>
                     <p>Empower your teams to make data-backed decisions. MUN-C moves your operations from simple "ticket-solving" to proactive "system-ownership," increasing the strategic value you provide to clients.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Built-In Security by Design</h4>
                     <p>Stop treating security as an add-on. Our "Security-First" architecture ensures that every project, file, and user access point is protected by Zero-Trust protocols from day one..</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Hyper-Productivity through GenAI</h4>
                     <p>Reduce manual overhead by embedding AI into your daily workflows. Automate the generation of code, test cases, and project reports, allowing your senior talent to focus on high-value innovation.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>. Seamless Global Delivery</h4>
                     <p>Bridge the gap between time zones. Our unified platform ensures that a handover from a night shift in Noida to a morning shift in New York is seamless, with all context and documentation preserved.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Financial Discipline & Visibility</h4>
                     <p>Eliminate "Invisible Work." Capture every billable minute and identify inefficient spending in cloud resources or hardware, ensuring your margins stay healthy even as you scale.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Agile Talent Scaling</h4>
                     <p>Quickly adapt to new project requirements. Our talent engine helps you identify existing team members with the right niche skills (like AI or Cybersecurity) and deploy them where they are needed most.</p>
                   </div>
                 </div>
                
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;