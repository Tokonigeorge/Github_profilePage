import React from "react";

const PullActivity = ({ url, name, contribution_no }) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <a href={url} className="text-blue-400 hover:underline mr-2 text-sm">
          {name}
        </a>
      </span>
      <span>
        <span className="bg-purple-700 px-1.5 rounded-full mr-1">
          {contribution_no}
        </span>
        merged
      </span>
    </div>
  );
};

export default PullActivity;
