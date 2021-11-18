import React from "react";
import { RepoIcon } from "../sections/overviewTab";
import { StarIcon } from "../sections/topbar";
import { ForkIcon } from "./RepoCard";

const HoverRepoCard = ({
  name,
  isPrivate,
  des,
  forkCount,
  stargazerCount,
  language,
  url,
}) => {
  const languageColor = {
    backgroundColor: language?.color,
  };
  return (
    <div className="h-auto w-auto bg-navbg rounded-md ring-1 ring-gray-600 ring-opacity-50 p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center">
          <span>
            <RepoIcon />
          </span>
          <a
            href={url}
            className="text-sm font-medium text-blue-400 ml-2 break-all hover:underline"
          >
            {name}
          </a>
        </div>
        <p className="text-xs rounded-full ring-1 ring-gray-500 ring-opacity-40 px-2 py-0.5 mr-2 ml-3">
          {isPrivate ? "Private" : "Public"}
        </p>
      </div>
      {des && <p className="text-xs text-gray-400 pt-2">{des}</p>}
      <div className={`flex items-center text-gray-400 mt-5`}>
        {language && (
          <>
            <span
              className={`h-3 w-3 rounded-full`}
              style={languageColor}
            ></span>
            <p className="text-xs ml-1">{language.name}</p>
          </>
        )}
        {stargazerCount > 0 && (
          <div className="flex items-center hover:text-blue-400 text-xs ml-3">
            <StarIcon />
            <p className="ml-1">{stargazerCount}</p>
          </div>
        )}
        {forkCount > 0 && (
          <div className="flex items-center hover:text-blue-400 text-xs ml-3">
            <ForkIcon />
            <p className="ml-1">{forkCount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverRepoCard;
