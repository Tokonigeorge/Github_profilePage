import React from "react";
import "../utils/styles.css";

const ContributionsTab = () => {
  return (
    <div className="px-4 mt-8 md:pl-6 md:pr-6 lg:pr-8">
      <div className="flex justify-between items-center">
        <p className="text-navIcon">247 contributions in 2021</p>
        <div className="text-gray-400 text-sm flex items-center">
          <span>
            <p>Contributions Settings</p>
          </span>
          <span className="dropDown-icon ml-1 mt-px"></span>
        </div>
      </div>
      <div className="h-48 rounded-md ring-1 ring-gray-600 ring-opacity-40 p-4 mt-2"></div>
    </div>
  );
};

export default ContributionsTab;
