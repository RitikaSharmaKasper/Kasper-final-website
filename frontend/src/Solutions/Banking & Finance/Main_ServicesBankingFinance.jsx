import React from "react";
import Footer from "./Footer_Section/Footer";
import Hero_Services_Banking from "./Heros_Section_Banking/Hero_Services_Banking";

import Features from "./Features_Section/Features";
import Visiblity from "./Visiblity_Features/Visiblity";
import BlogCard from "./Features_Section/Features_Blog/BlogCard"
import Contact from "./Contact/Contact";
import Integrated from "./Integrated_Bussiness/Integrated";




const Main_ServicesBankingFinance= () => {
  return (
<>

<Hero_Services_Banking/>
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

export default Main_ServicesBankingFinance;