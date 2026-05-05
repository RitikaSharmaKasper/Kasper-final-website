import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
  <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">HOW WEB DEVELOPMENT HELPS BUSINESSES GROW ONLINE</h2>
   
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
                     <h4>Business Visibility</h4>
                     <p>Businesses get a clear view of financial data, operations, and performance through real-time
dashboards and reporting tools.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Process Automation</h4>
                     <p>Automate daily tasks such as financial reporting, inventory updates, and approvals to reduce
manual work.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Financial Control</h4>
                     <p>Track expenses, revenue, and budgets accurately, helping organizations maintain strong
financial management.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Supply Chain Efficiency</h4>
                     <p>Improve procurement and inventory processes to ensure smooth product movement and
supplier coordination..</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Project Monitoring</h4>
                     <p>Manage project timelines, resources, and approvals easily, helping teams’ complete projects
efficiently.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Operational Efficiency</h4>
                     <p>Integrated systems help departments collaborate better, improving overall business
productivity.</p>
                   </div>
                 </div>
                 

                  <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Scalable Platform</h4>
                     <p>Microsoft D365 F&amp;O supports growing businesses by allowing them to add modules and
features as needed.</p>
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