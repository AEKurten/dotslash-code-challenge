"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "@/public/export";
import { navIcons, navItems } from "@/constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useMobileCheck from "@/hooks/checkMobile";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);
  const isMobile = useMobileCheck();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures we only try rendering after mounting
  }, []);

  if (!isClient) return null; // Avoid rendering on the server

  const toggleActiveState = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div className="px-11 py-6 flex items-center justify-between">
      {isMobile && (
        <div className="flex items-center justify-between w-full">
          <FontAwesomeIcon icon={faBars} size="2x" />
          <Image src={logo} width={120} height={40} />
        </div>
      )}
      {!isMobile && (
        <>
          <Image src={logo} width={160} height={40} />
          <div className="flex gap-8 ">
            {navItems.map((item, index) => (
              <p
                key={item}
                className={`font-suez font-extrabold text-[17px] uppercase hover:cursor-pointer hover:text-rewayBlue transition-all duration-300 ${
                  isActive === index ? `text-rewayBlue` : ``
                }`}
                onClick={() => toggleActiveState(index)}
              >
                {item}
              </p>
            ))}
          </div>
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
    </div>
  );
};

export default Navbar;
