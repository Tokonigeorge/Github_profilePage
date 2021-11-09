import React from "react";
import { RepoIcon } from "../sections/overviewTab";
import { StarIcon } from "../sections/topbar";

const RepoCard = ({
  name,
  isPrivate,
  des,
  forkCount,
  isFork,
  stargazerCount,
  language,
}) => {
  const languageColor = {
    backgroundColor: language?.color,
  };
  return (
    <div className="h-auto rounded-md ring-1 ring-defaultBorder p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center">
          <span>
            <RepoIcon />
          </span>
          <a
            href="#"
            className="text-sm font-medium text-blue-400 ml-2 break-all"
          >
            {name}
          </a>
        </div>
        <div className="flex items-center">
          <p className="text-xs rounded-full ring-1 ring-gray-500 ring-opacity-40 px-2 py-0.5 mr-2 ml-0.5">
            {isPrivate ? "Private" : "Public"}
          </p>
          <DragIcon />
        </div>
      </div>
      {des && <p className="text-xs text-gray-400 pt-2">{des}</p>}
      <div className={`flex items-center text-gray-400 mt-6`}>
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
          <div className="flex items-center hover:text-blue-400 text-xs ml-5">
            <StarIcon />
            <p className="ml-1">{stargazerCount}</p>
          </div>
        )}
        {forkCount > 0 && (
          <div className="flex items-center hover:text-blue-400 text-xs ml-5">
            <ForkIcon />
            <p className="ml-1">{forkCount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const DragIcon = () => {
  return (
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      data-view-component="true"
      className="fill-current"
    >
      <path
        fillRule="evenodd"
        d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

export const ForkIcon = () => {
  return (
    <svg
      aria-label="forks"
      role="img"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      data-view-component="true"
      className="fill-current"
    >
      <path
        fillRule="evenodd"
        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      ></path>
    </svg>
  );
};

export default RepoCard;
