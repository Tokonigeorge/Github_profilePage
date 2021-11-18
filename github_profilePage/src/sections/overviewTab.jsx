import React, { useEffect, useRef, useState } from "react";
import "../utils/styles.css";

const OverviewTab = ({ repo_number, avatarUrl, github_name }) => {
  const [visible, setVisible] = useState(false);

  // const handleLoad = () => {
  //   const { offsetTop } = overviewRef?.current || {};
  //   setOffset(offsetTop ? offsetTop : null);
  // };
  const onScroll = (e) => {
    if (
      document.documentElement.scrollTop >= 400 ||
      document.body.scrollTop >= 400
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  // ${
  //      fixed ? "fixed top-0 pt-5 bg-bodyBg w-screen" : "pt-7"
  //    }overflow-x-auto
  return (
    <div
      className={`text-sm bg-navbg  md:bg-bodyBg text-navIcon flex items-center pl-4 border-b border-gray-400 border-opacity-20 pb-2.5
     pt-5 mt-5 md:pt-3 md:mt-4 overflow-x-auto
     
     `}
    >
      <div
        className={`${
          visible ? "visible z-30" : "invisible"
        } md:flex md:items-center hidden  md:w-72 md:pl-6 lg:pl-8 lg:w-80 lg2:w-88 lg2:pl-16 `}
      >
        <img
          src={
            avatarUrl || "https://avatars.githubusercontent.com/u/65655487?v=4"
          }
          alt=""
          width="32px"
          height="32px"
          className="rounded-full ring-1 ring-gray-700 ring-opacity-80 mr-2"
        />
        {github_name && (
          <p className="text-sm text-gray-200 text-opacity-80 font-medium">
            {github_name}
          </p>
        )}
      </div>
      <div className="flex items-center md:ml-2">
        <a
          href="#"
          className="pr-3 pl-4 md:pr-4 md:pl-4 flex items-center link active"
        >
          <span className="hidden sm2:block">
            <OverviewIcon />
          </span>
          <span className="ml-2">Overview</span>
        </a>
        <a
          href="#"
          className="pr-3 pl-3 md:pr-4 md:pl-4 flex items-center link"
        >
          <span className="hidden sm2:block text-gray-600 text-opacity-80">
            <RepoIcon />
          </span>
          <span className="ml-2">Repositories</span>
          <span className="w-6 h-5 bg-gray-500 bg-opacity-50 rounded-full ml-2 px-1.5 py-px text-xs">
            {repo_number}
          </span>
        </a>
        <a
          href="#"
          className="pr-3 pl-3 md:pr-4 md:pl-4 flex items-center link"
        >
          <span className="hidden sm2:block text-gray-600 text-opacity-80">
            <ProjectIocn />
          </span>
          <span className="ml-2">Projects</span>
        </a>
        <a
          href="#"
          className="flex items-center pr-3 pl-3 md:pr-4 md:pl-4 link"
        >
          <span className="hidden sm2:block text-gray-600 text-opacity-80">
            <PackageIcon />
          </span>
          <span className="ml-2">Packages</span>
        </a>
      </div>
    </div>
  );
};

export const OverviewIcon = () => {
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
        d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
      ></path>
    </svg>
  );
};

export const RepoIcon = () => {
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
        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
      ></path>
    </svg>
  );
};

export const ProjectIocn = () => {
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
        d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
      ></path>
    </svg>
  );
};

export const PackageIcon = () => {
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
        d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
      ></path>
    </svg>
  );
};
export default OverviewTab;
