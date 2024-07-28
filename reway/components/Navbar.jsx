"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "@/public/export";
import { navIcons, navItems } from "@/constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useMobileCheck from "@/hooks/checkMobile";
import useMidDeviceCheck from "@/hooks/checkMidDevice";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const isMobile = useMobileCheck();
  const isMidDevice = useMidDeviceCheck();

  const toggleActiveState = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div className="px-11 py-6 flex items-center justify-between relative">
      {isMobile && (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-full">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
            />
            <Image src={logo} width={120} height={40} alt="logo" />
          </div>
          {isMobileMenuActive && (
            <div className=" flex-col absolute left-16 -bottom-80 bg-rewayWhite p-4 rounded-md z-[1000]">
              {navItems.map((item, index) => (
                <p
                  key={item}
                  className={`font-suez font-semibold text-[17px] uppercase hover:cursor-pointer mt-4 hover:text-rewayBlue transition-all duration-300 ${
                    isActive === index ? `text-rewayBlue` : ``
                  }`}
                  onClick={() => toggleActiveState(index)}
                >
                  {item}
                  <hr />
                </p>
              ))}
              <div className="flex gap-8 mt-6">
                {navIcons.map((icon) => (
                  <FontAwesomeIcon
                    key={icon}
                    icon={icon}
                    size="lg"
                    className="hover:text-rewayBlue hover:cursor-pointer transition-all duration-300"
                  />
                ))}
              </div>
              <div className="flex gap-8 items-center mt-8">
                {/* Create active/hover states */}
                <Link
                  href="#"
                  className="uppercase text-rewayBlue font-bold font-suez"
                >
                  sign up
                </Link>
                <Link
                  href="#"
                  className="uppercase text-rewayBlue font-bold border-2 border-rewayBlue px-4 py-2 rounded-[3px] font-suez"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      {!isMobile && (
        <>
          <Image src={logo} width={160} height={40} alt="logo" />
          <div className="flex gap-8 ">
            {navItems.map((item, index) => (
              <p
                key={item}
                className={`font-suez font-semibold text-[17px] uppercase hover:cursor-pointer hover:text-rewayBlue transition-all duration-300 ${
                  isActive === index ? `text-rewayBlue` : ``
                }`}
                onClick={() => toggleActiveState(index)}
              >
                {item}
              </p>
            ))}
          </div>
          {isMidDevice && (
            <div className="flex gap-8">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="lg"
                className="hover:text-rewayBlue hover:cursor-pointer transition-all duration-300"
              />
            </div>
          )}
          {!isMidDevice && (
            <>
              <div className="flex gap-8">
                {navIcons.map((icon) => (
                  <FontAwesomeIcon
                    key={icon}
                    icon={icon}
                    size="lg"
                    className="hover:text-rewayBlue hover:cursor-pointer transition-all duration-300"
                  />
                ))}
              </div>
              <div className="flex gap-8 items-center">
                {/* Create active/hover states */}
                <Link
                  href="#"
                  className="uppercase text-rewayBlue font-bold font-suez"
                >
                  sign up
                </Link>
                <Link
                  href="#"
                  className="uppercase text-rewayBlue font-bold border-2 border-rewayBlue px-4 py-2 rounded-[3px] font-suez"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
