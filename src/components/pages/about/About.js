import React from "react";
import { AboutUS } from "./component/AboutUS";
import { ChooseUs } from "./component/ChooseUs";

export const About = () => {
  return (
    <>
      <div className="menu_banner position-relative">
        <div className="our_service_head">
          <h1>About Us</h1>
        </div>
      </div>
      <AboutUS />
      <div className="bg-light my-5 p-5">
        <ChooseUs />
      </div>
    </>
  );
};
