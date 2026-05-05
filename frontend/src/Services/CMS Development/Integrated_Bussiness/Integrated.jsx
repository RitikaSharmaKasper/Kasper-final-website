import React from "react";
import "./Integrated.css";
import tick from "../../../assets/images/tick.svg";

import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
<div style={{background:"white"}}>
    <section className="why-choose">
      <div className="why_choose-content">
        <h2 className="why-main-heading">Why Businesses Use CMS for Website Management</h2>

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
                <h4>Easy Control</h4>
                <p>CMS allows businesses to manage website content without relying on developers,
                  giving teams full control over updates.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Faster Updates</h4>
                <p>Content changes such as news, blogs, or product information can be updated quickly
                  and published instantly.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Team Collaboration</h4>
                <p>Multiple users can manage content together, improving teamwork and reducing
                  dependency on technical teams.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Organized Content</h4>
                <p>CMS platforms keep website content well structured, making it easier to manage
                  pages and media files.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Cost Efficiency</h4>
                <p>Businesses save time and development costs by managing content internally instead
                  of hiring developers for every update.</p>
              </div>
            </div>

            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Flexible Growth</h4>
                <p>A CMS platform allows businesses to expand their website with new pages and
                  features when needed.</p>
              </div>
            </div>


            <div className="why-feature">
              <img src={tick}></img>
              <div>
                <h4>Better Visibility</h4>
                <p>SEO-friendly CMS structure helps websites perform better in search engines and
                  reach more visitors online..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default Integrated;