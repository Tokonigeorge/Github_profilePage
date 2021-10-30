import React from "react";
import Navbar from "./sections/navbar";
import HamburgerMenu from "./sections/hamburgerMenu";

const Body = () => {
  return (
    <div className="bg-navbg h-screen">
      <Navbar />
      <HamburgerMenu />
    </div>
  );
};

export default Body;
