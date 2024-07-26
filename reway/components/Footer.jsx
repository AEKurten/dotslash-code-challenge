import { navbar } from "@/constants/data";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 px-56 bg-[#4A4A4A] text-rewayWhite mt-16 py-10">
      {navbar.map((navItems) => {
        return (
          <div
            className={`col-span-${navItems.spanLength} ${navItems.classes}`}
          >
            <p className="font-suez font-bold text-xl">{navItems.heading}</p>
            <div className="flex flex-col mt-8 gap-4 text-[rgba(255,255,2550.5)]">
              {navItems.items.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        );
      })}
      <div className="col-span-2 flex items-center flex-col ">
        <p className="font-suez font-bold text-xl">Follow us!</p>
        <div className="flex mt-8 gap-8">
          <img src="/images/Facebook.svg" className="w-12" />
          <img src="/images/instagram.svg" className="w-12" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
