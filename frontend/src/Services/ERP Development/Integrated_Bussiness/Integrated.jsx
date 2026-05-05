import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (
  <div style={{background:"white"}}>
   <section className="why-choose">
  <div className="why_choose-content">
    <h2 className="why-main-heading">Why Businesses Choose Our ERP Solutions</h2>

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
            <h4>Efficiency</h4>
            <p>ERP software automates daily business tasks such as reporting, inventory updates, and employee management, helping companies save time and reduce operational workload.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Accuracy</h4>
            <p>Centralized data reduces manual errors and keeps business information accurate, ensuring better financial records, stock management, and operational insights.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Productivity</h4>
            <p>Employees spend less time on repetitive work and more time on important tasks, improving overall productivity across departments.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Visibility</h4>
            <p>ERP dashboards provide clear insights into sales, expenses, stock levels, and employee performance, helping business owners understand operations better.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Scalability</h4>
            <p>Our ERP systems are built to grow with your business, allowing you to add new modules, users, and features as your company expands.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Cost Saving</h4>
            <p>Automation and better resource management reduce operational costs and prevent financial losses caused by inefficiencies or data errors.</p>
          </div>
        </div>

        <div className="why-feature">
          <img src={tick}></img>
          <div>
            <h4>Better Decisions</h4>
            <p>Real-time reports and analytics help managers and business owners make informed decisions based on accurate business data.</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section></div>
  );
};

export default Integrated;