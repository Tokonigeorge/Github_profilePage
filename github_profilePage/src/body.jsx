import React, { useState } from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";
import OverviewTab from "./sections/overviewTab";
import OverviewBar from "./sections/overviewBar";
import ContributionsTab from "./sections/contributionsTab";
import Activity from "./sections/activity";
import ActivityWrapper from "./sections/activityWrapper";
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
  let month;
  const getMonth = () => {
    month = new Date().getMonth() + 1;
    return month;
  };
  getMonth();

  const [count, setCount] = useState(1);
  const [_months, setMonth] = useState([`${month}`]);
  const [click, setClick] = useState(false);
  const [profileShow, setProfileShow] = useState(false);

  //set the first active item to be the topyear and onclick change the value to i, if it matches set active to true and style
  // const [click, setClick] = useState(from);
  const handleClick = (i) => {
    setFrom(i);
  };

  const handleCount = () => {
    setClick(true);
    setCount((prevState) => prevState + 1);
    setMonth([..._months, `${month - count}`]);
  };

  // const handleNavProfileVis = (bool) => {
  //   console.log("is in body");
  //   setProfileShow(bool);
  // };

  const contributionsquery = gql`
    query ($owner: String!, $from: DateTime!, $to: DateTime!) {
      repositoryOwner(login: $owner) {
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
    <div className="bg-navbg overflow-x-hidden sm2:bg-bodyBg overscroll-x-none">
      <Navbar avatarUrl={avatarUrl} />
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
        <OverviewTab
          repo_number={repositories?.totalCount}
          profileShow={profileShow}
          avatarUrl={avatarUrl}
          github_name={login}
        />
      </div>
      <div className="hidden md:flex md:items-start">
        <Sidebar
          github_name={login}
          name={name}
          location={location}
          twitter={twitterUsername}
          // highlights="PRO"
          organization={organizations}
          followers={followers?.totalCount}
          following={following?.totalCount}
          status={status?.message}
          starredRepositories={starredRepositories?.totalCount}
          avatarUrl={avatarUrl}
          handleNavProfileVis={setProfileShow}
        />
        <div className="flex-auto">
          {pinnedItems.totalCount > 0 ? (
            <OverviewBar pinnedItems={pinnedItems} />
          ) : (
            <OverviewBar pinnedItems={repositories} isrepo={true} />
          )}

          <div className="flex-auto">
            <ContributionsTab
              contributions={
                data?.repositoryOwner?.contributionsCollection
                  ?.contributionCalendar
              }
              year={from}
              error={error}
            />
          </div>
          <div className="flex items-start">
            <div className="px-4 mt-6 text-gray-400 md:pl-6 md:pr-6 flex-auto">
              {_months?.map((i, indx) => (
                <ActivityWrapper
                  year={from}
                  owner={owner}
                  month={i}
                  click={click}
                  index={indx}
                  key={indx}
                />
              ))}{" "}
              <button
                type="button"
                className="bg-transparent text-xs text-blue-400 w-full py-2.5 font-medium rounded-md 
        border border-gray-300 border-opacity-20 mt-6 hover:bg-gray-500 hover:bg-opacity-10"
                onClick={() => handleCount()}
              >
                Show more activity
              </button>
              <p className="text-xs text-gray-400 mt-6">
                Seeing something unexpected? Take a look at the{" "}
                <a href="#" className="text-blue-400">
                  Github Profile guide.
                </a>
              </p>
            </div>

            {/* <Activity
                year={from}
                owner={owner}
                // month={i}
                handleCount={handleCount}
              /> */}
            {/* <Activity year={from} owner={owner} /> */}

            <div className={`md:hidden lg:block lg:w-32 mr-12 mt-4`}>
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
        <OverviewTab
          repo_number={repositories?.totalCount}
          avatarUrl={avatarUrl}
          github_name={login}
        />
        {pinnedItems.totalCount > 0 ? (
          <OverviewBar pinnedItems={pinnedItems} />
        ) : (
          <OverviewBar pinnedItems={repositories} isrepo={true} />
        )}
        <ContributionsTab
          contributions={
            data?.repositoryOwner?.contributionsCollection?.contributionCalendar
          }
          year={from}
          error={error}
        />
        <div className="px-4 mt-6 text-gray-400 md:pl-6 md:pr-6 flex-auto">
          {_months?.map((i, indx) => (
            <ActivityWrapper
              year={from}
              owner={owner}
              month={i}
              click={click}
              index={indx}
              key={indx}
            />
          ))}{" "}
          <button
            type="button"
            className="bg-transparent text-xs text-blue-400 w-full py-2.5 font-medium rounded-md 
        border border-gray-300 border-opacity-20 mt-6 hover:bg-gray-500 hover:bg-opacity-10"
            onClick={() => handleCount()}
          >
            Show more activity
          </button>
          <p className="text-xs text-gray-400 mt-6">
            Seeing something unexpected? Take a look at the{" "}
            <a href="#" className="text-blue-400">
              Github Profile guide.
            </a>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const convertToIsoString = (arg) => {
  return new Date(arg).toISOString();
};

export default Body;
