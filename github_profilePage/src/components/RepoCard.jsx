import React from "react";
import { RepoIcon } from "../sections/overviewTab";
import { StarIcon } from "../sections/topbar";

const RepoCard = () => {
  return (
    <div className="h-auto rounded-md ring-1 ring-defaultBorder p-4">
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center">
          <span>
            <RepoIcon />
          </span>
          <a
            href="#"
            className="text-sm font-medium text-blue-400 ml-2 break-all"
          >
            certificate_generator
          </a>
        </div>
        <div className="flex items-center">
          <p className="text-xs rounded-full ring-1 ring-gray-500 ring-opacity-40 px-2 py-0.5 mr-2 ml-0.5">
            Public
          </p>
          <DragIcon />
        </div>
      </div>
      <p className="text-xs text-gray-400 pt-4">
        A Workspace Web App powered by React and Node Js.
      </p>
      <div className="flex items-center text-gray-400 mt-4">
        <span className="h-3 w-3 bg-yellow-300 rounded-full"></span>
        <p className="text-xs ml-1">JavaScript</p>
        <div className="flex items-center hover:text-blue-400 text-xs ml-6">
          <StarIcon />
          <p className="ml-1">2</p>
        </div>
        <div className="flex items-center hover:text-blue-400 text-xs ml-6">
          <ForkIcon />
          <p className="ml-1">118</p>
        </div>
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
