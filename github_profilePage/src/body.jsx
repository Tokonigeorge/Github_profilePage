import React from "react";
import Navbar from "./sections/navbar";
import Sidebar from "./sections/sidebar";
import Topbar from "./sections/topbar";
import OverviewTab from "./sections/overviewTab";
import OverviewBar from "./sections/overviewBar";
import ContributionsTab from "./sections/contributionsTab";
import Activity from "./sections/activity";
import YearButton from "./components/YearButton";
import Footer from "./sections/footer";

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
}) => {
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
        // status="These are just the before pictures"
      />
      <div className="hidden md:block">
        <OverviewTab repo_number="12" />
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
          <OverviewBar />
          <ContributionsTab />
          <div className="flex items-start">
            <div className="flex-auto">
              <Activity />
            </div>
            <div className="md:hidden lg:block lg:w-32">
              <YearButton />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="md:hidden">
        <OverviewTab repo_number="12" />
        <OverviewBar />
        <ContributionsTab />
        <Activity />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
