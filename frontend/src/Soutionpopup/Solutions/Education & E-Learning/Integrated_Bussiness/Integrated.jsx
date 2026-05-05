import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">Knowledge Without Boundaries.</h2>
   
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
                     <h4>Data-Driven Student Success</h4>
                     <p>Stop guessing who is falling behind. Our advanced analytics identify "at-risk" students early, allowing teachers to intervene with personalized support before the final exams.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Reduced Teacher Burnout</h4>
                     <p>Empower your educators. By automating attendance, grading, and lesson scheduling, MUN-C returns 10+ hours a week to teachers, letting them focus on actual teaching.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>IGlobal Classroom Reach</h4>
                     <p>Break geographical barriers. Host students from around the world in a single virtual environment with real-time language translation and global payment support for tuition.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Future-Ready Skill Building</h4>
                     <p>Bridge the gap between academics and the workforce. Integrate industry-standard certifications and project-based learning modules directly into your curriculum.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Secure Academic Records</h4>
                     <p>Protect student privacy with enterprise-grade encryption. Every grade, certificate, and transcript is stored in a tamper-proof digital vault, ready for instant verification.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Seamless Fee Management</h4>
                     <p>Eliminate the stress of collections. Automate fee reminders, scholarship applications, and online payments with a transparent portal for parents and sponsors.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Scalable for Any Institution</h4>
                     <p>Whether you are a local coaching center, a K-12 school, or a multi-campus university, our modular architecture expands to fit your student count and department needs.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;