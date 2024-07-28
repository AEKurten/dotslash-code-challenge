import { bootData } from "@/constants/data";
import {
  faArrowRight,
  faStoreAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Chip from "./Chip";

const Similarproducts = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredBootId, setHoveredBootId] = useState(null);

  const handleMouseEnter = (bootId) => {
    setHoveredBootId(bootId);
  };

  const handleMouseLeave = () => {
    setHoveredBootId(null);
  };
  return (
    <div>
      <div className="flex items-center my-8 gap-4">
        <p className="min-w-fit uppercase font-suez text-xl">
          more from <span className="text-rewayBlue">boots</span>
        </p>
        <div className="h-[.5px] bg-rewayBlack w-full"></div>
      </div>
      <div className="flex gap-12 flex-wrap">
        {bootData.map((boot) => {
          return (
            <div
              onMouseEnter={() => handleMouseEnter(boot.id)}
              onMouseLeave={handleMouseLeave}
              key={boot.title}
              className="w-[30%] h-fit cursor-pointer max-md:w-full max-lg:w-[45%] hover:border-[4px] transition-all duration-200 hover:bg-rewayLighterGray border-rewayBlue"
            >
              <div className="w-full h-full flex flex-col relative">
                {boot.isMarkedDown && (
                  <Chip
                    text="-40% Off"
                    absolute={true}
                    bgColor="rewayBlue"
                    rightPos={5}
                    topPos={4}
                    textColor="rewayWhite"
                    icon={faTag}
                  />
                )}
                {boot.isLowStock && (
                  <Chip
                    absolute={true}
                    text="Low Stock"
                    textColor="rewayWhite"
                    classes="chipToBottom bgOpacity"
                  />
                )}

                <img src={boot.image} alt="" />

                <div className="flex flex-col gap-2 mt-4 relative p-4">
                  <p
                    className={` font-suez text-lg ${
                      hoveredBootId === boot.id
                        ? "text-rewayBlue"
                        : "text-rewayGrey"
                    }`}
                  >
                    {boot.title}
                  </p>
                  <div className="flex items-center gap-2 text-rewayGrey">
                    <FontAwesomeIcon icon={faStoreAlt} />
                    <p>{boot.brand}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`font-suez text-xl text-rewayBlue`}>
                      R{boot.price}
                    </p>
                    <div
                      className={`flex items-center gap-2 self-end ${
                        hoveredBootId === boot.id
                          ? "text-rewayBlue"
                          : "text-rewayGrey"
                      }`}
                    >
                      <p>View</p>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Similarproducts;
