import React from "react";

import Inside_Blogs_hero from "./Inside_Blogs_hero/Inside_Blogs_hero";
import Heros_section from "./Insight_Hero_Section/Heros_section";

const Inside_Blogs = () => {
  return (
    <div style={{backgroundColor:"white"}}>
      <Heros_section />
      <Inside_Blogs_hero />
    </div>
  );
};

export default Inside_Blogs;
