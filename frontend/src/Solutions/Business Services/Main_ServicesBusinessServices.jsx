import React from "react";
import Footer from "./Footer_Section/Footer";
import Hero_Services_Business from "./Heros_Section_Business/Hero_Services_Business";

import Features from "./Features_Section/Features";
import Visiblity from "./Visiblity_Features/Visiblity";
import BlogCard from "./Features_Section/Features_Blog/BlogCard"
import Contact from "./Contact/Contact";
import Integrated from "./Integrated_Bussiness/Integrated";




const Main_ServicesBusinessCentral = () => {
  return (
<>

<Hero_Services_Business/>

<div style={{background:"white"}}>
<Features/>
 <Integrated/>

<Visiblity/>

<BlogCard/>




<Contact/>


</div>





</>
  
  );
};

export default Main_ServicesBusinessCentral;