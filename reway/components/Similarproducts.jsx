import { bootData } from "@/constants/data";
import { faArrowRight, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Similarproducts = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="w-44">
          more from <span className="text-rewayBlue">boots</span>
        </p>
        <div className="h-[.5px] bg-rewayBlack w-full"></div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {bootData.map((boot) => {
          return (
            <div className="w-[32%] h-72 flex flex-col">
              <img src={boot.image} alt="" />
              <p>{boot.title}</p>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStoreAlt} />
                <p>{boot.brand}</p>
              </div>
              <p>R{boot.price}</p>
              <div className="flex items-center gap-2 self-end">
                <p>View</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Similarproducts;
