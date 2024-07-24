import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Addcart = () => {
  //refactor code to take in props and loop over options to render options
  return (
    <div className="bg-rewayLighterGray flex flex-col p-8 gap-7">
      <div className="flex flex-col">
        <label htmlFor="size">Size</label>
        <select
          defaultValue="SELECT SIZE"
          className="py-2 rounded-sm border border-rewayGrey"
        >
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="size">Quantity</label>
        <select
          defaultValue="SELECT SIZE"
          className="py-2 rounded-sm border border-rewayGrey"
        >
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>
      </div>

      <button className="uppercase bg-rewayBlue text-rewayWhite py-8">
        <FontAwesomeIcon icon={faCartShopping} />
        Add to cart
      </button>
    </div>
  );
};

export default Addcart;
