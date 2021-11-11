import React, { useState } from "react";
import { RepoIcon } from "./overviewTab";

const Activity = () => {
  return (
    <div className="px-4 mt-8 text-gray-400 md:pl-6 md:pr-6">
      <p className="text-navIcon">Contribution activity</p>
      <div className="mt-4 flex items-center mb-2">
        <p className="text-navIcon text-xs font-medium pl-2">
          November <span className="text-gray-400">2021</span>
        </p>
        <span className="border-t border-gray-400 border-opacity-20 ml-4 flex-auto"></span>
      </div>
      <Activities
        Icon={CommitIcon}
        contribution_no={2}
        repo_no={5}
        isCommit={true}
      />
      <Activities
        Icon={PullIcon}
        contribution_no={2}
        repo_no={5}
        isPull={true}
      />
      <Activities
        Icon={RepoIcon}
        contribution_no={2}
        repo_no={5}
        isCreated={true}
      />
      <Activities
        Icon={ReviewIcon}
        contribution_no={2}
        repo_no={5}
        isReview={true}
      />
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

const Activities = ({
  Icon,
  contribution_no,
  repo_no,
  isCommit,
  isPull,
  isCreated,
  isReview,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-4 ml-5"></div>
      <div className="flex items-center justify-between mt-px pl-1.5">
        <div className="flex items-center">
          <span className="rounded-full p-1.5 bg-gray-400 bg-opacity-20">
            {/* <LockIcon /> */} <Icon />
          </span>
          <p className="ml-2">
            {contribution_no} contributions in {repo_no} repositories
          </p>
        </div>
        <span onClick={() => setOpen(!open)}>
          <ToggleIcon />
        </span>
      </div>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-auto pb-4 ml-5">
        {open && isCommit && (
          <>
            <CommitActivity url="#" name="something" number={2} />
            <CommitActivity url="#" name="something" number={2} />
            <CommitActivity url="#" name="something" number={2} />
            <CommitActivity url="#" name="something" number={2} />
          </>
        )}
        {open && isPull && (
          <>
            <PullActivity url="#" name="something" contribution_no={2} />
            <PullActivity url="#" name="something" contribution_no={2} />
            <PullActivity url="#" name="something" contribution_no={2} />
            <PullActivity url="#" name="something" contribution_no={2} />
          </>
        )}
        {open && isCreated && (
          <>
            <CreatedRepoActivity
              url="#"
              name="something"
              language_name={"javascript"}
              createdAt={"3 nov"}
            />
            <CreatedRepoActivity
              url="#"
              name="something"
              language_name={"javascript"}
              createdAt={"3 nov"}
            />
            <CreatedRepoActivity
              url="#"
              name="something"
              language_name={"javascript"}
              createdAt={"3 nov"}
            />
            <CreatedRepoActivity
              url="#"
              name="something"
              language_name={"javascript"}
              createdAt={"3 nov"}
            />
          </>
        )}
        {open && isReview && (
          <>
            <ReviewActivity url="#" name="something" pullrequest_no={2} />
            <ReviewActivity url="#" name="something" pullrequest_no={2} />
            <ReviewActivity url="#" name="something" pullrequest_no={2} />
            <ReviewActivity url="#" name="something" pullrequest_no={2} />
          </>
        )}
      </div>
    </>
  );
};

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

const PullActivity = ({ url, name, contribution_no }) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <a href={url} className="text-blue-400 hover:underline mr-2 text-sm">
          {name}
        </a>
      </span>
      <span>
        <span className="bg-purple-700 px-1.5 rounded-full mr-1">
          {contribution_no}
        </span>
        merged
      </span>
    </div>
  );
};

const CreatedRepoActivity = ({
  name,
  url,
  language_name,
  language_color,
  createdAt,
}) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <span>
          <RepoIcon />
        </span>
        <a href={url} className="text-blue-400 hover:underline ml-2 text-sm">
          {name}
        </a>
      </span>
      <span className="flex items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 ring-1 ring-gray-600 mr-1"></span>
        <p>{language_name}</p>
      </span>
      <span>{createdAt}</span>
    </div>
  );
};

const ReviewActivity = ({ url, name, pullrequest_no }) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <a href={url} className="text-blue-400 hover:underline text-sm">
        {name}
      </a>
      <p>
        {pullrequest_no > 1
          ? `${pullrequest_no} pull requests`
          : `${pullrequest_no} pull request`}
      </p>
    </div>
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

const PullIcon = () => {
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
        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
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

const ReviewIcon = () => {
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
        d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};

export default Activity;
