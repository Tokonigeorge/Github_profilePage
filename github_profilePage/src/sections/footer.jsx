import React from "react";
import { GithubIcon } from "./navbar";

const Footer = () => {
  return (
    <div className="mx-4 border-t border-gray-400 border-opacity-20 text-center my-12 font-medium md:flex md:items-center md:justify-between">
      <div className="text-xs text-blue-400 flex items-center justify-center flex-wrap mt-10 px-4 lg:mt-4 lg:px-0">
        <p className="text-gray-400 ml-3 lg:ml-0 font-normal">
          © 2021 GitHub, Inc.
        </p>
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
      <div className="hidden lg:block mt-4">
        <GithubIcon />
      </div>
      <div className="text-xs text-blue-400 mt-4 flex items-center justify-center flex-wrap px-4 lg:px-0">
        <a href="#" className="ml-3 lg:ml-5">
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
