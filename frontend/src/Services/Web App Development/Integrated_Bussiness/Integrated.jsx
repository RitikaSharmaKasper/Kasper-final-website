import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

   <section className="why-choose">
  <div className="why_choose-content">
    <h2 className="why-main-heading">How Web Development Helps Businesses Grow Online</h2>

    <div className="why-container">
      <div className="why-left">
        <div className="why-image-wrapperr">
          <img src={integrate} alt="choose" />
        </div>
      </div>

      <div className="why-right">
        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Strong Presence</h4>
            <p>A professional website helps businesses build credibility and create a strong digital presence in today’s competitive market.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Better Experience</h4>
            <p>User-friendly design and smooth navigation improve the experience for visitors and encourage them to stay longer.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>More Reach</h4>
            <p>Websites allow businesses to reach customers from different locations and expand their market opportunities.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Business Promotion</h4>
            <p>Interactive features help businesses connect with visitors and build meaningful communication.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Easy Updates</h4>
            <p>Businesses can easily update content, products, or services on their website without complex processes.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Growth Support</h4>
            <p>A well-developed website supports marketing strategies and helps businesses generate leads and new opportunities.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  );
};

export default Integrated;