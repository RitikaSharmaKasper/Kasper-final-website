import React from "react";
import "./Visiblity.css";
import ball from "../../../assets/images/ball.svg";

const Visiblity = () => {
  return (
    <section className="visibility">
      <div className="visibility-container">
        <div className="visibility-text">
          <h2>
            Build Powerful Mobile Apps that Connect Your Business with Customers Everywhere.
          </h2>
        </div>

        <div className="why-left">
          <div className="why-image-wrapper">
            {/* Ab hum sirf class use karenge */}
            <img src={ball} alt="ball" className="responsive-ball" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visiblity;