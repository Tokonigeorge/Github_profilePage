import React from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";
import OverviewTab from "./sections/overviewTab";
import OverviewBar from "./sections/overviewBar";
import ContributionsTab from "./sections/contributionsTab";

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
        <OverviewTab repo_number="12" />
      </div>
      <div className="hidden md:flex md:items-start">
        <Sidebar
          github_name="Tokonigeorge"
          name="Tokoni"
          location="Lagos, Nigeria"
          twitter="@_tokoni_"
          highlights="PRO"
          organization="ZC"
          // status="I'm bowling in heaven"
        />
        <div className="flex-auto">
          <OverviewBar />
          <ContributionsTab />
        </div>
      </div>
      <div className="md:hidden">
        <OverviewTab repo_number="12" />
        <OverviewBar />
      </div>
    </div>
  );
};

export default Body;
