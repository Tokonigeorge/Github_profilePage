import React, { useState } from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";
import OverviewTab from "./sections/overviewTab";
import OverviewBar from "./sections/overviewBar";
import ContributionsTab from "./sections/contributionsTab";
import Activity from "./sections/activity";
import YearButton from "./components/YearButton";
import Footer from "./sections/footer";
import { useQuery, gql } from "@apollo/client";

const Body = ({
  login,
  name,
  avatarUrl,
  location,
  twitterUsername,
  organizations,
  followers,
  following,
  status,
  starredRepositories,
  repositories,
  pinnedItems,
  contributionsCollection,
  owner,
}) => {
  const [from, setFrom] = useState(
    contributionsCollection?.contributionYears?.[0]
  );
  //set the first active item to be the topyear and onclick change the value to i, if it matches set active to true and style
  // const [click, setClick] = useState(from);
  const handleClick = (i) => {
    setFrom(i);
  };

  const convertToIsoString = (arg) => {
    return new Date(arg).toISOString();
  };

  const contributionsquery = gql`
    query ($owner: String!, $from: DateTime!, $to: DateTime!) {
      repositoryOwner(login: $owner) {
        login
        ... on User {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(contributionsquery, {
    variables: {
      owner: owner,
      from: convertToIsoString(`${from}-01-01`),
      to: convertToIsoString(`${from}-12-31`),
    },
  });

  return (
    <div className="bg-navbg h-screen overflow-x-hidden sm2:bg-bodyBg overscroll-x-none">
      <Navbar />
      <Topbar
        github_name={login}
        name={name}
        status={status?.message}
        followers={followers?.totalCount}
        following={following?.totalCount}
        starredRepositories={starredRepositories?.totalCount}
        avatarUrl={avatarUrl}
      />
      <div className="hidden md:block">
        <OverviewTab repo_number={repositories?.totalCount} />
      </div>
      <div className="hidden md:flex md:items-start">
        <Sidebar
          github_name={login}
          name={name}
          location={location}
          twitter={twitterUsername}
          highlights="PRO"
          organization={organizations}
          followers={followers?.totalCount}
          following={following?.totalCount}
          status={status?.message}
          starredRepositories={starredRepositories?.totalCount}
          avatarUrl={avatarUrl}
        />
        <div className="flex-auto">
          <OverviewBar pinnedItems={pinnedItems} />
          <div className="flex items-start">
            <div className="flex-auto">
              <ContributionsTab data={data} />
              {loading ? (
                <p>Loading</p>
              ) : error ? (
                <p>Error, heee</p>
              ) : (
                <Activity />
              )}
            </div>
            <div className="md:hidden lg:block lg:w-32 mr-16 mt-4">
              {contributionsCollection?.contributionYears?.map((i, indx) => (
                <YearButton
                  key={indx}
                  year={i}
                  active={from === i}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="md:hidden">
        <OverviewTab repo_number={repositories?.totalCount} />
        <OverviewBar pinnedItems={pinnedItems} />
        <ContributionsTab />
        <Activity />
        <Footer />
      </div>
    </div>
  );
};

// const ContributionQuery = () => {

//   const contributionsquery =
//   const { loading, error, data } = useQuery(contributionsquery, {
//     variables: { owner, From, to },
//   });

// //convert from to ISO string and to too
//   // if (error && topYear) return <p>Error</p>
//   return (
//     <>

//     </>
//   )
// }

export default Body;
