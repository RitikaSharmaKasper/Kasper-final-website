import React from "react";
import Footer from "./Footer_Section/Footer";
import Hero_Services_Application from "./Heros_Section_Application/Hero_Services_Application";

import Features from "./Features_Section/Features";
import Visiblity from "./Visiblity_Features/Visiblity";
import BlogCard from "./Features_Section/Features_Blog/BlogCard"
import Contact from "./Contact/Contact";
import Integrated from "./Integrated_Bussiness/Integrated";




const Main_Services_ApplicationMangedServices= () => {
  return (
<>

<Hero_Services_Application/>
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

export default Main_Services_ApplicationMangedServices;