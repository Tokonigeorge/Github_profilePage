import React from "react";

const Activity = () => {
  return (
    <div className="px-4 mt-8 text-gray-400">
      <p className="text-navIcon">Contribution activity</p>
      <div className="mt-4 flex items-center">
        <p className="text-navIcon text-xs font-medium pl-2">
          November <span className="text-gray-400">2021</span>
        </p>
        <span className="border-t border-gray-400 border-opacity-20 ml-2 flex-auto"></span>
      </div>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-4 ml-5 mt-2"></div>
      <div className="flex items-center justify-between my-px pl-1.5">
        <div className="flex items-center">
          <span className="rounded-full p-1.5 bg-gray-400 bg-opacity-20">
            <LockIcon />
          </span>
          <p className="ml-2">4 contributions in private repositories</p>
        </div>
        <p className="text-xs">Nov 1</p>
      </div>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-4 ml-5"></div>
      <button
        type="button"
        className="bg-gray-500 bg-opacity-10 hover:bg-opacity-20 text-xs text-blue-400 w-full py-2 font-medium rounded-md 
        border border-gray-300 border-opacity-20 mt-4"
      >
        Show more activity
      </button>
    </div>
  );
};

export const LockIcon = () => {
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
        d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"
      ></path>
    </svg>
  );
};

export default Activity;
