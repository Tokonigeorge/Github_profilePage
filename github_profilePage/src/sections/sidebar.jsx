import React, { useState } from "react";
import { PersonIcon, StarIcon, EmojiStatus } from "./topbar";

const Sidebar = ({
  github_name,
  name,
  location,
  twitter,
  status,
  highlights,
  organization,
  followers,
  following,
  starredRepositories,
  avatarUrl,
}) => {
  const [hover, setHover] = useState(false);
  //lg pl-20
  return (
    <div className="w-72 md:pl-6 lg:pl-8 lg:w-80 flex-none">
      <div className="-mt-7 mb-4 relative">
        <img
          src={
            avatarUrl || "https://avatars.githubusercontent.com/u/65655487?v=4"
          }
          alt=""
          width="340px"
          height="340px"
          className="rounded-full ring-1 ring-gray-400 ring-opacity-80"
        />
        <div
          className={`absolute top-3/4 lg:left-56 left-3/4 bg-navbg rounded-full h-9 text-gray-400 ml-4 ring-1 
        ring-gray-400 ring-opacity-30 ${
          hover ? (status ? "w-44 shadow" : "w-24 shadow") : "w-9"
        }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span
            className={`absolute top-1/4 flex items-center left-1/4 mt-px hover:text-blue-400 ${
              hover ? (status ? "-ml-8" : "-ml-4") : "ml-px"
            }`}
          >
            <EmojiStatus />
            {hover && !status && <p className="text-xs ml-3">Set status</p>}
            {status && hover && <p className="text-xs ml-3">{status}</p>}
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
        className="bg-gray-500 bg-opacity-10 hover:bg-opacity-20 text-sm text-textColor w-full py-1.5 font-medium rounded-md 
        border border-defaultBorder hover:border-opacity-50 hover:border-gray-300 mt-4"
      >
        Edit profile
      </button>
      <div className="flex items-center text-gray-200 text-opacity-60 text-sm mt-4">
        <a href="#" className="flex items-center hover:text-blue-400">
          <PersonIcon />
          <span className="ml-1 text-navIcon font-medium">{followers}</span>
          <p className="ml-1">{followers === 1 ? "follower" : "followers"}</p>
        </a>
        <span className="ml-1 text-navIcon font-medium w-0.5 h-0.5 bg-navIcon rounded-full"></span>
        <a href="#" className="flex items-center hover:text-blue-400">
          <span className="ml-1 text-navIcon font-medium">{following}</span>
          <p className="ml-1">following</p>
        </a>
        <span className="ml-1 mr-1 text-navIcon font-medium w-0.5 h-0.5 bg-navIcon rounded-full"></span>
        <span className="hover:text-blue-400">
          <StarIcon />
        </span>
        <span className="ml-1 text-navIcon font-medium">
          {starredRepositories}
        </span>
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
      {highlights && (
        <div className="mt-4 border-t border-gray-400 border-opacity-20 ">
          <p className="pt-4 text-gray-200 text-opacity-90 font-medium">
            Highlights
          </p>
          <div className="flex items-center mt-2">
            <span className="text-gray-400">
              <StarIcon />
            </span>
            <span className="ml-1 ring-1 ring-purple-500 py-0.5 px-2 rounded-full text-purple-500 text-xs font-medium">
              {highlights}
            </span>
          </div>
        </div>
      )}
      {organization && (
        <div className="mt-4 border-t border-gray-400 border-opacity-20 ">
          <p className="pt-4 text-gray-200 text-opacity-90 font-medium">
            Organizations
          </p>
          <div className="flex items-center mt-2">
            {organization.nodes.map((i) => (
              <img
                src={
                  i.avatarUrl ||
                  `https://avatars.githubusercontent.com/u/89197363?s=64&amp;v=4`
                }
                alt={i.name}
                key={i}
                size="32"
                height="32"
                width="32"
                className="ring-1 ring-gray-900 rounded-md"
              ></img>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const LocationIcon = () => {
  return (
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
      className="fill-current"
    >
      <path
        fillRule="evenodd"
        fill="currentColor"
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
