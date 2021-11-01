import React from "react";

const OverviewTab = () => {
  return (
    <div className="mt-10 text-sm text-navIcon flex items-center pl-4 border-b border-gray-400 border-opacity-20 pb-3">
      <a href="#" className="pr-8 pl-4">
        <span>Overview</span>
      </a>
      <a href="#" className="pr-8">
        <span>Repositories</span>
      </a>
      <a href="#" className="pr-8">
        <span>Projects</span>
      </a>
      <a href="#">
        <span>Packages</span>
      </a>
    </div>
  );
};

export default OverviewTab;
