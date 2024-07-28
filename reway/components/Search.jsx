"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { TagsInput } from "react-tag-input-component";
import ReactSlider from "react-slider";

const Search = () => {
  const [selected, setSelected] = useState(["SUPERBALIST", "Mango"]);
  return (
    <div className="border-[2px] border-rewayBlue">
      <div className="bg-rewayBlue text-rewayWhite p-5">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronLeft} />
          <p className="text-[16px] font-body font-thin">Hide</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[20px] font-suez  uppercase">Search reway</p>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div>
          <label className="font-body uppercase text-rewayGrey">Brands</label>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="brands"
            placeHolder="Enter brands"
          />
        </div>
        <div>
          <label
            htmlFor="Colour"
            className="font-body uppercase text-rewayGrey"
          >
            Colour
          </label>
          <select
            name="itemColour"
            id="colour"
            className="w-full border border-rewayLightGray rounded-sm p-2 text-rewayGrey"
          >
            <option value="Yellow">SELECT COLOUR</option>
            <option value="Yellow">Yellow</option>
            <option value="Yellow">Blue</option>
          </select>
        </div>
        <div className="w-full ">
          <label htmlFor="pricing">Pricing</label>
          {/* add price slider */}
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[50, 3500]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            pearling
            minDistance={10}
          />
        </div>
        {/* add toast notifcations and perhaps email.js */}
        <button className="bg-rewayBlue text-rewayWhite py-4 w-2/3 self-center flex gap-2 items-center justify-center font-suez uppercase text-xl">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
