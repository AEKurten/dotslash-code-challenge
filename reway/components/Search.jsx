"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { TagsInput } from "react-tag-input-component";

const Search = () => {
  const [selected, setSelected] = useState(["SUPERBALIST"]);
  return (
    <div className="border-[2px] border-rewayBlue">
      <div className="bg-rewayBlue text-rewayWhite px-6">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronLeft} />
          <p className="text-[16px]">Hide</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[20px] font-suez font-semibold uppercase">
            Search reway
          </p>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="px-6">
        <p>Brands</p>

        <TagsInput
          value={selected}
          onChange={setSelected}
          name="brands"
          placeHolder="Enter brands"
        />
      </div>
    </div>
  );
};

export default Search;
