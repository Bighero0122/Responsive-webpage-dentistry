import React from "react";
import { ServiceCard } from "../../common";
import serviceIcon1 from "../../../assets/images/service_icon1.png";
import serviceIcon2 from "../../../assets/images/service_icon2.png";
import serviceIcon3 from "../../../assets/images/service_icon3.png";

export const ServicesSection = () => {
  return (
    <div className="bg-[#F7F7F7] inline-flex h-auto flex-col items-start gap-[10px] shrink-0 m-0">
      <div className="flex flex-col items-center self-center gap-12 px-[114.5px] py-[59px] lg:px-[114.5px] lg:py-[59px] md:px-[44.5px] md:py-[59px] sm:px-[16px] sm:py-[99px]">
        <p className="w-full text-[#009CE7] text-center font-arkitech text-[32px] font-[500] leading-[40.54px] capitalize">
          Our Services
        </p>
        <div className="grid justify-center lg:justify-center gap-4 grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 md:items-center sm:items-center">
          <ServiceCard
            icon={serviceIcon1}
            field="Holistic Virtual Patient TM"
            content={
              <p>
                Extracts and combines information from CBCT, dental models,
                X-rays and clinical pictures to create a 3D Holistic Virtual
                Patient (HVP) ready for 3D treatment planning.
              </p>
            }
          />
          <ServiceCard
            icon={serviceIcon2}
            field="Automatic AI Diagnosis"
            content={
              <p>
                Performs a complete analysis that assists the dentist in making
                an accurate diagnosis.
              </p>
            }
          />
          <ServiceCard
            icon={serviceIcon3}
            field="Automatic 3D Treatment Plan"
            content={
              <p>
                Generates 3D treatment plans with complete movement steps ready
                for aligner production within 15 minutes, this enabling
                immediate in-office aligner delivery.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};
