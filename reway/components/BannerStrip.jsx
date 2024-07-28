import Link from "next/link";
import React from "react";

const BannerStrip = () => {
  return (
    <div className="bg-rewayLighterGray py-6 flex justify-between px-14 items-center mb-8 max-md:py-2 max-md:px-8 max-lg:px-8">
      <h3 className="ml-24 text-rewayGrey uppercase text-[17px] font-suez max-md:ml-0 max-md:text-sm ">
        Avdenture is just around the corner!
      </h3>
      <div className="flex gap-6 items-center max-md:flex-col">
        {/* Create active/hover state for button */}
        <button className="font-suez border-[3px] px-3 py-1 rounded-[4px] border-rewayBlue uppercase text-rewayBlue max-md:text-sm">
          Find a store
        </button>
        <Link
          href="#"
          className="font-suez text-rewayGrey  uppercase text-[17px] max-md:hidden hover:text-rewayBlue transition-all duration-500"
        >
          Not in South Africa?
        </Link>
      </div>
    </div>
  );
};

export default BannerStrip;
