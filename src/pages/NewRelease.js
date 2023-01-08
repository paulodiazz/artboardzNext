import React, { useEffect } from "react";
import NewReleaseSection from "../components/sections/NewReleaseSections/NewReleaseSection";

const NewRelease = () => {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <>
      <NewReleaseSection />
    </>
  );
};

export default NewRelease;
