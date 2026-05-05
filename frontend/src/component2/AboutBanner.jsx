import React from "react";
import "./AboutBanner.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import banner2 from "../assets/images2/banner-2.png";
import banner1 from "../assets/images2/banner1.svg";
import white from "../assets/images2/white.png";
import orange from "../assets/images2/orange.png";

const AboutBanner = () => {
  return (
    <div className="about-wrapper About-us-img">
      <p className="about-text text-black">
        Engineering Digital Growth. Empowering Modern Businesses.
      </p>
      <div className="banner-outer-wrapper">
        <div className="banner-orange-div">
          <img src={orange} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="banner-white-div">
          <img src={white} alt="" className="banner-bg-white" />

          <div className="banner-inner-flex">
            <div className="banner-left-div">
              <div className="banner-quote-row">
                <span className="banner-quote-mark">
                  <RiDoubleQuotesL />
                </span>
                <p className="banner-quote-p">
                  We don't just build software — we build technology that helps
                  businesses move faster and think bigger.
                </p>
              </div>
              <div className="banner-author-div">
                <h4 className="banner-author-name ">Kishor Kumar</h4>
                <p className="banner-author-title">Director, Kasper Infotech</p>
              </div>
            </div>

            <div className="banner-right-div">
              <img
                src={banner1}
                alt="Kishor Kumar"
                className="banner-person-img"
              />
              <img
                src={banner2}
                alt="Background Accent"
                className="banner-accent-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
