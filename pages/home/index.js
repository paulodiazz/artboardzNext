import ArtFlowSection from "@/src/components/sections/HomeSections/ArtFlowSection";
import BenefitsSections from "@/src/components/sections/HomeSections/BenefitsSections";
import BillboardSection from "@/src/components/sections/HomeSections/BillboardSection";
import HeroSection from "@/src/components/sections/HomeSections/HeroSection";
import React, { useEffect } from "react";


const Home = () => {
  // useEffect(() => {
  //   document.querySelector("#main-layout").scrollTop = 0;
  // }, []);
  return (
    <>
      <HeroSection />
      <BillboardSection />
      <BenefitsSections />
      <ArtFlowSection />
    </>
  );
};

export default Home;
