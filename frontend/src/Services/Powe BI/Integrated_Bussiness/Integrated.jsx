import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Microsoft Power BI Improves Business Intelligence</h2>
   
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
                     <h4>Better Decisions</h4>
                     <p>Real-time dashboards and reports help managers make informed decisions using accurate data
insights.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Data Visibility</h4>
                     <p>Businesses get a clear view of operations, sales, and performance through visual analytics.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Faster Analysis</h4>
                     <p>Power BI allows users to analyze large data sets quickly without complex technical processes.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>AI Insights</h4>
                     <p>Artificial intelligence helps discover hidden patterns and trends within business data.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Business Growth</h4>
                     <p>Data-driven insights help businesses improve strategies and identify new opportunities.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Real-Time Monitoring</h4>
                     <p>Organizations can monitor live data streams and respond quickly to changing conditions.</p>
                   </div>
                   
                 </div>
                 
                     <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Operational Efficiency</h4>
                     <p>Automated reporting reduces manual effort and saves time for business teams.</p>
                   </div>
                   
                 </div>
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;