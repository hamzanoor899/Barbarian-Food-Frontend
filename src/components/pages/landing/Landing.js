import React, { Fragment } from "react";
import { FragmentSection } from "./component/FragmentSection";
import { FrindlyTeamSection } from "./component/FrindlyTeamSection";
import { PartyCandleSection } from "./component/PartyCandleSection";
import { OurServicesSection } from "./component/OurServicesSection";
import { OurDealSection } from "./component/OurDealSection";
import { PersonsSection } from "./component/PersonsSection";
import { Celebrate } from "./component/Celebrate";
import { GetStartedSection } from "./component/GetStartedSection";
import { Header } from "../../Navbar";
import { HallSection } from "./component/HallSection";

export const Landing = () => {
  return (
    <>
      <HallSection />
      <FragmentSection />
      <FrindlyTeamSection />
      <PartyCandleSection />
      <OurServicesSection />
      <OurDealSection />
      <Celebrate />
      <PersonsSection />
      <GetStartedSection />
    </>
  );
};
