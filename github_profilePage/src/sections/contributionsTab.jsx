import React from "react";
import "../utils/iconStyles.css";

const ContributionsTab = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-navIcon">247 contributions in 2021</p>
        <div className="text-gray-400 text-sm">
          <p>Contributions Settings</p>
          <span className="dropDown-icon ml-1"></span>
        </div>
      </div>
    </div>
  );
};

export default ContributionsTab;
