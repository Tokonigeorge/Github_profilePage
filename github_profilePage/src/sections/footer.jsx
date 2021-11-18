import React from "react";

const Footer = () => {
  return (
    <div
      className="mx-4 sm2:mx-10 border-t border-gray-400 border-opacity-20 text-center mt-12 pb-12 font-medium lg:flex lg:items-center
     lg:justify-between lg:mx-0 "
    >
      <div className="text-xs text-blue-400 flex items-center justify-center flex-wrap mt-10 lg:mt-8 lg:px-0">
        <p className="text-gray-400 lg:ml-0 font-normal">© 2021 GitHub, Inc.</p>
        <a href="#" className="ml-3 lg:ml-5">
          Terms
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Privacy
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Security
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Status
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Docs
        </a>
      </div>
      <div className="hidden lg:block mt-8 hover:text-navIcon text-gray-600 cursor-pointer">
        <SmallGithubIcon />
      </div>
      <div className="text-xs text-blue-400 mt-3 flex items-center justify-center flex-wrap lg:px-0 lg:mt-8">
        <a href="#" className="lg:ml-0">
          Contact GitHub
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Pricing
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          API
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Training
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          Blog
        </a>
        <a href="#" className="ml-3 lg:ml-5">
          About
        </a>
      </div>
    </div>
  );
};

export const SmallGithubIcon = () => {
  return (
    <svg
      height="24"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="24"
      data-view-component="true"
      className="fill-current"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  );
};

export default Footer;
