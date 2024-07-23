import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const Search = () => {
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
    </div>
  );
};

export default Search;
