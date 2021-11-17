import React, { useState } from "react";
import CommitActivity from "./CommitActivity";
import PullActivity from "./PullActivity";
import CreatedRepoActivity from "./CreatedRepoActivity";
import ReviewActivity from "./ReviewActivity";
import IssueActivity from "./IssueActivity";

const Activities = ({
  Icon,
  contribution_no,
  repo_no,
  isCommit,
  isPull,
  isCreated,
  isReview,
  isIssue,
  commitActivity,
  pullActivity,
  createdActivity,
  reviewActivity,
  issueActivity,
}) => {
  const moreThanOne = (number, sing, plural) => {
    return number > 1 ? `${number} ${plural}` : `${number} ${sing}`;
  };
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-4 ml-5"></div>
      <div className="flex items-center justify-between sm2:mt-px pl-1.5">
        <div className="flex items-center">
          <span className="rounded-full p-1.5 bg-gray-400 bg-opacity-20">
            {/* <LockIcon /> */} <Icon />
          </span>
          {isCommit && (
            <p className="ml-2">
              Created {moreThanOne(contribution_no, "commit", "commits")} in{" "}
              {moreThanOne(repo_no, "repository", "repositories")}
            </p>
          )}
          {isPull && (
            <p className="ml-2">
              Opened{" "}
              {moreThanOne(contribution_no, "pull request", "pull requests")} in{" "}
              {moreThanOne(repo_no, "repository", "repositories")}
            </p>
          )}
          {isIssue && (
            <p className="ml-2">
              Opened {moreThanOne(contribution_no, "Issue", "Issues")} in{" "}
              {moreThanOne(repo_no, "repository", "repositories")}
            </p>
          )}
          {isCreated && (
            <p className="ml-2">
              Created{" "}
              {moreThanOne(contribution_no, "repository", "repositories")}
            </p>
          )}
          {isReview && (
            <p className="ml-2">
              Opened{" "}
              {moreThanOne(contribution_no, "pull request", "pull requests")} in{" "}
              {moreThanOne(repo_no, "repository", "repositories")}
            </p>
          )}
        </div>
        <span onClick={() => setOpen(!open)} className="cursor-pointer">
          <ToggleIcon />
        </span>
      </div>
      <div className="border-l-2 border-gray-400 border-opacity-20 h-auto pb-4 ml-5">
        {open && isCommit && (
          <>
            {commitActivity?.map((i, indx) => (
              <CommitActivity
                url={i?.repository.url}
                name={i?.repository.name}
                isPrivate={i?.repository.isPrivate}
                des={i?.repository.description}
                forkCount={i?.repository.forkCount}
                stargazerCount={i?.repository.stargazerCount}
                language={i?.repository.primaryLanguage}
                number={i?.contributions.totalCount}
                key={indx}
              />
            ))}
          </>
        )}
        {open && isPull && (
          <>
            {pullActivity?.map((i, indx) => (
              <PullActivity
                url={i?.repository.url}
                name={i?.repository.name}
                isPrivate={i?.repository.isPrivate}
                des={i?.repository.description}
                forkCount={i?.repository.forkCount}
                stargazerCount={i?.repository.stargazerCount}
                language={i?.repository.primaryLanguage}
                contribution_no={i?.contributions.totalCount}
                key={indx}
              />
            ))}
          </>
        )}
        {open && isIssue && (
          <>
            {issueActivity?.map((i, indx) => (
              <IssueActivity
                url={i?.repository.url}
                name={i?.repository.name}
                isPrivate={i?.repository.isPrivate}
                des={i?.repository.description}
                forkCount={i?.repository.forkCount}
                stargazerCount={i?.repository.stargazerCount}
                language={i?.repository.primaryLanguage}
                contribution_no={i?.contributions.totalCount}
                key={indx}
              />
            ))}
          </>
        )}
        {open && isCreated && (
          <>
            {createdActivity?.nodes?.map((i, indx) => (
              <CreatedRepoActivity
                url={i?.repository.url}
                name={i?.repository.name}
                isPrivate={i?.repository.isPrivate}
                des={i?.repository.description}
                forkCount={i?.repository.forkCount}
                stargazerCount={i?.repository.stargazerCount}
                language={i?.repository.primaryLanguage}
                createdAt={i?.repository.createdAt}
                key={indx}
              />
            ))}
          </>
        )}
        {open && isReview && (
          <>
            {reviewActivity?.map((i, indx) => (
              <ReviewActivity
                url={i?.repository.url}
                name={i?.repository.name}
                isPrivate={i?.repository.isPrivate}
                des={i?.repository.description}
                forkCount={i?.repository.forkCount}
                stargazerCount={i?.repository.stargazerCount}
                language={i?.repository.primaryLanguage}
                pullrequest_no={i?.contributions.totalCount}
                key={indx}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

const ToggleIcon = () => {
  return (
    <svg
      className="fill-current"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path>
    </svg>
  );
};

export default Activities;
