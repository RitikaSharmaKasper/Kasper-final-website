import React, { useState,useRef,useEffect,Suspense,lazy } from "react";
import { Link,NavLink, useLocation } from "react-router-dom";

import "./Navbar.css";
import ContactsPopup from "@/Contactspopup/Contactspopup.jsx";
import logo from "../assets/images2/logo.jpg.png";

import navtag from "../assets/images2/navtag.svg";

// 1. Lazy load the popup components
const Solutionspopup = lazy(() => import("../Soutionpopup/Solutionspopup.jsx"));
const Servicespopup = lazy(() => import("@/Servicespopup/Servicespopup.jsx"));
const Demopopup = lazy(() => import("@/Demo/Demopopup.jsx"));
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup Visibility
  const [activeTab, setActiveTab] = useState(""); // Track if "Solutions" or "Services" was clicked

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsPopupOpen(false);
    setActiveTab("");
    setIsOpen(false);
  }, [location.pathname]);

  // Close hamburger when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenPopup = (type) => {
    setActiveTab(type);
    setIsPopupOpen(true);
    setIsOpen(false);
   
  };
  const navLinkStyles = ({ isActive }) => {
  
    const isAnyPopupOpen = activeTab !== "";
    return isActive && !isAnyPopupOpen
      ? "menu transition font-sora active-green"
      : "menu transition font-sora";
  };

  const PopupLoader = () => (
  <div className="fixed inset-0 z-[999] bg-transparent">
    {/* Optional: Add a small white spinner here */}
  </div>
);
  const closePopup = () => {
    setIsPopupOpen(false);
    setActiveTab(""); // Tab reset taaki highlight hat jaye
  };
  return (
    <>
      <nav ref={navRef} className="main-nav flex items-center justify-between px-8 py-4 shadow-xs sticky top-0 z-[1000]">
        <div className="flex items-center shrink-0">
          <NavLink to="/" onClick={() => {setIsOpen(false); closePopup();}}>
            <img
              src={logo}
              alt="Kasper Logo"
              className="h-8 md:h-10  lg:h-20 w-auto object-contain transition-all duration-300 nav-logo"
            />
          </NavLink>
        </div>

        <ul
          className={`menu-div ${isOpen ? "flex" : "hidden"} md:flex items-center`}
        >
          <li>
            <NavLink to="/" className={navLinkStyles} onClick={() => {setIsOpen(false); closePopup();}}>
              Home
            </NavLink>
          </li>

          <li
            className="group relative cursor-pointer transition "
            onClick={() => handleOpenPopup("solutions")}
          >
            <div className={`menu flex items-center justify-center px-28 py-10 rounded-md ${activeTab === "solutions" ? "active-green" : ""}`}>
              <span className="transition font-sora">Solutions</span>
              <svg
                className="w-4 h-4 ml-1 shrink-0 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </li>

          <li
            className="group relative cursor-pointer transition"
            onClick={() => handleOpenPopup("services")}
          >
            <div className={`menu flex items-center justify-center px-28 py-10 rounded-md ${activeTab === "services" ? "active-green" : ""}`}>
              <span className="transition font-sora">Services</span>
              <svg
                className="w-4 h-4 ml-1 shrink-0 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </li>

          <li>
            <NavLink to="/about" className={navLinkStyles} onClick={() => { setIsOpen(false); closePopup(); }}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/insightsblogs" className={navLinkStyles} onClick={() => { setIsOpen(false); closePopup(); }}>
              Insights
            </NavLink>
          </li>

          <li className="mobile-menu-buttons">
              <div className="relative inline-block">
              <img
                src={navtag}
                alt="try"
                className="absolute -top-2 -left-4 h-8 w-auto z-10"
              />
              <a target="#" href="https://mymunc.com/">
                <button className="btn-munc w-28 h-10">MUN-C</button>
              </a>
            </div>
            <div className="relative inline-block">
              <img
                src={navtag}
                alt="try"
                className="absolute -top-3 -left-4 h-8 w-auto z-10 try-tag"
              />
            
            </div>
            <button className="btn-demo w-28 h-10" onClick={() => handleOpenPopup("demo")}>Get a Demo</button>
          </li>
        </ul>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Buttons (Keep existing structure) */}
          <div className=" md:flex items-center space-x-4">
            <div className="relative inline-block">
              <img
                src={navtag}
                alt="try"
                className="absolute -top-2 -left-4 h-8 w-auto z-10"
              />
              <a target="#" href="https://mymunc.com/">
                <button className="btn-munc w-28 h-10">MUN-C</button>
              </a>
            </div>

            <button className="hidden md:flex btn-demo" onClick={() =>handleOpenPopup("demo")}>Get a Demo</button>
          </div>

          {/* 4. Hamburger Icon Button (Visible only on mobile) */}
          <button
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              
            </svg>
          </button>
        </div>
      </nav>
      {/* {isPopupOpen && activeTab === "solutions" && (
        <Solutionspopup isOpen={true} onClose={() => setIsPopupOpen(false)} />
      )}

      {isPopupOpen && activeTab === "services" && (
        <Servicespopup isOpen={true} onClose={() => setIsPopupOpen(false)} />
      )}

       {isPopupOpen && activeTab === "demo" && (
        <Demopopup isOpen={true} onClose={() => setIsPopupOpen(false)} />
      )} */}

      <Suspense fallback={<></>}>
  {isPopupOpen && activeTab === "solutions" && (
    <Solutionspopup isOpen={true} onClose={closePopup} />
  )}
     {isPopupOpen && activeTab === "services" && (
          <Servicespopup isOpen={true} onClose={closePopup} />
        )}

        {isPopupOpen && activeTab === "demo" && (
          <Demopopup isOpen={true} onClose={closePopup} />
        )}
 
</Suspense>


    </>
  );
};

export default Navbar;
