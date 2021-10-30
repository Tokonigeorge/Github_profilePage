import React from "react";

const Topbar = () => {
  return (
    <div className="md:hidden px-4">
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/65655487?v=4"
          alt=""
          width="200"
          height="200"
          className="rounded-full h-auto w-1/7 ring-1 ring-gray-400 ring-opacity-50"
        />
        <p className="text-xl text-gray-200 text-opacity-60 font-light ml-4">
          Tokonigeorge
        </p>
      </div>
      <div className="rounded-md w-full ring-1 ring-gray-300 ring-opacity-20 flex items-center py-2 mt-8 px-2 text-gray-400 hover:text-blue-400">
        <EmojiStatus />
        <p className="text-xs inherit ml-2">Set status</p>
      </div>
      <button
        type="button"
        className="bg-gray-700 text-sm text-navIcon w-full py-2 font-medium rounded-md ring-1 ring-gray-300 ring-opacity-20"
      >
        Edit profile
      </button>
    </div>
  );
};

export const EmojiStatus = () => {
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
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
      ></path>
    </svg>
  );
};

export default Topbar;
