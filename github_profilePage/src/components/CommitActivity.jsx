import React from "react";

const CommitActivity = ({ url, name, number }) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <a href={url} className="text-blue-400 hover:underline mr-2 text-sm">
          {name}
        </a>
        <p>{number} commits</p>
      </span>
      <span className="w-16 h-2 bg-green-600 rounded"></span>
    </div>
  );
};

export default CommitActivity;
