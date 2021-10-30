import React from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";

const Body = () => {
  return (
    <div className="bg-navbg h-screen  sm2:bg-bodyBg">
      <Navbar />
      <Topbar />
      <div className="hidden md:block">
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;
