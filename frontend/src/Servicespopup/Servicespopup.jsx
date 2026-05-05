import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Servicespopup.css";
import Services_popupimg from "../assets/images/Services_popupimg.svg";
import { IoIosArrowForward } from "react-icons/io";
import colouredserviceframe from "../assets/images2/coloured-serviceframe.svg";
import servicescontact from "../assets/images2/services-contact.png";
import computer  from "../assets/images2/Computer.svg"
//  import servicesgradientimg from "../assets/images2/servicesgradientimg.svg"
const Servicespopup = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null; 
  return (

   <div className="fixed-overlay">
      {/* 1. Backdrop: Jo peeche ke area ko dark karega */}
      <div className="modal-backdrop" onClick={onClose}></div>

      {/* 2. Content Box: Jo beech mein floating dikhega */}
      <section className="services-popup-modal animate-in fade-in zoom-in duration-300">
        
        {/* Top Section */}
        <div className="popup-top">
          <div className="popup-image">
  {/* Red Gradient & Grid Pattern Container */}
  <div className="service-gradient-bg">
    
    <div className="text-content">
      <h2 className="gradient-title">Customized Tech for Growth</h2>
      <p className="gradient-subtitle">
        Custom software, websites, and apps designed for your business—boosted with effective digital marketing.
      </p>
    </div>

    {/* Graphics Layering */}
    <div className="graphics-container">
      {/* Red Dashed Frame (Peeche) */}
      <img src={colouredserviceframe} alt="" className="img-frame" />
      {/* Computer Isometric (Upar) */}
      <img src={computer} alt="" className="img-computer" />
    </div>

    {/* Contact Button Image (Bottom Left) */}
    <div className="contact-wrapper">
      <img src={servicescontact} alt="Contact Us" className="contact-img" />
    </div>
    
  </div>
</div>

          <div className="popup-services">
            <h2>Services</h2>
            <div className="line">
              <div className="services-links">
                <Link to="/ERPDevelopment" onClick={onClose}>
                  ERP Development <IoIosArrowForward />
                </Link>
                <Link to="/CRMDevelopment" onClick={onClose}>
                  CRM Development <IoIosArrowForward />
                </Link>
                <Link to="/WebApp" onClick={onClose}>
                  Web App Development <IoIosArrowForward />
                </Link>
                <Link to="/CMSDevelopment" onClick={onClose}>
                  CMS Development <IoIosArrowForward />
                </Link>
                <Link to="/MobileApp" onClick={onClose}>
                  Mobile App Development <IoIosArrowForward />
                </Link>
                <Link to="/DigitalMarketing" onClick={onClose}>
                  Digital Marketing <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
              {/* Bottom Cards */}
        <div className="popup-cards">

          {/* Card 1 */}
          <div className="popup-card">
            <h3>Microsoft Dynamics 365 Implementation Services</h3>

            <p>
              Unify your sales, finance, and operations on a single intelligent platform.
            </p>

            <div className="line">
              <div className="card-links">

                <Link to="/Finance"  onClick={onClose}>
                  Finance & Operations <IoIosArrowForward />
                </Link>

                <Link to="/CustomerEngagement" onClick={onClose}>
                  Customer Engagement | CRM <IoIosArrowForward />
                </Link>

                <Link to="/BusinessCentral" onClick={onClose}>
                  Business Central <IoIosArrowForward />
                </Link>

                <Link to="/PowerBi" onClick={onClose}>
                  Power BI <IoIosArrowForward />
                </Link>

                <Link to="/PowerPlatform" onClick={onClose}>
                  Power Platform <IoIosArrowForward />
                </Link>

                <Link to="/Fabrics" onClick={onClose}>
                  Fabric & Data Management <IoIosArrowForward />
                </Link>

              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div className="popup-card">

            <h3>Managed Services</h3>

            <p>
              Seamless Microsoft Dynamics 365 implementation and managed services
              to optimize operations and accelerate growth.
            </p>

            <div className="line">
              <div className="card-links">

                <Link to="/ApplicationManagedServices" onClick={onClose}>
                  Application Managed Services <IoIosArrowForward />
                </Link>

                <Link to="/UpgradeMigration" onClick={onClose}>
                  Upgrade & Migration Services <IoIosArrowForward />
                </Link>

                <Link to="/Development" onClick={onClose}>
                  Development Services <IoIosArrowForward />
                </Link>

                <Link to="/Microsoft" onClick={onClose}>
                  Microsoft Software Licensing <IoIosArrowForward />
                </Link>

              </div>
            </div>
          </div>


          {/* Card 3 */}
          <div className="popup-card">

            <h3>Advisory Services</h3>

            <p>
              Expert advisory and implementation services to deploy Microsoft
              Dynamics 365 smoothly, securely, and at scale.
            </p>

            <div className="line">
              <div className="card-links">

                <Link to="/BusinessConsulting" onClick={onClose}>
                  Business Consulting & Project Planning <IoIosArrowForward />
                </Link>

                <Link to="/InterfaceDesign" onClick={onClose}>
                  Interface Design & Integration <IoIosArrowForward />
                </Link>

              </div>
            </div>

          </div>


          {/* Card 4 */}
          <div className="popup-card">

            <h3>Add-On Solutions</h3>

            <p>
              Customized Dynamics 365 implementation with powerful add-on solutions.
            </p>

            <div className="line">
              <div className="card-links">

                <Link to="/mainD365HOCS" onClick={onClose}>
                  D365OCS <IoIosArrowForward />
                </Link>

                <Link to="/mainD365HPOS" onClick={onClose}>
                  D365HPOS <IoIosArrowForward />
                </Link>

                <Link to="/mainD365HQCS" onClick={onClose}>
                  D365QCS <IoIosArrowForward />
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Servicespopup;