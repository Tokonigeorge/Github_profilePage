import React, { useState } from "react";
import Search from "../components/Search";

function HamburgerMenu() {
  const menuItems = [
    "Dashboard",
    "Pull requests",
    "Issues",
    "MarketPlace",
    "Explore",
    "Codespaces",
    "Sponsors",
    "Settings",
  ];
  return (
    <div className="px-4 bg-navbg">
      {Search()}
      <div className="pt-4">
        {menuItems.map((i, indx) => (
          <MenuItems text={i} key={indx} />
        ))}
        <MenuItems
          imageSrc="https://avatars.githubusercontent.com/u/65655487?v=4"
          text="TokoniGeorge"
        />
        <MenuItems Icon={SignoutIcon} text="Sign out" />
      </div>
    </div>
  );
}

const MenuItems = ({ text, imageSrc, Icon }) => {
  return (
    <a
      href="#"
      className="text-navIcon text-sm font-medium hover:text-gray-300"
    >
      <div className="py-2 border-t border-gray-600 border-solid border-opacity-40 flex items-center">
        {imageSrc && (
          <span>
            <img
              src={imageSrc}
              alt=""
              width="20"
              height="20"
              className="rounded-full ring-1 ring-gray-400 ring-opacity-50 mr-1"
            />
          </span>
        )}
        {Icon && (
          <span className="mr-1">
            <Icon />
          </span>
        )}
        <p className="hover:text-gray-300"> {text}</p>
      </div>
    </a>
  );
};

export const SignoutIcon = () => {
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
        d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"
      ></path>
    </svg>
  );
};

export default HamburgerMenu;
