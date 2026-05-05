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
          How D365HPOS™ Improves Restaurant Operations
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
                <h4>Faster Billing</h4>
                <p>
                  Quick billing and easy payment options improve service speed
                  and customer satisfaction.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Better Control</h4>
                <p>
                  Manage tables, orders, and kitchen operations from one system.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Improved Accuracy</h4>
                <p>Automated processes reduce errors in orders and billing.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Customer Experience</h4>
                <p>
                  Flexible billing and clear order details improve overall
                  dining experience.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Sales Growth</h4>
                <p>
                  Promotions and offers help attract more customers and increase
                  revenue.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Cost Management</h4>
                <p>
                  Recipe and inventory tracking help control food costs
                  effectively.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Business Insights</h4>
                <p>
                  Detailed reports help owners understand performance and make
                  better decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default Integrated;
