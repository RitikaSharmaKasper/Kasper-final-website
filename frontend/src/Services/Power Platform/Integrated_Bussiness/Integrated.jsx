import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Microsoft Power Platform Improves Business Productivity</h2>
   
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
                     <h4>Faster Development</h4>
                     <p>Low-code tools allow businesses to create applications quickly without complex development
processes.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Process Automation</h4>
                     <p>Automated workflows reduce repetitive tasks and improve efficiency across departments.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>- Better Data Access</h4>
                     <p>Businesses can connect and access data from different systems in one platform.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Collaboration</h4>
                     <p>Teams can share applications, workflows, and data easily to improve collaboration..</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Business Flexibility</h4>
                     <p>Organizations can build and modify applications based on changing business needs.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Increased Productivity</h4>
                     <p>Automation and digital tools help team’s complete tasks faster and more efficiently.</p>
                   </div>
                 </div>
                  <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Scalable Solutions</h4>
                     <p>Power Platform supports growing businesses by allowing them to add new features and
applications.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;