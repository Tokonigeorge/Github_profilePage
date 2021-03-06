import React, { useState } from "react";

const SignIn = ({ handleChange, loading, error }) => {
  //work out validation of input
  const [value, setValue] = useState("Tokonigeorge");
  const [empty, setEmpty] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) handleChange(value), setEmpty(false);
    else {
      setEmpty(true);
    }
    setValue(value);
  };

  return (
    <div className="flex flex-col items-center mt-8 mx-4 text-gray-800">
      <span>
        <GithubIconBig />
      </span>
      <p className="text-2xl font-extralight mt-6 mb-4">Sign in to Github</p>
      {error && (
        <p className="text-red-800 bg-red-100 bg-opacity-70 w-full sm2:w-80 mt-2 mb-4 text-sm rounded text-center py-2 ring-1 ring-red-300">
          Sign In Error. Please provide a valid username
        </p>
      )}
      <div className="bg-formBg ring-1 ring-defaultBorder ring-opacity-20 p-4 text-sm rounded w-full sm2:w-80">
        {/* using the handleSubmit on the form capture the click of the submit button and the enter on the input */}
        <form onSubmit={handleSubmit}>
          <p htmlFor="username" className="mb-2">
            Username
          </p>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className={`mb-4 w-full px-2 py-1.5 ring-1 rounded-md outline-none focus:ring-blue-500 ${
              empty
                ? "ring-red-400 ring-opacity-90"
                : "ring-defaultBorder ring-opacity-20"
            }`}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {empty && (
            <p className="text-sm pb-1.5 text-center">Input is empty abeg :/</p>
          )}
          {/* <p htmlFor="password" className="mb-2">
            Password
          </p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="yes"
            className="mb-6 w-full px-2 py-1.5 ring-1 ring-defaultBorder ring-opacity-20 rounded-md outline-none focus:ring-blue-500"
          /> */}
          <button
            type="submit"
            className={`w-full py-1.5 rounded text-navIcon font-medium ${
              loading ? "bg-green-100" : "bg-signInBg hover:bg-opacity-90"
            }`}
            // onClick={(e) => handleClick(e, value)}
            // onClick={setOwner(value)}
          >
            {loading ? "Signing in" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

const GithubIconBig = () => {
  return (
    <svg
      height="48"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="48"
      data-view-component="true"
      className="fill-current"
    >
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      ></path>
    </svg>
  );
};

export default SignIn;
