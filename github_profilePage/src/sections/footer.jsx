import React from "react";

const Footer = () => {
  return (
    <div className="mx-4 border-t border-gray-400 border-opacity-20 text-center my-12 font-medium">
      <div className="text-xs text-blue-400 flex items-center justify-center flex-wrap mt-10 px-4">
        <p className="text-gray-400 ml-3 font-normal">© 2021 GitHub, Inc.</p>
        <a href="#" className="ml-3">
          Terms
        </a>
        <a href="#" className="ml-3">
          Privacy
        </a>
        <a href="#" className="ml-3">
          Security
        </a>
        <a href="#" className="ml-3">
          Status
        </a>
        <a href="#" className="ml-3">
          Docs
        </a>
      </div>
      <div className="text-xs text-blue-400 mt-4 flex items-center justify-center flex-wrap px-4">
        <a href="#" className="ml-3">
          Contact GitHub
        </a>
        <a href="#" className="ml-3">
          Pricing
        </a>
        <a href="#" className="ml-3">
          API
        </a>
        <a href="#" className="ml-3">
          Training
        </a>
        <a href="#" className="ml-3">
          Blog
        </a>
        <a href="#" className="ml-3">
          About
        </a>
      </div>
    </div>
  );
};

export default Footer;
