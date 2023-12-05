import React from "react";
import { LandingSection } from "./Landing";
import { AboutSection } from "./AboutUs";
import { ServicesSection } from "./ServicesComponent";
import { FooterBarSection, HeaderBarSection } from "./DashboardComponents";

export const DashboardComponent = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      <HeaderBarSection />
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      <FooterBarSection />
    </div>
  );
};
