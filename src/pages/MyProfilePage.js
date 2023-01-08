import React from "react";
import MyProfileSection from "../components/sections/MyProfileSections/MyProfileSection";
import MainProfile from "../components/User/MainProfile";

const MyProfilePage = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        My Profile
      </h1>
      <MyProfileSection />
    </>
  );
};

export default MyProfilePage;
