import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
     <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Consulting Improves Project Success</h2>
   
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
                     <h4>Better Planning</h4>
                     <p>Clear project planning helps businesses set goals and execute tasks efficiently.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Cost Control</h4>
                     <p>Budget planning ensures projects stay within financial limits.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Efficiency</h4>
                     <p>Structured processes help team’s complete projects faster and with fewer errors.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Risk Reduction</h4>
                     <p>Early risk identification helps avoid delays and unexpected challenges.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Clear Visibility</h4>
                     <p>Regular reports and monitoring provide full visibility of project progress.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Strong Coordination</h4>
                     <p>Better communication improves collaboration between teams and vendors.</p>
                   </div>
                 </div>
                 

                   <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Successful Delivery</h4>
                     <p>Proper planning and execution ensure projects are completed on time and meet business
objectives.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;