import React from "react";
import { GithubIcon } from "./sections/navbar";

const SignIn = () => {
  return (
    <div>
      <span className="text-black">
        <GithubIcon />
      </span>
      <p className="text-2xl font-extralight">Sign in to Github</p>
      <div>
        <form>
          <p htmlFor="username/email">Username or email address</p>
          <input
            type="text"
            name="username/email"
            placeholder="Username or email address"
          />
          <p htmlFor="password">Password</p>
          <input type="password" name="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
