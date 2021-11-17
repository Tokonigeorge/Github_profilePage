import React, { useState } from "react";
import "../utils/styles.css";
import HoverRepoCard from "./HoverRepoCard";

const IssueActivity = ({
  url,
  name,
  contribution_no,
  isPrivate,
  des,
  forkCount,
  stargazerCount,
  language,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5 relative">
      <span className="flex items-center">
        <a
          href={url}
          className="text-blue-400 hover:underline mr-2 text-sm"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {name}
        </a>
      </span>
      <span>
        <span className="issue-bubble px-1.5 rounded-full mr-1">
          {contribution_no} opened
        </span>
      </span>
      {hover && (
        <div className="absolute -top-24 left-10">
          <HoverRepoCard
            name={name}
            isPrivate={isPrivate}
            des={des}
            forkCount={forkCount}
            stargazerCount={stargazerCount}
            language={language}
            url={url}
          />
        </div>
      )}
    </div>
  );
};

export default IssueActivity;
