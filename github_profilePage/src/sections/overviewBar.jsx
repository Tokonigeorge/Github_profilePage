import React from "react";
import RepoCard from "../components/RepoCard";

const OverviewBar = () => {
  return (
    <div className="flex-auto ml-10 pr-6 mt-5">
      <div className="flex justify-between items-center">
        <p className="text-navIcon">Pinned</p>
        <a href="#" className="text-gray-400 text-sm">
          Customize your pins
        </a>
      </div>
      <div className="flex-auto grid grid-cols-2 gap-5 mt-2">
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
    </div>
  );
};

export default OverviewBar;
