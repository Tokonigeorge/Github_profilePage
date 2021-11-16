import React from "react";
import "../utils/styles.css";

const CommitActivity = ({ url, name, number }) => {
  const commitStyle = {
    width: number > 100 ? "100px" : `${number * 2}px`,
  };
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <a href={url} className="text-blue-400 hover:underline mr-2 text-sm">
          {name}
        </a>
        <p>{number} commits</p>
      </span>
      <span className=" h-2 rounded commit" style={commitStyle}></span>
    </div>
  );
};

export default CommitActivity;
