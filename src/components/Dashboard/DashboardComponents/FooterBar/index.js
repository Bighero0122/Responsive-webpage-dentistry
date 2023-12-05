import React from "react";
import Instagram from "../../../../assets/images/instagram.png";
import WeChat from "../../../../assets/images/wechat.png";

export const FooterBarSection = () => {
  return (
    <div className="flex h-[133px] pl-[99px] lg:pl-[99px] md:p-[21px] sm:p-[21px] pr-[85px] lg:pr-[85px] justify-end items-center self-stretch bg-[#171717]">
      <div className="flex lg:flex md:flex-col sm:flex-col w-full justify-between items-center self-stretch">
        <div className="w-[400px] lg:w-[400px] md:w-[300px] sm:w-[279px] text-center text-white font-gt text-[16px] font-normal leading-[26px] tracking-[0.16px]">
          Copyright © 2023 Modontics. All Rights Reserved.
        </div>
        <div className="flex md:hidden sm:hidden items-center gap-5 w-auto lg:w-auto md:w-[177px] sm:w-[177px] justify-center lg:justify-center md:justify-start sm:justify-start">
          <a href="https://www.instagram.com/">
            <img src={Instagram} className="w-5 h-5" />
          </a>
          <a href="https://www.wechat.com/">
            <img src={WeChat} className="w-5 h-5" />
          </a>
        </div>
        <div className="flex md:hidden sm:hidden w-[400px] lg:w-[400px] md:w-auto sm:w-auto justify-end items-center gap-[5px]">
          <select className="flex text-end bg-transparent focus:outline-none text-white">
            <option value="option1" className="font-gt bg-black">
              English
            </option>
            <option value="option2" className="font-gt bg-black">
              中文（简体）
            </option>
            <option value="option3" className="font-gt bg-black">
              中文（繁體）
            </option>
          </select>
        </div>
        <div className="hidden lg:hidden md:flex sm:flex">
          <div className="flex items-center gap-5 w-auto lg:w-auto md:w-[177px] sm:w-[177px] justify-center lg:justify-center md:justify-start sm:justify-start">
            <a href="https://www.instagram.com/">
              <img src={Instagram} className="w-5 h-5" />
            </a>
            <a href="https://www.wechat.com/">
              <img src={WeChat} className="w-5 h-5" />
            </a>
          </div>
          <div className="flex w-[400px] lg:w-[400px] md:w-auto sm:w-auto justify-end items-center gap-[5px]">
            <select className="flex text-end bg-transparent focus:outline-none text-white">
              <option value="option1" className="font-gt bg-black">
                English
              </option>
              <option value="option2" className="font-gt bg-black">
                中文（简体）
              </option>
              <option value="option3" className="font-gt bg-black">
                中文（繁體）
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
