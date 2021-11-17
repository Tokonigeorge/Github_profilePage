import React from "react";
import Activity from "./activity";
import { useQuery, gql } from "@apollo/client";
import { convertToIsoString } from "../body";

const ActivityWrapper = ({ year, owner, month, click, index }) => {
  const activitiesquery = gql`
    query ($owner: String!, $from: DateTime!, $to: DateTime!) {
      repositoryOwner(login: $owner) {
        ... on User {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            totalRepositoriesWithContributedCommits
            totalRepositoryContributions
            totalPullRequestContributions
            totalRepositoriesWithContributedPullRequests
            totalPullRequestReviewContributions
            totalRepositoriesWithContributedPullRequestReviews
            totalIssueContributions
            totalRepositoriesWithContributedIssues
            commitContributionsByRepository(maxRepositories: 5) {
              repository {
                name
                url
                isPrivate
                description
                primaryLanguage {
                  name
                  color
                }
                forkCount
                isFork
                stargazerCount
              }
              contributions {
                totalCount
              }
            }
            pullRequestContributionsByRepository(maxRepositories: 5) {
              repository {
                name
                url
                isPrivate
                description
                primaryLanguage {
                  name
                  color
                }
                forkCount
                isFork
                stargazerCount
                pullRequests {
                  totalCount
                }
              }
              contributions {
                totalCount
              }
            }
            pullRequestReviewContributionsByRepository(maxRepositories: 5) {
              repository {
                name
                url
                isPrivate
                description
                primaryLanguage {
                  name
                  color
                }
                forkCount
                isFork
                stargazerCount
                pullRequests {
                  totalCount
                }
              }
              contributions {
                totalCount
              }
            }
            issueContributionsByRepository(maxRepositories: 5) {
              repository {
                name
                url
                isPrivate
                description
                primaryLanguage {
                  name
                  color
                }
                forkCount
                isFork
                stargazerCount
              }
              contributions {
                totalCount
              }
            }
            repositoryContributions(last: 5) {
              nodes {
                repository {
                  name
                  url
                  isPrivate
                  description
                  primaryLanguage {
                    name
                    color
                  }
                  forkCount
                  isFork
                  stargazerCount
                  createdAt
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(activitiesquery, {
    variables: {
      owner: owner,
      from: convertToIsoString(`${year}-${month ? month : "11"}-01`),
      to: convertToIsoString(`${year}-${month ? month : "11"}-30`),
    },
  });
  const _data = data?.repositoryOwner?.contributionsCollection;
  return loading && !click ? (
    <p>Loading</p>
  ) : (
    <>
      {index === 0 && <p className="text-navIcon">Contribution activity</p>}
      <Activity year={year} month={month} _data={_data} loading={loading} />
    </>
  );
};

export default ActivityWrapper;
