import React from "react";

import Hero_Servicess from "./Heros_Section/Hero_Services";

import Features from "./Features_Section/Features";
import Visiblity from "./Visiblity_Features/Visiblity";
import BlogCard from "./Features_Section/Features_Blog/BlogCard"
import Contact from "./Contact/Contact";
import Integrated from "./Integrated_Bussiness/Integrated";




const Main_ServicesDevelopmentServices= () => {
  return (
<>

<Hero_Servicess/>

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

export default Main_ServicesDevelopmentServices;
