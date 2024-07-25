import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Addcart = () => {
  //refactor code to take in props and loop over options to render options
  return (
    <div className="bg-rewayLighterGray flex flex-col p-8 gap-7">
      <div className="flex flex-col">
        <label htmlFor="size" className="uppercase mb-2 text-rewayGrey">
          Size
        </label>
        <select className="py-2 rounded-sm border border-rewayGrey text-rewayGrey px-2">
          <option value="SELECT SIZE">SELECT SIZE</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>
      <div className="flex flex-col text-rewayGrey px-2">
        <label htmlFor="size" className="uppercase mb-2">
          Quantity
        </label>
        <select
          defaultValue="SELECT SIZE"
          className="py-2 rounded-sm border border-rewayGrey text-rewayGrey px-2"
        >
          <option value="8">SELECT QUANTITY</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>

      <button className="uppercase bg-rewayBlue text-rewayWhite py-8 text-3xl flex items-center justify-center gap-4 font-suez font-bold">
        <FontAwesomeIcon icon={faCartShopping} />
        Add to cart
      </button>
    </div>
  );
};

export default Addcart;
