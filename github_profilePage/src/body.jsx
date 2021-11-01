import React from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";
import OverviewTab from "./sections/overviewTab";

const Body = () => {
  return (
    <div className="bg-navbg h-screen overflow-x-hidden sm2:bg-bodyBg">
      <Navbar />
      <Topbar
        github_name="Tokonigeorge"
        name="Tokoni"
        // status="These are just the before pictures"
      />
      <div className="hidden md:block">
        <Sidebar
          github_name="Tokonigeorge"
          name="Tokoni"
          location="Lagos, Nigeria"
          twitter="@_tokoni_"
          // status="I'm bowling in heaven"
        />
      </div>
      <OverviewTab />
    </div>
  );
};

export default Body;
