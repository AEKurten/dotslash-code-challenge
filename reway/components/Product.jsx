import React from "react";
import Imageslider from "./Imageslider";
import Productinfo from "./Productinfo";
import Addcart from "./Addcart";

const Product = () => {
  return (
    <div className="grid grid-cols-8 gap-8">
      <div className="col-span-4">
        <Imageslider />
      </div>
      <div className="col-span-4 flex flex-col gap-4">
        <Productinfo />
        <Addcart />
      </div>
    </div>
  );
};

export default Product;
