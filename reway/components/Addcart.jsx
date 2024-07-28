"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { sizes, quantity } from "@/constants/data";

const Addcart = () => {
  const notify = () => toast.success("Item added to cart!");

  return (
    <div className="bg-rewayLighterGray flex flex-col p-8 gap-7">
      <div className="flex flex-col">
        <label htmlFor="size" className="uppercase mb-2 text-rewayGrey">
          Size
        </label>
        <select className="py-2 rounded-sm border border-rewayGrey text-rewayGrey px-2">
          <option value="SELECT SIZE">SELECT SIZE</option>
          {sizes.map((size) => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col text-rewayGrey">
        <label htmlFor="size" className="uppercase mb-2">
          Quantity
        </label>
        <select
          defaultValue="SELECT SIZE"
          className="py-2 rounded-sm border border-rewayGrey text-rewayGrey px-2"
        >
          <option value="8">SELECT QUANTITY</option>
          {quantity.map((quantity) => (
            <option value={quantity} key={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={notify}
        className="uppercase bg-rewayBlue text-rewayWhite py-8 text-3xl flex items-center justify-center gap-4 font-suez font-bold max-md:text-lg max-lg:text-xl"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Add to cart
      </button>
    </div>
  );
};

export default Addcart;
