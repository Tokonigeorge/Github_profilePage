import React, { useState } from "react";
import "../utils/styles.css";
import CalendarHeatMap from "../components/CalendarHeatMap";

const ContributionsTab = ({ contributions, year, error }) => {
  const _values = [];
  //map contribution days and get an array of the values from the object, mapping over and pushing into the array
  contributions?.weeks
    ?.map((i) => i.contributionDays)
    .map((i) => {
      Object.values(i).map((i) =>
        _values.push({ date: i.date, count: i.contributionCount })
      );
    });

  return (
    <div className="px-4 mt-10 md:pl-6 md:pr-6 lg:pr-8 lg2:pr-16">
      <div className="flex justify-between items-center">
        {error ? (
          <p className="text-navIcon">
            Oooooooops, Error fetching contributions but It's not my fault
          </p>
        ) : (
          <p className="text-navIcon">
            {contributions?.totalContributions} contributions in {year}
          </p>
        )}
        <div className="text-gray-400 text-sm flex items-center">
          <span>
            <p className="font-light">Contributions Settings</p>
          </span>
          <span className="dropDown-icon ml-1 mt-px"></span>
        </div>
      </div>
      <div className="h-auto rounded-md ring-1 ring-gray-600 ring-opacity-50 p-4 pr-10 mt-2 overflow-hidden">
        <div>
          <CalendarHeatMap value={_values} year={year} />
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400 -mt-2.5 ml-2">
          <span>Learn how we count contribution</span>
          <div className="flex items-center">
            <p>less</p>
            <span className="h-2.5 w-2.5 color-scale-0 mx-1 -mb-1"></span>
            <span className="h-2.5 w-2.5 color-scale-1 mr-1 -mb-1"></span>
            <span className="h-2.5 w-2.5 color-scale-2 mr-1 -mb-1"></span>
            <span className="h-2.5 w-2.5 color-scale-3 mr-1 -mb-1"></span>
            <span className="h-2.5 w-2.5 color-scale-5 -mr-2.5 -mb-1"></span>
            <p>more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionsTab;
