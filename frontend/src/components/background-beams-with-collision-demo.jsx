import React, { useEffect, useRef, useState, Suspense, lazy } from "react";

import { ArrowDown } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./background-beams-with-collision-demo.css";

import google from "../assets/images2/google.png";
// import BgGlow from "../assets/images2/BgGlow.svg";
import BgGlow from "../assets/images2/aman.svg";
import Badgeimg from "../assets/images2/Badgeimg.svg";

// Lazy loaded popups
const Solutionspopup = lazy(() => import("@/Soutionpopup/Solutionspopup"));
const Contactspopup = lazy(() => import("@/Contactspopup/Contactspopup"));

export default function BackgroundBeamsWithCollisionDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [title, setTitle] = useState("");

  const navRef = useRef(null);

  /* =====================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
     ===================================================== */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* =====================================================
     OPEN POPUP
     ===================================================== */
  const handleOpenPopup = (type, popupTitle = "Get in Touch.") => {
    setActiveTab(type);
    setIsPopupOpen(true);
    setIsOpen(false);
    setTitle(popupTitle);
  };

  /* =====================================================
     GOOGLE REVIEWS
     ===================================================== */
  const openGoogleReviews = () => {
    window.open(
      "https://maps.app.goo.gl/Fctod6ZHUeE9gWGyp6",
      "_blank",
      "noopener,noreferrer",
    );
  };

  /* =====================================================
     SCROLL TO SERVICES
     ===================================================== */
  const scrollToServices = () => {
    const nextSection = document.querySelector(".service-section");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <BackgroundBeamsWithCollision>
        <section
          className="hero-section"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="hero-grid-wrapper">
            {/* =================================================
                TEXT / CONTENT
            ================================================= */}
            <div className="Badge-container" >
              {/* ---------- Badge ---------- */}
              <div className="badge-wrapper">
                <span className="badge-yrs">9+ Years</span>
                <span className="expertise-text">
                  of expertise in delivering digital solutions
                  <img src="./k.png" alt="crown" className="expertise-icon" />
                </span>
              </div>

              {/* ---------- Heading ---------- */}
              <h1 className="Badge-title">
                Crafting Powerful Digital Experiences
              </h1>

              {/* ---------- Subtitle ---------- */}
              <p className="Badge-subtitle">
                Modern web &amp; software designing, development, and digital
                marketing for growing businesses.
              </p>

              {/* ---------- Buttons ---------- */}
              <div className="Badge-actions">
                <button
                  type="button"
                  className="btn-outline Badge-buttons"
                  onClick={() => handleOpenPopup("solutions")}
                >
                  Our Products
                </button>

                <button
                  type="button"
                  className="btn-primary Badge-buttons"
                  onClick={() => handleOpenPopup("contact")}
                >
                  Contact Us
                </button>

                {/* Google Reviews */}
                <div className="google-reviews flex items-center gap-2 px-2 py-2 border border-green-100 bg-white Badge-buttons"> <img src="./star.png" alt="G" className="w-5 h-5" /> <span className="font-bold text-gray-800">4.3</span> <span onClick={openGoogleReviews} className="text-blue-600 cursor-pointer text-sm ">(Google reviews)</span> <img src={google} alt="G" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* =================================================
                DASHBOARD IMAGE - CLEAN VERSION
            ================================================= */}
            <div  className="hero-visual">
              <img
                src={BgGlow}
                alt=""
                aria-hidden="true"
                className="hero-bg-glow"
               style={{
  position: "absolute",
  top: -5,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,

  borderTopLeftRadius: "900px",
  borderTopRightRadius: "900px",

  filter: "blur(30px)",
  opacity: 0.7,
}}
              />

              <div className="badge-image-container">
                <div className="image-wrapper">
                  <img
                    src={Badgeimg}
                    alt="Kaspersky Dashboard - Inventory Management System"
                    className="dashboard-img z-0 rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE SCROLL ARROW
            ================================================= */}
            <button
              type="button"
              className="scroll-down-arrow"
              onClick={scrollToServices}
              aria-label="Scroll to services"
            >
              <span>
                <ArrowDown size={24} strokeWidth={1} />
              </span>
            </button>
          </div>
        </section>
      </BackgroundBeamsWithCollision>

      {/* =====================================================
          POPUPS
      ===================================================== */}
      <Suspense fallback={null}>
        {isPopupOpen && activeTab === "contact" && (
          <Contactspopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            type={activeTab}
            title={title}
          />
        )}

        {isPopupOpen && activeTab === "solutions" && (
          <Solutionspopup isOpen={true} onClose={() => setIsPopupOpen(false)} />
        )}
      </Suspense>
    </>
  );
}
