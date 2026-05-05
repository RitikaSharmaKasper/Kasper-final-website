import React from "react";
import "./Integrated.css";
import tick from "../../../assets/images/tick.svg";

import integrate from "../../../assets/images/integrate.jpg";

const Integrated = () => {
  return (
      <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How D365OCS™ Improves Business Operations</h2>
   
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
                     <h4>Better Visibility</h4>
                     <p>Track operations, assets, and supply chain activities in one centralized system.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Improved Compliance</h4>
                     <p>Ensure business processes follow required standards and regulations.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Efficient Operations</h4>
                     <p>Automate processes to reduce manual work and improve productivity.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Cost Control</h4>
                     <p>Monitor budgets and expenses to manage financial performance effectively.</p>
                   </div>
                 </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Strong Quality</h4>
                <p>
                  Maintain consistent product and service quality across operations.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Faster Decisions</h4>
                <p>
                 Access real-time data to make quick and informed business decisions.
                </p>
              </div>

              
            </div>

              <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Scalable Solution</h4>
                <p>
                D365OCS™ grows with your business and adapts to changing needs
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default Integrated;
