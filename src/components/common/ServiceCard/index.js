import React from "react";

export const ServiceCard = (props) => {
  const { icon, field, content } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={icon} className="w-[60px] h-[60px]" />
      <div className="text-[#009CE7] text-center font-gt text-[24px] font-[700] leading-[30.405px]">
        {field}
      </div>
      <div className="self-stretch text-[#5C5C5C] text-center font-gt text-[14px] font-normal leading-[21.516px]">
        {content}
      </div>
    </div>
  );
};
