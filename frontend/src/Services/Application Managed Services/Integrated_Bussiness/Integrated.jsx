import React from "react";
import "./Integrated.css";
import tick from "../../../assets/images/tick.svg";

import integrate from "../../../assets/images/integrate.jpg";

const Integrated = () => {
  return (
     <div style={{background:"white"}}>
    <section className="why-choose">
      <div className="why_choose-content">
        <h2 className="why-main-heading">
          How Managed Services Improve Application Performance
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
      <h4>Reduced Downtime</h4>
      <p>
        Continuous monitoring helps prevent system failures and keeps applications running without interruption.
      </p>
    </div>
  </div>

  <div className="why-feature">
    <img src={tick}></img>
    <div>
      <h4>Better Performance</h4>
      <p>
        Regular optimization improves application speed and user experience.
      </p>
    </div>
  </div>

  <div className="why-feature">
    <img src={tick}></img>
    <div>
      <h4>Cost Efficiency</h4>
      <p>
        Managed services reduce the need for in-house technical teams and lower operational costs.
      </p>
    </div>
  </div>

  <div className="why-feature">
    <img src={tick}></img>
    <div>
      <h4>Improved Security</h4>
      <p>
        Strong security practices protect applications and business data from risks.
      </p>
    </div>
  </div>

  <div className="why-feature">
    <img src={tick}></img>
    <div>
      <h4>Faster Issue Handling</h4>
      <p>
        Quick support ensures problems are resolved without affecting business operations.
      </p>
    </div>
  </div>

  <div className="why-feature">
    <img src={tick}></img>
    <div>
      <h4>Business Focus</h4>
      <p>
        Organizations can focus on core activities while experts manage their applications.
      </p>
    </div>
  </div>

  <div className="why-feature">
    <img src={tick}></img>
    <div>
      <h4>Scalable Systems</h4>
      <p>
        Applications can be easily upgraded and expanded as business needs grow.
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Integrated;
