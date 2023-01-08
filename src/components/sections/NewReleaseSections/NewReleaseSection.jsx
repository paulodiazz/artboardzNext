import React from "react";
import NewReleaseList from "../../New Release/NewReleaseList";

const NewReleaseSection = () => {
  return (
    <section className="p-5 text-white font-Montserrat">
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center mb-6">
        New Releases
      </h1>
      <NewReleaseList />
    </section>
  );
};

export default NewReleaseSection;
