import React from "react";
import "./Wavestru.css";

import icon1 from "../assets/images2/icon1.svg";
import icon2 from "../assets/images2/icon2.svg";
import icon3 from "../assets/images2/icon3.svg";
import icon4 from "../assets/images2/icon4.svg";
import icon5 from "../assets/images2/icon5.svg";
import icon6 from "../assets/images2/icon6.svg";
import icon7 from "../assets/images2/icon7.svg";
import icon8 from "../assets/images2/icon8.svg";
import icon9 from "../assets/images2/icon9.svg";
import icon10 from "../assets/images2/icon10.svg";
import icon11 from "../assets/images2/icon11.svg";
import icon12 from "../assets/images2/icon12.svg";

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
];

const Wavestru = () => {
  return (
    <div className="wave-main-div">
      <div className="snake-line"></div>

      {icons.map((icon, index) => (
        <div
          className="icon-div"
          key={index}
          style={{ "--i": index }}
        >
          <img src={icon} alt={`icon-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Wavestru;