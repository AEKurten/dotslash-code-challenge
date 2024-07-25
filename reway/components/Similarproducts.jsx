import { bootData } from "@/constants/data";
import { faArrowRight, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Similarproducts = () => {
  return (
    <div>
      <div className="flex items-center my-8 gap-4">
        <p className="min-w-fit uppercase font-suez font-semibold">
          more from <span className="text-rewayBlue">boots</span>
        </p>
        <div className="h-[.5px] bg-rewayBlack w-full"></div>
      </div>
      <div className="flex gap-12 flex-wrap">
        {bootData.map((boot) => {
          return (
            <div className="w-[30%]  flex flex-col ">
              <img src={boot.image} alt="" />
              <div className="flex flex-col gap-2 mt-4">
                <p className="font-bold font-suez text-lg">{boot.title}</p>
                <div className="flex items-center gap-2 text-rewayGrey">
                  <FontAwesomeIcon icon={faStoreAlt} />
                  <p>{boot.brand}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold font-suez text-xl text-rewayBlue">
                    R{boot.price}
                  </p>
                  <div className="flex items-center gap-2 self-end text-rewayGrey">
                    <p>View</p>
                    <FontAwesomeIcon icon={faArrowRight} />
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
