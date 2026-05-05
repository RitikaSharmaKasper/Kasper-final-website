import React from "react";
import "./Integrated.css";
import tick from "../../../assets/images/tick.svg";

import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (


<>


<div style={{background:"white"}}>



    <section className="why-choose" >
      <div className="why_choose-content">
        <h2 className="why-main-heading">How Mobile Apps Support Business Growth</h2>

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
                <h4>Customer Access</h4>
                <p>Mobile apps allow businesses to stay connected with customers anytime, providing
                  quick access to services and information.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Better Engagement</h4>
                <p>Push notifications and app features help businesses communicate directly with users
                  and increase engagement.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Brand Presence</h4>
                <p>Having a mobile app strengthens brand identity and helps businesses maintain visibility
                  on customers’ devices.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Faster Services</h4>
                <p>Mobile apps provide quick and convenient services, improving customer satisfaction and
                  user experience.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Business Efficiency</h4>
                <p>Apps help businesses automate processes and manage operations more efficiently.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Data Insights</h4>
                <p>Mobile apps provide valuable user data that helps businesses understand customer
                  behavior and improve services.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Competitive Advantage</h4>
                <p>A well-designed mobile application helps businesses stay competitive and meet modern
                  customer expectations.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Integrated;