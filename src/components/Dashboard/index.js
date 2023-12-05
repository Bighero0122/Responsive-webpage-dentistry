import React from "react";
import { FooterBarSection, HeaderBarSection } from "./DashboardComponents";

export const DashboardComponent = () => {
  return (
    <div className="flex flex-col w-full justify-center">
      <HeaderBarSection />
      <FooterBarSection />
    </div>
  );
};
