import React from "react";

const Topbar = ({ github_name, name, status }) => {
  return (
    <div className="md:hidden px-4 mt-3">
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/65655487?v=4"
          alt=""
          width="200"
          height="200"
          className="rounded-full h-auto w-1/7 ring-1 ring-gray-400 ring-opacity-50"
        />
        <div>
          {name && (
            <p className="text-2xl text-navIcon font-medium ml-4">{name}</p>
          )}
          {github_name && (
            <p className="text-xl text-gray-200 text-opacity-60 font-light ml-4">
              {github_name}
            </p>
          )}
        </div>
      </div>
      {status ? (
        <p className="text-xs text-navIcon mt-10">{status}</p>
      ) : (
        <div className="rounded-md w-full ring-1 ring-defaultBorder flex items-center py-2 mt-8 px-2 text-gray-400 hover:text-blue-400">
          <EmojiStatus />
          <p className="text-xs inherit ml-2">Set status</p>
        </div>
      )}
      <button
        type="button"
        className="bg-gray-500 bg-opacity-10 hover:bg-opacity-20 text-sm text-textColor w-full py-1.5 font-medium rounded-md 
        border border-defaultBorder hover:border-opacity-50 hover:border-gray-300 mt-2"
      >
        Edit profile
      </button>
      <div className="flex items-center text-gray-200 text-opacity-60 text-sm mt-6">
        <a href="#" className="flex items-center hover:text-blue-400">
          <PersonIcon />
          <span className="ml-1 text-navIcon font-medium">2</span>
          <p className="ml-1">followers</p>
        </a>
        <span className="ml-1 text-navIcon font-medium w-0.5 h-0.5 bg-navIcon rounded-full"></span>
        <a href="#" className="flex items-center hover:text-blue-400">
          <span className="ml-1 text-navIcon font-medium">2</span>
          <p className="ml-1">following</p>
        </a>
        <span className="ml-1 text-navIcon font-medium w-0.5 h-0.5 bg-navIcon rounded-full"></span>
        <span className="ml-1 hover:text-blue-400">
          <StarIcon />
        </span>
        <span className="ml-1 text-navIcon font-medium">0</span>
      </div>
    </div>
  );
};

export const EmojiStatus = () => {
  return (
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
      className="fill-current "
    >
      <path
        fillRule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
      ></path>
    </svg>
  );
};

export const PersonIcon = () => {
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
        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
      ></path>
    </svg>
  );
};

export const StarIcon = () => {
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
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
  );
};

export default Topbar;
