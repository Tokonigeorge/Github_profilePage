import React from "react";
import { RepoIcon } from "../sections/overviewTab";

const CreatedRepoActivity = ({
  name,
  url,
  language_name,
  language_color,
  createdAt,
}) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <span className="flex items-center">
        <span>
          <RepoIcon />
        </span>
        <a href={url} className="text-blue-400 hover:underline ml-2 text-sm">
          {name}
        </a>
      </span>
      <span className="flex items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 ring-1 ring-gray-600 mr-1"></span>
        <p>{language_name}</p>
      </span>
      <span>{createdAt}</span>
    </div>
  );
};

export default CreatedRepoActivity;