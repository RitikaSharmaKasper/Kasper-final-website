import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
 <div style={{background:"white"}}>
    <section className="why-choose" >
           <div className="why_choose-content">
             <h2 className="why-main-heading">Integrated Business Applications for End-to-End Connectivity</h2>
   
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
                     <h4>Holistic Member Management</h4>
                     <p>Move beyond simple spreadsheets. Track the entire member journey—from the initial trial and body assessment to long-term performance tracking—all in one secure place.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Boosted Revenue Streams</h4>
                     <p>Maximize your income by effortlessly managing multiple revenue sources, including memberships, personal training, group classes, and in-house supplement sales.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Eliminated "Ghost Memberships"</h4>
                     <p>Our biometric integration ensures that only active, paying members can access your facilities, automatically flagging expired or unpaid accounts at the entrance.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Professional Athlete Portfolios</h4>
                     <p>For sports academies, create professional digital profiles for students that showcase their growth, attendance, and coach feedback, which can be shared with parents or scouts.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Seamless Mobile Experience</h4>
                     <p>Keep your members engaged 24/7. Whether they are booking a HIIT class or checking their meal plan, everything they need is available on their smartphone.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Automated Staff Incentives</h4>
                     <p>Reward your best trainers. The system automatically calculates commissions based on the actual sessions conducted, reducing administrative payroll errors.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Facility Efficiency</h4>
                     <p>Optimize your space. Our smart booking engine ensures that every court, bench, and studio is used efficiently, reducing idle time and increasing peak-hour revenue.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;