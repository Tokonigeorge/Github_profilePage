import React from "react";
import "../utils/styles.css";

const YearButton = ({ year, handleClick, active }) => {
  return (
    <div>
      <button
        type="button"
        className={`w-28 h-9 rounded-md ${
          active ? "year-button" : "hover:bg-black hover:bg-opacity-20"
        }  mt-3 text-left text-xs text-navIcon px-4 py-0`}
        onClick={() => handleClick(year)}
      >
        {year}
      </button>
    </div>
  );
};

export default YearButton;
