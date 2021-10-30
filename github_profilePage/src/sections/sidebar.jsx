import React from "react";
import { PersonIcon, StarIcon, EmojiStatus } from "./topbar";

const Sidebar = () => {
  return (
    <div className="w-72 pl-6">
      <div className="mt-10 mb-4 relative">
        <img
          src="https://avatars.githubusercontent.com/u/65655487?v=4"
          alt=""
          width="256"
          height="256"
          className="rounded-full ring-1 ring-gray-400 ring-opacity-50"
        />
        <div className="absolute top-3/4 left-3/4 bg-navbg rounded-full w-10 h-10 text-gray-400 hover:text-blue-400 ml-4">
          <span className="absolute top-1/4 left-1/4">
            <EmojiStatus />
          </span>
        </div>
      </div>
      <p className="text-xl text-gray-200 text-opacity-60 font-light">
        Tokonigeorge
      </p>
      <button
        type="button"
        className="bg-gray-500 bg-opacity-10 hover:bg-opacity-20 text-sm text-textColor w-full py-2 font-medium rounded-md 
        border border-gray-300 border-opacity-20 hover:border-opacity-50 mt-4"
      >
        Edit profile
      </button>
      <div className="flex items-center text-gray-200 text-opacity-60 text-sm mt-4">
        <a href="#" className="flex items-center hover:text-blue-400">
          <PersonIcon />
          <span className="ml-1 text-navIcon font-medium">2</span>
          <p className="ml-1">followers</p>
        </a>
        <p className="ml-1 text-navIcon font-medium">.</p>
        <a href="#" className="flex items-center hover:text-blue-400">
          <span className="ml-1 text-navIcon font-medium">2</span>
          <p className="ml-1">following</p>
        </a>
        <p className="ml-1 mr-1 text-navIcon font-medium">.</p>
        <span className="hover:text-blue-400">
          <StarIcon />
        </span>
        <span className="ml-1 text-navIcon font-medium">0</span>
      </div>
    </div>
  );
};

export default Sidebar;
