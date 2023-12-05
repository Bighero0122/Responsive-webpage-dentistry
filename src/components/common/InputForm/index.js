import React from "react";

export const InputForm = (props) => {
  const { label, name, placeholder, onChange, defaultValue } = props;
  return (
    <div className="flex flex-col items-start gap-[2px] w-[367px] lg:w-[367px] md:w-[320px] sm:w-[289px]">
      <div className="self-start text-white font-gt text-[14px] font-normal">
        {label}
      </div>
      <input
        className="w-full h-[40px] shrink-0 rounded bg-white text-black font-gt text-[16px] font-normal leading-[24.08px] pl-[11.5px] focus:outline-none"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};
