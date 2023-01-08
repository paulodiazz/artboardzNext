import React from "react";
import LeaderBoardSection from "../components/sections/LeaderBoardSections/LeaderBoardSection";

const LeaderBoardPage = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        Leaderboardz
      </h1>
      <LeaderBoardSection />
    </>
  );
};

export default LeaderBoardPage;
