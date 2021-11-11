import React from "react";

const Activity = () => {
  return (
    <div className="px-4 mt-8 text-gray-400 md:pl-6 md:pr-6">
      <p className="text-navIcon">Contribution activity</p>
      <div className="mt-4 flex items-center">
        <p className="text-navIcon text-xs font-medium pl-2">
          November <span className="text-gray-400">2021</span>
        </p>
        <span className="border-t border-gray-400 border-opacity-20 ml-4 flex-auto"></span>
      </div>
      <Activities Icon={CommitIcon} contribution_no={2} repo_no={5} />
      <button
        type="button"
        className="bg-transparent text-xs text-blue-400 w-full py-2.5 font-medium rounded-md 
        border border-gray-300 border-opacity-20 mt-6"
      >
        Show more activity
      </button>
      <p className="text-xs text-gray-400 mt-6">
        Seeing something unexpected? Take a look at the{" "}
        <a href="#" className="text-blue-400">
          Github Profile guide.
        </a>
      </p>
    </div>
  );
};

const Activities = ({ Icon, contribution_no, repo_no }) => {
  return (
    <>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-4 ml-5 mt-2"></div>
      <div className="flex items-center justify-between my-px pl-1.5">
        <div className="flex items-center">
          <span className="rounded-full p-1.5 bg-gray-400 bg-opacity-20">
            {/* <LockIcon /> */} <Icon />
          </span>
          <p className="ml-2">
            {contribution_no} contributions in {repo_no} repositories
          </p>
        </div>
        <span>
          <ToggleIcon />
        </span>
      </div>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-auto min-h-4 ml-5">
        <CommitActivity url="#" name="something" number={2} />
        <CommitActivity url="#" name="something" number={2} />
        <CommitActivity url="#" name="something" number={2} />
        <CommitActivity url="#" name="something" number={2} />
      </div>
    </>
  );
};

const CommitActivity = ({ url, name, number }) => {
  return (
    <>
      <div className="flex items-center justify-between text-xs mt-2">
        <div className="flex items-center">
          <a href={url} className="text-blue-400 hover:text-underline mr-2">
            {name}
          </a>
          <p>{number} commits</p>
        </div>
        <span className="w-16 h-3 bg-green-400 rounded"></span>
      </div>
    </>
  );
};

export const CommitIcon = () => {
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

const ToggleIcon = () => {
  return (
    <svg
      className="fill-current"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path>
    </svg>
  );
};

export default Activity;
