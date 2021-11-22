import React, { useState } from "react";
import HoverRepoCard from "./HoverRepoCard";
import { RepoIcon } from "../sections/overviewTab";
import { getDay, getMonth } from "../date";

const CreatedRepoActivity = ({
  name,
  url,
  isPrivate,
  des,
  forkCount,
  stargazerCount,
  language,
  createdAt,
}) => {
  const [hover, setHover] = useState(false);
  const _color = {
    backgroundColor: language?.color,
  };
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5 relative">
      <span className="flex items-center">
        <span>
          <RepoIcon />
        </span>
        <a
          href={url}
          className="text-blue-400 hover:underline ml-2 text-sm"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {name}
        </a>
      </span>
      <span className="flex items-center mr-1">
        <span
          className="w-2.5 h-2.5 rounded-full ring-1 ring-gray-600 mr-1"
          style={_color}
        ></span>
        <p>{language?.name}</p>
      </span>
      <span>{getMonth(createdAt, "short") + " " + getDay(createdAt)}</span>
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

export default CreatedRepoActivity;
