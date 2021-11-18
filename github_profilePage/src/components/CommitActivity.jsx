import React, { useState } from "react";
import "../utils/styles.css";
import HoverRepoCard from "./HoverRepoCard";

const CommitActivity = ({
  url,
  name,
  number,
  isPrivate,
  des,
  forkCount,
  stargazerCount,
  language,
}) => {
  const [hover, setHover] = useState(false);
  const commitStyle = {
    width: number > 100 ? "200px" : `${number * 2}px`,
  };
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
        <p className="hidden md:block">{number} commits</p>
      </span>
      <span className=" h-2 rounded commit" style={commitStyle}></span>
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

export default CommitActivity;
