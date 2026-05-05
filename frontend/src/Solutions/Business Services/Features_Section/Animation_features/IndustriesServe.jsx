
import React from 'react'
import  "./IndustriesServe.css"
import industry1 from "../../../../assets/images2/industry1.svg"

import industry2 from "../../../../assets/images2/industry2.svg"


import industry3 from "../../../../assets/images2/industry3.svg"
import industry4 from "../../../../assets/images2/industry4.svg"
import industry5 from "../../../../assets/images2/industry5.svg"
import industry6 from "../../../../assets/images2/industry6.svg"
import industry7 from "../../../../assets/images2/industry7.svg"
import industry8 from "../../../../assets/images2/industry8.svg"
import industry9 from "../../../../assets/images2/industry9.svg"
import industry10 from "../../../../assets/images2/industry10.svg"
import industry11 from "../../../../assets/images2/industry11.svg"

import { useNavigate } from 'react-router-dom';
const IndustriesServe = () => {
  const navigate = useNavigate();
    const handleNavigation = (path) => {
      if (path) {
        navigate(path);
        window.scrollTo(0, 0); // Optional: Scroll to top on navigation
      }
    };
  return (
<div className='Industries-main-div' >
  <p>Industries we serve</p>

  <div className="industry-imagediv">

    <div className="industry-card" onClick={() => handleNavigation("/solutions/travel-tourism")}>
      <img src={industry1} alt=""   />
      <p>Travel and Tourism</p>
    </div>

    <div className="industry-card" onClick={() => handleNavigation("/solutions/healthcare-fitness")}>
      <img src={industry2} alt=""  />
      <p>Healthcare & Fitness</p>
    </div>

    <div className="industry-card"  onClick={() => handleNavigation("/solutions/real-estate")}>
      <img src={industry3} alt=""   />
      <p>Real Estate</p>
    </div>

    <div className="industry-card" onClick={() => handleNavigation("/solutions/media-entertainment")} >
      <img src={industry4} alt=""   />
      <p>Media & Entertainment</p>
    </div>

    <div className="industry-card"  onClick={() => handleNavigation("/solutions/social-media-networking")}>
      <img src={industry5} alt=""   />
      <p>Social Media & Networking</p>
    </div>
    <div className="industry-card"  onClick={() => handleNavigation("/solutions/e-commerce")} >
      <img src={industry6} alt=""  />
      <p>E-commerce</p>
    </div>
    <div className="industry-card"  onClick={() => handleNavigation("/solutions/education-e-learning")} >
      <img src={industry7} alt=""  />
      <p>Education & E-learning</p>
    </div>
    <div className="industry-card"  onClick={() => handleNavigation("/solutions/banking-finance")} >
      <img src={industry8} alt=""  />
      <p>Banking & Finance</p>
    </div>
    <div className="industry-card" onClick={() => handleNavigation("/solutions/sports-wellness")} >
      <img src={industry9} alt=""   />
      <p>Sports & Wellness</p>
    </div>
     <div className="industry-card" onClick={() => handleNavigation("/solutions/it-ites")}>
      <img src={industry10} alt=""    />
      <p>IT & ITES</p>
    </div>
     <div className="industry-card"  onClick={() => handleNavigation("/solutions/business-services")}> 
      <img src={industry11} alt=""   />
      <p>Business Services</p>
    </div>


  </div>
</div>
  )
}

export default IndustriesServe