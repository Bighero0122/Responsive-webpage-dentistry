import React from "react";
import { InputForm, MessageForm, SelectForm } from "../../common";

const ContactProps = {
  userInfo: { name: "", email: "", job: "", country: "", message: "" },
  onChange: (e) => {},
  onSubmit: () => {},
};

export const ContactSection = (ContactProps) => {
  const { userInfo, onChange, onSubmit } = ContactProps;
  return (
    <div
      className="flex w-full px-[10px] lg:px-[10px] md:px-[10px] sm:px-[15px] py-[80px] lg:py-[80px] md:py-[80px] sm:py-[36px] justify-center items-center gap-[10px] shrink-0 self-stretch bg-[#009CE7]"
      id="contact"
    >
      <div className="flex w-[489px] lg:w-[489px] md:w-[389px] sm:w-[289px] flex-col items-center gap-6">
        <div className="flex flex-col">
          <p className="text-[#F4C20D] text-center font-gt text-[20px] font-[700] leading-[30px] tracking-[0.1px] uppercase">
            Contact us
          </p>
          <p className="self-stretch text-white text-center font-gt text-[32px] font-normal leading-[40.54px]">
            Let us know your needs
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <InputForm
            label="Name*"
            name="name"
            placeholder=""
            onChange={onChange}
            defaultValue="Elaine"
          />
          <InputForm
            label="Email*"
            name="email"
            placeholder=""
            onChange={onChange}
          />
          <SelectForm label="Job Nature*" name="job" onChange={onChange} />
          <SelectForm label="Country*" name="country" onChange={onChange} />
          <MessageForm label="Message" name="message" onChange={onChange} />
          <button
            onSubmit={onSubmit}
            className="w-[90px] h-[41px] self-center bg-[#F4C20D] text-black text-center text-[12px] font-normal leading-[18.443px] tracking-[1.2px]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
