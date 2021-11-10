import React from "react";

const YearButton = ({ year }) => {
  return (
    <div>
      <button
        type="button"
        className="w-28 h-8 rounded-md bg-blue-500 mt-3 text-left text-xs text-navIcon px-4 py-0.5"
      >
        {year}
      </button>
    </div>
  );
};

export default YearButton;
