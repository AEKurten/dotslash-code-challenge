"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "@/public/export";
import { navIcons, navItems } from "@/constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);

  const toggleActiveState = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
      console.log(index);
    }
  };

  return (
    <div className="px-11 py-6 flex items-center justify-between">
      <Image src={logo} width={160} height={40} />
      <div className="flex gap-8">
        {navItems.map((item, index) => (
          <p
            className={`font-nav font-extrabold text-[17px] uppercase hover:cursor-pointer hover:text-rewayBlue transition-all duration-300 ${
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
            icon={icon}
            size="lg"
            className="hover:text-rewayBlue hover:cursor-pointer transition-all duration-300"
          />
        ))}
      </div>
      <div className="flex gap-8 items-center">
        <Link href="#" className="uppercase text-rewayBlue font-bold">
          sign up
        </Link>
        <Link
          href="#"
          className="uppercase text-rewayBlue font-bold border-2 border-rewayBlue px-4 py-2 rounded-[3px]"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
