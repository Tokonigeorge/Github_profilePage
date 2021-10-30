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
    "Tokonigeorge",
    "Sign out",
  ];
  return (
    <div className="px-4">
      {Search()}
      <div className="pt-4">
        {menuItems.map((i, indx) => (
          <MenuItems text={i} key={indx} />
        ))}
      </div>
    </div>
  );
}

const MenuItems = ({ text }) => {
  return (
    <a href="#" className="text-navIcon text-sm font-medium">
      <div className="py-2 border-t border-gray-600 border-solid border-opacity-40">
        {text}
      </div>
    </a>
  );
};

export default HamburgerMenu;
