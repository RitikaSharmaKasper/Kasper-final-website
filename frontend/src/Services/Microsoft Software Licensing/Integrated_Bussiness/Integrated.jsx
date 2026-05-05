import React from "react";
import "./Integrated.css";
import tick from "../../../assets/images/tick.svg";

import integrate from "../../../assets/images/integrate.jpg";

const Integrated = () => {
  return (
    <div style={{background:"white"}}>

   
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Microsoft Licensing Improves Business
Management</h2>
   
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
                     <h4>Cost Savings</h4>
                     <p>Optimized licensing reduces unnecessary expenses and lowers overall software costs.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Compliance Assurance</h4>
                     <p>Proper licensing ensures businesses meet Microsoft guidelines and avoid audit risks.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Flexible Usage</h4>
                     <p>Businesses can choose licensing models that suit their operational needs.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Better Control</h4>
                     <p>Centralized license management provides better visibility and control over software usage.</p>
                   </div>
                 </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Efficient Operations</h4>
                <p>
                  Right licensing ensures smooth system usage without
                  restrictions or limitations.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Long-Term Value</h4>
                <p>
                  Strategic licensing improves return on investment and supports
                  long-term business growth.
                </p>
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
