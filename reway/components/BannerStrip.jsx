import Link from "next/link";
import React from "react";

const BannerStrip = () => {
  return (
    <div className="bg-rewayLighterGray py-6 flex justify-between px-14 items-center mb-8">
      <h3 className="ml-24 text-rewayGrey font-semibold uppercase text-[17px] font-suez">
        Avdenture is just around the corner!
      </h3>
      <div className="flex gap-6 items-center">
        {/* Create active/hover state for button */}
        <button className="font-suez border-[3px] px-3 py-1 rounded-[4px] border-rewayBlue uppercase font-semibold text-rewayBlue">
          Find a store
        </button>
        <Link
          href="#"
          className="font-suez text-rewayGrey font-semibold uppercase text-[17px] hover:text-rewayBlue transition-all duration-500"
        >
          Not in South Africa?
        </Link>
      </div>
    </div>
  );
};

export default BannerStrip;
