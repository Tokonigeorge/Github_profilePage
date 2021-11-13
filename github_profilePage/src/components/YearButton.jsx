import React from "react";

const YearButton = ({ year, handleClick, active }) => {
  return (
    <div>
      <button
        type="button"
        className={`w-28 h-8 rounded-md ${
          active ? "bg-blue-500" : "hover:bg-black hover:bg-opacity-20"
        }  mt-3 text-left text-xs text-navIcon px-4 py-0.5`}
        onClick={() => handleClick(year)}
      >
        {year}
      </button>
    </div>
  );
};

export default YearButton;
