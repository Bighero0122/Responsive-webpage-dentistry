import React from "react";
import Logo from "../../../../assets/images/logo.PNG";

export const HeaderBarSection = () => {
  return (
    <div className="flex w-full justify-center fixed top-0 z-10">
      <div className="flex w-full h-[70px] bg-black bg-opacity-30 relative backdrop-blur-[2.5px]">
        <div className="flex w-full pl-[48px] lg:pl-[48px] md:pl-[34px] sm:pl-[20px] justify-between items-center absolute right-[25px] top-[14px] lg:right-[25px] lg:top-[14px] md:right-[19px] md:top-[13px] sm:right-[12px] sm:top-[12px]">
          <a href="#root" className="flex gap-[9px] items-center w-[228px]">
            <img
              src={Logo}
              className="w-[37px] h-[41px] lg:w-[37px] lg:h-[41px] md:w-[37px] md:h-[41px] sm:w-[27px] sm:h-[29.919px] shrink-0"
            />
            <span className="text-[#fff] text-[18px] lg:text-[18px] md:text-[14px] sm:text-[14px] font-[500] leading-[23.336px] uppercase font-arkitech">
              modontics
            </span>
          </a>
          <div className="flex items-center gap-[14px]">
            <select className="flex bg-transparent focus:outline-none text-white md:hidden sm:hidden">
              <option value="option1" className="font-gt bg-black">
                EN
              </option>
              <option value="option2" className="font-gt bg-black">
                CH
              </option>
            </select>
            <a
              href={"#contact"}
              className="flex w-[127px] lg:w-[127px] md:w-[108px] sm:w-[108px] h-[41px] items-center justify-center gap-[10px] bg-[#1FA7E9] text-[#000] text-center text-[12px] font-normal leading-[18.443px] tracking-[1.2px]"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
