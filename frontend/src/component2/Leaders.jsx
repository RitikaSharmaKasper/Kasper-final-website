import React from "react";
import Banner0 from "../assets/images2/Banner0.svg";
import leader1 from "../assets/images2/leader1.svg";

import leader2 from "../assets/images2/leader2.svg";
import leader3 from "../assets/images2/leader3.svg";
import leader4 from "../assets/images2/leader4.jpg";
import "./AboutText.css";
const Leaders = () => {
  return (
    <div className="content-section-leaders">
      <p className="content-text-leaders">Meet Our Leaders</p>

      <div className="banner-container-leader">
        <div className="profile-card-leader">
          <img src={Banner0} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Kishor Kumar</p>
          <p className="profile-role-leader">Founder & Director</p>
        </div>
        <div className="profile-card-leader">
          <img src={leader1} alt="Name 2" className="profile-img-leader" />
          <p className="profile-name-leader">Lakshmi Mittal</p>
          <p className="profile-role-leader">Founder & Director</p>
        </div>
      </div>

      <div className="flex-container-leader">
        <div className="item-wrapper-leader">
          <img src={leader2} alt="Name 3" className="profile-img-leader" />
          <p className="profile-name-leader">Gulam Zeelani</p>
          <p className="profile-role-leader">Manager</p>
        </div>
        <div className="item-wrapper-leader">
          <img src={leader3} alt="Name 4" className="profile-img-leader" />
          <p className="profile-name-leader">Amar Kumar</p>
          <p className="profile-role-leader">Technical Product Manager</p>
        </div>
        <div className="item-wrapper-leader">
          <img src={leader4} alt="Name 4" className="profile-img-leader" />
          <p className="profile-name-leader">Shashi Kumar Jha</p>
          <p className="profile-role-leader"> Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
