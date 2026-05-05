import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

 <div style={{background:"white"}}>
    <section className="why-choose" >
           <div className="why_choose-content">
             <h2 className="why-main-heading">Sell Everywhere. Manage Anywhere.</h2>
   
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
                     <h4>Speed That Converts</h4>
                     <p>Every millisecond counts. Our optimized architecture ensures your store loads instantly on mobile and desktop, significantly reducing bounce rates and increasing checkouts..</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Zero-Inventory Errors</h4>
                     <p>Never tell a customer "Out of Stock" after they've paid. Our centralized hub updates every sales channel the millisecond a sale happens anywhere.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Data-Driven Marketing</h4>
                     <p>Stop guessing what sells. Use deep-dive analytics to see which products have the highest margins, which regions are buying the most, and where your marketing spend is actually working.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Frictionless Checkout</h4>
                     <p>A "One-Click" checkout experience integrated with Apple Pay, Google Pay, UPI, and international credit cards to remove every barrier between your customer and a purchase.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Effortless Global Scaling</h4>
                     <p>Grow without borders. The system handles international taxes, duties, and multi-currency displays automatically, making global expansion a simple toggle switch.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Robust Customer Support (CRM)</h4>
                     <p>Every order, return, and chat history is in one place. Your support team can solve issues in seconds, turning frustrated shoppers into loyal brand advocates.</p>
                   </div>
                 </div>
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Mobile-First Experience</h4>
                     <p>With over 70% of shopping happening on phones, MUN-C provides a native-app feel on the web, ensuring a smooth "thumb-friendly" shopping journey.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section></div>
  );
};

export default Integrated;