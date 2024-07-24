"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="w-fit">
      <div className="relative">
        <div className="flex items-center text-rewayWhite bg-rewayBlue rounded-md w-fit px-4 py-1 absolute top-4 right-4 gap-2">
          <FontAwesomeIcon icon={faTag} />
          <p>-40% off</p>
        </div>
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
          width={418}
          height={568}
          className="cursor-zoom-in "
        />
        <div className="bg-[rgba(0,0,0,0.18)] p-1 rounded-full absolute bottom-5 flex gap-2 left-[40%]">
          <div className="h-2 w-2 bg-rewayLightGray rounded-full"></div>
          <div className="h-2 w-2 bg-rewayLightGray rounded-full"></div>
          <div className="h-2 w-2 bg-rewayWhite rounded-full"></div>
          <div className="h-2 w-2 bg-rewayLightGray rounded-full"></div>
        </div>
      </div>
      <div className="flex gap-2 max-w-[418px] flex-wrap mt-2">
        {images.map((image) => (
          <div className="relative">
            <img
              src={image.url}
              width={98}
              height={100}
              className={`cursor-pointer ${
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
