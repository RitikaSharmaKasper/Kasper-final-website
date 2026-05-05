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
          How Development Services Support Business Growth
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
                <h4>Better Integration</h4>
                <p>
                  Applications connect with existing systems, improving workflow
                  and reducing manual effort.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Flexible Access</h4>
                <p>
                  Cloud-based solutions allow users to access applications from
                  anywhere.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Strong Performance</h4>
                <p>
                  Modern development ensures applications run smoothly and
                  handle business operations efficiently.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Scalable Systems</h4>
                <p>
                  Businesses can expand applications as they grow without
                  rebuilding systems.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Improved Security</h4>
                <p>
                  Secure development practices protect data and ensure safe
                  operations.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Faster Delivery</h4>
                <p>
                  Efficient development process helps deliver solutions quickly.
                </p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Future Ready</h4>
                <p>
                  Modern architecture supports long-term business growth and
                  technology changes.
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
