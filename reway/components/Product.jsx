import React from "react";
import Imageslider from "./Imageslider";
import Productinfo from "./Productinfo";
import Addcart from "./Addcart";

const Product = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-3">
        <Imageslider />
      </div>
      <div className="col-span-3 flex flex-col gap-4">
        <Productinfo />
        <Addcart />
      </div>
    </div>
  );
};

export default Product;
