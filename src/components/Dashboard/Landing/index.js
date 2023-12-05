import React from "react";
import downArrow from "../../../assets/images/down-arrow.png";

export const LandingSection = () => {
  return (
    <div className="flex w-full justify-center z-0">
      <div className="flex flex-col w-full bg-cover object-cover bg-[url('http://localhost:3000/background.png')]">
        <div className="px-[226px] pb-[144px] pt-[168px] lg:px-[226px] lg:pb-[144px] lg:pt-[168px] md:px-[10px] md:pb-[116px] md:pt-[143px] sm:px-[14px] sm:pb-[88px] sm:pt-[117px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col justify-center w-full text-center items-center gap-[24px] self-center shadow-[0_4px_20px_0_rbga(0,0,0,0.3)]">
            <p className="text-[36px] self-stretch font-neuro font-normal leading-[45.608px] text-white">
              Empowering Precision Dentistry
            </p>
            <p className="w-[545px] lg:w-[545px] md:w-full sm:w-full text-white text-center font-gt text-[16px] font-normal leading-[20.27px]">
              AI Innovations for Chairside 3D Diagnosis, Rapid Treatment
              Planning, and One-Hour Prescriptions!
            </p>
          </div>
          <a
            href="#about"
            className="z-0 w-[152px] h-[41px] self-center bg-[#F4C20D] relative"
          >
            <div className="flex items-center gap-[7px] absolute left-[20px] top-[11px]">
              <div className="text-black text-center text-[12px] font-normal leading-[18.443px] tracking-[1.2px]">
                LEARN MORE
              </div>
              <img src={downArrow} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
