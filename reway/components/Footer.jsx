"use client";
import { navbar } from "@/constants/data";
import React from "react";
import useMobileCheck from "@/hooks/checkMobile";

const Footer = () => {
  const isMobile = useMobileCheck();
  return (
    <>
      {isMobile && (
        <div className=" bg-[#4A4A4A] text-rewayWhite mt-16 py-10 px-8">
          <div className="flex justify-between">
            {navbar.map((navItems) => {
              return (
                <div
                  className={`col-span-${navItems.spanLength} ${navItems.classes}`}
                  key={navItems.heading}
                >
                  <p className="font-suez font-bold text-xl">
                    {navItems.heading}
                  </p>
                  <div className="flex flex-col mt-8 gap-4 text-[rgba(255,255,2550.5)]">
                    {navItems.items.map((item) => (
                      <a
                        href="#"
                        key={item}
                        className="hover:text-rewayBlue cursor-pointer transition-all duration-300"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-span-2 flex items-center flex-col mt-8">
            <p className="font-suez font-bold text-xl">Follow us!</p>
            <div className="flex mt-8 gap-8">
              <img src="/images/Facebook.svg" className="w-12 cursor-pointer" />
              <img
                src="/images/instagram.svg"
                className="w-12 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="grid grid-cols-4 px-56 bg-[#4A4A4A] text-rewayWhite mt-16 py-10">
          {navbar.map((navItems) => {
            return (
              <div
                className={`col-span-${navItems.spanLength} ${navItems.classes}`}
                key={navItems.heading}
              >
                <p className="font-suez font-bold text-xl">
                  {navItems.heading}
                </p>
                <div className="flex flex-col mt-8 gap-4 text-[rgba(255,255,2550.5)]">
                  {navItems.items.map((item) => (
                    <a
                      href="#"
                      className="hover:text-rewayBlue cursor-pointer transition-all duration-300"
                      key={item}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="col-span-2 flex items-center flex-col ">
            <p className="font-suez font-bold text-xl">Follow us!</p>
            <div className="flex mt-8 gap-8">
              <img src="/images/Facebook.svg" className="w-12 cursor-pointer" />
              <img
                src="/images/instagram.svg"
                className="w-12 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
