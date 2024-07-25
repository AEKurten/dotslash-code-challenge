"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "./Chip";

//move to the data file
const images = [
  {
    url: "/images/Main-boot.png",
    id: 0,
  },
  {
    url: "/images/Main-boot-5.png",
    id: 1,
  },
  {
    url: "/images/Main-boot-4.png",
    id: 2,
  },
  {
    url: "/images/Main-boot-3.png",
    id: 3,
  },
  {
    url: "/images/Main-boot-2.png",
    id: 4,
  },
];

const Imageslider = () => {
  const [isActive, setIsActive] = useState(2);
  return (
    <div className="w-full">
      <div className="relative ">
        <Chip
          bgColor="rewayBlue"
          icon={faTag}
          text="-40% Off"
          textColor="rewayWhite"
          topPos={5}
          rightPos={5}
          absolute={true}
        />
        <div className="absolute top-[45%] w-full flex justify-between px-8 text-rewayGrey">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="3x"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            size="3x"
            className="cursor-pointer"
          />
        </div>
        <Image
          src={"/images/Main-boot-4.png"}
          width={1920}
          height={1080}
          className="cursor-zoom-in w-full"
        />
        <div className="bg-[rgba(0,0,0,0.18)] p-1 rounded-full absolute bottom-5 flex gap-2 left-[40%]">
          <div className="h-2 w-2 bg-rewayLightGray rounded-full"></div>
          <div className="h-2 w-2 bg-rewayLightGray rounded-full"></div>
          <div className="h-2 w-2 bg-rewayWhite rounded-full"></div>
          <div className="h-2 w-2 bg-rewayLightGray rounded-full"></div>
        </div>
      </div>
      <div className="flex gap-2 w-full flex-wrap mt-2 ">
        {images.map((image) => (
          <div className="relative">
            <img
              src={image.url}
              width={1920}
              height={1080}
              className={`cursor-pointer w-[7.7rem] ${
                isActive == image.id
                  ? `border-2 border-rewayBlue brightness-75`
                  : ``
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
