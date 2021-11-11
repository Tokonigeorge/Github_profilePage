import React from "react";

const ReviewActivity = ({ url, name, pullrequest_no }) => {
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5">
      <a href={url} className="text-blue-400 hover:underline text-sm">
        {name}
      </a>
      <p>
        {pullrequest_no > 1
          ? `${pullrequest_no} pull requests`
          : `${pullrequest_no} pull request`}
      </p>
    </div>
  );
};

export default ReviewActivity;
