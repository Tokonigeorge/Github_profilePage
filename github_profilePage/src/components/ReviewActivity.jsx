import React, { useState } from "react";
import HoverRepoCard from "./HoverRepoCard";

const ReviewActivity = ({
  url,
  name,
  pullrequest_no,
  isPrivate,
  des,
  forkCount,
  stargazerCount,
  language,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex items-center justify-between text-xs pt-1 mt-px pl-5 relative">
      <a
        href={url}
        className="text-blue-400 hover:underline text-sm"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {name}
      </a>
      <p>
        {pullrequest_no > 1
          ? `${pullrequest_no} pull requests`
          : `${pullrequest_no} pull request`}
      </p>
      {hover && (
        <div className="absolute -top-24 left-10">
          <HoverRepoCard
            name={name}
            isPrivate={isPrivate}
            des={des}
            forkCount={forkCount}
            stargazerCount={stargazerCount}
            language={language}
            url={url}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewActivity;
