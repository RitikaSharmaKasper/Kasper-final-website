import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
 <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Business Central Improves Business Management</h2>
   
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
                     <h4>Better Financial Control</h4>
                     <p>Businesses can track income, expenses, and cash flow accurately using centralized financial
management tools.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Streamlined Operations</h4>
                     <p>Integrated modules help manage different business functions smoothly in one system.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Visibility</h4>
                     <p>Real-time dashboards provide clear insights into business performance and operations.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Efficient Manufacturing</h4>
                     <p>Production planning and resource tracking improve manufacturing efficiency and reduce
delays.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Decisions</h4>
                     <p>Accurate reports help managers make informed and timely business decisions.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Increased Productivity</h4>
                     <p>Automation reduces manual work and helps teams focus on important tasks.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Business Growth</h4>
                     <p>Scalable platform supports business expansion and changing operational needs.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;