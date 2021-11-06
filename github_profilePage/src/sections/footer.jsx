import React from "react";
import { GithubIcon } from "./navbar";

const Footer = () => {
  return (
    <div
      className="mx-4 sm2:mx-10 border-t border-gray-400 border-opacity-20 text-center mt-12 mb-14 font-medium lg:flex lg:items-center
     lg:justify-between lg:mx-0"
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
      <div className="hidden lg:block mt-8">
        <GithubIcon />
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

export default Footer;
