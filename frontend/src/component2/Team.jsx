import React from "react";
import Team1 from "../assets/images2/Team-1.JPG";
import Team5 from "../assets/images2/Team5.jpg";
import Team2 from "../assets/images2/Team-2.jpg";
import alokTeam2 from "../assets/images2/alokTeam2.png";
import Team4 from "../assets/images2/Team-4.png";
import Test1 from "../assets/images2/Test1.jpg";
import Test2 from "../assets/images2/Test2.png";
import alok from "../assets/images2/alok.png";
import alokTeam from "../assets/images2/alokTeam.png";
import developer from "../assets/images2/developer.png";
import appdeveloper from "../assets/images2/appdeveloper.jpeg";
import BacknedDeveloper from "../assets/images2/BacknedDeveloper.jpg";
import developer2 from "../assets/images2/patnaDeveloper1.jpeg"
import developer3 from "../assets/images2/patnaDeveloper2.jpeg"
import developer4 from "../assets/images2/patnaDeveloper3.jpeg"
import developer5 from "../assets/images2/patnaDeveloper4.png"
import "./AboutText.css";

const Team = () => {
  return (
    <div className="team-section ">
      <p className="team-title">Meet Our Team</p>

      <div className="flex-container-team">
        <div className="flex-team-column">
          <img src={Team1} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Ilma Sheikh</p>
          <p className="profile-role-leader">Digital Marketing</p>
        </div>
        <div className="flex-team-column">
          <img src={Team5} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Ashish Kumar Singh</p>
          <p className="profile-role-leader">Finance Executive</p>
        </div>
        <div className="flex-team-column">
          <img src={Team2} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Monu Jangra</p>
          <p className="profile-role-leader">Cyber Security Engineer</p>
        </div>

        <div className="flex-team-column">
          <img src={alok} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Alok Ranjan Oraon</p>
          <p className="profile-role-leader">Lead Product Designer</p>
        </div>
        <div className="flex-team-column">
          <img src={alokTeam} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Priyanshu Pandey</p>
          <p className="profile-role-leader">Product Designer</p>
        </div>
        <div className="flex-team-column">
          <img src={alokTeam2} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Adnan Nayyar</p>
          <p className="profile-role-leader">Product Designer</p>
        </div>
        <div className="flex-team-column">
          <img src={developer} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">AmanDeep Dhiman</p>
          <p className="profile-role-leader">Front-End Developer</p>
        </div>
        <div className="flex-team-column">
          <img
            src={BacknedDeveloper}
            alt="Name 1"
            className="profile-img-leader"
          />
          <p className="profile-name-leader">Vansh Choudhary</p>
          <p className="profile-role-leader">Backend Developer</p>
        </div>
        <div className="flex-team-column">
          <img src={appdeveloper} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Rahul Kumar</p>
          <p className="profile-role-leader">App Developer</p>
        </div>
        <div className="flex-team-column">
          <img src={Test1} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Sachin Sahoo</p>
          <p className="profile-role-leader">QA Engineer</p>
        </div>
        <div className="flex-team-column">
          <img src={Team4} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Ashutosh Yadav</p>
          <p className="profile-role-leader">QA Tester</p>
        </div>
        <div className="flex-team-column">
          <img src={Test2} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Shubham Kashyap</p>
          <p className="profile-role-leader">QA Tester</p>
        </div>
      </div>

      {/* Bottom Row: 3 Images */}
      <div className="flex-container-team2">
        <div className="item-column-team2">
          <img src={developer2} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Aditya Kumar</p>
          <p className="profile-role-leader">Front-End Developer</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={developer3} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Akash Kumar</p>
          <p className="profile-role-leader">Front-End Developer</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={developer4} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Kasim Siddique</p>
          <p className="profile-role-leader">Front-End Developer</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={developer5} alt="Name 1" className="profile-img-leader" />
          <p className="profile-name-leader">Diwakar Kumar</p>
          <p className="profile-role-leader">Front-End Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
