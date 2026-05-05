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
<div className='Industries-main-div'>
  <p>Industries we serve</p>

  <div className="industry-imagediv">

    <div className="industry-card">
      <img src={industry1} alt=""  onClick={() => handleNavigation("/solutions/travel-tourism")} />
      <p>Travel and Tourism</p>
    </div>

    <div className="industry-card">
      <img src={industry2} alt="" onClick={() => handleNavigation("/solutions/healthcare-fitness")} />
      <p>Healthcare & Fitness</p>
    </div>

    <div className="industry-card">
      <img src={industry3} alt=""   onClick={() => handleNavigation("/solutions/real-estate")} />
      <p>Real Estate</p>
    </div>

    <div className="industry-card">
      <img src={industry4} alt=""  onClick={() => handleNavigation("/solutions/media-entertainment")}  />
      <p>Media & Entertainment</p>
    </div>

    <div className="industry-card">
      <img src={industry5} alt=""   onClick={() => handleNavigation("/solutions/social-media-networking")} />
      <p>Social Media & Networking</p>
    </div>
    <div className="industry-card">
      <img src={industry6} alt=""  onClick={() => handleNavigation("/solutions/e-commerce")}  />
      <p>E-commerce</p>
    </div>
    <div className="industry-card">
      <img src={industry7} alt=""   onClick={() => handleNavigation("/solutions/education-e-learning")} />
      <p>Education & E-learning</p>
    </div>
    <div className="industry-card">
      <img src={industry8} alt=""   onClick={() => handleNavigation("/solutions/banking-finance")} />
      <p>Banking & Finance</p>
    </div>
    <div className="industry-card">
      <img src={industry9} alt=""  onClick={() => handleNavigation("/solutions/sports-wellness")}  />
      <p>Sports & Wellness</p>
    </div>
     <div className="industry-card">
      <img src={industry10} alt=""   onClick={() => handleNavigation("/solutions/it-ites")} />
      <p>IT & ITES</p>
    </div>
     <div className="industry-card">
      <img src={industry11} alt=""  onClick={() => handleNavigation("/solutions/business-services")}  />
      <p>Business Services</p>
    </div>


  </div>
</div>
  )
}

export default IndustriesServe