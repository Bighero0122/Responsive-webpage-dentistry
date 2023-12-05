import React from "react";
import { AboutCard } from "../../common";

export const AboutSection = () => {
  return (
    <div
      className="flex flex-col items-center gap-[16px] w-full h-[407px] lg:h-[407px] md:h-auto sm:h-[737px] px-[248px] py-[78px] lg:px-[248px] lg:py-[78px] md:px-[120px] md:py-[77px] sm:px-[21px] sm:py-[76px]"
      id="about"
    >
      <p className="flex text-center text-[#009CE7] font-arkitech text-[32px] leading-[40.54px] font-[500] capitalize">
        About Us
      </p>
      <p className="w-[758px] lg:w-[758px] md:w-full sm:w-[278px] text-[#5C5C5C] text-center font-gt text-[14px] font-normal leading-[21.516px]">
        Modontics applies AI technology to automate orthodontics & dentistry,
        ushering in a future of patient-centric, dentist- driven procedures that
        reduce cost and time spendings.
      </p>
      <div className="flex md:flex-col sm:flex-col items-start gap-[24px]">
        <AboutCard rate="10" content="Dentist gets huge cost savings" />
        <AboutCard rate="100" content="Provider gets huge Productivity boost" />
        <AboutCard
          rate="300"
          content={
            <p>
              Patient gets same-visit
              <br />
              instant aligners
            </p>
          }
        />
      </div>
    </div>
  );
};
