import React from "react";
import "./Integrated.css";
import tick from "../../../assets/images/tick.svg";

import integrate from "../../../assets/images/integrate.jpg";

const Integrated = () => {
  return (
    <section className="why-choose">
      <div className="why_choose-content">
        <h2 className="why-main-heading">
          How Upgrade and Migration Improves Business Systems
        </h2>

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
                <h4>Better Performance</h4>
                <p>
                  Upgraded systems run faster and handle business processes more efficiently.
                 </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Improved Security</h4>
                <p>
                 Latest versions provide stronger security features to protect business data.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Cloud Access</h4>
                <p>
                  Businesses can access systems from anywhere with cloud-based platforms.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Modern Features</h4>
                <p>
                  New features improve usability and support better business operations.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Reduced Risks</h4>
                <p>
                Professional migration reduces data loss and system failure risks.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Business Continuity</h4>
                <p>
                  Smooth transition ensures daily operations are not affected during migration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrated;
