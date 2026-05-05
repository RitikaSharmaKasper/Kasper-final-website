import React from "react";
import Footer from "./Footer_Section/Footer";
import Hero_Services_Social from "./Heros_Section_Social/Hero_Services_Social";

import Features from "./Features_Section/Features";
import Visiblity from "./Visiblity_Features/Visiblity";
import BlogCard from "./Features_Section/Features_Blog/BlogCard"
import Contact from "./Contact/Contact";
import Integrated from "./Integrated_Bussiness/Integrated";




const Main_ServicesSocialMedia = () => {
  return (
<>

<Hero_Services_Social/>

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

export default Main_ServicesSocialMedia;