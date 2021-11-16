import React from "react";
import "../utils/styles.css";

const IssueActivity = ({ url, name, contribution_no }) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <a href={url} className="text-blue-400 hover:underline mr-2 text-sm">
          {name}
        </a>
      </span>
      <span>
        <span className="issue-bubble px-1.5 rounded-full mr-1">
          {contribution_no} opened
        </span>
      </span>
    </div>
  );
};

export default IssueActivity;
