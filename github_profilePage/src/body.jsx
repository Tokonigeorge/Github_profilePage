import React from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";

const Body = () => {
  return (
    <div className="bg-navbg sm2:bg-bodyBg">
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
        />
      </div>
    </div>
  );
};

export default Body;
