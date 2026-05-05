import React from "react";
import "./Contact.css";
import { FaUser, FaEnvelope } from "react-icons/fa";

import flag from "../../../assets/images/flag.svg";
import img from "../../../assets/images/img.svg";

const Contact = () => {
  return (

 <div className="Center" id="contact-section">

<h2>Get in Touch.</h2>
        <p>
          Your business matters to us. Contact our team anytime for support,
          demos, or partnerships.
        </p>

    <section className="contact" >
      <div className="contact-left">
        

        <form>
          <div className="form-group">
            <label>
              Full Name<span>*</span>
            </label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Enter Full Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Email Id<span>*</span>
              </label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Enter Email Id" />
              </div>
            </div>

            <div className="form-group">
              <label>
                Phone No.<span>*</span>
              </label>

              <div className="phone-input">
                <img src={flag} className="flag" alt="flag" />
                <span className="code">+91</span>
                <span className="divider">|</span>
                <input type="text" placeholder="Enter Phone No." />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Product</label>

            <div className="select-wrapper">
              <select>
                <option>Select Product</option>
                    <option>IMS</option>
                <option>LMS</option>
                <option>HRMS</option>
                 <option>SMS</option>
                <option>HRM</option>
              </select>
            </div>
          </div>

          <div className="form-group full">
            <label>Message</label>
            <textarea placeholder="How we can help you ?"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="contact-right">
        <img src={img} alt="contact" />
      </div>
    </section>

        </div>
  );
};

export default Contact;