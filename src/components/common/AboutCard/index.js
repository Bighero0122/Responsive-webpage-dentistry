import React from "react";

export const AboutCard = (props) => {
  const { rate, content } = props;
  return (
    <div className="flex flex-col items-center gap-[8px] w-[245px]">
      <div className="flex items-center text-[#009CE7]">
        <p className="text-center font-gt text-[64px] leading-[81.08px] font-[700]">
          {rate}
          <span className="text-[36px] leading-[45.608px]">x</span>
        </p>
      </div>
      <span className="text-[#5C5C5C] text-center font-gt text-[14px] font-normal leading-[21.516px]">
        {content}
      </span>
    </div>
  );
};
