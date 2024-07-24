import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt, faTag } from "@fortawesome/free-solid-svg-icons";

const Productinfo = () => {
  return (
    <div className="border-[6px] border-rewayBlue p-4 flex flex-col">
      <p className="uppercase font-suez font-semibold">Dylan Hiker Boot</p>
      <div className="flex items-center gap-2 text-rewayLightGray">
        <FontAwesomeIcon icon={faStoreAlt} />
        <p className="font-suez uppercase font-thin">Superbalist</p>
      </div>
      <div className="grid grid-cols-3 my-4">
        <div className="col-span-1 flex flex-col gap-2">
          <p>Fabrication</p>
          <p>Colour</p>
          <p>Brand</p>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <p>Faux Leather</p>
          <div className="flex items-center gap-2">
            <div className="bg-[#91613D] border-2 rounded-full h-4 w-4"></div>
            <p>Brown</p>
          </div>
          <p>Superbalist</p>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <p>Product Details</p>
        <ul className="list-disc ml-4 mt-2">
          <li>Hiking Boot</li>
          <li>Speed laces</li>
          <li>Lace-up design</li>
          <li>Rubber sole</li>
        </ul>
      </div>
      <div className="self-end flex gap-3">
        <div className="flex items-center text-rewayWhite bg-rewayBlue rounded-md w-fit px-4 py-1  gap-2">
          <FontAwesomeIcon icon={faTag} />
          <p>-40% off</p>
        </div>
        <div>
          <p className="line-through">R599</p>
          <p>R359</p>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
