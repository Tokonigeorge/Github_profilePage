import React from "react";
import { RepoIcon } from "./overviewTab";
import Activities from "../components/Activities";

import { getMonth } from "../date";

const Activity = ({ year, month, _data, loading, error }) => {
  return (
    !loading && (
      <>
        <div className="mt-4 flex items-center mb-2">
          <p className="text-navIcon text-xs font-medium pl-2">
            {getMonth(`${year}-${month ? month : "11"}-01`, "long")}{" "}
            <span className="text-gray-400">{year}</span>
          </p>
          <span className="border-t border-gray-400 border-opacity-20 ml-4 flex-auto"></span>
        </div>
        {_data?.totalCommitContributions > 0 &&
          _data?.totalPullRequestContributions > 0 &&
          _data?.totalRepositoryContributions > 0 &&
          _data?.totalPullRequestReviewContributions > 0 &&
          _data?.totalIssueContributions > 0 && (
            <p className="text-navIcon text-xs text-center">
              No activities for{" "}
              {getMonth(`${year}-${month ? month : "11"}-01`, "long")}
            </p>
          )}
        {error && (
          <p className="text-navIcon text-xs text-center">
            Error fetching activities for {""}{" "}
            {getMonth(`${year}-${month ? month : "11"}-01`, "long")}
          </p>
        )}
        {_data?.totalCommitContributions > 0 && (
          <Activities
            Icon={CommitIcon}
            contribution_no={_data?.totalCommitContributions}
            repo_no={_data?.totalRepositoriesWithContributedCommits}
            isCommit={true}
            commitActivity={_data?.commitContributionsByRepository}
          />
        )}
        {_data?.totalPullRequestContributions > 0 && (
          <Activities
            Icon={PullIcon}
            contribution_no={_data?.totalPullRequestContributions}
            repo_no={_data?.totalRepositoriesWithContributedPullRequests}
            isPull={true}
            pullActivity={_data?.pullRequestContributionsByRepository}
          />
        )}
        {_data?.totalRepositoryContributions > 0 && (
          <Activities
            Icon={RepoIcon}
            contribution_no={_data?.totalRepositoryContributions}
            isCreated={true}
            createdActivity={_data.repositoryContributions}
          />
        )}
        {_data?.totalPullRequestReviewContributions > 0 && (
          <Activities
            Icon={ReviewIcon}
            contribution_no={_data?.totalPullRequestReviewContributions}
            repo_no={_data?.totalRepositoriesWithContributedPullRequestReviews}
            isReview={true}
            reviewActivity={_data?.pullRequestReviewContributionsByRepository}
          />
        )}
        {_data?.totalIssueContributions > 0 && (
          <Activities
            Icon={IssueIcon}
            contribution_no={_data?.totalIssueContributions}
            repo_no={_data?.totalRepositoriesWithContributedIssues}
            isIssue={true}
            issueActivity={_data?.issueContributionsByRepository}
          />
        )}
      </>
    )
  );
};

export const CommitIcon = () => {
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
        d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"
      ></path>
    </svg>
  );
};

const PullIcon = () => {
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
        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
      ></path>
    </svg>
  );
};

const ReviewIcon = () => {
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
        d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};

const IssueIcon = () => {
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
        d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"
      ></path>
    </svg>
  );
};

export default Activity;
