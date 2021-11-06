import React from "react";
import RepoCard from "../components/RepoCard";

const OverviewBar = () => {
  return (
    <div className="ml-4 md:ml-6 md:pr-6 lg:pr-8 mt-5 pr-4">
      <div className="flex justify-between items-center">
        <p className="text-navIcon">Pinned</p>
        <a href="#" className="text-gray-200 text-opacity-60 text-sm">
          Customize your pins
        </a>
      </div>
      <div className="flex-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
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
