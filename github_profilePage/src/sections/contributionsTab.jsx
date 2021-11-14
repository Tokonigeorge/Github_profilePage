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
    <div className="px-4 mt-8 md:pl-6 md:pr-6 lg:pr-8">
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
      <div className="h-auto rounded-md ring-1 ring-gray-600 ring-opacity-40 p-4 mt-2 overflow-hidden">
        <div>
          <CalendarHeatMap value={_values} year={year} />
        </div>
      </div>
    </div>
  );
};

export default ContributionsTab;
