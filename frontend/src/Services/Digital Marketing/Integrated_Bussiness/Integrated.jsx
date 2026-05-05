import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
  <div style={{background:"white"}}>
    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">How Digital Marketing Helps Businesses Grow Online</h2>
   
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
                     <h4>Online Visibility</h4>
                     <p>Digital marketing helps businesses appear in search results and reach customers actively looking for their services.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>More Traffic</h4>
                     <p>Marketing campaigns drive more visitors to your website, increasing opportunities to generate leads and sales.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Brand Awareness</h4>
                     <p>Consistent online presence helps businesses build recognition and trust among potential customers.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Customer Engagement</h4>
                     <p>Digital platforms allow businesses to interact directly with audiences and build long-term relationships.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Measurable Results</h4>
                     <p>Businesses can track campaign performance through analytics and make better marketing decisions.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Targeted Marketing</h4>
                     <p>Digital campaigns reach the right audience, helping businesses promote services to people who are most interested.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;