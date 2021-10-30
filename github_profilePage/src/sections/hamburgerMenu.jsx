import React, { useState } from "react";

function HamburgerMenu() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

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
  const Search = () => {
    return (
      <div className="flex justify-between items-center bg-searchbg py-1 ring-1 ring-gray-600 rounded ring-opacity-40 w-full">
        <input
          type="text"
          placeholder="Search or jump to..."
          value={value}
          className={`bg-transparent text-sm outline-none text-navIcon placeholder-gray-300 ml-3 ${
            value.length > 0 ? "w-full mr-3" : "w-4/5"
          }`}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
        {!focus && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            aria-hidden="true"
            className="mr-1"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        )}
      </div>
    );
  };

  const MenuItems = ({ text }) => {
    return (
      <a href="#" className="text-navIcon text-sm font-medium">
        <div className="py-2 border-t border-gray-600 border-solid border-opacity-40">
          {text}
        </div>
      </a>
    );
  };
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

export default HamburgerMenu;
