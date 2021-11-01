import React from "react";
import { PersonIcon, StarIcon, EmojiStatus } from "./topbar";

const Sidebar = ({ github_name, name, location, twitter }) => {
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
      <div>
        {name && (
          <p className="text-2xl text-gray-200 text-opacity-80 font-medium">
            {name}
          </p>
        )}
        {github_name && (
          <p className="text-xl text-gray-200 text-opacity-60 font-light">
            {github_name}
          </p>
        )}
      </div>
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
      <div className="mt-6">
        {location && (
          <div className="flex items-center text-gray-200 text-opacity-60 text-sm mb-1">
            <LocationIcon />
            <p className="text-gray-200 text-opacity-90 ml-1">{location}</p>
          </div>
        )}
        {twitter && (
          <div className="flex items-center text-gray-200 text-opacity-60 text-sm">
            <TwitterIcon />
            <a href="#" className="text-gray-200 text-opacity-90 ml-1">
              {twitter}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const LocationIcon = () => {
  return (
    <svg
      class="octicon octicon-location"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
      className="fill-current"
    >
      <path
        fillRule="evenodd"
        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};

export const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 273.5 222.3"
      role="img"
      width="16"
      height="13"
      className="fill-current"
    >
      <path
        d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Sidebar;
