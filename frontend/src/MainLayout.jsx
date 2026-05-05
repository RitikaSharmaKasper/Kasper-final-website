import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import React from  "react" ;

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where Home, About, etc. will render */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;